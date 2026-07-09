"use client";

import { useState } from "react";

const mono = "'IBM Plex Mono', monospace";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: mono,
  fontSize: 10.5,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#8a897d",
  marginBottom: 9,
};
const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#242219",
  border: "1px solid #34322a",
  borderRadius: 8,
  padding: "13px 14px",
  fontSize: 15,
  color: "#F1EFE8",
};

export function AboutContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div style={{ border: "1px solid #34322a", borderRadius: 12, padding: "44px 40px", textAlign: "center" }}>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 10, color: "#F4EEE1" }}>
          Thanks — message received.
        </div>
        <div style={{ fontSize: 14.5, color: "#a6a49a" }}>We&apos;ll reply to your inbox shortly.</div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={{ display: "flex", flexDirection: "column", gap: 18 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input type="text" required placeholder="Your name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" required placeholder="you@studio.com" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea required rows={5} placeholder="What can we help with?" style={{ ...inputStyle, resize: "vertical" }} />
      </div>
      <button
        type="submit"
        style={{
          alignSelf: "flex-start",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: 13.5,
          letterSpacing: "0.05em",
          background: "#8E2F39",
          color: "#fff",
          padding: "14px 30px",
          borderRadius: 4,
        }}
      >
        Send message
      </button>
    </form>
  );
}
