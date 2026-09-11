"use client";

import { UserPlus, Database, Rocket } from "lucide-react";

const steps = [
  {
    number: "০১",
    icon: UserPlus,
    title: "Register",
    description: "প্রতিষ্ঠানের basic information দিয়ে account তৈরি করুন। মাত্র ৫ মিনিটেই শুরু।",
    color: "bg-blue-600",
    bg: "bg-blue-50",
    detail: ["Institution name & type", "Admin account setup", "Subdomain claim"],
  },
  {
    number: "০২",
    icon: Database,
    title: "Import Data",
    description: "Excel থেকে student ও teacher data import করুন। পুরনো system থেকে migrate করা সহজ।",
    color: "bg-indigo-600",
    bg: "bg-indigo-50",
    detail: ["Excel/CSV import", "Student & teacher data", "Class & section setup"],
  },
  {
    number: "০৩",
    icon: Rocket,
    title: "Go Live",
    description: "Management panel ও institution website চালু। একটি link share করুন—সবাই ব্যবহার শুরু করুন।",
    color: "bg-green-600",
    bg: "bg-green-50",
    detail: ["Management panel active", "Institution website live", "All portals ready"],
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="tag bg-gray-100 text-gray-600 mb-4">শুরু করা সহজ</span>
          <h2 className="section-heading">
            মাত্র ৩টি ধাপে{" "}
            <span className="gradient-text">আপনার প্রতিষ্ঠান ডিজিটাল</span>
          </h2>
          <p className="section-subheading">
            জটিল setup বা technical জ্ঞান ছাড়াই শুরু করুন।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-gray-300 to-transparent z-0 -translate-x-1/2" />
              )}

              <div className="card p-6 relative z-10 hover:-translate-y-1 transition-all duration-300">
                {/* Number badge */}
                <div className="absolute -top-3 left-5 bg-white border-2 border-gray-200 text-gray-400 font-bold text-xs px-2 py-0.5 rounded-full">
                  {step.number}
                </div>

                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <step.icon size={28} className="text-white" />
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.description}</p>

                <ul className="space-y-1.5">
                  {step.detail.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className={`w-4 h-4 ${step.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <div className={`w-2 h-2 ${step.color} rounded-full`} />
                      </div>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#trial" className="btn-primary px-8 py-4 text-base">
            এখনই শুরু করুন — বিনামূল্যে
          </a>
          <p className="text-gray-400 text-sm mt-3">
            Setup সহায়তা প্রয়োজন? আমাদের team সাহায্য করবে।
          </p>
        </div>
      </div>
    </section>
  );
}
