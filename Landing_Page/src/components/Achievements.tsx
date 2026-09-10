import type { Achievement } from "@/types/institution";

interface Props {
  achievements: Achievement[];
}

export default function Achievements({ achievements }: Props) {
  return (
    <section
      id="achievements"
      className="section-padding"
      style={{ backgroundColor: "var(--color-primary-light)" }}
      aria-label="আমাদের অর্জন"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">অর্জন</span>
        <h2 className="section-heading">🏆 আমাদের অর্জন</h2>
        <p className="section-subheading">
          গৌরবময় ইতিহাস ও অসামান্য সাফল্যের পথচলা
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="card p-6 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
            >
              {/* Year ribbon */}
              <div
                className="absolute top-0 right-0 text-white text-xs font-bold px-3 py-1 rounded-bl-xl"
                style={{ backgroundColor: "var(--color-primary)" }}
                aria-label={`সাল: ${item.year}`}
              >
                {item.year}
              </div>

              <span
                className="text-4xl mb-3 block"
                role="img"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <h3
                className="font-bold text-slate-800 mb-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors"
              >
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
