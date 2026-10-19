// Bundles src/system-monitor-card.js into the single HACS file dist/system-monitor-card.js,
// inlining the Home Assistant logo so the card needs no extra resource.
// Usage: node scripts/build.mjs [--check]
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const pkg = JSON.parse(readFileSync(`${root}package.json`, "utf8"));
const img = readFileSync(`${root}images/home-assistant.svg`).toString("base64");

const out = readFileSync(`${root}src/system-monitor-card.js`, "utf8")
  .replace("__VERSION__", pkg.version)
  .replace("__IMG_LOGO__", `data:image/svg+xml;base64,${img}`);

const target = `${root}dist/system-monitor-card.js`;
if (process.argv.includes("--check")) {
  if (!existsSync(target) || readFileSync(target, "utf8") !== out) {
    console.error("dist/system-monitor-card.js is out of date: run `npm run build` and commit the result.");
    process.exit(1);
  }
  console.log("dist/system-monitor-card.js is up to date.");
} else {
  writeFileSync(target, out);
  console.log(`Built dist/system-monitor-card.js (${(out.length / 1024).toFixed(1)} KB)`);
}
