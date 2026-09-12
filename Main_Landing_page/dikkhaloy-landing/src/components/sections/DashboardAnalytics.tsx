"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Users, DollarSign, BarChart3, BookOpen } from "lucide-react";

const kpis = [
  { label: "শিক্ষার্থী",  value: "১,২৪৮", trend: "+১২%", up: true,  icon: Users,      bg: "bg-blue-50",    iconColor: "text-blue-600",    border: "border-blue-100" },
  { label: "শিক্ষক",       value: "৮৬",    trend: "+৩",   up: true,  icon: BookOpen,   bg: "bg-purple-50",  iconColor: "text-purple-600",  border: "border-purple-100" },
  { label: "উপস্থিতি",    value: "৯৪.৮%", trend: "+২.১%",up: true,  icon: BarChart3,  bg: "bg-green-50",   iconColor: "text-green-600",   border: "border-green-100" },
  { label: "আজকের আয়",   value: "৳৪৮,৫০০",trend: "+৳৩,২০০",up:true, icon: DollarSign, bg: "bg-emerald-50", iconColor: "text-emerald-600", border: "border-emerald-100" },
  { label: "বকেয়া",       value: "৳২,৪৫,০০০",trend: "-৳৫,০০০",up:false,icon: DollarSign,bg: "bg-red-50",    iconColor: "text-red-500",     border: "border-red-100" },
];

const chartBars = [
  { month: "জুলাই",      attendance: 88, fee: 72 },
  { month: "আগস্ট",      attendance: 91, fee: 85 },
  { month: "সেপ্টেম্বর", attendance: 94, fee: 90 },
  { month: "অক্টোবর",   attendance: 87, fee: 78 },
  { month: "নভেম্বর",    attendance: 95, fee: 95 },
  { month: "ডিসেম্বর",   attendance: 90, fee: 88 },
];

const classData = [
  { class: "৬ষ্ঠ শ্রেণি", count: 210, total: 250, color: "bg-blue-500" },
  { class: "৭ম শ্রেণি",   count: 195, total: 250, color: "bg-indigo-500" },
  { class: "৮ম শ্রেণি",   count: 220, total: 250, color: "bg-purple-500" },
  { class: "৯ম শ্রেণি",   count: 185, total: 250, color: "bg-violet-500" },
  { class: "১০ম শ্রেণি",  count: 438, total: 500, color: "bg-fuchsia-500" },
];

const recentActivity = [
  { text: "রহিম (৬ষ্ঠ) ভর্তি হয়েছেন",    time: "২ মিনিট আগে",  icon: "✅", color: "text-green-600" },
  { text: "মাসিক ফি সংগ্রহ ৳৪৮,৫০০",    time: "১৫ মিনিট আগে", icon: "💰", color: "text-blue-600"  },
  { text: "৮ম শ্রেণির হাজিরা সম্পন্ন",   time: "৩০ মিনিট আগে", icon: "📋", color: "text-purple-600"},
  { text: "বার্ষিক পরীক্ষার নোটিশ",      time: "১ ঘণ্টা আগে",  icon: "📢", color: "text-amber-600" },
];

