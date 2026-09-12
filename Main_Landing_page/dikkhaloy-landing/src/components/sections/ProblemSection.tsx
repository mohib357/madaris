"use client";

import { FileX, MessageSquareX, ClipboardX, WalletCards, MonitorX } from "lucide-react";

const problems = [
  { n:"০১", icon:FileX,          title:"Manual Records",         desc:"শিক্ষার্থী ও হিসাবের তথ্য খাতা/Excel-এ ছড়িয়ে থাকা। সামান্য ভুল বা হারানো মানেই বড় বিপদ।",           glow:"#ef4444", iconBg:"bg-red-100",    iconColor:"text-red-500",    accent:"from-red-500 to-rose-500",     cardBg:"bg-red-50/40"    },
  { n:"০২", icon:MessageSquareX, title:"যোগাযোগ সমস্যা",         desc:"নোটিশ ও গুরুত্বপূর্ণ তথ্য অভিভাবকদের কাছে দ্রুত পৌঁছানো কঠিন। ফোনে ফোনে সময় নষ্ট।",              glow:"#f59e0b", iconBg:"bg-amber-100",  iconColor:"text-amber-600",  accent:"from-amber-500 to-orange-500", cardBg:"bg-amber-50/40"  },
  { n:"০৩", icon:ClipboardX,     title:"Result Management",       desc:"ফলাফল তৈরি ও প্রকাশ করতে অতিরিক্ত সময় ও শ্রম লাগে। মার্কশিট তৈরিতে ঘণ্টার পর ঘণ্টা।",            glow:"#f97316", iconBg:"bg-orange-100", iconColor:"text-orange-500", accent:"from-orange-500 to-amber-500",  cardBg:"bg-orange-50/40" },
  { n:"০৪", icon:WalletCards,    title:"Fee Management",          desc:"বকেয়া, সংগ্রহ ও হিসাব track করা কঠিন। কে কতটুকু দিয়েছে তার সঠিক হিসাব রাখা ঝামেলার।",           glow:"#ec4899", iconBg:"bg-pink-100",   iconColor:"text-pink-500",   accent:"from-pink-500 to-rose-500",    cardBg:"bg-pink-50/40"   },
  { n:"০৫", icon:MonitorX,       title:"Professional Website",    desc:"নিজস্ব website তৈরি ও পরিচালনা করা আলাদা খরচ ও ঝামেলার বিষয়। তৃতীয় পক্ষের উপর নির্ভরতা।",    glow:"#8b5cf6", iconBg:"bg-violet-100", iconColor:"text-violet-500", accent:"from-violet-500 to-purple-500", cardBg:"bg-violet-50/40" },
];

function ProblemCard({ p }: { p: typeof problems[0] }) {
  return (
    <div className="rotate-border-cw group" style={{ "--glow-col": p.glow } as React.CSSProperties}>
      <div className={`rb-inner p-6 rounded-[14px] ${p.cardBg} hover:-translate-y-1 transition-transform duration-200`}
        style={{ boxShadow: `0 8px 32px ${p.glow}22, 0 2px 8px rgba(0,0,0,0.10)` }}>
        <div className={`h-0.5 w-12 bg-gradient-to-r ${p.accent} rounded-full mb-4`} />
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 ${p.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}
            style={{ boxShadow: `0 4px 16px ${p.glow}44` }}>
            <p.icon size={22} className={p.iconColor} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`text-xs font-bold ${p.iconColor} font-mono`}>{p.n}</span>
              <h3 className="font-semibold text-gray-800 text-base">{p.title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section id="solutions" className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#fef3f2 0%,#fff7ed 50%,#fdf4ff 100%)" }}>
      <div className="absolute inset-0 pat-arcs" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-red-100 text-red-600 mb-4">সমস্যা চিহ্নিত</span>
          <h2 className="section-heading">
            আপনার প্রতিষ্ঠানের ব্যবস্থাপনা কি এখনো{" "}
            <span className="text-red-500">খাতা, Excel</span> আর{" "}
            <span className="text-red-500">আলাদা আলাদা সফটওয়্যারে?</span>
          </h2>
          <p className="section-subheading">বেশিরভাগ শিক্ষা প্রতিষ্ঠান এই ৫টি সমস্যার সাথে প্রতিদিন লড়াই করছে</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.slice(0,3).map(p => <ProblemCard key={p.n} p={p} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto">
          {problems.slice(3).map(p => <ProblemCard key={p.n} p={p} />)}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-blue-100 rounded-2xl px-6 py-4 shadow-sm">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">→</span>
            </div>
            <p className="text-gray-700 font-medium">Dikkhaloy এই সব সমস্যার <strong className="text-blue-600">একটি সমাধান</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}
