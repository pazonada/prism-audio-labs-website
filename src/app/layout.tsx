import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Prism Kora — a modelled West African bridge harp",
    template: "%s | Prism Audio Labs",
  },
  description:
    "Kora is a 21-string West African harp, built as a physical model — so it answers to the way you play, instead of replaying the way someone else did. Four tunings, 1,030 patterns, about 110 MB.",
  metadataBase: new URL("https://prismaudiolabs.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prismaudiolabs.co",
    siteName: "Prism Audio Labs",
    title: "Prism Kora — a modelled West African bridge harp",
    description:
      "A physically-modelled kora. Four historical tunings, 1,030 patterns, 25 demos. Modelled, not sampled.",
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
