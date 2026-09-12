"use client";

import { Facebook, Youtube, Linkedin, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const productLinks = [
  { label: "Student Management", href: "#features" },
  { label: "Attendance", href: "#features" },
  { label: "Result & Exam", href: "#results" },
  { label: "Fees & Finance", href: "#finance" },
  { label: "Online Admission", href: "#admission" },
  { label: "Institution Website", href: "#website" },
];

const solutionLinks = [
  { label: "Schools", href: "#solutions" },
  { label: "Madrasas", href: "#solutions" },
  { label: "Coaching Centers", href: "#solutions" },
  { label: "Multi-campus", href: "#solutions" },
];

const resourceLinks = [
  { label: "Help Center", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "পরিচিতি", href: "#about" },
  { label: "যোগাযোগ", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Footer pattern — subtle Islamic star tile */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none'%3E%3Cpolygon points='40,6 47,27 68,27 51,40 58,62 40,48 22,62 29,40 12,27 33,27' stroke='%23334155' stroke-width='1' stroke-opacity='0.6' fill='none'/%3E%3Ccircle cx='40' cy='40' r='8' stroke='%23334155' stroke-width='0.8' stroke-opacity='0.4' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "80px 80px",
        opacity: 1,
      }} />
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background:"linear-gradient(90deg,transparent,rgba(59,130,246,0.4),transparent)"
      }}/>
      {/* Main footer */}
      <div className="container-xl py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">দি</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg tracking-tight">Dikkhaloy</div>
                <div className="text-gray-500 text-[9px] uppercase tracking-widest -mt-0.5">Education Platform</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
              স্কুল ও মাদরাসা ব্যবস্থাপনার সম্পূর্ণ ডিজিটাল সমাধান। Management থেকে Website—সবকিছু একসাথে।
            </p>

            {/* Also available as */}
            <div className="bg-gray-900 rounded-xl p-3 mb-5 border border-gray-800">
              <p className="text-xs text-gray-500 mb-1.5">মাদরাসার জন্য</p>
              <a href="https://madaris.com.bd" className="text-green-400 text-sm font-semibold hover:text-green-300 transition-colors flex items-center gap-1">
                madaris.com.bd <ArrowRight size={12} />
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={16} className="text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-500 hover:text-gray-200 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {solutionLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-500 hover:text-gray-200 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-500 hover:text-gray-200 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 mb-6">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-500 hover:text-gray-200 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="space-y-2">
              <a href="mailto:hello@dikkhaloy.com" className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors">
                <Mail size={12} /> hello@dikkhaloy.com
              </a>
              <a href="tel:+8801XXXXXXXXX" className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors">
                <Phone size={12} /> +880 1X-XXXX XXXX
              </a>
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <MapPin size={12} className="mt-0.5 flex-shrink-0" /> ঢাকা, বাংলাদেশ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60 relative z-10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © ২০২৬ Dikkhaloy. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="/sitemap.xml" className="hover:text-gray-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
