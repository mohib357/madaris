"use client";

import { ClipboardEdit, Calculator, FileText, Share2, Eye } from "lucide-react";

const flow = [
  { emoji: "📋", label: "Exam Setup", desc: "পরীক্ষার নাম, তারিখ, বিষয় সেটআপ" },
  { emoji: "✏️", label: "Marks Entry", desc: "Teacher মার্কশিটে নম্বর লেখেন" },
  { emoji: "🤖", label: "Auto Calculation", desc: "GPA, Grade স্বয়ংক্রিয় হিসাব" },
  { emoji: "📄", label: "Marksheet", desc: "Professional marksheet তৈরি" },
  { emoji: "📢", label: "Publish Result", desc: "ওয়েবসাইটে ও পোর্টালে প্রকাশ" },
  { emoji: "👁️", label: "Guardian View", desc: "অভিভাবক ও শিক্ষার্থী দেখতে পান" },
];

const gradeData = [
  { grade: "A+", gpa: "5.00", count: 34, color: "bg-green-500" },
  { grade: "A", gpa: "4.00", count: 87, color: "bg-blue-500" },
  { grade: "A-", gpa: "3.50", count: 156, color: "bg-indigo-500" },
  { grade: "B", gpa: "3.00", count: 203, color: "bg-purple-500" },
  { grade: "C", gpa: "2.00", count: 145, color: "bg-amber-500" },
  { grade: "D", gpa: "1.00", count: 42, color: "bg-orange-500" },
];

export default function ResultSection() {
  const max = Math.max(...gradeData.map((g) => g.count));

  return (
    <section id="results" className="section-pad relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pat-checker" style={{ opacity:1 }} />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-purple-100 text-purple-700 mb-4">Exam & Result</span>
          <h2 className="section-heading">
            পরীক্ষা থেকে ফলাফল—{" "}
            <span className="gradient-text">সবকিছু এক জায়গায়</span>
          </h2>
          <p className="section-subheading">
            একবার Data Entry → অনেক জায়গায় ব্যবহার। Marksheet, Report Card, Results—সব automated।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Process flow */}
          <div className="space-y-3">
            {flow.map((step, i) => (
              <div
                key={step.label}
                className="flex items-center gap-4 bg-white rounded-2xl p-4 border-2 hover:border-purple-300 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                style={{ borderColor: "#7c3aed22" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#7c3aed66"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#7c3aed22"; }}
              >
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-xl group-hover:bg-purple-100 transition-colors flex-shrink-0">
                  {step.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-purple-500 font-bold font-mono">0{i + 1}</span>
                    <h4 className="font-semibold text-gray-900 text-sm">{step.label}</h4>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{step.desc}</p>
                </div>
                {i < flow.length - 1 && (
                  <div className="text-gray-300 text-xs">↓</div>
                )}
              </div>
            ))}
          </div>

          {/* Grade distribution chart */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-1">Grade Distribution</h4>
            <p className="text-gray-400 text-xs mb-6">বার্ষিক পরীক্ষা ২০২৬ — শিক্ষার্থী ৬৬৭ জন</p>

            <div className="space-y-3">
              {gradeData.map((g) => (
                <div key={g.grade} className="flex items-center gap-3">
                  <div className="w-8 text-sm font-bold text-gray-700">{g.grade}</div>
                  <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
                    <div
                      className={`h-full ${g.color} rounded-full flex items-center justify-end pr-2 transition-all duration-700`}
                      style={{ width: `${(g.count / max) * 100}%` }}
                    >
                      <span className="text-[10px] text-white font-bold">{g.count}</span>
                    </div>
                  </div>
                  <div className="w-10 text-xs text-gray-400 text-right">{g.gpa}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-lg font-bold text-green-600">98.5%</div>
                <div className="text-xs text-gray-500">পাসের হার</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-600">34</div>
                <div className="text-xs text-gray-500">GPA 5</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-600">667</div>
                <div className="text-xs text-gray-500">মোট শিক্ষার্থী</div>
              </div>
            </div>

            <p className="text-[10px] text-gray-300 text-center mt-3">
              * উপরের তথ্য UI demo মাত্র
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
