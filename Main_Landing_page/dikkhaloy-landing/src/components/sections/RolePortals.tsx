"use client";

import { useState } from "react";
import { Settings, BookOpen, GraduationCap, Heart, Check } from "lucide-react";

const portals = [
  {
    id: "admin", label: "Admin", bangla: "প্রশাসক",
    icon: Settings,
    color: "bg-blue-600", lightColor: "bg-blue-50", textColor: "text-blue-600",
    borderColor: "border-blue-200", gradFrom: "from-blue-600", gradTo: "to-indigo-600",
    glowColor: "#2563eb",
    description: "প্রতিষ্ঠানের সম্পূর্ণ নিয়ন্ত্রণ। সব তথ্য ও রিপোর্ট।",
    items: [
      { icon: "👨‍🎓", label: "Students Management", detail: "ভর্তি, প্রোফাইল, ক্লাস বদলি" },
      { icon: "👩‍🏫", label: "Teachers & Staff",    detail: "নিয়োগ, বেতন, ছুটি" },
      { icon: "💰", label: "Fees & Finance",         detail: "সংগ্রহ, বকেয়া, রিপোর্ট" },
      { icon: "📊", label: "Reports & Analytics",    detail: "Dashboard, KPI, charts" },
      { icon: "🌐", label: "Website Control",        detail: "Theme, নোটিশ, গ্যালারি" },
      { icon: "📋", label: "Notice & Events",        detail: "সকলকে একসাথে জানান" },
    ],
  },
  {
    id: "teacher", label: "Teacher", bangla: "শিক্ষক",
    icon: BookOpen,
    color: "bg-purple-600", lightColor: "bg-purple-50", textColor: "text-purple-600",
    borderColor: "border-purple-200", gradFrom: "from-purple-600", gradTo: "to-violet-600",
    glowColor: "#7c3aed",
    description: "ক্লাস, হাজিরা, নম্বর ও রুটিন পরিচালনা।",
    items: [
      { icon: "✅", label: "Attendance Entry",  detail: "ডিজিটাল হাজিরা রেকর্ড" },
      { icon: "📝", label: "Marks Entry",       detail: "পরীক্ষার নম্বর দিন" },
      { icon: "📅", label: "Class Routine",     detail: "নিজের schedule দেখুন" },
      { icon: "👨‍🎓", label: "Student List",    detail: "ক্লাসের শিক্ষার্থী তালিকা" },
      { icon: "📢", label: "Notice Post",       detail: "শিক্ষার্থীদের জানান" },
      { icon: "📁", label: "Assignment",        detail: "কাজ দিন ও যাচাই করুন" },
    ],
  },
  {
    id: "student", label: "Student", bangla: "শিক্ষার্থী",
    icon: GraduationCap,
    color: "bg-green-600", lightColor: "bg-green-50", textColor: "text-green-600",
    borderColor: "border-green-200", gradFrom: "from-green-600", gradTo: "to-emerald-600",
    glowColor: "#16a34a",
    description: "নিজের academic তথ্য, রেজাল্ট ও নোটিশ দেখুন।",
    items: [
      { icon: "📊", label: "My Results",        detail: "GPA, গ্রেড, মার্কশিট" },
      { icon: "📅", label: "Class Routine",     detail: "ক্লাসের সময়সূচি" },
      { icon: "✅", label: "Attendance Record", detail: "উপস্থিতির ইতিহাস" },
      { icon: "📢", label: "Notice Board",      detail: "স্কুলের নোটিশ" },
      { icon: "💳", label: "Fee Status",        detail: "বেতন ও বকেয়া" },
      { icon: "📚", label: "Assignments",       detail: "কাজ ও জমা দিন" },
    ],
  },
  {
    id: "guardian", label: "Guardian", bangla: "অভিভাবক",
    icon: Heart,
    color: "bg-rose-600", lightColor: "bg-rose-50", textColor: "text-rose-600",
    borderColor: "border-rose-200", gradFrom: "from-rose-600", gradTo: "to-pink-600",
    glowColor: "#e11d48",
    description: "সন্তানের সব academic তথ্য ঘরে বসেই দেখুন।",
    items: [
      { icon: "✅", label: "Child Attendance", detail: "প্রতিদিনের উপস্থিতি" },
      { icon: "📊", label: "Exam Results",     detail: "ফলাফল ও মার্কশিট" },
      { icon: "💰", label: "Fee Due/History",  detail: "বেতনের তথ্য ও রসিদ" },
      { icon: "📢", label: "School Notices",   detail: "সব গুরুত্বপূর্ণ নোটিশ" },
      { icon: "📚", label: "Academic Info",    detail: "সিলেবাস ও রুটিন" },
      { icon: "📞", label: "Contact Teacher",  detail: "শিক্ষকের সাথে যোগাযোগ" },
    ],
  },
];

