"use client";

import { Globe, Palette, FileText, Image, GraduationCap, Phone, DollarSign, Search, ArrowRight, ExternalLink } from "lucide-react";

const websiteFeatures = [
  { icon: Globe, label: "Custom Domain" },
  { icon: Palette, label: "Custom Theme" },
  { icon: FileText, label: "Notice Board" },
  { icon: GraduationCap, label: "Admission Form" },
  { icon: Image, label: "Gallery" },
  { icon: FileText, label: "Result View" },
  { icon: DollarSign, label: "Donation" },
  { icon: Phone, label: "Contact Page" },
  { icon: Search, label: "SEO Ready" },
];

const tenants = [
  { sub: "dhanmondi-model", label: "Dhanmondi Model School", color: "bg-blue-500" },
  { sub: "jamia-islahiya", label: "Jamia Islamia Islahiya", color: "bg-green-600" },
  { sub: "dhaka-cadet", label: "Dhaka Cadet Academy", color: "bg-purple-600" },
];

export default function InstitutionWebsite() {
  return (
    <section id="website" className="section-pad bg-gray-50 relative">
      <div className="absolute inset-0 geo-pattern opacity-40" />
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
            Dikkhaloy ব্যবহার করলে প্রতিটি প্রতিষ্ঠান তাদের নিজস্ব branding, domain এবং content সহ একটি পূর্ণাঙ্গ professional website পরিচালনা করতে পারবে।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Tenant tree diagram */}
          <div className="space-y-6">
            {/* Central node */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl px-8 py-5 text-white shadow-xl">
                <div className="text-center">
                  <div className="font-bold text-xl mb-0.5">DIKKHALOY</div>
                  <div className="text-blue-200 text-xs">Central Platform</div>
                </div>
              </div>
            </div>

            {/* Tree lines */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-gray-300" />
            </div>

            {/* Tenant cards */}
            <div className="grid grid-cols-3 gap-3">
              {tenants.map((t, i) => (
                <div key={i} className="space-y-2">
                  <div className={`${t.color} text-white text-center px-3 py-2.5 rounded-xl text-[11px] font-semibold shadow-md`}>
                    {t.sub}.dikkhaloy.com
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-gray-100 text-center shadow-sm">
                    <div className="text-[10px] font-semibold text-gray-700 leading-tight">{t.label}</div>
                    <div className="text-[9px] text-gray-400 mt-1">Own Website ✓</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom domain note */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <p className="text-sm text-gray-700">
                <strong className="text-blue-700">নিজের domain আছে?</strong> যেমন{" "}
                <code className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-xs">dhanmondischool.edu.bd</code>{" "}
                সেটাও connect করা যাবে।
              </p>
            </div>
          </div>

          {/* Right — Website features + mockup */}
          <div className="space-y-6">
            {/* Mini browser mockup */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200 ml-2">
                  jamia-islahiya.dikkhaloy.com
                </div>
              </div>

              {/* Site mockup */}
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
                    <div key={b} className="bg-white/20 rounded-lg py-1.5 text-center text-[10px] font-medium">
                      {b}
                    </div>
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

            {/* Feature grid */}
            <div className="grid grid-cols-3 gap-2">
              {websiteFeatures.map((f) => (
                <div
                  key={f.label}
                  className="bg-white rounded-xl p-3 border border-gray-100 text-center hover:border-orange-200 hover:shadow-sm transition-all"
                >
                  <f.icon size={16} className="text-orange-500 mx-auto mb-1.5" />
                  <span className="text-[11px] font-medium text-gray-700">{f.label}</span>
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
        </div>
      </div>
    </section>
  );
}
