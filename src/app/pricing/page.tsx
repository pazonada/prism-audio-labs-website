import type { Metadata } from "next";
import Link from "next/link";
import { KoraNav } from "@/components/prism/KoraNav";
import { KoraFooter } from "@/components/prism/KoraFooter";

const mono = "'IBM Plex Mono', monospace";
const btn = { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 } as const;

export const metadata: Metadata = {
  title: "Buy",
  description:
    "One instrument, one price. Buy Prism Kora with a perpetual licence, or try the whole thing free for 14 days — no card, nothing withheld.",
};

const buyPerks = [
  "The complete instrument",
  "74 presets, 1,030 patterns",
  "VST3, AU and standalone",
  "Two activations — studio and laptop",
  "Free updates within version 1",
  "30-day return, no reason needed",
];

const tryPerks = [
  "Every feature, unrestricted",
  "No noise bursts, no silencing, no watermark",
  "Your projects keep working after you buy",
  "When it expires it stops making sound, and that is all",
];

const steps = [
  { n: "1", label: "Checkout", body: "Card or PayPal. Prices shown in your currency, tax calculated at checkout." },
  { n: "2", label: "Licence by email", body: "A key and a download link, immediately. Both stay valid; keep the email." },
  { n: "3", label: "Install", body: "One installer; choose the formats you want. Around 110 MB each." },
  { n: "4", label: "Activate once", body: "Paste the key into the plugin. It checks once, then works offline forever." },
];

const requirements = [
  { label: "Operating system", value: "macOS [MINIMUM VERSION]" },
  { label: "Architecture", value: "Apple silicon and Intel" },
  { label: "Formats", value: "VST3 · AU · Standalone" },
  { label: "Disk", value: "≈110 MB per format" },
  { label: "Windows", value: "Not at launch" },
];

const licence = [
  {
    title: "Music you make is yours",
    body: "Commercial releases, sync, games, client work — no royalty, no reporting, no credit required. Credit is welcome, never owed.",
  },
  {
    title: "Patterns are yours to use and alter",
    body: "Use them as written or edit them. What you cannot do is redistribute the pattern set itself as a MIDI product.",
  },
  {
    title: "Two machines",
    body: "Enough for a studio machine and a laptop. Move an activation yourself if a machine dies; you do not need to ask us.",
  },
  {
    title: "Offline after the first check",
    body: "One online check at activation. After that it never needs the internet, and a studio with no network keeps working.",
  },
  {
    title: "If we disappear",
    body: "Already-activated installations keep running. A perpetual licence that depends on a company surviving is not perpetual.",
  },
  {
    title: "Returns",
    body: "30 days, no reason required. There is a free trial, so if you have bought it and it is wrong for you, we would rather you had your money back.",
  },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Do I need to know anything about kora music to use this?",
    a: (
      <>
        No. Load a preset, play, and it sounds like a kora. The pattern library and{" "}
        <Link href="/instrument" style={{ color: "#8E2F39", borderBottom: "1px solid #8E2F39", paddingBottom: 1 }}>
          the reference pages
        </Link>{" "}
        are there if you want to understand what you are playing, which most people end up wanting.
      </>
    ),
  },
  {
    q: "Is this a sample library?",
    a: "No. It is a physical model, with a short sampled attack transient layered over the modelled string. That is why it is around 110 MB rather than several gigabytes, and why retuning it actually works. Most of that figure is the pattern library, not audio.",
  },
  {
    q: "Will it sound right in a tempered mix?",
    a: "Use Silaba or Tomora Mesengo — both are held at equal temperament for exactly that reason. Hardino and Sauta are the micro-tuned ones, and they will beat gently against a piano. That is the trade, and you choose it per project.",
  },
  {
    q: "Can I play it with a normal keyboard?",
    a: "Yes. Scale lock folds out-of-mode notes into the tuning, so you can play freely without hitting notes the instrument does not have. Turn it off if you want the chromatic freedom.",
  },
  {
    q: "Why only macOS?",
    a: "Because that is what we can currently test properly. A Windows build that we have not validated would be worse than no Windows build. [WINDOWS TIMELINE]",
  },
  {
    q: "Is there more coming?",
    a: "Kora is the first. Others are in development and not announced, because we would rather ship them than promise them.",
  },
];

