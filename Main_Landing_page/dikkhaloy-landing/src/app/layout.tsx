import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dikkhaloy — স্কুল ও মাদরাসার সম্পূর্ণ ডিজিটাল ব্যবস্থাপনা প্ল্যাটফর্ম",
  description:
    "ভর্তি, ফি কালেকশন, ডিজিটাল হাজিরা, রেজাল্ট, হিসাবরক্ষণ, নোটিশ এবং নিজস্ব ওয়েবসাইট—সবকিছু পরিচালনা করুন একটি একক প্ল্যাটফর্ম থেকে।",
  keywords: [
    "school management software bangladesh",
    "madrasa management system",
    "school software bangladesh",
    "dikkhaloy",
    "madaris",
    "স্কুল ম্যানেজমেন্ট সফটওয়্যার",
    "মাদরাসা ম্যানেজমেন্ট",
    "শিক্ষা প্রতিষ্ঠান ব্যবস্থাপনা",
  ],
  authors: [{ name: "Dikkhaloy" }],
  openGraph: {
    title: "Dikkhaloy — স্কুল ও মাদরাসার সম্পূর্ণ ডিজিটাল ব্যবস্থাপনা প্ল্যাটফর্ম",
    description:
      "Management থেকে Website, Admission থেকে Result, Finance থেকে Guardian Portal—প্রতিষ্ঠানের প্রয়োজনীয় সবকিছু একসাথে।",
    type: "website",
    locale: "bn_BD",
    url: "https://dikkhaloy.com",
    siteName: "Dikkhaloy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dikkhaloy — School & Madrasa Digital Management Platform",
    description:
      "Complete digital platform for schools and madrasas in Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        {/* Hind Siliguri for Bangla text — loaded directly as next/font doesn't support this subset */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
