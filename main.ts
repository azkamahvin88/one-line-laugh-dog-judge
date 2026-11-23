// The One-Line Laugh — entry program (Node 22, stdlib only).
// Writes exactly one funny line (a single sentence, <= 200 chars) to /output/entry.txt.
//
// Revision history (judged on the brief's ordered criteria):
//   v1 "My dog judges my life choices, which takes nerve from someone who
//      eats his own vomit." — good turn, but "takes nerve" is flat.
//   v2 "My dog judges my life choices in silence, which is bold for someone
//      who eats his own vomit." — "in silence" sharpens the judge image,
//      "bold" lands the punch harder; 91 chars, nothing left to trim.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My dog judges my life choices in silence, which is bold for someone who eats his own vomit.";

// Gate: the line must stand alone as one sentence of 1-200 characters.
if (LINE.length > 200) throw new Error(`entry line is ${LINE.length} chars, over the 200-char limit`);
if (LINE.trim().length === 0) throw new Error("entry line is empty");
if (LINE.split(/[.!?]/).filter((s) => s.trim().length > 0).length !== 1) {
  throw new Error("entry line must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
