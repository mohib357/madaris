import { Facebook, Youtube, MessageCircle, ExternalLink, Phone, Mail, MapPin, Clock } from "lucide-react";
import type { InstitutionConfig } from "@/types/institution";

interface Props {
  institution: InstitutionConfig;
}

const QUICK_LINKS = [
  { label: "হোম", href: "#home" },
  { label: "পরিচিতি", href: "#about" },
  { label: "বিভাগসমূহ", href: "#departments" },
  { label: "শিক্ষকবৃন্দ", href: "#teachers" },
  { label: "ভর্তি", href: "#admission" },
  { label: "নোটিশ", href: "#notice" },
  { label: "ফলাফল", href: "#result" },
  { label: "গ্যালারি", href: "#gallery" },
  { label: "যোগাযোগ", href: "#contact" },
];

const STUDENT_LINKS = [
  { label: "ফলাফল দেখুন", href: "#result" },
  { label: "ক্লাস রুটিন", href: "#downloads" },
  { label: "নোটিশ বোর্ড", href: "#notice" },
  { label: "ডাউনলোড কেন্দ্র", href: "#downloads" },
  { label: "ভর্তি তথ্য", href: "#admission" },
  { label: "দান/অনুদান", href: "#donation" },
];

export default function Footer({ institution }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print" aria-label="ফুটার">

      {/* CTA Banner */}
      <div
        className="py-12 px-4"
        style={{ background: "linear-gradient(135deg, var(--color-gold) 0%, #b7860c 100%)" }}
      >
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-extrabold text-xl md:text-2xl mb-1">
              ২০২৬ শিক্ষাবর্ষে ভর্তি চলছে
            </h3>
            <p className="text-white/80 text-sm">আসন সীমিত — এখনই আবেদন করুন</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#admission"
              className="px-7 py-3 rounded-xl font-bold text-sm bg-white transition-all hover:-translate-y-0.5 shadow-lg"
              style={{ color: "var(--color-primary-dark)" }}
            >
              অনলাইনে ভর্তি হন →
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-xl font-bold text-sm border-2 border-white text-white hover:bg-white/10 transition-all"
            >
              যোগাযোগ করুন
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-slate-900">
        <div className="container-custom py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Institution */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))" }}
              >
                <span className="text-white text-xl font-extrabold">ম</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">
                  {institution.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-gold)" }}>
                  প্রতিষ্ঠিত {institution.establishedYear}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              {institution.tagline}
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={12} className="shrink-0 mt-0.5" style={{ color: "var(--color-gold)" }} />
                <span>{institution.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="shrink-0" style={{ color: "var(--color-gold)" }} />
                <a href={`tel:${institution.contact.phone[0]}`} className="hover:text-white transition-colors">
                  {institution.contact.phone[0]}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} className="shrink-0" style={{ color: "var(--color-gold)" }} />
                <a href={`mailto:${institution.contact.email}`} className="hover:text-white transition-colors">
                  {institution.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={12} className="shrink-0" style={{ color: "var(--color-gold)" }} />
                <span>{institution.contact.officeHours}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2 mt-5">
              {institution.social.facebook && (
                <a href={institution.social.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  aria-label="Facebook"
                >
                  <Facebook size={15} className="text-slate-300" />
                </a>
              )}
              {institution.social.youtube && (
                <a href={institution.social.youtube} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  aria-label="YouTube"
                >
                  <Youtube size={15} className="text-slate-300" />
                </a>
              )}
              {institution.social.whatsapp && (
                <a href={institution.social.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={15} className="text-slate-300" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full shrink-0" style={{ backgroundColor: "var(--color-gold)" }} />
              দ্রুত লিঙ্ক
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full shrink-0 group-hover:scale-150 transition-transform" style={{ backgroundColor: "var(--color-gold)" }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Student Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full shrink-0" style={{ backgroundColor: "var(--color-gold)" }} />
              শিক্ষার্থী ও অভিভাবক
            </h3>
            <ul className="space-y-2.5">
              {STUDENT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full shrink-0 group-hover:scale-150 transition-transform" style={{ backgroundColor: "var(--color-gold)" }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter / App */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full shrink-0" style={{ backgroundColor: "var(--color-gold)" }} />
              সর্বশেষ আপডেট পান
            </h3>
            <p className="text-slate-400 text-xs mb-4 leading-relaxed">
              নোটিশ, ফলাফল ও ভর্তির সর্বশেষ তথ্য সরাসরি পেতে মোবাইল নম্বর দিন।
            </p>
            <div className="flex gap-2">
              <input
                type="tel"
                placeholder="মোবাইল নম্বর"
                className="flex-1 bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30"
              />
              <button
                className="px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))", color: "#fff" }}
              >
                পাঠান
              </button>
            </div>

            {/* Arabic tagline */}
            <div
              className="mt-6 p-4 rounded-xl border border-white/10"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <p className="arabic-text text-white/60 text-sm text-center mb-1">
                طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
              </p>
              <p className="text-center text-xs text-slate-500">
                জ্ঞান অন্বেষণ প্রতিটি মুসলমানের উপর ফরজ
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
            <p>© {year} {institution.name}। সর্বস্বত্ব সংরক্ষিত।</p>
            <a
              href="https://dikkhaloy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              Powered by{" "}
              <span style={{ color: "var(--color-primary-light)" }} className="font-bold">
                Dikkhaloy
              </span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
