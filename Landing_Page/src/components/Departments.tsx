"use client";

import { useState } from "react";
import { X, BookOpen } from "lucide-react";
import type { Department } from "@/types/institution";

interface Props {
  departments: Department[];
}

export default function Departments({ departments }: Props) {
  const [selected, setSelected] = useState<Department | null>(null);

  return (
    <section
      id="departments"
      className="section-padding bg-white"
      aria-label="বিভাগ ও শিক্ষাক্রম"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">শিক্ষাক্রম</span>
        <h2 className="section-heading">বিভাগ ও শিক্ষাক্রম</h2>
        <p className="section-subheading">
          আমাদের বিভিন্ন বিভাগে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়ে তুলুন
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <button
              key={dept.id}
              onClick={() => setSelected(dept)}
              className="card p-6 text-left group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
              aria-label={`${dept.name} সম্পর্কে বিস্তারিত দেখুন`}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-colors duration-300 group-hover:scale-110"
                style={{ backgroundColor: "var(--color-primary-light)" }}
                aria-hidden="true"
              >
                {dept.icon}
              </div>

              {/* Number badge */}
              <span className="text-xs font-bold text-slate-300 mb-1 block">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                {dept.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {dept.description}
              </p>

              <div
                className="mt-4 text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--color-primary)" }}
              >
                <BookOpen size={12} />
                বিস্তারিত দেখুন →
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400"
              aria-label="বন্ধ করুন"
            >
              <X size={18} />
            </button>

            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4"
              style={{ backgroundColor: "var(--color-primary-light)" }}
              aria-hidden="true"
            >
              {selected.icon}
            </div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ color: "var(--color-primary)" }}
            >
              {selected.name}
            </h3>
            <p className="text-slate-500 text-sm mb-4">{selected.description}</p>
            {selected.details && (
              <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 rounded-xl p-4">
                {selected.details}
              </p>
            )}
            <a
              href="#admission"
              className="btn-primary mt-6 w-full justify-center"
              onClick={() => setSelected(null)}
            >
              এই বিভাগে ভর্তি হন →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
