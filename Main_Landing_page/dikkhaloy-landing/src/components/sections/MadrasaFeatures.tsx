"use client";

import { Building2, BookMarked, UtensilsCrossed, HeartHandshake, BedDouble, Package, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "লিল্লাহ বোর্ডিং",
    description: "আবাসিক শিক্ষার্থীদের সম্পূর্ণ ব্যবস্থাপনা। রুম বরাদ্দ, ফি ও রেকর্ড।",
    available: true,
  },
  {
    icon: BookMarked,
    title: "হিফজ ট্র্যাকিং",
    description: "হিফজ শিক্ষার্থীদের অগ্রগতি, পারা ও সবক ট্র্যাক করুন।",
    available: true,
  },
  {
    icon: UtensilsCrossed,
    title: "মেস / খাবার ব্যবস্থাপনা",
    description: "ছাত্রাবাসের দৈনিক খাবার, মেস চার্জ ও খরচ ট্র্যাক করুন।",
    available: true,
  },
  {
    icon: HeartHandshake,
    title: "অনুদান / Lillah Fund",
    description: "দানকারী ও অনুদানের হিসাব আলাদাভাবে সংরক্ষণ করুন।",
    available: true,
  },
  {
    icon: BedDouble,
    title: "আবাসিক শিক্ষার্থী",
    description: "আবাসিক ও অনাবাসিক শিক্ষার্থীর আলাদা প্রোফাইল ও ফি কাঠামো।",
    available: true,
  },
  {
    icon: Package,
    title: "স্টোর / ইনভেন্টরি",
    description: "মাদরাসার সম্পদ, সরঞ্জাম ও স্টোরের হিসাব রাখুন।",
    available: false,
  },
  {
    icon: GraduationCap,
    title: "কওমি একাডেমিক কাঠামো",
    description: "দাওরা হাদিস, মিশকাত, জালালাইন সহ কওমি সিলেবাসভিত্তিক structure।",
    available: false,
  },
];

export default function MadrasaFeatures() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Islamic green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-teal-900" />
      <div className="absolute inset-0 islamic-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-800/60 border border-green-600/30 text-green-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-5">
            <span className="text-xl">☪</span>
            মাদরাসার জন্য বিশেষভাবে তৈরি
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            মাদরাসার জন্য প্রয়োজনীয়{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-yellow-300">
              বিশেষ ব্যবস্থাপনা
            </span>
          </h2>
          <p className="text-green-200/70 text-lg max-w-2xl mx-auto">
            সাধারণ স্কুল সফটওয়্যারে যা নেই — মাদরাসার অনন্য প্রয়োজনীয়তা মাথায় রেখে তৈরি করা হয়েছে
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`relative rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 ${
                f.available
                  ? "bg-green-800/40 border-green-700/40 hover:bg-green-800/60"
                  : "bg-green-900/30 border-green-800/30 opacity-60"
              }`}
            >
              {!f.available && (
                <span className="absolute top-3 right-3 text-[10px] bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 px-2 py-0.5 rounded-full font-medium">
                  শীঘ্রই
                </span>
              )}
              <div className="w-11 h-11 bg-green-700/60 rounded-xl flex items-center justify-center mb-3">
                <f.icon size={20} className="text-green-300" />
              </div>
              <h3 className="font-semibold text-white mb-1.5 text-[15px]">{f.title}</h3>
              <p className="text-green-300/70 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-green-300/60 text-sm mb-4">
            মাদরাসার জন্য বিশেষ প্যাকেজ সম্পর্কে জানতে
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-green-900/50"
          >
            আমাদের সাথে যোগাযোগ করুন
          </a>
        </div>
      </div>
    </section>
  );
}
