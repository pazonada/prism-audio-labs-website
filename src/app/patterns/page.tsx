import type { Metadata } from "next";
import Link from "next/link";
import { KoraNav } from "@/components/prism/KoraNav";
import { KoraFooter } from "@/components/prism/KoraFooter";

const mono = "'IBM Plex Mono', monospace";
const btn = { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 } as const;

export const metadata: Metadata = {
  title: "Pattern library",
  description:
    "1,030 patterns ship with Kora, playable from the piano roll inside the plugin or draggable into the host.",
};

const counts = [
  { n: "1,030", label: "patterns named for the instrument" },
  { n: "151", label: "in the traditional Griot set" },
  { n: "865", label: "crossover and modern" },
  { n: "16", label: "quarantined, do not load" },
];

const layerRows = [
  { layer: "Kumbengo", role: "The repeating cycle", patterns: "55", notes: "8.6 avg · 4.0–13.0", length: "2–16 bars" },
  { layer: "Birimintingo", role: "The improvised flourish", patterns: "20", notes: "12.5 avg · 9.5–16.0", length: "1–12 bars" },
  { layer: "Donkilo", role: "The sung melody", patterns: "13", notes: "6.3 avg · 4.8–8.5", length: "4–16 bars" },
  { layer: "Sataro", role: "Spoken praise, punctuated", patterns: "8", notes: "6.6 avg · 6.5–6.8", length: "8 bars" },
  { layer: "Griot studies", role: "Idiomatic, not repertoire", patterns: "48", notes: "8.0 avg · 3.5–12.5", length: "2–8 bars" },
  { layer: "Other", role: "Cross-idiom studies", patterns: "7", notes: "—", length: "—" },
];

const corePieces = [
  {
    name: "Sunjata Fasa",
    body: "The epic of Sunjata Keita, founder of the Mali empire. Among the oldest material in the tradition. Ships as a kumbengo, a sataro, a birimintingo cascade and a 16-bar grand cycle.",
  },
  {
    name: "Kelefaba · Kuruntu Kelefa",
    body: "A praise piece for the warrior Kelefa Saane, and its companion. The densest kumbengo set here — eight versions from a 2-bar sketch to a 16-bar cycle of 176 notes.",
  },
  {
    name: "Kaira",
    body: "A gentler, very widely played cycle. Provided in both its standard tuning and a Sauta setting, which is a good A/B for hearing what the raised fourth does.",
  },
  {
    name: "Janjon",
    body: "A praise piece associated with hunters and warriors, and one of the most rhythmically distinctive cycles in the set.",
  },
  {
    name: "Douga",
    body: "A high-status piece, historically reserved. Here as a kumbengo and a sataro.",
  },
  {
    name: "Alla La Ke",
    body: "Four settings plus a 12-bar development and a sataro. The clearest demonstration of the two-layer texture in the library.",
  },
  {
    name: "Jarabi",
    body: "One of the most recognisable melodies in West African music, as a donkilo — the sung line rather than the cycle.",
  },
];

const alsoIncluded = [
  { label: "Hardino & Silaba — 5 titled:", items: "Hardino Kaira · Hardino Midday · Hardino Descent · Sakhadougou · N Teri Jato" },
  { label: "Sauta — 7 titled:", items: "Taara · Lambango · Kaira (Sauta) · Sauta Showcase · Sauta Grand Cycle" },
  { label: "Tomora — 11 titled:", items: "Tomora Meseng · Tomora Nightfall · Tomora Sunset · Tomora Cascade · Kanimba · Tara" },
  { label: "Further pieces:", items: "Tutu Jara · Keme Burema · Toubaka · Jula Jekere · Boloba · Bereke · Mamaya · Suku · Sabu · Bani · Asumka · Sanjo" },
];

const genres = [
  { label: "Afro House", n: 350 },
  { label: "Melodic Techno", n: 144 },
  { label: "Trance", n: 92 },
  { label: "Amapiano", n: 60 },
  { label: "Hip Hop", n: 55 },
  { label: "Ambient", n: 53 },
  { label: "Lo-fi", n: 32 },
  { label: "World", n: 22 },
  { label: "House, Pop, Industrial, Jazz, Cinematic, D&B, EDM, Techno", n: 57 },
];
const genreMax = 350;

