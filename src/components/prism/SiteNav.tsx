import Link from "next/link";
import { PrismMark, Wordmark } from "./PrismMark";

const mono = "'IBM Plex Mono', monospace";

export function SiteNav({ theme = "light" }: { theme?: "light" | "dark" }) {
  const dark = theme === "dark";
  const prefix = dark ? "/" : "";
  const links = [
    { label: "Plugins", href: `${prefix}#collection` },
    { label: "Prism Link", href: `${prefix}#link` },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: `${prefix}#` },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 48px",
        background: dark ? "rgba(29,28,24,0.84)" : "rgba(248,248,245,0.86)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: `1px solid ${dark ? "#2a2820" : "#e3dfd5"}`,
      }}
    >
      <Link
        href={dark ? "/" : "#"}
        style={{ display: "flex", alignItems: "center", gap: 12, color: dark ? "#F1EFE8" : "#1D1C18" }}
      >
        <PrismMark size={30} stroke={dark ? "#F1EFE8" : "#1D1C18"} />
        <Wordmark size={17} />
      </Link>

      <div
        style={{
          display: "flex",
          gap: 36,
          fontFamily: mono,
          fontSize: 12.5,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: dark ? "#a6a49a" : "#57564c",
        }}
      >
        {links.map((l) => (
          <Link key={l.label} href={l.href} style={{ color: "inherit" }}>
            {l.label}
          </Link>
        ))}
      </div>

      <Link
        href={dark ? "#buy" : "#pricing"}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: 12.5,
          letterSpacing: "0.06em",
          background: dark ? "#8E2F39" : "#1D1C18",
          color: dark ? "#fff" : "#F8F8F5",
          padding: "10px 20px",
          borderRadius: 3,
        }}
      >
        Join waitlist
      </Link>
    </nav>
  );
}
