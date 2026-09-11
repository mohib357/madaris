import type { Achievement } from "@/types/institution";

interface Props {
  achievements: Achievement[];
}

const CARD_ACCENTS = [
  { border: "#bee3f8", ribbon: "#1a5276" },
  { border: "#a9dfbf", ribbon: "#1e8449" },
  { border: "#fad7a0", ribbon: "#b7860c" },
  { border: "#d7bde2", ribbon: "#7d3c98" },
];

export default function Achievements({ achievements }: Props) {
  return (
    <section
      id="achievements"
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%)" }}
      aria-label="আমাদের অর্জন"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border"
            style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderColor: "var(--color-primary-light)" }}
          >
            অর্জন
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: "var(--color-primary)" }}>
            আমাদের গৌরবময় অর্জন
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
          <p className="text-sm md:text-base" style={{ color: "var(--color-text-muted)" }}>
            গৌরবময় ইতিহাস ও অসামান্য সাফল্যের পথচলা
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden border-2"
                style={{ borderColor: accent.border }}
              >
                {/* Year ribbon */}
                <div
                  className="absolute top-0 right-0 text-white text-xs font-extrabold px-4 py-1.5 rounded-bl-2xl"
                  style={{ backgroundColor: accent.ribbon }}
                  aria-label={`সাল: ${item.year}`}
                >
                  {item.year}
                </div>

                {/* Decoration bg circle */}
                <div
                  className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-10"
                  style={{ backgroundColor: accent.ribbon }}
                />

                <div
                  className="text-4xl mb-4 w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm border-2"
                  style={{ borderColor: accent.border, backgroundColor: `${accent.border}50` }}
                  role="img"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <h3
                  className="font-extrabold mb-2 leading-snug text-sm group-hover:opacity-80 transition-opacity"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
