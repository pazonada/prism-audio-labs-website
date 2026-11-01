import type { Metadata } from "next";
import Link from "next/link";
import { KoraNav } from "@/components/prism/KoraNav";
import { KoraFooter } from "@/components/prism/KoraFooter";
import { KoraAudioPlayer } from "@/components/prism/KoraAudioPlayer";
import { demos, demoGroups, PRICE } from "@/lib/kora";

const mono = "'IBM Plex Mono', monospace";
const btn = { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 } as const;

export const metadata: Metadata = {
  title: "Listen — twenty-five demos",
  description:
    "Twenty-five demos of Prism Kora, each labelled with the preset and pattern that made it. No external processing, loudness-matched.",
};

export default function ListenPage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <KoraNav />

      {/* INTRO */}
      <header style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px 48px" }}>
        <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 22 }}>
          Demos
        </div>
        <h1 style={{ fontSize: 64, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: "0 0 28px", maxWidth: "14em" }}>
          Twenty-five demos, nothing hidden
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#3a3a33", maxWidth: "48em", margin: "0 0 16px" }}>
          Every demo names the preset and the pattern that made it, and the tempo. No external processing, no bus
          compression, no layering. Each one is Prism Kora on its own, playing a pattern that ships with it.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "#57564c", maxWidth: "48em", margin: 0 }}>
          Seventeen are traditional repertoire, because that is the material you cannot easily make yourself. The rest
          take the instrument into song, score, jazz and club music. All loudness-matched, so nothing is persuading you
          with volume.
        </p>
      </header>

      {demoGroups.map((g) => {
        const items = demos.filter((d) => d.group === g.id);
        return (
          <section key={g.id} style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 48px" }}>
            <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.03em", margin: "0 0 10px" }}>{g.label}</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#57564c", maxWidth: "48em", margin: "0 0 28px" }}>{g.blurb}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {items.map((d) => (
                <KoraAudioPlayer
                  key={d.num}
                  src={d.file}
                  title={`${d.num} · ${d.title}`}
                  meta={d.meta}
                  sub={d.preset ? `Preset ${d.preset}${d.pattern ? ` · Pattern ${d.pattern}` : ""} — ${d.desc}` : d.desc}
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* CLOSING */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", padding: "88px 48px", marginTop: 48 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.035em", margin: "0 0 20px" }}>Heard enough?</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#3a3a33", margin: "0 0 30px" }}>
            The 14-day trial is the whole instrument, not a reduced version. Nothing is withheld and nothing phones home.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/pricing" style={{ ...btn, fontSize: 16, background: "#1D1C18", color: "#F8F8F5", padding: "16px 34px", borderRadius: 3 }}>
              Buy — {PRICE}
            </Link>
            <Link href="/pricing" style={{ ...btn, fontSize: 16, border: "1px solid #1D1C18", color: "#1D1C18", padding: "15px 30px", borderRadius: 3 }}>
              Start the trial
            </Link>
          </div>
        </div>
      </section>

      <KoraFooter />
    </div>
  );
}
