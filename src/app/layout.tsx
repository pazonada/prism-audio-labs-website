import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Prism — Plugins that move together.",
    template: "%s | Prism Audio Labs",
  },
  description:
    "Prism is a collection of five instruments built around a single idea: set a motion once, and the whole rack responds. Meet Prism Link — one shared modulation bus.",
  metadataBase: new URL("https://prismaudiolabs.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prismaudiolabs.co",
    siteName: "Prism Audio Labs",
    title: "Prism — Plugins that move together.",
    description:
      "Five instruments, one modulation bus. Set a motion once and the whole rack responds.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
