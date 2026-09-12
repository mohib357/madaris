"use client";

import { useState } from "react";
import {
  Globe, Palette, FileText, Image, GraduationCap, Phone,
  DollarSign, Search, ArrowRight, ExternalLink, CheckCircle,
} from "lucide-react";

const websiteFeatures = [
  { icon: Globe,         label: "Custom Domain",  color: "text-blue-600",   bg: "bg-blue-50",   hoverBorder: "#2563eb" },
  { icon: Palette,       label: "Custom Theme",   color: "text-purple-600", bg: "bg-purple-50", hoverBorder: "#7c3aed" },
  { icon: FileText,      label: "Notice Board",   color: "text-amber-600",  bg: "bg-amber-50",  hoverBorder: "#d97706" },
  { icon: GraduationCap, label: "Admission Form", color: "text-green-600",  bg: "bg-green-50",  hoverBorder: "#16a34a" },
  { icon: Image,         label: "Gallery",        color: "text-rose-600",   bg: "bg-rose-50",   hoverBorder: "#e11d48" },
  { icon: FileText,      label: "Result View",    color: "text-indigo-600", bg: "bg-indigo-50", hoverBorder: "#4f46e5" },
  { icon: DollarSign,    label: "Donation",       color: "text-emerald-600",bg: "bg-emerald-50",hoverBorder: "#059669" },
  { icon: Phone,         label: "Contact Page",   color: "text-cyan-600",   bg: "bg-cyan-50",   hoverBorder: "#0891b2" },
  { icon: Search,        label: "SEO Ready",      color: "text-orange-600", bg: "bg-orange-50", hoverBorder: "#ea580c" },
];

const tenants = [
  { sub: "dhanmondi-model", label: "Dhanmondi Model School",   color: "bg-blue-600",   domain: "dhanmondischool.edu.bd" },
  { sub: "jamia-islahiya",  label: "Jamia Islamia Islahiya",   color: "bg-green-700",  domain: "jamia-islahiya.dikkhaloy.com" },
  { sub: "dhaka-cadet",     label: "Dhaka Cadet Academy",      color: "bg-purple-600", domain: "dhakacadet.edu.bd" },
];

