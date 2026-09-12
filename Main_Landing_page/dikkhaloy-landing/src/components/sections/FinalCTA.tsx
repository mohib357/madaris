"use client";

import { ArrowRight, Play, Check } from "lucide-react";

const points = [
  "কোনো credit card লাগবে না",
  "বিনামূল্যে শুরু করুন",
  "যেকোনো সময় বাতিল",
  "Onboarding support",
];

/*
 * দুটো animated SVG layer (background):
 *   OLD layer — খাতা, কলম, ক্যালকুলেটর (× বাতিল চিহ্ন সহ) — সাদা, subtle
 *   NEW layer — ল্যাপটপ, WiFi, chart, তীর → — cyan, subtle
 *
 * উভয় layer-এর opacity কম রাখা হয়েছে (0.15–0.20) এবং
 * একটি dark overlay যোগ করা হয়েছে যাতে text/button পরিষ্কার থাকে।
 *
 * NOTE: SVG-তে HTML comments invalid — সব comment বাদ দেওয়া হয়েছে।
 */

// OLD — পুরনো/manual: খাতা + × , কলম, ক্যালকুলেটর + ×
const OLD = `%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='200' viewBox='0 0 240 200'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.8'%3E%3Crect x='14' y='16' width='60' height='78' rx='4' stroke-opacity='0.60'/%3E%3Cline x1='22' y1='30' x2='66' y2='30' stroke-opacity='0.52'/%3E%3Cline x1='22' y1='42' x2='66' y2='42' stroke-opacity='0.52'/%3E%3Cline x1='22' y1='54' x2='66' y2='54' stroke-opacity='0.52'/%3E%3Cline x1='22' y1='66' x2='52' y2='66' stroke-opacity='0.44'/%3E%3Cline x1='22' y1='78' x2='58' y2='78' stroke-opacity='0.44'/%3E%3Cline x1='10' y1='12' x2='78' y2='98' stroke-width='4' stroke-opacity='0.85' stroke-dasharray='8 4'/%3E%3Cline x1='10' y1='98' x2='78' y2='12' stroke-width='4' stroke-opacity='0.75' stroke-dasharray='8 4'/%3E%3Cline x1='90' y1='110' x2='118' y2='80' stroke-width='2.8' stroke-linecap='round' stroke-opacity='0.58'/%3E%3Cpolygon points='88,115 95,110 88,122' fill='white' fill-opacity='0.50' stroke='none'/%3E%3Cline x1='115' y1='77' x2='123' y2='68' stroke-width='2' stroke-opacity='0.50'/%3E%3Crect x='14' y='112' width='46' height='72' rx='5' stroke-opacity='0.58'/%3E%3Crect x='20' y='119' width='34' height='18' rx='2' stroke-opacity='0.50'/%3E%3Crect x='20' y='144' width='10' height='10' rx='2' stroke-opacity='0.50'/%3E%3Crect x='33' y='144' width='10' height='10' rx='2' stroke-opacity='0.50'/%3E%3Crect x='46' y='144' width='10' height='10' rx='2' stroke-opacity='0.50'/%3E%3Crect x='20' y='157' width='10' height='10' rx='2' stroke-opacity='0.50'/%3E%3Crect x='33' y='157' width='10' height='10' rx='2' stroke-opacity='0.50'/%3E%3Crect x='46' y='157' width='10' height='10' rx='2' stroke-opacity='0.50'/%3E%3Cline x1='10' y1='108' x2='64' y2='188' stroke-width='4' stroke-opacity='0.82' stroke-dasharray='8 4'/%3E%3Cline x1='10' y1='188' x2='64' y2='108' stroke-width='4' stroke-opacity='0.72' stroke-dasharray='8 4'/%3E%3C/g%3E%3C/svg%3E`;

