"use client";

import { FileX, MessageSquareX, ClipboardX, WalletCards, MonitorX } from "lucide-react";

const problems = [
  {
    number: "০১",
    icon: FileX,
    title: "Manual Records",
    description: "শিক্ষার্থী ও হিসাবের তথ্য খাতা/Excel-এ ছড়িয়ে থাকা। সামান্য ভুল বা হারানো মানেই বড় বিপদ।",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    number: "০২",
    icon: MessageSquareX,
    title: "যোগাযোগ সমস্যা",
    description: "নোটিশ ও গুরুত্বপূর্ণ তথ্য অভিভাবকদের কাছে দ্রুত পৌঁছানো কঠিন। ফোনে ফোনে সময় নষ্ট।",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    number: "০৩",
    icon: ClipboardX,
    title: "Result Management",
    description: "ফলাফল তৈরি ও প্রকাশ করতে অতিরিক্ত সময় ও শ্রম লাগে। মার্কশিট তৈরিতে ঘণ্টার পর ঘণ্টা।",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    number: "০৪",
    icon: WalletCards,
    title: "Fee Management",
    description: "বকেয়া, সংগ্রহ ও হিসাব track করা কঠিন। কে কতটুকু দিয়েছে তার সঠিক হিসাব রাখা ঝামেলার।",
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    number: "০৫",
    icon: MonitorX,
    title: "Professional Website",
    description: "নিজস্ব website তৈরি ও পরিচালনা করা আলাদা খরচ ও ঝামেলার বিষয়। তৃতীয় পক্ষের উপর নির্ভরতা।",
    color: "text-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
];

export default function ProblemSection() {
  return (
    <section id="solutions" className="section-pad bg-gray-50 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 geo-pattern opacity-50" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-red-100 text-red-600 mb-4">সমস্যা চিহ্নিত</span>
          <h2 className="section-heading">
            আপনার প্রতিষ্ঠানের ব্যবস্থাপনা কি এখনো{" "}
            <span className="text-red-500">খাতা, Excel</span> আর{" "}
            <span className="text-red-500">আলাদা আলাদা সফটওয়্যারে?</span>
          </h2>
          <p className="section-subheading">
            বেশিরভাগ শিক্ষা প্রতিষ্ঠান এই ৫টি সমস্যার সাথে প্রতিদিন লড়াই করছে
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.slice(0, 3).map((p) => (
            <ProblemCard key={p.number} {...p} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto">
          {problems.slice(3).map((p) => (
            <ProblemCard key={p.number} {...p} />
          ))}
        </div>

        {/* Bridge to solution */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-blue-100 rounded-2xl px-6 py-4 shadow-sm">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">→</span>
            </div>
            <p className="text-gray-700 font-medium">
              Dikkhaloy এই সব সমস্যার{" "}
              <strong className="text-blue-600">একটি সমাধান</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ number, icon: Icon, title, description, color, bg, border }: (typeof problems)[0]) {
  return (
    <div className={`card p-6 border ${border} hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group`}>
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
          <Icon size={22} className={color} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`text-xs font-bold ${color} font-mono`}>{number}</span>
            <h3 className="font-semibold text-gray-800 text-base">{title}</h3>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
