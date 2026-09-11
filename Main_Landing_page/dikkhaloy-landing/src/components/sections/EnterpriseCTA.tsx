"use client";

import { Building2, MessageCircle, Phone, Send } from "lucide-react";

export default function EnterpriseCTA() {
  return (
    <section className="py-14 bg-gray-50 border-t border-gray-100">
      <div className="container-xl">
        <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 geo-pattern opacity-10" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-blue-700/40 border border-blue-600/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Building2 size={26} className="text-blue-300" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  বড় প্রতিষ্ঠান বা Multi-campus?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  ১,০০০+ শিক্ষার্থী, একাধিক শাখা বা বিশেষ institutional requirement-এর জন্য আলাদা প্যাকেজ আলোচনা করুন।
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["1000+ Students", "Multi-campus", "Custom Requirements", "Dedicated Support"].map((t) => (
                    <span key={t} className="bg-white/10 text-white/70 text-xs px-2.5 py-1 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 flex-shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-all w-full md:w-48"
              >
                <MessageCircle size={17} />
                WhatsApp করুন
              </a>
              <a
                href="tel:+8801XXXXXXXXX"
                className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/10 w-full md:w-48"
              >
                <Phone size={17} />
                Call করুন
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/10 w-full md:w-48"
              >
                <Send size={17} />
                Quote পাঠান
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
