"use client";

import { useState, useEffect } from "react";
import { Search, FileText, Upload, CheckCircle, CreditCard, UserCheck, Database } from "lucide-react";

const steps = [
  { icon: Search, label: "Discover", desc: "প্রতিষ্ঠানের ওয়েবসাইটে যান", color: "bg-blue-500" },
  { icon: FileText, label: "আবেদন", desc: "অনলাইনে ফর্ম পূরণ করুন", color: "bg-indigo-500" },
  { icon: Upload, label: "Documents", desc: "প্রয়োজনীয় কাগজ আপলোড করুন", color: "bg-violet-500" },
  { icon: CheckCircle, label: "যাচাই", desc: "কর্তৃপক্ষ আবেদন যাচাই করবে", color: "bg-purple-500" },
  { icon: CreditCard, label: "Payment", desc: "অনলাইনে ভর্তি ফি পরিশোধ করুন", color: "bg-pink-500" },
  { icon: UserCheck, label: "ভর্তি সম্পন্ন", desc: "ভর্তি নিশ্চিত হলো", color: "bg-rose-500" },
  { icon: Database, label: "Auto Add", desc: "শিক্ষার্থী স্বয়ংক্রিয়ভাবে database-এ যুক্ত", color: "bg-green-600" },
];

export default function AdmissionJourney() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="admission" className="section-pad relative overflow-hidden"
      style={{ background:"linear-gradient(135deg,#eff6ff 0%,#f0fdf4 50%,#eef2ff 100%)" }}>
      <div className="absolute inset-0 pat-arcs" style={{ opacity:0.8 }} />
      <div className="absolute inset-0 pat-grid" style={{ opacity:0.5 }} />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <span className="tag bg-blue-100 text-blue-700 mb-4">Online Admission</span>
          <h2 className="section-heading">
            ভর্তি প্রক্রিয়াকে করুন{" "}
            <span className="gradient-text">সম্পূর্ণ ডিজিটাল</span>
          </h2>
          <p className="section-subheading">
            একবার আবেদন → যাচাই → পেমেন্ট → ভর্তি → Student Database। মাত্র কয়েকটি ধাপে সম্পন্ন।
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Steps */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-gray-200 hidden sm:block">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Step circles */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 relative z-10">
              {steps.map((step, i) => (
                <button
                  key={step.label}
                  onClick={() => setActiveStep(i)}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                      i <= activeStep
                        ? `${step.color} text-white scale-110 shadow-lg`
                        : "bg-white text-gray-300 border-2 border-gray-200"
                    }`}
                  >
                    <step.icon size={24} />
                  </div>
                  <div className="text-center">
                    <div className={`text-xs font-semibold transition-colors ${
                      i <= activeStep ? "text-gray-900" : "text-gray-400"
                    }`}>
                      {step.label}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active step description */}
          <div className="mt-10 bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 ${steps[activeStep].color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon size={26} className="text-white" />;
                })()}
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Step {activeStep + 1} of {steps.length}</div>
                <h4 className="font-bold text-gray-900 text-lg">{steps[activeStep].label}</h4>
                <p className="text-gray-600 text-sm">{steps[activeStep].desc}</p>
              </div>
            </div>
          </div>

          {/* Highlight callout */}
          <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white text-center">
            <p className="font-semibold text-base">
              একবার Data Entry → অনেক জায়গায় ব্যবহার
            </p>
            <p className="text-blue-200 text-sm mt-1">
              ভর্তি হলেই student profile, attendance, fees সব জায়গায় automatically যুক্ত হয়।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
