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
    // Parse numeric part from Bengali/mixed string e.g. "১,২৫০+"
    const cleaned = target.replace(/[,+%]/g, "");
    // Convert Bengali digits to Latin
    const latin = cleaned.replace(/[০-৯]/g, (d) =>
      String("০১২৩৪৫৬৭৮৯".indexOf(d))
    );
    const num = parseInt(latin, 10);
    if (isNaN(num)) {
      setDisplay(target);
      return;
    }
    const suffix = target.replace(/[০-৯,]/g, "");
    const duration = 1800;
    const steps = 50;
    const step = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, num);
      // Convert back to Bengali
      const bengali = Math.floor(current)
        .toString()
        .replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
      // Add commas (simple, for demo)
      setDisplay(bengali + suffix);
      if (current >= num) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return display;
}

function StatCard({ stat, inView }: { stat: Statistic; inView: boolean }) {
  const value = useCountUp(stat.value, inView);
  return (
    <div
      className="card flex flex-col items-center text-center py-8 px-4 gap-2 hover:scale-105 transition-transform duration-300"
      role="listitem"
    >
      <span className="text-4xl mb-1" role="img" aria-hidden="true">
        {stat.icon}
      </span>
      <span
        className="text-3xl md:text-4xl font-extrabold tracking-tight"
        style={{ color: "var(--color-primary)" }}
        aria-live="polite"
      >
        {value}
      </span>
      <span className="text-slate-500 text-sm font-medium">{stat.label}</span>
    </div>
  );
}

export default function Statistics({ statistics }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: "var(--color-primary-light)" }}
      aria-label="প্রতিষ্ঠানের পরিসংখ্যান"
    >
      <div className="container-custom">
        <h2 className="section-heading">এক নজরে আমাদের প্রতিষ্ঠান</h2>
        <p className="section-subheading">সংখ্যায় আমাদের সাফল্য ও অগ্রগতি</p>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          role="list"
        >
          {statistics.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
