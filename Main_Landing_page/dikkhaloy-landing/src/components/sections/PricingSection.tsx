"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { Check, Users, TrendingDown } from "lucide-react";

/* ── Price calculation ─────────────────────────────── */
function calculatePrice(students: number): number {
  if (students <= 50) return 500;
  let total = 500;
  const extra = students - 50;
  if (extra <= 50)        { total += extra * 10; }
  else if (extra <= 150)  { total += 50*10 + (extra-50)*8; }
  else if (extra <= 450)  { total += 50*10 + 100*8 + (extra-150)*7; }
  else                    { total += 50*10 + 100*8 + 300*7 + (extra-450)*5; }
  return total;
}

function getBreakdown(students: number) {
  const rows: { label: string; amount: number }[] = [];
  rows.push({ label: `প্রথম ৫০ জন (Flat)`, amount: 500 });
  if (students > 50)  rows.push({ label: `৫১–${Math.min(students,100)} জন × ৳১০`,  amount: Math.min(students-50,50)*10 });
  if (students > 100) rows.push({ label: `১০১–${Math.min(students,200)} জন × ৳৮`, amount: Math.min(students-100,100)*8 });
  if (students > 200) rows.push({ label: `২০১–${Math.min(students,500)} জন × ৳৭`, amount: Math.min(students-200,300)*7 });
  if (students > 500) rows.push({ label: `৫০১+ জন × ৳৫`,                           amount: (students-500)*5 });
  return rows;
}

