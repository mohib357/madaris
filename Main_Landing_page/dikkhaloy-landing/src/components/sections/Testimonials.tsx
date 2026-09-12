"use client";
/**
 * Testimonials — প্রতিক্রিয়া
 *
 * Pure JS RAF scroll — no CSS animation.
 * Prevents blinking on hover.
 * Drag works because we own the position state.
 *
 * Row 1: LTR (track moves left, cards appear right→left)
 * Row 2: RTL (track moves right, cards appear left→right) — zigzag
 *
 * Hover: slow down (no stop → no blink)
 * Drag: direct pos update
 * Bottom: count + "সব দেখুন" modal
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { Star, Quote, X, ChevronRight } from "lucide-react";

const ALL = [
  { name:"মো. আবদুর রহমান",    role:"প্রধান শিক্ষক",            inst:"ঢাকামডেল উচ্চ বিদ্যালয়",   text:"আগে বিভিন্ন খাতা ও Excel-এ তথ্য রাখতে হতো। এখন শিক্ষার্থী, ফি, ফলাফল ও উপস্থিতি একই জায়গা থেকে পরিচালনা করছি।", init:"র",  c1:"#1e3a8a",c2:"#4f46e5",glow:"#3b82f6" },
  { name:"হাফেজ মো. ইউসুফ",    role:"মুহতামিম",                  inst:"দারুল উলুম মাদরাসা",         text:"Attendance এবং result management অনেক সহজ হয়েছে। মাদরাসার জন্য আলাদা feature থাকায় কাজ অনেক সুবিধাজনক।",       init:"ই",  c1:"#052e16",c2:"#15803d",glow:"#22c55e" },
  { name:"নাজমা বেগম",          role:"অভিভাবক",                   inst:"ছেলে — ৮ম শ্রেণি",           text:"আমার সন্তানের ফলাফল ও উপস্থিতি এখন ঘরে বসেই দেখতে পারি। আগে স্কুলে যেতে হতো, এখন সময় বাঁচছে।",               init:"ন",  c1:"#3b0764",c2:"#6d28d9",glow:"#a855f7" },
  { name:"মাওলানা আব্দুল করিম", role:"মুদির",                     inst:"মারকাযুল কুরআন মাদরাসা",   text:"হিফজ বিভাগের ছাত্রদের তথ্য ও লিল্লাহ ফান্ড ম্যানেজ করা এখন অনেক সহজ। আলহামদুলিল্লাহ।",                       init:"ক",  c1:"#0f766e",c2:"#0d9488",glow:"#2dd4bf" },
  { name:"রহিমা আক্তার",        role:"সহকারী প্রধান শিক্ষিকা",    inst:"আল-আমিন একাডেমি",           text:"অনলাইন ভর্তি ফর্ম চালু হওয়ার পর এই বছর আবেদনের সংখ্যা দ্বিগুণ হয়েছে।",                                       init:"রহ", c1:"#7f1d1d",c2:"#b91c1c",glow:"#f87171" },
  { name:"মো. সাইফুল ইসলাম",   role:"হিসাবরক্ষক",               inst:"ইসলামিক ফাউন্ডেশন স্কুল", text:"Fee collection ও monthly report অটোমেটিক হওয়ায় হাতে লেখার ঝামেলা পুরোপুরি শেষ।",                               init:"স",  c1:"#78350f",c2:"#b45309",glow:"#fbbf24" },
  { name:"ফারহানা খানম",        role:"অভিভাবক",                   inst:"মেয়ে — ৫ম শ্রেণি",          text:"Guardian portal-এ SMS আসলে বুঝতে পারি আমার মেয়ে স্কুলে পৌঁছেছে কিনা। মনে শান্তি পাই।",                       init:"ফ",  c1:"#0c4a6e",c2:"#0369a1",glow:"#38bdf8" },
  { name:"শেখ মুহাম্মদ তাহির",  role:"উপাধ্যক্ষ",                inst:"নূরুল ইসলাম মাদরাসা",       text:"Website এর custom domain সুবিধা দারুণ — এখন আমাদের নিজস্ব ঠিকানা আছে।",                                           init:"তা", c1:"#1e1b4b",c2:"#3730a3",glow:"#818cf8" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CARD_W = 312;
const GAP    = 20;
const SLOT   = CARD_W + GAP;

function Card({ t }: { t: typeof ALL[0] }) {
  return (
    <div
      className="flex-shrink-0 bg-white rounded-2xl p-5 relative overflow-hidden group"
      style={{
        width:     CARD_W,
        border:    `2px solid ${t.glow}28`,
        boxShadow: `0 4px 20px ${t.glow}18`,
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform  = "translateY(-4px)";
        el.style.border     = `2px solid ${t.glow}88`;
        el.style.boxShadow  = `0 12px 40px ${t.glow}44, 0 0 0 2px ${t.glow}33`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform  = "";
        el.style.border     = `2px solid ${t.glow}28`;
        el.style.boxShadow  = `0 4px 20px ${t.glow}18`;
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{ background:`linear-gradient(90deg,${t.c1},${t.c2})` }} />
      <Quote size={22} className="absolute top-4 right-4 opacity-[0.07]" style={{ color:t.glow }} />
      <div className="flex gap-0.5 mb-3 mt-0.5">
        {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 relative z-10">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-md"
          style={{ background:`linear-gradient(135deg,${t.c1},${t.c2})` }}>{t.init}</div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
          <div className="text-gray-500 text-xs">{t.role} · {t.inst}</div>
        </div>
      </div>
    </div>
  );
}

/*
 * ScrollRow — pure JS RAF
 *
 * dir "ltr": pos increases → track moves left → cards slide left (appear LTR)
 * dir "rtl": pos decreases → track moves right → cards slide right (appear RTL)
 *
 * 3 copies of items → one-set = SLOT × items.length
 * wrap: pos ≥ one-set → pos -= one-set  (LTR)
 *       pos ≤ 0       → pos += one-set  (RTL)
 *
 * Hover: speed 0.45 → 0.16 (no stop → no blink)
 * Drag:  direct pos += drag-delta
 */
