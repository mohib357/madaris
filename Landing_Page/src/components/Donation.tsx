"use client";

import { useState } from "react";
import { Heart, CheckCircle } from "lucide-react";
import type { DonationPurpose } from "@/types/institution";

interface Props {
  purposes: DonationPurpose[];
}

const PRESET_AMOUNTS = ["৫০০", "১,০০০", "২,০০০", "৫,০০০"];
const PAYMENT_METHODS = [
  { id: "bkash", label: "bKash", icon: "💳" },
  { id: "nagad", label: "Nagad", icon: "💳" },
  { id: "card", label: "Card", icon: "💳" },
  { id: "banking", label: "Internet Banking", icon: "🏦" },
];

export default function Donation({ purposes }: Props) {
  const [selectedPurpose, setSelectedPurpose] = useState(purposes[0]?.id ?? "");
  const [amount, setAmount] = useState("১,০০০");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const displayAmount = customAmount || amount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <section
      id="donation"
      className="section-padding bg-white"
      aria-label="দান ও অনুদান"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">অনুদান</span>
        <h2 className="section-heading">
          আপনার সহায়তায় গড়ে উঠুক একটি সুন্দর ভবিষ্যৎ
        </h2>
        <p className="section-subheading max-w-xl mx-auto">
          আপনার ক্ষুদ্র অবদান একটি শিশুর জীবন পরিবর্তন করতে পারে।
          বিনিয়োগ করুন আগামীর প্রজন্মে।
        </p>

        {/* Purpose cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {purposes.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPurpose(p.id)}
              className={`card p-4 text-left transition-all duration-200 border-2 ${
                selectedPurpose === p.id
                  ? "border-[var(--color-primary)] shadow-md"
                  : "border-transparent hover:border-slate-200"
              }`}
              aria-pressed={selectedPurpose === p.id}
            >
              <Heart
                size={20}
                className="mb-2"
                style={{ color: "var(--color-primary)" }}
                aria-hidden="true"
              />
              <p className="font-semibold text-slate-800 text-sm">{p.title}</p>
              <p className="text-slate-400 text-xs mt-0.5">{p.description}</p>
            </button>
          ))}
        </div>

        {submitted ? (
          <div
            className="max-w-md mx-auto card p-8 text-center"
            role="alert"
            aria-live="polite"
          >
            <CheckCircle
              size={52}
              className="mx-auto mb-3"
              style={{ color: "var(--color-primary)" }}
            />
            <h3 className="font-bold text-slate-800 text-xl mb-2">জাযাকাল্লাহু খায়রান!</h3>
            <p className="text-slate-500 text-sm mb-1">
              Transaction ID: <strong>DK-DON-{Math.floor(Math.random() * 90000) + 10000}</strong>
            </p>
            <p className="text-slate-400 text-xs mb-4">
              আপনার অনুদান সফলভাবে গ্রহণ করা হয়েছে। রসিদ আপনার মোবাইলে পাঠানো হবে।
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
            >
              আরেকটি অনুদান করুন
            </button>
          </div>
        ) : (
          <div className="max-w-xl mx-auto card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="অনুদান ফর্ম">
              {/* Amount presets */}
              <div>
                <span className="block text-xs font-semibold text-slate-600 mb-2">
                  অনুদানের পরিমাণ (৳)
                </span>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {PRESET_AMOUNTS.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => { setAmount(a); setCustomAmount(""); }}
                      className={`py-2 rounded-lg text-sm font-semibold border-2 transition-colors ${
                        amount === a && !customAmount
                          ? "text-white border-transparent"
                          : "border-slate-200 text-slate-600 hover:border-[var(--color-primary)]"
                      }`}
                      style={
                        amount === a && !customAmount
                          ? { backgroundColor: "var(--color-primary)", borderColor: "var(--color-primary)" }
                          : undefined
                      }
                      aria-pressed={amount === a && !customAmount}
                    >
                      ৳{a}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="অন্য পরিমাণ লিখুন"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                  aria-label="কাস্টম পরিমাণ"
                />
              </div>

              {/* Payment method */}
              <div>
                <span className="block text-xs font-semibold text-slate-600 mb-2">
                  পেমেন্ট পদ্ধতি
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {PAYMENT_METHODS.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id)}
                      className={`py-2 px-2 rounded-lg text-xs font-medium border-2 transition-colors flex flex-col items-center gap-1 ${
                        paymentMethod === m.id
                          ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary-light)]"
                          : "border-slate-200 text-slate-500 hover:border-slate-300"
                      }`}
                      aria-pressed={paymentMethod === m.id}
                    >
                      <span aria-hidden="true">{m.icon}</span>
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donor info */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="donor-name" className="block text-xs font-semibold text-slate-600 mb-1">
                    আপনার নাম
                  </label>
                  <input
                    id="donor-name"
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="নাম (ঐচ্ছিক)"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label htmlFor="donor-phone" className="block text-xs font-semibold text-slate-600 mb-1">
                    মোবাইল নম্বর
                  </label>
                  <input
                    id="donor-phone"
                    type="tel"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                  />
                </div>
              </div>

              {/* Summary + submit */}
              <div
                className="rounded-xl p-4 text-sm"
                style={{ backgroundColor: "var(--color-primary-light)" }}
              >
                <div className="flex justify-between text-slate-600 mb-1">
                  <span>উদ্দেশ্য:</span>
                  <span className="font-medium">
                    {purposes.find((p) => p.id === selectedPurpose)?.title}
                  </span>
                </div>
                <div className="flex justify-between text-slate-800 font-bold">
                  <span>পরিমাণ:</span>
                  <span style={{ color: "var(--color-primary)" }}>
                    ৳{displayAmount}
                  </span>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full justify-center text-base py-3">
                <Heart size={16} /> অনুদান করুন
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
