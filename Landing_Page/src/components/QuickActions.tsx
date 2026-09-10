const ACTIONS = [
  { icon: "🎓", label: "অনলাইন ভর্তি", href: "#admission", highlight: true },
  { icon: "📢", label: "নোটিশ", href: "#notice" },
  { icon: "📊", label: "ফলাফল", href: "#result" },
  { icon: "💳", label: "ফি পরিশোধ", href: "#fees" },
  { icon: "📥", label: "ডাউনলোড", href: "#downloads" },
  { icon: "📞", label: "যোগাযোগ", href: "#contact" },
];

export default function QuickActions() {
  return (
    <section className="bg-white" aria-label="দ্রুত অ্যাকশন">
      <div className="container-custom -mt-6 relative z-10">
        <div
          className="bg-white rounded-2xl shadow-xl border border-slate-100 px-6 py-5"
          role="navigation"
          aria-label="দ্রুত অ্যাকশন লিঙ্ক"
        >
          {/* Mobile: horizontal scroll */}
          <div className="flex gap-3 overflow-x-auto pb-1 md:grid md:grid-cols-6 md:overflow-visible scrollbar-hide">
            {ACTIONS.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={`
                  flex flex-col items-center gap-2 px-4 py-4 rounded-xl transition-all duration-200
                  hover:-translate-y-1 hover:shadow-md cursor-pointer min-w-[80px] md:min-w-0 text-center
                  ${action.highlight ? "text-white shadow-md" : "bg-slate-50 hover:bg-slate-100 text-slate-700"}
                `}
                style={
                  action.highlight
                    ? { backgroundColor: "var(--color-primary)" }
                    : undefined
                }
                aria-label={action.label}
              >
                <span className="text-2xl leading-none" role="img" aria-hidden="true">
                  {action.icon}
                </span>
                <span className="text-xs font-semibold leading-tight">{action.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
