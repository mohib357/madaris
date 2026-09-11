"use client";

import { Star, Quote } from "lucide-react";

// NOTE: Real testimonials will replace this placeholder content
// when actual customer data is available.
const testimonials = [
  {
    name: "মো. আবদুর রহমান",
    designation: "প্রধান শিক্ষক",
    institution: "ঢাকামডেল উচ্চ বিদ্যালয়",
    content:
      "আগে বিভিন্ন খাতা ও Excel-এ তথ্য রাখতে হতো। এখন শিক্ষার্থী, ফি, ফলাফল ও উপস্থিতি একই জায়গা থেকে পরিচালনা করতে পারছি।",
    rating: 5,
    initial: "র",
    color: "bg-blue-600",
  },
  {
    name: "হাফেজ মো. ইউসুফ",
    designation: "মুহতামিম",
    institution: "দারুল উলুম মাদরাসা",
    content:
      "Attendance এবং result management অনেক সহজ হয়েছে। মাদরাসার জন্য আলাদা feature থাকায় আমাদের কাজ অনেক সুবিধাজনক।",
    rating: 5,
    initial: "ই",
    color: "bg-green-700",
  },
  {
    name: "নাজমা বেগম",
    designation: "অভিভাবক",
    institution: "ছেলে — ৮ম শ্রেণি",
    content:
      "আমার সন্তানের ফলাফল ও উপস্থিতি এখন ঘরে বসেই দেখতে পারি। আগে স্কুলে যেতে হতো, এখন সময় বাঁচছে।",
    rating: 5,
    initial: "ন",
    color: "bg-purple-600",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="tag bg-yellow-100 text-yellow-700 mb-4">প্রতিক্রিয়া</span>
          <h2 className="section-heading">
            তারা যা বলছেন
          </h2>
          <p className="section-subheading">
            Dikkhaloy ব্যবহারকারীদের অভিজ্ঞতা
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card p-6 hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-blue-100 absolute top-5 right-5" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 relative z-10">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.designation} · {t.institution}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs px-4 py-2 rounded-full">
            📝 বাস্তব customer testimonial সংগ্রহের পর এই section আপডেট করা হবে
          </div>
        </div>
      </div>
    </section>
  );
}
