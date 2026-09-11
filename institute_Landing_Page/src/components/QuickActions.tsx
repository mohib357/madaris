const ACTIONS = [
  {
    icon: "🎓",
    label: "অনলাইন ভর্তি",
    desc: "আবেদন করুন",
    href: "#admission",
    highlight: true,
  },
  { icon: "📢", label: "নোটিশ বোর্ড", desc: "সর্বশেষ নোটিশ", href: "#notice" },
  { icon: "📊", label: "ফলাফল", desc: "রেজাল্ট দেখুন", href: "#result" },
  { icon: "📥", label: "ডাউনলোড", desc: "ফর্ম ও সিলেবাস", href: "#downloads" },
  { icon: "🏫", label: "বিভাগসমূহ", desc: "পড়ার সুযোগ", href: "#departments" },
  { icon: "📞", label: "যোগাযোগ", desc: "আমাদের সাথে", href: "#contact" },
];

export default function QuickActions() {
  return (
    <section className="relative z-10 -mt-8 pb-4 px-4 md:px-8 lg:px-16" aria-label="দ্রুত অ্যাকশন">
      <div className="container-custom">
        <div
          className="bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-5 sm:px-6"
          role="navigation"
          aria-label="দ্রুত অ্যাকশন লিঙ্ক"
        >
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {ACTIONS.map((action) => (
              <a
                key={action.label}
                href={action.href}
                aria-label={action.label}
                className="group flex flex-col items-center gap-2 px-3 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 text-center"
                style={
                  action.highlight
                    ? {
                        background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
                        boxShadow: "0 4px 16px rgba(26,82,118,0.3)",
                      }
                    : undefined
                }
              >
                {/* Icon wrapper */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-200 group-hover:scale-110 ${action.highlight ? "bg-white/20" : "bg-blue-50 group-hover:bg-blue-100"}`}
                >
                  <span role="img" aria-hidden="true">{action.icon}</span>
                </div>

                <div>
                  <p
                    className={`text-xs font-bold leading-tight ${action.highlight ? "text-white" : ""}`}
                    style={!action.highlight ? { color: "var(--color-primary)" } : undefined}
                  >
                    {action.label}
                  </p>
                  <p
                    className={`text-xs leading-tight mt-0.5 ${action.highlight ? "text-white/70" : ""}`}
                    style={!action.highlight ? { color: "var(--color-text-muted)" } : undefined}
                  >
                    {action.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
