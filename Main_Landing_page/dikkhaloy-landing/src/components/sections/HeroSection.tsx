"use client";

import { useState, useEffect } from "react";
import { Play, ArrowRight, CheckCircle, TrendingUp, Users, BookOpen, Globe } from "lucide-react";

const floatingCards = [
  { icon: CheckCircle, label: "Online Admission", color: "text-green-500", bg: "bg-green-50" },
  { icon: TrendingUp, label: "Automated Result", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Users, label: "Guardian Portal", color: "text-purple-500", bg: "bg-purple-50" },
  { icon: Globe, label: "Own Website", color: "text-orange-500", bg: "bg-orange-50" },
];

const sidebarItems = [
  { label: "Dashboard", active: true },
  { label: "Students" },
  { label: "Teachers" },
  { label: "Attendance" },
  { label: "Results" },
  { label: "Fees" },
  { label: "Admission" },
  { label: "Website" },
];

const stats = [
  { label: "মোট শিক্ষার্থী", value: "১,২৪৮", trend: "+12%", color: "text-blue-600" },
  { label: "উপস্থিতি হার", value: "৯৪.৮%", trend: "+2.1%", color: "text-green-600" },
  { label: "আজকের সংগ্রহ", value: "৳৪৮,৫০০", trend: "+৳৩,২০০", color: "text-indigo-600" },
];

function DashboardMockup() {
  const [activeBar, setActiveBar] = useState(0);
  const bars = [65, 80, 55, 90, 72, 88, 95, 70, 82, 91, 75, 87];

  useEffect(() => {
    const len = bars.length;
    const t = setInterval(() => {
      setActiveBar((p) => (p + 1) % len);
    }, 800);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashboard-mock bg-white w-full max-w-[580px]">
      {/* Titlebar */}
      <div className="bg-gray-800 flex items-center gap-2 px-4 py-2.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="flex-1 mx-4 bg-gray-700 rounded-md h-5 flex items-center px-3">
          <span className="text-gray-400 text-[10px]">app.dikkhaloy.com/dashboard</span>
        </div>
      </div>

      {/* App Shell */}
      <div className="flex bg-gray-50" style={{ height: "320px" }}>
        {/* Sidebar */}
        <div className="w-36 bg-gray-900 py-3 flex flex-col gap-0.5 flex-shrink-0">
          <div className="px-3 mb-3 flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">দি</span>
            </div>
            <span className="text-white text-[10px] font-semibold">Dikkhaloy</span>
          </div>
          {sidebarItems.map((item) => (
            <div
              key={item.label}
              className={`mx-2 px-2 py-1.5 rounded-md text-[10px] cursor-pointer transition-colors ${
                item.active
                  ? "bg-blue-600 text-white font-medium"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-3 overflow-hidden">
          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                <div className="text-[9px] text-gray-500 mb-1">{s.label}</div>
                <div className={`text-sm font-bold ${s.color}`}>{s.value}</div>
                <div className="text-[9px] text-green-500">{s.trend}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100 mb-2">
            <div className="text-[9px] text-gray-500 mb-1.5 font-medium">উপস্থিতি — মাসভিত্তিক</div>
            <div className="flex items-end gap-0.5 h-16">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t transition-all duration-500 ${
                    i <= activeBar ? "bg-blue-500" : "bg-gray-200"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Mini table */}
          <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
            <div className="text-[9px] text-gray-500 mb-1.5 font-medium">সাম্প্রতিক ভর্তি</div>
            {["রহিম, ৬ষ্ঠ শ্রেণি", "করিম, ৭ম শ্রেণি", "সালমা, ৮ম শ্রেণি"].map((s) => (
              <div key={s} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                <span className="text-[9px] text-gray-600">{s}</span>
                <span className="text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">ভর্তি হয়েছে</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-100px)] bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 overflow-hidden flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 geo-pattern opacity-30" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />

      {/* Islamic geometric accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/60 to-transparent" />

      <div className="container-xl relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-600/40 text-blue-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              স্কুল ও মাদরাসার জন্য সম্পূর্ণ ডিজিটাল প্ল্যাটফর্ম
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight text-balance">
                আপনার স্কুল বা মাদরাসা পরিচালনা হোক{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-green-400">
                  এক প্ল্যাটফর্মে
                </span>
              </h1>
              <p className="text-blue-100/80 text-lg leading-relaxed max-w-lg">
                ভর্তি, ফি কালেকশন, ডিজিটাল হাজিরা, রেজাল্ট, হিসাবরক্ষণ, নোটিশ এবং{" "}
                <strong className="text-blue-200">নিজস্ব ওয়েবসাইট</strong>—সবকিছু পরিচালনা করুন একটি একক প্ল্যাটফর্ম থেকে।
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#trial"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-700 font-bold px-7 py-4 rounded-xl transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-0.5 text-base"
              >
                বিনামূল্যে শুরু করুন
                <ArrowRight size={18} />
              </a>
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-4 rounded-xl transition-all backdrop-blur-sm text-base"
                aria-label="Live demo দেখুন"
              >
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Play size={14} className="ml-0.5" />
                </span>
                Live Demo দেখুন
              </button>
            </div>

            {/* Trust micro-text */}
            <p className="text-blue-300/70 text-sm">
              কোনো ক্রেডিট কার্ড লাগবে না · বিনামূল্যে শুরু করুন · যেকোনো সময় বাতিল করুন
            </p>

            {/* Feature badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {floatingCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 flex flex-col items-center gap-1.5 hover:bg-white/15 transition-all"
                >
                  <card.icon size={18} className={card.color.replace("text-", "text-")} />
                  <span className="text-white text-[11px] font-medium text-center leading-tight">{card.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard Preview */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl scale-110" />

              {/* Dashboard */}
              <div className="relative animate-[float_5s_ease-in-out_infinite]">
                <DashboardMockup />
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1.5 rounded-xl shadow-xl text-sm font-semibold flex items-center gap-1.5 animate-[float_4s_ease-in-out_infinite_0.5s]">
                <BookOpen size={14} />
                Institution Website ✓
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 px-3 py-2 rounded-xl shadow-xl text-xs font-semibold flex items-center gap-2 animate-[float_4.5s_ease-in-out_infinite_1s]">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users size={12} className="text-purple-600" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px]">Guardian Portal</div>
                  <div className="text-purple-600">Live এখনই</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 50 800 0 480 30C280 50 120 10 0 20L0 60Z" fill="white" />
        </svg>
      </div>

      {/* Demo modal */}
      {demoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Demo video"
          onClick={() => setDemoOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Dikkhaloy Demo</h2>
              <button onClick={() => setDemoOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">✕</button>
            </div>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500 space-y-2">
                <Play size={40} className="mx-auto text-blue-400" />
                <p className="text-sm">Demo video শীঘ্রই আসছে</p>
                <p className="text-xs text-gray-400">আপাতত Live Demo বুক করুন</p>
              </div>
            </div>
            <a
              href="#trial"
              className="btn-primary w-full justify-center mt-4"
              onClick={() => setDemoOpen(false)}
            >
              Live Demo বুক করুন
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
