"use client";

import { useState } from "react";
import { Eye } from "lucide-react";

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
    preview: {
      nav: ["হোম", "পরিচিতি", "ভর্তি", "নোটিশ", "যোগাযোগ"],
      hero: "Dhanmondi Model School",
      sub: "শ্রেষ্ঠত্বের সন্ধানে — ১৯৮৫ সাল থেকে",
    },
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
    preview: {
      nav: ["Home", "About", "Academic", "Notice", "Contact"],
      hero: "Dhaka Ideal School",
      sub: "Excellence in Education Since 1972",
    },
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
    preview: {
      nav: ["পরিচিতি", "ভর্তি", "নোটিশ", "ফলাফল", "যোগাযোগ"],
      hero: "জামিয়া ইসলামিয়া",
      sub: "ইলম ও আমলের কেন্দ্র — বাংলাদেশ",
    },
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
    preview: {
      nav: ["About", "Admission", "Notice", "Result", "Contact"],
      hero: "City Model Academy",
      sub: "Building Future Leaders",
    },
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
    preview: {
      nav: ["Home", "About", "Programs", "News", "Contact"],
      hero: "Premier International School",
      sub: "Excellence, Innovation & Character",
    },
  },
];

export default function ThemeShowcase() {
  const [selected, setSelected] = useState(themes[0].id);
  const activeTheme = themes.find((t) => t.id === selected) || themes[0];

  return (
    <section id="themes" className="section-pad bg-gray-50">
      <div className="container-xl">
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

        {/* Theme selector pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selected === t.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: t.primary }}
              />
              {t.name}
            </button>
          ))}
        </div>

        {/* Preview window */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Browser chrome */}
            <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200 ml-2 max-w-xs">
                yourschool.dikkhaloy.com
              </div>
            </div>

            {/* Site preview */}
            <div>
              {/* Header */}
              <div className={`${activeTheme.headerBg} px-6 py-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg" />
                    <div className={`font-bold ${activeTheme.headerText} text-sm`}>
                      {activeTheme.preview.hero}
                    </div>
                  </div>
                  <div className="hidden sm:flex gap-3">
                    {activeTheme.preview.nav.slice(0, 4).map((n) => (
                      <span key={n} className={`text-xs ${activeTheme.headerText} opacity-80`}>{n}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hero area */}
              <div
                className="px-6 py-10 text-center"
                style={{ background: activeTheme.secondary }}
              >
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: activeTheme.primary }}
                >
                  {activeTheme.preview.hero}
                </h3>
                <p className="text-gray-600 text-sm mb-5">{activeTheme.preview.sub}</p>
                <div className="flex justify-center gap-3">
                  <button
                    className={`${activeTheme.accent} text-white px-5 py-2 rounded-xl text-sm font-semibold`}
                  >
                    অনলাইন ভর্তি
                  </button>
                  <button className="bg-white text-gray-700 px-5 py-2 rounded-xl text-sm font-medium border border-gray-200">
                    আরো জানুন
                  </button>
                </div>
              </div>

              {/* Quick links */}
              <div className="grid grid-cols-4 gap-0 border-t border-gray-100">
                {["নোটিশ", "রেজাল্ট", "গ্যালারি", "যোগাযোগ"].map((l, i) => (
                  <div
                    key={l}
                    className={`py-3 text-center text-xs font-medium text-gray-600 ${
                      i < 3 ? "border-r border-gray-100" : ""
                    } hover:bg-gray-50`}
                  >
                    {l}
                  </div>
                ))}
              </div>

              {/* Powered by */}
              <div className="bg-gray-50 py-2 text-center border-t border-gray-100">
                <span className="text-[10px] text-gray-400">Powered by Dikkhaloy</span>
              </div>
            </div>
          </div>

          {/* Theme info */}
          <div className="mt-5 bg-white rounded-2xl p-5 border border-gray-100 flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-gray-900">{activeTheme.name}</h4>
                <span className={`tag text-[10px] ${activeTheme.tagColor}`}>{activeTheme.tag}</span>
              </div>
              <p className="text-gray-500 text-sm">{activeTheme.description}</p>
            </div>
            <a
              href="#trial"
              className="flex-shrink-0 inline-flex items-center gap-2 btn-primary text-sm py-2.5 px-4"
            >
              <Eye size={14} />
              এই Theme বেছে নিন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
