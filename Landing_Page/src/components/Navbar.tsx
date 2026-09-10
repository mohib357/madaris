"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

interface NavbarProps {
  institutionName: string;
  logo: string;
}

const NAV_ITEMS = [
  { label: "হোম", href: "#home" },
  {
    label: "পরিচিতি",
    href: "#about",
    children: [
      { label: "আমাদের সম্পর্কে", href: "#about" },
      { label: "প্রতিষ্ঠানের ইতিহাস", href: "#about" },
      { label: "লক্ষ্য ও উদ্দেশ্য", href: "#about" },
      { label: "মুহতামিমের বাণী", href: "#leadership" },
    ],
  },
  {
    label: "বিভাগসমূহ",
    href: "#departments",
    children: [
      { label: "নূরানী বিভাগ", href: "#departments" },
      { label: "হিফজ বিভাগ", href: "#departments" },
      { label: "কিতাব বিভাগ", href: "#departments" },
      { label: "দাখিল বিভাগ", href: "#departments" },
    ],
  },
  { label: "নোটিশ", href: "#notice" },
  { label: "ফলাফল", href: "#result" },
  { label: "গ্যালারি", href: "#gallery" },
  { label: "যোগাযোগ", href: "#contact" },
];

export default function Navbar({ institutionName, logo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeHash, setActiveHash] = useState("#home");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Track active section
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.replace("#", "")).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveHash(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setActiveHash(href);
  };

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 bg-white transition-shadow duration-300 no-print",
        scrolled && "navbar-scrolled"
      )}
      role="banner"
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo + Name */}
        <a
          href="#home"
          className="flex items-center gap-3 shrink-0"
          aria-label={`${institutionName} — হোমপেইজে যান`}
          onClick={() => handleNavClick("#home")}
        >
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center shrink-0">
            <span
              className="text-xl font-bold"
              style={{ color: "var(--color-primary)" }}
              aria-hidden="true"
            >
              দ
            </span>
          </div>
          <span
            className="text-sm font-bold leading-tight max-w-[180px] hidden sm:block"
            style={{ color: "var(--color-primary)" }}
          >
            {institutionName}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-0.5"
          aria-label="প্রধান নেভিগেশন"
          ref={dropdownRef}
        >
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className={clsx(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      activeHash === item.href
                        ? "text-white"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    )}
                    style={
                      activeHash === item.href
                        ? { backgroundColor: "var(--color-primary)" }
                        : undefined
                    }
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={clsx(
                        "transition-transform duration-200",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 min-w-[180px] z-50"
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                          onClick={() => handleNavClick(child.href)}
                          role="menuitem"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={clsx(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors block",
                    activeHash === item.href
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                  style={
                    activeHash === item.href
                      ? { backgroundColor: "var(--color-primary)" }
                      : undefined
                  }
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="#admission"
            className="btn-primary text-xs px-4 py-2"
            onClick={() => handleNavClick("#admission")}
          >
            অনলাইন ভর্তি
          </a>
          <a
            href="#donation"
            className="btn-outline-colored text-xs px-4 py-2"
            onClick={() => handleNavClick("#donation")}
          >
            দান/অনুদান
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-white border-t border-slate-100 shadow-lg"
          role="navigation"
          aria-label="মোবাইল নেভিগেশন"
        >
          <div className="container-custom py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-6 flex flex-col gap-0.5">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 rounded-lg text-xs text-slate-500 hover:bg-slate-50 transition-colors"
                        onClick={() => handleNavClick(child.href)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-2 pt-2 border-t border-slate-100 mt-1">
              <a
                href="#admission"
                className="btn-primary flex-1 text-center text-xs py-2.5"
                onClick={() => handleNavClick("#admission")}
              >
                অনলাইন ভর্তি
              </a>
              <a
                href="#donation"
                className="btn-outline-colored flex-1 text-center text-xs py-2.5"
                onClick={() => handleNavClick("#donation")}
              >
                দান/অনুদান
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile bottom sticky nav */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-slate-200 flex no-print"
        role="navigation"
        aria-label="মোবাইল বটম নেভিগেশন"
      >
        {[
          { label: "হোম", href: "#home", icon: "🏠" },
          { label: "নোটিশ", href: "#notice", icon: "📢" },
          { label: "ভর্তি", href: "#admission", icon: "🎓" },
          { label: "ফলাফল", href: "#result", icon: "📊" },
          { label: "আরো", href: "#contact", icon: "☰" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex-1 flex flex-col items-center py-2 text-xs text-slate-500 hover:text-slate-800 transition-colors"
            style={activeHash === item.href ? { color: "var(--color-primary)" } : undefined}
            onClick={() => handleNavClick(item.href)}
          >
            <span className="text-base leading-none mb-0.5">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
