"use client";

import { useState } from "react";
import { Settings, BookOpen, GraduationCap, Heart } from "lucide-react";

const portals = [
  {
    id: "admin",
    label: "Admin",
    icon: Settings,
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    description: "প্রতিষ্ঠানের সম্পূর্ণ নিয়ন্ত্রণ। সব তথ্য ও রিপোর্ট।",
    items: [
      { icon: "👨‍🎓", label: "Students Management" },
      { icon: "👩‍🏫", label: "Teachers & Staff" },
      { icon: "💰", label: "Fees & Finance" },
      { icon: "📊", label: "Reports & Analytics" },
      { icon: "🌐", label: "Website Control" },
      { icon: "📋", label: "Notice & Events" },
    ],
  },
  {
    id: "teacher",
    label: "Teacher",
    icon: BookOpen,
    color: "bg-purple-600",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    description: "ক্লাস, হাজিরা, নম্বর ও রুটিন পরিচালনা।",
    items: [
      { icon: "✅", label: "Attendance Entry" },
      { icon: "📝", label: "Marks Entry" },
      { icon: "📅", label: "Class Routine" },
      { icon: "👨‍🎓", label: "Student List" },
      { icon: "📢", label: "Notice Post" },
      { icon: "📁", label: "Assignment" },
    ],
  },
  {
    id: "student",
    label: "Student",
    icon: GraduationCap,
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    description: "নিজের academic তথ্য, রেজাল্ট ও নোটিশ দেখুন।",
    items: [
      { icon: "📊", label: "My Results" },
      { icon: "📅", label: "Class Routine" },
      { icon: "✅", label: "Attendance Record" },
      { icon: "📢", label: "Notice Board" },
      { icon: "💳", label: "Fee Status" },
      { icon: "📚", label: "Assignments" },
    ],
  },
  {
    id: "guardian",
    label: "Guardian",
    icon: Heart,
    color: "bg-rose-600",
    lightColor: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "border-rose-200",
    description: "সন্তানের সব academic তথ্য ঘরে বসেই দেখুন।",
    items: [
      { icon: "✅", label: "Child Attendance" },
      { icon: "📊", label: "Exam Results" },
      { icon: "💰", label: "Fee Due/History" },
      { icon: "📢", label: "School Notices" },
      { icon: "📚", label: "Academic Info" },
      { icon: "📞", label: "Contact Teacher" },
    ],
  },
];

export default function RolePortals() {
  const [active, setActive] = useState("admin");
  const activePortal = portals.find((p) => p.id === active) || portals[0];

  return (
    <section id="portals" className="section-pad bg-white">
      <div className="container-xl">
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

        {/* Portal tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {portals.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-medium text-sm transition-all ${
                active === p.id
                  ? `${p.color} text-white shadow-lg scale-105`
                  : `${p.lightColor} ${p.textColor} border ${p.borderColor} hover:scale-[1.02]`
              }`}
            >
              <p.icon size={17} />
              {p.label}
            </button>
          ))}
        </div>

        {/* Active portal showcase */}
        <div className="max-w-2xl mx-auto">
          <div className={`card border ${activePortal.borderColor} overflow-hidden`}>
            {/* Header */}
            <div className={`${activePortal.color} p-6 text-white`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <activePortal.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{activePortal.label} Portal</h3>
                  <p className="text-white/70 text-sm">{activePortal.description}</p>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activePortal.items.map((item) => (
                  <div
                    key={item.label}
                    className={`${activePortal.lightColor} rounded-xl p-3.5 flex items-center gap-2.5 hover:shadow-sm transition-shadow`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className={`text-sm font-medium ${activePortal.textColor}`}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 bg-gray-50 rounded-xl border border-gray-100">
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
