import type { Facility } from "@/types/institution";

interface Props {
  facilities: Facility[];
}

export default function Facilities({ facilities }: Props) {
  return (
    <section
      id="facilities"
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%)" }}
      aria-label="সুযোগ-সুবিধা"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border"
            style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderColor: "var(--color-primary-light)" }}
          >
            সুবিধাসমূহ
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: "var(--color-primary)" }}>
            আমাদের সুযোগ-সুবিধা
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
          <p className="text-sm md:text-base" style={{ color: "var(--color-text-muted)" }}>
            শিক্ষার্থীদের সর্বোচ্চ সুবিধা নিশ্চিত করতে আমরা প্রতিশ্রুতিবদ্ধ
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" role="list">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="group bg-white rounded-2xl flex flex-col items-center gap-3 py-7 px-3 text-center shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ borderColor: "var(--color-border)" }}
              role="listitem"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, var(--color-primary-light) 0%, #c8e6fa 100%)", border: "2px solid var(--color-border)" }}
                role="img"
                aria-hidden="true"
              >
                {facility.icon}
              </div>
              <span
                className="text-xs font-bold leading-tight"
                style={{ color: "var(--color-text)" }}
              >
                {facility.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
