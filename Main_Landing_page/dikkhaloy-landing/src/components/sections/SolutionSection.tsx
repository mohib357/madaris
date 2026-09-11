"use client";

import { BookOpen, DollarSign, MessageCircle, Globe, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Academic",
    items: ["Students", "Teachers", "Attendance", "Exams", "Results"],
    color: "bg-blue-600",
    glow: "shadow-blue-200",
  },
  {
    icon: DollarSign,
    title: "Finance",
    items: ["Fees", "Salary", "Accounts", "Reports"],
    color: "bg-green-600",
    glow: "shadow-green-200",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    items: ["Notice", "SMS", "Notification", "Guardian"],
    color: "bg-purple-600",
    glow: "shadow-purple-200",
  },
  {
    icon: Globe,
    title: "Website",
    items: ["Admission", "Notice", "Result", "Gallery", "Contact"],
    color: "bg-orange-500",
    glow: "shadow-orange-200",
  },
];

export default function SolutionSection() {
  return (
    <section className="section-pad bg-white relative">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="tag bg-green-100 text-green-700 mb-4">সমাধান</span>
          <h2 className="section-heading">
            এক প্ল্যাটফর্মে আপনার প্রতিষ্ঠানের{" "}
            <span className="gradient-text">সম্পূর্ণ ব্যবস্থাপনা</span>
          </h2>
          <p className="section-subheading">
            Management থেকে Website, Admission থেকে Result, Finance থেকে Guardian Portal—প্রতিষ্ঠানের প্রয়োজনীয় সবকিছু একসাথে।
          </p>
        </div>

        {/* Central architecture diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Logo */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex flex-col items-center justify-center shadow-2xl shadow-blue-300/40 z-10 relative">
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mb-1.5">
                  <span className="text-white font-bold text-xl">দি</span>
                </div>
                <span className="text-white text-xs font-bold tracking-tight">DIKKHALOY</span>
              </div>
              {/* Radiating lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-px h-20 bg-gradient-to-b from-blue-400/40 to-transparent origin-bottom"
                    style={{ transform: `rotate(${deg}deg) translateY(-100%)` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`card p-5 hover:shadow-xl hover:${pillar.glow} transition-all duration-300 group border-0`}
              >
                <div className={`w-11 h-11 ${pillar.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <pillar.icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-base">{pillar.title}</h3>
                <ul className="space-y-1.5">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-xl mb-1">ONE DIGITAL CAMPUS</h3>
              <p className="text-blue-200 text-sm">একটি প্ল্যাটফর্ম। একটি পূর্ণাঙ্গ সমাধান। আপনার প্রতিষ্ঠানের নিজস্ব পরিচয়।</p>
            </div>
            <a
              href="#trial"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl transition-all shadow-lg"
            >
              শুরু করুন <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
