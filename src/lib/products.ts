// Full content for each product page, keyed by slug.
// Source of truth: the Claude Design project (77b1058b-...). NOTE: the four
// "receiver" pages (Lunar/Dragon/Stellar/Comet) had leftover Seismic template
// text in About paragraphs 2–3 in the design; those two paragraphs are
// rewritten here to be plugin-accurate. Flag to Bon to fix at the design source.

export type Spec = { label: string; value: string };
export type Feature = { title: string; body: string };

export type ProductData = {
  slug: string;
  name: string;
  tag: string;
  accent: string;
  heroDesc: string;
  heroSpecChips: string[];
  buyPrice: string;
  walkthrough: { kicker: string; heading: string; sideNote: string } | null;
  demoKits: string[];
  hearItHeading: string;
  features: Feature[];
  about: { kicker: string; heading: string; paragraphs: string[] };
  specs: Spec[];
  prismLink: { kicker: string; heading: string; body: string; chips: string[]; ctaText: string };
  imageSlots: { hero: string; video: string | null; detail: string | null };
  sections: { showVideo: boolean; showDemo: boolean };
};

export const products: Record<string, ProductData> = {
  seismic: {
    slug: "seismic",
    name: "Seismic",
    tag: "Drum machine",
    accent: "#8E2F39",
    heroDesc:
      "The rhythm engine at the heart of Prism. Punchy 808/909-style drums with per-voice synthesis, a 64-step sequencer, and the groove that moves the whole rack.",
    heroSpecChips: ["VST3 · AU · AAX", "8 voices", "200+ kits"],
    buyPrice: "$39",
    walkthrough: {
      kicker: "Walkthrough",
      heading: "See Seismic in action.",
      sideNote: "A three-minute tour of the voices, the sequencer, and driving a linked rack from one kit.",
    },
    demoKits: ["Techno kit", "Breaks", "808 trap"],
    hearItHeading: "Seismic, in motion.",
    features: [
      { title: "Per-voice synthesis", body: "Eight fully synthesized voices — kick, snare, hats, toms, perc — each with its own shaping." },
      { title: "64-step sequencer", body: "Per-voice patterns, swing, ratchets and probability — programmed right inside the plugin." },
      { title: "Prism Link origin", body: "Seismic broadcasts its envelopes, triggers and tempo — the source the whole rack follows." },
      { title: "Analog-modeled drive", body: "Circuit-modeled saturation on every voice for weight, grit and that hardware punch." },
    ],
    about: {
      kicker: "About Seismic",
      heading: "A drum machine that thinks in modulation.",
      paragraphs: [
        "Seismic starts from raw synthesis, not samples. Every voice is generated on the fly — a tuned sine for the kick, filtered noise for the hats, a snappy body-and-crack for the snare — so nothing is locked to a static waveform. Shape the decay, pitch, drive and filter of each drum in real time, and the kit responds like an instrument rather than a folder of one-shots.",
        "The onboard 64-step sequencer turns those voices into grooves, with swing, ratchets and per-step probability. But the rhythm is more than sound: as Seismic plays, it publishes the envelope, trigger and pitch of each voice, the current step, and the tempo onto the Prism Link bus.",
        "That makes Seismic the origin of a linked rack. A pad in Comet can open on the kick, a bassline in Dragon can gate to the snare, and every texture stays sample-locked to the beat — because they're all moving on the same curves Seismic uses to make the groove.",
      ],
    },
    specs: [
      { label: "Formats", value: "VST3 · AU · AAX" },
      { label: "Platforms", value: "macOS 11+ · Win 10+" },
      { label: "Architecture", value: "64-bit · Apple Silicon" },
      { label: "Voices", value: "8 synthesized" },
      { label: "Sequencer", value: "64 steps · per voice" },
      { label: "Presets", value: "200+ kits & patterns" },
      { label: "Prism Link", value: "Origin · 8 streams" },
      { label: "Install size", value: "~90 MB" },
      { label: "License", value: "3 machines · free updates" },
    ],
    prismLink: {
      kicker: "Prism Link · the origin",
      heading: "Interoperability is our superpower.",
      body: "Seismic is the source of Prism Link. As it plays, it broadcasts eight streams of control data onto the bus — every other linked instrument reads what it needs and moves with the beat. No sidechain, no routing, no audio.",
      chips: ["Kick env", "Snare trig", "Hat env", "Voice pitch", "Step · 1/16", "Tempo · BPM", "Fuse carrier", "Mod wheel"],
      ctaText: "How Prism Link works →",
    },
    imageSlots: {
      hero: "Drop the Seismic plugin UI",
      video: "Drop a video poster (embed the real video here)",
      detail: "Drop a sequencer / interface close-up",
    },
    sections: { showVideo: true, showDemo: true },
  },

  lunar: {
    slug: "lunar",
    name: "Lunar",
    tag: "Electric piano",
    accent: "#8E2F39",
    heroDesc:
      "A warm electric piano for Prism. Tine and reed voices, vintage amp modelling, and studio chorus and vibrato — expressive from a whisper to a bark.",
    heroSpecChips: ["VST3 · AU · AAX", "16-voice", "180 presets"],
    buyPrice: "$39",
    walkthrough: {
      kicker: "Walkthrough",
      heading: "See Lunar in action.",
      sideNote: "A short tour of the two voices, the effects rack, and linking Lunar to a groove.",
    },
    demoKits: ["Warm Rhodes", "Wurli bite", "Ambient keys"],
    hearItHeading: "Lunar, in motion.",
    features: [
      { title: "Tine & reed engine", body: "Two classic electric-piano voices modelled from the pickup up — bell-like tines and breathy reeds." },
      { title: "Vintage amp & cab", body: "Switchable amp, tremolo and cabinet modelling for everything from clean to overdriven." },
      { title: "Prism Link receiver", body: "Link to Seismic and Lunar's tremolo, filter and volume move with the groove." },
      { title: "Studio effects", body: "Built-in chorus, phaser, reverb and drive — a finished sound without leaving the plugin." },
    ],
    about: {
      kicker: "About Lunar",
      heading: "An electric piano with feel in its fingertips.",
      paragraphs: [
        "Lunar models the whole signal path of a classic electric piano — the hammer striking the tine, the pickup's bloom, the preamp's warmth. Play softly and it stays glassy and intimate; dig in and it barks. Every note carries the velocity response that makes these instruments sing.",
        "Two voices — a bell-like tine and a breathy reed — cover the range from Rhodes-style shimmer to Wurlitzer bite. A full rack of chorus, phaser, tremolo, drive and reverb is built in, so a patch arrives finished.",
        "As a Prism Link receiver, Lunar listens to the bus. Link it to Seismic and its tremolo locks to the tempo, its filter opens on the kick, and its dynamics breathe with the kit — the piano stops being static and starts moving with the track.",
      ],
    },
    specs: [
      { label: "Formats", value: "VST3 · AU · AAX" },
      { label: "Platforms", value: "macOS 11+ · Win 10+" },
      { label: "Architecture", value: "64-bit · Apple Silicon" },
      { label: "Polyphony", value: "16 voices" },
      { label: "Engine", value: "Tine + reed model" },
      { label: "Presets", value: "180+ patches" },
      { label: "Prism Link", value: "Receiver" },
      { label: "Install size", value: "~140 MB" },
      { label: "License", value: "3 machines · free updates" },
    ],
    prismLink: {
      kicker: "Prism Link · receiver",
      heading: "Interoperability is our superpower.",
      body: "Lunar is a Prism Link receiver. Link it to Seismic and it moves with the groove automatically — tremolo locks to tempo, the filter opens on the kick, dynamics follow the kit. No sidechain, no routing, no audio.",
      chips: ["Trem → tempo", "Filter → kick env", "Volume → step", "Chorus depth", "Drive → snare", "Pan → mod wheel"],
      ctaText: "How Prism Link works →",
    },
    imageSlots: {
      hero: "Drop the Lunar plugin UI",
      video: "Drop a video poster (embed the real video here)",
      detail: "Drop a Lunar interface / voice panel close-up",
    },
    sections: { showVideo: true, showDemo: true },
  },

  dragon: {
    slug: "dragon",
    name: "Dragon",
    tag: "Bass synth",
    accent: "#8E2F39",
    heroDesc:
      "A monophonic bass synth with a huge bottom end. Fat oscillators, a snappy envelope and aggressive drive — the low end that anchors the whole rack.",
    heroSpecChips: ["VST3 · AU · AAX", "Monophonic", "160 presets"],
    buyPrice: "$39",
    walkthrough: {
      kicker: "Walkthrough",
      heading: "See Dragon in action.",
      sideNote: "A short tour of the oscillators, the drive stages, and gating Dragon to a beat.",
    },
    demoKits: ["Reese bass", "808 sub", "Acid line"],
    hearItHeading: "Dragon, in motion.",
    features: [
      { title: "Sub-heavy oscillators", body: "Stacked, sync-able oscillators with a dedicated sub for weight that translates on any system." },
      { title: "Snappy envelope", body: "A fast, punchy amp and filter envelope built for tight, articulate basslines." },
      { title: "Prism Link receiver", body: "Link to Seismic and Dragon gates to the snare and ducks to the kick — automatically." },
      { title: "Aggressive drive", body: "Multi-stage distortion and a resonant filter for growl, reese and screaming leads." },
    ],
    about: {
      kicker: "About Dragon",
      heading: "Low end with teeth.",
      paragraphs: [
        "Dragon is built for one job: bass that dominates. Two oscillators plus a dedicated sub give it weight, while hard sync, FM and a resonant multimode filter push it into growls, reeses and roars. It stays mono and focused so the low end is always tight.",
        "A fast envelope and snappy filter make it articulate — plucks, stabs and 16th-note rolls stay defined even under heavy drive. The multi-stage distortion goes from subtle warmth to full destruction.",
        "As a Prism Link receiver, Dragon locks to the kit. Link it to Seismic and it gates to the snare, ducks its level or filter to the kick, and stays sample-locked to the pattern — the bass and drums move as one instrument.",
      ],
    },
    specs: [
      { label: "Formats", value: "VST3 · AU · AAX" },
      { label: "Platforms", value: "macOS 11+ · Win 10+" },
      { label: "Architecture", value: "64-bit · Apple Silicon" },
      { label: "Polyphony", value: "Monophonic" },
      { label: "Engine", value: "2 osc + sub" },
      { label: "Presets", value: "160+ patches" },
      { label: "Prism Link", value: "Receiver" },
      { label: "Install size", value: "~90 MB" },
      { label: "License", value: "3 machines · free updates" },
    ],
    prismLink: {
      kicker: "Prism Link · receiver",
      heading: "Interoperability is our superpower.",
      body: "Dragon is a Prism Link receiver. Link it to Seismic and it moves with the groove automatically — gating to the snare, ducking to the kick, locked to the pattern. No sidechain, no routing, no audio.",
      chips: ["Gate → snare", "Level → kick env", "Filter → kick", "Pitch → key", "Accent → step", "Drive → mod wheel"],
      ctaText: "How Prism Link works →",
    },
    imageSlots: {
      hero: "Drop the Dragon plugin UI",
      video: "Drop a video poster (embed the real video here)",
      detail: "Drop a Dragon interface / filter panel close-up",
    },
    sections: { showVideo: true, showDemo: true },
  },

  stellar: {
    slug: "stellar",
    name: "Stellar",
    tag: "Supersaw synth",
    accent: "#8E2F39",
    heroDesc:
      "A supersaw powerhouse for trance and festival music. Stacks of detuned saws, huge unison, and lifts that fill the whole sky.",
    heroSpecChips: ["VST3 · AU · AAX", "8-voice", "220 presets"],
    buyPrice: "$39",
    walkthrough: {
      kicker: "Walkthrough",
      heading: "See Stellar in action.",
      sideNote: "A short tour of the supersaw stack, the trance gate, and syncing Stellar to a beat.",
    },
    demoKits: ["Festival lead", "Trance gate", "Wide pad"],
    hearItHeading: "Stellar, in motion.",
    features: [
      { title: "Supersaw engine", body: "Up to seven detuned saws per voice with unison spread for that wall-of-sound lift." },
      { title: "Wide & tall", body: "Stereo widening, super-unison and a dedicated width control built for the big room." },
      { title: "Prism Link receiver", body: "Link to Seismic and Stellar's gate, filter and pitch ride the pattern." },
      { title: "Trance gate & FX", body: "Built-in trance gate, reverb and delay synced to tempo — instant euphoric leads." },
    ],
    about: {
      kicker: "About Stellar",
      heading: "Built for the drop.",
      paragraphs: [
        "Stellar lives for the lift. Its oscillator stacks up to seven detuned saws per voice, and layered across unison it becomes a wall of sound that fills every corner of the mix. Pads, leads and plucks all come huge by default.",
        "A tempo-synced trance gate, shimmering reverb and ping-pong delay are built in, so a single patch is already festival-ready. Stereo width and super-unison controls let you go as wide and tall as the track needs.",
        "As a Prism Link receiver, Stellar rides the groove. Link it to Seismic and the trance gate locks to the step grid, the filter opens on the kick, and the whole lead pulses in time — no drawing envelopes by hand.",
      ],
    },
    specs: [
      { label: "Formats", value: "VST3 · AU · AAX" },
      { label: "Platforms", value: "macOS 11+ · Win 10+" },
      { label: "Architecture", value: "64-bit · Apple Silicon" },
      { label: "Polyphony", value: "8 voices" },
      { label: "Engine", value: "7× supersaw" },
      { label: "Presets", value: "220+ patches" },
      { label: "Prism Link", value: "Receiver" },
      { label: "Install size", value: "~110 MB" },
      { label: "License", value: "3 machines · free updates" },
    ],
    prismLink: {
      kicker: "Prism Link · receiver",
      heading: "Interoperability is our superpower.",
      body: "Stellar is a Prism Link receiver. Link it to Seismic and it moves with the groove automatically — trance gate to the step grid, filter to the kick, pulsing in time. No sidechain, no routing, no audio.",
      chips: ["Gate → step", "Filter → kick env", "Pitch → key", "Width → mod wheel", "Delay → tempo", "Accent → snare"],
      ctaText: "How Prism Link works →",
    },
    imageSlots: {
      hero: "Drop the Stellar plugin UI",
      video: "Drop a video poster (embed the real video here)",
      detail: "Drop a Stellar interface / unison panel close-up",
    },
    sections: { showVideo: true, showDemo: true },
  },

  comet: {
    slug: "comet",
    name: "Comet",
    tag: "Poly synth",
    accent: "#8E2F39",
    heroDesc:
      "A silky Juno-style polysynth. One oscillator, that famous chorus, and a rubbery filter — effortless pads, keys and plucks.",
    heroSpecChips: ["VST3 · AU · AAX", "6-voice", "200 presets"],
    buyPrice: "$39",
    walkthrough: {
      kicker: "Walkthrough",
      heading: "See Comet in action.",
      sideNote: "A short tour of the DCO, the famous chorus, and linking Comet to a groove.",
    },
    demoKits: ["Lush pad", "Juno bass", "Glass keys"],
    hearItHeading: "Comet, in motion.",
    features: [
      { title: "Juno-style engine", body: "A single DCO with sub and pulse-width modulation — simple, warm, unmistakably classic." },
      { title: "That chorus", body: "The iconic dual-mode stereo chorus that made these synths legendary, modelled faithfully." },
      { title: "Prism Link receiver", body: "Link to Seismic and Comet's filter and chorus follow the kit's motion." },
      { title: "Rubbery filter", body: "A resonant low-pass with a springy envelope — squelchy basses to glassy pads." },
    ],
    about: {
      kicker: "About Comet",
      heading: "Simple synth, endless charm.",
      paragraphs: [
        "Comet distils the magic of an early-80s Japanese polysynth into one warm, playable instrument. A single DCO with sub and pulse-width modulation keeps it simple; the character comes from the filter and the chorus, not from menu-diving.",
        "The star is that chorus — a faithful model of the dual-mode stereo effect that gave these synths their lush, dimensional shimmer. Pads bloom, keys widen, and plucks sparkle the moment you switch it on.",
        "As a Prism Link receiver, Comet breathes with the track. Link it to Seismic and its filter opens on the kick, its amp gates to the pattern, and its chorus depth moves with the groove — a static pad becomes a living part of the beat.",
      ],
    },
    specs: [
      { label: "Formats", value: "VST3 · AU · AAX" },
      { label: "Platforms", value: "macOS 11+ · Win 10+" },
      { label: "Architecture", value: "64-bit · Apple Silicon" },
      { label: "Polyphony", value: "6 voices" },
      { label: "Engine", value: "DCO + sub" },
      { label: "Presets", value: "200+ patches" },
      { label: "Prism Link", value: "Receiver" },
      { label: "Install size", value: "~85 MB" },
      { label: "License", value: "3 machines · free updates" },
    ],
    prismLink: {
      kicker: "Prism Link · receiver",
      heading: "Interoperability is our superpower.",
      body: "Comet is a Prism Link receiver. Link it to Seismic and it moves with the groove automatically — filter opening on the kick, amp gating to the pattern, chorus riding the tempo. No sidechain, no routing, no audio.",
      chips: ["Filter → kick env", "Amp gate → step", "Chorus → tempo", "Pitch → key", "PWM → mod wheel", "Sub → snare"],
      ctaText: "How Prism Link works →",
    },
    imageSlots: {
      hero: "Drop the Comet plugin UI",
      video: "Drop a video poster (embed the real video here)",
      detail: "Drop a Comet interface / chorus panel close-up",
    },
    sections: { showVideo: true, showDemo: true },
  },
};

export const productOrder = ["lunar", "seismic", "dragon", "stellar", "comet"];
