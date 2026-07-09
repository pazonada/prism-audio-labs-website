import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/prism/SiteNav";
import { SiteFooter } from "@/components/prism/SiteFooter";
import { ImageSlot } from "@/components/prism/ImageSlot";

const mono = "'IBM Plex Mono', monospace";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Short, practical video tutorials for every Prism plugin and for Prism Link — from first install to advanced routing.",
};

type Card = {
  title: string;
  dur: string;
  tag: string;
  href?: string;
  placeholder: string;
};

const startHere: Card[] = [
  { title: "Install & authorize", dur: "3:12", tag: "Getting started", placeholder: "Install & authorize" },
  { title: "Your first linked rack", dur: "6:48", tag: "Getting started", placeholder: "Your first linked rack" },
  { title: "Presets & the browser", dur: "4:05", tag: "Getting started", placeholder: "Presets & the browser" },
];

const byPlugin: Card[] = [
  { title: "Electric piano essentials", dur: "5:20", tag: "Lunar", href: "/plugins/lunar", placeholder: "Lunar" },
  { title: "Programming the sequencer", dur: "7:41", tag: "Seismic", href: "/plugins/seismic", placeholder: "Seismic" },
  { title: "Dialing in the bass", dur: "4:52", tag: "Dragon", href: "/plugins/dragon", placeholder: "Dragon" },
  { title: "Supersaw stacks", dur: "6:10", tag: "Stellar", href: "/plugins/stellar", placeholder: "Stellar" },
  { title: "Pads & chorus", dur: "5:33", tag: "Comet", href: "/plugins/comet", placeholder: "Comet" },
];

const prismLink: Card[] = [
  { title: "Prism Link in 90 seconds", dur: "1:30", tag: "Prism Link", placeholder: "Prism Link in 90 seconds" },
  { title: "Modulating filters from the kick", dur: "5:15", tag: "Prism Link", placeholder: "Modulating filters from the kick" },
  { title: "Multiple racks with Link IDs", dur: "4:44", tag: "Prism Link", placeholder: "Multiple racks with Link IDs" },
];

function VideoCard({
  card,
  tagColor,
  thumbBg,
  thumbBorder,
  playBg,
  playColor = "#fff",
  durBg,
}: {
  card: Card;
  tagColor: string;
  thumbBg: string;
  thumbBorder: string;
  playBg: string;
  playColor?: string;
  durBg: string;
}) {
  return (
    <Link href={card.href ?? "#"} style={{ display: "block" }}>
      <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: 12, overflow: "hidden", background: thumbBg, border: `1px solid ${thumbBorder}` }}>
        <ImageSlot label={card.placeholder} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: playBg, color: playColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, paddingLeft: 3 }}>►</div>
        </div>
        <div style={{ position: "absolute", bottom: 10, right: 10, fontFamily: mono, fontSize: 10.5, background: durBg, color: "#fff", padding: "3px 8px", borderRadius: 5, pointerEvents: "none" }}>{card.dur}</div>
      </div>
      <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: tagColor, margin: "16px 0 8px" }}>{card.tag}</div>
      <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", margin: 0, color: "#1D1C18" }}>{card.title}</h3>
    </Link>
  );
}

function SectionHead({ title, note, noteColor = "#8a897d" }: { title: string; note: string; noteColor?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 34 }}>
      <h2 style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", margin: 0 }}>{title}</h2>
      <span style={{ fontFamily: mono, fontSize: 12, color: noteColor }}>{note}</span>
    </div>
  );
}

export default function LearnPage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <SiteNav theme="light" />

      {/* HERO (blue) */}
      <header style={{ background: "#3DA9FC", color: "#0b2740", padding: "34px 48px 84px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 0.9fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#0b2740", marginBottom: 24 }}>Tutorials &amp; guides</div>
              <h1 style={{ fontSize: 76, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.92, margin: 0, color: "#fff" }}>Learn the Prism ecosystem.</h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: "#0e304c", maxWidth: 460, margin: "26px 0 0" }}>
                Short, practical videos for every plugin and for Prism Link — from first install to advanced routing.
              </p>
            </div>
            <div style={{ background: "#0e2233", borderRadius: 16, padding: 16, boxShadow: "0 40px 80px -40px rgba(0,0,0,0.45)" }}>
              <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: 10, overflow: "hidden", background: "#0a1a28" }}>
                <ImageSlot label="Featured video" />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#3DA9FC", color: "#0b2740", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, paddingLeft: 4 }}>►</div>
                </div>
                <div style={{ position: "absolute", bottom: 12, right: 12, fontFamily: mono, fontSize: 11, background: "rgba(11,39,64,0.85)", color: "#fff", padding: "4px 9px", borderRadius: 5, pointerEvents: "none" }}>12:30</div>
              </div>
              <div style={{ padding: "16px 8px 6px" }}>
                <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 8 }}>Featured</div>
                <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em", color: "#F1EFE8" }}>Build a track with the whole rack</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* START HERE */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px 24px" }}>
        <SectionHead title="Start here" note="the basics in under 15 minutes" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {startHere.map((c) => (
            <VideoCard key={c.title} card={c} tagColor="#3DA9FC" thumbBg="#e7e3d8" thumbBorder="#e3dfd5" playBg="rgba(29,28,24,0.82)" durBg="rgba(29,28,24,0.85)" />
          ))}
        </div>
      </section>

      {/* BY PLUGIN */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 48px 24px" }}>
        <SectionHead title="By plugin" note="one walkthrough per instrument" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {byPlugin.map((c) => (
            <VideoCard key={c.title} card={c} tagColor="#8E2F39" thumbBg="#e7e3d8" thumbBorder="#e3dfd5" playBg="rgba(29,28,24,0.82)" durBg="rgba(29,28,24,0.85)" />
          ))}
        </div>
      </section>

      {/* PRISM LINK DEEP DIVES */}
      <section style={{ background: "#eaf4fc", borderTop: "1px solid #d3e6f6", borderBottom: "1px solid #d3e6f6", marginTop: 56 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "76px 48px" }}>
          <SectionHead title="Prism Link deep dives" note="get the whole rack moving together" noteColor="#5a7793" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {prismLink.map((c) => (
              <VideoCard key={c.title} card={c} tagColor="#2c7fc4" thumbBg="#d7e7f5" thumbBorder="#cadff2" playBg="#3DA9FC" durBg="rgba(11,39,64,0.85)" />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter variant="mini" />
    </div>
  );
}
