import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate: entry must be 1-200 UTF-8 chars, not only whitespace.
const MAX_CHARS = 200;

const LINE =
  "My smartwatch congratulated me for standing up. I was already standing. It then told me to breathe. I have been breathing for 29 years. It gave me a badge for it.";

if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} outside gate 1-${MAX_CHARS}`);
}

// The gate is on the entry text only: 1-200 chars, checked above.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true }); // create the output dir if missing
writeFileSync(join(outDir, "entry.txt"), LINE);
