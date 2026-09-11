"use client";

import { Shield, Database, Palette, Globe2 } from "lucide-react";

const benefits = [
  {
    icon: Database,
    title: "আলাদা Data",
    description: "প্রতিটি প্রতিষ্ঠানের data সম্পূর্ণ আলাদা। অন্য কেউ দেখতে পাবে না।",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Palette,
    title: "আলাদা Branding",
    description: "নিজস্ব logo, color ও theme। Dikkhaloy branding শুধু 'Powered by' হিসেবে।",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Globe2,
    title: "আলাদা Website",
    description: "নিজস্ব domain বা subdomain। Visitor-এর কাছে সম্পূর্ণ নিজস্ব পরিচয়।",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Shield,
    title: "আলাদা Security",
    description: "Role-based access control। শুধুমাত্র অনুমোদিত ব্যক্তি data দেখতে পারবেন।",
    color: "bg-orange-100 text-orange-600",
  },
];

const institutions = [
  { name: "Institution A", sub: "a.dikkhaloy.com", color: "from-blue-500 to-blue-600" },
  { name: "Institution B", sub: "b.dikkhaloy.com", color: "from-green-500 to-green-600" },
  { name: "Institution C", sub: "yourdomain.com", color: "from-purple-500 to-purple-600" },
];

export default function MultiTenant() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="tag bg-blue-100 text-blue-700 mb-4">Multi-Tenant Platform</span>
          <h2 className="section-heading">
            এক প্ল্যাটফর্ম,{" "}
            <span className="gradient-text">হাজারো প্রতিষ্ঠান</span>
          </h2>
          <p className="section-subheading">
            System একই, কিন্তু প্রতিটি প্রতিষ্ঠানের Data, Branding ও Website আলাদা।
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="max-w-4xl mx-auto mb-14">
          {/* Central platform */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl px-12 py-6 text-white shadow-2xl shadow-blue-200 text-center">
              <div className="text-2xl font-black mb-1 tracking-wide">DIKKHALOY</div>
              <div className="text-blue-200 text-sm">Central SaaS Platform</div>
            </div>
          </div>

          {/* Connection lines (visual) */}
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-lg h-12">
              <div className="absolute left-1/2 top-0 w-px h-full bg-gray-200" />
              <div className="absolute left-1/6 top-1/2 right-1/6 h-px bg-gray-200" />
            </div>
          </div>

          {/* Tenant cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {institutions.map((inst) => (
              <div key={inst.name} className="card p-5 text-center hover:-translate-y-1 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${inst.color} rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-md`}>
                  <Globe2 size={20} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{inst.name}</h4>
                <code className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{inst.sub}</code>
                <div className="mt-3 space-y-1 text-left">
                  {["Own Website ✓", "Own Data ✓", "Own Branding ✓"].map((item) => (
                    <div key={item} className="text-xs text-gray-500 flex items-center gap-1.5">
                      <div className="w-3 h-3 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all">
              <div className={`w-11 h-11 rounded-xl ${b.color} flex items-center justify-center mb-3`}>
                <b.icon size={20} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1.5">{b.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
