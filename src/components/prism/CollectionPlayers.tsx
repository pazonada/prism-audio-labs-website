"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { plugins } from "@/lib/prism-data";

const mono = "'IBM Plex Mono', monospace";
const N = 48;
const DUR = 12;
const VBW = N * 6;

function hb(i: number, seed: number) {
  const a = Math.abs(Math.sin((i + seed * 5) * 0.55));
  const b = 0.5 + 0.5 * Math.abs(Math.sin((i + seed * 2) * 0.19));
  // Round so server and client SSR/hydration agree to the digit (avoids float mismatch).
  return Math.round((5 + 34 * a * b) * 1000) / 1000;
}
function fmt(s: number) {
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60);
  return m + ":" + String(ss).padStart(2, "0");
}

export function CollectionPlayers() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  function toggle(k: number) {
    if (activeIndex === k && playing) {
      if (timer.current) clearInterval(timer.current);
      setPlaying(false);
      return;
    }
    const reset = activeIndex !== k || progress >= DUR;
    let p = reset ? 0 : progress;
    setActiveIndex(k);
    setPlaying(true);
    setProgress(p);
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {plugins.map((pl, k) => {
        const active = activeIndex === k;
        const frac = active ? progress / DUR : 0;
        const fillCount = Math.floor(frac * N);
        const glyph = active && playing ? "❚❚" : "►";
        const href = `/plugins/${pl.slug}`;

        return (
          <div
            key={pl.slug}
            style={{
              background: "#fff",
              border: "1px solid #e3dfd5",
              borderRadius: 10,
              padding: "26px 32px",
              display: "flex",
              alignItems: "center",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
                <span style={{ fontFamily: mono, fontSize: 12, color: "#8a897d" }}>{pl.num}</span>
                <h3 style={{ fontSize: 27, fontWeight: 600, letterSpacing: "-0.025em", margin: 0 }}>
                  {pl.name}
                </h3>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 10.5,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#3DA9FC",
                    border: "1px solid #cfe6fb",
                    background: "#f2f9ff",
                    padding: "5px 10px",
                    borderRadius: 100,
                  }}
                >
                  {pl.tag}
                </span>
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#57564c", margin: "14px 0 0", maxWidth: 460 }}>
                {pl.desc}
              </p>
            </div>

            <div style={{ flex: "none", width: 420, maxWidth: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  background: "#F8F8F5",
                  border: "1px solid #e3dfd5",
                  borderRadius: 8,
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <button
                  onClick={() => toggle(k)}
                  aria-label={active && playing ? "Pause preview" : "Play preview"}
                  style={{
                    flex: "none",
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "#1D1C18",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    lineHeight: 1,
                  }}
                >
                  {glyph}
                </button>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <svg viewBox={`0 0 ${VBW} 56`} width="100%" height="38" preserveAspectRatio="none" style={{ display: "block" }}>
                    {Array.from({ length: N }, (_, i) => {
                      const h = hb(i, k);
                      const fill = active && i <= fillCount ? "#3DA9FC" : "#d5d1c7";
                      return <rect key={i} x={i * 6} y={(56 - h) / 2} width="3.4" height={h} rx="1.7" fill={fill} />;
                    })}
                  </svg>
                </div>
                <span style={{ flex: "none", fontFamily: mono, fontSize: 11.5, color: "#8a897d", whiteSpace: "nowrap" }}>
                  {fmt(active ? progress : 0)} / {fmt(DUR)}
                </span>
              </div>
              <Link
                href={href}
                style={{
                  fontFamily: mono,
                  fontSize: 12.5,
                  letterSpacing: "0.04em",
                  color: "#8E2F39",
                  alignSelf: "flex-end",
                  borderBottom: "1px solid #8E2F39",
                  paddingBottom: 2,
                }}
              >
                View plugin →
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
