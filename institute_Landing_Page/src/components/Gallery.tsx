"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import type { GalleryItem } from "@/types/institution";

interface Props {
  gallery: GalleryItem[];
}

const ALL = "All";

export default function Gallery({ gallery }: Props) {
  const categories = [ALL, ...Array.from(new Set(gallery.map((g) => g.category)))];
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === ALL
      ? gallery
      : gallery.filter((g) => g.category === activeCategory);

  return (
    <section
      id="gallery"
      className="section-padding"
      style={{ backgroundColor: "var(--color-primary-light)" }}
      aria-label="ফটো গ্যালারি"
    >
      <div className="container-custom">
        <span className="tag mx-auto block w-fit mb-3">গ্যালারি</span>
        <h2 className="section-heading">ক্যাম্পাসের কিছু মুহূর্ত</h2>
        <p className="section-subheading">আমাদের প্রাণবন্ত ক্যাম্পাস জীবনের ঝলক</p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="গ্যালারি ফিল্টার">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
              style={activeCategory === cat ? { backgroundColor: "var(--color-primary)" } : undefined}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group focus:outline-none focus-visible:ring-2"
              style={{ "--tw-ring-color": "var(--color-primary)" } as React.CSSProperties}
              aria-label={`${item.title} বড় করে দেখুন`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </div>
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium">{item.title}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="btn-outline-colored">সকল ছবি দেখুন →</a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="বন্ধ করুন"
          >
            <X size={20} />
          </button>
          <div
            className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.title}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <p className="absolute bottom-6 text-white/80 text-sm">{lightbox.title}</p>
        </div>
      )}
    </section>
  );
}
