"use client";

import { useState } from "react";
import { FileText, Download, Search, AlertCircle, Bell } from "lucide-react";
import type { Notice } from "@/types/institution";

interface Props {
  notices: Notice[];
}

const EXAMS = ["প্রথম সাময়িক পরীক্ষা", "দ্বিতীয় সাময়িক পরীক্ষা", "বার্ষিক পরীক্ষা", "Half Yearly Examination"];
const CLASSES = ["নূরানী", "হিফজ", "ষষ্ঠ শ্রেণি", "সপ্তম শ্রেণি", "অষ্টম শ্রেণি", "নবম শ্রেণি", "দশম শ্রেণি"];
const YEARS = ["২০২৬", "২০২৫", "২০২৪", "২০২৩"];

const CATEGORY_STYLES: Record<string, { bg: string; color: string }> = {
  ভর্তি:    { bg: "#dbeafe", color: "#1d4ed8" },
  পরীক্ষা:  { bg: "#fef9c3", color: "#a16207" },
  ছুটি:     { bg: "#fee2e2", color: "#dc2626" },
  অনুষ্ঠান: { bg: "#ede9fe", color: "#7c3aed" },
};

type ResultState = "idle" | "searching" | "found" | "notfound";

export default function NoticeResult({ notices }: Props) {
  const [activeTab, setActiveTab] = useState<"notice" | "result">("notice");
  const [exam, setExam] = useState("");
  const [cls, setCls] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("২০২৬");
  const [resultState, setResultState] = useState<ResultState>("idle");

  const handleResultSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setResultState("searching");
    await new Promise((r) => setTimeout(r, 1000));
    setResultState(roll ? "found" : "notfound");
  };

  return (
    <section
      id="notice"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg)" }}
      aria-label="নোটিশ বোর্ড ও ফলাফল"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border"
            style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderColor: "var(--color-primary-light)" }}
          >
            তথ্য কেন্দ্র
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: "var(--color-primary)" }}>
            নোটিশ বোর্ড ও ফলাফল
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
          <p className="text-sm md:text-base" style={{ color: "var(--color-text-muted)" }}>
            সর্বশেষ বিজ্ঞপ্তি ও পরীক্ষার ফলাফল
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div
            className="flex rounded-2xl p-1.5 gap-1 shadow-md"
            style={{ backgroundColor: "var(--color-primary-light)" }}
            role="tablist"
          >
            {(["notice", "result"] as const).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className="px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200"
                style={
                  activeTab === tab
                    ? { backgroundColor: "var(--color-primary)", color: "#fff", boxShadow: "0 2px 12px rgba(26,82,118,0.3)" }
                    : { color: "var(--color-primary)" }
                }
              >
                {tab === "notice" ? "📢 নোটিশ বোর্ড" : "📊 ফলাফল দেখুন"}
              </button>
            ))}
          </div>
        </div>

        {/* ── Notice Tab ── */}
        {activeTab === "notice" && (
          <div role="tabpanel" aria-label="নোটিশ তালিকা" className="max-w-3xl mx-auto">
            <ul className="space-y-3">
              {notices.map((notice, i) => {
                const catStyle = CATEGORY_STYLES[notice.category] ?? { bg: "#f1f5f9", color: "#475569" };
                return (
                  <li
                    key={notice.id}
                    className="bg-white rounded-2xl flex items-center gap-4 p-4 shadow-sm border hover:shadow-md hover:-translate-x-1 transition-all duration-200 group"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    {/* Index */}
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-extrabold"
                      style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)" }}
                    >
                      {i + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                          style={{ backgroundColor: catStyle.bg, color: catStyle.color }}
                        >
                          {notice.category}
                        </span>
                        <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>{notice.date}</span>
                      </div>
                      <p
                        className="font-bold text-sm leading-snug group-hover:opacity-80 transition-opacity"
                        style={{ color: "var(--color-text)" }}
                      >
                        {notice.title}
                      </p>
                    </div>

                    {notice.pdfUrl && (
                      <a
                        href={notice.pdfUrl}
                        className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all download-btn"
                        aria-label={`${notice.title} ডাউনলোড করুন`}
                        download
                      >
                        <Download size={15} />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:-translate-y-0.5"
                style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
              >
                <Bell size={14} />
                সকল নোটিশ দেখুন
              </a>
            </div>
          </div>
        )}

        {/* ── Result Tab ── */}
        {activeTab === "result" && (
          <div id="result" role="tabpanel" aria-label="ফলাফল অনুসন্ধান" className="max-w-lg mx-auto">
            <div
              className="bg-white rounded-3xl shadow-xl overflow-hidden border"
              style={{ borderColor: "var(--color-border)" }}
            >
              {/* Top bar */}
              <div
                className="h-1.5"
                style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-gold))" }}
              />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary-light)" }}
                  >
                    <Search size={18} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg" style={{ color: "var(--color-primary)" }}>
                      ফলাফল অনুসন্ধান
                    </h3>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      রোল নম্বর দিয়ে ফলাফল দেখুন
                    </p>
                  </div>
                </div>

                <form onSubmit={handleResultSearch} className="space-y-4" aria-label="ফলাফল অনুসন্ধান ফর্ম">
                  <div>
                    <label htmlFor="exam" className="block text-xs font-bold mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                      পরীক্ষা
                    </label>
                    <select
                      id="exam"
                      value={exam}
                      onChange={(e) => setExam(e.target.value)}
                      className="w-full border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <option value="">পরীক্ষা নির্বাচন করুন</option>
                      {EXAMS.map((e) => <option key={e} value={e}>{e}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="cls" className="block text-xs font-bold mb-1.5" style={{ color: "var(--color-text-muted)" }}>শ্রেণি</label>
                      <select id="cls" value={cls} onChange={(e) => setCls(e.target.value)}
                        className="w-full border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2"
                        style={{ borderColor: "var(--color-border)" }}
                      >
                        <option value="">শ্রেণি</option>
                        {CLASSES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="year" className="block text-xs font-bold mb-1.5" style={{ color: "var(--color-text-muted)" }}>শিক্ষাবর্ষ</label>
                      <select id="year" value={year} onChange={(e) => setYear(e.target.value)}
                        className="w-full border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2"
                        style={{ borderColor: "var(--color-border)" }}
                      >
                        {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="roll" className="block text-xs font-bold mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                      রোল নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="roll"
                      type="text"
                      required
                      value={roll}
                      onChange={(e) => setRoll(e.target.value)}
                      placeholder="পরীক্ষার রোল নম্বর"
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: "var(--color-border)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={resultState === "searching"}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5 disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)" }}
                  >
                    {resultState === "searching" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        খোঁজা হচ্ছে...
                      </span>
                    ) : (
                      <><Search size={15} /> ফলাফল দেখুন</>
                    )}
                  </button>
                </form>

                {/* Found */}
                {resultState === "found" && (
                  <div
                    className="mt-6 rounded-2xl p-5 border-2"
                    style={{ borderColor: "var(--color-primary)", backgroundColor: "var(--color-primary-light)" }}
                    role="region"
                    aria-live="polite"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-extrabold" style={{ color: "var(--color-primary)" }}>ফলাফল</h4>
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: "#16a34a" }}
                      >
                        ✓ উত্তীর্ণ
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        ["নাম", "মুহাম্মদ আব্দুর রহিম"],
                        ["রোল", roll],
                        ["শ্রেণি", cls || "দাখিল ৯ম"],
                        ["পরীক্ষা", exam || "বার্ষিক"],
                        ["মোট নম্বর", "৭৮৫/১০০০"],
                        ["GPA", "৪.৭৫"],
                      ].map(([label, value]) => (
                        <div key={label} className="bg-white/60 rounded-lg px-3 py-2">
                          <span style={{ color: "var(--color-text-muted)" }}>{label}</span>
                          <p className="font-bold mt-0.5" style={{ color: "var(--color-text)" }}>{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      >
                        <Download size={12} /> Marksheet
                      </button>
                      <button
                        className="flex-1 py-2.5 rounded-xl text-xs font-bold border-2 transition-all"
                        style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
                      >
                        Print
                      </button>
                    </div>
                  </div>
                )}

                {/* Not found */}
                {resultState === "notfound" && (
                  <div
                    className="mt-5 rounded-xl p-4 flex items-center gap-3 bg-red-50 border border-red-200"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle size={18} className="text-red-400 shrink-0" />
                    <p className="text-red-600 text-sm font-medium">
                      কোনো ফলাফল পাওয়া যায়নি। রোল নম্বর ও তথ্য পুনরায় যাচাই করুন।
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
