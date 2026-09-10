import Image from "next/image";
import type { Teacher } from "@/types/institution";
import { BookOpen, GraduationCap } from "lucide-react";

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
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border"
            style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderColor: "var(--color-primary-light)" }}
          >
            আমাদের দল
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: "var(--color-primary)" }}>
            আমাদের শিক্ষকবৃন্দ
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
          <p className="text-sm md:text-base" style={{ color: "var(--color-text-muted)" }}>
            দক্ষ ও অভিজ্ঞ শিক্ষকমণ্ডলী আপনার সন্তানের মেধা বিকাশে নিবেদিত
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {featured.map((teacher) => (
            <div
              key={teacher.id}
              className="group flex flex-col items-center text-center rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              style={{ borderColor: "var(--color-border)" }}
            >
              {/* Photo area */}
              <div
                className="relative w-full pt-8 pb-4 flex justify-center"
                style={{ background: "linear-gradient(135deg, var(--color-primary-light) 0%, #e0effe 100%)" }}
              >
                <div
                  className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={teacher.photo}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-4 w-full flex flex-col gap-1.5">
                <h3 className="font-extrabold text-sm leading-tight" style={{ color: "var(--color-text)" }}>
                  {teacher.name}
                </h3>
                <p className="text-xs font-semibold" style={{ color: "var(--color-primary)" }}>
                  {teacher.designation}
                </p>

                <div
                  className="flex items-center gap-1 justify-center text-xs mt-1 px-2 py-1 rounded-lg"
                  style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)" }}
                >
                  <BookOpen size={10} />
                  <span className="truncate">{teacher.subject}</span>
                </div>

                <div
                  className="flex items-center gap-1 justify-center text-xs mt-0.5 px-2"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <GraduationCap size={10} className="shrink-0" />
                  <span className="truncate">{teacher.qualification}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:-translate-y-0.5"
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
          >
            সকল শিক্ষক দেখুন →
          </a>
        </div>
      </div>
    </section>
  );
}
