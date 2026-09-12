"use client";

import { useState } from "react";
import { Users,UserCheck,ClipboardList,Award,Wallet,UserPlus,Bell,Globe,Heart,BarChart3,ArrowRight } from "lucide-react";

const features = [
  { icon:Users,        title:"Student Management",    desc:"শিক্ষার্থীর সম্পূর্ণ তথ্য এক জায়গায়। Profile, class, section, documents সহ।",        glow:"#2563eb", bg:"bg-blue-100",    ic:"text-blue-600",    card:"bg-blue-50/30",    tag:"Core"         },
  { icon:UserCheck,    title:"Teacher & Staff",        desc:"শিক্ষক-কর্মচারীর তথ্য, দায়িত্ব, রুটিন ও বেতন ব্যবস্থাপনা।",                          glow:"#4f46e5", bg:"bg-indigo-100",  ic:"text-indigo-600",  card:"bg-indigo-50/30",  tag:"Core"         },
  { icon:ClipboardList,title:"Attendance",             desc:"শিক্ষার্থী ও শিক্ষক উপস্থিতি ডিজিটালি রেকর্ড ও রিপোর্ট।",                            glow:"#0891b2", bg:"bg-cyan-100",    ic:"text-cyan-600",    card:"bg-cyan-50/30",    tag:"Core"         },
  { icon:Award,        title:"Exam & Result",          desc:"পরীক্ষা, নম্বর, GPA, Grade, Marksheet এবং Result publication।",                        glow:"#7c3aed", bg:"bg-purple-100",  ic:"text-purple-600",  card:"bg-purple-50/30",  tag:"Core"         },
  { icon:Wallet,       title:"Fees & Finance",         desc:"ফি সংগ্রহ, বকেয়া ট্র্যাক, হিসাব ও রিপোর্ট। অনলাইন পেমেন্ট সাপোর্ট।",               glow:"#16a34a", bg:"bg-green-100",   ic:"text-green-600",   card:"bg-green-50/30",   tag:"Finance"      },
  { icon:UserPlus,     title:"Online Admission",       desc:"অনলাইন আবেদন থেকে ভর্তি সম্পন্ন পর্যন্ত সম্পূর্ণ ডিজিটাল প্রক্রিয়া।",              glow:"#059669", bg:"bg-emerald-100", ic:"text-emerald-600", card:"bg-emerald-50/30", tag:"Admission"    },
  { icon:Bell,         title:"Notice & Communication", desc:"শিক্ষার্থী, শিক্ষক ও অভিভাবকদের কাছে দ্রুত নোটিশ পাঠান।",                           glow:"#d97706", bg:"bg-amber-100",   ic:"text-amber-600",   card:"bg-amber-50/30",   tag:"Communication"},
  { icon:Globe,        title:"Institution Website",    desc:"প্রতিটি প্রতিষ্ঠানের জন্য পেশাদার ওয়েবসাইট। নিজস্ব domain ও theme।",                 glow:"#ea580c", bg:"bg-orange-100",  ic:"text-orange-600",  card:"bg-orange-50/30",  tag:"Website"      },
  { icon:Heart,        title:"Guardian Portal",        desc:"অভিভাবক সন্তানের attendance, result ও fees ঘরে বসেই দেখতে পারবেন।",                  glow:"#e11d48", bg:"bg-rose-100",    ic:"text-rose-600",    card:"bg-rose-50/30",    tag:"Portal"       },
  { icon:BarChart3,    title:"Reports & Analytics",    desc:"প্রতিষ্ঠানের গুরুত্বপূর্ণ তথ্য dashboard-এ। তথ্যের ভিত্তিতে সিদ্ধান্ত নিন।",        glow:"#0d9488", bg:"bg-teal-100",    ic:"text-teal-600",    card:"bg-teal-50/30",    tag:"Analytics"    },
];

export default function CoreFeatures() {
  const [hovered, setHovered] = useState<number|null>(null);
  return (
    <section id="features" className="section-pad relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pat-grid" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-blue-100 text-blue-700 mb-4">সম্পূর্ণ ফিচার</span>
          <h2 className="section-heading">প্রতিষ্ঠান পরিচালনার জন্য <span className="gradient-text">সব কিছু এক জায়গায়</span></h2>
          <p className="section-subheading">ছোট মাদরাসা থেকে বড় স্কুল—সব ধরনের শিক্ষা প্রতিষ্ঠানের জন্য প্রয়োজনীয় সব ফিচার</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {features.map((f,i) => (
            /* CCW = reverse direction */
            <div key={f.title} className="rotate-border-ccw group cursor-default"
              style={{ "--glow-col": f.glow } as React.CSSProperties}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}>
              <div className={`rb-inner p-5 rounded-[14px] ${f.card} hover:-translate-y-1 transition-transform`}
                style={{ boxShadow: `0 8px 32px ${f.glow}1a, 0 2px 8px rgba(0,0,0,0.10)` }}>
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${f.bg} group-hover:scale-110 transition-transform`}>
                    <f.icon size={20} className={f.ic} />
                  </div>
                  <span className="tag bg-white/80 text-gray-500 text-[10px] mt-1 shadow-sm">{f.tag}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5 text-[15px]">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                {hovered===i && (
                  <button className="mt-3 text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all" style={{color:f.glow}}>
                    বিস্তারিত দেখুন <ArrowRight size={12} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
