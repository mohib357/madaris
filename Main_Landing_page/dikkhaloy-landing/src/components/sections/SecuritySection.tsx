"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Lock, Users2, ClipboardCheck, KeyRound, Database } from "lucide-react";

const features = [
  { icon:Users2,        title:"Role-based Access",     desc:"Admin, Teacher, Student, Guardian আলাদা permission। কেউ অনুমতি ছাড়া কিছু দেখতে পাবে না।", glow:"#60a5fa" },
  { icon:Database,      title:"Tenant Data Isolation", desc:"প্রতিটি প্রতিষ্ঠানের data সম্পূর্ণ আলাদা। অন্য প্রতিষ্ঠান কোনোভাবেই access পাবে না।",    glow:"#c084fc" },
  { icon:Lock,          title:"Secure Authentication", desc:"Secure login system। Password hashing ও session management।",                                  glow:"#67e8f9" },
  { icon:Shield,        title:"Regular Backup",        desc:"নিয়মিত data backup। আপনার তথ্য সুরক্ষিত।",                                                    glow:"#4ade80" },
  { icon:ClipboardCheck,title:"Audit Logs",            desc:"কে কখন কী করেছে তার সম্পূর্ণ রেকর্ড। Accountability নিশ্চিত।",                               glow:"#fde047" },
  { icon:KeyRound,      title:"Permission Management", desc:"Granular permission control। কোন role কোন module access করতে পারবে তা আপনি ঠিক করুন।",       glow:"#fb923c" },
];

function SecCard({ f, delay }: { f: typeof features[0]; delay: number }) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setShow(true), delay); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref}
      className="relative rounded-2xl p-5 border group hover:-translate-y-1 transition-all duration-300 cursor-default"
      style={{
        background:"rgba(255,255,255,0.05)",
        borderColor: `${f.glow}35`,
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(24px)",
        transition:`opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, box-shadow 0.3s`,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px 3px ${f.glow}44, inset 0 0 24px 0 ${f.glow}10`;
        (e.currentTarget as HTMLElement).style.borderColor = `${f.glow}77`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = `${f.glow}35`;
      }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
        style={{ background:`${f.glow}18`, border:`1px solid ${f.glow}44` }}>
        <f.icon size={22} style={{ color:f.glow }} />
      </div>
      <h3 className="font-semibold text-white mb-2">{f.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
    </div>
  );
}

export default function SecuritySection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,#0f172a 0%,#1e1b4b 40%,#0f172a 100%)" }} />
      <div className="absolute inset-0 pat-moroccan" />
      <div className="absolute inset-0 pat-islamic" style={{ opacity:0.15 }} />
      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px pointer-events-none z-20"
        style={{ background:"linear-gradient(90deg,transparent,rgba(96,165,250,0.6),transparent)", animation:"securityScan 5s ease-in-out infinite" }} />
      {/* glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(59,130,246,0.15),transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background:"radial-gradient(circle,rgba(139,92,246,0.12),transparent 70%)" }} />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 border text-blue-300 px-5 py-2.5 rounded-full text-sm font-semibold mb-5"
            style={{ background:"rgba(37,99,235,0.15)", borderColor:"rgba(59,130,246,0.4)" }}>
            <Shield size={16} className="text-blue-400" />
            Security &amp; Privacy
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            আপনার প্রতিষ্ঠানের তথ্য,{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage:"linear-gradient(90deg,#60a5fa,#67e8f9)" }}>
              আপনার নিয়ন্ত্রণে
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">আপনার প্রতিষ্ঠান ও শিক্ষার্থীদের তথ্য সুরক্ষিত রাখতে আমরা প্রতিশ্রুতিবদ্ধ।</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["🔒 SSL Encrypted","🛡️ Data Isolated","🔑 Role-based Access","💾 Regular Backup"].map(b => (
              <span key={b} className="text-xs border px-3 py-1.5 rounded-full font-medium" style={{ background:"rgba(255,255,255,0.06)", borderColor:"rgba(255,255,255,0.12)", color:"#cbd5e1" }}>{b}</span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f,i) => <SecCard key={f.title} f={f} delay={i*80} />)}
        </div>

        <div className="mt-10 rounded-2xl p-5 text-center" style={{ background:"rgba(59,130,246,0.07)", border:"1px solid rgba(59,130,246,0.2)" }}>
          <p className="text-gray-400 text-sm">আমরা বিশ্বাস করি সততায়। কোনো security claim বাস্তবে নিশ্চিত না হলে আমরা marketing-এ উল্লেখ করি না।</p>
        </div>
      </div>
    </section>
  );
}
