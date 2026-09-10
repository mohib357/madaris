"use client";

import { useState } from "react";
import { Phone, Mail, Globe } from "lucide-react";
import type { ContactInfo } from "@/types/institution";

interface Props {
  contact: ContactInfo;
}

const LANGUAGES = [
  { code: "bn", label: "বাংলা" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

export default function UtilityBar({ contact }: Props) {
  const [lang, setLang] = useState("bn");

  return (
    <div
      className="hidden md:block text-xs text-white/90 no-print"
      style={{ backgroundColor: "var(--color-primary-dark)" }}
    >
      <div className="container-custom flex items-center justify-between py-1.5 gap-4">
        {/* Left — contact quick info */}
        <div className="flex items-center gap-4">
          {contact.phone[0] && (
            <a
              href={`tel:${contact.phone[0]}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="ফোন নম্বর"
            >
              <Phone size={12} />
              <span>{contact.phone[0]}</span>
            </a>
          )}
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="ইমেইল"
            >
              <Mail size={12} />
              <span>{contact.email}</span>
            </a>
          )}
        </div>

        {/* Right — Language Switcher */}
        <div className="flex items-center gap-1" role="navigation" aria-label="ভাষা নির্বাচন">
          <Globe size={12} className="mr-1 opacity-70" />
          {LANGUAGES.map((l, i) => (
            <span key={l.code} className="flex items-center">
              <button
                onClick={() => setLang(l.code)}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === l.code
                    ? "bg-white/20 text-white font-semibold"
                    : "hover:text-white opacity-80"
                }`}
                aria-pressed={lang === l.code}
                aria-label={`${l.label} ভাষায় পরিবর্তন করুন`}
              >
                {l.label}
              </button>
              {i < LANGUAGES.length - 1 && (
                <span className="opacity-40 mx-0.5">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
