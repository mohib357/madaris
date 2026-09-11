"use client";

/**
 * Testimonials — প্রতিক্রিয়া
 *
 * কার্ডগুলো বাম থেকে ডান দিকে স্ক্রল হয় (LTR)।
 * র‍্যান্ডমলি লোড হয় প্রতিবার।
 *
 * ⚠️ NOTE: নিচের সব testimonial DUMMY/PLACEHOLDER।
 * বাস্তব customer testimonial সংগ্রহের পর replace করতে হবে।
 */

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const allTestimonials = [
  {
    name: "মো. আবদুর রহমান",
    designation: "প্রধান শিক্ষক",
    institution: "ঢাকামডেল উচ্চ বিদ্যালয়",
    content:
      "আগে বিভিন্ন খাতা ও Excel-এ তথ্য রাখতে হতো। এখন শিক্ষার্থী, ফি, ফলাফল ও উপস্থিতি একই জায়গা থেকে পরিচালনা করছি।",
    rating: 5,
    initial: "র",
    gradient: "from-blue-600 to-indigo-700",
    borderColor: "border-blue-100",
  },
  {
    name: "হাফেজ মো. ইউসুফ",
    designation: "মুহতামিম",
    institution: "দারুল উলুম মাদরাসা",
    content:
      "Attendance এবং result management অনেক সহজ হয়েছে। মাদরাসার জন্য আলাদা feature থাকায় কাজ অনেক সুবিধাজনক।",
    rating: 5,
    initial: "ই",
    gradient: "from-green-700 to-emerald-800",
    borderColor: "border-green-100",
  },
  {
    name: "নাজমা বেগম",
    designation: "অভিভাবক",
    institution: "ছেলে — ৮ম শ্রেণি",
    content:
      "আমার সন্তানের ফলাফল ও উপস্থিতি এখন ঘরে বসেই দেখতে পারি। আগে স্কুলে যেতে হতো, এখন সময় বাঁচছে।",
    rating: 5,
    initial: "ন",
    gradient: "from-purple-600 to-violet-700",
    borderColor: "border-purple-100",
  },
  {
    name: "মাওলানা আব্দুল করিম",
    designation: "মুদির",
    institution: "মারকাযুল কুরআন মাদরাসা",
    content:
      "হিফজ বিভাগের ছাত্রদের তথ্য ও লিল্লাহ ফান্ড ম্যানেজ করা এখন অনেক সহজ। আলহামদুলিল্লাহ।",
    rating: 5,
    initial: "ক",
    gradient: "from-teal-600 to-cyan-700",
    borderColor: "border-teal-100",
  },
  {
    name: "রহিমা আক্তার",
    designation: "সহকারী প্রধান শিক্ষিকা",
    institution: "আল-আমিন একাডেমি",
    content:
      "অনলাইন ভর্তি ফর্ম চালু হওয়ার পর এই বছর আবেদনের সংখ্যা দ্বিগুণ হয়েছে।",
    rating: 5,
    initial: "রহ",
    gradient: "from-rose-600 to-pink-700",
    borderColor: "border-rose-100",
  },
  {
    name: "মো. সাইফুল ইসলাম",
    designation: "হিসাবরক্ষক",
    institution: "ইসলামিক ফাউন্ডেশন স্কুল",
    content:
      "Fee collection ও monthly report অটোমেটিক হওয়ায় হাতে লেখার ঝামেলা পুরোপুরি শেষ।",
    rating: 5,
    initial: "স",
    gradient: "from-amber-600 to-orange-600",
    borderColor: "border-amber-100",
  },
  {
    name: "ফারহানা খানম",
    designation: "অভিভাবক",
    institution: "মেয়ে — ৫ম শ্রেণি",
    content:
      "Guardian portal-এ SMS আসলে বুঝতে পারি আমার মেয়ে স্কুলে পৌঁছেছে কিনা। মনে শান্তি পাই।",
    rating: 5,
    initial: "ফ",
    gradient: "from-sky-600 to-blue-700",
    borderColor: "border-sky-100",
  },
  {
    name: "শেখ মুহাম্মদ তাহির",
    designation: "উপাধ্যক্ষ",
    institution: "নূরুল ইসলাম মাদরাসা",
    content:
      "Website এর custom domain সুবিধা দারুণ — এখন আমাদের নিজস্ব ঠিকানা আছে।",
    rating: 5,
    initial: "তা",
    gradient: "from-slate-600 to-gray-700",
    borderColor: "border-slate-100",
  },
];

/** Fisher-Yates shuffle */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Testimonials() {
  // Start with the original order (SSR-safe).
  // Randomise ONLY on the client after mount to avoid hydration mismatch.
  const [randomised, setRandomised] = useState(allTestimonials);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setRandomised(shuffle(allTestimonials));
    setMounted(true);
  }, []);

  // Duplicate for seamless infinite scroll
  const scrollItems = [...randomised, ...randomised];

  const trackRef = useRef<HTMLDivElement>(null);
  const posRef   = useRef(0);
  const rafRef   = useRef<number | null>(null);

  useEffect(() => {
    let paused = false;
    const CARD_WIDTH = 320 + 24; // approx card + gap
    const halfWidth  = CARD_WIDTH * randomised.length;

    const tick = () => {
      if (!paused) {
        posRef.current += 0.45;
        if (posRef.current >= halfWidth) posRef.current -= halfWidth;
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const el = trackRef.current?.parentElement;
    const pause  = () => { paused = true; };
    const resume = () => { paused = false; };
    el?.addEventListener("mouseenter", pause);
    el?.addEventListener("mouseleave", resume);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el?.removeEventListener("mouseenter", pause);
      el?.removeEventListener("mouseleave", resume);
    };
  }, [randomised.length]);

  return (
    <section
      id="testimonials"
      className="section-pad bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Islamic eight-star pattern */}
      <div className="absolute inset-0 islamic-eightstar-pattern pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-yellow-100 text-yellow-700 mb-4">প্রতিক্রিয়া</span>
          <h2 className="section-heading">তারা যা বলছেন</h2>
          <p className="section-subheading">Dikkhaloy ব্যবহারকারীদের অভিজ্ঞতা</p>
        </div>
      </div>

      {/* Full-width scroll — outside container for edge-to-edge */}
      <div className="relative overflow-hidden py-4">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-indigo-50 to-transparent z-10 pointer-events-none" />

        {/* Track — LTR scroll (bam theke dan) */}
        <div
          ref={trackRef}
          className="flex gap-6 w-max"
          style={{ willChange: "transform" }}
        >
          {scrollItems.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className={`
                relative flex-shrink-0 w-80
                bg-white rounded-2xl border ${t.borderColor}
                shadow-card hover:shadow-card-hover
                p-6 hover:-translate-y-1
                transition-all duration-300
              `}
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient} rounded-t-2xl`} />

              {/* Quote icon */}
              <Quote size={28} className="text-blue-100 absolute top-5 right-5" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 relative z-10">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-md`}>
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
      </div>

      {/* Placeholder note */}
      <div className="container-xl relative z-10 mt-10">
        <div className="text-center">
          <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs px-4 py-2 rounded-full">
            📝 এগুলো DUMMY testimonial। বাস্তব customer testimonial সংগ্রহের পর এই section আপডেট করা হবে।
          </div>
        </div>
      </div>
    </section>
  );
}
