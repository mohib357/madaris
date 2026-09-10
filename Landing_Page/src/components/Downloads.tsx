import { Download, FileText, FileSpreadsheet, FileImage, File } from "lucide-react";
import type { DownloadItem } from "@/types/institution";

interface Props {
  downloads: DownloadItem[];
}

function FileIcon({ type }: { type: string }) {
  const t = type.toLowerCase();
  if (t === "pdf") return <FileText size={20} />;
  if (t === "xlsx" || t === "xls") return <FileSpreadsheet size={20} />;
  if (t === "jpg" || t === "png") return <FileImage size={20} />;
  return <File size={20} />;
}

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  pdf:  { bg: "#fee2e2", color: "#dc2626" },
  xlsx: { bg: "#dcfce7", color: "#16a34a" },
  xls:  { bg: "#dcfce7", color: "#16a34a" },
  doc:  { bg: "#dbeafe", color: "#2563eb" },
  docx: { bg: "#dbeafe", color: "#2563eb" },
  jpg:  { bg: "#fef9c3", color: "#a16207" },
  png:  { bg: "#fef9c3", color: "#a16207" },
};

export default function Downloads({ downloads }: Props) {
  return (
    <section
      id="downloads"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg)" }}
      aria-label="ডাউনলোড কেন্দ্র"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4 border"
            style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", borderColor: "var(--color-primary-light)" }}
          >
            ডকুমেন্ট
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: "var(--color-primary)" }}>
            গুরুত্বপূর্ণ ডকুমেন্ট
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="h-0.5 w-10 rounded" style={{ backgroundColor: "var(--color-gold)" }} />
          </div>
          <p className="text-sm md:text-base" style={{ color: "var(--color-text-muted)" }}>
            প্রয়োজনীয় ফর্ম, রুটিন ও অন্যান্য ডকুমেন্ট ডাউনলোড করুন
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {downloads.map((item) => {
            const typeKey = item.fileType.toLowerCase();
            const typeStyle = TYPE_COLORS[typeKey] ?? { bg: "var(--color-primary-light)", color: "var(--color-primary)" };
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl flex items-center gap-4 p-4 shadow-sm border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                style={{ borderColor: "var(--color-border)" }}
              >
                {/* File type icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: typeStyle.bg, color: typeStyle.color }}
                  aria-hidden="true"
                >
                  <FileIcon type={typeKey} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate" style={{ color: "var(--color-text)" }}>
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-md uppercase"
                      style={{ backgroundColor: typeStyle.bg, color: typeStyle.color }}
                    >
                      {item.fileType}
                    </span>
                    <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      {item.fileSize}
                    </span>
                  </div>
                </div>

                {/* Download button */}
                <a
                  href={item.url}
                  download
                  className="download-btn shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                  aria-label={`${item.title} ডাউনলোড করুন`}
                >
                  <Download size={16} aria-hidden="true" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
