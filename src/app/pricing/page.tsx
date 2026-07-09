import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/prism/SiteNav";
import { SiteFooter } from "@/components/prism/SiteFooter";
import { plugins, COLLECTION_PRICE, SINGLE_PRICE } from "@/lib/prism-data";

const mono = "'IBM Plex Mono', monospace";
const btn = { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 } as const;

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Get five instruments and Prism Link. Buy the collection once for $129, or pick up any plugin for $39. Free updates forever, 30-day money-back guarantee.",
};

const singlePerks = [
  "Any one instrument, fully unlocked",
  "VST3 · AU · AAX",
  "Prism Link built in",
  "Free updates, forever",
];
const collectionPerks = [
  "Lunar, Seismic, Dragon, Stellar & Comet",
  "Prism Link shared modulation bus",
  "VST3 · AU · AAX · Apple Silicon",
  "Free updates + 30-day money-back",
];
const included = [
  { label: "Formats", value: "VST3 · AU · AAX", note: "64-bit, Apple Silicon native, macOS 11+ and Windows 10+." },
  { label: "Licensing", value: "3 machines", note: "Install on up to three of your own computers. No subscription." },
  { label: "Updates", value: "Free, forever", note: "Every future version is included once you own a plugin or the collection." },
  { label: "Guarantee", value: "30-day refund", note: "Not for you? Email us within 30 days for a full refund, no questions." },
];
const faqs = [
  { q: "Can I buy one plugin and add more later?", a: "Yes. Buy any instrument for $39 and add the others whenever you like — each one works on its own, and they all link together through Prism Link." },
  { q: "Do I need the whole collection to use Prism Link?", a: "No — Prism Link ships in every instrument. Any two Prism plugins can link, though the rack comes alive fastest with Seismic driving it." },
  { q: "What formats and systems are supported?", a: "VST3, AU and AAX on macOS 11+ and Windows 10+ — 64-bit, and native on Apple Silicon." },
  { q: "What's your refund policy?", a: "Thirty days, no questions asked. If it isn't for you, email us for a full refund." },
  { q: "Are updates really free?", a: "Always. Every future update is free for life once you own a plugin or the collection — no subscription, ever." },
];

function Perk({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 11, alignItems: "center", fontSize: 14.5 }}>
      <span style={{ color: "#3DA9FC" }}>✦</span> {children}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <SiteNav theme="light" />

      {/* HEADER */}
      <header style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 48px 56px", textAlign: "center" }}>
        <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 22 }}>Pricing</div>
        <h1 style={{ fontSize: 76, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.95, margin: 0 }}>Own the whole spectrum.</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4a4940", maxWidth: 560, margin: "26px auto 0" }}>
          Get five instruments and Prism Link. Either buy the collection once, or pick up any plugin on its own.
          Every purchase includes free updates, forever.
        </p>
      </header>

      {/* PLANS */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 24, alignItems: "stretch" }}>
          {/* single */}
          <div style={{ background: "#fff", border: "1px solid #e3dfd5", borderRadius: 16, padding: 40, display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a897d", marginBottom: 16 }}>Single instrument</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: 58, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.9 }}>${SINGLE_PRICE}</span>
              <span style={{ fontFamily: mono, fontSize: 12.5, color: "#8a897d", paddingBottom: 9 }}>per plugin</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#57564c", margin: "14px 0 26px" }}>
              Start with the one you need, and add the others whenever you like.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 30, color: "#3a3a33" }}>
              {singlePerks.map((t) => <Perk key={t}>{t}</Perk>)}
            </div>
            <Link href="#individual" style={{ ...btn, marginTop: "auto", textAlign: "center", fontSize: 14, color: "#1D1C18", border: "1px solid #1D1C18", padding: 14, borderRadius: 4 }}>
              Browse instruments
            </Link>
          </div>

          {/* collection (featured) */}
          <div style={{ position: "relative", background: "#1D1C18", color: "#F1EFE8", borderRadius: 16, padding: 40, display: "flex", flexDirection: "column", boxShadow: "0 40px 80px -40px rgba(0,0,0,0.5)" }}>
            <div style={{ position: "absolute", top: 24, right: 24, fontFamily: mono, fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1D1C18", background: "#3DA9FC", padding: "6px 12px", borderRadius: 100 }}>
              Complete set
            </div>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8fb9d8", marginBottom: 16 }}>The Collection</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 6 }}>
              <span style={{ fontSize: 58, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.9, color: "#F4EEE1" }}>${COLLECTION_PRICE}</span>
              <span style={{ fontFamily: mono, fontSize: 12.5, color: "#a6a49a", paddingBottom: 9 }}>all five + Prism Link</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#b3b1a7", margin: "14px 0 26px" }}>
              Every instrument, one price — the whole rack, ready to move together out of the box.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 30, color: "#e7e5db" }}>
              {collectionPerks.map((t) => <Perk key={t}>{t}</Perk>)}
            </div>
            <Link href="#" style={{ ...btn, marginTop: "auto", textAlign: "center", fontSize: 14, background: "#8E2F39", color: "#fff", padding: 15, borderRadius: 4 }}>
              Get the collection
            </Link>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL GRID */}
      <section id="individual" style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 48px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 16 }}>Buy individually</div>
          <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1, margin: 0 }}>${SINGLE_PRICE} each. Take your pick.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14 }}>
          {plugins.map((it) => (
            <div key={it.slug} style={{ background: "#fff", border: "1px solid #e3dfd5", borderRadius: 12, padding: "26px 20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>{it.name}</div>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a897d" }}>{it.shortTag}</div>
              <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", margin: "16px 0 14px" }}>${SINGLE_PRICE}</div>
              <Link href={`/plugins/${it.slug}`} style={{ ...btn, width: "100%", textAlign: "center", fontSize: 13, background: "#8E2F39", color: "#fff", padding: 10, borderRadius: 3 }}>
                View
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* INCLUDED STRIP */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 48px 0" }}>
        <div style={{ background: "#fff", border: "1px solid #e3dfd5", borderRadius: 16, padding: 44, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 36 }}>
          {included.map((c) => (
            <div key={c.label}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8E2F39", marginBottom: 12 }}>{c.label}</div>
              <div style={{ fontSize: 16, fontWeight: 500 }}>{c.value}</div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#57564c", margin: "8px 0 0" }}>{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "96px 48px" }}>
        <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1, margin: "0 0 40px", textAlign: "center" }}>Questions &amp; answers</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((f) => (
            <div key={f.q} style={{ borderTop: "1px solid #e3dfd5", padding: "26px 0", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 32 }}>
              <h3 style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em", margin: 0 }}>{f.q}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#57564c", margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter variant="mini" />
    </div>
  );
}
