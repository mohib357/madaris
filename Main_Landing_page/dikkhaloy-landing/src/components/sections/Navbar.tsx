"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

const navItems = [
  {
    label: "ফিচার",
    href: "#features",
    children: [
      { label: "শিক্ষার্থী ব্যবস্থাপনা", href: "#students" },
      { label: "পরীক্ষা ও রেজাল্ট", href: "#results" },
      { label: "ফি ও অ্যাকাউন্টস", href: "#finance" },
      { label: "অনলাইন ভর্তি", href: "#admission" },
      { label: "গার্ডিয়ান পোর্টাল", href: "#portals" },
    ],
  },
  { label: "সমাধান", href: "#solutions" },
  { label: "Website Themes", href: "#themes" },
  { label: "মূল্য তালিকা", href: "#pricing" },
  { label: "রিসোর্স", href: "#resources" },
  { label: "পরিচিতি", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container-xl flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Dikkhaloy Home">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-white font-bold text-sm">দি</span>
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Dikkhaloy</span>
            <div className="text-[9px] text-gray-400 font-medium -mt-0.5 tracking-wider uppercase">
              Education Platform
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1" role="menubar">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              role="none"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-150"
                role="menuitem"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all"
          >
            Login
          </a>
          <a
            href="#trial"
            className="btn-primary text-sm py-2.5 px-5"
          >
            <Sparkles size={15} />
            বিনামূল্যে শুরু করুন
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container-xl py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="ml-4 space-y-0.5">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        • {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a href="/login" className="btn-ghost w-full justify-center text-sm">
                Login
              </a>
              <a href="#trial" className="btn-primary w-full justify-center text-sm" onClick={() => setMobileOpen(false)}>
                <Sparkles size={15} />
                বিনামূল্যে শুরু করুন
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
