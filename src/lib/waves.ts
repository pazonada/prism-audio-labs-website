// A horizontally-tiling wave with randomized peak heights. The amplitude
// sequence repeats every tile (H*n px) so translating by one tile loops
// seamlessly; n must be even so the up/down phase also lines up.
// Deterministic (seeded), so paths are computed once and rendered statically.
function seededWave(
  H: number,
  n: number,
  ampMin: number,
  ampMax: number,
  baseline: number,
  seed: number,
): string {
  let s = seed >>> 0;
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  const amps: number[] = [];
  for (let i = 0; i < n; i++) amps.push(ampMin + rnd() * (ampMax - ampMin));
  const T = H * n;
  let x = Math.floor(-400 / T) * T; // align tile boundary to a multiple of T
  let d = "M " + x + " " + baseline;
  let i = 0;
  let up = true;
  while (x < 4400) {
    const amp = amps[i % n];
    const cx = x + H / 2;
    const cy = up ? baseline - amp : baseline + amp;
    const nx = x + H;
    d += " Q " + cx.toFixed(1) + " " + cy.toFixed(1) + " " + nx.toFixed(1) + " " + baseline;
    x = nx;
    up = !up;
    i++;
  }
  return d;
}

export const waveGrey = seededWave(34, 20, 10, 34, 52, 7);
export const waveBlue = seededWave(40, 16, 8, 26, 52, 21);
export const waveYellow = seededWave(28, 18, 6, 18, 52, 43);
