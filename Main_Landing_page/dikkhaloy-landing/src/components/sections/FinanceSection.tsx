"use client";

import { Wallet, ClipboardList, Receipt, TrendingUp, CreditCard, AlertCircle, ArrowRight } from "lucide-react";

const features = [
  { icon: Wallet,       label: "Fee Collection",  desc: "ক্যাশ ও অনলাইনে ফি সংগ্রহ",    glowColor: "#16a34a", bg: "bg-green-50",   iconColor: "text-green-600"  },
  { icon: AlertCircle,  label: "Due Management",  desc: "বকেয়া track ও reminder",         glowColor: "#ea580c", bg: "bg-orange-50",  iconColor: "text-orange-500" },
  { icon: ClipboardList,label: "Payment History", desc: "সম্পূর্ণ পেমেন্ট রেকর্ড",        glowColor: "#2563eb", bg: "bg-blue-50",    iconColor: "text-blue-600"   },
  { icon: Receipt,      label: "Digital Receipt", desc: "স্বয়ংক্রিয় রসিদ তৈরি",          glowColor: "#7c3aed", bg: "bg-violet-50",  iconColor: "text-violet-600" },
  { icon: TrendingUp,   label: "Reports",         desc: "আর্থিক রিপোর্ট ও analytics",    glowColor: "#0891b2", bg: "bg-cyan-50",    iconColor: "text-cyan-600"   },
  { icon: CreditCard,   label: "Online Payment",  desc: "Online payment gateway সাপোর্ট", glowColor: "#e11d48", bg: "bg-rose-50",    iconColor: "text-rose-600"   },
];

const feeTypes = [
  { label: "Admission Fee",  color: "border-green-300 text-green-700 bg-green-50"  },
  { label: "Monthly Fee",    color: "border-blue-300 text-blue-700 bg-blue-50"    },
  { label: "Exam Fee",       color: "border-purple-300 text-purple-700 bg-purple-50" },
  { label: "Hostel Fee",     color: "border-orange-300 text-orange-700 bg-orange-50" },
  { label: "Custom Fee",     color: "border-gray-300 text-gray-600 bg-gray-50"    },
];

export default function FinanceSection() {
  return (
    <section id="finance" className="section-pad relative overflow-hidden bg-white">
      <div className="absolute inset-0 pat-stripes" style={{ opacity:1 }} />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-green-100 text-green-700 mb-4">Finance & Payment</span>
          <h2 className="section-heading">
            ফি সংগ্রহ ও হিসাব—আরও সহজ,{" "}
            <span className="gradient-text">আরও স্বচ্ছ</span>
          </h2>
          <p className="section-subheading">
            অনলাইন ও অফলাইন উভয় পদ্ধতিতে ফি সংগ্রহ করুন। বকেয়া থেকে রিপোর্ট সব এক জায়গায়।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — payment flow */}
          <div className="space-y-4">
            <div
              className="relative rounded-2xl p-[2px] overflow-hidden"
              style={{ background: "conic-gradient(from 0deg, transparent 0deg 270deg, #16a34a99 270deg 360deg)", animation: "spin-cw 5s linear infinite" }}
            >
              <div className="bg-gradient-to-br from-green-700 to-emerald-800 rounded-[14px] p-6 text-white">
                <h4 className="font-semibold mb-4 text-green-200 text-sm uppercase tracking-wide">Payment Flow</h4>
                <div className="space-y-3">
                  {[
                    { emoji: "👨‍👩‍👧", label: "Guardian", color: "bg-white/15" },
                    { emoji: "📱",    label: "Online Payment", color: "bg-white/15" },
                    { emoji: "🏦",    label: "Payment Gateway", color: "bg-white/15" },
                    { emoji: "🏫",    label: "Institution Account", color: "bg-white/15" },
                    { emoji: "📝",    label: "Automatic Record", color: "bg-white/15" },
                    { emoji: "🧾",    label: "Digital Receipt", color: "bg-white/15" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-9 h-9 ${item.color} rounded-xl flex items-center justify-center text-base flex-shrink-0`}>{item.emoji}</div>
                      <span className="text-sm font-medium flex-1">{item.label}</span>
                      {i < 5 && <ArrowRight size={14} className="text-green-400" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wide">সমর্থিত ফি ধরন</p>
              <div className="flex flex-wrap gap-2">
                {feeTypes.map((t) => (
                  <span key={t.label} className={`border text-xs font-medium px-3 py-1.5 rounded-lg ${t.color}`}>{t.label}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — feature cards with stronger shadow + hover glow */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.label} className="rotate-border-cw group" style={{ "--glow-col": f.glowColor } as React.CSSProperties}>
                <div className="bg-white rounded-[14px] p-5 hover:-translate-y-1 transition-transform"
                  style={{ boxShadow:`0 10px 40px ${f.glowColor}33, 0 2px 8px rgba(0,0,0,0.12)` }}>
                  <div className={`w-11 h-11 ${f.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                    style={{ boxShadow:`0 4px 16px ${f.glowColor}44` }}>
                    <f.icon size={20} className={f.iconColor} />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{f.label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
