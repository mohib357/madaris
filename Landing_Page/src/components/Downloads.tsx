import { Download, FileText } from "lucide-react";
import type { DownloadItem } from "@/types/institution";

interface Props {
  downloads: DownloadItem[];
}

export default function Downloads({ downloads }: Props) {
  return (
    <section
      id="downloads"
      className="section-padding bg-white"
      aria-label="ডাউনলোড কেন্দ্র"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">ডকুমেন্ট</span>
        <h2 className="section-heading">📥 গুরুত্বপূর্ণ ডকুমেন্ট</h2>
        <p className="section-subheading">
          প্রয়োজনীয় ফর্ম, রুটিন ও অন্যান্য ডকুমেন্ট ডাউনলোড করুন
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="card flex items-center gap-4 p-4 group hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "var(--color-primary-light)" }}
                aria-hidden="true"
              >
                <FileText size={22} style={{ color: "var(--color-primary)" }} />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-sm truncate">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {item.fileType} • {item.fileSize}
                </p>
              </div>

              {/* Download button */}
              <a
                href={item.url}
                download
                className="download-btn shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                aria-label={`${item.title} ডাউনলোড করুন`}
              >
                <Download size={16} aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
