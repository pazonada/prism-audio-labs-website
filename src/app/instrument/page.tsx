import Link from "next/link";
import type { Metadata } from "next";
import { KoraNav } from "@/components/prism/KoraNav";
import { KoraFooter } from "@/components/prism/KoraFooter";
import { KoraFigure } from "@/components/prism/KoraMedia";

const mono = "'IBM Plex Mono', monospace";
const btn = { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 } as const;

export const metadata: Metadata = {
  title: "The instrument",
  description:
    "How a kora is built and played, what the four tunings actually are in cents, and what each control in the plugin is doing to the model.",
};

const inNumbers: [string, string][] = [
  ["Strings", "21, in two ranks"],
  ["Range", "About three octaves, diatonic"],
  ["Fingers used", "Four — thumb and index, both hands"],
  ["Body", "Calabash gourd, cowhide head"],
  ["Changing mode", "Physically retuning the rings"],
];

const builtParas = [
  "A kora is a bridge harp. A large calabash gourd is cut and covered with a stretched cowhide soundboard; a long hardwood neck passes through the gourd; and a tall notched bridge stands upright on the hide, carrying 21 strings. Strings were historically twisted antelope hide and are now nylon fishing line, tensioned by leather rings around the neck that a player slides to tune.",
  "It is classified as a harp rather than a lute because the strings run perpendicular to the soundboard, meeting the bridge from both sides. That detail is the whole instrument: the bridge stands on a drum head, so every pluck drives a membrane, and the gourd behind it acts as a resonating chamber with a strong low mode.",
  "There are no frets and no sound hole in the usual sense. There is no sustain pedal and no damper mechanism — a string rings until it decays or until the player's palm or finger stops it.",
];

const musicParas2 = [
  "This one fact produces most of what people recognise as kora style. Interlocking two-part figures are natural because each hand already owns alternating degrees. Fast descending cascades are easy because they are two hands falling past each other, not one hand running. And wide leaps are often easier than stepwise motion — the opposite of a keyboard.",
  "When you write for this plugin on a piano roll, you are writing without that constraint. That is a freedom, and also the main way kora parts end up sounding unidiomatic. The traditional patterns in the library were voiced with the hand split in mind.",
];

const tuningIntro = [
  "A kora is tuned to one of a small number of named tunings, and the repertoire is organised by them — a piece belongs to a tuning. Because changing tuning means sliding twenty-one leather rings, a player does not switch mid-performance. Pieces are grouped into sets that share a tuning.",
  "The tables below are the actual cents values the instrument uses, with F as the root. Degrees are given as cents above the root, so you can see where they sit against equal temperament — where a 12-tone piano would put 0, 200, 400, 500, 700, 900, 1100.",
];

