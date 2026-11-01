import Link from "next/link";
import { PrismMark, Wordmark } from "./PrismMark";

const mono = "'IBM Plex Mono', monospace";

const links = [
  { label: "The instrument", href: "/instrument" },
  { label: "Pattern library", href: "/patterns" },
  { label: "Listen", href: "/listen" },
  { label: "Buy", href: "/pricing" },
];

export function KoraFooter() {
  return (
    <footer style={{ background: "#1D1C18", color: "#F1EFE8", padding: "64px 48px 40px" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
          paddingBottom: 32,
          borderBottom: "1px solid #2a2820",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, color: "#F1EFE8" }}>
          <PrismMark size={28} stroke="#F1EFE8" />
          <Wordmark size={16} />
        </Link>
        <div
          style={{
            display: "flex",
            gap: 30,
            flexWrap: "wrap",
            fontFamily: mono,
            fontSize: 12.5,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#a6a49a",
          }}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "inherit" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          paddingTop: 26,
          fontFamily: mono,
          fontSize: 11.5,
          color: "#6f6d63",
        }}
      >
        <span>© 2026 Prism Audio Labs · Built in JUCE. Modelled, not sampled.</span>
        <span>hello@prismaudiolabs.co</span>
      </div>
    </footer>
  );
}
