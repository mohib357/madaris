"use client";

import { useState } from "react";
import { Phone, HelpCircle, MessageCircle, X } from "lucide-react";

const languages = [
  { code: "bn", label: "বাংলা", flag: "🇧🇩" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🕌" },
];

export default function UtilityBar() {
  const [activeLang, setActiveLang] = useState("bn");
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-sm">
      <div className="container-xl flex items-center justify-between h-9 gap-4">
        {/* Left — Language Switcher */}
        <div className="flex items-center gap-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setActiveLang(lang.code)}
              className={`px-2.5 py-0.5 rounded text-xs font-medium transition-all duration-150 ${
                activeLang === lang.code
                  ? "bg-white/20 text-white"
                  : "text-blue-200 hover:text-white hover:bg-white/10"
              }`}
              aria-label={`Switch to ${lang.label}`}
            >
              {lang.flag} {lang.label}
            </button>
          ))}
        </div>

        {/* Center — announcement ticker on desktop */}
        <div className="hidden md:flex items-center gap-2 text-blue-100 text-xs">
          <span className="bg-green-500 text-white px-2 py-0.5 rounded-full font-semibold text-[10px] uppercase tracking-wide">
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
