import Image from "next/image";
import type { Leader } from "@/types/institution";

interface Props {
  leaders: Leader[];
}

export default function Leadership({ leaders }: Props) {
  return (
    <section
      id="leadership"
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%)" }}
      aria-label="নেতৃত্বের বাণী"
    >
      <div className="container-custom">
        {/* Islamic banner */}
        <div
          className="text-center mb-8 py-4 rounded-2xl islamic-pattern-light border"
          style={{ borderColor: "var(--color-primary-light)" }}
        >
          <p className="bismillah-box font-amiri text-2xl mb-1" style={{ color: "var(--color-primary)" }}>
            وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            সৎকর্ম ও তাকওয়ায় পরস্পর সাহায্য করো — সূরা মায়েদা: ২
          </p>
        </div>
        {/* Section header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border"
            style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderColor: "var(--color-primary-light)" }}
          >
            নেতৃত্ব
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: "var(--color-primary)" }}>
            অধ্যক্ষ ও সভাপতির বাণী
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
          <p className="text-sm md:text-base" style={{ color: "var(--color-text-muted)" }}>
            আমাদের প্রতিষ্ঠানের অগ্রযাত্রায় তাদের দৃষ্টিভঙ্গি ও প্রতিশ্রুতি
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={leader.name}
              className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 flex flex-col"
              aria-label={`${leader.designation} ${leader.name}-এর বাণী`}
            >
              {/* Top color bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: idx % 2 === 0
                    ? "linear-gradient(90deg, var(--color-primary), var(--color-gold))"
                    : "linear-gradient(90deg, var(--color-gold), var(--color-primary))",
                }}
              />

              <div className="p-8 flex flex-col gap-6 flex-1">
                {/* Large decorative quote */}
                <div
                  className="text-8xl font-serif leading-none opacity-10 -mt-4 -ml-2 select-none"
                  style={{ color: "var(--color-primary)" }}
                  aria-hidden="true"
                >
                  "
                </div>

                {/* Quote text */}
                <p
                  className="-mt-10 leading-relaxed text-base italic"
                  style={{ color: "var(--color-text)" }}
                >
                  {leader.message}
                </p>

                {/* End quote */}
                <div
                  className="text-4xl font-serif leading-none opacity-10 text-right select-none"
                  style={{ color: "var(--color-primary)" }}
                  aria-hidden="true"
                >
                  "
                </div>
              </div>

              {/* Leader info */}
              <div
                className="flex items-center gap-4 px-8 py-5 border-t"
                style={{ borderColor: "var(--color-border)", background: "var(--color-section-alt)" }}
              >
                <div
                  className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-md border-2"
                  style={{ borderColor: "var(--color-primary-light)" }}
                >
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="font-bold text-base" style={{ color: "var(--color-text)" }}>
                    {leader.name}
                  </p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: "var(--color-primary)" }}>
                    {leader.designation}
                  </p>
                </div>
                {/* Seal icon */}
                <div
                  className="ml-auto w-10 h-10 rounded-full flex items-center justify-center text-lg opacity-30"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  ✦
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