type TuningRow = [string, string, string, string];
const tunings: {
  name: string;
  alt: string;
  scale: string;
  rows: TuningRow[];
  body: string;
}[] = [
  {
    name: "Silaba",
    alt: "also Tomora Ba",
    scale: "Ionian — F G A B♭ C D E",
    rows: [
      ["1", "F", "0", "—"],
      ["2", "G", "200", "—"],
      ["3", "A", "400", "—"],
      ["4", "B♭", "500", "—"],
      ["5", "C", "700", "—"],
      ["6", "D", "900", "—"],
      ["7", "E", "1100", "—"],
    ],
    body: "Held deliberately at equal temperament so its seven degrees land exactly on piano keys. This is the tuning to use when the kora has to sit inside a tempered arrangement without beating against it.",
  },
  {
    name: "Hardino",
    alt: "micro-tuned major",
    scale: "Ionian — F G A B♭ C D E",
    rows: [
      ["1", "F", "0", "—"],
      ["2", "G", "204", "+4"],
      ["3", "A", "398", "−2"],
      ["4", "B♭", "502", "+2"],
      ["5", "C", "702", "+2"],
      ["6", "D", "898", "−2"],
      ["7", "E", "1098", "−2"],
    ],
    body: "Note what is and is not tempered. The fifth at 702 and fourth at 502 are essentially pure (3:2 is 701.96); the second at 204 is the Pythagorean whole tone (9:8). The third, sixth and seventh sit slightly narrow. The perfect intervals are tuned by ear to beat-free; the others are left where they fall.",
  },
  {
    name: "Sauta",
    alt: "raised fourth",
    scale: "Lydian — F G A B C D E",
    rows: [
      ["1", "F", "0", "—"],
      ["2", "G", "204", "+4"],
      ["3", "A", "395", "−5"],
      ["♯4", "B", "598", "−2"],
      ["5", "C", "702", "+2"],
      ["6", "D", "895", "−5"],
      ["7", "E", "1098", "−2"],
    ],
    body: "The raised fourth is the identity of this tuning, and at 598 cents it is almost exactly the tempered tritone. The third and sixth are noticeably narrower than in Hardino — five cents is small but audible as a slightly darker major. Taara and the Sauta settings of Kaira and Lambango live here.",
  },
  {
    name: "Tomora Mesengo",
    alt: "the minor one",
    scale: "Dorian — F G A♭ B♭ C D E♭",
    rows: [
      ["1", "F", "0", "—"],
      ["2", "G", "200", "—"],
      ["♭3", "A♭", "300", "—"],
      ["4", "B♭", "500", "—"],
      ["5", "C", "700", "—"],
      ["6", "D", "900", "—"],
      ["♭7", "E♭", "1000", "—"],
    ],
    body: "Dorian: a minor third and a flat seventh over a natural sixth. Kept at equal temperament for the same reason as Silaba. If you are writing the kora into house or techno in a minor key, start here — Tomora Meseng, Tomora Sunset and Kanimba are in this tuning.",
  },
];

const correction =
  "Earlier builds had Silaba as Mixolydian — a flat seventh — and labelled the Lydian tuning as Hardino. Both were wrong: Silaba is Ionian, and the raised-fourth tuning is Sauta. Everything in the library was rebuilt against the corrected tables. We mention it because if you read an older description of this plugin, that is what changed.";

const stages: {
  n: string;
  title: string;
  accent: string;
  body: string[];
  controls: string;
}[] = [
  {
    n: "1",
    title: "Excitation — the pluck",
    accent: "#3DA9FC",
    body: [
      "A short burst drives the string. Velocity selects between three recorded attack tiers, each with four alternating takes, so a repeated note does not reproduce the same transient. Over that, the modelled pluck sets how much of the sound is fingertip flesh and how much is nail — the difference between a round, soft note and a bright, articulate one.",
    ],
    controls: "Vel Curve · Vel Random · Timing Random",
  },
  {
    n: "2",
    title: "The string",
    accent: "#3DA9FC",
    body: [
      "A delay-line resonator per note, with a loss filter that makes high partials decay faster than low ones — which is what makes a plucked string sound plucked. Nylon and metal differ in stiffness, so they differ in how sharply the top end falls away and in how far the upper partials stretch out of pure harmonic ratio.",
      "Key-off damping is a separate layer: release a key and a short damping one-shot fires at one of three intensities, modelling a palm or fingertip arresting the string. It is off by default, because a kora does not damp unless the player chooses to.",
    ],
    controls: "String Material · Key-Off Damp · Damp Level · Detero",
  },
  {
    n: "3",
    title: "The body — gourd and hide",
    accent: "#8E2F39",
    body: [
      "The calabash is a resonant cavity with a dominant low mode; the cowhide head is a membrane that absorbs some of the top end. Together they are the instrument's formant — the reason two koras of the same tuning sound different.",
      "Two listening positions are provided and mixed freely: a contact position, tight and dry and close to the bridge, and a microphone position further out that hears the gourd and the air around it. Most presets are a blend. All-contact is the sound engineers reach for in a dense mix; all-mic is the sound of the instrument in a room.",
    ],
    controls: "Contact · Mic · Gourd Space",
  },
  {
    n: "4",
    title: "The other twenty strings",
    accent: "#8E2F39",
    body: [
      "This is the stage that does not exist in a sampler. Twenty-one coupled resonators, tuned to whatever the current tuning says, all receiving energy from the body. Pluck one string and the strings sharing partials with it begin to sound. Hold a chord and the bloom is different from the bloom of the same notes played apart.",
      "It is also why the instrument has a noise floor that is never quite silent while notes are decaying, and why fast passages wash together the way a real kora does. If you want it dry and separated, that is what the contact position and key-off damping are for.",
    ],
    controls:
      "coupled automatically to the active tuning; shaped by Gourd Space and the body mix",
  },
];

