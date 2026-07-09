import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/prism/SiteNav";
import { SiteFooter } from "@/components/prism/SiteFooter";

const mono = "'IBM Plex Mono', monospace";
const btn = { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 } as const;

export const metadata: Metadata = {
  title: "Prism Link — one shared modulation bus",
  description:
    "Prism Link is a shared modulation bus between your Prism plugins. Set a movement once and every linked plugin follows it in real time — control data only, no routing, no audio between tracks.",
};

const carries = [
  {
    n: "01",
    title: "Per-voice envelopes",
    body: "Each of Seismic's eight voices broadcasts its amplitude envelope — one modulation source per drum.",
    icon: (
      <path d="M2 24 Q14 24 20 6 Q24 24 46 24 Q60 24 66 12 Q70 24 82 24" fill="none" stroke="#F1EFE8" strokeWidth="2" />
    ),
  },
  {
    n: "02",
    title: "Triggers & step",
    body: "Voice triggers and sequencer position let receivers gate and accent in lockstep with the pattern.",
    icon: (
      <>
        <g stroke="#F1EFE8" strokeWidth="2">
          <line x1="6" y1="4" x2="6" y2="24" />
          <line x1="27" y1="4" x2="27" y2="24" />
          <line x1="48" y1="4" x2="48" y2="24" />
          <line x1="69" y1="4" x2="69" y2="24" />
        </g>
        <line x1="0" y1="24" x2="84" y2="24" stroke="#6f6d63" strokeWidth="1.5" />
      </>
    ),
  },
  {
    n: "03",
    title: "Pitch & Fuse carrier",
    body: "A shared carrier frequency a ring modulator can lock to, so tuned textures stay in the kit's key.",
    icon: (
      <path d="M2 14 Q10 2 18 14 Q26 26 34 14 Q42 2 50 14 Q58 26 66 14 Q74 2 82 14" fill="none" stroke="#8E2F39" strokeWidth="2" />
    ),
  },
  {
    n: "04",
    title: "Tempo & mod-wheel",
    body: "Shared transport plus one performance control that moves every linked plugin at once.",
    icon: (
      <>
        <circle cx="16" cy="14" r="6" fill="none" stroke="#F1EFE8" strokeWidth="2" />
        <line x1="16" y1="14" x2="16" y2="6" stroke="#F1EFE8" strokeWidth="2" />
        <line x1="40" y1="24" x2="40" y2="4" stroke="#E9A93A" strokeWidth="2" />
        <line x1="52" y1="24" x2="52" y2="10" stroke="#E9A93A" strokeWidth="2" />
        <line x1="64" y1="24" x2="64" y2="14" stroke="#E9A93A" strokeWidth="2" />
        <line x1="76" y1="24" x2="76" y2="8" stroke="#E9A93A" strokeWidth="2" />
      </>
    ),
  },
];

const busChips = ["KICK ENV", "SNARE", "PITCH · FUSE", "STEP · 1/16", "BPM", "MOD CC1"];

const receivers = [
  { num: "02", name: "Dragon", reads: "sub filter tracks the kick", delay: "0s" },
  { num: "03", name: "Comet", reads: "pads lift on every kick", delay: "0.6s" },
  { num: "04", name: "Stellar", reads: "leads gate to the step grid", delay: "1.2s" },
  { num: "05", name: "Lunar", reads: "tremolo locked to tempo", delay: "1.8s" },
];

const hood = [
  {
    n: "01",
    title: "A shared bus, not a cable",
    body: "Seismic writes its eight streams to a small shared-memory bus on every block; receivers read it. Enable the link and every plugin on the same Link ID finds it — no routing to draw.",
  },
  {
    n: "02",
    title: "Control data only",
    body: "Envelopes, triggers, pitch, step, tempo and the carrier cross the link — audio never does. Nothing to gain-stage, no bleed, no added latency, and it survives the sandbox each plugin runs in.",
  },
  {
    n: "03",
    title: "Eight Link IDs",
    body: "Each link belongs to one of eight IDs, so two independent Seismic-led racks run in the same session without crosstalk. A receiver only follows the Seismic on its own ID.",
  },
];

const specs = [
  { label: "Transport", value: "Control data only", note: "Zero added latency, no audio on the bus." },
  { label: "Streams", value: "8 per block", note: "Envelopes, triggers, pitch, step, tempo, carrier, mod-wheel." },
  { label: "Link IDs", value: "8 independent", note: "Run parallel racks in one session, crosstalk-free." },
  { label: "Formats", value: "VST3 · AU · AAX", note: "Every Prism plugin links. No hub, no setup." },
];

