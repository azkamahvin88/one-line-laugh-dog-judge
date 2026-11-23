// The One-Line Laugh — entry program (Node 22, stdlib only).
// Writes exactly one funny line (a single sentence, <= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My dog judges my life choices in silence, which is bold for someone who eats his own vomit.";

if (LINE.length > 200) throw new Error(`entry line is ${LINE.length} chars, over the 200-char limit`);
if (LINE.trim().length === 0) throw new Error("entry line is empty");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
