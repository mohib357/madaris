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
      style={{ backgroundColor: "var(--color-primary-light)" }}
      aria-label="কেন আমাদের প্রতিষ্ঠান"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">আমাদের বিশেষত্ব</span>
        <h2 className="section-heading">কেন {institutionName}?</h2>
        <p className="section-subheading">
          হাজারো অভিভাবকের বিশ্বাস ও শিক্ষার্থীদের স্বপ্নের ঠিকানা
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point) => (
            <div
              key={point.id}
              className="card p-6 flex gap-4 items-start group hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "var(--color-primary-light)" }}
                aria-hidden="true"
              >
                {point.icon}
              </div>
              <div>
                <h3
                  className="font-bold text-slate-800 mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  {point.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
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
