import type { Metadata } from "next";
import { SiteNav } from "@/components/prism/SiteNav";
import { SiteFooter } from "@/components/prism/SiteFooter";
import { ImageSlot } from "@/components/prism/ImageSlot";
import { AboutContactForm } from "@/components/prism/AboutContactForm";

const mono = "'IBM Plex Mono', monospace";

export const metadata: Metadata = {
  title: "About",
  description:
    "Prism Audio Labs was born from a love of analog gear and a belief that digital tools should feel just as alive — a small team led by a seasoned audio engineer and producer.",
};

const minimum = [
  "macOS 11 (Big Sur) or later",
  "Intel or Apple Silicon",
  "8 GB RAM",
  "500 MB disk space",
  "VST3 or AU compatible DAW",
];
const testedWith = ["Logic Pro", "Ableton Live", "REAPER", "GarageBand", "Pro Tools (VST3)"];

function ReqItem({ children, blue }: { children: React.ReactNode; blue?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 18, color: "#3a3a33" }}>
      <span style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: blue ? "#3DA9FC" : "#b3b1a5" }} />
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <SiteNav theme="light" />

      {/* HEADER */}
      <header style={{ position: "relative", overflow: "hidden", zIndex: 0, maxWidth: 1180, margin: "0 auto", padding: "88px 48px 56px" }}>
        <svg
          width="340"
          height="260"
          viewBox="0 0 340 260"
          fill="none"
          style={{
            position: "absolute",
            right: 0,
            top: 24,
            zIndex: -1,
            pointerEvents: "none",
            WebkitMaskImage: "linear-gradient(215deg,#000,transparent 72%)",
            maskImage: "linear-gradient(215deg,#000,transparent 72%)",
          }}
        >
          <defs>
            <pattern id="aboutDots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2.2" cy="2.2" r="2.2" fill="#3DA9FC" />
            </pattern>
          </defs>
          <rect width="340" height="260" fill="url(#aboutDots)" />
        </svg>
        <h1 style={{ fontSize: 80, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.94, margin: 0, maxWidth: 900 }}>
          Analog soul with digital precision.
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.65, color: "#4a4940", maxWidth: 620, margin: "30px 0 0" }}>
          Prism Audio Labs was born from a deep love of analog gear and a belief that digital tools should feel just as
          alive. Every plugin in our collection is meticulously crafted to capture the warmth, character, and
          unpredictability of real hardware. We&apos;re a small team, led by a seasoned audio engineer and music producer.
        </p>
      </header>

      {/* IMAGE */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "24px 48px 8px" }}>
        <div style={{ position: "relative", border: "1px solid #e3dfd5", borderRadius: 16, overflow: "hidden", aspectRatio: "16 / 7", background: "#efece3" }}>
          <ImageSlot label="Drop a studio / team photo" />
        </div>
      </section>

      {/* SYSTEM REQUIREMENTS */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 48px 24px" }}>
        <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 18 }}>System requirements</div>
        <h2 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 44px" }}>Here&apos;s what you need to run it.</h2>
        <div style={{ background: "#fff", border: "1px solid #e3dfd5", borderRadius: 16, padding: "52px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1D1C18", marginBottom: 28 }}>Minimum</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {minimum.map((m) => <ReqItem key={m}>{m}</ReqItem>)}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1D1C18", marginBottom: 28 }}>Tested with</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {testedWith.map((t) => <ReqItem key={t} blue>{t}</ReqItem>)}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 48px 100px" }}>
        <div style={{ background: "#1D1C18", color: "#F1EFE8", borderRadius: 20, padding: 64, display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 22 }}>Get in touch</div>
            <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.02, margin: 0, color: "#F4EEE1" }}>Questions, support, or press.</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#a6a49a", margin: "22px 0 0" }}>
              Tell us what you&apos;re working on and we&apos;ll get back within two business days.
            </p>
          </div>
          <AboutContactForm />
        </div>
      </section>

      <SiteFooter variant="mini" />
    </div>
  );
}