const slabs = [
  { range: "১–৫০",   rate: "Flat ৳৫০০/মাস",           color: "bg-green-50 text-green-700 border-green-100" },
  { range: "৫১–১০০", rate: "অতিরিক্ত ৳১০/শিক্ষার্থী",  color: "bg-blue-50 text-blue-700 border-blue-100" },
  { range: "১০১–২০০",rate: "অতিরিক্ত ৳৮/শিক্ষার্থী",   color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
  { range: "২০১–৫০০",rate: "অতিরিক্ত ৳৭/শিক্ষার্থী",   color: "bg-purple-50 text-purple-700 border-purple-100" },
  { range: "৫০১+",   rate: "অতিরিক্ত ৳৫/শিক্ষার্থী",   color: "bg-rose-50 text-rose-700 border-rose-100" },
];

const included = [
  "Student & Teacher Management", "Digital Attendance",
  "Exam & Result System",          "Fee Collection & Finance",
  "Online Admission",              "Institution Website",
  "Guardian Portal",               "Notice & Communication",
  "Reports & Analytics",           "Onboarding Support",
];

/* Slider max — dynamic: expands with student count */
const INITIAL_MAX = 500;
const EXPAND_STEP  = 500;

export default function PricingSection() {
  const [students, setStudents] = useState(150);
  const [sliderMax, setSliderMax] = useState(INITIAL_MAX);
  const [annual, setAnnual] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const monthly = useMemo(() => calculatePrice(students), [students]);
  const annually = Math.round((monthly * 10) / 12);
  const displayPrice = annual ? annually : monthly;
  const breakdown = getBreakdown(students);
  const perStudent = students > 0 ? (monthly / students).toFixed(1) : "0";

  /* When slider nears max, expand it */
  const handleSlider = useCallback((val: number) => {
    setStudents(val);
    if (val >= sliderMax - 10) {
      setSliderMax((m) => m + EXPAND_STEP);
    }
  }, [sliderMax]);

  /* Manual input — unlimited */
  const handleInput = useCallback((raw: string) => {
    const v = parseInt(raw) || 0;
    const clamped = Math.max(1, v);
    setStudents(clamped);
    if (clamped > sliderMax) setSliderMax(clamped + EXPAND_STEP);
  }, [sliderMax]);

  /* Slider thumb percentage for visual */
  const pct = Math.min(100, (students / sliderMax) * 100);

  return (
    <section id="pricing" className="section-pad relative overflow-hidden bg-white">
      <div className="absolute inset-0 pat-arcs" style={{ opacity:1 }} />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-green-100 text-green-700 mb-4">মূল্য তালিকা</span>
          <h2 className="section-heading">
            আপনার প্রতিষ্ঠানের আকার অনুযায়ী{" "}
            <span className="gradient-text">সাশ্রয়ী মূল্য</span>
          </h2>
          <p className="section-subheading">প্রতি শিক্ষার্থী হিসেবে pay করুন। বেশি শিক্ষার্থী, কম rate।</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* ── Calculator ── */}
          <div
            className="relative rounded-2xl p-[2px] overflow-hidden"
            style={{ background: "conic-gradient(from 0deg, transparent 0deg 270deg, #2563eb99 270deg 360deg)", animation: "spin-cw 5s linear infinite" }}
          >
            <div className="bg-white rounded-[14px] p-6 lg:p-8">
              <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
                <Users size={18} className="text-blue-600" /> মূল্য Calculator
              </h3>

              {/* Student count */}
              <div className="mb-7">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">শিক্ষার্থীর সংখ্যা</label>
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="number"
                      value={students}
                      onChange={(e) => handleInput(e.target.value)}
                      className="w-24 text-center border-2 border-blue-200 focus:border-blue-500 rounded-xl py-1.5 text-sm font-bold text-blue-600 focus:outline-none transition-colors"
                      min={1}
                      aria-label="শিক্ষার্থী সংখ্যা"
                    />
                    <TrendingDown size={14} className={`transition-opacity ${students > 500 ? "text-green-500 opacity-100" : "opacity-0"}`} />
                  </div>
                </div>

                {/* Custom styled slider */}
                <div className="relative">
                  <input
                    type="range"
                    min={1}
                    max={sliderMax}
                    value={Math.min(students, sliderMax)}
                    onChange={(e) => handleSlider(parseInt(e.target.value))}
                    className="w-full"
                    aria-label="শিক্ষার্থী সংখ্যা slider"
                  />
                  {/* Dynamic label on thumb */}
                  <div className="absolute -top-7 text-[10px] font-bold text-blue-600 pointer-events-none transition-all"
                    style={{ left: `calc(${pct}% - 16px)` }}>
                    {students.toLocaleString()}
                  </div>
                </div>
                {/* Range ticks */}
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>১</span>
                  <span>{(sliderMax * 0.25).toFixed(0)}</span>
                  <span>{(sliderMax * 0.5).toFixed(0)}</span>
                  <span>{(sliderMax * 0.75).toFixed(0)}</span>
                  <span>{sliderMax}+</span>
                </div>
                <p className="text-[10px] text-blue-500 mt-1 text-right font-medium">
                  💡 slider আরও বাড়ালে automatically extend হবে
                </p>
              </div>

              {/* Per-student insight */}
              <div className="flex items-center justify-between bg-blue-50 rounded-xl px-4 py-2.5 mb-5 border border-blue-100">
                <span className="text-xs text-gray-600">প্রতি শিক্ষার্থী খরচ</span>
                <span className="text-sm font-bold text-blue-700">৳{perStudent}/মাস</span>
              </div>

              {/* Billing toggle */}
              <div className="flex items-center justify-center gap-2 mb-6 bg-gray-50 rounded-xl p-2">
                <button onClick={() => setAnnual(false)} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${!annual ? "bg-white shadow text-blue-600" : "text-gray-400"}`}>মাসিক</button>
                <button onClick={() => setAnnual(true)}  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${annual ? "bg-white shadow text-blue-600" : "text-gray-400"}`}>
                  বার্ষিক <span className="bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded-full">২ মাস ফ্রি</span>
                </button>
              </div>

              {/* Price display */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 text-white text-center mb-5 shadow-lg shadow-blue-200">
                <div className="text-sm text-blue-200 mb-1">আনুমানিক মাসিক খরচ</div>
                <div className="text-5xl font-black mb-1 tabular-nums">৳{displayPrice.toLocaleString("en")}</div>
                <div className="text-blue-200 text-sm">{annual ? "বার্ষিক billing (প্রতি মাস হিসেবে)" : "মাসিক billing"}</div>
                {annual && (
                  <div className="mt-2 bg-green-500/20 border border-green-400/30 rounded-xl p-2">
                    <span className="text-green-300 text-xs">বার্ষিক: ৳{(monthly*10).toLocaleString("en")}/বছর (২ মাস বিনামূল্যে)</span>
                  </div>
                )}
              </div>

              {/* Breakdown */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-5">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">হিসাব বিস্তারিত</h4>
                <div className="space-y-1.5">
                  {breakdown.map((row) => (
                    <div key={row.label} className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">{row.label}</span>
                      <span className="text-xs font-semibold text-gray-800">৳{row.amount.toLocaleString("en")}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-2 flex justify-between">
                    <span className="text-sm font-semibold text-gray-900">মোট</span>
                    <span className="text-sm font-bold text-blue-600">৳{monthly.toLocaleString("en")}/মাস</span>
                  </div>
                </div>
              </div>

              <a href="#trial" className="btn-primary w-full justify-center">বিনামূল্যে Trial শুরু করুন</a>
            </div>
          </div>

          {/* ── Features + slab ── */}
          <div className="space-y-5">
            <div
              className="relative rounded-2xl p-[2px] overflow-hidden"
              style={{ background: "conic-gradient(from 360deg, transparent 0deg 270deg, #16a34a77 270deg 360deg)", animation: "spin-ccw 5s linear infinite" }}
            >
              <div className="bg-white rounded-[14px] p-6">
                <h4 className="font-bold text-gray-900 mb-4">সব plan-এ অন্তর্ভুক্ত</h4>
                <div className="grid grid-cols-1 gap-2">
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
            </div>

            {/* Slab table */}
            <div className="card p-5">
              <h4 className="font-bold text-gray-900 mb-4 text-sm">মূল্য কাঠামো</h4>
              <div className="space-y-1.5">
                {slabs.map((s) => (
                  <div key={s.range} className={`flex items-center justify-between rounded-xl px-3 py-2.5 border text-xs ${s.color}`}>
                    <span className="font-semibold">{s.range} জন</span>
                    <span className="font-bold">{s.rate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom domain */}
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
