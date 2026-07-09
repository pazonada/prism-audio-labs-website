import Link from "next/link";
import { SiteNav } from "@/components/prism/SiteNav";
import { SiteFooter } from "@/components/prism/SiteFooter";
import { CollectionPlayers } from "@/components/prism/CollectionPlayers";
import { WaveDivider } from "@/components/prism/WaveDivider";
import { plugins, COLLECTION_PRICE, SINGLE_PRICE } from "@/lib/prism-data";

const mono = "'IBM Plex Mono', monospace";

const linkPoints = [
  {
    n: "01",
    title: "Shape, not volume",
    body: "Link moves filter, pitch, drive and space — not just the fader. The plugins are coupled, not ducked.",
  },
  {
    n: "02",
    title: "Zero setup",
    body: "Enable Link and every plugin on the same lane finds each other. No hub, no cables, no routing to draw.",
  },
  {
    n: "03",
    title: "No latency",
    body: "Only control data crosses the bus — never audio. Nothing to gain-stage, no bleed, no added delay.",
  },
];

export default function HomePage() {
  const nodes = plugins.map((p) => ({
    num: p.num,
    name: p.name,
    role: p.role === "origin" ? "◈ origin" : "receives",
    roleColor: p.role === "origin" ? "#3DA9FC" : "#6f6d63",
  }));

  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <SiteNav theme="light" />

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
          Prism Audio Labs offer a collection of instruments built around a single idea: set a motion once, and
          the whole rack responds. New collections are released on a regular basis.
        </p>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="#pricing" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.05em", background: "#1D1C18", color: "#F8F8F5", padding: "14px 28px", borderRadius: 3 }}>
            Get the collection — ${COLLECTION_PRICE}
          </Link>
          <Link href="#link" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.05em", padding: "14px 24px", border: "1px solid #1D1C18", borderRadius: 3 }}>
            How Prism Link works →
          </Link>
        </div>
      </header>

      <WaveDivider />

      {/* COLLECTION */}
      <section id="collection" style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 48px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 18 }}>
              The collection / 05
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

      {/* PRISM LINK */}
      <section id="link" style={{ background: "#1D1C18", color: "#F8F8F5", marginTop: 80, padding: "104px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 22 }}>
              The differentiator · Prism Link
            </div>
            <h2 style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0, color: "#F4EEE1" }}>
              Every plugin
              <br />
              moves together.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "#b8b6ac", margin: "26px 0 0" }}>
              Prism Link is a shared modulation lane between your Prism plugins. Set a movement once — an
              envelope, an LFO, the groove — and the rest of the rack follows it in real time. No sidechain, no
              routing, and no audio between tracks.
            </p>
          </div>

          {/* diagram */}
          <div style={{ maxWidth: 960, margin: "64px auto 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
              {nodes.map((nd) => (
                <div key={nd.num} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: "100%", background: "#1e1d18", border: "1px solid #34322a", borderRadius: 9, padding: "16px 14px", textAlign: "center" }}>
                    <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.1em", color: "#6f6d63", marginBottom: 10 }}>{nd.num}</div>
                    <svg viewBox="0 0 84 30" width="100%" height="24" preserveAspectRatio="none">
                      <g fill="#3DA9FC" opacity="0.85">
                        <rect x="4" y="10" width="4" height="10" rx="2" />
                        <rect x="14" y="4" width="4" height="22" rx="2" />
                        <rect x="24" y="13" width="4" height="4" rx="2" />
                        <rect x="34" y="7" width="4" height="16" rx="2" />
                        <rect x="44" y="2" width="4" height="26" rx="2" />
                        <rect x="54" y="11" width="4" height="8" rx="2" />
                        <rect x="64" y="6" width="4" height="18" rx="2" />
                        <rect x="74" y="12" width="4" height="6" rx="2" />
                      </g>
                    </svg>
                    <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em", marginTop: 12 }}>{nd.name}</div>
                    <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6, color: nd.roleColor }}>
                      {nd.role}
                    </div>
                  </div>
                  <div style={{ width: 1, height: 34, background: "linear-gradient(#3DA9FC, rgba(61,169,252,0.15))" }} />
                </div>
              ))}
            </div>
            <div style={{ position: "relative", height: 56, border: "1px solid rgba(61,169,252,0.35)", background: "#191812", borderRadius: 10, display: "flex", alignItems: "center", padding: "0 22px", overflow: "hidden" }}>
              <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3DA9FC" }}>
                ◈ Prism Link — shared modulation bus
              </span>
              <span style={{ marginLeft: "auto", fontFamily: mono, fontSize: 11, letterSpacing: "0.08em", color: "#6f6d63" }}>
                control data · no audio
              </span>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 20,
                    width: 9,
                    height: 9,
                    marginTop: -4.5,
                    borderRadius: "50%",
                    background: i === 1 ? "#E9D77A" : "#3DA9FC",
                    boxShadow: `0 0 10px ${i === 1 ? "#E9D77A" : "#3DA9FC"}`,
                    animation: "busPulse 3s linear infinite",
                    animationDelay: `${i}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* three points */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40, maxWidth: 940, margin: "72px auto 0" }}>
            {linkPoints.map((pt) => (
              <div key={pt.n}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", color: "#3DA9FC", marginBottom: 14 }}>{pt.n}</div>
                <h4 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.015em", margin: "0 0 10px" }}>{pt.title}</h4>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#a6a49a", margin: 0 }}>{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ maxWidth: 1180, margin: "0 auto", padding: "104px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 18 }}>Pricing</div>
          <h2 style={{ fontSize: 52, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>Own the whole spectrum.</h2>
        </div>
        <div style={{ maxWidth: 560, margin: "0 auto", background: "#fff", border: "1px solid #e3dfd5", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "40px 40px 32px", position: "relative", overflow: "hidden" }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 14 }}>The Collection</div>
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
              Get the collection
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