function ScrollRow({
  items, dir, bgL, bgR,
}: {
  items: typeof ALL;
  dir:   "ltr" | "rtl";
  bgL:   string;
  bgR:   string;
}) {
  const COPIES  = 3;
  const display = Array.from({ length: COPIES }, () => items).flat();
  const oneSet  = SLOT * items.length;

  const trackRef  = useRef<HTMLDivElement>(null);
  /* Start position: middle copy so we can drag both ways without hitting edge */
  const posRef    = useRef(dir === "ltr" ? oneSet : oneSet);
  const speedRef  = useRef(0.45);
  const rafRef    = useRef<number | null>(null);
  const dragRef   = useRef({ on: false, startX: 0, startPos: 0, moved: false });

  useEffect(() => {
    const tick = () => {
      if (!dragRef.current.on) {
        if (dir === "ltr") {
          posRef.current += speedRef.current;
          /* wrap within middle copy range to avoid jumps */
          if (posRef.current >= oneSet * 2) posRef.current -= oneSet;
        } else {
          posRef.current -= speedRef.current;
          if (posRef.current <= 0) posRef.current += oneSet;
        }
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [dir, oneSet]);

  const onEnter = useCallback(() => { speedRef.current = 0.16; }, []);
  const onLeave = useCallback(() => {
    speedRef.current = 0.45;
    dragRef.current.on = false;
  }, []);

  const onDown = useCallback((clientX: number) => {
    dragRef.current = { on: true, startX: clientX, startPos: posRef.current, moved: false };
  }, []);

  const onMov = useCallback((clientX: number) => {
    if (!dragRef.current.on) return;
    const dx = dragRef.current.startX - clientX; // positive = scroll right (content moves left)
    if (Math.abs(dx) > 3) dragRef.current.moved = true;
    let np = dragRef.current.startPos + dx;
    /* Clamp to valid range */
    if (dir === "ltr") {
      if (np < oneSet)       np += oneSet;
      if (np >= oneSet * 2)  np -= oneSet;
    } else {
      if (np < 0)            np += oneSet;
      if (np >= oneSet)      np -= oneSet;
    }
    posRef.current = np;
  }, [dir, oneSet]);

  const onUp = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (dragRef.current.moved) e.preventDefault();
    dragRef.current.on = false;
  }, []);

  return (
    <div
      className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none py-2"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={e => onDown(e.clientX)}
      onMouseMove={e => onMov(e.clientX)}
      onMouseUp={onUp}
      onTouchStart={e => onDown(e.touches[0].clientX)}
      onTouchMove={e => { e.preventDefault(); onMov(e.touches[0].clientX); }}
      onTouchEnd={onUp}
    >
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background:`linear-gradient(to right,${bgL},transparent)` }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background:`linear-gradient(to left,${bgR},transparent)` }} />

      <div
        ref={trackRef}
        className="flex w-max"
        style={{ gap: GAP, paddingLeft: GAP, willChange: "transform" }}
      >
        {display.map((t, i) => <Card key={`${t.name}-${i}`} t={t} />)}
      </div>
    </div>
  );
}

