"use client";

import { Shield, Lock, Users2, ClipboardCheck, KeyRound, Database } from "lucide-react";

const features = [
  {
    icon: Users2,
    title: "Role-based Access",
    description: "Admin, Teacher, Student, Guardian আলাদা permission। কেউ অনুমতি ছাড়া কিছু দেখতে পাবে না।",
  },
  {
    icon: Database,
    title: "Tenant Data Isolation",
    description: "প্রতিটি প্রতিষ্ঠানের data সম্পূর্ণ আলাদা। অন্য প্রতিষ্ঠান কোনোভাবেই access পাবে না।",
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Secure login system। Password hashing ও session management।",
  },
  {
    icon: Shield,
    title: "Regular Backup",
    description: "নিয়মিত data backup। আপনার তথ্য সুরক্ষিত।",
  },
  {
    icon: ClipboardCheck,
    title: "Audit Logs",
    description: "কে কখন কী করেছে তার সম্পূর্ণ রেকর্ড। Accountability নিশ্চিত।",
  },
  {
    icon: KeyRound,
    title: "Permission Management",
    description: "Granular permission control। কোন role কোন module access করতে পারবে তা আপনি ঠিক করুন।",
  },
];

export default function SecuritySection() {
  return (
    <section className="section-pad bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900" />
      <div className="absolute inset-0 geo-pattern opacity-10" />

      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-5">
            <Shield size={14} />
            Security & Privacy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            আপনার প্রতিষ্ঠানের তথ্য,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              আপনার নিয়ন্ত্রণে
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            আপনার প্রতিষ্ঠান ও শিক্ষার্থীদের তথ্য সুরক্ষিত রাখতে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-5 hover:border-blue-700/50 hover:bg-gray-800 transition-all group"
            >
              <div className="w-11 h-11 bg-blue-900/60 border border-blue-700/40 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-all">
                <f.icon size={20} className="text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 bg-gray-800/40 border border-gray-700/30 rounded-2xl p-5 text-center">
          <p className="text-gray-400 text-sm">
            আমরা বিশ্বাস করি সততায়। কোনো security claim বাস্তবে নিশ্চিত না হলে আমরা marketing-এ উল্লেখ করি না।
          </p>
        </div>
      </div>
    </section>
  );
}
