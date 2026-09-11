"use client";

import { useState } from "react";
import { Phone, HelpCircle, MessageCircle, X } from "lucide-react";
import { useLang, type Lang } from "@/context/LanguageContext";

const languages: { code: Lang; label: string; flag: string; nativeLabel: string }[] = [
  { code: "bn", label: "বাংলা", nativeLabel: "বাংলা", flag: "🇧🇩" },
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", nativeLabel: "العربية", flag: "🕌" },
];

export default function UtilityBar() {
  const { lang, setLang } = useLang();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const currentIdx = languages.findIndex((l) => l.code === lang);
  const currentLang = languages[currentIdx];

  // Cycle to next language on toggle click
  const cycleNext = () => {
    const next = languages[(currentIdx + 1) % languages.length];
    setLang(next.code);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-sm border-b border-blue-700/30">
      <div className="container-xl flex items-center justify-between h-10 gap-4">

        {/* Left — Language Switch (pill toggle) */}
        <div className="flex items-center gap-2">
          {/* Toggle pill */}
          <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/15 backdrop-blur-sm">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`
                  px-3 py-1 rounded-full text-[11px] font-semibold transition-all duration-250 flex items-center gap-1.5
                  ${lang === l.code
                    ? "bg-white text-blue-900 shadow-md"
                    : "text-blue-200 hover:text-white"
                  }
                  ${l.code === "ar" ? "font-arabic" : ""}
                `}
                aria-label={`Switch to ${l.label}`}
                aria-pressed={lang === l.code}
              >
                <span className="text-[10px]">{l.flag}</span>
                <span>{l.nativeLabel}</span>
              </button>
            ))}
          </div>
          {/* Quick-cycle button for mobile */}
          <button
            onClick={cycleNext}
            className="sm:hidden text-[10px] bg-white/10 border border-white/20 px-2 py-0.5 rounded-full text-blue-200 hover:text-white transition-colors"
            aria-label="Switch language"
          >
            {currentLang.flag} {currentLang.nativeLabel}
          </button>
        </div>

        {/* Center — announcement ticker */}
        <div className="hidden md:flex items-center gap-2 text-blue-100 text-xs">
          <span className="bg-green-500 text-white px-2 py-0.5 rounded-full font-semibold text-[10px] uppercase tracking-wide animate-pulse">
            নতুন
          </span>
          <span>অনলাইন ভর্তি ও গার্ডিয়ান পোর্টাল এখন সম্পূর্ণ লাইভ!</span>
        </div>

        {/* Right — links */}
        <div className="flex items-center gap-3 text-blue-100">
          <a
            href="#help"
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors text-xs"
            aria-label="Help Center"
          >
            <HelpCircle size={12} />
            <span>Help</span>
          </a>
          <a
            href="tel:+8801XXXXXXXXX"
            className="flex items-center gap-1 hover:text-white transition-colors text-xs"
            aria-label="Sales Hotline"
          >
            <Phone size={12} />
            <span className="hidden sm:inline">Sales Hotline</span>
          </a>
          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors text-xs"
            aria-label="WhatsApp"
          >
            <MessageCircle size={12} />
            <span>WhatsApp</span>
          </a>
          <a
            href="/login"
            className="bg-white/15 hover:bg-white/25 text-white px-3 py-0.5 rounded text-xs font-medium transition-all"
          >
            Login
          </a>
          <button
            onClick={() => setVisible(false)}
            className="text-blue-300 hover:text-white transition-colors ml-1"
            aria-label="Close utility bar"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
