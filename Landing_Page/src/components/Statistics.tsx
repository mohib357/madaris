"use client";

import { useEffect, useRef, useState } from "react";
import type { Statistic } from "@/types/institution";

interface Props {
  statistics: Statistic[];
}

function useCountUp(target: string, inView: boolean) {
  const [display, setDisplay] = useState("০");

  useEffect(() => {
    if (!inView) return;
    const cleaned = target.replace(/[,+%]/g, "");
    const latin = cleaned.replace(/[০-৯]/g, (d) =>
      String("০১২৩৪৫৬৭৮৯".indexOf(d))
    );
    const num = parseInt(latin, 10);
    if (isNaN(num)) { setDisplay(target); return; }
    const suffix = target.replace(/[০-৯,]/g, "");
    const duration = 1800;
    const steps = 50;
    const step = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, num);
      const bengali = Math.floor(current)
        .toString()
        .replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
      setDisplay(bengali + suffix);
      if (current >= num) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return display;
}

const CARD_GRADIENTS = [
  "from-blue-600 to-blue-800",
  "from-emerald-600 to-emerald-800",
  "from-amber-500 to-amber-700",
  "from-violet-600 to-violet-800",
  "from-rose-600 to-rose-800",
  "from-cyan-600 to-cyan-800",
];

function StatCard({ stat, inView, index }: { stat: Statistic; inView: boolean; index: number }) {
  const value = useCountUp(stat.value, inView);
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 flex flex-col items-center text-center gap-2 shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]}`}
      role="listitem"
    >
      {/* Decorative circle */}
      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
      <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/5" />

      <span className="relative text-4xl mb-1 filter drop-shadow" role="img" aria-hidden="true">
        {stat.icon}
      </span>
      <span
        className="relative text-3xl md:text-4xl font-extrabold text-white tracking-tight"
        aria-live="polite"
      >
        {value}
      </span>
      <span className="relative text-white/80 text-sm font-medium leading-tight">{stat.label}</span>
    </div>
  );
}

export default function Statistics({ statistics }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 md:px-8 lg:px-16"
      style={{ background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 60%, #1a6b9a 100%)" }}
      aria-label="প্রতিষ্ঠানের পরিসংখ্যান"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            এক নজরে আমাদের প্রতিষ্ঠান
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full bg-white/50" />
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
          <p className="text-white/70 text-sm md:text-base">সংখ্যায় আমাদের সাফল্য ও অগ্রগতি</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" role="list">
          {statistics.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