/** Browser mockup — সাবডোমেইন ভার্সন */
function SubdomainPreview() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200 ml-2 flex items-center gap-1">
          <span className="text-green-600">🔒</span>
          <span className="font-medium text-gray-600">jamia-islahiya</span>
          <span className="text-gray-400">.dikkhaloy.com</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-700 to-green-900 p-5 text-white">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg" />
          <div>
            <div className="font-bold text-sm">জামিয়া ইসলামিয়া ইসলাহিয়া</div>
            <div className="text-green-300 text-[10px]">প্রতিষ্ঠিত ১৯৭৮</div>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 mb-3">
          <div className="text-xs font-medium mb-2">নোটিশ বোর্ড</div>
          <div className="space-y-1">
            {["বার্ষিক পরীক্ষার ফলাফল প্রকাশিত", "অনলাইন ভর্তি শুরু হয়েছে"].map((n) => (
              <div key={n} className="text-[10px] text-green-200 flex items-center gap-1">
                <div className="w-1 h-1 bg-green-400 rounded-full" />
                {n}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["ভর্তি", "রেজাল্ট", "যোগাযোগ"].map((b) => (
            <div key={b} className="bg-white/20 rounded-lg py-1.5 text-center text-[10px] font-medium">{b}</div>
          ))}
        </div>
      </div>
      <div className="p-3 bg-gray-50 flex items-center justify-between">
        <span className="text-[10px] text-gray-400">Powered by Dikkhaloy</span>
        <a href="#themes" className="text-[10px] text-blue-600 flex items-center gap-1 font-medium">
          Theme দেখুন <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
}

/** Browser mockup — কাস্টম ডোমেইন ভার্সন */
function CustomDomainPreview() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* browser chrome */}
      <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        {/* Address bar — shows custom domain */}
        <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs ml-2 flex items-center gap-1.5">
          <span className="text-green-400">🔒</span>
          <span className="text-white font-semibold tracking-tight">mqmadrasa.com</span>
          <span className="ml-auto text-gray-500 text-[9px]">Custom Domain ✓</span>
        </div>
      </div>
      {/* Site content */}
      <div className="bg-gradient-to-br from-emerald-800 to-teal-900 p-5 text-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center font-bold text-sm">MQ</div>
            <div>
              <div className="font-bold text-sm">মারকাযুল কুরআন মাদরাসা</div>
              <div className="text-emerald-300 text-[10px]">mqmadrasa.com</div>
            </div>
          </div>
          <span className="text-[9px] bg-green-500/30 border border-green-400/30 text-green-300 px-2 py-0.5 rounded-full">
            🟢 Live
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-white/10 rounded-xl p-2.5">
            <div className="text-[9px] text-emerald-300 mb-1">মোট শিক্ষার্থী</div>
            <div className="text-white font-bold text-sm">৮৪৫</div>
          </div>
          <div className="bg-white/10 rounded-xl p-2.5">
            <div className="text-[9px] text-emerald-300 mb-1">হিফজ বিভাগ</div>
            <div className="text-yellow-300 font-bold text-sm">১২৩ জন</div>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-3">
          <div className="text-xs font-medium mb-1.5">সাম্প্রতিক নোটিশ</div>
          {["বার্ষিক মাহফিল ১৫ ডিসেম্বর", "অনলাইন ভর্তি চলছে"].map((n) => (
            <div key={n} className="text-[9px] text-emerald-200 flex items-center gap-1 py-0.5">
              <div className="w-1 h-1 bg-emerald-400 rounded-full flex-shrink-0" />
              {n}
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <CheckCircle size={12} className="text-green-500" />
          <span className="text-[10px] text-gray-600 font-medium">mqmadrasa.com connected</span>
        </div>
        <span className="text-[10px] text-gray-400">Powered by Dikkhaloy</span>
      </div>
    </div>
  );
}

export default function InstitutionWebsite() {
  const [activePreview, setActivePreview] = useState<"subdomain" | "custom">("subdomain");

  return (
    <section id="website" className="section-pad relative overflow-hidden" style={{ background:"linear-gradient(135deg,#fff7ed 0%,#fafafa 50%,#fff7ed 100%)" }}>
      <div className="absolute inset-0 pat-hex" style={{ opacity:0.8 }} />
      <div className="container-xl relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="tag bg-orange-100 text-orange-700 mb-4">Killer Feature</span>
          <h2 className="section-heading">
            শুধু Management System নয়—
            <br />
            আপনার প্রতিষ্ঠানের{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
              নিজস্ব Website-ও
            </span>
          </h2>
          <p className="section-subheading">
            Dikkhaloy ব্যবহার করলে প্রতিটি প্রতিষ্ঠান তাদের নিজস্ব branding, domain এবং content সহ
            একটি পূর্ণাঙ্গ professional website পরিচালনা করতে পারবে।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Tenant tree diagram */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl px-8 py-5 text-white shadow-xl">
                <div className="text-center">
                  <div className="font-bold text-xl mb-0.5">DIKKHALOY</div>
                  <div className="text-blue-200 text-xs">Central Platform</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-px h-8 bg-gray-300" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {tenants.map((t, i) => (
                <div key={i} className="space-y-2">
                  <div className={`${t.color} text-white text-center px-2 py-2 rounded-xl text-[10px] font-semibold shadow-md leading-tight`}>
                    {t.sub}.dikkhaloy.com
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-gray-100 text-center shadow-sm">
                    <div className="text-[10px] font-semibold text-gray-700 leading-tight">{t.label}</div>
                    <div className="text-[9px] text-green-600 mt-1 font-medium">Own Website ✓</div>
                    <div className="text-[8px] text-gray-400 mt-0.5">{t.domain}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom domain note */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <p className="text-sm text-gray-700">
                <strong className="text-blue-700">নিজের domain আছে?</strong> যেমন{" "}
                <code className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-xs">mqmadrasa.com</code>{" "}
                বা{" "}
                <code className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-xs">dhanmondischool.edu.bd</code>{" "}
                — সেটাও connect করা যাবে।
              </p>
            </div>

            {/* Feature grid — floating cards with unique colors */}
            <div className="grid grid-cols-3 gap-2">
              {websiteFeatures.map((f, i) => (
                <div
                  key={f.label}
                  className="group relative bg-white rounded-xl p-3 border-2 text-center
                             hover:-translate-y-2 transition-all duration-300 cursor-default"
                  style={{
                    borderColor: `${f.hoverBorder}20`,
                    boxShadow: `0 2px 12px ${f.hoverBorder}18`,
                    animationDelay: `${i * 0.12}s`,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${f.hoverBorder}66`;
                    el.style.boxShadow = `0 8px 28px ${f.hoverBorder}44`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${f.hoverBorder}20`;
                    el.style.boxShadow = `0 2px 12px ${f.hoverBorder}18`;
                  }}
                >
                  <div className={`w-9 h-9 mx-auto mb-2 rounded-xl ${f.bg} group-hover:scale-110 flex items-center justify-center transition-transform duration-300`}>
                    <f.icon size={17} className={f.color} />
                  </div>
                  <span className="text-[11px] font-medium text-gray-700">{f.label}</span>
                  {/* shimmer */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#themes"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Website Demo দেখুন <ArrowRight size={16} />
            </a>
          </div>

          {/* Right — Dual preview toggle */}
          <div className="space-y-4">
            {/* Toggle tabs */}
            <div className="flex gap-2 bg-gray-100 rounded-xl p-1 w-fit">
              <button
                onClick={() => setActivePreview("subdomain")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activePreview === "subdomain"
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                🌐 Subdomain
                <span className="ml-1 text-[9px] opacity-60">jamia-islahiya.dikkhaloy.com</span>
              </button>
              <button
                onClick={() => setActivePreview("custom")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activePreview === "custom"
                    ? "bg-white text-emerald-700 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                ✨ Custom Domain
                <span className="ml-1 text-[9px] opacity-60">mqmadrasa.com</span>
              </button>
            </div>

            {/* Preview */}
            <div className="relative" style={{ minHeight: "320px" }}>
              <div
                className={`transition-all duration-300 ${activePreview === "subdomain" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none absolute inset-0"}`}
              >
                <SubdomainPreview />
              </div>
              <div
                className={`transition-all duration-300 ${activePreview === "custom" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none absolute inset-0"}`}
              >
                <CustomDomainPreview />
              </div>
            </div>

            <p className="text-xs text-gray-400 text-center">
              💡 উপরের ট্যাব দুটো ক্লিক করে দুই ধরনের URL দেখুন
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
