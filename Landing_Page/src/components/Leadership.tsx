import Image from "next/image";
import type { Leader } from "@/types/institution";
import { Quote } from "lucide-react";

interface Props {
  leaders: Leader[];
}

export default function Leadership({ leaders }: Props) {
  return (
    <section
      id="leadership"
      className="section-padding"
      style={{ backgroundColor: "var(--color-primary-light)" }}
      aria-label="নেতৃত্বের বাণী"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">নেতৃত্ব</span>
        <h2 className="section-heading">অধ্যক্ষ ও সভাপতির বাণী</h2>
        <p className="section-subheading">
          আমাদের প্রতিষ্ঠানের অগ্রযাত্রায় তাদের দৃষ্টিভঙ্গি ও প্রতিশ্রুতি
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="card p-8 flex flex-col gap-6 relative overflow-hidden"
              aria-label={`${leader.designation} ${leader.name}-এর বাণী`}
            >
              {/* Decorative quote icon */}
              <Quote
                size={64}
                className="absolute top-4 right-4 opacity-5"
                style={{ color: "var(--color-primary)" }}
                aria-hidden="true"
              />

              {/* Quote text */}
              <div className="relative">
                <span
                  className="text-4xl font-serif leading-none opacity-30"
                  style={{ color: "var(--color-primary)" }}
                  aria-hidden="true"
                >
                  "
                </span>
                <p className="text-slate-600 leading-relaxed text-base italic mt-1">
                  {leader.message}
                </p>
                <span
                  className="text-4xl font-serif leading-none opacity-30 float-right -mt-4"
                  style={{ color: "var(--color-primary)" }}
                  aria-hidden="true"
                >
                  "
                </span>
              </div>

              {/* Leader info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-offset-2"
                  style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
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
                  <p className="font-bold text-slate-800">{leader.name}</p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {leader.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
