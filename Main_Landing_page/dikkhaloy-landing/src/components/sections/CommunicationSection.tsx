"use client";

import { Bell, MessageSquare, Mail, Smartphone, Send, ChevronRight } from "lucide-react";

const channels = [
  { icon: Bell,          label: "Notice Board",     desc: "প্রতিষ্ঠানের official নোটিশ", glow:"#2563eb", from:"#1e40af",to:"#1d4ed8",  cardBg:"#eff6ff", textCol:"text-blue-700"   },
  { icon: MessageSquare, label: "Announcement",      desc: "তাৎক্ষণিক ঘোষণা",           glow:"#7c3aed", from:"#4c1d95",to:"#6d28d9",  cardBg:"#f5f3ff", textCol:"text-purple-700" },
  { icon: Smartphone,    label: "Push Notification", desc: "App notification",            glow:"#16a34a", from:"#052e16",to:"#15803d",  cardBg:"#f0fdf4", textCol:"text-green-700"  },
  { icon: Mail,          label: "Email",             desc: "Email notification",          glow:"#ea580c", from:"#431407",to:"#c2410c",  cardBg:"#fff7ed", textCol:"text-orange-700" },
];

const messages = [
  { from: "প্রধান শিক্ষক", text: "আগামীকাল বার্ষিক ক্রীড়া অনুষ্ঠান। সকল শিক্ষার্থী সকাল ৮টায় উপস্থিত থাকবে।", time: "এইমাত্র",    avatar: "প্র", avatarBg: "bg-blue-600",  isNew: true  },
  { from: "Class Teacher",  text: "৮ম শ্রেণির গণিত পরীক্ষা রবিবার। সিলেবাস: ১ম-৫ম অধ্যায়।",                      time: "১ ঘণ্টা আগে", avatar: "ক্",  avatarBg: "bg-purple-600",isNew: true  },
  { from: "Office",         text: "মাসিক বেতন প্রদানের শেষ তারিখ ১৫ তারিখ। বকেয়া শিক্ষার্থীদের জরুরি।",          time: "গতকাল",      avatar: "অ",   avatarBg: "bg-orange-500",isNew: false },
];

export default function CommunicationSection() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 pat-dots" style={{ opacity:0.8 }} />
      <div className="container-xl relative z-10">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — channel cards */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {channels.map((c) => (
                <div key={c.label}
                  className="relative rounded-2xl p-4 border-2 group cursor-default hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{ background: c.cardBg, borderColor: `${c.glow}30`, boxShadow:`0 4px 20px ${c.glow}22` }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${c.glow}77`;
                    el.style.boxShadow   = `0 10px 36px ${c.glow}55, 0 0 0 2px ${c.glow}44`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${c.glow}30`;
                    el.style.boxShadow   = `0 4px 20px ${c.glow}22`;
                  }}
                >
                  {/* shimmer */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform"
                    style={{ background:`linear-gradient(135deg,${c.from},${c.to})` }}>
                    <c.icon size={18} className="text-white" />
                  </div>
                  <h4 className={`font-semibold text-sm mb-1 ${c.textCol}`}>{c.label}</h4>
                  <p className="text-gray-500 text-xs">{c.desc}</p>
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
                      <ChevronRight size={16} className="text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — notice feed */}
          <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                <Bell size={15} className="text-blue-500" /> Notice Board
              </h4>
              <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">3 নতুন</span>
            </div>
            <div className="space-y-3">
              {messages.map((m, i) => (
                <div key={i}
                  className="bg-white rounded-2xl p-4 border-2 hover:-translate-y-0.5 hover:shadow-md transition-all"
                  style={{ borderColor: m.isNew ? "#2563eb22" : "#e2e8f0" }}>
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 ${m.avatarBg} rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{m.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-gray-800">{m.from}</span>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {m.isNew && <span className="w-2 h-2 bg-blue-500 rounded-full" />}
                          <span className="text-[10px] text-gray-400">{m.time}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-blue-600 font-medium cursor-pointer hover:underline flex items-center gap-1">
                সব নোটিশ দেখুন <ChevronRight size={12} />
              </span>
              <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                <Send size={11} /> নোটিশ পাঠান
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