// NEW — ডিজিটাল: ল্যাপটপ + chart, WiFi, mobile, তীর
const NEW = `%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='200' viewBox='0 0 240 200'%3E%3Cg fill='none' stroke='%2367e8f9' stroke-width='2'%3E%3Crect x='130' y='20' width='96' height='64' rx='6' stroke-opacity='0.80'/%3E%3Crect x='136' y='26' width='84' height='48' rx='2' fill='%2367e8f9' fill-opacity='0.18' stroke='none'/%3E%3Crect x='146' y='84' width='76' height='8' rx='4' stroke-opacity='0.70'/%3E%3Crect x='143' y='54' width='13' height='16' rx='2' fill='%2367e8f9' fill-opacity='0.80' stroke='none'/%3E%3Crect x='159' y='42' width='13' height='28' rx='2' fill='%2386efac' fill-opacity='0.88' stroke='none'/%3E%3Crect x='175' y='47' width='13' height='23' rx='2' fill='%2367e8f9' fill-opacity='0.80' stroke='none'/%3E%3Crect x='191' y='35' width='13' height='35' rx='2' fill='%2386efac' fill-opacity='0.92' stroke='none'/%3E%3Cpath d='M136 128 Q178 108 220 128' stroke-width='3' fill='none' stroke-opacity='0.78'/%3E%3Cpath d='M144 142 Q178 126 212 142' stroke-width='2.5' fill='none' stroke-opacity='0.68'/%3E%3Ccircle cx='178' cy='158' r='7' fill='%2367e8f9' fill-opacity='0.88' stroke='none'/%3E%3Crect x='104' y='108' width='32' height='58' rx='6' stroke-opacity='0.76'/%3E%3Crect x='109' y='116' width='22' height='36' rx='2' fill='%2367e8f9' fill-opacity='0.18' stroke='none'/%3E%3Ccircle cx='120' cy='158' r='4' fill='%2367e8f9' fill-opacity='0.80' stroke='none'/%3E%3Cpath d='M78 100 Q100 100 116 100' stroke-width='4.5' stroke='%2386efac' fill='none'/%3E%3Cpolygon points='112,93 126,100 112,107' fill='%2386efac' stroke='none'/%3E%3C/g%3E%3C/svg%3E`;

export default function FinalCTA() {
  return (
    <section id="trial" className="relative py-24 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950" />

      {/* OLD layer — subtle white, opacity 0.16 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,${OLD}")`,
        backgroundSize: "240px 200px",
        opacity: 0.16,
        animation: "oldLayerDrift 24s ease-in-out infinite alternate",
      }} />

      {/* NEW layer — subtle cyan, opacity 0.18 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,${NEW}")`,
        backgroundSize: "240px 200px",
        opacity: 0.18,
        animation: "newLayerPulse 20s ease-in-out infinite alternate",
      }} />

      {/* Dark scrim — content পরিষ্কার রাখে, pattern-কে background-এ রাখে */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(10,20,55,0.52)" }} />

      {/* Glow blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,0.22),transparent 65%)" }} />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(34,197,94,0.16),transparent 65%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(103,232,249,0.55),transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(134,239,172,0.35),transparent)" }} />

      {/* ── Content ── */}
      <div className="container-xl relative z-10 text-center">
        <div className="text-4xl mb-4 opacity-50 select-none">✦</div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight text-balance">
          আপনার প্রতিষ্ঠানকে নিয়ে যান{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400">
            ডিজিটাল যুগে
          </span>
        </h2>

        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          একটি প্ল্যাটফর্ম। একটি পূর্ণাঙ্গ সমাধান।{" "}
          <strong className="text-white">আপনার প্রতিষ্ঠানের নিজস্ব পরিচয়।</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {points.map((p) => (
            <div key={p} className="flex items-center gap-2 text-blue-100 text-sm">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check size={11} className="text-white" strokeWidth={3} />
              </div>
              {p}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="/register"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-blue-700 font-bold px-8 py-4 rounded-2xl text-base transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5">
            বিনামূল্যে শুরু করুন <ArrowRight size={18} />
          </a>
          <a href="#demo"
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-semibold px-7 py-4 rounded-2xl text-base transition-all backdrop-blur-sm">
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Play size={14} className="ml-0.5" />
            </span>
            একটি Demo দেখুন
          </a>
        </div>

        <p className="text-blue-300/60 text-sm mt-8">
          ইতোমধ্যে ব্যবহার করছেন?{" "}
          <a href="/login" className="text-blue-200 hover:text-white underline transition-colors">
            Login করুন
          </a>
        </p>
      </div>
    </section>
  );
}