function Perk({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 14.5, lineHeight: 1.5 }}>
      <span style={{ color: "#3DA9FC", flexShrink: 0 }}>✦</span>
      <span>{children}</span>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 15,
  color: "#1D1C18",
  background: "#fff",
  border: "1px solid #e3dfd5",
  borderRadius: 4,
  padding: "12px 14px",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: mono,
  fontSize: 11.5,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#57564c",
  marginBottom: 8,
};

export default function PricingPage() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1D1C18", background: "#F8F8F5" }}>
      <KoraNav />

      {/* INTRO */}
      <header style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px" }}>
        <h1 style={{ fontSize: 76, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.98, margin: "0 0 26px" }}>
          One instrument, one price
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.6, color: "#3a3a33", maxWidth: "40em", margin: 0 }}>
          No tiers, no content packs sold separately, no subscription. The 1,030 patterns and 74 presets are part of the
          instrument, not an expansion.
        </p>
      </header>

      {/* TWO CARDS */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24, alignItems: "stretch" }}>
          {/* Buy */}
          <div style={{ background: "#F8F8F5", border: "1px solid #e3dfd5", borderRadius: 14, padding: 40, display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8a897d", marginBottom: 16 }}>Buy</div>
            <div style={{ fontSize: 58, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 12 }}>$39</div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#57564c", margin: "0 0 28px" }}>One-off. Perpetual licence.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32, color: "#3a3a33" }}>
              {buyPerks.map((t) => <Perk key={t}>{t}</Perk>)}
            </div>
            <Link href="#checkout" style={{ ...btn, marginTop: "auto", textAlign: "center", fontSize: 15, background: "#1D1C18", color: "#F8F8F5", padding: 15, borderRadius: 3 }}>
              Buy Prism Kora
            </Link>
          </div>

          {/* Try first */}
          <div style={{ background: "#F8F8F5", border: "1px solid #e3dfd5", borderRadius: 14, padding: 40, display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8a897d", marginBottom: 16 }}>Try first</div>
            <div style={{ fontSize: 58, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 12 }}>14 days</div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#57564c", margin: "0 0 28px" }}>No card. No account needed to download.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32, color: "#3a3a33" }}>
              {tryPerks.map((t) => <Perk key={t}>{t}</Perk>)}
            </div>
            <Link href="#" style={{ ...btn, marginTop: "auto", textAlign: "center", fontSize: 15, border: "1px solid #1D1C18", color: "#1D1C18", padding: 14, borderRadius: 3 }}>
              Download the trial
            </Link>
          </div>
        </div>
        <p style={{ maxWidth: 1180, margin: "28px auto 0", fontSize: 15, lineHeight: 1.7, color: "#57564c" }}>
          A note on the trial: a demo that injects noise into your work teaches you nothing about the instrument except
          that it is annoying. Ours does not.
        </p>
      </section>

      {/* HOW BUYING AND ACTIVATING WORKS */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 48px" }}>
        <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, margin: "0 0 20px" }}>
          How buying and activating works
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3a3a33", maxWidth: "48em", margin: "0 0 44px" }}>
          Four steps. Licensing and delivery are handled by Moonbase, which is built for audio plugins — so there is no
          dongle, no iLok, and no account to maintain with us.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 24 }}>
          {steps.map((s) => (
            <div key={s.n} style={{ borderTop: "2px solid #3DA9FC", paddingTop: 20 }}>
              <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: "0.1em", color: "#8a897d", marginBottom: 10 }}>{s.n}</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 10px" }}>{s.label}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#57564c", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* CHECKOUT + SYSTEM REQUIREMENTS */}
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 24, marginTop: 56, alignItems: "start" }}>
          {/* Checkout panel (display only) */}
          <div id="checkout" style={{ background: "#fff", border: "1px solid #e3dfd5", borderRadius: 14, padding: 40 }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8a897d", marginBottom: 26 }}>Checkout</div>

            <div style={{ marginBottom: 22 }}>
              <label htmlFor="checkout-email" style={labelStyle}>Email — where the licence goes</label>
              <input id="checkout-email" type="email" placeholder="you@example.com" style={inputStyle} />
            </div>

            <div style={{ marginBottom: 22 }}>
              <label htmlFor="checkout-country" style={labelStyle}>Country — for tax</label>
              <select id="checkout-country" defaultValue="United States" style={inputStyle}>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>Elsewhere</option>
              </select>
            </div>

            <div style={{ display: "flex", gap: 11, alignItems: "flex-start", marginBottom: 26 }}>
              <input id="checkout-updates" type="checkbox" style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0, accentColor: "#1D1C18" }} />
              <label htmlFor="checkout-updates" style={{ fontSize: 14, lineHeight: 1.55, color: "#3a3a33" }}>
                Tell me when a new instrument ships. Nothing else — a handful of emails a year.
              </label>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, padding: "18px 0", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", marginBottom: 24, fontSize: 15 }}>
              <span style={{ color: "#3a3a33" }}>Prism Kora — perpetual licence</span>
              <span style={{ fontWeight: 600 }}>$39</span>
            </div>

            <button type="button" style={{ ...btn, width: "100%", fontSize: 15, background: "#1D1C18", color: "#F8F8F5", padding: 15, borderRadius: 3, border: "none", cursor: "pointer" }}>
              Continue to payment
            </button>

            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#8a897d", margin: "18px 0 0" }}>
              Payment is handled by Moonbase. We never see your card details.
            </p>
          </div>

          {/* System requirements side panel */}
          <aside style={{ background: "#fff", border: "1px solid #e3dfd5", borderRadius: 14, padding: 40 }}>
            <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 22px" }}>System requirements</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {requirements.map((r, i) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "12px 0", borderTop: i === 0 ? "none" : "1px solid #e3dfd5", fontSize: 14.5 }}>
                  <span style={{ color: "#57564c" }}>{r.label}</span>
                  <span style={{ textAlign: "right", fontWeight: 500 }}>{r.value}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#57564c", margin: "22px 0 0" }}>
              Tested in [HOSTS TESTED]. If it misbehaves in your DAW, tell us and we will fix it or refund you.
            </p>
          </aside>
        </div>
      </section>

      {/* THE LICENCE, IN PLAIN WORDS */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", borderBottom: "1px solid #e3dfd5", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, margin: "0 0 44px" }}>
            The licence, in plain words
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 40 }}>
            {licence.map((l) => (
              <div key={l.title}>
                <h3 style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 12px" }}>{l.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#3a3a33", margin: 0 }}>{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 48px" }}>
        <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, margin: "0 0 40px" }}>
          Questions people actually ask
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((f, i) => (
            <div key={f.q} style={{ borderTop: i === 0 ? "1px solid #e3dfd5" : "none", borderBottom: "1px solid #e3dfd5", padding: "26px 0" }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 12px" }}>{f.q}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#57564c", margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ background: "#fff", borderTop: "1px solid #e3dfd5", padding: "96px 48px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.2, margin: "0 0 22px" }}>
            Try it for two weeks
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#3a3a33", margin: "0 0 32px" }}>
            The whole instrument, no card, nothing withheld.
          </p>
          <Link href="#" style={{ ...btn, display: "inline-block", fontSize: 16, background: "#1D1C18", color: "#F8F8F5", padding: "16px 34px", borderRadius: 3 }}>
            Download the trial
          </Link>
        </div>
      </section>

      <KoraFooter />
    </div>
  );
}
