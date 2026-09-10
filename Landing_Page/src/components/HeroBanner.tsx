"use client";

import { useEffect, useRef } from "react";
import type { HeroBanner as HeroBannerType } from "@/types/institution";
import clsx from "clsx";

interface Props {
  hero: HeroBannerType;
  institutionName: string;
}

export default function HeroBanner({ hero, institutionName }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current?.closest(".hero-content");
    if (!el) return;
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child, i) => {
      (child as HTMLElement).style.animationDelay = `${i * 0.18}s`;
      (child as HTMLElement).style.animationFillMode = "forwards";
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      aria-label="হিরো ব্যানার"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        role="img"
        aria-label={`${institutionName} ক্যাম্পাস`}
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(20,67,96,0.92) 0%, rgba(26,82,118,0.80) 50%, rgba(0,0,0,0.40) 100%)" }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />

      {/* Decorative circles */}
      <div className="absolute top-16 right-8 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "var(--color-gold)" }} />
      <div className="absolute bottom-24 right-24 w-32 h-32 rounded-full opacity-10 blur-2xl bg-white" />

      {/* Content */}
      <div className="relative z-10 container-custom py-20 pb-32 md:pb-24">
        <div className="hero-content max-w-2xl">

          {/* Arabic calligraphy */}
          <p
            className="hero-animate arabic-text text-white/70 text-xl mb-4 tracking-wide"
            style={{ animationName: "fadeInUp" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>

          {/* Live badge */}
          <span
            className="hero-animate inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full mb-6 border"
            style={{
              backgroundColor: "rgba(212,160,23,0.18)",
              borderColor: "rgba(212,160,23,0.5)",
              color: "#fde68a",
              animationName: "fadeInUp",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {hero.subtitle}
          </span>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="hero-animate text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            style={{ animationName: "fadeInUp", textShadow: "0 2px 16px rgba(0,0,0,0.3)" }}
          >
            {hero.heading}
          </h1>

          {/* Divider */}
          <div className="hero-animate flex items-center gap-3 mb-5" style={{ animationName: "fadeInUp" }}>
            <div className="h-0.5 w-12 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <div className="h-0.5 w-6 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>

          {/* Description */}
          <p
            className="hero-animate text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ animationName: "fadeInUp" }}
          >
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate flex flex-wrap gap-3 mb-10" style={{ animationName: "fadeInUp" }}>
            {hero.ctaButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={clsx(
                  "px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg",
                  btn.variant === "primary"
                    ? "text-white hover:opacity-90"
                    : "border-2 border-white/70 text-white hover:bg-white/15 backdrop-blur-sm"
                )}
                style={
                  btn.variant === "primary"
                    ? { background: "linear-gradient(135deg, var(--color-gold) 0%, #b7860c 100%)", boxShadow: "0 4px 20px rgba(212,160,23,0.4)" }
                    : undefined
                }
              >
                {btn.label}
              </a>
            ))}
          </div>

          {/* Quick stats */}
          <div
            className="hero-animate flex flex-wrap gap-1 sm:gap-0 sm:divide-x divide-white/20"
            style={{ animationName: "fadeInUp" }}
          >
            {[
              { icon: "🎓", value: "১,২৫০+", label: "শিক্ষার্থী" },
              { icon: "📅", value: "২৫+", label: "বছরের ঐতিহ্য" },
              { icon: "✅", value: "৯৮%", label: "পাসের হার" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-start sm:px-6 first:pl-0 last:pr-0 py-1">
                <span className="text-white font-extrabold text-xl">{item.value}</span>
                <span className="text-white/60 text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,40 C240,64 480,16 720,40 C960,64 1200,20 1440,40 L1440,64 L0,64 Z" fill="#f4f6f9" />
        </svg>
      </div>
    </section>
  );
}
