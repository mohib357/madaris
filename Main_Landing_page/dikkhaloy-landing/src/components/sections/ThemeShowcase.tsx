"use client";

import { useState } from "react";
import { Eye, Palette, Check } from "lucide-react";

const themes = [
  {
    id: "modern-school",
    name: "Modern School",
    description: "আধুনিক, পরিষ্কার ডিজাইন। স্কুলের জন্য আদর্শ।",
    tag: "জনপ্রিয়",
    tagColor: "bg-blue-100 text-blue-700",
    primary: "#2563EB",
    secondary: "#E0EAFF",
    headerBg: "bg-gradient-to-r from-blue-600 to-blue-800",
    headerText: "text-white",
    accent: "bg-blue-600",
    btnGrad: "from-blue-600 to-indigo-600",
    glowColor: "#2563EB",
    preview: { nav: ["হোম","পরিচিতি","ভর্তি","নোটিশ","যোগাযোগ"], hero: "Dhanmondi Model School", sub: "শ্রেষ্ঠত্বের সন্ধানে — ১৯৮৫ সাল থেকে" },
  },
  {
    id: "academic-classic",
    name: "Academic Classic",
    description: "Traditional academic look। সম্ভ্রান্ত ও বিশ্বস্ত অনুভূতি।",
    tag: "Classic",
    tagColor: "bg-gray-100 text-gray-700",
    primary: "#1E3A5F",
    secondary: "#EEF2FF",
    headerBg: "bg-gradient-to-r from-slate-800 to-slate-900",
    headerText: "text-white",
    accent: "bg-slate-700",
    btnGrad: "from-slate-700 to-slate-900",
    glowColor: "#1E3A5F",
    preview: { nav: ["Home","About","Academic","Notice","Contact"], hero: "Dhaka Ideal School", sub: "Excellence in Education Since 1972" },
  },
  {
    id: "islamic-madrasa",
    name: "Islamic Madrasa",
    description: "ইসলামিক সবুজ টোন। মাদরাসার জন্য বিশেষভাবে তৈরি।",
    tag: "মাদরাসা",
    tagColor: "bg-green-100 text-green-700",
    primary: "#15803D",
    secondary: "#F0FDF4",
    headerBg: "bg-gradient-to-r from-green-800 to-green-900",
    headerText: "text-white",
    accent: "bg-green-600",
    btnGrad: "from-green-600 to-emerald-700",
    glowColor: "#15803D",
    preview: { nav: ["পরিচিতি","ভর্তি","নোটিশ","ফলাফল","যোগাযোগ"], hero: "জামিয়া ইসলামিয়া", sub: "ইলম ও আমলের কেন্দ্র — বাংলাদেশ" },
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "সরল, পরিষ্কার ও দ্রুত লোডিং। সব ধরনের প্রতিষ্ঠানের জন্য।",
    tag: "Fast",
    tagColor: "bg-gray-100 text-gray-600",
    primary: "#374151",
    secondary: "#F9FAFB",
    headerBg: "bg-white border-b border-gray-200",
    headerText: "text-gray-900",
    accent: "bg-gray-800",
    btnGrad: "from-gray-700 to-gray-900",
    glowColor: "#374151",
    preview: { nav: ["About","Admission","Notice","Result","Contact"], hero: "City Model Academy", sub: "Building Future Leaders" },
  },
  {
    id: "premium",
    name: "Premium",
    description: "Gradient ও premium visual। বড় ও বিখ্যাত প্রতিষ্ঠানের জন্য।",
    tag: "Premium",
    tagColor: "bg-purple-100 text-purple-700",
    primary: "#7C3AED",
    secondary: "#EDE9FE",
    headerBg: "bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-800",
    headerText: "text-white",
    accent: "bg-violet-600",
    btnGrad: "from-violet-600 to-indigo-700",
    glowColor: "#7C3AED",
    preview: { nav: ["Home","About","Programs","News","Contact"], hero: "Premier International School", sub: "Excellence, Innovation & Character" },
  },
];