export default function PatternsPage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <KoraNav />

      {/* INTRO */}
      <header style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px 72px" }}>
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 18 }}>
          Content
        </div>
        <h1 style={{ fontSize: 72, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1.0, margin: "0 0 28px" }}>
          The pattern library
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.6, color: "#3a3a33", maxWidth: "42em", margin: "0 0 20px" }}>
          1,030 patterns ship with Kora, playable from the piano roll inside the plugin or draggable into the host.
          151 of them are traditional Mande material. The rest are the instrument taken somewhere else.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: "#57564c", maxWidth: "42em", margin: 0 }}>
          This page is the map. If you only read one section, read{" "}
          <a href="#the-four-layers" style={{ color: "#8E2F39", borderBottom: "1px solid #8E2F39", paddingBottom: 1 }}>
            the four layers
          </a>{" "}
          — it is the difference between a kora part that works and one that sounds like a harp preset.
        </p>
      </header>

      {/* WHAT IS IN THERE, COUNTED */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 40px", fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em" }}>
            What is in there, counted
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 20, marginBottom: 40 }}>
            {counts.map((c) => (
              <div key={c.label} style={{ border: "1px solid #e3dfd5", background: "#F8F8F5", borderRadius: 10, padding: 28 }}>
                <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1 }}>{c.n}</div>
                <p style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.5, color: "#57564c" }}>{c.label}</p>
              </div>
            ))}
          </div>
          <p style={{ margin: "0 0 18px", fontSize: 16, lineHeight: 1.7, color: "#3a3a33", maxWidth: "48em" }}>
            The last figure is deliberate. A structural check flags patterns with dead bars, empty bars or notes past
            their own end; anything that fails is quarantined rather than shipped and quietly disappointing. We would
            rather state the count than pad it.
          </p>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#3a3a33", maxWidth: "48em" }}>
            On the arithmetic: of the 1,030 patterns carrying the Kora name, 149 are traditional, 865 are crossover and
            16 are quarantined. The Griot set totals 151 because it also holds two cross-idiom studies that are not named
            for the instrument.
          </p>
        </div>
      </section>

      {/* THE FOUR LAYERS */}
      <section id="the-four-layers" style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px", scrollMarginTop: 80 }}>
        <h2 style={{ margin: "0 0 20px", fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em" }}>The four layers</h2>
        <p style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.7, color: "#3a3a33", maxWidth: "48em" }}>
          Mande kora music is built from named functional layers, not from &ldquo;melody&rdquo; and &ldquo;chords&rdquo;.
          Every traditional pattern in this library is tagged with the layer it belongs to, so you can stack them the way
          the music is actually assembled.
        </p>
        <p style={{ margin: "0 0 40px", fontSize: 17, lineHeight: 1.7, color: "#3a3a33", maxWidth: "48em" }}>
          The note densities below are measured from the shipped patterns — not a stylistic claim, just what is in the
          files. They separate cleanly, which is a decent sign the tagging means something.
        </p>

        <div style={{ overflowX: "auto", marginBottom: 48 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15, minWidth: 640 }}>
            <thead>
              <tr>
                {["Layer", "Role", "Patterns", "Notes / bar", "Length"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    style={{
                      textAlign: "left",
                      fontFamily: mono,
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#57564c",
                      fontWeight: 400,
                      padding: "0 16px 14px",
                      borderBottom: "1px solid #1D1C18",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {layerRows.map((r) => (
                <tr key={r.layer}>
                  <th
                    scope="row"
                    style={{ textAlign: "left", padding: "16px 16px", borderBottom: "1px solid #e3dfd5", fontWeight: 600, color: "#1D1C18" }}
                  >
                    {r.layer}
                  </th>
                  <td style={{ padding: "16px 16px", borderBottom: "1px solid #e3dfd5", color: "#3a3a33" }}>{r.role}</td>
                  <td style={{ padding: "16px 16px", borderBottom: "1px solid #e3dfd5", color: "#3a3a33" }}>{r.patterns}</td>
                  <td style={{ padding: "16px 16px", borderBottom: "1px solid #e3dfd5", color: "#3a3a33", fontFamily: mono, fontSize: 13.5 }}>{r.notes}</td>
                  <td style={{ padding: "16px 16px", borderBottom: "1px solid #e3dfd5", color: "#3a3a33" }}>{r.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 40 }}>
          <div>
            <h3 style={{ margin: "0 0 14px", fontSize: 21, fontWeight: 600, letterSpacing: "-0.02em" }}>Read the densities</h3>
            <p style={{ margin: "0 0 14px", fontSize: 15.5, lineHeight: 1.7, color: "#3a3a33" }}>
              Birimintingo runs at almost exactly double the density of donkilo and sataro. That gap is the music: a
              sparse sung or spoken line, a mid-density cycle underneath it, and a flourish that briefly doubles the
              activity before falling back.
            </p>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: "#3a3a33" }}>
              Sataro&apos;s range is the narrowest of any layer — 6.5 to 6.8 notes per bar across all eight patterns. It
              is a tightly defined function: keep out of the way of the speech.
            </p>
          </div>
          <div>
            <h3 style={{ margin: "0 0 14px", fontSize: 21, fontWeight: 600, letterSpacing: "-0.02em" }}>The thing to actually do</h3>
            <p style={{ margin: "0 0 14px", fontSize: 15.5, lineHeight: 1.7, color: "#3a3a33" }}>
              Put a kumbengo on one track and loop it. Put a birimintingo on a second track and trigger it once every
              four or eight cycles, not continuously.
            </p>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: "#3a3a33" }}>
              That is the texture. Looping a birimintingo is the single most common way to make this instrument sound
              wrong — a flourish that never stops is not a flourish.
            </p>
          </div>
        </div>
      </section>

      {/* THE REPERTOIRE */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 20px", fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em" }}>The repertoire</h2>
          <p style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.7, color: "#3a3a33", maxWidth: "48em" }}>
            49 named pieces and figures. A piece in this tradition is identified by its kumbengo, so most appear several
            times — a bare 2-bar version to learn the shape, a full 4-bar setting, an 8- or 12-bar development, and
            sometimes a 16-bar grand cycle.
          </p>
          <p style={{ margin: "0 0 44px", fontSize: 17, lineHeight: 1.7, color: "#3a3a33", maxWidth: "48em" }}>
            Each is listed with its tuning, because that is how the repertoire is organised — you cannot play a Sauta
            piece on a Tomora instrument without retuning.
          </p>

          <h3 style={{ margin: "0 0 20px", fontFamily: mono, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3DA9FC" }}>
            Core pieces
          </h3>
          <ul style={{ margin: "0 0 48px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 16, maxWidth: "52em" }}>
            {corePieces.map((p) => (
              <li key={p.name} style={{ fontSize: 16, lineHeight: 1.7, color: "#3a3a33" }}>
                <strong style={{ color: "#1D1C18", fontWeight: 600 }}>{p.name}</strong> — {p.body}
              </li>
            ))}
          </ul>

          <h3 style={{ margin: "0 0 20px", fontFamily: mono, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3DA9FC" }}>
            Also included
          </h3>
          <ul style={{ margin: "0 0 32px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 18, maxWidth: "52em" }}>
            {alsoIncluded.map((g) => (
              <li key={g.label} style={{ fontSize: 16, lineHeight: 1.7, color: "#3a3a33" }}>
                <em style={{ color: "#57564c", fontStyle: "italic" }}>{g.label}</em>{" "}
                {g.items}
              </li>
            ))}
          </ul>

          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#3a3a33", maxWidth: "52em" }}>
            Birimintingo figures are catalogued by shape rather than by piece, since a flourish travels between pieces:
            Descending, Cascade, Octave Cascade, Triad Roll, Arch, Rolling Flourish, Yeyengo.
          </p>
        </div>
      </section>

      {/* WHY 6/8 AND 9/8 */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px" }}>
        <h2 style={{ margin: "0 0 32px", fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em", maxWidth: "20em", lineHeight: 1.2 }}>
          Why so much of it is in 6/8 and 9/8
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: "48em" }}>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>
            Mande rhythm is largely compound — the beat divides in three rather than two. The traditional patterns are
            written in 6/8, 9/8 and 12/8 for that reason, and they are genuinely in those meters, not 4/4 with triplets
            pasted over it.
          </p>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>
            Several are also in lengths that are not powers of two. A 12-bar development is a complete musical statement
            in this idiom, not an 8-bar loop with four bars of padding. Nothing was rounded up to fit a DAW&apos;s idea
            of a tidy loop.
          </p>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>
            Practical consequence: if you drop a 9/8 kumbengo into a 4/4 project it will drift against the grid, because
            it is supposed to. Set the track or the project to the pattern&apos;s meter, or use the crossover patterns,
            which are written in 4/4 on purpose.
          </p>
        </div>
      </section>

      {/* THE OTHER 865 */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 20px", fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em" }}>The other 865</h2>
          <p style={{ margin: "0 0 18px", fontSize: 17, lineHeight: 1.7, color: "#3a3a33", maxWidth: "48em" }}>
            The kora has been in popular West African music for decades and in electronic music for about one. The bulk
            of the library takes the instrument out of the repertoire and puts it into the genres people are actually
            writing in — mostly in 4/4, mostly loopable, labelled by genre and by the role the part plays.
          </p>
          <p style={{ margin: "0 0 44px", fontSize: 17, lineHeight: 1.7, color: "#3a3a33", maxWidth: "48em" }}>
            The weighting is not accidental. Afro house and amapiano are where a plucked West African instrument has the
            most immediate use, so that is where the most work went.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: "56em", marginBottom: 44 }}>
            {genres.map((g) => (
              <div key={g.label} style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <div style={{ flex: "0 0 190px", maxWidth: 190, fontSize: 14, lineHeight: 1.4, color: "#3a3a33" }}>{g.label}</div>
                <div style={{ flex: "1 1 200px", minWidth: 120, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ flex: 1, background: "#F8F8F5", border: "1px solid #e3dfd5", borderRadius: 3, height: 22, overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${(g.n / genreMax) * 100}%`,
                        height: "100%",
                        background: "#3DA9FC",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                  <div style={{ flex: "0 0 auto", fontFamily: mono, fontSize: 14, color: "#1D1C18", minWidth: 36, textAlign: "right" }}>{g.n}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#3a3a33", maxWidth: "52em" }}>
            Each of these is also tagged by part role — bass, keys, plucks, arps, lead, pads — so you can filter to the
            function you need rather than scrolling 865 names. Across the whole Kora set that splits roughly 775 plucks,
            174 keys, 35 arps, 24 leads, 18 bass, 4 pads.
          </p>
        </div>
      </section>

      {/* WHEN THE LIBRARY RUNS OUT */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px" }}>
        <h2 style={{ margin: "0 0 32px", fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em" }}>When the library runs out</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: "48em" }}>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>
            Kora also generates. The Intelligence section writes material constrained to the active tuning, with controls
            for density, complexity, ornamentation, register, swing and how much it varies between repeats.
          </p>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>
            It is built from the same idiomatic rules as the Griot studies — two-layer voicings, mode-locked,
            compound-meter aware — rather than being a general arpeggiator pointed at a scale. Use it to extend a cycle
            you like, or to get variations of a kumbengo for a long arrangement.
          </p>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>
            It will not write you a Sunjata Fasa. It will write you something that sits correctly in the mode and the
            meter, which is usually what you need at two in the morning.
          </p>
        </div>
      </section>

      {/* CLOSING STRIP */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", padding: "88px 48px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <p style={{ margin: "0 0 28px", fontSize: 20, lineHeight: 1.6, color: "#3a3a33" }}>
            Twenty-five of these patterns are rendered as audio, each labelled with the preset that made it.
          </p>
          <Link
            href="/listen"
            style={{ ...btn, display: "inline-block", fontSize: 16, background: "#1D1C18", color: "#F8F8F5", padding: "16px 34px", borderRadius: 3 }}
          >
            Listen
          </Link>
        </div>
      </section>

      <KoraFooter />
    </div>
  );
}
