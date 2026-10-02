import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const next = process.argv[2];
if (!/^v\d+$/.test(next ?? "")) throw new Error("Usage: npm run ds:release v2");

const manifestPath = join(root, "design-system", "versions.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const prev = manifest.current;
const nextDir = join(root, "design-system", "versions", next);
if (existsSync(nextDir)) throw new Error(`${next} already exists`);

// Freeze the outgoing version's component code so its gallery keeps rendering as it shipped.
const archive = join(root, "src", "ds-archive", prev);
if (existsSync(archive)) throw new Error(`${archive} already exists`);
mkdirSync(archive, { recursive: true });
for (const part of ["ui", "iqly", "lib", "Gallery.tsx"]) cpSync(join(root, "src", "ds", part), join(archive, part), { recursive: true });

mkdirSync(nextDir, { recursive: true });
cpSync(join(root, "design-system", "versions", prev, "tokens.json"), join(nextDir, "tokens.json"));
manifest.current = next;
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
execFileSync("node", [join(root, "scripts", "build-tokens.mjs")], { stdio: "inherit" });
console.log(`${prev} frozen in src/ds-archive/${prev}. ${next} is now current: edit design-system/versions/${next}/tokens.json (or re-export from Figma) and src/ds.`);
