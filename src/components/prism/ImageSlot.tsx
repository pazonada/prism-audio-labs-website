// Placeholder for real imagery (plugin UI shots, video posters, etc.).
// Swap for a real <Image> / <video> when assets are ready.
export function ImageSlot({ label }: { label: string }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "repeating-linear-gradient(135deg,#efece3,#efece3 10px,#eae7dc 10px,#eae7dc 20px)",
        color: "#a9a596",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      {label}
    </div>
  );
}