/* All reviews modal */
function AllModal({ items, onClose }: { items: typeof ALL; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-3xl">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">সব প্রতিক্রিয়া</h3>
            <p className="text-gray-500 text-sm">মোট {items.length}টি রিভিউ</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center">
            <X size={18} className="text-gray-600" />
          </button>
        </div>
        <div className="p-6 grid sm:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 relative overflow-hidden"
              style={{ border:`2px solid ${t.glow}33`, boxShadow:`0 4px 20px ${t.glow}15` }}>
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background:`linear-gradient(90deg,${t.c1},${t.c2})` }} />
              <div className="flex gap-0.5 mb-2 mt-1">
                {[1,2,3,4,5].map(j => <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md"
                  style={{ background:`linear-gradient(135deg,${t.c1},${t.c2})` }}>{t.init}</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role} · {t.inst}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 pb-6 text-center">
          <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 inline-block px-4 py-2 rounded-full">
            📝 DUMMY — বাস্তব customer testimonial সংগ্রহের পর আপডেট হবে।
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [row1, setRow1] = useState(ALL);
  const [row2, setRow2] = useState(ALL);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setRow1(shuffle(ALL));
    setRow2(shuffle(ALL));
  }, []);

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#f0fdf4 0%,#eff6ff 50%,#fdf4ff 100%)" }}>
      <div className="absolute inset-0 pat-dots" />
      <div className="absolute inset-0 pat-arcs" style={{ opacity: 0.8 }} />

      <div className="container-xl relative z-10">
        <div className="text-center mb-12">
          <span className="tag bg-yellow-100 text-yellow-700 mb-4">প্রতিক্রিয়া</span>
          <h2 className="section-heading">তারা যা বলছেন</h2>
          <p className="section-subheading">Dikkhaloy ব্যবহারকারীদের অভিজ্ঞতা</p>
        </div>
      </div>

      {/* Row 1 — LTR */}
      <ScrollRow items={row1} dir="ltr" bgL="#f0fdf4" bgR="#eff6ff" />
      <div className="h-4" />
      {/* Row 2 — RTL */}
      <ScrollRow items={row2} dir="rtl" bgL="#eff6ff" bgR="#fdf4ff" />

      <div className="container-xl relative z-10 mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 bg-white border border-yellow-200 rounded-2xl px-5 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-gray-700 text-sm font-semibold">
              মোট <strong className="text-blue-600">{ALL.length}</strong>টি রিভিউ
            </span>
          </div>
          <button onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-2xl transition-all shadow-md hover:shadow-lg text-sm">
            সব রিভিউ দেখুন <ChevronRight size={16} />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-4">← ড্র্যাগ করে সরান · hover = ধীর হবে →</p>
      </div>

      {showAll && <AllModal items={ALL} onClose={() => setShowAll(false)} />}
    </section>
  );
}
