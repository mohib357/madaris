"use client";

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
    mockupLines: [
      { label: "মোট কর্মচারী", value: "৮৬", color: "text-slate-300" },
      { label: "এই মাসে বেতন", value: "৳ ৪,৮৫,০০০", color: "text-green-300" },
      { label: "ছুটির আবেদন", value: "৭টি", color: "text-yellow-300" },
    ],
  },
];

export default function ModuleShowcase() {
  const [active, setActive] = useState("accounting");
  const activeModule = modules.find((m) => m.id === active) || modules[0];

  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="tag bg-indigo-100 text-indigo-700 mb-4">Interactive Demo</span>
          <h2 className="section-heading">
            প্রতিটি Module বিস্তারিত দেখুন
          </h2>
          <p className="section-subheading">
            বাম পাশ থেকে module বেছে নিন — ডান পাশে preview দেখুন
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 bg-gray-50 rounded-3xl p-6 lg:p-8 border border-gray-100">
          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-1.5">
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                  active === m.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-100"
                }`}
                aria-pressed={active === m.id}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  active === m.id ? "bg-white/20" : "bg-gray-100 group-hover:bg-blue-100"
                }`}>
                  <m.icon size={16} className={active === m.id ? "text-white" : "text-gray-500 group-hover:text-blue-600"} />
                </div>
                <span className="font-medium text-sm">{m.label}</span>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Mockup screen */}
            <div className={`rounded-2xl bg-gradient-to-br ${activeModule.mockupBg} p-6 text-white shadow-xl min-h-[200px]`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                  <activeModule.icon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-base">{activeModule.label}</h4>
                  <p className="text-white/70 text-xs">Module Overview</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {activeModule.mockupLines.map((line) => (
                  <div key={line.label} className="bg-white/10 rounded-xl p-3">
                    <div className="text-white/60 text-[10px] mb-1">{line.label}</div>
                    <div className={`font-bold text-sm ${line.color}`}>{line.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                <div className="flex gap-1 items-end h-10">
                  {[60, 80, 50, 90, 70, 85, 95, 65].map((h, i) => (
                    <div
                      key={i}
                      className="w-3 bg-white/50 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-2">{activeModule.label} Module</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{activeModule.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {activeModule.features.map((f) => (
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
      </div>
    </section>
  );
}
