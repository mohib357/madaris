"use client";

const kpis = [
  { label: "শিক্ষার্থী", value: "১,২৪৮", color: "bg-blue-50 text-blue-600", border: "border-blue-100", note: "Demo" },
  { label: "শিক্ষক", value: "৮৬", color: "bg-purple-50 text-purple-600", border: "border-purple-100", note: "Demo" },
  { label: "উপস্থিতি", value: "৯৪.৮%", color: "bg-green-50 text-green-600", border: "border-green-100", note: "Demo" },
  { label: "আজকের আয়", value: "৳৪৮,৫০০", color: "bg-emerald-50 text-emerald-600", border: "border-emerald-100", note: "Demo" },
  { label: "বকেয়া", value: "৳২,৪৫,০০০", color: "bg-red-50 text-red-500", border: "border-red-100", note: "Demo" },
];

const chartBars = [
  { month: "জুলাই", attendance: 88, fee: 72 },
  { month: "আগস্ট", attendance: 91, fee: 85 },
  { month: "সেপ্টেম্বর", attendance: 94, fee: 90 },
  { month: "অক্টোবর", attendance: 87, fee: 78 },
  { month: "নভেম্বর", attendance: 95, fee: 95 },
  { month: "ডিসেম্বর", attendance: 90, fee: 88 },
];

export default function DashboardAnalytics() {
  return (
    <section className="section-pad bg-gray-50 relative">
      <div className="absolute inset-0 geo-pattern opacity-30" />
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
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Top bar */}
          <div className="bg-gray-800 flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-gray-400 text-xs">Admin Dashboard — Dhanmondi Model School</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">A</span>
              </div>
              <span className="text-gray-400 text-xs">Admin</span>
            </div>
          </div>

          <div className="p-5">
            {/* KPI cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-5">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className={`relative p-3.5 rounded-2xl border ${k.border} ${k.color}`}
                >
                  <div className="text-xl font-bold">{k.value}</div>
                  <div className="text-xs mt-0.5 opacity-80">{k.label}</div>
                  <div className="absolute top-2 right-2 text-[8px] bg-white/60 px-1 rounded text-gray-400">
                    {k.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Bar chart */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="text-xs font-semibold text-gray-600 mb-3">উপস্থিতি ও আয় — মাসভিত্তিক</div>
                <div className="flex items-end gap-2 h-28">
                  {chartBars.map((b) => (
                    <div key={b.month} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex items-end gap-0.5" style={{ height: "80px" }}>
                        <div
                          className="flex-1 bg-blue-400 rounded-t"
                          style={{ height: `${b.attendance}%` }}
                        />
                        <div
                          className="flex-1 bg-green-400 rounded-t"
                          style={{ height: `${b.fee}%` }}
                        />
                      </div>
                      <span className="text-[8px] text-gray-400">{b.month.slice(0, 3)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-2">
                  <div className="flex items-center gap-1 text-[9px] text-gray-500">
                    <div className="w-2 h-2 bg-blue-400 rounded-sm" /> উপস্থিতি
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-gray-500">
                    <div className="w-2 h-2 bg-green-400 rounded-sm" /> আয়
                  </div>
                </div>
              </div>

              {/* Donut placeholder + quick stats */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="text-xs font-semibold text-gray-600 mb-3">Class-ভিত্তিক শিক্ষার্থী</div>
                <div className="space-y-2">
                  {[
                    { class: "৬ষ্ঠ শ্রেণি", count: 210, total: 250 },
                    { class: "৭ম শ্রেণি", count: 195, total: 250 },
                    { class: "৮ম শ্রেণি", count: 220, total: 250 },
                    { class: "৯ম শ্রেণি", count: 185, total: 250 },
                  ].map((r) => (
                    <div key={r.class} className="flex items-center gap-2">
                      <div className="text-[10px] text-gray-500 w-20">{r.class}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-full bg-indigo-500 rounded-full"
                          style={{ width: `${(r.count / r.total) * 100}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-gray-600 w-6 text-right">{r.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 pb-3">
            <p className="text-[10px] text-gray-300 text-center">
              * উপরের সংখ্যা ও চার্ট UI demo উদ্দেশ্যে। বাস্তব ব্যবহারে আপনার প্রতিষ্ঠানের real data দেখাবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