export default function RolePortals() {
  const [active, setActive] = useState("admin");
  const ap = portals.find((p) => p.id === active) || portals[0];

  return (
    <section id="portals" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 pat-dots" style={{ opacity:1 }} />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-indigo-100 text-indigo-700 mb-4">Role-Based Access</span>
          <h2 className="section-heading">
            যার যা প্রয়োজন,{" "}
            <span className="gradient-text">তার জন্য আলাদা Portal</span>
          </h2>
          <p className="section-subheading">
            Admin, Teacher, Student ও Guardian সবাই পাবেন তাদের নিজস্ব dashboard।
          </p>
        </div>

        {/* Portal tabs — premium look for both active and inactive */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {portals.map((p) => {
            const isActive = active === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`
                  relative flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm
                  transition-all duration-250 overflow-hidden group
                  ${isActive
                    ? "text-white shadow-xl scale-105"
                    : "bg-white border-2 hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-lg"
                  }
                `}
                style={isActive
                  ? { background: `linear-gradient(135deg, ${p.glowColor}, ${p.glowColor}cc)`, boxShadow: `0 8px 24px ${p.glowColor}44` }
                  : { borderColor: p.glowColor + "55", color: p.glowColor, boxShadow: `0 2px 8px ${p.glowColor}22` }
                }
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-white/20" : ""}`}
                  style={!isActive ? { background: p.glowColor + "18" } : {}}>
                  <p.icon size={16} style={{ color: isActive ? "white" : p.glowColor }} />
                </div>
                <div className="text-left">
                  <div className="leading-none">{p.label}</div>
                  <div className={`text-[10px] mt-0.5 ${isActive ? "text-white/70" : "opacity-60"}`}>{p.bangla}</div>
                </div>
                {isActive && <Check size={13} className="ml-1 text-white/80" />}
                {/* Shimmer on inactive hover */}
                {!isActive && (
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active portal — premium preview */}
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl overflow-hidden border-2 shadow-2xl transition-all duration-300"
            style={{ borderColor: ap.glowColor + "44", boxShadow: `0 20px 50px ${ap.glowColor}22` }}
          >
            {/* Header */}
            <div
              className="p-6 text-white relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${ap.glowColor}, ${ap.glowColor}aa)` }}
            >
              {/* bg pattern dots */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg">
                  <ap.icon size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{ap.label} Portal</h3>
                  <p className="text-white/75 text-sm mt-0.5">{ap.description}</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-full text-xs font-medium">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Active
                </div>
              </div>
            </div>

            {/* Features grid — improved */}
            <div className="p-6 bg-white">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ap.items.map((item) => (
                  <div
                    key={item.label}
                    className="group relative rounded-xl p-3.5 border-2 hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200 cursor-default overflow-hidden"
                    style={{ borderColor: ap.glowColor + "25", background: ap.glowColor + "08", boxShadow: `0 4px 20px ${ap.glowColor}20` }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = ap.glowColor + "88";
                      el.style.background  = ap.glowColor + "18";
                      el.style.boxShadow   = `0 8px 32px ${ap.glowColor}55, 0 0 0 1px ${ap.glowColor}44`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = ap.glowColor + "25";
                      el.style.background  = ap.glowColor + "08";
                      el.style.boxShadow   = `0 4px 20px ${ap.glowColor}20`;
                    }}
                  >
                    <div className="text-xl mb-1">{item.icon}</div>
                    <div className="text-sm font-semibold text-gray-800 leading-tight">{item.label}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{item.detail}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-xl border border-dashed" style={{ borderColor: ap.glowColor + "44", background: ap.glowColor + "06" }}>
                <p className="text-sm text-gray-600 text-center">
                  প্রতিটি user তাদের role অনুযায়ী শুধুমাত্র নিজের প্রয়োজনীয় তথ্য দেখতে পাবেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
