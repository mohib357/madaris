import Image from "next/image";
import type { Teacher } from "@/types/institution";

interface Props {
  teachers: Teacher[];
}

export default function Teachers({ teachers }: Props) {
  const featured = teachers.filter((t) => t.featured);

  return (
    <section
      id="teachers"
      className="section-padding bg-white"
      aria-label="শিক্ষকবৃন্দ"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">আমাদের দল</span>
        <h2 className="section-heading">আমাদের শিক্ষকবৃন্দ</h2>
        <p className="section-subheading">
          দক্ষ ও অভিজ্ঞ শিক্ষকমণ্ডলী আপনার সন্তানের মেধা বিকাশে নিবেদিত
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {featured.map((teacher) => (
            <div
              key={teacher.id}
              className="card flex flex-col items-center text-center p-5 gap-3 group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Photo */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-offset-2 transition-all duration-300 group-hover:ring-[var(--color-primary)]"
                style={{ "--tw-ring-color": "var(--color-primary-light)" } as React.CSSProperties}
              >
                <Image
                  src={teacher.photo}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="font-bold text-slate-800 text-sm leading-tight">
                  {teacher.name}
                </h3>
                <p
                  className="text-xs font-medium mt-0.5"
                  style={{ color: "var(--color-primary)" }}
                >
                  {teacher.designation}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{teacher.subject}</p>
              </div>

              {/* Qualification */}
              <span className="text-xs text-slate-400 border-t border-slate-100 pt-2 w-full text-center leading-tight">
                {teacher.qualification}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="btn-outline-colored">
            সকল শিক্ষক দেখুন →
          </a>
        </div>
      </div>
    </section>
  );
}
