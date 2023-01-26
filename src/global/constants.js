const VALID_BLACK_KEYS = ["w", "e", "r", "t", "y"];
const VALID_WHITE_KEYS = ["a", "s", "d", "f", "g", "h", "j"];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];

const NOTES = ["c", "df", "d", "ef", "e", "f", "gf", "g", "af", "a", "bf", "b"];
const NOTE_TO_KEY = {
  c: "a",
  df: "w",
  d: "s",
  ef: "e",
  e: "d",
  f: "f",
  gf: "r",
  g: "g",
  af: "t",
  a: "h",
  bf: "y",
  b: "j",
};
const KEY_TO_NOTE = {
  a: "c",
  w: "df",
  s: "d",
  e: "ef",
  d: "e",
  f: "f",
  r: "gf",
  g: "g",
  t: "af",
  h: "a",
  y: "bf",
  j: "b",
};
export { NOTES, VALID_KEYS, NOTE_TO_KEY, KEY_TO_NOTE };