export default function DashboardAnalytics() {
  const [animatedBars, setAnimatedBars] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimatedBars(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="section-pad relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pat-grid" style={{ opacity:1 }} />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-blue-100 text-blue-700 mb-4">Dashboard & Analytics</span>
          <h2 className="section-heading">
            সিদ্ধান্ত নিন{" "}
            <span className="gradient-text">তথ্যের ভিত্তিতে</span>
          </h2>
          <p className="section-subheading">
            প্রতিষ্ঠানের সব গুরুত্বপূর্ণ তথ্য একটি dashboard-এ। Real-time data, charts ও reports।
          </p>
        </div>

        {/* Dashboard mockup */}
        <div
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 shadow-2xl"
          style={{ borderColor: "#2563eb33", boxShadow: "0 20px 60px rgba(37,99,235,0.15)" }}
        >
          {/* Title bar */}
          <div className="bg-gray-800 flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="bg-gray-700 rounded-md px-3 py-1 flex items-center gap-1.5">
                <span className="text-green-400 text-xs">🔒</span>
                <span className="text-gray-300 text-xs">app.dikkhaloy.com/dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">A</span>
              </div>
              <span className="text-gray-400 text-xs">Admin</span>
              <span className="text-[9px] bg-green-500/20 text-green-400 border border-green-500/30 px-1.5 py-0.5 rounded-full">● Live</span>
            </div>
          </div>

          <div className="bg-white p-5 space-y-4">
            {/* KPI row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {kpis.map((k) => (
                <div key={k.label}
                  className={`relative p-3.5 rounded-2xl border-2 ${k.border} ${k.bg} hover:-translate-y-0.5 hover:shadow-md transition-all group`}>
                  <div className={`w-7 h-7 rounded-lg ${k.bg} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
                    style={{ filter: "brightness(0.9)" }}>
                    <k.icon size={14} className={k.iconColor} />
                  </div>
                  <div className="text-lg font-extrabold text-gray-900 leading-none">{k.value}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{k.label}</div>
                  <div className={`flex items-center gap-0.5 text-[9px] font-bold mt-1 ${k.up ? "text-green-600" : "text-red-500"}`}>
                    {k.up ? <TrendingUp size={9} /> : <TrendingDown size={9} />} {k.trend}
                  </div>
                  <div className="absolute top-2 right-2 text-[7px] bg-amber-100 text-amber-600 px-1 rounded font-medium">Demo</div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Bar chart */}
              <div className="md:col-span-2 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-gray-700">উপস্থিতি ও আয় — মাসভিত্তিক</div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 text-[9px] text-gray-500"><div className="w-2 h-2 bg-blue-400 rounded-sm" />উপস্থিতি</div>
                    <div className="flex items-center gap-1 text-[9px] text-gray-500"><div className="w-2 h-2 bg-emerald-400 rounded-sm" />আয়</div>
                  </div>
                </div>
                <div className="flex items-end gap-2 h-28">
                  {chartBars.map((b, idx) => (
                    <div key={b.month} className="flex-1 flex flex-col items-center gap-0.5">
                      <div className="w-full flex items-end gap-0.5" style={{ height: "80px" }}>
                        <div className="flex-1 bg-blue-400 rounded-t transition-all duration-700" style={{ height: animatedBars ? `${b.attendance}%` : "0%" }} />
                        <div className="flex-1 bg-emerald-400 rounded-t transition-all duration-700" style={{ height: animatedBars ? `${b.fee}%` : "0%", transitionDelay: `${idx * 60}ms` }} />
                      </div>
                      <span className="text-[7px] text-gray-400">{b.month.slice(0, 3)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Class distribution */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="text-xs font-semibold text-gray-700 mb-3">Class-ভিত্তিক শিক্ষার্থী</div>
                <div className="space-y-2">
                  {classData.map((r) => (
                    <div key={r.class} className="flex items-center gap-2">
                      <div className="text-[9px] text-gray-500 w-16 flex-shrink-0">{r.class}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className={`h-full ${r.color} rounded-full transition-all duration-700`}
                          style={{ width: animatedBars ? `${(r.count / r.total) * 100}%` : "0%" }} />
                      </div>
                      <div className="text-[9px] text-gray-600 w-7 text-right font-medium">{r.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent activity */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <div className="text-xs font-semibold text-gray-700 mb-3">সাম্প্রতিক কার্যক্রম</div>
              <div className="grid sm:grid-cols-2 gap-2">
                {recentActivity.map((a, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2 border border-gray-100">
                    <span className="text-base">{a.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-gray-700 font-medium truncate">{a.text}</div>
                      <div className="text-[9px] text-gray-400">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-5 py-2 border-t border-gray-100 text-center">
            <p className="text-[10px] text-gray-300">* উপরের সংখ্যা ও চার্ট UI demo উদ্দেশ্যে। বাস্তব ব্যবহারে আপনার প্রতিষ্ঠানের real data দেখাবে।</p>
          </div>
        </div>
      </div>
    </section>
  );
}
