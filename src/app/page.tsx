import Link from "next/link";
import { KoraNav } from "@/components/prism/KoraNav";
import { KoraFooter } from "@/components/prism/KoraFooter";
import { KoraAudioPlayer } from "@/components/prism/KoraAudioPlayer";
import { demos, PRICE } from "@/lib/kora";

const mono = "'IBM Plex Mono', monospace";
const btn = { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 } as const;

const signalPath = [
  { name: "Pluck exciter", note: "Fingertip or nail, by velocity", accent: "#3DA9FC" },
  { name: "String resonator", note: "Nylon or metal, with inharmonicity", accent: "#3DA9FC" },
  { name: "Calabash body", note: "Gourd resonance, cowhide soundboard", accent: "#8E2F39" },
  { name: "21 sympathetic strings", note: "Every string you did not pluck, ringing", accent: "#8E2F39" },
];

const getCards = [
  {
    n: "One",
    title: "Four tunings, measured in cents",
    body: "Silaba, Hardino, Sauta and Tomora Mesengo — the tunings a player actually moves between, not scale presets with African names. Hardino is a stretched major; Sauta raises the fourth; Tomora is Dorian.",
    foot: "Each is a cents table, so the thirds and fourths sit where they sit rather than being rounded to the nearest piano key.",
    link: { label: "See the tables →", href: "/instrument" },
  },
  {
    n: "Two",
    title: "1,030 patterns, 151 of them traditional",
    body: "The traditional set is organised the way the music is: kumbengo (the cycle), birimintingo (the flourish), donkilo (the sung line), sataro (the spoken one). Named pieces — Kelefaba, Kaira, Sunjata Fasa, Janjon — in 6/8, 9/8 and 12/8.",
    foot: "The other 865 put the instrument in Afro house, amapiano, melodic techno, hip hop and ambient.",
    link: { label: "Browse the library →", href: "/patterns" },
  },
  {
    n: "Three",
    title: "Playing detail, not just notes",
    body: "Key-off damping in three tiers, so releasing a key can stop a string the way a palm does. Two pickup positions — one at the bridge, one further out — that you mix. Nylon or metal strings. Velocity curve, velocity spread and timing spread, because nobody plays a grid.",
    foot: "Mod wheel and pitch bend are routed to the articulation, so a held note can be bent and coloured.",
  },
  {
    n: "Four",
    title: "Two ways to go somewhere else",
    body: "Halo excites six tuned resonators from the dry signal, so only the partials the kora is already producing ring on. It extends the tail rather than layering a pad under it.",
    foot: "Aura is the ambience stage — mix, drive, motion, space. Both are off by default. The instrument is meant to be useful before you add anything.",
  },
];

const layers = [
  {
    name: "Kumbengo",
    role: "The cycle — 101 patterns",
    accent: "#3DA9FC",
    body: "This is a bass figure in the thumbs with an interlocking part above it. It runs for as long as the performance does. In practice, each named piece in the repertoire is its kumbengo.",
  },
  {
    name: "Birimintingo",
    role: "The flourish — 50 patterns",
    accent: "#3DA9FC",
    body: "The improvised run that departs from the cycle and resolves back into it. Fast descending cascades, octave runs, triad rolls. This is where a player is judged, and the hardest thing to fake with an arpeggiator.",
  },
  {
    name: "Donkilo",
    role: "The song",
    accent: "#8E2F39",
    body: "The fixed sung melody of the piece, played on the strings. Sparser than the kumbengo and shaped like a vocal line — which makes it the layer to reach for when something else in the arrangement is singing.",
  },
  {
    name: "Sataro",
    role: "The spoken praise",
    accent: "#8E2F39",
    body: "Declaimed rather than sung — closer to speech, with the instrument punctuating instead of carrying. The sparsest material in the library, and the most useful under a voice or a long pad.",
  },
];

const specs = [
  {
    title: "Synthesis",
    items: [
      "Physical model, 21 strings",
      "Coupled sympathetic string bank",
      "Calabash body resonance",
      "Sampled attack transient, 3 velocity tiers × 4 alternations",
      "Key-off damping, 3 tiers",
      "Six-resonator harmonic halo",
    ],
  },
  {
    title: "Tuning",
    items: [
      "Silaba · Hardino · Sauta · Tomora Mesengo",
      "Cents-accurate tables, not 12-TET rounding",
      "Equal temperament also provided",
      "MTS-ESP: follows a host tuning master",
      "Scale lock, adjustable key range",
    ],
  },
  {
    title: "Content & formats",
    items: [
      "74 presets",
      "1,030 patterns · 151 traditional",
      "Four-band EQ, ambience stage",
      "VST3 · AU · Standalone",
      "macOS, Apple silicon and Intel",
      "≈110 MB per format",
    ],
  },
];

