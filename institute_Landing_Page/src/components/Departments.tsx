"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import type { Department } from "@/types/institution";

interface Props {
  departments: Department[];
}

const CARD_COLORS = [
  { bg: "#e8f4fd", border: "#bee3f8", icon: "#1a5276" },
  { bg: "#e9f7ef", border: "#a9dfbf", icon: "#1e8449" },
  { bg: "#fef9e7", border: "#f9e79f", icon: "#9a7d0a" },
  { bg: "#f4ecf7", border: "#d7bde2", icon: "#7d3c98" },
  { bg: "#fef5e7", border: "#fad7a0", icon: "#b9770e" },
  { bg: "#e8f8f5", border: "#a2d9ce", icon: "#148f77" },
];

export default function Departments({ departments }: Props) {
  const [selected, setSelected] = useState<Department | null>(null);

  return (
    <section
      id="departments"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg)" }}
      aria-label="বিভাগ ও শিক্ষাক্রম"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border"
            style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderColor: "var(--color-primary-light)" }}
          >
            শিক্ষাক্রম
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: "var(--color-primary)" }}>
            বিভাগ ও শিক্ষাক্রম
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
          <p className="text-sm md:text-base" style={{ color: "var(--color-text-muted)" }}>
            আমাদের বিভিন্ন বিভাগে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়ে তুলুন
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => {
            const colors = CARD_COLORS[i % CARD_COLORS.length];
            return (
              <button
                key={dept.id}
                onClick={() => setSelected(dept)}
                className="group text-left rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border focus:outline-none focus-visible:ring-2"
                style={{ backgroundColor: colors.bg, borderColor: colors.border }}
                aria-label={`${dept.name} সম্পর্কে বিস্তারিত দেখুন`}
              >
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "white", border: `2px solid ${colors.border}` }}
                    aria-hidden="true"
                  >
                    {dept.icon}
                  </div>
                  <span
                    className="text-4xl font-extrabold opacity-15 leading-none"
                    style={{ color: colors.icon }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="font-extrabold text-lg mb-2 transition-colors duration-200"
                  style={{ color: colors.icon }}
                >
                  {dept.name}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-muted)" }}>
                  {dept.description}
                </p>

                <div
                  className="inline-flex items-center gap-1.5 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: colors.icon }}
                >
                  বিস্তারিত দেখুন
                  <ArrowRight size={12} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal top bar */}
            <div
              className="h-2"
              style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-gold))" }}
            />
            <div className="p-8 relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400"
                aria-label="বন্ধ করুন"
              >
                <X size={18} />
              </button>

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-md border border-slate-100"
                aria-hidden="true"
              >
                {selected.icon}
              </div>

              <h3 className="text-xl font-extrabold mb-1" style={{ color: "var(--color-primary)" }}>
                {selected.name}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
              </div>

              <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
                {selected.description}
              </p>

              {selected.details && (
                <div
                  className="rounded-xl p-4 text-sm leading-relaxed mb-5"
                  style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-text)" }}
                >
                  {selected.details}
                </div>
              )}

              <a
                href="#admission"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)" }}
                onClick={() => setSelected(null)}
              >
                এই বিভাগে ভর্তি হন
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