const controlGroups: { title: string; rows: [string, string][] }[] = [
  {
    title: "Instrument",
    rows: [
      ["String Material", "Nylon to metal — stiffness, brightness and partial stretch"],
      ["Detero", "Wear and irregularity in the string — away from clinical"],
      ["Key-Off Damp", "Arms the release damping one-shot. Off by default"],
      ["Damp Level", "How hard the damp lands"],
      ["Contact · Mic", "The two listening positions, mixed"],
      ["Gourd Space", "Size and liveness of the body cavity"],
    ],
  },
  {
    title: "Performance",
    rows: [
      ["Vel Curve", "How velocity maps to loudness and brightness"],
      ["Vel Random", "Per-note loudness spread — a programmed part stops being uniform"],
      ["Timing Random", "Per-note timing spread, pushing notes off the grid"],
      ["Mod Wheel", "Routed to articulation; automatable as a parameter"],
      ["Pitch Bend Range", "In semitones"],
      ["Keyswitches", "Low-register keys select articulation instead of sounding"],
    ],
  },
  {
    title: "Tuning & range",
    rows: [
      ["Scale Lock", "Folds out-of-mode notes into the tuning. Off = chromatic freedom"],
      ["Key Low · Key High", "Playable range, for layering or splits"],
      ["Width · Swap L/R", "Stereo spread of the two string ranks, and their sides"],
    ],
  },
  {
    title: "Beyond the instrument",
    rows: [
      ["Halo", "Six resonators excited by the dry signal; level and harmonic character. Mod wheel drives depth"],
      ["Aura", "Ambience stage — mix, drive, motion, space, sync"],
      ["EQ", "Four bands — low, lo-mid, presence, air — each with frequency and gain"],
      ["Intelligence", "Generates kora-idiomatic material — density, complexity, ornaments, range, swing, variation"],
    ],
  },
];

const eyebrow = {
  fontFamily: mono,
  fontSize: 12.5,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "#3DA9FC",
} as const;

const thCell: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 10.5,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#8a897d",
  textAlign: "left",
  padding: "0 10px 10px 0",
  borderBottom: "1px solid #e3dfd5",
};

