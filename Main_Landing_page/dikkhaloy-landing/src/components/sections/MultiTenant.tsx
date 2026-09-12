"use client";

import { Shield, Database, Palette, Globe2 } from "lucide-react";

const benefits = [
  { icon: Database, title: "আলাদা Data",     desc: "প্রতিটি প্রতিষ্ঠানের data সম্পূর্ণ আলাদা। অন্য কেউ দেখতে পাবে না।",                       glow:"#2563eb", from:"#1e3a8a",to:"#1d4ed8",  textCol:"text-blue-200"   },
  { icon: Palette,  title: "আলাদা Branding",  desc: "নিজস্ব logo, color ও theme। Dikkhaloy branding শুধু 'Powered by' হিসেবে।",                glow:"#7c3aed", from:"#3b0764",to:"#6d28d9",  textCol:"text-purple-200" },
  { icon: Globe2,   title: "আলাদা Website",   desc: "নিজস্ব domain বা subdomain। Visitor-এর কাছে সম্পূর্ণ নিজস্ব পরিচয়।",                     glow:"#16a34a", from:"#052e16",to:"#15803d",  textCol:"text-green-200"  },
  { icon: Shield,   title: "আলাদা Security",  desc: "Role-based access control। শুধুমাত্র অনুমোদিত ব্যক্তি data দেখতে পারবেন।",               glow:"#ea580c", from:"#431407",to:"#c2410c",  textCol:"text-orange-200" },
];

const institutions = [
  { name: "Institution A", sub: "a.dikkhaloy.com",  from:"#1e40af",to:"#1d4ed8",  glow: "#3b82f6" },
  { name: "Institution B", sub: "b.dikkhaloy.com",  from:"#15803d",to:"#16a34a",  glow: "#22c55e" },
  { name: "Institution C", sub: "yourdomain.com",   from:"#5b21b6",to:"#6d28d9",  glow: "#a855f7" },
];

export default function MultiTenant() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 pat-hex" />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-blue-100 text-blue-700 mb-4">Multi-Tenant Platform</span>
          <h2 className="section-heading">এক প্ল্যাটফর্ম, <span className="gradient-text">হাজারো প্রতিষ্ঠান</span></h2>
          <p className="section-subheading">System একই, কিন্তু প্রতিটি প্রতিষ্ঠানের Data, Branding ও Website আলাদা।</p>
        </div>

        <div className="max-w-4xl mx-auto mb-14">
          <div className="flex justify-center mb-8">
            <div className="rounded-3xl px-12 py-6 text-white text-center"
              style={{ background:"linear-gradient(135deg,#1e3a8a,#4f46e5)", boxShadow:"0 12px 48px rgba(37,99,235,0.45)" }}>
              <div className="text-2xl font-black mb-1 tracking-wide">DIKKHALOY</div>
              <div className="text-blue-200 text-sm">Central SaaS Platform</div>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-lg h-12">
              <div className="absolute left-1/2 top-0 w-px h-full bg-gray-200" />
              <div className="absolute left-1/6 top-1/2 right-1/6 h-px bg-gray-200" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {institutions.map((inst) => (
              <div key={inst.name} className="rotate-border-cw group hover:-translate-y-1 transition-all duration-300"
                style={{ "--glow-col": inst.glow } as React.CSSProperties}>
                <div className="rb-inner p-5 text-center rounded-[14px] bg-white"
                  style={{ boxShadow:`0 8px 32px ${inst.glow}22` }}>
                  <div className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background:`linear-gradient(135deg,${inst.from},${inst.to})`, boxShadow:`0 6px 24px ${inst.glow}55` }}>
                    <Globe2 size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{inst.name}</h4>
                  <code className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{inst.sub}</code>
                  <div className="mt-3 space-y-1 text-left">
                    {["Own Website ✓","Own Data ✓","Own Branding ✓"].map(item => (
                      <div key={item} className="text-xs text-gray-500 flex items-center gap-1.5">
                        <div className="w-3 h-3 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        </div>{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits — dark rich colored cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="relative rounded-2xl p-5 overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ background:`linear-gradient(135deg,${b.from},${b.to})`, boxShadow:`0 6px 28px ${b.glow}44` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 44px ${b.glow}77, 0 0 0 2px ${b.glow}66`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 28px ${b.glow}44`; }}
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-md">
                <b.icon size={20} className="text-white" />
              </div>
              <h4 className="font-semibold text-white mb-1.5">{b.title}</h4>
              <p className={`${b.textCol} text-sm leading-relaxed`} style={{opacity:0.85}}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
