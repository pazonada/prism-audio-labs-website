import Link from "next/link";
import { PrismMark, Wordmark } from "./PrismMark";

const mono = "'IBM Plex Mono', monospace";

export function SiteNav({
  theme = "light",
  home = false,
}: {
  theme?: "light" | "dark";
  home?: boolean;
}) {
  const dark = theme === "dark";
  // Homepage anchors are local on the homepage, but must be prefixed with "/"
  // everywhere else so they jump back to the homepage section.
  const prefix = home ? "" : "/";
  const links = [
    { label: "Plugins", href: `${prefix}#plugins` },
    { label: "Learn", href: "/learn" },
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
        href="/"
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
        href={dark ? "#buy" : `${prefix}#pricing`}
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
