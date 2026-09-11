"use client";

import { Bell, MessageSquare, Mail, Smartphone } from "lucide-react";

const channels = [
  { icon: Bell, label: "Notice", desc: "প্রতিষ্ঠানের official নোটিশ", color: "bg-blue-500" },
  { icon: MessageSquare, label: "Announcement", desc: "তাৎক্ষণিক ঘোষণা", color: "bg-purple-500" },
  { icon: Smartphone, label: "Push Notification", desc: "App notification", color: "bg-green-500" },
  { icon: Mail, label: "Email", desc: "Email notification", color: "bg-orange-500" },
];

const messages = [
  { from: "প্রধান শিক্ষক", text: "আগামীকাল বার্ষিক ক্রীড়া অনুষ্ঠান। সকল শিক্ষার্থী সকাল ৮টায় উপস্থিত থাকবে।", time: "এইমাত্র", avatar: "প্র" },
  { from: "Class Teacher", text: "৮ম শ্রেণির গণিত পরীক্ষা রবিবার। সিলেবাস: ১ম-৫ম অধ্যায়।", time: "১ ঘণ্টা আগে", avatar: "ক্" },
  { from: "Office", text: "মাসিক বেতন প্রদানের শেষ তারিখ ১৫ তারিখ। বকেয়া শিক্ষার্থীদের জরুরি।", time: "গতকাল", avatar: "অ" },
];

export default function CommunicationSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="tag bg-amber-100 text-amber-700 mb-4">Communication</span>
          <h2 className="section-heading">
            প্রতিষ্ঠান ও অভিভাবকের মধ্যে{" "}
            <span className="gradient-text">সহজ যোগাযোগ</span>
          </h2>
          <p className="section-subheading">
            Notice, Announcement, Notification—সব channel থেকে সবাইকে জানান একসাথে।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — channels */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {channels.map((c) => (
                <div key={c.label} className="card p-4 hover:-translate-y-0.5 transition-all">
                  <div className={`w-10 h-10 ${c.color} rounded-xl flex items-center justify-center mb-3 shadow-md`}>
                    <c.icon size={18} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{c.label}</h4>
                  <p className="text-gray-400 text-xs">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Reach diagram */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Reach করুন</p>
              <div className="flex items-center justify-around">
                {[
                  { emoji: "🏫", label: "Institution" },
                  { label: "→" },
                  { emoji: "👩‍🏫", label: "Teacher" },
                  { label: "→" },
                  { emoji: "👨‍🎓", label: "Student" },
                  { label: "→" },
                  { emoji: "👪", label: "Guardian" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    {item.emoji ? (
                      <>
                        <span className="text-2xl">{item.emoji}</span>
                        <span className="text-[10px] text-gray-500">{item.label}</span>
                      </>
                    ) : (
                      <span className="text-gray-300 text-base">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — notice feed mockup */}
          <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-800 text-sm">Notice Board</h4>
              <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">3 নতুন</span>
            </div>
            <div className="space-y-3">
              {messages.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {m.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-gray-800">{m.from}</span>
                        <span className="text-[10px] text-gray-400 flex-shrink-0">{m.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs text-blue-600 font-medium cursor-pointer">সব নোটিশ দেখুন →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