export default function PrismLinkPage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <SiteNav theme="light" />

      {/* HERO */}
      <header style={{ position: "relative", overflow: "hidden", background: "#F8F8F5", color: "#1D1C18" }}>
        <svg width="640" height="600" viewBox="0 0 640 600" fill="none" style={{ position: "absolute", right: -140, top: -160, opacity: 0.6, pointerEvents: "none" }}>
          <g fill="none" strokeWidth="1.1">
            <circle cx="560" cy="60" r="120" stroke="#d4d0c5" />
            <circle cx="560" cy="60" r="185" stroke="#d4d0c5" />
            <circle cx="560" cy="60" r="250" stroke="#3DA9FC" strokeOpacity="0.4" />
            <circle cx="560" cy="60" r="315" stroke="#d4d0c5" />
            <circle cx="560" cy="60" r="380" stroke="#E9D77A" strokeOpacity="0.4" />
            <circle cx="560" cy="60" r="445" stroke="#d4d0c5" />
          </g>
        </svg>
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "34px 48px 96px" }}>
          <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 26 }}>The differentiator</div>
          <h1 style={{ fontSize: 84, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.92, margin: 0, maxWidth: 920, color: "#1D1C18" }}>
            A shared modulation bus between your Prism plugins.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: "#4a4940", maxWidth: 560, margin: "30px 0 0" }}>
            Set a movement in one — an envelope, the tempo, the groove — and every linked plugin follows it in real
            time. Only control data crosses the link, so there is nothing to route and no audio between tracks.
          </p>
        </div>
      </header>

      {/* WHAT IT CARRIES (dark) */}
      <section style={{ background: "#1D1C18", color: "#F1EFE8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 18 }}>What the link carries</div>
              <h2 style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
                Four streams of
                <br />
                musical movement.
              </h2>
            </div>
            <p style={{ fontFamily: mono, fontSize: 12.5, lineHeight: 1.75, color: "#a6a49a", maxWidth: 340, margin: 0 }}>
              Each linked plugin reads the streams it needs and maps them onto a musical default — automatable and
              re-pointable per patch.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {carries.map((c) => (
              <div key={c.n} style={{ background: "#242219", border: "1px solid #34322a", borderRadius: 12, padding: "26px 24px 28px" }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", color: "#3DA9FC", marginBottom: 20 }}>{c.n}</div>
                <svg viewBox="0 0 84 28" width="70" height="24" style={{ display: "block", marginBottom: 18 }}>{c.icon}</svg>
                <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 8px" }}>{c.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "#a6a49a", margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE FLOW (white) */}
      <section style={{ background: "#fff", color: "#1D1C18", padding: "104px 48px", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}>
            <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3DA9FC", marginBottom: 22 }}>How it flows</div>
            <h2 style={{ fontSize: 52, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0, color: "#1D1C18" }}>Seismic is the origin.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "#57564c", margin: "22px 0 0" }}>
              Seismic broadcasts, and every other plugin receives. Its eight voices generate sound, and on every audio
              block, a stream of control signals. The rhythm is also a set of modulation curves that the rest of the
              rack borrows.
            </p>
          </div>

          {/* origin */}
          <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <div style={{ background: "#F8F8F5", border: "1px solid #8E2F39", borderRadius: 12, padding: "22px 26px", textAlign: "center" }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8E2F39" }}>01 · origin — broadcasts</div>
              <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.025em", margin: "8px 0 4px" }}>Seismic</div>
              <div style={{ fontFamily: mono, fontSize: 11, color: "#8a897d" }}>Drum machine · 8 voices</div>
            </div>
          </div>
          <div style={{ width: 1, height: 30, margin: "0 auto", background: "linear-gradient(#8E2F39,#3DA9FC)" }} />

          {/* bus */}
          <div style={{ position: "relative", border: "1px solid rgba(61,169,252,0.4)", background: "#191812", borderRadius: 12, padding: "18px 24px", overflow: "hidden", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3DA9FC", whiteSpace: "nowrap" }}>◈ Prism Link bus</span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flex: 1 }}>
              {busChips.map((c) => (
                <span key={c} style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.06em", color: "#c9c7bd", border: "1px solid #34322a", borderRadius: 100, padding: "4px 11px" }}>{c}</span>
              ))}
            </div>
            <span style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.06em", color: "#6f6d63", whiteSpace: "nowrap" }}>control data · no audio</span>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: 8,
                  left: 20,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: i === 1 ? "#E9D77A" : "#3DA9FC",
                  boxShadow: `0 0 10px ${i === 1 ? "#E9D77A" : "#3DA9FC"}`,
                  animation: "busPulseWide 3s linear infinite",
                  animationDelay: `${i}s`,
                }}
              />
            ))}
          </div>

          {/* receivers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 2 }}>
            {receivers.map((r) => (
              <div key={r.num}>
                <div style={{ position: "relative", width: 1, height: 34, margin: "0 auto", background: "linear-gradient(#3DA9FC,rgba(61,169,252,0.12))" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: -3,
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#3DA9FC",
                      boxShadow: "0 0 8px #3DA9FC",
                      animation: "dropPulse 2.4s linear infinite",
                      animationDelay: r.delay,
                    }}
                  />
                </div>
                <div style={{ background: "#F8F8F5", border: "1px solid #e3dfd5", borderRadius: 11, padding: "18px 16px", textAlign: "center" }}>
                  <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.1em", color: "#8a897d" }}>{r.num} · receives</div>
                  <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", margin: "8px 0 8px" }}>{r.name}</div>
                  <div style={{ fontFamily: mono, fontSize: 10.5, lineHeight: 1.55, color: "#57564c" }}>{r.reads}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 15, lineHeight: 1.6, color: "#57564c", maxWidth: 640, margin: "44px auto 0" }}>
            Re-time the pattern and everything follows. Swap the kit and the textures re-voice with it. The mix begins
            to cohere before you touch a fader.
          </p>
        </div>
      </section>

      {/* MORE THAN SIDECHAINING */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "100px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 18 }}>The difference is dimensionality</div>
          <h2 style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>More than sidechaining.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}>
          <div style={{ background: "#fff", border: "1px solid #e3dfd5", borderRadius: 16, padding: "36px 34px" }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a897d", marginBottom: 20 }}>Sidechain compression</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22, fontFamily: mono, fontSize: 11.5, color: "#57564c" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#c0392b" }} />one source → one destination → gain
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "#4a4940", margin: 0 }}>
              One audio signal's level pushes another signal's level. A single dimension — loudness — and the pumping is
              a by-product of the gain stage doing its work.
            </p>
          </div>
          <div style={{ position: "relative", background: "#1D1C18", color: "#F1EFE8", borderRadius: 16, padding: "36px 34px", boxShadow: "0 40px 80px -40px rgba(0,0,0,0.5)" }}>
            <div style={{ position: "absolute", top: 22, right: 22, fontFamily: mono, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1D1C18", background: "#3DA9FC", padding: "5px 11px", borderRadius: 100 }}>Prism Link</div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8fb9d8", marginBottom: 20 }}>A modulation matrix</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22, fontFamily: mono, fontSize: 11.5, color: "#c9c7bd" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3DA9FC" }} />many sources → many destinations
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "#c9c7bd", margin: 0 }}>
              Every voice envelope, the pitch, the step grid and the carrier route into filter cutoff, resonance,
              ring-mod frequency, gate timing and amplitude. It acts on the parameters that shape timbre, so the plugins
              behave like one coupled instrument.
            </p>
          </div>
        </div>
      </section>

      {/* UNDER THE HOOD */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 48px" }}>
          <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8a897d", marginBottom: 18 }}>Under the hood</div>
          <h2 style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 52px", maxWidth: 560 }}>This is how it&apos;s connected.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 44 }}>
            {hood.map((h) => (
              <div key={h.n}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", color: "#3DA9FC", marginBottom: 14 }}>{h.n}</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.015em", margin: "0 0 10px" }}>{h.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#57564c", margin: 0 }}>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS STRIP */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 48px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "#e3dfd5", border: "1px solid #e3dfd5", borderRadius: 14, overflow: "hidden" }}>
          {specs.map((s) => (
            <div key={s.label} style={{ background: "#F8F8F5", padding: "30px 28px" }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8E2F39", marginBottom: 12 }}>{s.label}</div>
              <div style={{ fontSize: 17, fontWeight: 600 }}>{s.value}</div>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: "#57564c", margin: "8px 0 0" }}>{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORWARD COMPATIBILITY (oxblood) */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 48px" }}>
        <div style={{ background: "#8E2F39", color: "#F5E9EB", borderRadius: 20, padding: "72px 64px", position: "relative", overflow: "hidden" }}>
          <svg width="420" height="420" viewBox="0 0 420 420" fill="none" style={{ position: "absolute", right: -80, bottom: -140, opacity: 0.7 }}>
            <g fill="none" strokeWidth="1.1">
              <circle cx="300" cy="300" r="90" stroke="#a83e48" />
              <circle cx="300" cy="300" r="150" stroke="#E9D77A" strokeOpacity="0.35" />
              <circle cx="300" cy="300" r="210" stroke="#a83e48" />
              <circle cx="300" cy="300" r="270" stroke="#a83e48" />
            </g>
          </svg>
          <div style={{ position: "relative", maxWidth: 680 }}>
            <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E9D77A", marginBottom: 22 }}>Every release, one bus</div>
            <h2 style={{ fontSize: 46, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.02, margin: 0, color: "#FBF3F0" }}>New plugins join the plugins you already own.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "#e7c4c9", margin: "26px 0 0" }}>
              Prism Link is the constant across every release. When we ship new plugins, they connect to the same bus and
              speak the same streams — so the rack you build today keeps growing, and everything you already own links
              with everything that comes next. Nothing to migrate, nothing to re-buy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 48px 100px", textAlign: "center" }}>
        <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1, margin: "0 0 26px" }}>One bus. The whole rack.</h2>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/pricing" style={{ ...btn, fontSize: 13.5, letterSpacing: "0.05em", background: "#1D1C18", color: "#F8F8F5", padding: "15px 30px", borderRadius: 3 }}>
            Join the waitlist
          </Link>
          <Link href="/#plugins" style={{ ...btn, fontSize: 13.5, letterSpacing: "0.05em", padding: "14px 26px", border: "1px solid #1D1C18", borderRadius: 3 }}>
            Explore the plugins →
          </Link>
        </div>
      </section>

      <SiteFooter variant="mini" />
    </div>
  );
}
