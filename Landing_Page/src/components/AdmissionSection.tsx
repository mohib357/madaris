"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight } from "lucide-react";

const STEPS = [
  { num: "০১", title: "আবেদন করুন", desc: "অনলাইন ফর্ম পূরণ করুন" },
  { num: "০২", title: "আবেদন যাচাই", desc: "প্রতিষ্ঠান যাচাই করবে" },
  { num: "০৩", title: "ভর্তি পরীক্ষা", desc: "পরীক্ষা/সাক্ষাৎকার" },
  { num: "০৪", title: "ভর্তি নিশ্চিত", desc: "ফি পরিশোধ করুন" },
];

const DEPARTMENTS_LIST = [
  "নূরানী বিভাগ",
  "হিফজ বিভাগ",
  "কিতাব বিভাগ",
  "দাখিল ৬ষ্ঠ শ্রেণি",
  "দাখিল ৭ম শ্রেণি",
  "দাখিল ৮ম শ্রেণি",
  "দাখিল ৯ম শ্রেণি",
];

type FormState = {
  studentName: string;
  guardianName: string;
  phone: string;
  department: string;
  address: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function AdmissionSection() {
  const [form, setForm] = useState<FormState>({
    studentName: "",
    guardianName: "",
    phone: "",
    department: "",
    address: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <section
      id="admission"
      className="section-padding islamic-pattern"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
      }}
      aria-label="ভর্তি বিভাগ"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12">
          {/* Islamic Ayah */}
          <p className="bismillah-box font-amiri text-xl mb-2 opacity-80">
            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
          </p>
          <p className="text-white/50 text-xs mb-5">পড়ো তোমার রবের নামে — সূরা আলাক</p>

          <span className="inline-block bg-white/15 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 border border-white/20">
            ভর্তি ২০২৬
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            ২০২৬ শিক্ষাবর্ষে ভর্তি চলছে
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
            আপনার সন্তানের সুন্দর ভবিষ্যতের যাত্রা শুরু হোক আজ থেকেই।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Process + Info */}
          <div>
            {/* Steps */}
            <h3 className="text-white font-bold text-lg mb-6">ভর্তি প্রক্রিয়া</h3>
            <div className="flex flex-col gap-0">
              {STEPS.map((step, i) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 bg-white"
                      style={{ color: "var(--color-primary)" }}
                      aria-hidden="true"
                    >
                      {step.num}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-0.5 h-8 bg-white/30 my-1" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="text-white/70 text-xs">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-6 bg-white/10 rounded-2xl p-5">
              <h4 className="text-white font-semibold mb-3 text-sm">ভর্তির সুবিধাসমূহ</h4>
              <ul className="space-y-2">
                {[
                  "অনলাইনে আবেদন ও ফি পরিশোধ",
                  "আবেদনের পর SMS নিশ্চিতকরণ",
                  "মেধাবীদের জন্য বৃত্তির সুযোগ",
                  "লিল্লাহ বোর্ডিং-এ আবেদনের সুযোগ",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-white/80 text-xs">
                    <CheckCircle size={14} className="shrink-0 mt-0.5 text-emerald-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            {status === "success" ? (
              <div className="text-center py-8">
                <CheckCircle
                  size={56}
                  className="mx-auto mb-4"
                  style={{ color: "var(--color-primary)" }}
                />
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  আবেদন সফল হয়েছে!
                </h3>
                <p className="text-slate-500 text-sm mb-1">
                  আপনার আবেদন ID: <strong>DK-2026-{Math.floor(Math.random() * 9000) + 1000}</strong>
                </p>
                <p className="text-slate-400 text-xs">
                  শীঘ্রই আপনার মোবাইলে SMS পাঠানো হবে।
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ studentName: "", guardianName: "", phone: "", department: "", address: "" }); }}
                  className="btn-primary mt-6"
                >
                  নতুন আবেদন করুন
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  অনলাইনে আবেদন করুন
                </h3>
                <p className="text-slate-400 text-xs mb-5">
                  নিচের তথ্যগুলো সঠিকভাবে পূরণ করুন
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="ভর্তি আবেদন ফর্ম">
                  {/* Student name */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-xs font-semibold text-slate-600 mb-1"
                    >
                      শিক্ষার্থীর নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="studentName"
                      name="studentName"
                      type="text"
                      required
                      value={form.studentName}
                      onChange={handleChange}
                      placeholder="শিক্ষার্থীর পূর্ণ নাম"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-shadow"
                      style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                    />
                  </div>

                  {/* Guardian name */}
                  <div>
                    <label
                      htmlFor="guardianName"
                      className="block text-xs font-semibold text-slate-600 mb-1"
                    >
                      অভিভাবকের নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="guardianName"
                      name="guardianName"
                      type="text"
                      required
                      value={form.guardianName}
                      onChange={handleChange}
                      placeholder="অভিভাবকের পূর্ণ নাম"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-shadow"
                      style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                    />
                  </div>

                  {/* Phone + Department row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-slate-600 mb-1"
                      >
                        মোবাইল <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="01XXXXXXXXX"
                        className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-shadow"
                        style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="department"
                        className="block text-xs font-semibold text-slate-600 mb-1"
                      >
                        বিভাগ <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="department"
                        name="department"
                        required
                        value={form.department}
                        onChange={handleChange}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-shadow bg-white"
                        style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                      >
                        <option value="">নির্বাচন করুন</option>
                        {DEPARTMENTS_LIST.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-xs font-semibold text-slate-600 mb-1"
                    >
                      ঠিকানা
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={2}
                      value={form.address}
                      onChange={handleChange}
                      placeholder="বর্তমান ঠিকানা"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-shadow resize-none"
                      style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full justify-center disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      "আবেদন পাঠানো হচ্ছে..."
                    ) : (
                      <>
                        অনলাইনে আবেদন করুন
                        <ChevronRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
