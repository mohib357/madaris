"use client";

/**
 * ModuleShowcase — Interactive Demo
 *
 * প্রিভিউ প্যানেলে সব মডিউলের কার্ড স্ট্যাক করা থাকে।
 * বাম পাশে ক্লিক করলে সেই মডিউলের কার্ড z-index অনুযায়ী
 * সবার উপরে চলে আসে — অন্য কার্ডগুলো পেছনে স্ট্যাক হিসেবে দেখায়।
 */

import { useState } from "react";
import { Wallet, Users, ClipboardList, Award, UserPlus, Globe, Building2, UserCog } from "lucide-react";

const modules = [
  {
    id: "accounting",
    label: "Accounting",
    icon: Wallet,
    description: "সম্পূর্ণ আর্থিক ব্যবস্থাপনা এক জায়গায়। ফি সংগ্রহ থেকে বেতন প্রদান পর্যন্ত।",
    features: ["Fee Collection", "Due Tracking", "Salary Management", "Expense Record", "Financial Reports", "Online Payment"],
    mockupBg: "from-green-600 to-emerald-700",
    accentColor: "bg-green-500",
    mockupLines: [
      { label: "মাসিক আয়", value: "৳ ২,৪৫,০০০", color: "text-green-300" },
      { label: "বকেয়া", value: "৳ ৩৮,৫০০", color: "text-red-300" },
      { label: "আজ সংগ্রহ", value: "৳ ৪৮,৫০০", color: "text-yellow-300" },
    ],
  },
  {
    id: "students",
    label: "Student",
    icon: Users,
    description: "শিক্ষার্থীর সম্পূর্ণ একাডেমিক ও ব্যক্তিগত তথ্য সুরক্ষিতভাবে ম্যানেজ করুন।",
    features: ["Student Profile", "Class & Section", "Document Upload", "Transfer Certificate", "ID Card", "Parent Info"],
    mockupBg: "from-blue-600 to-indigo-700",
    accentColor: "bg-blue-500",
    mockupLines: [
      { label: "মোট শিক্ষার্থী", value: "১,২৪৮", color: "text-blue-300" },
      { label: "সক্রিয়", value: "১,২৩৫", color: "text-green-300" },
      { label: "নতুন ভর্তি", value: "৪৮", color: "text-yellow-300" },
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: ClipboardList,
    description: "ডিজিটাল হাজিরা রেকর্ড করুন। Teacher ও Student উভয়ের জন্য।",
    features: ["Daily Attendance", "Period-wise", "Monthly Report", "Absent Alert", "SMS Notification", "Statistics"],
    mockupBg: "from-cyan-600 to-teal-700",
    accentColor: "bg-cyan-500",
    mockupLines: [
      { label: "আজকের উপস্থিতি", value: "৯৪.৮%", color: "text-cyan-300" },
      { label: "অনুপস্থিত", value: "৬৩ জন", color: "text-red-300" },
      { label: "মাসিক গড়", value: "৯২.৩%", color: "text-green-300" },
    ],
  },
  {
    id: "exam",
    label: "Exam & Result",
    icon: Award,
    description: "পরীক্ষা সেটআপ থেকে রেজাল্ট প্রকাশ পর্যন্ত সম্পূর্ণ অটোমেটেড।",
    features: ["Exam Setup", "Marks Entry", "Auto GPA/Grade", "Marksheet", "Result Publish", "Guardian View"],
    mockupBg: "from-purple-600 to-violet-700",
    accentColor: "bg-purple-500",
    mockupLines: [
      { label: "পরীক্ষা সংখ্যা", value: "৪টি", color: "text-purple-300" },
      { label: "পাসের হার", value: "৯৮.৫%", color: "text-green-300" },
      { label: "GPA 5", value: "৩৪ জন", color: "text-yellow-300" },
    ],
  },
  {
    id: "admission",
    label: "Admission",
    icon: UserPlus,
    description: "অনলাইনে আবেদন নিন, যাচাই করুন, এবং ভর্তি সম্পন্ন করুন।",
    features: ["Online Application", "Document Upload", "Verification", "Fee Payment", "Auto Student Add", "Admission Report"],
    mockupBg: "from-orange-600 to-amber-600",
    accentColor: "bg-orange-500",
    mockupLines: [
      { label: "মোট আবেদন", value: "২৩৪", color: "text-orange-300" },
      { label: "যাচাই হয়েছে", value: "১৮৭", color: "text-green-300" },
      { label: "ভর্তি সম্পন্ন", value: "১৫৬", color: "text-yellow-300" },
    ],
  },
  {
    id: "website",
    label: "Website",
    icon: Globe,
    description: "প্রতিষ্ঠানের নিজস্ব professional website। নিজস্ব domain বা subdomain।",
    features: ["Custom Domain", "Multiple Themes", "Notice Board", "Gallery", "Admission Form", "Contact Page"],
    mockupBg: "from-rose-600 to-pink-600",
    accentColor: "bg-rose-500",
    mockupLines: [
      { label: "Website Visits", value: "৩,৪৫৬", color: "text-rose-300" },
      { label: "Online Admissions", value: "৮৭", color: "text-green-300" },
      { label: "Active Theme", value: "Islamic", color: "text-yellow-300" },
    ],
  },
  {
    id: "boarding",
    label: "লিল্লাহ Boarding",
    icon: Building2,
    description: "মাদরাসার আবাসিক ব্যবস্থাপনা। ছাত্রাবাস, খাবার, হিফজ শিক্ষার্থী।",
    features: ["Hostel Management", "Meal Tracking", "Boarding Fees", "Resident Record", "Lillah Fund", "Inventory"],
    mockupBg: "from-teal-700 to-green-800",
    accentColor: "bg-teal-500",
    mockupLines: [
      { label: "আবাসিক শিক্ষার্থী", value: "৩৪৫", color: "text-teal-300" },
      { label: "হিফজ শিক্ষার্থী", value: "৮৭", color: "text-green-300" },
      { label: "লিল্লাহ ফান্ড", value: "৳ ১,২০,০০০", color: "text-yellow-300" },
    ],
  },
  {
    id: "hr",
    label: "HR & Payroll",
    icon: UserCog,
    description: "শিক্ষক-কর্মচারীর তথ্য, বেতন, ছুটি ও performance ব্যবস্থাপনা।",
    features: ["Staff Profile", "Salary Setup", "Leave Management", "Payslip", "Attendance Sync", "Performance"],
    mockupBg: "from-slate-600 to-gray-700",
    accentColor: "bg-slate-500",
    mockupLines: [
      { label: "মোট কর্মচারী", value: "৮৬", color: "text-slate-300" },
      { label: "এই মাসে বেতন", value: "৳ ৪,৮৫,০০০", color: "text-green-300" },
      { label: "ছুটির আবেদন", value: "৭টি", color: "text-yellow-300" },
    ],
  },
];

/* Stacked card offsets — cards behind the active one */
const STACK_OFFSETS = [
  { y: 0,  x: 0,   scale: 1,     zIndex: 30, opacity: 1    },   // active (top)
  { y: 10, x: 6,   scale: 0.97,  zIndex: 20, opacity: 0.75 },   // 2nd
  { y: 18, x: 11,  scale: 0.94,  zIndex: 10, opacity: 0.50 },   // 3rd
  { y: 24, x: 15,  scale: 0.91,  zIndex: 5,  opacity: 0.30 },   // 4th (hint)
];

export default function ModuleShowcase() {
  const [active, setActive] = useState("accounting");
  const activeIdx   = modules.findIndex((m) => m.id === active);
  // Build the visible stack: active first, then next few in order
  const stackOrder  = modules.map((_, i) => (activeIdx + i) % modules.length).slice(0, 4);

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      {/* Islamic arabesque background pattern */}
      <div className="absolute inset-0 islamic-arabesque-pattern pointer-events-none opacity-80" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-indigo-100 text-indigo-700 mb-4">Interactive Demo</span>
          <h2 className="section-heading">প্রতিটি Module বিস্তারিত দেখুন</h2>
          <p className="section-subheading">
            বাম পাশ থেকে module বেছে নিন — ডান পাশে preview দেখুন
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 bg-gray-50 rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-card">

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-1.5">
            {modules.map((m) => {
              const isActive = active === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl text-left
                    transition-all duration-200 group relative overflow-hidden
                    ${isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-100"
                    }
                  `}
                  aria-pressed={isActive}
                >
                  {/* active left accent bar */}
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 bg-white/40 rounded-r-full" />
                  )}
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors
                    ${isActive ? "bg-white/20" : "bg-gray-100 group-hover:bg-blue-100"}
                  `}>
                    <m.icon size={16} className={isActive ? "text-white" : "text-gray-500 group-hover:text-blue-600"} />
                  </div>
                  <span className="font-medium text-sm">{m.label}</span>
                  {/* Right arrow hint */}
                  {isActive && (
                    <span className="ml-auto text-white/60 text-xs">▶</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Stacked Preview Panel ── */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Stack container — needs extra bottom padding for stacked cards */}
            <div className="relative" style={{ height: "290px" }}>
              {stackOrder.slice().reverse().map((modIdx, stackPos) => {
                const mod    = modules[modIdx];
                const offset = STACK_OFFSETS[STACK_OFFSETS.length - 1 - stackPos];
                const isTop  = stackPos === stackOrder.length - 1;
                return (
                  <div
                    key={mod.id}
                    onClick={() => !isTop && setActive(mod.id)}
                    className={`
                      absolute left-0 right-0
                      rounded-2xl bg-gradient-to-br ${mod.mockupBg}
                      p-6 text-white
                      border border-white/10
                      ${isTop ? "shadow-2xl" : "shadow-lg cursor-pointer"}
                      transition-all duration-400 ease-out
                    `}
                    style={{
                      zIndex:    offset.zIndex,
                      transform: `translateY(${offset.y}px) translateX(${offset.x}px) scale(${offset.scale})`,
                      opacity:   offset.opacity,
                      top:       0,
                    }}
                    title={isTop ? undefined : `${mod.label} দেখুন`}
                    aria-label={isTop ? `${mod.label} preview` : `${mod.label} preview দেখতে ক্লিক করুন`}
                  >
                    {/* Module header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                        <mod.icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-base">{mod.label}</h4>
                        <p className="text-white/70 text-xs">Module Overview</p>
                      </div>
                      {/* "More below" hint for non-top cards */}
                      {!isTop && (
                        <span className="ml-auto text-white/50 text-[10px] font-medium">
                          ক্লিক করুন ↑
                        </span>
                      )}
                    </div>
                    {/* KPI pills */}
                    <div className="grid grid-cols-3 gap-3">
                      {mod.mockupLines.map((line) => (
                        <div key={line.label} className="bg-white/10 rounded-xl p-3">
                          <div className="text-white/60 text-[10px] mb-1">{line.label}</div>
                          <div className={`font-bold text-sm ${line.color}`}>{line.value}</div>
                        </div>
                      ))}
                    </div>
                    {/* Chart hint */}
                    <div className="mt-4 h-10 bg-white/10 rounded-xl flex items-end justify-center gap-0.5 px-3 pb-1.5">
                      {[60, 80, 50, 90, 70, 85, 95, 65].map((h, i) => (
                        <div key={i} className="flex-1 bg-white/50 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Description card */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-card">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${modules.find(m=>m.id===active)?.accentColor}`} />
                <h4 className="font-bold text-gray-900">{modules.find(m=>m.id===active)?.label} Module</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {modules.find(m=>m.id===active)?.description}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {modules.find(m=>m.id===active)?.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hint text */}
        <p className="text-center text-xs text-gray-400 mt-4">
          💡 স্ট্যাকড কার্ডগুলো ক্লিক করলে সেটি সামনে চলে আসবে — বা বাম পাশের মেনু থেকে বেছে নিন।
        </p>
      </div>
    </section>
  );
}
