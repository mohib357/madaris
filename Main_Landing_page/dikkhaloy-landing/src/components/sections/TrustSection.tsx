"use client";

import { useEffect, useRef, useState } from "react";
import { School, BookOpen, Users, GraduationCap, Globe } from "lucide-react";

const stats = [
  { icon: School, label: "প্রতিষ্ঠান", value: 0, suffix: "+", placeholder: true },
  { icon: GraduationCap, label: "শিক্ষার্থী", value: 0, suffix: "+", placeholder: true },
  { icon: Users, label: "শিক্ষক", value: 0, suffix: "+", placeholder: true },
  { icon: Globe, label: "ওয়েবসাইট", value: 0, suffix: "+", placeholder: true },
  { icon: BookOpen, label: "প্রদেশ", value: 0, suffix: "+", placeholder: true },
];

const partnerLogos = [
  "প্রতিষ্ঠান ক",
  "প্রতিষ্ঠান খ",
  "প্রতিষ্ঠান গ",
  "প্রতিষ্ঠান ঘ",
  "প্রতিষ্ঠান ঙ",
  "প্রতিষ্ঠান চ",
];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-14 bg-white border-b border-gray-100" ref={ref}>
      <div className="container-xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            বিশ্বস্ততা
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            স্কুল ও মাদরাসার আধুনিক ব্যবস্থাপনার জন্য তৈরি
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            বাংলাদেশের শিক্ষা প্রতিষ্ঠানগুলোর জন্য বিশেষভাবে ডিজাইন করা
          </p>
        </div>

        {/* Stats — placeholder until real data */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`text-center p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transition: "opacity 0.5s ease, transform 0.5s ease" }}
            >
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <s.icon size={20} className="text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {s.placeholder ? (
                  <span className="text-gray-300 text-lg font-medium">—</span>
                ) : (
                  <>{s.value}{s.suffix}</>
                )}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Partner logos placeholder */}
        <div className="border-t border-gray-100 pt-8">
          <p className="text-center text-xs text-gray-400 mb-5 uppercase tracking-widest">
            এখানে আপনার প্রতিষ্ঠানের লোগো থাকবে
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 opacity-30">
            {partnerLogos.map((l) => (
              <div
                key={l}
                className="bg-gray-200 text-gray-500 text-xs font-semibold px-5 py-2.5 rounded-lg"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
