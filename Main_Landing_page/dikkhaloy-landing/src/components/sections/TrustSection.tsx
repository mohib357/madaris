"use client";

/**
 * TrustSection — বিশ্বস্ততা
 *
 * ⚠️  NOTE FOR DEVELOPERS:
 *  নিচের সংখ্যাগুলো এবং প্রতিষ্ঠানের তালিকা সম্পূর্ণ DUMMY/PLACEHOLDER ডেটা।
 *  যখন বাস্তব প্রতিষ্ঠান যুক্ত হবে, এই ডেটা ব্যাক-এন্ড API থেকে
 *  অটোমেটিক কাউন্ট হবে। তখন এই হার্ডকোডেড ভ্যালুগুলো সরিয়ে
 *  API-driven কাউন্ট দিতে হবে।
 */

import { useEffect, useRef, useState } from "react";
import {
  School, GraduationCap, Users, Globe, MapPin
} from "lucide-react";

/* ── Dummy stats ──────────────────────────────────────────────
   এগুলো DUMMY। Real-time API কাউন্ট দিয়ে replace করতে হবে।
   ──────────────────────────────────────────────────────────── */
const stats = [
  {
    icon: School,
    label: "প্রতিষ্ঠান",
    dummyValue: 120,
    suffix: "+",
    gradient: "from-blue-500 to-indigo-600",
    glow: "shadow-[0_4px_28px_rgba(59,130,246,0.35)]",
    bgLight: "bg-blue-50",
    iconColor: "text-blue-600",
    note: "DUMMY",
  },
  {
    icon: GraduationCap,
    label: "শিক্ষার্থী",
    dummyValue: 18500,
    suffix: "+",
    gradient: "from-emerald-500 to-teal-600",
    glow: "shadow-[0_4px_28px_rgba(16,185,129,0.35)]",
    bgLight: "bg-emerald-50",
    iconColor: "text-emerald-600",
    note: "DUMMY",
  },
  {
    icon: Users,
    label: "শিক্ষক",
    dummyValue: 2400,
    suffix: "+",
    gradient: "from-violet-500 to-purple-700",
    glow: "shadow-[0_4px_28px_rgba(139,92,246,0.35)]",
    bgLight: "bg-violet-50",
    iconColor: "text-violet-600",
    note: "DUMMY",
  },
  {
    icon: Globe,
    label: "ওয়েবসাইট",
    dummyValue: 95,
    suffix: "+",
    gradient: "from-orange-500 to-rose-500",
    glow: "shadow-[0_4px_28px_rgba(249,115,22,0.35)]",
    bgLight: "bg-orange-50",
    iconColor: "text-orange-600",
    note: "DUMMY",
  },
  {
    icon: MapPin,
    label: "প্রদেশ",
    dummyValue: 8,
    suffix: "টি",
    gradient: "from-cyan-500 to-blue-600",
    glow: "shadow-[0_4px_28px_rgba(6,182,212,0.35)]",
    bgLight: "bg-cyan-50",
    iconColor: "text-cyan-600",
    note: "DUMMY",
  },
];

/* ── Dummy partner institutions ───────────────────────────────
   এগুলো DUMMY মাদরাসা/স্কুল নাম ও ওয়েবসাইট।
   বাস্তব প্রতিষ্ঠান নিবন্ধিত হলে DB থেকে লোড হবে।
   ──────────────────────────────────────────────────────────── */
const dummyPartners = [
  { name: "মারকাযুল কুরআন মাদরাসা",    abbr: "MQM",  color: "from-green-700 to-green-900",   url: "https://mqmadrasa.com" },
  { name: "জামিয়া ইসলামিয়া ঢাকা",     abbr: "JID",  color: "from-blue-700 to-blue-900",    url: "https://jamia-islamia.edu.bd" },
  { name: "দারুল উলুম মাদরাসা",         abbr: "DUM",  color: "from-teal-700 to-teal-900",    url: "https://darululoom.edu.bd" },
  { name: "আল-আমিন একাডেমি",            abbr: "AAA",  color: "from-indigo-700 to-indigo-900", url: "https://alamin-academy.edu.bd" },
  { name: "ইসলামিক ফাউন্ডেশন স্কুল",   abbr: "IFS",  color: "from-emerald-700 to-emerald-900", url: "https://if-school.edu.bd" },
  { name: "নূরুল ইসলাম মাদরাসা",        abbr: "NIM",  color: "from-amber-700 to-amber-900",  url: "https://nurul-islam.edu.bd" },
  { name: "হাফেজিয়া মাদরাসা চট্টগ্রাম", abbr: "HMC",  color: "from-rose-700 to-rose-900",    url: "https://hafijia-ctg.edu.bd" },
  { name: "বিসমিল্লাহ পাবলিক স্কুল",    abbr: "BPS",  color: "from-sky-700 to-sky-900",      url: "https://bismillah-school.edu.bd" },
  { name: "তাকওয়া ইন্টারন্যাশনাল",      abbr: "TIS",  color: "from-purple-700 to-purple-900", url: "https://taqwa-intl.edu.bd" },
  { name: "মদিনাতুল উলুম মাদরাসা",      abbr: "MUM",  color: "from-cyan-700 to-cyan-900",    url: "https://madinatul-ulum.edu.bd" },
];
// Duplicate for seamless infinite scroll
const partners = [...dummyPartners, ...dummyPartners];

