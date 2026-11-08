// Kora site data. Copy is the current draft (kept verbatim per Bon — edits come
// after Arya reviews the live site). Price is Arya's: $39, one-off perpetual.

export const PLUGIN_NAME = "Kora";
export const BRAND = "Prism Audio Labs";
export const PRICE = "$39";
export const TRIAL_DAYS = 14;

export type Demo = {
  num: string;
  title: string;
  meta: string; // stat line (BPM · bars · notes · density, or tuning · BPM)
  preset?: string;
  pattern?: string;
  desc: string;
  file: string;
  group: "repertoire" | "tunings" | "crossover" | "club";
};

export const demoGroups: { id: Demo["group"]; label: string; blurb: string }[] = [
  {
    id: "repertoire",
    label: "The repertoire",
    blurb:
      "Twelve traditional pieces, covering all four functional layers — the cycle, the flourish, the sung line and the spoken one. Play them in order and the structure of the music becomes obvious.",
  },
  {
    id: "tunings",
    label: "The same instrument, three tunings",
    blurb:
      "A kora is retuned by sliding leather rings, so tuning is a physical commitment and the repertoire is organised around it. These three are the clearest way to hear what that means.",
  },
  {
    id: "crossover",
    label: "Classical, song, jazz",
    blurb:
      "The cycle-plus-flourish structure and a Baroque prelude are the same idea arrived at independently. These lean into that, then step away from the tradition entirely.",
  },
  {
    id: "club",
    label: "Club and modern",
    blurb:
      "Tempos the traditional repertoire never asks for. Every one of these plays a pattern written for this instrument, not borrowed from another.",
  },
];

const f = (name: string) => `/audio/kora/${name}`;

