import { Facebook, Youtube, MessageCircle, ExternalLink } from "lucide-react";
import type { InstitutionConfig } from "@/types/institution";

interface Props {
  institution: InstitutionConfig;
}

const QUICK_LINKS = [
  { label: "হোম", href: "#home" },
  { label: "পরিচিতি", href: "#about" },
  { label: "বিভাগসমূহ", href: "#departments" },
  { label: "ভর্তি", href: "#admission" },
  { label: "নোটিশ", href: "#notice" },
  { label: "ফলাফল", href: "#result" },
  { label: "গ্যালারি", href: "#gallery" },
  { label: "যোগাযোগ", href: "#contact" },
];

const STUDENT_LINKS = [
  { label: "Student Portal", href: "#" },
  { label: "ফলাফল", href: "#result" },
  { label: "ক্লাস রুটিন", href: "#downloads" },
  { label: "ফি পরিশোধ", href: "#" },
];

const IMPORTANT_LINKS = [
  { label: "ডাউনলোড কেন্দ্র", href: "#downloads" },
  { label: "একাডেমিক ক্যালেন্ডার", href: "#downloads" },
  { label: "ভর্তি তথ্য", href: "#admission" },
  { label: "দান/অনুদান", href: "#donation" },
];

export default function Footer({ institution }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-slate-900 text-slate-300 no-print"
      aria-label="ফুটার"
    >
      {/* Main footer */}
      <div className="container-custom py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — Institution */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center shrink-0">
              <span
                className="text-xl font-bold"
                style={{ color: "var(--color-primary-light)" }}
                aria-hidden="true"
              >
                দ
              </span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">
                {institution.name}
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed mb-4">
            {institution.seoDescription}
          </p>

          <div className="space-y-1.5 text-xs text-slate-400">
            <p>📍 {institution.contact.address}</p>
            <p>
              📞{" "}
              <a
                href={`tel:${institution.contact.phone[0]}`}
                className="hover:text-white transition-colors"
              >
                {institution.contact.phone[0]}
              </a>
            </p>
            <p>
              ✉️{" "}
              <a
                href={`mailto:${institution.contact.email}`}
                className="hover:text-white transition-colors"
              >
                {institution.contact.email}
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-2 mt-5">
            {institution.social.facebook && (
              <a
                href={institution.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} aria-hidden="true" />
              </a>
            )}
            {institution.social.youtube && (
              <a
                href={institution.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={14} aria-hidden="true" />
              </a>
            )}
            {institution.social.whatsapp && (
              <a
                href={institution.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-white/10">
            দ্রুত লিঙ্ক
          </h3>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Student */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-white/10">
            শিক্ষার্থী
          </h3>
          <ul className="space-y-2">
            {STUDENT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="text-white font-semibold text-sm mt-6 mb-4 pb-2 border-b border-white/10">
            গুরুত্বপূর্ণ
          </h3>
          <ul className="space-y-2">
            {IMPORTANT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — CTA */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-white/10">
            ভর্তি ও অনুদান
          </h3>
          <p className="text-slate-400 text-xs mb-4 leading-relaxed">
            ২০২৬ শিক্ষাবর্ষে ভর্তি চলছে। আসন সীমিত।
          </p>
          <a
            href="#admission"
            className="btn-primary text-xs px-4 py-2.5 mb-3 w-full justify-center"
          >
            অনলাইনে ভর্তি হন →
          </a>
          <a
            href="#donation"
            className="flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors mt-3"
          >
            দান/অনুদান করুন →
          </a>

          <div className="mt-6 p-3 rounded-xl bg-white/5 text-xs text-slate-400 leading-relaxed">
            <strong className="text-white">অফিস সময়:</strong>
            <br />
            {institution.contact.officeHours}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            © {year} {institution.name}। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <a
            href="https://dikkhaloy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="Dikkhaloy — Powered by Dikkhaloy"
          >
            Powered by{" "}
            <span style={{ color: "var(--color-primary-light)" }} className="font-semibold">
              Dikkhaloy
            </span>
            <ExternalLink size={10} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
