"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Internet ছাড়া কি ব্যবহার করা যাবে?",
    answer:
      "Dikkhaloy cloud-based platform হওয়ায় ব্যবহারের জন্য internet connection প্রয়োজন। তবে system টি কম bandwidth-এও যাতে ভালো কাজ করে সেই লক্ষ্যে optimize করা হচ্ছে।",
  },
  {
    question: "Software ব্যবহার করা কি কঠিন?",
    answer:
      "Dikkhaloy বাংলা ভাষায় তৈরি এবং সহজ UI সহ। প্রতিষ্ঠানের registration-এর পর আমাদের team onboarding support দেবে। বেশিরভাগ কাজ সহজেই শেখা যায়।",
  },
  {
    question: "পুরনো data কীভাবে import করব?",
    answer:
      "Excel বা CSV ফাইল থেকে student ও teacher data import করার সুবিধা রয়েছে। Import template পাওয়া যাবে এবং আমাদের team প্রয়োজনে সহায়তা করবে।",
  },
  {
    question: "নিজের domain ব্যবহার করা যাবে?",
    answer:
      "হ্যাঁ, custom domain connect করার সুবিধা রয়েছে। Default-এ প্রতিটি প্রতিষ্ঠান yourschool.dikkhaloy.com subdomain পাবে। Custom domain setup-এর জন্য একবারের সার্ভিস চার্জ প্রযোজ্য।",
  },
  {
    question: "Institution website কি সব plan-এ পাওয়া যাবে?",
    answer:
      "হ্যাঁ, প্রতিটি প্রতিষ্ঠান Dikkhaloy subscription-এর সাথে তাদের institution website বা subdomain পাবে। আলাদা hosting বা website builder কেনার প্রয়োজন নেই।",
  },
  {
    question: "Guardian portal কি আছে?",
    answer:
      "হ্যাঁ, অভিভাবকরা তাদের সন্তানের attendance, result, fees ও notice দেখার জন্য আলাদা guardian portal পাবেন।",
  },
  {
    question: "Online admission কি সম্ভব?",
    answer:
      "হ্যাঁ, institution-এর website থেকে অনলাইনে ভর্তির আবেদন নেওয়া, document upload, verification ও confirmation সম্পন্ন করা যাবে।",
  },
  {
    question: "Result online publish করা যাবে?",
    answer:
      "হ্যাঁ, পরীক্ষার ফলাফল institution website-এ publish করা যাবে এবং guardian portal থেকেও দেখা যাবে।",
  },
  {
    question: "একাধিক branch পরিচালনা করা যাবে?",
    answer:
      "বড় প্রতিষ্ঠান বা multi-campus institution-এর জন্য Enterprise plan রয়েছে। বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।",
  },
  {
    question: "Payment gateway কি integrate আছে?",
    answer:
      "Online payment সুবিধা নিয়ে কাজ চলছে। বর্তমানে কোন payment gateway সমর্থিত তা registration-এর সময় জানানো হবে। সততার সাথে বলছি — শুধু বাস্তবে available হলেই ব্যবহার করতে পারবেন।",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="tag bg-gray-100 text-gray-600 mb-4">সাধারণ প্রশ্ন</span>
          <h2 className="section-heading">
            আপনার মনে যা আসছে
          </h2>
          <p className="section-subheading">
            সবচেয়ে বেশি জিজ্ঞেস করা প্রশ্নের উত্তর এখানে।
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i ? "border-blue-200 shadow-sm" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-medium text-gray-900 text-sm leading-snug">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-blue-500" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-3">আরও প্রশ্ন আছে?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn-secondary text-sm py-2.5">
              আমাদের সাথে কথা বলুন
            </a>
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
            >
              WhatsApp করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
