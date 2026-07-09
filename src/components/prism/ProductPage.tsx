import Link from "next/link";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { ProductDemo } from "./ProductDemo";
import { ImageSlot } from "./ImageSlot";
import { plugins, COLLECTION_PRICE } from "@/lib/prism-data";
import type { ProductData } from "@/lib/products";

const mono = "'IBM Plex Mono', monospace";
const btn = { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 } as const;

// Four line-icons, one per feature slot (matches the Seismic design).
const featureIcons = [
  <path key="w" d="M2 13h3l2-7 3 14 3-11 2 8 2-4h4" strokeLinecap="round" strokeLinejoin="round" />,
  <g key="g">
    <rect x="2" y="2" width="22" height="22" rx="2" />
    <path d="M9 2v22M16 2v22M2 9h22M2 16h22" strokeOpacity="0.5" />
  </g>,
  <path key="l" d="M10 16a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-1 1M16 10a5 5 0 0 1 0 7l-3 3a5 5 0 0 1-7-7l1-1" strokeLinecap="round" />,
  <g key="c">
    <circle cx="13" cy="13" r="9" />
    <path d="M13 6v7l4 3" strokeLinecap="round" />
  </g>,
];

export function ProductPage({ product: p }: { product: ProductData }) {
  const accent = p.accent;

  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <SiteNav theme="dark" />

      {/* HERO (dark) */}
      <header style={{ position: "relative", zIndex: 0, overflow: "hidden", background: "#1D1C18", color: "#F1EFE8" }}>
        <svg width="640" height="600" viewBox="0 0 640 600" fill="none" style={{ position: "absolute", right: -120, top: -150, zIndex: 0, opacity: 0.6, pointerEvents: "none" }}>
          <g fill="none" strokeWidth="1.1">
            <circle cx="560" cy="40" r="120" stroke="#3a2a2c" />
            <circle cx="560" cy="40" r="185" stroke="#3a2a2c" />
            <circle cx="560" cy="40" r="250" stroke={accent} strokeOpacity="0.45" />
            <circle cx="560" cy="40" r="315" stroke="#3a2a2c" />
            <circle cx="560" cy="40" r="380" stroke="#E9D77A" strokeOpacity="0.18" />
            <circle cx="560" cy="40" r="445" stroke="#3a2a2c" />
          </g>
        </svg>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "34px 48px 72px" }}>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.08em", color: "#8a897d", marginBottom: 44 }}>
            <Link href="/" style={{ color: "#8a897d" }}>Home</Link> /{" "}
            <Link href="/#collection" style={{ color: "#8a897d" }}>Collection</Link> /{" "}
            <span style={{ color: "#F1EFE8" }}>{p.name}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 64, alignItems: "center" }}>
            <div>
              <h1 style={{ fontSize: 92, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.9, margin: 0, color: "#F4EEE1" }}>{p.name}</h1>
              <p style={{ fontSize: 19, lineHeight: 1.6, color: "#b3b1a7", maxWidth: 480, margin: "24px 0 30px" }}>{p.heroDesc}</p>
              <div style={{ display: "flex", gap: 20, marginBottom: 34, fontFamily: mono, fontSize: 12, letterSpacing: "0.05em", color: "#8a897d" }}>
                {p.heroSpecChips.map((chip, i) => (
                  <span key={chip} style={{ display: "flex", gap: 20 }}>
                    {i > 0 && <span style={{ color: "#3a3830" }}>|</span>}
                    <span>{chip}</span>
                  </span>
                ))}
              </div>
              <div id="buy" style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
                <Link href="#" style={{ ...btn, fontSize: 13.5, letterSpacing: "0.05em", background: accent, color: "#fff", padding: "15px 30px", borderRadius: 3 }}>
                  Buy {p.name} — {p.buyPrice}
                </Link>
                <Link href="/#pricing" style={{ ...btn, fontSize: 13.5, letterSpacing: "0.05em", padding: "14px 26px", border: "1px solid rgba(241,239,232,0.35)", color: "#F1EFE8", borderRadius: 3 }}>
                  Get all five — ${COLLECTION_PRICE}
                </Link>
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "4 / 3", background: "#1c1b16", border: "1px solid #34322a", borderRadius: 14, overflow: "hidden", boxShadow: "0 40px 80px -40px rgba(0,0,0,0.6)" }}>
              <ImageSlot label={p.imageSlots.hero} />
            </div>
          </div>
        </div>
      </header>

      {/* WALKTHROUGH / VIDEO */}
      {p.sections.showVideo && p.walkthrough && (
        <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginBottom: 16 }}>{p.walkthrough.kicker}</div>
              <h2 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1, margin: 0 }}>{p.walkthrough.heading}</h2>
            </div>
            <p style={{ fontFamily: mono, fontSize: 12, lineHeight: 1.7, color: "#8a897d", maxWidth: 300, margin: 0 }}>{p.walkthrough.sideNote}</p>
          </div>
          <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#1D1C18", border: "1px solid #e3dfd5", borderRadius: 14, overflow: "hidden" }}>
            {p.imageSlots.video && <ImageSlot label={p.imageSlots.video} />}
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, pointerEvents: "none" }}>
              <div style={{ width: 78, height: 78, borderRadius: "50%", background: accent, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 40px rgba(142,47,57,0.5)" }}>
                <div style={{ width: 0, height: 0, borderTop: "13px solid transparent", borderBottom: "13px solid transparent", borderLeft: "20px solid #fff", marginLeft: 5 }} />
              </div>
              <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Product video · embed</span>
            </div>
          </div>
        </section>
      )}

      {/* HEAR IT */}
      {p.sections.showDemo && (
        <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px 0" }}>
          <ProductDemo accent={accent} demoKits={p.demoKits} heading={p.hearItHeading} />
        </section>
      )}

      {/* FEATURES */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 48px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {p.features.map((f, i) => (
            <div key={f.title} style={{ background: "#fff", border: "1px solid #e3dfd5", borderRadius: 10, padding: 26 }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke={accent} strokeWidth="1.7" style={{ marginBottom: 16 }}>
                {featureIcons[i % featureIcons.length]}
              </svg>
              <h4 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.015em", margin: "0 0 8px" }}>{f.title}</h4>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#57564c", margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 48px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginBottom: 18 }}>{p.about.kicker}</div>
            <h2 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.02, margin: 0 }}>{p.about.heading}</h2>
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: "#3a3a33" }}>
            {p.about.paragraphs.map((para, i) => (
              <p key={i} style={{ margin: i === p.about.paragraphs.length - 1 ? 0 : "0 0 20px" }}>{para}</p>
            ))}
          </div>
        </div>
        {p.imageSlots.detail && (
          <div style={{ position: "relative", aspectRatio: "16 / 7", background: "#fff", border: "1px solid #e3dfd5", borderRadius: 14, overflow: "hidden", marginTop: 48 }}>
            <ImageSlot label={p.imageSlots.detail} />
          </div>
        )}
      </section>

      {/* SPECIFICATIONS */}
      <section style={{ padding: "96px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginBottom: 18 }}>Specifications</div>
          <h2 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1, margin: "0 0 48px" }}>Here&apos;s everything under the hood.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "#e3dfd5", border: "1px solid #e3dfd5", borderRadius: 12, overflow: "hidden" }}>
            {p.specs.map((sp) => (
              <div key={sp.label} style={{ background: "#ffffff", padding: "26px 28px" }}>
                <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a897d", marginBottom: 12 }}>{sp.label}</div>
                <div style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.01em", color: "#1D1C18" }}>{sp.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRISM LINK BAND (oxblood) */}
      <section style={{ background: "linear-gradient(135deg,#7d2a33,#571e26)", color: "#F7E9EA", padding: "100px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E9B7BC", marginBottom: 20 }}>{p.prismLink.kicker}</div>
            <h2 style={{ fontSize: 52, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 22px", color: "#F5EEE2" }}>{p.prismLink.heading}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "#e7cccf", margin: "0 0 30px", maxWidth: 460 }}>{p.prismLink.body}</p>
            <Link href="/#link" style={{ ...btn, fontSize: 13, letterSpacing: "0.05em", color: "#fff", border: "1px solid rgba(255,255,255,0.5)", padding: "13px 24px", borderRadius: 3, display: "inline-block" }}>
              {p.prismLink.ctaText}
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {p.prismLink.chips.map((st) => (
              <span key={st} style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.04em", color: "#fff", background: "rgba(0,0,0,0.22)", border: "1px solid rgba(255,255,255,0.22)", padding: "11px 16px", borderRadius: 100 }}>
                {st}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PART OF THE COLLECTION */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 16 }}>Part of the Spectrum collection</div>
          <h2 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1, margin: 0 }}>Better together.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14, marginBottom: 40 }}>
          {plugins.map((f) => {
            const current = f.slug === p.slug;
            return (
              <Link
                key={f.slug}
                href={`/plugins/${f.slug}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#fff",
                  border: `1px solid ${current ? accent : "#e3dfd5"}`,
                  borderRadius: 10,
                  padding: "22px 12px",
                  boxShadow: current ? "0 0 0 3px rgba(142,47,57,0.12)" : undefined,
                }}
              >
                <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em", color: current ? accent : "#1D1C18" }}>{f.name}</div>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a897d", marginTop: 6 }}>{f.shortTag}</div>
              </Link>
            );
          })}
        </div>
        <div style={{ background: "#1D1C18", color: "#F1EFE8", borderRadius: 14, padding: "40px 44px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.025em", marginBottom: 8 }}>Get all five + Prism Link — ${COLLECTION_PRICE}</div>
            <div style={{ fontSize: 14.5, color: "#a6a49a" }}>Save over buying individually. Free updates, forever · 30-day money-back guarantee.</div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/#pricing" style={{ ...btn, fontSize: 13.5, letterSpacing: "0.05em", background: accent, color: "#fff", padding: "15px 28px", borderRadius: 3 }}>Get the collection</Link>
            <Link href="#" style={{ ...btn, fontSize: 13.5, letterSpacing: "0.05em", border: "1px solid rgba(241,239,232,0.35)", color: "#F1EFE8", padding: "14px 26px", borderRadius: 3 }}>Buy {p.name} — {p.buyPrice}</Link>
          </div>
        </div>
      </section>

      <SiteFooter variant="mini" />
    </div>
  );
}
