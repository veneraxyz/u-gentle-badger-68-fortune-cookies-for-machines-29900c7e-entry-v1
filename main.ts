import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "A wise machine knows: your next update will fix one bug, add three more, and still be called progress.";

if (LINE.trim().length === 0) {
  throw new Error("Entry line must not be blank");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry line must be exactly one line");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("Entry line must be 1-200 characters, got " + LINE.length);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
console.log("Wrote entry.txt (" + LINE.length + " chars)");
