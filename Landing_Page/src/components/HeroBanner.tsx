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
    // Stagger-animate children on mount
    const el = headingRef.current?.closest(".hero-content");
    if (!el) return;
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child, i) => {
      (child as HTMLElement).style.animationDelay = `${i * 0.15}s`;
      (child as HTMLElement).classList.add("animate-slide-up");
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        role="img"
        aria-label={`${institutionName} ক্যাম্পাস`}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom py-20 pb-28 md:pb-20">
        <div className="hero-content max-w-2xl">
          {/* Badge */}
          <span
            className="hero-animate opacity-0 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-white/30 text-white/90 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {hero.subtitle}
          </span>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="hero-animate opacity-0 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            {hero.heading}
          </h1>

          {/* Description */}
          <p className="hero-animate opacity-0 text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate opacity-0 flex flex-wrap gap-3">
            {hero.ctaButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={clsx(
                  "px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md",
                  btn.variant === "primary"
                    ? "text-white shadow-lg"
                    : "border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm"
                )}
                style={
                  btn.variant === "primary"
                    ? { backgroundColor: "var(--color-primary)" }
                    : undefined
                }
              >
                {btn.label}
              </a>
            ))}
          </div>

          {/* Quick stats ribbon */}
          <div className="hero-animate opacity-0 mt-12 flex flex-wrap gap-6">
            {[
              { icon: "🎓", text: "১,২৫০+ শিক্ষার্থী" },
              { icon: "📅", text: "২৫+ বছরের ঐতিহ্য" },
              { icon: "✅", text: "৯৮% পাসের হার" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/80 text-sm">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 56"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10 md:h-14"
        >
          <path
            d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
