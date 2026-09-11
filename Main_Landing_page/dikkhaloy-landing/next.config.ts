import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Turbopack is stable in Next 15
  experimental: {},
};

export default nextConfig;