export default function ThemeShowcase() {
  const [selected, setSelected] = useState(themes[0].id);
  const activeTheme = themes.find((t) => t.id === selected) || themes[0];

  return (
    <section id="themes" className="section-pad relative overflow-hidden" style={{ background:"linear-gradient(135deg,#f8faff 0%,#fdf4ff 50%,#f0f9ff 100%)" }}>
      <div className="absolute inset-0 pat-checker" style={{ opacity:1 }} />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-purple-100 text-purple-700 mb-4">Website Themes</span>
          <h2 className="section-heading">
            আপনার প্রতিষ্ঠানের জন্য পছন্দ করুন{" "}
            <span className="gradient-text">আপনার Theme</span>
          </h2>
          <p className="section-subheading">
            একই শক্তিশালী Dikkhaloy system, কিন্তু আপনার প্রতিষ্ঠানের পরিচয় অনুযায়ী আলাদা design।
          </p>
        </div>

        {/* Premium theme selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {themes.map((t) => {
            const isActive = selected === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSelected(t.id)}
                className={`
                  relative flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold
                  transition-all duration-250 overflow-hidden
                  ${isActive
                    ? "text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md hover:scale-[1.03] hover:-translate-y-0.5"
                  }
                `}
                style={isActive ? {
                  background: `linear-gradient(135deg, ${t.glowColor}, ${t.glowColor}cc)`,
                  boxShadow: `0 8px 24px ${t.glowColor}55`,
                } : {}}
                aria-pressed={isActive}
              >
                {/* Color dot */}
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${isActive ? "border-white/50 scale-110" : "border-gray-200"}`}
                  style={{ backgroundColor: t.primary }}
                />
                <span>{t.name}</span>
                {isActive && <Check size={14} className="ml-0.5 text-white/80" />}
                {/* shimmer on hover */}
                {!isActive && (
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>

        {/* Preview window */}
        <div className="max-w-3xl mx-auto">
          <div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 transition-all duration-300"
            style={{ borderColor: activeTheme.glowColor + "44", boxShadow: `0 20px 60px ${activeTheme.glowColor}22` }}
          >
            {/* Browser chrome */}
            <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200 ml-2 max-w-xs flex items-center gap-1">
                <span className="text-green-500">🔒</span> yourschool.dikkhaloy.com
              </div>
            </div>

            {/* Site header */}
            <div className={`${activeTheme.headerBg} px-6 py-4`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Palette size={14} className={activeTheme.headerText} />
                  </div>
                  <div className={`font-bold ${activeTheme.headerText} text-sm`}>{activeTheme.preview.hero}</div>
                </div>
                <div className="hidden sm:flex gap-3">
                  {activeTheme.preview.nav.slice(0, 4).map((n) => (
                    <span key={n} className={`text-xs ${activeTheme.headerText} opacity-80`}>{n}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero */}
            <div className="px-6 py-10 text-center" style={{ background: activeTheme.secondary }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: activeTheme.primary }}>{activeTheme.preview.hero}</h3>
              <p className="text-gray-600 text-sm mb-5">{activeTheme.preview.sub}</p>
              <div className="flex justify-center gap-3">
                <button className={`bg-gradient-to-r ${activeTheme.btnGrad} text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-md`}>অনলাইন ভর্তি</button>
                <button className="bg-white text-gray-700 px-5 py-2 rounded-xl text-sm font-medium border border-gray-200">আরো জানুন</button>
              </div>
            </div>

            {/* Quick links */}
            <div className="grid grid-cols-4 gap-0 border-t border-gray-100">
              {["নোটিশ","রেজাল্ট","গ্যালারি","যোগাযোগ"].map((l, i) => (
                <div key={l} className={`py-3 text-center text-xs font-medium text-gray-600 ${i < 3 ? "border-r border-gray-100" : ""} hover:bg-gray-50`}>{l}</div>
              ))}
            </div>
            <div className="bg-gray-50 py-2 text-center border-t border-gray-100">
              <span className="text-[10px] text-gray-400">Powered by Dikkhaloy</span>
            </div>
          </div>

          {/* Theme info */}
          <div
            className="mt-5 bg-white rounded-2xl p-5 border-2 flex items-center justify-between gap-4 transition-all duration-300"
            style={{ borderColor: activeTheme.glowColor + "33" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-gray-900">{activeTheme.name}</h4>
                <span className={`tag text-[10px] ${activeTheme.tagColor}`}>{activeTheme.tag}</span>
              </div>
              <p className="text-gray-500 text-sm">{activeTheme.description}</p>
            </div>
            <a href="#trial" className="flex-shrink-0 inline-flex items-center gap-2 btn-primary text-sm py-2.5 px-4">
              <Eye size={14} />এই Theme বেছে নিন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
