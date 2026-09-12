"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  { q: "Internet ছাড়া কি ব্যবহার করা যাবে?",         a: "Dikkhaloy cloud-based platform হওয়ায় ব্যবহারের জন্য internet connection প্রয়োজন। তবে কম bandwidth-এও ভালো কাজ করার জন্য optimize করা হচ্ছে।",                                                   cat: "Technical" },
  { q: "Software ব্যবহার করা কি কঠিন?",                a: "Dikkhaloy বাংলা ভাষায় তৈরি এবং সহজ UI সহ। registration-এর পর আমাদের team onboarding support দেবে। বেশিরভাগ কাজ সহজেই শেখা যায়।",                                                         cat: "Onboarding" },
  { q: "পুরনো data কীভাবে import করব?",                a: "Excel বা CSV ফাইল থেকে student ও teacher data import করার সুবিধা রয়েছে। Import template পাওয়া যাবে এবং আমাদের team প্রয়োজনে সহায়তা করবে।",                                              cat: "Data" },
  { q: "নিজের domain ব্যবহার করা যাবে?",              a: "হ্যাঁ, custom domain connect করার সুবিধা রয়েছে। Default-এ প্রতিটি প্রতিষ্ঠান yourschool.dikkhaloy.com subdomain পাবে। Custom domain-এর জন্য একবারের সার্ভিস চার্জ প্রযোজ্য।",       cat: "Website" },
  { q: "Institution website কি সব plan-এ পাওয়া যাবে?",a: "হ্যাঁ, প্রতিটি প্রতিষ্ঠান Dikkhaloy subscription-এর সাথে তাদের institution website বা subdomain পাবে। আলাদা hosting বা website builder কেনার প্রয়োজন নেই।",                          cat: "Website" },
  { q: "Guardian portal কি আছে?",                      a: "হ্যাঁ, অভিভাবকরা তাদের সন্তানের attendance, result, fees ও notice দেখার জন্য আলাদা guardian portal পাবেন।",                                                                         cat: "Portal" },
  { q: "Online admission কি সম্ভব?",                   a: "হ্যাঁ, institution-এর website থেকে অনলাইনে ভর্তির আবেদন নেওয়া, document upload, verification ও confirmation সম্পন্ন করা যাবে।",                                                      cat: "Admission" },
  { q: "Result online publish করা যাবে?",              a: "হ্যাঁ, পরীক্ষার ফলাফল institution website-এ publish করা যাবে এবং guardian portal থেকেও দেখা যাবে।",                                                                              cat: "Academic" },
  { q: "একাধিক branch পরিচালনা করা যাবে?",            a: "বড় প্রতিষ্ঠান বা multi-campus institution-এর জন্য Enterprise plan রয়েছে। বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।",                                                                    cat: "Enterprise" },
  { q: "Payment gateway কি integrate আছে?",            a: "Online payment সুবিধা নিয়ে কাজ চলছে। বর্তমানে কোন payment gateway সমর্থিত তা registration-এর সময় জানানো হবে। সততার সাথে বলছি — শুধু বাস্তবে available হলেই ব্যবহার করতে পারবেন।", cat: "Finance" },
];

const catColors: Record<string, string> = {
  Technical: "bg-blue-50 text-blue-600 border-blue-100",
  Onboarding:"bg-green-50 text-green-600 border-green-100",
  Data:      "bg-amber-50 text-amber-600 border-amber-100",
  Website:   "bg-orange-50 text-orange-600 border-orange-100",
  Portal:    "bg-rose-50 text-rose-600 border-rose-100",
  Admission: "bg-indigo-50 text-indigo-600 border-indigo-100",
  Academic:  "bg-purple-50 text-purple-600 border-purple-100",
  Enterprise:"bg-cyan-50 text-cyan-600 border-cyan-100",
  Finance:   "bg-emerald-50 text-emerald-600 border-emerald-100",
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 pat-arcs" style={{ opacity:0.7 }} />
      <div className="container-xl relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            <HelpCircle size={13} /> সাধারণ প্রশ্ন
          </div>
          <h2 className="section-heading">আপনার মনে যা আসছে</h2>
          <p className="section-subheading">সবচেয়ে বেশি জিজ্ঞেস করা প্রশ্নের উত্তর এখানে।</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen ? "2px solid #2563eb44" : "2px solid #e2e8f0",
                  boxShadow: isOpen ? "0 4px 20px rgba(37,99,235,0.10)" : "none",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className={`flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full border ${catColors[faq.cat] || "bg-gray-50 text-gray-500 border-gray-100"}`}>
                      {faq.cat}
                    </span>
                    <span className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-blue-700 transition-colors">{faq.q}</span>
                  </div>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? "bg-blue-600" : "bg-gray-100 group-hover:bg-blue-50"}`}>
                    <ChevronDown size={15} className={`transition-all duration-200 ${isOpen ? "rotate-180 text-white" : "text-gray-400"}`} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <div className="h-px bg-blue-50 mb-4" />
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">আরও প্রশ্ন আছে?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn-secondary text-sm py-2.5">আমাদের সাথে কথা বলুন</a>
            <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm shadow-md hover:shadow-lg">
              WhatsApp করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
