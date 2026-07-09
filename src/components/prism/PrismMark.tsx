export function PrismMark({
  size = 30,
  stroke = "#1D1C18",
}: {
  size?: number;
  stroke?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 118 118" fill="none">
      <line x1="92" y1="20" x2="64" y2="90" stroke="#3DA9FC" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M92 20 L4 112" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
      <path
        d="M92 20 L92 90 M25 90 L92 90"
        stroke={stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// "Prism Audio Labs" wordmark — "Prism" light/dimmed, "Audio Labs" bold.
export function Wordmark({ size = 17 }: { size?: number }) {
  return (
    <span style={{ letterSpacing: "-0.01em", fontSize: size, lineHeight: 1, whiteSpace: "nowrap" }}>
      <span style={{ fontWeight: 500, opacity: 0.55 }}>Prism</span>{" "}
      <span style={{ fontWeight: 700 }}>Audio Labs</span>
    </span>
  );
}
