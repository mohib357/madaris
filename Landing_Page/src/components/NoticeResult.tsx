"use client";

import { useState } from "react";
import { FileText, Download, Search, AlertCircle } from "lucide-react";
import type { Notice } from "@/types/institution";

interface Props {
  notices: Notice[];
}

const EXAMS = [
  "প্রথম সাময়িক পরীক্ষা",
  "দ্বিতীয় সাময়িক পরীক্ষা",
  "বার্ষিক পরীক্ষা",
  "Half Yearly Examination",
];

const CLASSES = [
  "নূরানী",
  "হিফজ",
  "ষষ্ঠ শ্রেণি",
  "সপ্তম শ্রেণি",
  "অষ্টম শ্রেণি",
  "নবম শ্রেণি",
  "দশম শ্রেণি",
];

const YEARS = ["২০২৬", "২০২৫", "২০২৪", "২০২৩"];

const CATEGORY_COLORS: Record<string, string> = {
  ভর্তি: "bg-blue-100 text-blue-700",
  পরীক্ষা: "bg-amber-100 text-amber-700",
  ছুটি: "bg-rose-100 text-rose-700",
  অনুষ্ঠান: "bg-violet-100 text-violet-700",
};

type ResultState = "idle" | "searching" | "found" | "notfound";

export default function NoticeResult({ notices }: Props) {
  const [activeTab, setActiveTab] = useState<"notice" | "result">("notice");

  // Result form
  const [exam, setExam] = useState("");
  const [cls, setCls] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("২০২৬");
  const [resultState, setResultState] = useState<ResultState>("idle");

  const handleResultSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setResultState("searching");
    await new Promise((r) => setTimeout(r, 1000));
    // Mock: show result if roll is provided
    setResultState(roll ? "found" : "notfound");
  };

  return (
    <section
      id="notice"
      className="section-padding bg-white"
      aria-label="নোটিশ বোর্ড ও ফলাফল"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">তথ্য কেন্দ্র</span>
        <h2 className="section-heading">নোটিশ বোর্ড ও ফলাফল</h2>
        <p className="section-subheading">
          সর্বশেষ বিজ্ঞপ্তি ও পরীক্ষার ফলাফল
        </p>

        {/* Tabs */}
        <div className="flex rounded-xl overflow-hidden border border-slate-200 w-fit mx-auto mb-8" role="tablist">
          {(["notice", "result"] as const).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-sm font-semibold transition-colors ${
                activeTab === tab ? "text-white" : "text-slate-600 hover:bg-slate-50"
              }`}
              style={activeTab === tab ? { backgroundColor: "var(--color-primary)" } : undefined}
            >
              {tab === "notice" ? "📢 নোটিশ" : "📊 ফলাফল"}
            </button>
          ))}
        </div>

        {/* Notice Tab */}
        {activeTab === "notice" && (
          <div
            role="tabpanel"
            aria-label="নোটিশ তালিকা"
            className="max-w-3xl mx-auto"
          >
            <ul className="space-y-3">
              {notices.map((notice) => (
                <li
                  key={notice.id}
                  className="card flex items-start gap-4 p-4 hover:shadow-md transition-shadow group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--color-primary-light)" }}
                    aria-hidden="true"
                  >
                    <FileText size={18} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          CATEGORY_COLORS[notice.category] ?? "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {notice.category}
                      </span>
                      <span className="text-xs text-slate-400">{notice.date}</span>
                    </div>
                    <p className="font-semibold text-slate-800 text-sm truncate group-hover:text-[var(--color-primary)] transition-colors">
                      {notice.title}
                    </p>
                  </div>
                  {notice.pdfUrl && (
                    <a
                      href={notice.pdfUrl}
                      className="shrink-0 p-2 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors"
                      aria-label={`${notice.title} ডাউনলোড করুন`}
                      download
                    >
                      <Download size={16} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
              <a href="#" className="btn-outline-colored">
                সকল নোটিশ দেখুন →
              </a>
            </div>
          </div>
        )}

        {/* Result Tab */}
        {activeTab === "result" && (
          <div
            id="result"
            role="tabpanel"
            aria-label="ফলাফল অনুসন্ধান"
            className="max-w-xl mx-auto"
          >
            <div className="card p-6 md:p-8">
              <h3
                className="text-lg font-bold mb-5 flex items-center gap-2"
                style={{ color: "var(--color-primary)" }}
              >
                <Search size={20} />
                ফলাফল দেখুন
              </h3>

              <form onSubmit={handleResultSearch} className="space-y-4" aria-label="ফলাফল অনুসন্ধান ফর্ম">
                {/* Exam */}
                <div>
                  <label htmlFor="exam" className="block text-xs font-semibold text-slate-600 mb-1">
                    পরীক্ষা
                  </label>
                  <select
                    id="exam"
                    value={exam}
                    onChange={(e) => setExam(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                    style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                  >
                    <option value="">পরীক্ষা নির্বাচন করুন</option>
                    {EXAMS.map((e) => <option key={e} value={e}>{e}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Class */}
                  <div>
                    <label htmlFor="cls" className="block text-xs font-semibold text-slate-600 mb-1">
                      শ্রেণি
                    </label>
                    <select
                      id="cls"
                      value={cls}
                      onChange={(e) => setCls(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                      style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                    >
                      <option value="">শ্রেণি</option>
                      {CLASSES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  {/* Year */}
                  <div>
                    <label htmlFor="year" className="block text-xs font-semibold text-slate-600 mb-1">
                      শিক্ষাবর্ষ
                    </label>
                    <select
                      id="year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white"
                      style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                    >
                      {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>

                {/* Roll */}
                <div>
                  <label htmlFor="roll" className="block text-xs font-semibold text-slate-600 mb-1">
                    রোল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="roll"
                    type="text"
                    required
                    value={roll}
                    onChange={(e) => setRoll(e.target.value)}
                    placeholder="পরীক্ষার রোল নম্বর"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                  />
                </div>

                <button
                  type="submit"
                  disabled={resultState === "searching"}
                  className="btn-primary w-full justify-center"
                >
                  {resultState === "searching" ? "খোঁজা হচ্ছে..." : (
                    <><Search size={16} /> ফলাফল দেখুন</>
                  )}
                </button>
              </form>

              {/* Result output */}
              {resultState === "found" && (
                <div
                  className="mt-5 rounded-xl p-5 border-2"
                  style={{ borderColor: "var(--color-primary)", backgroundColor: "var(--color-primary-light)" }}
                  role="region"
                  aria-live="polite"
                  aria-label="ফলাফল"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-slate-800">ফলাফল</h4>
                    <span className="tag">উত্তীর্ণ ✓</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    {[
                      ["নাম", "মুহাম্মদ আব্দুর রহিম"],
                      ["রোল", roll],
                      ["শ্রেণি", cls || "দাখিল ৯ম"],
                      ["পরীক্ষা", exam || "বার্ষিক পরীক্ষা"],
                      ["মোট নম্বর", "৭৮৫/১০০০"],
                      ["GPA", "৪.৭৫"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <span className="text-slate-400">{label}: </span>
                        <span className="font-semibold text-slate-700">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="btn-primary text-xs px-4 py-2">
                      <Download size={12} /> Marksheet
                    </button>
                    <button className="btn-outline-colored text-xs px-4 py-2">
                      Print
                    </button>
                  </div>
                </div>
              )}

              {resultState === "notfound" && (
                <div
                  className="mt-5 rounded-xl p-4 bg-red-50 border border-red-100 flex items-center gap-3"
                  role="alert"
                  aria-live="assertive"
                >
                  <AlertCircle size={18} className="text-red-400 shrink-0" />
                  <p className="text-red-600 text-sm">
                    কোনো ফলাফল পাওয়া যায়নি। রোল নম্বর ও তথ্য পুনরায় যাচাই করুন।
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
