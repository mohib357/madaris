import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dikkhaloy — Institution Landing Page",
  description: "Powered by Dikkhaloy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
