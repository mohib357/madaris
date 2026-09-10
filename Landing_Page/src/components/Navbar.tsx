"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, GraduationCap, Heart } from "lucide-react";
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
      { label: "মুহতামিমের বাণী", href: "#leadership" },
      { label: "লক্ষ্য ও উদ্দেশ্য", href: "#about" },
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
  { label: "শিক্ষকমণ্ডলী", href: "#teachers" },
  { label: "নোটিশ", href: "#notice" },
  { label: "ফলাফল", href: "#result" },
  { label: "গ্যালারি", href: "#gallery" },
  { label: "যোগাযোগ", href: "#contact" },
];

export default function Navbar({ institutionName }: NavbarProps) {
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

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
        "sticky top-0 z-50 transition-all duration-300 no-print",
        scrolled
          ? "bg-white shadow-lg border-b border-slate-100"
          : "bg-white border-b border-slate-200"
      )}
      role="banner"
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, var(--color-primary) 0%, var(--color-gold) 50%, var(--color-primary) 100%)" }} />

      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo + Name */}
        <a
          href="#home"
          className="flex items-center gap-3 shrink-0"
          aria-label={`${institutionName} — হোমপেইজে যান`}
          onClick={() => handleNavClick("#home")}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md"
            style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)" }}
          >
            <span className="text-white text-base font-extrabold" aria-hidden="true">ম</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight" style={{ color: "var(--color-primary)" }}>
              {institutionName}
            </p>
            <p className="text-xs" style={{ color: "var(--color-gold)" }}>
              প্রতিষ্ঠিত: ১৯৯৮
            </p>
          </div>
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
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      activeHash === item.href
                        ? "text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-blue-50"
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
                      size={13}
                      className={clsx(
                        "transition-transform duration-200",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1.5 bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[190px] z-50 overflow-hidden"
                      role="menu"
                    >
                      <div className="h-1 w-full mb-1" style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-gold))" }} />
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 transition-colors"
                          style={{ color: "var(--color-text)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                          onClick={() => handleNavClick(child.href)}
                          role="menuitem"
                        >
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-gold)" }} />
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
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 block",
                    activeHash === item.href
                      ? "text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-blue-50"
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
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: "var(--color-primary)" }}
            onClick={() => handleNavClick("#admission")}
          >
            <GraduationCap size={14} />
            ভর্তি আবেদন
          </a>
          <a
            href="#donation"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold border-2 transition-all hover:-translate-y-0.5"
            style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
            onClick={() => handleNavClick("#donation")}
          >
            <Heart size={13} />
            দান/অনুদান
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--color-primary)" }}
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
          className="lg:hidden bg-white border-t border-slate-100 shadow-xl"
          role="navigation"
          aria-label="মোবাইল নেভিগেশন"
        >
          <div className="container-custom py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{ color: activeHash === item.href ? "var(--color-primary-foreground)" : "var(--color-text)", backgroundColor: activeHash === item.href ? "var(--color-primary)" : "transparent" }}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-5 flex flex-col gap-0.5 mt-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs transition-colors"
                        style={{ color: "var(--color-text-muted)" }}
                        onClick={() => handleNavClick(child.href)}
                      >
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--color-gold)" }} />
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-2 pt-3 border-t border-slate-100 mt-2">
              <a href="#admission" className="flex-1 text-center text-xs py-3 rounded-xl font-bold text-white transition-all" style={{ backgroundColor: "var(--color-primary)" }} onClick={() => handleNavClick("#admission")}>
                ভর্তি আবেদন
              </a>
              <a href="#donation" className="flex-1 text-center text-xs py-3 rounded-xl font-bold border-2 transition-all" style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }} onClick={() => handleNavClick("#donation")}>
                দান/অনুদান
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile bottom sticky nav */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t-2 shadow-2xl no-print"
        style={{ borderColor: "var(--color-border)" }}
        role="navigation"
        aria-label="মোবাইল বটম নেভিগেশন"
      >
        {[
          { label: "হোম", href: "#home", icon: "🏠" },
          { label: "নোটিশ", href: "#notice", icon: "📢" },
          { label: "ভর্তি", href: "#admission", icon: "🎓" },
          { label: "ফলাফল", href: "#result", icon: "📊" },
          { label: "যোগাযোগ", href: "#contact", icon: "📞" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex-1 flex flex-col items-center py-2.5 text-xs font-medium transition-all"
            style={activeHash === item.href ? { color: "var(--color-primary)" } : { color: "var(--color-text-muted)" }}
            onClick={() => handleNavClick(item.href)}
          >
            <span className="text-lg leading-none mb-0.5">{item.icon}</span>
            {item.label}
            {activeHash === item.href && (
              <span className="w-1 h-1 rounded-full mt-0.5" style={{ background: "var(--color-primary)" }} />
            )}
          </a>
        ))}
      </div>
    </header>
  );
}
