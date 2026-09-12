"use client";

import { UserPlus, Database, Rocket } from "lucide-react";

const steps = [
  { n:"০১", icon:UserPlus, title:"Register",    desc:"প্রতিষ্ঠানের basic information দিয়ে account তৈরি করুন। মাত্র ৫ মিনিটেই শুরু।",                                            glow:"#2563eb", iconBg:"bg-blue-600",   bg:"bg-blue-50",   cardBg:"#eff6ff", detail:["Institution name & type","Admin account setup","Subdomain claim"] },
  { n:"০২", icon:Database, title:"Import Data", desc:"Excel থেকে student ও teacher data import করুন। পুরনো system থেকে migrate করা সহজ।",                                           glow:"#4f46e5", iconBg:"bg-indigo-600", bg:"bg-indigo-50", cardBg:"#eef2ff", detail:["Excel/CSV import","Student & teacher data","Class & section setup"] },
  { n:"০৩", icon:Rocket,   title:"Go Live",     desc:"Management panel ও institution website চালু। একটি link share করুন—সবাই ব্যবহার শুরু করুন।",                                glow:"#16a34a", iconBg:"bg-green-600",  bg:"bg-green-50",  cardBg:"#f0fdf4", detail:["Management panel active","Institution website live","All portals ready"] },
];

export default function HowItWorks() {
  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <div className="absolute inset-0 pat-hex" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-gray-100 text-gray-600 mb-4">শুরু করা সহজ</span>
          <h2 className="section-heading">মাত্র ৩টি ধাপে <span className="gradient-text">আপনার প্রতিষ্ঠান ডিজিটাল</span></h2>
          <p className="section-subheading">জটিল setup বা technical জ্ঞান ছাড়াই শুরু করুন।</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((s,i) => (
            <div key={s.n} className="relative">
              {i < steps.length-1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px z-0 -translate-x-1/2"
                  style={{ background:"linear-gradient(to right,rgba(99,102,241,0.3),transparent)" }} />
              )}
              <div className="rotate-border-cw group z-10 relative" style={{ "--glow-col": s.glow } as React.CSSProperties}>
                <div className="rb-inner p-6 rounded-[14px] hover:-translate-y-1 transition-transform duration-300"
                  style={{ background: s.cardBg, boxShadow:`0 10px 40px ${s.glow}22, 0 2px 8px rgba(0,0,0,0.10)` }}>
                  <div className="absolute -top-3 left-5 bg-white border-2 border-gray-200 text-gray-500 font-bold text-xs px-2 py-0.5 rounded-full z-20">{s.n}</div>
                  <div className={`w-16 h-16 ${s.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <s.icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.detail.map(d => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-4 h-4 ${s.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <div className={`w-2 h-2 ${s.iconBg} rounded-full`} />
                        </div>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#trial" className="btn-primary px-8 py-4 text-base">এখনই শুরু করুন — বিনামূল্যে</a>
          <p className="text-gray-400 text-sm mt-3">Setup সহায়তা প্রয়োজন? আমাদের team সাহায্য করবে।</p>
        </div>
      </div>
    </section>
  );
}
