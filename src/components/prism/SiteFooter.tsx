import Link from "next/link";
import { PrismMark, Wordmark } from "./PrismMark";
import { plugins } from "@/lib/prism-data";

const mono = "'IBM Plex Mono', monospace";
const colLabel: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#6f6d63",
  marginBottom: 18,
};
const colLink: React.CSSProperties = { color: "#c9c7bd", fontSize: 14 };

export function SiteFooter({ variant = "full" }: { variant?: "full" | "mini" }) {
  if (variant === "mini") {
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
              fontFamily: mono,
              fontSize: 12.5,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#a6a49a",
            }}
          >
            <Link href="/#collection" style={{ color: "inherit" }}>Plugins</Link>
            <Link href="/#link" style={{ color: "inherit" }}>Prism Link</Link>
            <Link href="/#pricing" style={{ color: "inherit" }}>Pricing</Link>
            <Link href="#" style={{ color: "inherit" }}>Support</Link>
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
          <span>© 2026 Prism Audio Labs</span>
          <span>hello@prismaudiolabs.co</span>
        </div>
      </footer>
    );
  }

  return (
    <footer style={{ background: "#1D1C18", color: "#F8F8F5", padding: "72px 48px 40px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 40,
            paddingBottom: 56,
            borderBottom: "1px solid #2a2820",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <PrismMark size={28} stroke="#F8F8F5" />
              <Wordmark size={16} />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "#8a897d", maxWidth: 300, margin: 0 }}>
              Five instruments that move as one. Built around a shared modulation bus — set the motion
              once, the whole rack responds.
            </p>
          </div>
          <div>
            <div style={colLabel}>Plugins</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {plugins.map((p) => (
                <Link
                  key={p.slug}
                  href={p.slug === "seismic" ? "/plugins/seismic" : "#"}
                  style={colLink}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div style={colLabel}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              <Link href="#link" style={colLink}>Prism Link</Link>
              <Link href="#pricing" style={colLink}>Pricing</Link>
              <Link href="#" style={colLink}>About</Link>
              <Link href="#" style={colLink}>Contact</Link>
            </div>
          </div>
          <div>
            <div style={colLabel}>Support</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              <Link href="#" style={colLink}>Documentation</Link>
              <Link href="#" style={colLink}>Installation</Link>
              <Link href="#" style={colLink}>System reqs</Link>
              <Link href="#" style={colLink}>FAQ</Link>
            </div>
          </div>
        </div>
        <div
          style={{
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
          <span>© 2026 Prism Audio Labs</span>
          <div style={{ display: "flex", gap: 26 }}>
            <Link href="#" style={{ color: "#6f6d63" }}>Privacy</Link>
            <Link href="#" style={{ color: "#6f6d63" }}>Terms</Link>
            <Link href="#" style={{ color: "#6f6d63" }}>License</Link>
            <span>hello@prismaudiolabs.co</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
