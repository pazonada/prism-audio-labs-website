import { waveGrey, waveBlue, waveYellow } from "@/lib/waves";

function flow(shift: string, seconds: number): React.CSSProperties {
  return {
    ["--shift" as string]: shift,
    animation: `waveFlow ${seconds}s linear infinite`,
    willChange: "transform",
  } as React.CSSProperties;
}

export function WaveDivider() {
  return (
    <div
      style={{
        position: "relative",
        height: 104,
        marginTop: 56,
        borderTop: "1px solid #e3dfd5",
        borderBottom: "1px solid #e3dfd5",
        overflow: "hidden",
        background: "#F8F8F5",
        animation: "waveReveal 1.9s linear both",
      }}
    >
      <svg
        width="4000"
        height="104"
        viewBox="0 0 4000 104"
        fill="none"
        style={{ position: "absolute", left: "50%", marginLeft: -2000, top: 0 }}
      >
        <g style={flow("-680px", 24)}>
          <path d={waveGrey} stroke="#d4d0c5" strokeWidth="1.6" />
        </g>
        <g style={flow("-640px", 14)}>
          <path d={waveBlue} stroke="#3DA9FC" strokeWidth="2" opacity="0.9" />
        </g>
        <g style={flow("-504px", 8.5)}>
          <path d={waveYellow} stroke="#E9D77A" strokeWidth="2.6" opacity="0.95" />
        </g>
      </svg>
    </div>
  );
}
