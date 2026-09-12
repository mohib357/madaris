"use client";

import { BookOpen, DollarSign, MessageCircle, Globe, ArrowRight } from "lucide-react";

const pillars = [
  { icon:BookOpen,      title:"Academic",       items:["Students","Teachers","Attendance","Exams","Results"],         glow:"#2563eb", iconBg:"bg-blue-600",    grad:"from-blue-500 to-indigo-600",   cardBg:"bg-blue-50/40"    },
  { icon:DollarSign,    title:"Finance",         items:["Fees","Salary","Accounts","Reports"],                        glow:"#16a34a", iconBg:"bg-green-600",   grad:"from-green-500 to-emerald-600", cardBg:"bg-green-50/40"   },
  { icon:MessageCircle, title:"Communication",   items:["Notice","SMS","Notification","Guardian"],                    glow:"#7c3aed", iconBg:"bg-purple-600",  grad:"from-purple-500 to-violet-600", cardBg:"bg-purple-50/40"  },
  { icon:Globe,         title:"Website",         items:["Admission","Notice","Result","Gallery","Contact"],           glow:"#ea580c", iconBg:"bg-orange-500",  grad:"from-orange-500 to-rose-500",   cardBg:"bg-orange-50/40"  },
];

export default function SolutionSection() {
  return (
    <section className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#fafffe 50%,#f0fdf4 100%)" }}>
      <div className="absolute inset-0 pat-stripes" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-green-100 text-green-700 mb-4">সমাধান</span>
          <h2 className="section-heading">
            এক প্ল্যাটফর্মে আপনার প্রতিষ্ঠানের{" "}
            <span className="gradient-text">সম্পূর্ণ ব্যবস্থাপনা</span>
          </h2>
          <p className="section-subheading">Management থেকে Website, Admission থেকে Result—প্রতিষ্ঠানের প্রয়োজনীয় সবকিছু একসাথে।</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Centre hub */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="w-28 h-28 rounded-3xl flex flex-col items-center justify-center shadow-2xl z-10 relative"
                style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}>
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center mb-1.5">
                  <span className="text-white font-bold text-xl">দি</span>
                </div>
                <span className="text-white text-xs font-bold tracking-tight">DIKKHALOY</span>
              </div>
              {[0,60,120,180,240,300].map(deg => (
                <div key={deg} className="absolute w-px h-20 origin-bottom pointer-events-none"
                  style={{ background:"linear-gradient(to top,rgba(37,99,235,0.3),transparent)", transform:`rotate(${deg}deg) translateY(-100%)`, top:"50%", left:"50%" }} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(p => (
              <div key={p.title} className="rotate-border-cw group" style={{ "--glow-col": p.glow } as React.CSSProperties}>
                <div className={`rb-inner p-5 rounded-[14px] ${p.cardBg} hover:-translate-y-1 transition-transform`}
                  style={{ boxShadow: `0 8px 32px ${p.glow}22, 0 2px 8px rgba(0,0,0,0.10)` }}>
                  <div className={`w-11 h-11 ${p.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                    <p.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-base">{p.title}</h3>
                  <ul className="space-y-1.5">
                    {p.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.grad} flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)" }}>
            <div>
              <h3 className="font-bold text-xl mb-1">ONE DIGITAL CAMPUS</h3>
              <p className="text-blue-200 text-sm">একটি প্ল্যাটফর্ম। একটি পূর্ণাঙ্গ সমাধান। আপনার প্রতিষ্ঠানের নিজস্ব পরিচয়।</p>
            </div>
            <a href="#trial" className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl transition-all shadow-lg">
              শুরু করুন <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
