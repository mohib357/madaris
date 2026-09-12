"use client";
/**
 * TrustSection  ⚠️ DUMMY DATA
 *
 * Pure JS RAF scroll — no CSS animation.
 * This prevents ALL blinking (CSS anim restart = blink).
 * Drag works perfectly because we own the position.
 *
 * Gap fix: ITEM_W = 180px (was 300)
 * No opacity dim: opacity always 1
 * Center zoom: direct width/height update via RAF + getBoundingClientRect
 */
import { useEffect, useRef, useState, useCallback } from "react";
import { School, GraduationCap, Users, Globe, MapPin } from "lucide-react";

const STATS = [
  { icon: School,        label: "প্রতিষ্ঠান",  n: 120,   suffix: "+",  c1: "#3b82f6", c2: "#6366f1", sh: "rgba(59,130,246,0.35)"  },
  { icon: GraduationCap, label: "শিক্ষার্থী", n: 18500, suffix: "+",  c1: "#10b981", c2: "#0d9488", sh: "rgba(16,185,129,0.35)"  },
  { icon: Users,         label: "শিক্ষক",     n: 2400,  suffix: "+",  c1: "#8b5cf6", c2: "#7c3aed", sh: "rgba(139,92,246,0.35)"   },
  { icon: Globe,         label: "ওয়েবসাইট",  n: 95,    suffix: "+",  c1: "#f97316", c2: "#ef4444", sh: "rgba(249,115,22,0.35)"    },
  { icon: MapPin,        label: "প্রদেশ",     n: 8,     suffix: "টি", c1: "#06b6d4", c2: "#3b82f6", sh: "rgba(6,182,212,0.35)"     },
];

