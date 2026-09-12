"use client";

import { Building2, BookMarked, UtensilsCrossed, HeartHandshake, BedDouble, Package, GraduationCap } from "lucide-react";

const features = [
  { icon:Building2,       title:"লিল্লাহ বোর্ডিং",          desc:"আবাসিক শিক্ষার্থীদের সম্পূর্ণ ব্যবস্থাপনা। রুম বরাদ্দ, ফি ও রেকর্ড।",                          glow:"#4ade80"  },
  { icon:BookMarked,      title:"হিফজ ট্র্যাকিং",           desc:"হিফজ শিক্ষার্থীদের অগ্রগতি, পারা ও সবক ট্র্যাক করুন।",                                            glow:"#86efac"  },
  { icon:UtensilsCrossed, title:"মেস / খাবার ব্যবস্থাপনা", desc:"ছাত্রাবাসের দৈনিক খাবার, মেস চার্জ ও খরচ ট্র্যাক করুন।",                                          glow:"#fbbf24"  },
  { icon:HeartHandshake,  title:"অনুদান / Lillah Fund",      desc:"দানকারী ও অনুদানের হিসাব আলাদাভাবে সংরক্ষণ করুন।",                                                glow:"#34d399"  },
  { icon:BedDouble,       title:"আবাসিক শিক্ষার্থী",        desc:"আবাসিক ও অনাবাসিক শিক্ষার্থীর আলাদা প্রোফাইল ও ফি কাঠামো।",                                      glow:"#60a5fa"  },
  { icon:Package,         title:"স্টোর / ইনভেন্টরি",        desc:"মাদরাসার সম্পদ, সরঞ্জাম ও স্টোরের হিসাব রাখুন।",                                                    glow:"#f472b6"  },
  { icon:GraduationCap,   title:"কওমি একাডেমিক কাঠামো",    desc:"দাওরা হাদিস, মিশকাত, জালালাইন সহ কওমি সিলেবাসভিত্তিক structure।",                                  glow:"#a78bfa"  },
];

export default function MadrasaFeatures() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* rich dark green + Islamic star pattern */}
      <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,#052e16 0%,#14532d 40%,#0f4c21 70%,#042f14 100%)" }} />
      <div className="absolute inset-0 pat-islamic" style={{ opacity:1 }} />
      {/* radial glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(74,222,128,0.12),transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(250,204,21,0.08),transparent 70%)" }} />
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background:"linear-gradient(90deg,transparent,rgba(250,204,21,0.6),transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background:"linear-gradient(90deg,transparent,rgba(74,222,128,0.4),transparent)" }} />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border border-green-600/40 text-green-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-5"
            style={{ background:"rgba(22,163,74,0.15)" }}>
            <span className="text-xl">☪</span>মাদরাসার জন্য বিশেষভাবে তৈরি
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            মাদরাসার জন্য প্রয়োজনীয়{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage:"linear-gradient(90deg,#86efac,#fde047)" }}>
              বিশেষ ব্যবস্থাপনা
            </span>
          </h2>
          <p className="text-green-200/70 text-lg max-w-2xl mx-auto">সাধারণ স্কুল সফটওয়্যারে যা নেই — মাদরাসার অনন্য প্রয়োজনীয়তা মাথায় রেখে তৈরি</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map(f => (
            <div key={f.title}
              className="relative rounded-2xl p-5 border group hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
              style={{
                background:"rgba(255,255,255,0.06)",
                borderColor: `${f.glow}40`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow   = `0 0 0 2px ${f.glow}66, 0 0 30px 4px ${f.glow}55, inset 0 0 30px 0 ${f.glow}18`;
                el.style.borderColor = `${f.glow}99`;
                el.style.background  = `rgba(255,255,255,0.10)`;
                el.style.transition  = "all 0.3s ease";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow   = "none";
                el.style.borderColor = `${f.glow}40`;
                el.style.background  = "rgba(255,255,255,0.06)";
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ background:`${f.glow}20`, boxShadow:`0 0 12px ${f.glow}44` }}>
                <f.icon size={20} style={{ color:f.glow }} />
              </div>
              <h3 className="font-semibold text-white mb-1.5 text-[15px]">{f.title}</h3>
              <p className="text-green-300/70 text-sm leading-relaxed">{f.desc}</p>
              {/* glow dot top-right */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full animate-pulse" style={{ background:f.glow, boxShadow:`0 0 6px ${f.glow}` }} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-green-300/60 text-sm mb-4">মাদরাসার জন্য বিশেষ প্যাকেজ সম্পর্কে জানতে</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl transition-all"
            style={{ background:"linear-gradient(135deg,#16a34a,#15803d)", boxShadow:"0 4px 20px rgba(22,163,74,0.45)" }}>
            আমাদের সাথে যোগাযোগ করুন
          </a>
        </div>
      </div>
    </section>
  );
}
