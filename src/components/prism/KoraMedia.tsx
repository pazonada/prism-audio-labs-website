// Shared media primitives for the Kora pages.
//
// The photographic artwork is generated illustration, not documentary — alt
// text describes the depicted object as an illustration and never implies a
// real player, place or performance (per Arya's artwork note). The two images
// that include a person (hands / backlit silhouette) are deliberately
// non-identifying and captioned accordingly.

const mono = "'IBM Plex Mono', monospace";

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string; // CSS aspect-ratio, e.g. "16 / 9"
  eager?: boolean;
};

/** Framed, rounded figure that sits inside the page's content column. */
export function KoraFigure({ src, alt, caption, ratio = "16 / 9", eager = false }: FigureProps) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          aspectRatio: ratio,
          overflow: "hidden",
          borderRadius: 12,
          border: "1px solid #e3dfd5",
          background: "#efece3",
        }}
      >
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            margin: "12px 2px 0",
            fontFamily: mono,
            fontSize: 12.5,
            letterSpacing: "0.01em",
            color: "#8a897d",
            lineHeight: 1.55,
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Full-bleed cinematic band, edge to edge, bordered top and bottom. */
export function KoraBand({
  src,
  alt,
  eager = false,
  position = "center",
}: {
  src: string;
  alt: string;
  eager?: boolean;
  position?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "clamp(240px, 42vw, 480px)",
        overflow: "hidden",
        borderTop: "1px solid #e3dfd5",
        borderBottom: "1px solid #e3dfd5",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: position, display: "block" }}
      />
    </div>
  );
}

/**
 * Placeholder for the plugin interface screenshot. The UI is still in design,
 * so this reserves the spot with faux plugin-window chrome rather than shipping
 * a stand-in image.
 */
export function KoraUIPlaceholder({
  note = "A screenshot of the instrument goes here once the interface is final.",
}: {
  note?: string;
}) {
  return (
    <div
      style={{
        borderRadius: 14,
        border: "1px solid #e3dfd5",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 1px 0 #ece8de",
      }}
    >
      {/* faux window title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 16px",
          borderBottom: "1px solid #e3dfd5",
          background: "#f4f1e9",
        }}
      >
        <span style={{ width: 11, height: 11, borderRadius: 999, background: "#d9d4c7", display: "inline-block" }} />
        <span style={{ width: 11, height: 11, borderRadius: 999, background: "#d9d4c7", display: "inline-block" }} />
        <span style={{ width: 11, height: 11, borderRadius: 999, background: "#d9d4c7", display: "inline-block" }} />
        <span
          style={{
            marginLeft: 10,
            fontFamily: mono,
            fontSize: 11.5,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#8a897d",
          }}
        >
          Prism Kora
        </span>
      </div>
      {/* placeholder body */}
      <div
        style={{
          aspectRatio: "16 / 9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          textAlign: "center",
          padding: 32,
          background:
            "repeating-linear-gradient(135deg, #faf8f3 0px, #faf8f3 22px, #f4f1e9 22px, #f4f1e9 44px)",
        }}
      >
        <div
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3DA9FC",
          }}
        >
          Plugin interface
        </div>
        <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", color: "#1D1C18" }}>
          The Kora UI is in design
        </div>
        <p style={{ margin: 0, maxWidth: "30em", fontSize: 14.5, lineHeight: 1.6, color: "#57564c" }}>{note}</p>
      </div>
    </div>
  );
}
