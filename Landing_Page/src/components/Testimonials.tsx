"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Send, Quote } from "lucide-react";
import type { Testimonial } from "@/types/institution";

interface Props {
  testimonials: Testimonial[];
}

const REVIEWER_LABELS: Record<Testimonial["reviewerType"], string> = {
  guardian: "অভিভাবক",
  student: "শিক্ষার্থী",
  alumni: "প্রাক্তন শিক্ষার্থী",
};

const FILTER_TABS = [
  { key: "all", label: "সব মতামত" },
  { key: "guardian", label: "অভিভাবক" },
  { key: "student", label: "শিক্ষার্থী" },
  { key: "alumni", label: "প্রাক্তন" },
] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} তারা রেটিং`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-amber-400 text-amber-400" : "text-slate-200 fill-slate-200"}
        />
      ))}
    </div>
  );
}

export default function Testimonials({ testimonials }: Props) {
  const [filter, setFilter] = useState<"all" | Testimonial["reviewerType"]>("all");
  const [page, setPage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const filtered =
    filter === "all" ? testimonials : testimonials.filter((t) => t.reviewerType === filter);
  const PER_PAGE = 3;
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const handleFilterChange = (key: typeof filter) => { setFilter(key); setPage(0); };
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)" }}
      aria-label="অভিভাবক ও শিক্ষার্থীদের মতামত"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-white/20 text-white/80"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            মতামত
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            আমাদের সম্পর্কে তারা কী বলেন?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded bg-white/30" />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="h-0.5 w-10 rounded bg-white/30" />
          </div>
          <p className="text-white/70 text-sm md:text-base">অভিভাবক ও শিক্ষার্থীদের বাস্তব অভিজ্ঞতা ও মতামত</p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="ফিল্টার">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleFilterChange(tab.key)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                filter === tab.key
                  ? { backgroundColor: "var(--color-gold)", color: "#fff" }
                  : { backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)" }
              }
              aria-pressed={filter === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-xl border border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={28} style={{ color: "var(--color-primary-light)" }} aria-hidden="true" />

              {/* Comment */}
              <p className="text-sm leading-relaxed flex-1 italic" style={{ color: "var(--color-text)" }}>
                "{t.comment}"
              </p>

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Reviewer */}
              <div
                className="flex items-center gap-3 pt-3 border-t"
                style={{ borderColor: "var(--color-border)" }}
              >
                {t.photo ? (
                  <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-md">
                    <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="44px" />
                  </div>
                ) : (
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shrink-0"
                    style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate" style={{ color: "var(--color-text)" }}>{t.name}</p>
                  <p className="text-xs truncate" style={{ color: "var(--color-text-muted)" }}>
                    {REVIEWER_LABELS[t.reviewerType]}{t.classDept && ` · ${t.classDept}`}
                  </p>
                </div>
                {t.featured && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-gold-light)", color: "#92600a" }}
                  >
                    ★
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mb-8">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 disabled:opacity-30 transition-colors text-white"
              aria-label="আগের পাতা"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-white/70 text-sm">{page + 1} / {totalPages}</span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 disabled:opacity-30 transition-colors text-white"
              aria-label="পরের পাতা"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Submit review CTA */}
        <div className="text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-7 py-3 rounded-xl font-bold text-sm border-2 border-white/50 text-white hover:bg-white/10 transition-all"
          >
            আপনার মতামত দিন →
          </button>
        </div>

        {/* Review form */}
        {showForm && !submitted && (
          <div className="max-w-lg mx-auto mt-8 bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="font-extrabold text-lg mb-5" style={{ color: "var(--color-primary)" }}>
              মতামত জমা দিন
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4" aria-label="মতামত ফর্ম">
              <div>
                <label htmlFor="reviewer-type" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                  আপনার পরিচয়
                </label>
                <select
                  id="reviewer-type"
                  className="w-full border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <option value="guardian">অভিভাবক</option>
                  <option value="student">শিক্ষার্থী</option>
                  <option value="alumni">প্রাক্তন শিক্ষার্থী</option>
                </select>
              </div>
              <div>
                <label htmlFor="reviewer-name" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                  নাম <span className="text-red-500">*</span>
                </label>
                <input
                  id="reviewer-name"
                  type="text"
                  required
                  placeholder="আপনার নাম"
                  className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
              <div>
                <label htmlFor="reviewer-comment" className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                  আপনার মতামত <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="reviewer-comment"
                  required
                  rows={3}
                  placeholder="আপনার অভিজ্ঞতা শেয়ার করুন..."
                  className="w-full border rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
              <div>
                <span className="block text-xs font-semibold mb-2" style={{ color: "var(--color-text-muted)" }}>রেটিং</span>
                <div className="flex gap-1" role="group" aria-label="রেটিং নির্বাচন">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setRating(i + 1)}
                      onMouseEnter={() => setHoverRating(i + 1)}
                      onMouseLeave={() => setHoverRating(0)}
                      aria-label={`${i + 1} তারা`}
                    >
                      <Star
                        size={26}
                        className={i < (hoverRating || rating) ? "fill-amber-400 text-amber-400" : "text-slate-200 fill-slate-200"}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)" }}
              >
                <Send size={14} /> মতামত জমা দিন
              </button>
            </form>
          </div>
        )}

        {submitted && (
          <div className="max-w-lg mx-auto mt-8 bg-white rounded-2xl shadow-2xl p-8 text-center" role="alert" aria-live="polite">
            <span className="text-5xl">🎉</span>
            <h3 className="font-extrabold text-slate-800 mt-4 mb-2 text-lg">ধন্যবাদ!</h3>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              আপনার মতামত পাঠানো হয়েছে। যাচাইয়ের পর প্রকাশ করা হবে।
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
