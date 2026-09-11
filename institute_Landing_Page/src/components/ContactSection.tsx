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

const CONTACT_CARDS = [
  { icon: Phone,  labelKey: "phone" as const,       label: "ফোন" },
  { icon: Mail,   labelKey: "email" as const,        label: "ইমেইল" },
  { icon: MapPin, labelKey: "address" as const,      label: "ঠিকানা" },
  { icon: Clock,  labelKey: "officeHours" as const,  label: "অফিস সময়" },
];

export default function ContactSection({ contact, social }: Props) {
  const [form, setForm] = useState<ContactFormState>({ name: "", mobile: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%)" }}
      aria-label="যোগাযোগ করুন"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border"
            style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderColor: "var(--color-primary-light)" }}
          >
            যোগাযোগ
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: "var(--color-primary)" }}>
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
          <p className="text-sm md:text-base" style={{ color: "var(--color-text-muted)" }}>
            আমাদের সাথে সরাসরি কথা বলুন অথবা বার্তা পাঠান
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left side ── */}
          <div className="space-y-5">
            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm border hover:shadow-md transition-all" style={{ borderColor: "var(--color-border)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))" }}>
                  <Phone size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold mb-1" style={{ color: "var(--color-text-muted)" }}>ফোন</p>
                  {contact.phone.map((p) => (
                    <a key={p} href={`tel:${p}`} className="block text-sm font-bold hover:opacity-70 transition-opacity" style={{ color: "var(--color-text)" }}>
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm border hover:shadow-md transition-all" style={{ borderColor: "var(--color-border)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, var(--color-gold), #b7860c)" }}>
                  <Mail size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold mb-1" style={{ color: "var(--color-text-muted)" }}>ইমেইল</p>
                  <a href={`mailto:${contact.email}`} className="text-sm font-bold break-all hover:opacity-70 transition-opacity" style={{ color: "var(--color-text)" }}>
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm border hover:shadow-md transition-all" style={{ borderColor: "var(--color-border)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-rose-500">
                  <MapPin size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold mb-1" style={{ color: "var(--color-text-muted)" }}>ঠিকানা</p>
                  <p className="text-sm font-semibold leading-snug" style={{ color: "var(--color-text)" }}>{contact.address}</p>
                </div>
              </div>

              {/* Office hours */}
              <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm border hover:shadow-md transition-all" style={{ borderColor: "var(--color-border)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-emerald-600">
                  <Clock size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold mb-1" style={{ color: "var(--color-text-muted)" }}>অফিস সময়</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{contact.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: "var(--color-border)" }}>
              <p className="text-xs font-bold mb-4" style={{ color: "var(--color-text-muted)" }}>সোশ্যাল মিডিয়া</p>
              <div className="flex gap-3">
                {social.facebook && (
                  <a href={social.facebook} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "#1877F2" }}
                    aria-label="Facebook পেইজ"
                  >
                    <Facebook size={16} /> Facebook
                  </a>
                )}
                {social.youtube && (
                  <a href={social.youtube} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "#FF0000" }}
                    aria-label="YouTube চ্যানেল"
                  >
                    <Youtube size={16} /> YouTube
                  </a>
                )}
                {social.whatsapp && (
                  <a href={social.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "#25D366" }}
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                )}
              </div>
            </div>

            {/* Map */}
            {contact.googleMapEmbedUrl && (
              <div className="rounded-2xl overflow-hidden shadow-md h-56 border-2" style={{ borderColor: "var(--color-primary-light)" }}>
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

          {/* ── Right — form ── */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border" style={{ borderColor: "var(--color-border)" }}>
            {/* Top bar */}
            <div className="h-1.5" style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-gold))" }} />

            <div className="p-8">
              <h3 className="font-extrabold text-xl mb-1" style={{ color: "var(--color-primary)" }}>
                বার্তা পাঠান
              </h3>
              <p className="text-xs mb-6" style={{ color: "var(--color-text-muted)" }}>
                আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেব।
              </p>

              {submitted ? (
                <div className="text-center py-10" role="alert" aria-live="polite">
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="font-extrabold text-xl mb-2" style={{ color: "var(--color-text)" }}>বার্তা পাঠানো হয়েছে!</h4>
                  <p className="text-sm mb-6" style={{ color: "var(--color-text-muted)" }}>
                    শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", mobile: "", email: "", subject: "", message: "" }); }}
                    className="px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    আরেকটি বার্তা পাঠান
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" aria-label="যোগাযোগ ফর্ম" noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="c-name" className="block text-xs font-bold mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                        নাম <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="c-name" name="name" type="text" required
                        value={form.name} onChange={handleChange} placeholder="আপনার নাম"
                        className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: "var(--color-border)" }}
                      />
                    </div>
                    <div>
                      <label htmlFor="c-mobile" className="block text-xs font-bold mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                        মোবাইল <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="c-mobile" name="mobile" type="tel" required
                        value={form.mobile} onChange={handleChange} placeholder="01XXXXXXXXX"
                        className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: "var(--color-border)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-email" className="block text-xs font-bold mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                      Email
                    </label>
                    <input
                      id="c-email" name="email" type="email"
                      value={form.email} onChange={handleChange} placeholder="example@email.com"
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: "var(--color-border)" }}
                    />
                  </div>

                  <div>
                    <label htmlFor="c-subject" className="block text-xs font-bold mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                      বিষয় <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="c-subject" name="subject" type="text" required
                      value={form.subject} onChange={handleChange} placeholder="বার্তার বিষয়"
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: "var(--color-border)" }}
                    />
                  </div>

                  <div>
                    <label htmlFor="c-message" className="block text-xs font-bold mb-1.5" style={{ color: "var(--color-text-muted)" }}>
                      আপনার বার্তা <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="c-message" name="message" rows={4} required
                      value={form.message} onChange={handleChange} placeholder="আপনার বার্তা লিখুন..."
                      className="w-full border rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2"
                      style={{ borderColor: "var(--color-border)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5 disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)" }}
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        পাঠানো হচ্ছে...
                      </span>
                    ) : (
                      <><Send size={15} /> বার্তা পাঠান</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