export const demos: Demo[] = [
  { num: "01", title: "Kumbengo Kelefaba", meta: "96 BPM · 4 bars · 52 notes · 13.0/bar", preset: "Traditional Silaba", pattern: "Kumbengo Kelefaba (Full)", desc: "A praise piece for the warrior Kelefa Saane, and one of the core cycles. The kumbengo is the ostinato a whole performance rests on — start here, everything else departs from it.", file: f("01-kumbengo-kelefaba.mp3"), group: "repertoire" },
  { num: "02", title: "Kumbengo Kaira", meta: "92 BPM · 4 bars · 40 notes · 10.0/bar", preset: "Kumbengo", pattern: "Kumbengo Kaira (Groove)", desc: "A gentler, very widely played cycle. Listen past the notes to the ringing between them — that is the sympathetic string bank, and it is what no sampler reproduces.", file: f("02-kumbengo-kaira.mp3"), group: "repertoire" },
  { num: "03", title: "Kumbengo Alla La Ke", meta: "88 BPM · 4 bars · 36 notes · 9.0/bar", preset: "Griot", pattern: "Kumbengo Alla La Ke (Full)", desc: "The clearest example of the two-layer texture: a bass figure in the thumbs under an interlocking line, all from one pair of hands.", file: f("03-kumbengo-alla-la-ke.mp3"), group: "repertoire" },
  { num: "04", title: "Kumbengo Janjon", meta: "94 BPM · 4 bars · 40 notes · 10.0/bar", preset: "Kelefaba", pattern: "Kumbengo Janjon", desc: "Associated with hunters and warriors. Among the oldest material here, and the most rhythmically distinctive cycle in the set.", file: f("04-kumbengo-janjon.mp3"), group: "repertoire" },
  { num: "05", title: "Kuruntu Kelefa", meta: "92 BPM · 8 bars · 83 notes · 10.4/bar", preset: "Mandinka", pattern: "Kumbengo Kuruntu Kelefa (Long)", desc: "The density stress test. At this note rate a poorly modelled string blurs into mush — listen for whether individual notes stay separable.", file: f("05-kuruntu-kelefa.mp3"), group: "repertoire" },
  { num: "06", title: "Kumbengo Sunjata Fasa", meta: "90 BPM · 8 bars · 70 notes · 8.8/bar", preset: "Praise Song", pattern: "Kumbengo Sunjata Fasa", desc: "The epic of Sunjata Keita, founder of the Mali empire. Among the oldest pieces in the tradition, and often used to open a performance.", file: f("06-kumbengo-sunjata-fasa.mp3"), group: "repertoire" },
  { num: "07", title: "Kumbengo Sakhadougou", meta: "90 BPM · 8 bars · 81 notes · 10.1/bar", preset: "Wassoulou", pattern: "Kumbengo Sakhadougou (Long)", desc: "A widely played praise cycle, and a reference for the instrument's midrange — the register that has to carry a mix.", file: f("07-kumbengo-sakhadougou.mp3"), group: "repertoire" },
  { num: "08", title: "Birimintingo Yeyengo", meta: "92 BPM · 4 bars · 53 notes · 13.2/bar", preset: "Birimintingo", pattern: "Birimintingo Yeyengo", desc: "The improvised flourish that breaks out of the cycle and resolves back into it. The densest layer in the library at 13.2 notes a bar against 8.6 for a kumbengo. This is where a player is judged.", file: f("08-birimintingo-yeyengo.mp3"), group: "repertoire" },
  { num: "09", title: "Birimintingo Octave Cascade", meta: "96 BPM · 2 bars · 26 notes · 13.0/bar", preset: "Cascade Arpeggio", pattern: "Birimintingo Octave Cascade", desc: "A descending cascade — two hands falling past each other. Easy on a kora and awkward on a keyboard, because consecutive scale degrees alternate between the two string ranks.", file: f("09-birimintingo-cascade.mp3"), group: "repertoire" },
  { num: "10", title: "Donkilo Jarabi", meta: "84 BPM · 8 bars · 48 notes · 6.0/bar", preset: "Donkilo", pattern: "Donkilo Jarabi (Extended)", desc: "Jarabi as a donkilo — the sung melody rather than the cycle. One of the most recognisable melodies in West African music. Sparse, and shaped like a voice.", file: f("10-donkilo-jarabi.mp3"), group: "repertoire" },
  { num: "11", title: "Sataro Sunjata Fasa", meta: "80 BPM · 8 bars · 52 notes · 6.5/bar", preset: "Sataro", pattern: "Sataro Sunjata Fasa", desc: "Declaimed praise, closer to speech than song. The instrument punctuates instead of carrying. The most tightly defined layer in the library: every sataro pattern sits between 6.5 and 6.8 notes a bar.", file: f("11-sataro-sunjata.mp3"), group: "repertoire" },
  { num: "12", title: "Kumbengo Classic", meta: "96 BPM · 4 bars · 31 notes · 7.8/bar", preset: "Griot Storyteller", pattern: "Kumbengo Classic", desc: "The archetype, played plainly. If you want one file that shows what a kumbengo is, it is this one.", file: f("12-kumbengo-classic.mp3"), group: "repertoire" },

  { num: "13", title: "Tomora Mesengo", meta: "Dorian · 86 BPM · 8 bars", desc: "Minor third, natural sixth, flat seventh. Held at equal temperament, so it sits in a tempered arrangement without beating. The one to use for minor-key house and techno.", file: f("13-tomora-mesengo.mp3"), group: "tunings" },
  { num: "14", title: "Taara in Sauta", meta: "Lydian · 90 BPM · 8 bars", desc: "The fourth raised to 598 cents. A/B against Kumbengo Kaira to hear both the raised fourth and a major third five cents narrower than Hardino's.", file: f("14-taara-sauta.mp3"), group: "tunings" },
  { num: "15", title: "Kaira in Hardino", meta: "Stretched Ionian · 88 BPM · 8 bars", desc: "Pure fifth at 702 cents, Pythagorean second at 204, thirds and sixths left slightly narrow. It beats gently against a piano — that is the trade, and you choose it per project.", file: f("15-hardino-kaira.mp3"), group: "tunings" },

  { num: "16", title: "Baroque-Griot Prelude", meta: "84 BPM · 101 notes", preset: "Prism Passage", desc: "A prelude that treats the kumbengo as a ground bass. Classical crossover and chamber writing.", file: f("16-baroque-prelude.mp3"), group: "crossover" },
  { num: "17", title: "Baroque-Griot Study", meta: "84 BPM · 104 notes", preset: "Griot Storyteller", desc: "Alla La Ke worked as a two-voice study — readable as counterpoint without stopping being kora music.", file: f("17-baroque-study.mp3"), group: "crossover" },
  { num: "18", title: "Pop Melody", meta: "100 BPM", preset: "Sun Kissed Harp", desc: "A plain song melody, no ornament. What the instrument sounds like carrying a hook rather than a tradition.", file: f("18-pop-melody.mp3"), group: "crossover" },
  { num: "19", title: "Modal Jazz", meta: "96 BPM · 96 notes", preset: "Jazz Comp", desc: "Comping through ii-V-I. Extended harmony on a diatonic 21-string harp, with scale lock off so it reaches notes a kora in this tuning cannot.", file: f("19-jazz-modal.mp3"), group: "crossover" },

  { num: "20", title: "Afro House Keys", meta: "122 BPM", desc: "The single largest use case in the library — 350 patterns are written for it.", file: f("20-afro-house-keys.mp3"), group: "club" },
  { num: "21", title: "Amapiano Pluck", meta: "112 BPM", desc: "Short, percussive, heavily damped. Key-off damping is doing the work here.", file: f("21-amapiano-pluck.mp3"), group: "club" },
  { num: "22", title: "Melodic Techno Lead", meta: "122 BPM", desc: "Halo open, so the tail runs past what a physical kora sustains — but every partial comes from the kora.", file: f("22-melodic-techno-lead.mp3"), group: "club" },
  { num: "23", title: "Techno", meta: "128 BPM · Electric Kora", desc: "Metal strings, dry, club tempo. The furthest it travels while staying recognisable.", file: f("23-techno-bunker.mp3"), group: "club" },
  { num: "24", title: "Ambient Shimmer", meta: "70 BPM", desc: "Halo at its most extreme. There is no pad underneath this.", file: f("24-ambient-shimmer.mp3"), group: "club" },
  { num: "25", title: "Hip Hop Pluck", meta: "88 BPM · Lo-Fi Dust", desc: "Contact pickup dominant — the sound that survives being sampled and filtered.", file: f("25-hiphop-pluck.mp3"), group: "club" },
];
