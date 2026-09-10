import type { Event } from "@/types/institution";
import { Clock, MapPin, CalendarDays } from "lucide-react";

interface Props {
  events: Event[];
}

const MONTH_COLORS = [
  { bg: "linear-gradient(135deg, #1a5276 0%, #154360 100%)" },
  { bg: "linear-gradient(135deg, #1e8449 0%, #145a32 100%)" },
  { bg: "linear-gradient(135deg, #9a7d0a 0%, #7d6608 100%)" },
  { bg: "linear-gradient(135deg, #7d3c98 0%, #6c3483 100%)" },
];

export default function Events({ events }: Props) {
  return (
    <section
      id="events"
      className="section-padding bg-white"
      aria-label="আসন্ন কার্যক্রম"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border"
            style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderColor: "var(--color-primary-light)" }}
          >
            কার্যক্রম
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: "var(--color-primary)" }}>
            আসন্ন কার্যক্রম
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
          <p className="text-sm md:text-base" style={{ color: "var(--color-text-muted)" }}>
            আমাদের আসন্ন অনুষ্ঠান ও কর্মসূচি
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, i) => {
            const colorStyle = MONTH_COLORS[i % MONTH_COLORS.length];
            return (
              <div
                key={event.id}
                className="group rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 bg-white"
                style={{ borderColor: "var(--color-border)" }}
              >
                {/* Date header */}
                <div
                  className="flex flex-col items-center justify-center py-6 relative overflow-hidden"
                  style={{ background: colorStyle.bg }}
                  aria-label={`তারিখ: ${event.date} ${event.month}`}
                >
                  {/* Decorative circle */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white/10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/5" />

                  <CalendarDays size={14} className="text-white/60 mb-1" aria-hidden="true" />
                  <span className="text-white/80 text-xs font-bold tracking-widest uppercase">
                    {event.month}
                  </span>
                  <span className="text-white text-5xl font-extrabold leading-none mt-1">
                    {event.date}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-extrabold mb-3 leading-snug text-sm group-hover:opacity-80 transition-opacity" style={{ color: "var(--color-text)" }}>
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2" style={{ color: "var(--color-text-muted)" }}>
                      <Clock size={12} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: "var(--color-text-muted)" }}>
                      <MapPin size={12} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-xs mt-3 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
