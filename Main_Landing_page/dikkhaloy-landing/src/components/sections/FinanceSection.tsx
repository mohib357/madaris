"use client";

import { Wallet, ClipboardList, Receipt, TrendingUp, CreditCard, AlertCircle } from "lucide-react";

const features = [
  { icon: Wallet, label: "Fee Collection", desc: "ক্যাশ ও অনলাইনে ফি সংগ্রহ" },
  { icon: AlertCircle, label: "Due Management", desc: "বকেয়া track ও reminder" },
  { icon: ClipboardList, label: "Payment History", desc: "সম্পূর্ণ পেমেন্ট রেকর্ড" },
  { icon: Receipt, label: "Digital Receipt", desc: "স্বয়ংক্রিয় রসিদ তৈরি" },
  { icon: TrendingUp, label: "Reports", desc: "আর্থিক রিপোর্ট ও analytics" },
  { icon: CreditCard, label: "Online Payment", desc: "Online payment gateway সাপোর্ট" },
];

const feeTypes = ["Admission Fee", "Monthly Fee", "Exam Fee", "Hostel Fee", "Custom Fee"];

export default function FinanceSection() {
  return (
    <section id="finance" className="section-pad bg-white">
      <div className="container-xl">
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
          {/* Left — payment flow visual */}
          <div className="space-y-4">
            {/* Flow diagram */}
            <div className="bg-gradient-to-br from-green-700 to-emerald-800 rounded-3xl p-6 text-white">
              <h4 className="font-semibold mb-4 text-green-200 text-sm uppercase tracking-wide">
                Payment Flow
              </h4>
              <div className="space-y-2">
                {[
                  { emoji: "👨‍👩‍👧", label: "Guardian" },
                  { emoji: "📱", label: "Online Payment" },
                  { emoji: "🏦", label: "Payment Gateway" },
                  { emoji: "🏫", label: "Institution Account" },
                  { emoji: "📝", label: "Automatic Record" },
                  { emoji: "🧾", label: "Digital Receipt" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-base">
                      {item.emoji}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                    {i < 5 && (
                      <div className="ml-auto text-green-400 text-xs">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Fee type tags */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wide">সমর্থিত ফি ধরন</p>
              <div className="flex flex-wrap gap-2">
                {feeTypes.map((t) => (
                  <span key={t} className="bg-white border border-green-200 text-green-700 text-xs font-medium px-3 py-1.5 rounded-lg">
                    {t}
                  </span>
                ))}
                <span className="bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1.5 rounded-lg">
                  + Custom
                </span>
              </div>
            </div>
          </div>

          {/* Right — features */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.label}
                className="card p-5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <f.icon size={20} className="text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{f.label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
