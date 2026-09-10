"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, MessageCircle, Send } from "lucide-react";
import type { ContactInfo, SocialLinks } from "@/types/institution";

interface Props {
  contact: ContactInfo;
  social: SocialLinks;
}

type ContactFormState = {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection({ contact, social }: Props) {
  const [form, setForm] = useState<ContactFormState>({
    name: "", mobile: "", email: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-white"
      aria-label="যোগাযোগ করুন"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">যোগাযোগ</span>
        <h2 className="section-heading">যোগাযোগ করুন</h2>
        <p className="section-subheading">
          আমাদের সাথে সরাসরি কথা বলুন অথবা বার্তা পাঠান
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — info + map */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="card p-4 flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                  aria-hidden="true"
                >
                  <Phone size={18} style={{ color: "var(--color-primary)" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">ফোন</p>
                  {contact.phone.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="block text-sm font-medium text-slate-800 hover:text-[var(--color-primary)] transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="card p-4 flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                  aria-hidden="true"
                >
                  <Mail size={18} style={{ color: "var(--color-primary)" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">ইমেইল</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-medium text-slate-800 hover:text-[var(--color-primary)] transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="card p-4 flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                  aria-hidden="true"
                >
                  <MapPin size={18} style={{ color: "var(--color-primary)" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">ঠিকানা</p>
                  <p className="text-sm text-slate-800 leading-snug">{contact.address}</p>
                </div>
              </div>

              {/* Office hours */}
              <div className="card p-4 flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                  aria-hidden="true"
                >
                  <Clock size={18} style={{ color: "var(--color-primary)" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">অফিস সময়</p>
                  <p className="text-sm text-slate-800">{contact.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-3">সোশ্যাল মিডিয়া</p>
              <div className="flex gap-3">
                {social.facebook && (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: "#1877F2" }}
                    aria-label="Facebook পেইজ"
                  >
                    <Facebook size={18} aria-hidden="true" />
                  </a>
                )}
                {social.youtube && (
                  <a
                    href={social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: "#FF0000" }}
                    aria-label="YouTube চ্যানেল"
                  >
                    <Youtube size={18} aria-hidden="true" />
                  </a>
                )}
                {social.whatsapp && (
                  <a
                    href={social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: "#25D366" }}
                    aria-label="WhatsApp-এ যোগাযোগ করুন"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            {/* Google Map embed */}
            {contact.googleMapEmbedUrl && (
              <div className="rounded-2xl overflow-hidden shadow-md h-52 border border-slate-100">
                <iframe
                  src={contact.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map — প্রতিষ্ঠানের অবস্থান"
                />
              </div>
            )}
          </div>

          {/* Right — inquiry form */}
          <div className="card p-6 md:p-8">
            <h3
              className="font-bold text-lg mb-1"
              style={{ color: "var(--color-primary)" }}
            >
              বার্তা পাঠান
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেব।
            </p>

            {submitted ? (
              <div className="text-center py-8" role="alert" aria-live="polite">
                <span className="text-5xl">✅</span>
                <h4 className="font-bold text-slate-800 mt-4 mb-2">বার্তা পাঠানো হয়েছে!</h4>
                <p className="text-slate-400 text-sm">
                  শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", mobile: "", email: "", subject: "", message: "" }); }}
                  className="btn-primary mt-4"
                >
                  আরেকটি বার্তা পাঠান
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" aria-label="যোগাযোগ ফর্ম" noValidate>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="c-name" className="block text-xs font-semibold text-slate-600 mb-1">
                      নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="আপনার নাম"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                      style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label htmlFor="c-mobile" className="block text-xs font-semibold text-slate-600 mb-1">
                      মোবাইল <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="c-mobile"
                      name="mobile"
                      type="tel"
                      required
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="01XXXXXXXXX"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                      style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-email" className="block text-xs font-semibold text-slate-600 mb-1">
                    Email
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label htmlFor="c-subject" className="block text-xs font-semibold text-slate-600 mb-1">
                    বিষয় <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="c-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="বার্তার বিষয়"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-xs font-semibold text-slate-600 mb-1">
                    আপনার বার্তা <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="আপনার বার্তা লিখুন..."
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center disabled:opacity-70"
                >
                  {submitting ? "পাঠানো হচ্ছে..." : <><Send size={14} /> বার্তা পাঠান</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