const notIt = [
  "It is not a recording of a named player's instrument. If you need that specific gourd in that specific room, a sampled library is the honest answer.",
  "It is not a substitute for learning the repertoire. The pattern library is a way in, and we have tried to label it well enough to teach something, but it is 151 patterns against a tradition of centuries.",
  "It does not pretend the kora is a chromatic instrument. It has 21 strings in a diatonic tuning and a player retunes bridges to change mode. Scale lock exists so the instrument stays in its mode when you play outside it; turn it off and you are playing something a kora cannot play.",
];

const previewDemos = [demos[0], demos[7], demos[13], demos[20]];

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <KoraNav />

      {/* HERO */}
      <header style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px 72px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "center" }}>
          <div style={{ flex: "999 1 420px", minWidth: 0 }}>
            <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 22 }}>
              Prism Griot Collection · 01
            </div>
            <h1 style={{ fontSize: 88, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.95, margin: "0 0 28px" }}>Kora</h1>
            <p style={{ fontSize: 20, lineHeight: 1.55, color: "#3a3a33", maxWidth: "34em", margin: "0 0 20px" }}>
              The kora is a 21-string harp from West Africa. We built a physical model of how the instrument
              actually makes sound, so it answers to the way you play, instead of replaying the way someone else did.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#57564c", maxWidth: "34em", margin: "0 0 34px" }}>
              Our Kora plugin has four historical tunings and 74 presets. There are 1,030 patterns, with 151 of them
              coming from the traditional repertoire and organized by the role each part plays in the music. All of
              this is about 110 MB.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <Link href="/listen" style={{ ...btn, fontSize: 15, background: "#1D1C18", color: "#F8F8F5", padding: "15px 30px", borderRadius: 3 }}>
                Hear it first
              </Link>
              <Link href="/instrument" style={{ ...btn, fontSize: 15, border: "1px solid #1D1C18", color: "#1D1C18", padding: "14px 26px", borderRadius: 3 }}>
                How it works
              </Link>
            </div>
            <p style={{ margin: "28px 0 0", fontFamily: mono, fontSize: 13, color: "#8a897d" }}>
              VST3 · AU · Standalone — macOS. 30-day return, no questions.
            </p>
          </div>

          {/* signal path card */}
          <div style={{ flex: "1 1 360px", minWidth: 300 }}>
            <div style={{ background: "#fff", border: "1px solid #e3dfd5", borderRadius: 12, padding: 32 }}>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8a897d", marginBottom: 22 }}>
                Signal path
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {signalPath.map((s, i) => (
                  <div key={s.name}>
                    <div style={{ borderLeft: `2px solid ${s.accent}`, padding: "10px 0 10px 16px" }}>
                      <p style={{ margin: 0, fontSize: 15, fontWeight: 500 }}>{s.name}</p>
                      <p style={{ margin: "3px 0 0", fontSize: 13, color: "#8a897d", lineHeight: 1.5 }}>{s.note}</p>
                    </div>
                    {i < signalPath.length - 1 && (
                      <div style={{ textAlign: "center", color: "#c9c4b8", fontSize: 13, lineHeight: 1 }}>↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p style={{ margin: "16px 0 0", fontSize: 12.5, color: "#8a897d", textAlign: "center", lineHeight: 1.6 }}>
              The fourth stage is the one most libraries skip. It is also the one that makes a kora sound like a kora.
            </p>
          </div>
        </div>
      </header>

      {/* WHY MODELLED */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 56 }}>
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Why we modelled it instead of sampling it
            </h2>
          </div>
          <div style={{ flex: "999 1 460px", minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }}>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>
              A sampled kora is one instrument that&apos;s recorded once, in a specific room, and tuned one way, by one
              player. It&apos;s faithful to that point in time and stubborn about everything else. Change the tuning and the
              samples fight you. Play a chord the original player never played and the ringing comes out wrong, because
              every note was recorded with its ringing already baked in.
            </p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>
              Most of what makes a kora sound like a kora happens after the pluck: the gourd body has a deep low
              resonance, the cowhide soundboard rounds off the top, and the twenty strings you didn&apos;t touch keep
              singing, soaking up energy from the one you did. How they ring depends on which notes are held, in which
              tuning, in that exact moment. So you can&apos;t record it in advance; you have to work it out live. This is
              what Kora does.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 48px" }}>
        <h2 style={{ margin: "0 0 12px", fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em" }}>What you actually get</h2>
        <p style={{ margin: "0 0 48px", fontSize: 16, color: "#57564c", maxWidth: "46em", lineHeight: 1.6 }}>
          Four parts, in the order you are likely to use them.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}>
          {getCards.map((c) => (
            <article key={c.n} style={{ border: "1px solid #e3dfd5", background: "#fff", borderRadius: 10, padding: 32 }}>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 14 }}>{c.n}</div>
              <h3 style={{ margin: "0 0 14px", fontSize: 23, fontWeight: 600, letterSpacing: "-0.02em" }}>{c.title}</h3>
              <p style={{ margin: "0 0 14px", fontSize: 15, lineHeight: 1.65, color: "#3a3a33" }}>{c.body}</p>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#57564c" }}>
                {c.foot}{" "}
                {c.link && (
                  <Link href={c.link.href} style={{ color: "#8E2F39", borderBottom: "1px solid #8E2F39", paddingBottom: 1 }}>
                    {c.link.label}
                  </Link>
                )}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FOUR LAYERS */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", padding: "88px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8a897d", marginBottom: 14 }}>
            The thing worth learning
          </div>
          <h2 style={{ margin: "0 0 20px", fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em", maxWidth: "24em", lineHeight: 1.22 }}>
            Kora music is four jobs happening at once, and two hands doing all of them
          </h2>
          <p style={{ margin: "0 0 44px", fontSize: 17, lineHeight: 1.7, color: "#3a3a33", maxWidth: "44em" }}>
            If you only take one idea from this page, take this one. A griot&apos;s performance is not
            melody-over-accompaniment. It is a repeating cycle that never stops, with a second voice breaking out of it
            and returning — and the thumbs usually hold the cycle while the index fingers do the breaking out.
            Understanding which layer you are writing is most of the work.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}>
            {layers.map((l) => (
              <div key={l.name} style={{ borderTop: `2px solid ${l.accent}`, paddingTop: 22 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 19, fontWeight: 600 }}>{l.name}</h3>
                <p style={{ margin: "0 0 10px", fontFamily: mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a897d" }}>{l.role}</p>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "#3a3a33" }}>{l.body}</p>
              </div>
            ))}
          </div>
          <p style={{ margin: "36px 0 0", fontSize: 15, lineHeight: 1.7, color: "#57564c", maxWidth: "44em" }}>
            Stack a kumbengo and a birimintingo on two tracks and you have the texture. That is not a production trick —
            it is how the music is built.{" "}
            <Link href="/patterns" style={{ color: "#8E2F39", borderBottom: "1px solid #8E2F39", paddingBottom: 1 }}>
              The pattern library page walks through each layer in detail →
            </Link>
          </p>
        </div>
      </section>

      {/* LISTEN STRIP */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 48px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            <h2 style={{ margin: "0 0 16px", fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em" }}>Twenty-five demos, each one labelled</h2>
            <p style={{ margin: "0 0 24px", fontSize: 16, lineHeight: 1.7, color: "#3a3a33" }}>
              Every demo names the preset and the pattern that produced it, and the tempo. Seventeen are traditional
              repertoire — all four layers and three tunings — and the rest take the instrument into song, score, jazz
              and club music.
            </p>
            <Link href="/listen" style={{ ...btn, display: "inline-block", fontSize: 15, border: "1px solid #8E2F39", color: "#8E2F39", padding: "13px 26px", borderRadius: 3 }}>
              Go to the demos
            </Link>
          </div>
          <div style={{ flex: "1 1 420px", minWidth: 300, display: "flex", flexDirection: "column", gap: 10 }}>
            {previewDemos.map((d) => (
              <KoraAudioPlayer key={d.num} src={d.file} title={d.title} meta={d.meta.split(" · ")[0]} />
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATION */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 40px", fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em" }}>Specification</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 40 }}>
            {specs.map((col) => (
              <div key={col.title}>
                <h3 style={{ margin: "0 0 16px", fontFamily: mono, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3DA9FC" }}>{col.title}</h3>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 15, lineHeight: 1.85, color: "#3a3a33" }}>
                  {col.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ margin: "36px 0 0", fontSize: 14, color: "#57564c", lineHeight: 1.7, maxWidth: "52em" }}>
            A note on size: about 110 MB per format, and almost none of it is audio — a sample-based kora runs to
            several gigabytes. Most of the figure is the pattern library compiled in, plus a universal binary carrying
            both Apple silicon and Intel code. The modelled instrument itself is small, and nothing streams from disk,
            so CPU cost is steady and projects load quickly.
          </p>
        </div>
      </section>

      {/* WHAT IT IS NOT */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "76px 48px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
          <div style={{ flex: "1 1 280px", minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.25 }}>What it is not</h2>
          </div>
          <div style={{ flex: "999 1 440px", minWidth: 0, display: "flex", flexDirection: "column", gap: 18 }}>
            {notIt.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#3a3a33" }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", padding: "96px 48px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ margin: "0 0 22px", fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.2 }}>Prism Kora</h2>
          <p style={{ margin: "0 0 32px", fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>
            The first instrument from Prism Audio Labs. Try it for 14 days; it stops making sound when the trial ends
            and nothing else happens.
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
