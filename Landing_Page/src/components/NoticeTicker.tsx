"use client";

interface Props {
  message: string;
}

export default function NoticeTicker({ message }: Props) {
  return (
    <div
      className="ticker-wrapper py-2 text-white text-sm font-medium no-print"
      style={{ backgroundColor: "var(--color-primary)" }}
      role="marquee"
      aria-live="polite"
      aria-label="জরুরি বিজ্ঞপ্তি"
    >
      <div className="ticker-content px-8">
        {message}&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;{message}
      </div>
    </div>
  );
}
