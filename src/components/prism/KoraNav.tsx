import Link from "next/link";
import { PrismMark, Wordmark } from "./PrismMark";
import { PRICE } from "@/lib/kora";

const mono = "'IBM Plex Mono', monospace";

const links = [
  { label: "The instrument", href: "/instrument" },
  { label: "Pattern library", href: "/patterns" },
  { label: "Listen", href: "/listen" },
];

export function KoraNav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        flexWrap: "wrap",
        padding: "18px 48px",
        background: "rgba(248,248,245,0.86)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid #e3dfd5",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, color: "#1D1C18" }}>
        <PrismMark size={30} stroke="#1D1C18" />
        <Wordmark size={17} />
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
          flexWrap: "wrap",
          fontFamily: mono,
          fontSize: 12.5,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#57564c",
        }}
      >
        {links.map((l) => (
          <Link key={l.href} href={l.href} style={{ color: "inherit" }}>
            {l.label}
          </Link>
        ))}
        <Link
          href="/pricing"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            textTransform: "none",
            letterSpacing: "0.02em",
            background: "#1D1C18",
            color: "#F8F8F5",
            padding: "10px 20px",
            borderRadius: 3,
          }}
        >
          Buy — {PRICE}
        </Link>
      </div>
    </nav>
  );
}