/* ── Animated counter hook ──────────────────────────────────── */
function useCounter(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCounter(stat.dummyValue, active);
  return (
    <div
      className={`
        relative overflow-hidden
        bg-white rounded-2xl border border-gray-100
        ${stat.glow}
        p-5 flex flex-col items-center gap-3
        hover:-translate-y-1 hover:scale-[1.03]
        transition-all duration-300 cursor-default
        group
      `}
    >
      {/* top gradient strip */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-t-2xl`} />
      {/* icon */}
      <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
        <stat.icon size={22} className="text-white" />
      </div>
      {/* value */}
      <div className="text-center">
        <div className="text-3xl font-extrabold text-gray-900 tabular-nums leading-none">
          {count.toLocaleString("bn-BD")}{stat.suffix}
        </div>
        <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
      </div>
      {/* DUMMY badge */}
      <span className="absolute top-3 right-3 text-[8px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full uppercase tracking-wide border border-amber-200">
        Dummy
      </span>
    </div>
  );
}

/* ── Logo card with center-zoom effect ─────────────────────── */
function LogoCard({
  partner,
  scrollPos,
  containerWidth,
  cardIndex,
  cardWidth,
}: {
  partner: typeof partners[0];
  scrollPos: number;
  containerWidth: number;
  cardIndex: number;
  cardWidth: number;
}) {
  // Calculate distance from center of container
  const cardCenter = cardIndex * cardWidth - scrollPos + cardWidth / 2;
  const containerCenter = containerWidth / 2;
  const distance = Math.abs(cardCenter - containerCenter);
  const maxDistance = containerWidth * 0.5;
  const proximity = Math.max(0, 1 - distance / maxDistance);
  const scale = 1 + proximity * 1.0; // 1× → 2× at center
  const opacity = 0.5 + proximity * 0.5;

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 mx-3 flex flex-col items-center gap-2 cursor-pointer"
      style={{
        transform: `scale(${scale})`,
        opacity,
        transition: "transform 0.15s ease, opacity 0.15s ease",
        transformOrigin: "center center",
        width: `${cardWidth - 24}px`,
      }}
      title={partner.name}
    >
      <div
        className={`w-14 h-14 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center shadow-lg border border-white/10`}
      >
        <span className="text-white font-extrabold text-sm tracking-tight">{partner.abbr}</span>
      </div>
      <span className="text-[10px] text-gray-600 font-medium text-center leading-tight max-w-[80px] line-clamp-2">
        {partner.name}
      </span>
    </a>
  );
}

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const [visible, setVisible]           = useState(false);
  const [scrollPos, setScrollPos]       = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const CARD_WIDTH = 120;
  const animFrameRef = useRef<number | null>(null);
  const posRef = useRef(0);

  // Intersection observer for counter animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Measure container
  useEffect(() => {
    const measure = () => {
      if (trackRef.current?.parentElement) {
        setContainerWidth(trackRef.current.parentElement.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Smooth RTL auto-scroll (RAF loop)
  useEffect(() => {
    let paused = false;
    const totalWidth = partners.length * CARD_WIDTH;
    const halfWidth = totalWidth / 2;

    const tick = () => {
      if (!paused) {
        posRef.current += 0.5;
        if (posRef.current >= halfWidth) posRef.current -= halfWidth;
        setScrollPos(posRef.current);
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    const el = trackRef.current?.parentElement;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    el?.addEventListener("mouseenter", pause);
    el?.addEventListener("mouseleave", resume);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      el?.removeEventListener("mouseenter", pause);
      el?.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section
      className="py-16 bg-white relative overflow-hidden border-b border-gray-100"
      ref={sectionRef}
    >
      {/* Islamic tile pattern overlay */}
      <div className="absolute inset-0 islamic-tile-pattern pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            বিশ্বস্ততা
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            স্কুল ও মাদরাসার আধুনিক ব্যবস্থাপনার জন্য তৈরি
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
            বাংলাদেশের শিক্ষা প্রতিষ্ঠানগুলোর জন্য বিশেষভাবে ডিজাইন করা
          </p>
        </div>

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} active={visible} />
          ))}
        </div>

        {/* Dummy data note */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs px-4 py-2 rounded-full">
            <span>⚠️</span>
            <span>
              <strong>Developer Note:</strong> উপরের সংখ্যাগুলো DUMMY। বাস্তব প্রতিষ্ঠান যুক্ত হলে ব্যাক-এন্ড API থেকে অটো কাউন্ট হবে।
            </span>
          </div>
        </div>

        {/* ── Partner Logo Scroll ── */}
        <div className="border-t border-gray-100 pt-10">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              আমাদের সাথে যুক্ত প্রতিষ্ঠানসমূহ
            </p>
            <p className="text-[10px] text-amber-600 mt-1">
              ⚠️ Dummy প্রতিষ্ঠান — বাস্তব প্রতিষ্ঠান নিবন্ধন করলে এখানে তাদের নাম ও লোগো স্বয়ংক্রিয়ভাবে যুক্ত হবে।
            </p>
          </div>

          {/* Scroll track — RTL, with center-zoom */}
          <div className="relative overflow-hidden" style={{ height: "110px" }}>
            {/* fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
              ref={trackRef}
              className="flex items-center h-full"
              style={{ transform: `translateX(-${scrollPos}px)`, willChange: "transform" }}
            >
              {partners.map((p, i) => (
                <LogoCard
                  key={`${p.abbr}-${i}`}
                  partner={p}
                  scrollPos={scrollPos}
                  containerWidth={containerWidth}
                  cardIndex={i}
                  cardWidth={CARD_WIDTH}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
