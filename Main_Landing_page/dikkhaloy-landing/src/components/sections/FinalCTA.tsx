"use client";

import { ArrowRight, Play, Check } from "lucide-react";

const points = [
  "কোনো credit card লাগবে না",
  "বিনামূল্যে শুরু করুন",
  "যেকোনো সময় বাতিল",
  "Onboarding support",
];

export default function FinalCTA() {
  return (
    <section id="trial" className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900" />
      <div className="absolute inset-0 geo-pattern opacity-20" />
      {/* Subtle glow blobs */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <div className="container-xl relative z-10 text-center">
        {/* Islamic crescent accent */}
        <div className="text-3xl mb-4 opacity-60">✦</div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight text-balance">
          আপনার প্রতিষ্ঠানকে নিয়ে যান{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400">
            ডিজিটাল যুগে
          </span>
        </h2>

        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          একটি প্ল্যাটফর্ম। একটি পূর্ণাঙ্গ সমাধান।{" "}
          <strong className="text-white">আপনার প্রতিষ্ঠানের নিজস্ব পরিচয়।</strong>
        </p>

        {/* Trust points */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {points.map((p) => (
            <div key={p} className="flex items-center gap-2 text-blue-100 text-sm">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check size={11} className="text-white" strokeWidth={3} />
              </div>
              {p}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/register"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-blue-700 font-bold px-8 py-4 rounded-2xl text-base transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
          >
            বিনামূল্যে শুরু করুন
            <ArrowRight size={18} />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-semibold px-7 py-4 rounded-2xl text-base transition-all backdrop-blur-sm"
          >
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Play size={14} className="ml-0.5" />
            </span>
            একটি Demo দেখুন
          </a>
        </div>

        {/* Bottom tagline */}
        <p className="text-blue-300/60 text-sm mt-8">
          ইতোমধ্যে ব্যবহার করছেন?{" "}
          <a href="/login" className="text-blue-200 hover:text-white underline transition-colors">
            Login করুন
          </a>
        </p>
      </div>
    </section>
  );
}
