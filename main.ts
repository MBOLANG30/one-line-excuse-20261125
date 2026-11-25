import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I trained on your meeting notes, so I can now confidently reschedule a meeting that never existed.";

if (EXCUSE !== EXCUSE.trim()) {
  throw new Error("excuse has leading or trailing whitespace");
}
if (EXCUSE.length < 1 || EXCUSE.length > 140) {
  throw new Error("excuse must be 1-140 characters");
}
if (EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
