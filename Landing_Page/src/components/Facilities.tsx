import type { Facility } from "@/types/institution";

interface Props {
  facilities: Facility[];
}

export default function Facilities({ facilities }: Props) {
  return (
    <section
      id="facilities"
      className="section-padding bg-white"
      aria-label="সুযোগ-সুবিধা"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">সুবিধাসমূহ</span>
        <h2 className="section-heading">আমাদের সুযোগ-সুবিধা</h2>
        <p className="section-subheading">
          শিক্ষার্থীদের সর্বোচ্চ সুবিধা নিশ্চিত করতে আমরা প্রতিশ্রুতিবদ্ধ
        </p>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          role="list"
        >
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="card flex flex-col items-center gap-3 py-6 px-3 text-center group hover:scale-105 transition-transform duration-200"
              role="listitem"
            >
              <span
                className="text-3xl w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: "var(--color-primary-light)" }}
                role="img"
                aria-hidden="true"
              >
                {facility.icon}
              </span>
              <span className="text-xs font-semibold text-slate-700 leading-tight">
                {facility.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
