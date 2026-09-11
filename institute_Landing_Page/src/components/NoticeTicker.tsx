"use client";

interface Props {
  message: string;
}

export default function NoticeTicker({ message }: Props) {
  return (
    <div
      className="ticker-wrapper py-2 text-white text-sm font-medium no-print islamic-pattern"
      style={{ backgroundColor: "var(--color-accent, #c0392b)", background: "linear-gradient(90deg, #922b21, #c0392b, #922b21)" }}
      role="marquee"
      aria-live="polite"
      aria-label="জরুরি বিজ্ঞপ্তি"
    >
      <div className="ticker-content px-8 flex items-center gap-3">
        {/* Star icon at start */}
        <span className="text-yellow-300 shrink-0" aria-hidden="true">☪</span>
        <span>{message}</span>
        <span className="mx-4 text-white/40" aria-hidden="true">✦</span>
        <span>{message}</span>
        <span className="mx-4 text-yellow-300" aria-hidden="true">☪</span>
      </div>
    </div>
  );
}
