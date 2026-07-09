"use client";

import { useEffect, useRef, useState } from "react";

const mono = "'IBM Plex Mono', monospace";
const N = 56;
const DUR = 12;
const VBW = N * 6;

function hb(i: number, seed: number) {
  const a = Math.abs(Math.sin((i + seed * 7) * 0.5));
  const b = 0.45 + 0.55 * Math.abs(Math.sin((i + seed * 3) * 0.21));
  // Round so server and client SSR/hydration agree to the digit (avoids float mismatch).
  return Math.round((5 + 36 * a * b) * 1000) / 1000;
}
function fmt(s: number) {
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60);
  return m + ":" + String(ss).padStart(2, "0");
}

export function ProductDemo({
  accent,
  demoKits,
  heading,
}: {
  accent: string;
  demoKits: string[];
  heading: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [demoIndex, setDemoIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  function toggle() {
    if (playing) {
      if (timer.current) clearInterval(timer.current);
      setPlaying(false);
      return;
    }
    let p = progress >= DUR ? 0 : progress;
    setProgress(p);
    setPlaying(true);
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      p += 0.1;
      if (p >= DUR) {
        if (timer.current) clearInterval(timer.current);
        setPlaying(false);
        setProgress(DUR);
        return;
      }
      setProgress(p);
    }, 100);
  }

  function selectDemo(i: number) {
    setDemoIndex(i);
    setProgress(0);
  }

  const fillCount = Math.floor((progress / DUR) * N);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e3dfd5",
        borderRadius: 12,
        padding: "28px 32px",
        display: "flex",
        alignItems: "center",
        gap: 32,
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "none" }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: accent, marginBottom: 8 }}>
          Hear it
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>{heading}</div>
      </div>

      <div style={{ flex: 1, minWidth: 340, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ background: "#F8F8F5", border: "1px solid #e3dfd5", borderRadius: 9, padding: "15px 18px", display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={toggle}
            aria-label={playing ? "Pause demo" : "Play demo"}
            style={{ flex: "none", width: 46, height: 46, borderRadius: "50%", background: accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}
          >
            {playing ? "❚❚" : "►"}
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <svg viewBox={`0 0 ${VBW} 56`} width="100%" height="42" preserveAspectRatio="none" style={{ display: "block" }}>
              {Array.from({ length: N }, (_, i) => {
                const h = hb(i, demoIndex);
                const fill = i <= fillCount && (playing || progress > 0) ? accent : "#d5d1c7";
                return <rect key={i} x={i * 6} y={(56 - h) / 2} width="3.4" height={h} rx="1.7" fill={fill} />;
              })}
            </svg>
          </div>
          <span style={{ flex: "none", fontFamily: mono, fontSize: 12, color: "#8a897d", whiteSpace: "nowrap" }}>
            {fmt(progress)} / {fmt(DUR)}
          </span>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {demoKits.map((label, i) => {
            const on = i === demoIndex;
            return (
              <button
                key={label}
                onClick={() => selectDemo(i)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: 11.5,
                  letterSpacing: "0.04em",
                  padding: "8px 15px",
                  borderRadius: 100,
                  background: on ? "#1D1C18" : "#fff",
                  color: on ? "#F8F8F5" : "#57564c",
                  border: `1px solid ${on ? "#1D1C18" : "#e3dfd5"}`,
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
