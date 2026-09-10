import type { Event } from "@/types/institution";
import { Clock, MapPin } from "lucide-react";

interface Props {
  events: Event[];
}

export default function Events({ events }: Props) {
  return (
    <section
      id="events"
      className="section-padding bg-white"
      aria-label="আসন্ন কার্যক্রম"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">কার্যক্রম</span>
        <h2 className="section-heading">📅 আসন্ন কার্যক্রম</h2>
        <p className="section-subheading">আমাদের আসন্ন অনুষ্ঠান ও কর্মসূচি</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((event) => (
            <div
              key={event.id}
              className="card overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Date badge */}
              <div
                className="flex flex-col items-center justify-center py-4"
                style={{ backgroundColor: "var(--color-primary)" }}
                aria-label={`তারিখ: ${event.date} ${event.month}`}
              >
                <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                  {event.month}
                </span>
                <span className="text-white text-4xl font-extrabold leading-none">
                  {event.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-slate-800 mb-3 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock size={12} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
