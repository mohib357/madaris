import Image from "next/image";
import { CheckCircle2, BookOpen, Users, Award } from "lucide-react";

interface Props {
  aboutText: string;
  aboutImage: string;
  establishedYear: string;
  institutionName: string;
}

const KEY_POINTS = [
  "ইসলামী মূল্যবোধ ও আধুনিক শিক্ষার সমন্বয়",
  "দক্ষ ও অভিজ্ঞ শিক্ষকমণ্ডলী",
  "নিরাপদ ও শিক্ষাবান্ধব পরিবেশ",
  "জাতীয় ও আন্তর্জাতিক মানের পাঠ্যক্রম",
];

const HIGHLIGHTS = [
  { icon: BookOpen, label: "১২+ বিভাগ", sub: "বিভিন্ন শিক্ষাক্রম" },
  { icon: Users, label: "৮৫+ শিক্ষক", sub: "দক্ষ শিক্ষকমণ্ডলী" },
  { icon: Award, label: "৯৮% পাস", sub: "উত্তীর্ণের হার" },
];

export default function AboutInstitution({
  aboutText,
  aboutImage,
  establishedYear,
  institutionName,
}: Props) {
  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-label="প্রতিষ্ঠান সম্পর্কে"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Image side ── */}
          <div className="relative order-2 lg:order-1">
            {/* Background decoration */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-3xl -z-10"
              style={{ background: "linear-gradient(135deg, var(--color-primary-light) 0%, transparent 70%)" }}
            />

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white">
              <Image
                src={aboutImage}
                alt={`${institutionName} — প্রতিষ্ঠানের ছবি`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Founded badge */}
            <div
              className="absolute -bottom-6 -right-2 md:-right-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex flex-col items-center border border-slate-100"
              aria-label={`প্রতিষ্ঠাকাল ${establishedYear}`}
            >
              <span
                className="text-3xl font-extrabold"
                style={{ color: "var(--color-primary)" }}
              >
                {establishedYear}
              </span>
              <span className="text-xs font-medium mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                প্রতিষ্ঠাকাল
              </span>
            </div>

            {/* Mini highlight cards */}
            <div className="absolute -left-4 top-6 flex flex-col gap-2">
              {HIGHLIGHTS.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 border border-slate-100"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--color-primary-light)" }}
                  >
                    <Icon size={14} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "var(--color-primary)" }}>{label}</p>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Text side ── */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border"
              style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderColor: "var(--color-primary-light)" }}
            >
              আমাদের পরিচয়
            </span>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-snug"
              style={{ color: "var(--color-text)" }}
            >
              {institutionName}{" "}
              <span style={{ color: "var(--color-primary)" }}>সম্পর্কে</span>
            </h2>

            {/* Gold divider */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: "var(--color-gold)" }} />
              <div className="h-1 w-4 rounded-full opacity-40" style={{ backgroundColor: "var(--color-gold)" }} />
            </div>

            <p
              className="leading-relaxed text-base md:text-lg mb-7"
              style={{ color: "var(--color-text-muted)" }}
            >
              {aboutText}
            </p>

            {/* Key points */}
            <ul className="space-y-3 mb-8">
              {KEY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                  <span style={{ color: "var(--color-text)" }}>{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#departments"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)" }}
            >
              বিভাগসমূহ দেখুন →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
