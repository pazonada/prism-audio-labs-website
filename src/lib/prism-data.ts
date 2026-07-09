export type Plugin = {
  num: string;
  slug: string;
  name: string;
  tag: string;
  shortTag: string;
  desc: string;
  role?: "origin";
};

// The five instruments of the Spectrum collection.
export const plugins: Plugin[] = [
  {
    num: "01",
    slug: "lunar",
    name: "Lunar",
    tag: "Electric piano",
    shortTag: "E. piano",
    desc: "A warm electric piano — tine and reed voices with vintage amp, chorus and vibrato built in.",
  },
  {
    num: "02",
    slug: "seismic",
    name: "Seismic",
    tag: "Drum machine",
    shortTag: "Drums",
    desc: "The rhythm engine. Punchy 808/909-style drums with per-voice synthesis and an onboard sequencer.",
    role: "origin",
  },
  {
    num: "03",
    slug: "dragon",
    name: "Dragon",
    tag: "Bass synth",
    shortTag: "Bass",
    desc: "A monophonic bass synth — deep sub, hard drive and a fast, snappy envelope for low-end weight.",
  },
  {
    num: "04",
    slug: "stellar",
    name: "Stellar",
    tag: "Supersaw synth",
    shortTag: "Supersaw",
    desc: "Wide supersaw leads and pads — stacked detuned oscillators built for trance lifts and festival tops.",
  },
  {
    num: "05",
    slug: "comet",
    name: "Comet",
    tag: "Poly synth",
    shortTag: "Poly synth",
    desc: "A silky Juno-style polysynth with lush chorus, a rubbery filter and effortless, glassy pads.",
  },
];

export const COLLECTION_PRICE = 129;
export const SINGLE_PRICE = 39;
