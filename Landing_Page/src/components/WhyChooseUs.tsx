import type { WhyUsPoint } from "@/types/institution";

interface Props {
  points: WhyUsPoint[];
  institutionName: string;
}

export default function WhyChooseUs({ points, institutionName }: Props) {
  return (
    <section
      id="why-us"
      className="section-padding"
      style={{ background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)" }}
      aria-label="কেন আমাদের প্রতিষ্ঠান"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-white/20 text-white/80"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            আমাদের বিশেষত্ব
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            কেন {institutionName}?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded bg-white/30" />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="h-0.5 w-10 rounded bg-white/30" />
          </div>
          <p className="text-white/70 text-sm md:text-base">
            হাজারো অভিভাবকের বিশ্বাস ও শিক্ষার্থীদের স্বপ্নের ঠিকানা
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((point, i) => (
            <div
              key={point.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex gap-4 items-start border border-white/15 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
                aria-hidden="true"
              >
                {point.icon}
              </div>

              <div>
                {/* Number */}
                <span className="text-xs font-bold opacity-40 text-white block mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-extrabold text-white mb-1.5 leading-snug">
                  {point.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
