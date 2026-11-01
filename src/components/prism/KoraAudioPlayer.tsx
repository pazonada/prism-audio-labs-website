"use client";

import { useRef, useState } from "react";

const mono = "'IBM Plex Mono', monospace";

function fmt(s: number) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60);
  return m + ":" + String(ss).padStart(2, "0");
}

// Real <audio>-backed player styled in the current light design. Playing one
// pauses any other player on the page.
export function KoraAudioPlayer({
  src,
  title,
  meta,
  sub,
}: {
  src: string;
  title: string;
  meta?: string;
  sub?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);

  function toggle() {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      document.querySelectorAll("audio").forEach((el) => {
        if (el !== a) el.pause();
      });
      void a.play();
    } else {
      a.pause();
    }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const a = audioRef.current;
    if (!a || !dur) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const frac = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    a.currentTime = frac * dur;
  }

  const frac = dur ? cur / dur : 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: "#fff",
        border: "1px solid #e3dfd5",
        borderRadius: 8,
        padding: "14px 18px",
      }}
    >
      <button
        onClick={toggle}
        aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        style={{
          flex: "none",
          width: 44,
          height: 44,
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
        {playing ? "❚❚" : "►"}
      </button>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
          <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em" }}>{title}</span>
          {meta && (
            <span style={{ flex: "none", fontFamily: mono, fontSize: 11.5, color: "#8a897d", whiteSpace: "nowrap" }}>
              {meta}
            </span>
          )}
        </div>

        <div
          onClick={seek}
          style={{ marginTop: 9, height: 6, borderRadius: 3, background: "#e3dfd5", cursor: "pointer", overflow: "hidden" }}
        >
          <div style={{ width: `${frac * 100}%`, height: "100%", background: "#3DA9FC", borderRadius: 3 }} />
        </div>

        {sub && <p style={{ margin: "10px 0 0", fontSize: 13.5, lineHeight: 1.6, color: "#57564c" }}>{sub}</p>}
      </div>

      <span style={{ flex: "none", fontFamily: mono, fontSize: 11.5, color: "#8a897d", whiteSpace: "nowrap" }}>
        {fmt(cur)} / {fmt(dur)}
      </span>

      <audio
        ref={audioRef}
        src={src}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
      />
    </div>
  );
}
