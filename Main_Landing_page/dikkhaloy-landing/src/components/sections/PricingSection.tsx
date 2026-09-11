"use client";

import { useState, useMemo } from "react";
import { MessageCircle, Phone, Send, Check } from "lucide-react";

function calculatePrice(students: number): number {
  if (students <= 50) return 500;
  let total = 500;
  const extra = students - 50;
  if (extra <= 50) {
    total += extra * 10;
  } else if (extra <= 150) {
    total += 50 * 10;
    total += (extra - 50) * 8;
  } else if (extra <= 450) {
    total += 50 * 10;
    total += 100 * 8;
    total += (extra - 150) * 7;
  } else {
    total += 50 * 10;
    total += 100 * 8;
    total += 300 * 7;
    total += (extra - 450) * 5;
  }
  return total;
}

function getBreakdown(students: number) {
  const rows: { label: string; amount: number }[] = [];
  rows.push({ label: `প্রথম ৫০ জন (Flat)`, amount: 500 });
  if (students > 50) {
    const s51to100 = Math.min(students - 50, 50);
    rows.push({ label: `${51}–${50 + s51to100} জন × ৳১০`, amount: s51to100 * 10 });
  }
  if (students > 100) {
    const s101to200 = Math.min(students - 100, 100);
    rows.push({ label: `${101}–${100 + s101to200} জন × ৳৮`, amount: s101to200 * 8 });
  }
  if (students > 200) {
    const s201to500 = Math.min(students - 200, 300);
    rows.push({ label: `${201}–${200 + s201to500} জন × ৳৭`, amount: s201to500 * 7 });
  }
  if (students > 500) {
    const s501plus = students - 500;
    rows.push({ label: `${501}+ জন × ৳৫`, amount: s501plus * 5 });
  }
  return rows;
}

const slabs = [
  { range: "১–৫০", rate: "Flat ৳৫০০/মাস" },
  { range: "৫১–১০০", rate: "অতিরিক্ত ৳১০/শিক্ষার্থী" },
  { range: "১০১–২০০", rate: "অতিরিক্ত ৳৮/শিক্ষার্থী" },
  { range: "২০১–৫০০", rate: "অতিরিক্ত ৳৭/শিক্ষার্থী" },
  { range: "৫০১+", rate: "অতিরিক্ত ৳৫/শিক্ষার্থী" },
];

const included = [
  "Student & Teacher Management",
  "Digital Attendance",
  "Exam & Result System",
  "Fee Collection & Finance",
  "Online Admission",
  "Institution Website",
  "Guardian Portal",
  "Notice & Communication",
  "Reports & Analytics",
  "Onboarding Support",
];

export default function PricingSection() {
  const [students, setStudents] = useState(150);
  const [annual, setAnnual] = useState(false);

  const monthly = useMemo(() => calculatePrice(students), [students]);
  const annually = Math.round((monthly * 10) / 12); // 2 months free
  const displayPrice = annual ? annually : monthly;
  const breakdown = getBreakdown(students);

  return (
    <section id="pricing" className="section-pad bg-white relative">
      <div className="absolute inset-0 geo-pattern opacity-30" />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-green-100 text-green-700 mb-4">মূল্য তালিকা</span>
          <h2 className="section-heading">
            আপনার প্রতিষ্ঠানের আকার অনুযায়ী{" "}
            <span className="gradient-text">সাশ্রয়ী মূল্য</span>
          </h2>
          <p className="section-subheading">
            প্রতি শিক্ষার্থী হিসেবে pay করুন। বেশি শিক্ষার্থী, কম rate।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Calculator */}
          <div className="card p-6 lg:p-8">
            <h3 className="font-bold text-gray-900 text-lg mb-5">মূল্য Calculator</h3>

            {/* Student slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700" htmlFor="student-count">
                  শিক্ষার্থীর সংখ্যা
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    id="student-count"
                    value={students}
                    onChange={(e) => setStudents(Math.max(1, Math.min(2000, parseInt(e.target.value) || 1)))}
                    className="w-20 text-center border border-gray-200 rounded-lg py-1.5 text-sm font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    min={1}
                    max={2000}
                  />
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={1000}
                value={students}
                onChange={(e) => setStudents(parseInt(e.target.value))}
                className="w-full"
                aria-label="শিক্ষার্থী সংখ্যা"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>১</span>
                <span>৫০</span>
                <span>২০০</span>
                <span>৫০০</span>
                <span>১০০০</span>
              </div>
            </div>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-3 mb-6 bg-gray-50 rounded-xl p-3">
              <button
                onClick={() => setAnnual(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  !annual ? "bg-white shadow text-blue-600" : "text-gray-500"
                }`}
              >
                মাসিক
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  annual ? "bg-white shadow text-blue-600" : "text-gray-500"
                }`}
              >
                বার্ষিক
                <span className="bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-full">২ মাস ফ্রি</span>
              </button>
            </div>

            {/* Price display */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 text-white text-center mb-5">
              <div className="text-sm text-blue-200 mb-1">আনুমানিক মাসিক খরচ</div>
              <div className="text-4xl font-black mb-1">
                ৳{displayPrice.toLocaleString("en")}
              </div>
              <div className="text-blue-200 text-sm">
                {annual ? "বার্ষিক billing (প্রতি মাস হিসেবে)" : "মাসিক billing"}
              </div>
              {annual && (
                <div className="mt-2 bg-green-500/20 border border-green-400/30 rounded-xl p-2">
                  <span className="text-green-300 text-xs">
                    বার্ষিক: ৳{(monthly * 10).toLocaleString("en")}/বছর (২ মাস বিনামূল্যে)
                  </span>
                </div>
              )}
            </div>

            {/* Breakdown */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">হিসাব বিস্তারিত</h4>
              <div className="space-y-1.5">
                {breakdown.map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">{row.label}</span>
                    <span className="text-xs font-semibold text-gray-800">৳{row.amount.toLocaleString("en")}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-900">মোট</span>
                  <span className="text-sm font-bold text-blue-600">৳{monthly.toLocaleString("en")}/মাস</span>
                </div>
              </div>
            </div>

            <a href="#trial" className="btn-primary w-full justify-center mt-5">
              বিনামূল্যে Trial শুরু করুন
            </a>
          </div>

          {/* Included features + slab table */}
          <div className="space-y-5">
            {/* Included */}
            <div className="card p-6">
              <h4 className="font-bold text-gray-900 mb-4">সব plan-এ অন্তর্ভুক্ত</h4>
              <div className="space-y-2">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-green-600" strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Slab table */}
            <div className="card p-5">
              <h4 className="font-bold text-gray-900 mb-4 text-sm">মূল্য কাঠামো</h4>
              <div className="overflow-hidden rounded-xl border border-gray-100">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-2.5 px-3 text-xs text-gray-500 font-semibold">শিক্ষার্থী</th>
                      <th className="text-right py-2.5 px-3 text-xs text-gray-500 font-semibold">মূল্য</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {slabs.map((s) => (
                      <tr key={s.range} className="hover:bg-blue-50/30 transition-colors">
                        <td className="py-2.5 px-3 text-gray-700 font-medium text-xs">{s.range}</td>
                        <td className="py-2.5 px-3 text-right text-blue-600 font-semibold text-xs">{s.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Custom domain addon */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Custom Domain</h4>
                  <p className="text-gray-500 text-xs">নিজের domain connect করতে চাইলে একবারের setup সহায়তা।</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-bold text-blue-700">৳২,৫০০</div>
                  <div className="text-xs text-gray-400">এককালীন</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
