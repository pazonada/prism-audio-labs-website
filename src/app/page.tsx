import Link from "next/link";
import { SiteNav } from "@/components/prism/SiteNav";
import { SiteFooter } from "@/components/prism/SiteFooter";
import { CollectionPlayers } from "@/components/prism/CollectionPlayers";
import { WaveDivider } from "@/components/prism/WaveDivider";
import { COLLECTION_PRICE, SINGLE_PRICE } from "@/lib/prism-data";

const mono = "'IBM Plex Mono', monospace";

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <SiteNav theme="light" home />

      {/* HERO */}
      <header style={{ position: "relative", zIndex: 0, overflow: "hidden", padding: "96px 48px 20px", maxWidth: 1180, margin: "0 auto" }}>
        <svg
          width="620"
          height="560"
          viewBox="0 0 620 560"
          fill="none"
          style={{ position: "absolute", right: -120, top: -120, zIndex: -1, opacity: 0.5, pointerEvents: "none" }}
        >
          <g fill="none" stroke="#d4d0c5" strokeWidth="1.2">
            <circle cx="560" cy="30" r="120" />
            <circle cx="560" cy="30" r="185" />
            <circle cx="560" cy="30" r="250" stroke="#3DA9FC" strokeOpacity="0.4" />
            <circle cx="560" cy="30" r="315" />
            <circle cx="560" cy="30" r="380" />
            <circle cx="560" cy="30" r="445" />
          </g>
        </svg>
        <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 26 }}>
          Five instruments · one modulation bus
        </div>
        <h1 style={{ fontSize: 92, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.94, margin: 0, maxWidth: 900 }}>
          Plugins that move together.
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: "#4a4940", maxWidth: 540, margin: "30px 0 38px" }}>
          Prism Audio Labs make instruments built around a single idea: set a motion once, and the whole rack
          responds. We release new plugins regularly — and every one works together through Prism Link.
        </p>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="#pricing" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.05em", background: "#1D1C18", color: "#F8F8F5", padding: "14px 28px", borderRadius: 3 }}>
            Get this release — ${COLLECTION_PRICE}
          </Link>
        </div>
      </header>

      <WaveDivider />

      {/* COLLECTION */}
      <section id="plugins" style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 48px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 18 }}>
              This release / 05
            </div>
            <h2 style={{ fontSize: 52, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
              Five tools launch
              <br />
              endless exploration.
            </h2>
          </div>
          <p style={{ fontFamily: mono, fontSize: 12.5, lineHeight: 1.75, color: "#57564c", maxWidth: 340, margin: 0 }}>
            Each instrument ships with its own interface, presets and sample library on its product page.
          </p>
        </div>
        <CollectionPlayers />
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ maxWidth: 1180, margin: "0 auto", padding: "104px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 18 }}>Pricing</div>
          <h2 style={{ fontSize: 52, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>Own the whole spectrum.</h2>
        </div>
        <div style={{ maxWidth: 560, margin: "0 auto", background: "#fff", border: "1px solid #e3dfd5", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "40px 40px 32px", position: "relative", overflow: "hidden" }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 14 }}>This release</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
              <span style={{ fontSize: 64, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.9 }}>${COLLECTION_PRICE}</span>
              <span style={{ fontFamily: mono, fontSize: 12.5, color: "#8a897d", paddingBottom: 10 }}>all five instruments + Prism Link</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "30px 0 32px" }}>
              {[
                "Lunar, Seismic, Dragon, Stellar & Comet — VST3, AU, AAX",
                "Prism Link shared modulation bus",
                "Free updates, forever",
                "30-day money-back guarantee",
              ].map((line) => (
                <div key={line} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 15, color: "#3a3a33" }}>
                  <span style={{ color: "#3DA9FC" }}>✦</span> {line}
                </div>
              ))}
            </div>
            <Link href="#" style={{ display: "block", textAlign: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13.5, letterSpacing: "0.05em", background: "#1D1C18", color: "#F8F8F5", padding: 15, borderRadius: 4 }}>
              Get this release
            </Link>
          </div>
          <div style={{ borderTop: "1px solid #e3dfd5", padding: "18px 40px", fontFamily: mono, fontSize: 12, color: "#8a897d", textAlign: "center", background: "#F8F8F5" }}>
            Prefer to start small? Each plugin is <span style={{ color: "#1D1C18" }}>${SINGLE_PRICE}</span> on its own.
          </div>
        </div>
      </section>

      <SiteFooter variant="full" />
    </div>
  );
}