const BASE = [
  { name: "মারকাযুল কুরআন মাদরাসা",    abbr: "MQM", c1: "#15803d", c2: "#166534", glow: "#22c55e", url: "https://mqmadrasa.com" },
  { name: "জামিয়া ইসলামিয়া ঢাকা",     abbr: "JID", c1: "#1d4ed8", c2: "#1e40af", glow: "#60a5fa", url: "https://jamia-islamia.edu.bd" },
  { name: "দারুল উলুম মাদরাসা",         abbr: "DUM", c1: "#0f766e", c2: "#115e59", glow: "#2dd4bf", url: "https://darululoom.edu.bd" },
  { name: "আল-আমিন একাডেমি",            abbr: "AAA", c1: "#4338ca", c2: "#3730a3", glow: "#818cf8", url: "https://alamin-academy.edu.bd" },
  { name: "ইসলামিক ফাউন্ডেশন স্কুল",   abbr: "IFS", c1: "#047857", c2: "#065f46", glow: "#34d399", url: "https://if-school.edu.bd" },
  { name: "নূরুল ইসলাম মাদরাসা",        abbr: "NIM", c1: "#b45309", c2: "#92400e", glow: "#fbbf24", url: "https://nurul-islam.edu.bd" },
  { name: "হাফেজিয়া মাদরাসা চট্টগ্রাম", abbr: "HMC", c1: "#be123c", c2: "#9f1239", glow: "#fb7185", url: "https://hafijia-ctg.edu.bd" },
  { name: "বিসমিল্লাহ পাবলিক স্কুল",    abbr: "BPS", c1: "#0369a1", c2: "#075985", glow: "#38bdf8", url: "https://bismillah-school.edu.bd" },
  { name: "তাকওয়া ইন্টারন্যাশনাল",      abbr: "TIS", c1: "#6d28d9", c2: "#5b21b6", glow: "#c084fc", url: "https://taqwa-intl.edu.bd" },
  { name: "মদিনাতুল উলুম মাদরাসা",      abbr: "MUM", c1: "#0e7490", c2: "#155e75", glow: "#22d3ee", url: "https://madinatul-ulum.edu.bd" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function useCounter(target: number, active: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 70));
    const id = setInterval(() => {
      cur = Math.min(cur + step, target);
      setV(cur);
      if (cur >= target) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [active, target]);
  return v;
}

function StatCard({ s, active }: { s: typeof STATS[0]; active: boolean }) {
  const n = useCounter(s.n, active);
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-default"
      style={{ boxShadow: `0 6px 28px ${s.sh}, 0 1px 4px rgba(0,0,0,0.08)` }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg,${s.c1},${s.c2})` }} />
      <div className="p-5 flex flex-col items-center gap-3 pt-6">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
          style={{ background: `linear-gradient(135deg,${s.c1},${s.c2})` }}>
          <s.icon size={22} className="text-white" />
        </div>
        <div className="text-center">
          <div className="text-3xl font-extrabold text-gray-900 tabular-nums leading-none">
            {n.toLocaleString("bn-BD")}{s.suffix}
          </div>
          <div className="text-[11px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">{s.label}</div>
        </div>
        <span className="text-[8px] font-bold bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full border border-amber-200">Dummy</span>
      </div>
    </div>
  );
}

/* ── Layout constants ──────────────────────────────────────
   ITEM_W  = slot width (reduced from 300 to fix gap)
   LOGO_S  = base logo size
   LOGO_L  = center logo size (~1.7×)
   OUTER_H = container height (enough for large logo + 3-line name)
   ─────────────────────────────────────────────────────── */
const ITEM_W  = 148;  // px — tighter gap
const LOGO_S  = 72;   // px — base
const LOGO_L  = 124;  // px — center (≈ 1.72×, visually "double" area)
const OUTER_H = 280;  // px

export default function TrustSection() {
  const secRef   = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [outerW,  setOuterW]  = useState(900);

  /* Random shuffle on mount (client only) */
  const [partners, setPartners] = useState(BASE);
  useEffect(() => { setPartners(shuffle(BASE)); }, []);

  /* 3 copies — seamless on any screen, enough for drag leeway */
  const DISPLAY = [...partners, ...partners, ...partners];
  const HALF    = ITEM_W * partners.length; // one set width

  /* Logo circle refs for size/glow update */
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Scroll position — pure JS, no CSS animation */
  const posRef    = useRef(0);        // 0..HALF
  const speedRef  = useRef(0.55);     // normal speed
  const rafRef    = useRef<number | null>(null);
  const dragRef   = useRef({ on: false, startX: 0, startPos: 0, moved: false });

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 }
    );
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(() => {
      if (outerRef.current) setOuterW(outerRef.current.offsetWidth);
    });
    if (outerRef.current) {
      setOuterW(outerRef.current.offsetWidth);
      ro.observe(outerRef.current);
    }
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const tick = () => {
      /* Advance position */
      if (!dragRef.current.on) {
        posRef.current += speedRef.current;
        if (posRef.current >= HALF) posRef.current -= HALF;
      }

      /* Move track */
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }

      /* Update each logo size + glow via getBoundingClientRect */
      const cX = outerRef.current ? outerRef.current.offsetWidth / 2 : outerW / 2;
      const outerLeft = outerRef.current?.getBoundingClientRect().left ?? 0;

      logoRefs.current.forEach((logo, i) => {
        if (!logo) return;
        const r   = logo.getBoundingClientRect();
        const cx  = r.left - outerLeft + r.width / 2;
        const dist  = Math.abs(cx - cX);
        const ratio = Math.max(0, 1 - dist / (cX * 0.72));
        const sz    = Math.round(LOGO_S + (LOGO_L - LOGO_S) * ratio);
        const fs    = Math.round(12 + 6 * ratio);

        if (logo.dataset.sz !== String(sz)) {
          logo.style.width     = `${sz}px`;
          logo.style.height    = `${sz}px`;
          logo.style.fontSize  = `${fs}px`;
          logo.dataset.sz      = String(sz);
        }

        const p = DISPLAY[i];
        if (ratio > 0.35) {
          logo.style.boxShadow = `0 0 0 4px ${p.glow}66, 0 0 28px 8px ${p.glow}55, 0 0 50px 14px ${p.glow}33`;
        } else {
          logo.style.boxShadow = "0 3px 12px rgba(0,0,0,0.20)";
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partners, outerW]);

  /* ── Interaction ─────────────────────────────────────── */
  /* Hover: slow down but never stop → no blink */
  const onEnter = useCallback(() => { speedRef.current = 0.18; }, []);
  const onLeave = useCallback(() => {
    speedRef.current = 0.55;
    dragRef.current.on = false;
  }, []);

  const onDown = useCallback((clientX: number) => {
    dragRef.current = { on: true, startX: clientX, startPos: posRef.current, moved: false };
  }, []);

  const onMove = useCallback((clientX: number) => {
    if (!dragRef.current.on) return;
    const dx = dragRef.current.startX - clientX; // positive = scroll right
    if (Math.abs(dx) > 3) dragRef.current.moved = true;
    let np = dragRef.current.startPos + dx;
    /* Wrap */
    np = ((np % HALF) + HALF) % HALF;
    posRef.current = np;
  }, [HALF]);

  const onUp = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (dragRef.current.moved) e.preventDefault();
    dragRef.current.on = false;
  }, []);

  return (
    <section className="py-16 bg-white border-b border-gray-100 pat-dots" ref={secRef}>
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />বিশ্বস্ততা
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">স্কুল ও মাদরাসার আধুনিক ব্যবস্থাপনার জন্য তৈরি</h2>
          <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">বাংলাদেশের শিক্ষা প্রতিষ্ঠানগুলোর জন্য বিশেষভাবে ডিজাইন করা</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-5">
          {STATS.map(s => <StatCard key={s.label} s={s} active={visible} />)}
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs px-4 py-2 rounded-full">
            ⚠️ <strong>Developer Note:</strong> উপরের সংখ্যা সম্পূর্ণ DUMMY। বাস্তব প্রতিষ্ঠান যোগ হলে ব্যাক-এন্ড API থেকে অটো কাউন্ট হবে।
          </div>
        </div>
      </div>

      {/* Partner scroll */}
      <div className="border-t border-gray-100 pt-10 pb-6">
        <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">আমাদের সাথে যুক্ত প্রতিষ্ঠানসমূহ</p>
        <p className="text-center text-[10px] text-amber-600 mb-8">⚠️ Dummy — বাস্তব প্রতিষ্ঠান নিবন্ধন হলে স্বয়ংক্রিয়ভাবে যুক্ত হবে।</p>

        <div
          ref={outerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ height: OUTER_H }}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          onMouseDown={e => onDown(e.clientX)}
          onMouseMove={e => onMove(e.clientX)}
          onMouseUp={onUp}
          onTouchStart={e => onDown(e.touches[0].clientX)}
          onTouchMove={e => { e.preventDefault(); onMove(e.touches[0].clientX); }}
          onTouchEnd={onUp}
        >
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right,white 50%,transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left,white 50%,transparent)" }} />

          {/* Track — pure JS translate */}
          <div
            ref={trackRef}
            className="absolute top-0 left-0 flex items-center h-full"
            style={{ willChange: "transform" }}
          >
            {DISPLAY.map((p, i) => (
              <div
                key={`${p.abbr}-${i}`}
                className="flex flex-col items-center justify-center gap-2 flex-shrink-0"
                style={{
                  width:  ITEM_W,
                  height: "100%",
                }}
              >
                {/* Clickable logo circle */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  onClick={e => { if (dragRef.current.moved) e.preventDefault(); }}
                  style={{ display: "block", textDecoration: "none", flexShrink: 0 }}
                >
                  <div
                    ref={el => { logoRefs.current[i] = el; }}
                    className="rounded-full flex items-center justify-center border-2 border-white text-white font-extrabold"
                    style={{
                      width:      LOGO_S,
                      height:     LOGO_S,
                      fontSize:   12,
                      fontWeight: 800,
                      background: `linear-gradient(135deg,${p.c1},${p.c2})`,
                      boxShadow:  "0 3px 12px rgba(0,0,0,0.20)",
                      /* Smooth transition on size change — no layout shift */
                      transition: "width 0.28s ease, height 0.28s ease, font-size 0.28s ease, box-shadow 0.28s ease",
                      userSelect: "none",
                    }}
                  >
                    {p.abbr}
                  </div>
                </a>

                {/* Name — always fully visible, never clipped */}
                <div
                  className="text-center font-semibold text-gray-800 pointer-events-none"
                  style={{
                    width:     ITEM_W - 12,
                    fontSize:  12,                    lineHeight: 1.4,
                    wordBreak: "break-word",
                    hyphens:   "auto",
                    /* No overflow:hidden — 3-line names show completely */
                  }}
                >
                  {p.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-3">
          ← ড্র্যাগ করে সরান · মাঝখানের প্রতিষ্ঠান বড় হবে →
        </p>
      </div>
    </section>
  );
}
