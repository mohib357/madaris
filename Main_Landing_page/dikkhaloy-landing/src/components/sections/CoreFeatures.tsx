"use client";

import { useState } from "react";
import {
  Users, UserCheck, ClipboardList, Award, Wallet,
  UserPlus, Bell, Globe, Heart, BarChart3, ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "শিক্ষার্থীর সম্পূর্ণ তথ্য এক জায়গায়। Profile, class, section, documents সহ।",
    color: "bg-blue-100 text-blue-600",
    tag: "Core",
  },
  {
    icon: UserCheck,
    title: "Teacher & Staff",
    description: "শিক্ষক-কর্মচারীর তথ্য, দায়িত্ব, রুটিন ও বেতন ব্যবস্থাপনা।",
    color: "bg-indigo-100 text-indigo-600",
    tag: "Core",
  },
  {
    icon: ClipboardList,
    title: "Attendance",
    description: "শিক্ষার্থী ও শিক্ষক উপস্থিতি ডিজিটালি রেকর্ড ও রিপোর্ট।",
    color: "bg-cyan-100 text-cyan-600",
    tag: "Core",
  },
  {
    icon: Award,
    title: "Exam & Result",
    description: "পরীক্ষা, নম্বর, GPA, Grade, Marksheet এবং Result publication।",
    color: "bg-purple-100 text-purple-600",
    tag: "Core",
  },
  {
    icon: Wallet,
    title: "Fees & Finance",
    description: "ফি সংগ্রহ, বকেয়া ট্র্যাক, হিসাব ও রিপোর্ট। অনলাইন পেমেন্ট সাপোর্ট।",
    color: "bg-green-100 text-green-600",
    tag: "Finance",
  },
  {
    icon: UserPlus,
    title: "Online Admission",
    description: "অনলাইন আবেদন থেকে ভর্তি সম্পন্ন পর্যন্ত সম্পূর্ণ ডিজিটাল প্রক্রিয়া।",
    color: "bg-emerald-100 text-emerald-600",
    tag: "Admission",
  },
  {
    icon: Bell,
    title: "Notice & Communication",
    description: "শিক্ষার্থী, শিক্ষক ও অভিভাবকদের কাছে দ্রুত নোটিশ পাঠান।",
    color: "bg-amber-100 text-amber-600",
    tag: "Communication",
  },
  {
    icon: Globe,
    title: "Institution Website",
    description: "প্রতিটি প্রতিষ্ঠানের জন্য পেশাদার ওয়েবসাইট। নিজস্ব domain ও theme।",
    color: "bg-orange-100 text-orange-600",
    tag: "Website",
  },
  {
    icon: Heart,
    title: "Guardian Portal",
    description: "অভিভাবক সন্তানের attendance, result ও fees ঘরে বসেই দেখতে পারবেন।",
    color: "bg-rose-100 text-rose-600",
    tag: "Portal",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "প্রতিষ্ঠানের গুরুত্বপূর্ণ তথ্য dashboard-এ। তথ্যের ভিত্তিতে সিদ্ধান্ত নিন।",
    color: "bg-teal-100 text-teal-600",
    tag: "Analytics",
  },
];

export default function CoreFeatures() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="features" className="section-pad bg-gray-50 relative">
      <div className="absolute inset-0 geo-pattern opacity-40" />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-blue-100 text-blue-700 mb-4">সম্পূর্ণ ফিচার</span>
          <h2 className="section-heading">
            প্রতিষ্ঠান পরিচালনার জন্য{" "}
            <span className="gradient-text">সব কিছু এক জায়গায়</span>
          </h2>
          <p className="section-subheading">
            ছোট মাদরাসা থেকে বড় স্কুল—সব ধরনের শিক্ষা প্রতিষ্ঠানের জন্য প্রয়োজনীয় সব ফিচার
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card p-5 cursor-default hover:-translate-y-1 transition-all duration-300 group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${f.color} group-hover:scale-110 transition-transform`}>
                  <f.icon size={20} />
                </div>
                <span className="tag bg-gray-100 text-gray-500 text-[10px] mt-1">{f.tag}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1.5 text-[15px]">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              {hovered === i && (
                <button className="mt-3 text-xs text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  বিস্তারিত দেখুন <ArrowRight size={12} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