export default function InstrumentPage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <KoraNav />

      {/* INTRO */}
      <header style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px 72px" }}>
        <div style={{ ...eyebrow, marginBottom: 22 }}>Reference</div>
        <h1 style={{ fontSize: 60, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.03, margin: "0 0 28px", maxWidth: "14em" }}>
          The instrument, the tunings, and the model
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.6, color: "#3a3a33", maxWidth: "40em", margin: 0 }}>
          This page is the long version. It covers how a kora is built and played, what the four tunings actually
          are in cents, and what each control in the plugin is doing to the model. If you are evaluating whether this
          instrument is accurate, this is the page to read.
        </p>
      </header>

      {/* HOW A KORA IS BUILT */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
            <div style={{ flex: "999 1 460px", minWidth: 0 }}>
              <h2 style={{ margin: "0 0 28px", fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                How a kora is built
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {builtParas.map((p, i) => (
                  <p key={i} style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>{p}</p>
                ))}
              </div>
            </div>

            {/* In numbers side card */}
            <div style={{ flex: "1 1 300px", minWidth: 280 }}>
              <div style={{ background: "#F8F8F5", border: "1px solid #e3dfd5", borderRadius: 12, padding: 28 }}>
                <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8a897d", marginBottom: 20 }}>
                  In numbers
                </div>
                <dl style={{ margin: 0 }}>
                  {inNumbers.map(([k, v], i) => (
                    <div
                      key={k}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 18,
                        padding: "12px 0",
                        borderTop: i === 0 ? "none" : "1px solid #ece8de",
                      }}
                    >
                      <dt style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a897d", flex: "0 0 auto" }}>{k}</dt>
                      <dd style={{ margin: 0, fontSize: 14.5, color: "#3a3a33", textAlign: "right" }}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Two detail figures — the defining parts */}
          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <KoraFigure
              src="/images/kora/03-calabash.jpg"
              alt="Illustration, close up: the half-calabash gourd body of a kora, its cowhide head held down by a ring of hand-driven tacks, with the sound hole cut into the side of the gourd."
              ratio="3 / 2"
              caption="The gourd body and tacked cowhide head. The sound hole is in the side, not the face."
            />
            <KoraFigure
              src="/images/kora/02-bridge.jpg"
              alt="Illustration, close up: the tall notched upright bridge of a kora standing on the hide, with strings seated in notches down both of its sides so they run in two separate parallel rows."
              ratio="3 / 2"
              caption="The notched upright bridge — strings seated on both sides, in two separate ranks."
            />
          </div>

          {/* The bit that explains the music */}
          <div style={{ marginTop: 64, maxWidth: "44em" }}>
            <h3 style={{ margin: "0 0 20px", fontSize: 25, fontWeight: 600, letterSpacing: "-0.02em" }}>
              The bit that explains the music
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>
                The 21 strings are not laid out in a single ascending row. They sit in two ranks, one on each side of
                the bridge, and consecutive notes of the scale <em>alternate between the ranks</em> — so a rising scale
                is played by the two hands trading notes.
              </p>
              {musicParas2.map((p, i) => (
                <p key={i} style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3a3a33" }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE FOUR TUNINGS */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 48px" }}>
        <h2 style={{ margin: "0 0 24px", fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em" }}>The four tunings</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: "48em", marginBottom: 48 }}>
          {tuningIntro.map((p, i) => (
            <p key={i} style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, color: "#3a3a33" }}>{p}</p>
          ))}
        </div>

        <div style={{ marginBottom: 48 }}>
          <KoraFigure
            src="/images/kora/04-tuning-rings.jpg"
            alt="Illustration, close up: a row of leather tuning rings wrapped around the neck of a kora, the near ones sharp and the far ones falling out of focus."
            ratio="21 / 9"
            caption="Tuning is done by sliding the leather rings along the neck — which is why changing mode is a job of minutes, and why the repertoire is organised around a handful of tunings."
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24 }}>
          {tunings.map((t) => (
            <article key={t.name} style={{ border: "1px solid #e3dfd5", background: "#fff", borderRadius: 10, padding: 28 }}>
              <h3 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>
                {t.name} <span style={{ fontSize: 14, fontWeight: 400, color: "#8a897d" }}>({t.alt})</span>
              </h3>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.1em", color: "#57564c", marginBottom: 18 }}>
                {t.scale}
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thCell}>Degree</th>
                    <th style={thCell}>Note</th>
                    <th style={thCell}>Cents</th>
                    <th style={{ ...thCell, padding: "0 0 10px 0" }}>vs 12-TET</th>
                  </tr>
                </thead>
                <tbody>
                  {t.rows.map((r, i) => (
                    <tr key={i}>
                      <td style={{ fontFamily: mono, fontSize: 13.5, color: "#1D1C18", padding: "9px 10px 9px 0", borderBottom: "1px solid #ece8de" }}>{r[0]}</td>
                      <td style={{ fontSize: 14.5, color: "#3a3a33", padding: "9px 10px 9px 0", borderBottom: "1px solid #ece8de" }}>{r[1]}</td>
                      <td style={{ fontFamily: mono, fontSize: 13.5, color: "#3a3a33", padding: "9px 10px 9px 0", borderBottom: "1px solid #ece8de" }}>{r[2]}</td>
                      <td style={{ fontFamily: mono, fontSize: 13.5, color: r[3] === "—" ? "#8a897d" : "#8E2F39", padding: "9px 0", borderBottom: "1px solid #ece8de" }}>{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ margin: "20px 0 0", fontSize: 14.5, lineHeight: 1.65, color: "#57564c" }}>{t.body}</p>
            </article>
          ))}
        </div>

        {/* Correction callout */}
        <div
          style={{
            marginTop: 32,
            background: "#f1eee4",
            borderLeft: "3px solid #8E2F39",
            borderRadius: "0 8px 8px 0",
            padding: "24px 28px",
          }}
        >
          <div style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8E2F39", marginBottom: 12 }}>
            A correction we made
          </div>
          <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: "#3a3a33", maxWidth: "52em" }}>{correction}</p>
        </div>
      </section>

      {/* THE MODEL, STAGE BY STAGE */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", padding: "88px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 20px", fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em" }}>The model, stage by stage</h2>
          <p style={{ margin: "0 0 48px", fontSize: 16.5, lineHeight: 1.7, color: "#3a3a33", maxWidth: "46em" }}>
            Four stages in series, each with its own controls. Knowing which stage a knob belongs to makes the
            instrument much faster to dial in.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {stages.map((s) => (
              <div key={s.n} style={{ border: "1px solid #e3dfd5", background: "#F8F8F5", borderRadius: 10, padding: 28, display: "flex", flexWrap: "wrap", gap: 28 }}>
                <div style={{ flex: "0 0 auto" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      border: `2px solid ${s.accent}`,
                      color: s.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: mono,
                      fontSize: 17,
                      fontWeight: 500,
                    }}
                  >
                    {s.n}
                  </div>
                </div>
                <div style={{ flex: "1 1 460px", minWidth: 0 }}>
                  <h3 style={{ margin: "0 0 14px", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {s.body.map((p, i) => (
                      <p key={i} style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "#3a3a33" }}>{p}</p>
                    ))}
                  </div>
                  <p style={{ margin: "18px 0 0", fontFamily: mono, fontSize: 12.5, letterSpacing: "0.04em", color: "#57564c", lineHeight: 1.6 }}>
                    <span style={{ color: "#8a897d", letterSpacing: "0.14em", textTransform: "uppercase" }}>Controls:</span> {s.controls}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVERY CONTROL */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 48px" }}>
        <h2 style={{ margin: "0 0 16px", fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em" }}>Every control</h2>
        <p style={{ margin: "0 0 48px", fontSize: 16.5, lineHeight: 1.7, color: "#3a3a33", maxWidth: "46em" }}>
          Grouped as they appear in the plugin. All are automatable.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 40 }}>
          {controlGroups.map((g) => (
            <div key={g.title}>
              <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 16 }}>
                {g.title}
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ ...thCell, width: "38%" }}>Control</th>
                    <th style={{ ...thCell, padding: "0 0 10px 0" }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {g.rows.map(([c, d]) => (
                    <tr key={c}>
                      <td style={{ fontSize: 14.5, fontWeight: 500, color: "#1D1C18", padding: "12px 14px 12px 0", borderBottom: "1px solid #ece8de", verticalAlign: "top" }}>{c}</td>
                      <td style={{ fontSize: 14.5, lineHeight: 1.55, color: "#3a3a33", padding: "12px 0", borderBottom: "1px solid #ece8de", verticalAlign: "top" }}>{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING STRIP */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", padding: "96px 48px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <p style={{ margin: "0 0 28px", fontSize: 19, lineHeight: 1.6, color: "#3a3a33" }}>
            Next: how the 1,030 patterns are organised, and what each traditional piece is.
          </p>
          <Link href="/patterns" style={{ ...btn, display: "inline-block", fontSize: 16, background: "#1D1C18", color: "#F8F8F5", padding: "16px 34px", borderRadius: 3 }}>
            The pattern library
          </Link>
        </div>
      </section>

      <KoraFooter />
    </div>
  );
}
