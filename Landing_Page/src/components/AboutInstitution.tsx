import Image from "next/image";

interface Props {
  aboutText: string;
  aboutImage: string;
  establishedYear: string;
  institutionName: string;
}

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src={aboutImage}
                alt={`${institutionName} — প্রতিষ্ঠানের ছবি`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Founded badge */}
            <div
              className="absolute -bottom-5 -right-4 md:-right-6 bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-slate-100"
              aria-label={`প্রতিষ্ঠাকাল ${establishedYear}`}
            >
              <span
                className="text-3xl font-extrabold"
                style={{ color: "var(--color-primary)" }}
              >
                {establishedYear}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">প্রতিষ্ঠাকাল</span>
            </div>
            {/* Decorative blob */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20 -z-10"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="tag mb-3 inline-block">আমাদের পরিচয়</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2 leading-snug">
              {institutionName} সম্পর্কে
            </h2>
            <div
              className="w-12 h-1 rounded-full mb-5"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
              {aboutText}
            </p>

            {/* Key points */}
            <ul className="space-y-3 mb-8">
              {[
                "ইসলামী মূল্যবোধ ও আধুনিক শিক্ষার সমন্বয়",
                "দক্ষ ও অভিজ্ঞ শিক্ষকমণ্ডলী",
                "নিরাপদ ও শিক্ষাবান্ধব পরিবেশ",
                "জাতীয় ও আন্তর্জাতিক মানের পাঠ্যক্রম",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <a href="#departments" className="btn-primary">
              বিস্তারিত জানুন →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
