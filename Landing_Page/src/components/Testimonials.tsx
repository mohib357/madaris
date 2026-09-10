"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Send } from "lucide-react";
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
  { key: "all", label: "সব" },
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
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.reviewerType === filter);

  const PER_PAGE = 3;
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const handleFilterChange = (key: typeof filter) => {
    setFilter(key);
    setPage(0);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ backgroundColor: "var(--color-primary-light)" }}
      aria-label="অভিভাবক ও শিক্ষার্থীদের মতামত"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">মতামত</span>
        <h2 className="section-heading">আমাদের সম্পর্কে তারা কী বলেন?</h2>
        <p className="section-subheading">
          অভিভাবক ও শিক্ষার্থীদের বাস্তব অভিজ্ঞতা ও মতামত
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="ফিল্টার">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleFilterChange(tab.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === tab.key
                  ? "text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
              style={filter === tab.key ? { backgroundColor: "var(--color-primary)" } : undefined}
              aria-pressed={filter === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {visible.map((t) => (
            <div key={t.id} className="card p-6 flex flex-col gap-4">
              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Comment */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                "{t.comment}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                {t.photo ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">
                    {REVIEWER_LABELS[t.reviewerType]}
                    {t.classDept && ` | ${t.classDept}`}
                  </p>
                </div>
                {t.featured && (
                  <span className="ml-auto tag text-[10px]">Featured</span>
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
              className="p-2 rounded-full bg-white shadow-sm disabled:opacity-40 hover:bg-slate-50 transition-colors"
              aria-label="আগের পাতা"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs text-slate-500">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2 rounded-full bg-white shadow-sm disabled:opacity-40 hover:bg-slate-50 transition-colors"
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
            className="btn-outline-colored"
          >
            আপনার মতামত দিন →
          </button>
        </div>

        {/* Review form */}
        {showForm && !submitted && (
          <div className="max-w-lg mx-auto mt-8 card p-6">
            <h3
              className="font-bold text-lg mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              মতামত জমা দিন
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4" aria-label="মতামত ফর্ম">
              {/* Type */}
              <div>
                <label htmlFor="reviewer-type" className="block text-xs font-semibold text-slate-600 mb-1">
                  আপনার পরিচয়
                </label>
                <select
                  id="reviewer-type"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                >
                  <option value="guardian">অভিভাবক</option>
                  <option value="student">শিক্ষার্থী</option>
                  <option value="alumni">প্রাক্তন শিক্ষার্থী</option>
                </select>
              </div>
              {/* Name */}
              <div>
                <label htmlFor="reviewer-name" className="block text-xs font-semibold text-slate-600 mb-1">
                  নাম <span className="text-red-500">*</span>
                </label>
                <input
                  id="reviewer-name"
                  type="text"
                  required
                  placeholder="আপনার নাম"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                />
              </div>
              {/* Comment */}
              <div>
                <label htmlFor="reviewer-comment" className="block text-xs font-semibold text-slate-600 mb-1">
                  আপনার মতামত <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="reviewer-comment"
                  required
                  rows={3}
                  placeholder="আপনার অভিজ্ঞতা শেয়ার করুন..."
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                />
              </div>
              {/* Star rating */}
              <div>
                <span className="block text-xs font-semibold text-slate-600 mb-2">
                  রেটিং
                </span>
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
                        size={24}
                        className={
                          i < (hoverRating || rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-200 fill-slate-200"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={14} /> মতামত জমা দিন
              </button>
            </form>
          </div>
        )}

        {submitted && (
          <div
            className="max-w-lg mx-auto mt-8 card p-6 text-center"
            role="alert"
            aria-live="polite"
          >
            <span className="text-4xl">🎉</span>
            <h3 className="font-bold text-slate-800 mt-3 mb-1">ধন্যবাদ!</h3>
            <p className="text-slate-500 text-sm">
              আপনার মতামত প্রতিষ্ঠানের কাছে পাঠানো হয়েছে। যাচাইয়ের পর এটি প্রকাশ করা হবে।
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
