import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dsDir = join(root, "design-system");
const outDir = join(root, "src", "ds", "tokens");
const manifest = JSON.parse(readFileSync(join(dsDir, "versions.json"), "utf8"));
const checkOnly = process.argv.includes("--check");

const effectName = (n) => slug(n.replace(/^Shadow\//, ""));
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const WEIGHT = { Thin: 100, ExtraLight: 200, Light: 300, Regular: 400, Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800 };
const FAMILY = {
  "Plus Jakarta Sans": '"Plus Jakarta Sans Variable", ui-sans-serif, system-ui, sans-serif',
  "Geist Mono": '"Geist Mono Variable", ui-monospace, SFMono-Regular, monospace',
};
const hexToCss = (h) => {
  if (h.length === 7) return h.toLowerCase();
  const a = parseInt(h.slice(7, 9), 16) / 255;
  return `color-mix(in srgb, ${h.slice(0, 7).toLowerCase()} ${Math.round(a * 1000) / 10}%, transparent)`;
};

function versionCss(version, tokens, selector) {
  const c = tokens.collections;
  const lines = [];
  for (const [name, hex] of Object.entries(c.Primitives)) lines.push(`--ds-p-${slug(name)}: ${hexToCss(hex)};`);
  for (const [name, t] of Object.entries(c.Color)) {
    const v = t.value ?? t;
    const value = v.alias ? `var(--ds-p-${slug(v.alias)})` : hexToCss(v);
    lines.push(`--ds-color-${slug(name.replace(/^Color\//, ""))}: ${value};`);
  }
  for (const [name, t] of Object.entries(c["Spacing & Radius"])) {
    const v = t.value ?? t;
    if (name.startsWith("Space/")) {
      const step = Number(name.slice(6).replace("-", "."));
      if (v !== step * 4) throw new Error(`${version}: ${name}=${v}px breaks the 4px grid the Tailwind scale assumes`);
    } else lines.push(`--ds-radius-${slug(name.slice(7))}: ${v === 999 ? "9999px" : v + "px"};`);
  }
  for (const s of tokens.effectStyles) {
    const value = s.effects.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${hexToCss(e.color)}`).join(", ");
    lines.push(`--ds-shadow-${effectName(s.name)}: ${value};`);
  }
  const typeRules = [];
  for (const s of tokens.textStyles) {
    const k = slug(s.name);
    lines.push(
      `--ds-type-${k}-family: ${FAMILY[s.family] ?? `"${s.family}"`};`,
      `--ds-type-${k}-size: ${+(s.size / 16).toFixed(4)}rem;`,
      `--ds-type-${k}-weight: ${WEIGHT[s.style] ?? 400};`,
      `--ds-type-${k}-leading: ${s.lineHeight ?? "normal"};`,
      `--ds-type-${k}-tracking: ${s.letterSpacing}em;`,
      `--ds-type-${k}-case: ${s.textCase === "UPPER" ? "uppercase" : "none"};`,
    );
    typeRules.push(
      `.type-${k}{font-family:var(--ds-type-${k}-family);font-size:var(--ds-type-${k}-size);font-weight:var(--ds-type-${k}-weight);line-height:var(--ds-type-${k}-leading);letter-spacing:var(--ds-type-${k}-tracking);text-transform:var(--ds-type-${k}-case)}`,
    );
  }
  return { css: `${selector} {\n  ${lines.join("\n  ")}\n}\n`, typeRules, tokens };
}

const versions = readdirSync(join(dsDir, "versions")).filter((v) => existsSync(join(dsDir, "versions", v, "tokens.json"))).sort();
if (!versions.includes(manifest.current)) throw new Error(`current version ${manifest.current} has no tokens.json`);

const files = {};
const colorNames = new Set(), radiusNames = new Set(), shadowNames = new Set(), typeRules = new Set();
for (const v of versions) {
  const tokens = JSON.parse(readFileSync(join(dsDir, "versions", v, "tokens.json"), "utf8"));
  const selector = v === manifest.current ? `:root, [data-ds="${v}"]` : `[data-ds="${v}"]`;
  const out = versionCss(v, tokens, selector);
  files[`${v}.css`] = `/* Generated from design-system/versions/${v}/tokens.json. Do not edit. */\n${out.css}`;
  for (const n of Object.keys(tokens.collections.Color)) colorNames.add(slug(n.replace(/^Color\//, "")));
  for (const n of Object.keys(tokens.collections["Spacing & Radius"])) if (n.startsWith("Radius/")) radiusNames.add(slug(n.slice(7)));
  for (const s of tokens.effectStyles) shadowNames.add(effectName(s.name));
  out.typeRules.forEach((r) => typeRules.add(r));
}

const theme = [
  "/* Generated: maps design-system tokens to Tailwind utilities. Do not edit. */",
  "@theme inline {",
  "  --color-*: initial;",
  "  --radius-*: initial;",
  "  --shadow-*: initial;",
  '  --font-sans: "Plus Jakarta Sans Variable", ui-sans-serif, system-ui, sans-serif;',
  '  --font-mono: "Geist Mono Variable", ui-monospace, SFMono-Regular, monospace;',
  "  --color-transparent: transparent;",
  "  --color-current: currentColor;",
  ...[...colorNames].map((n) => `  --color-${n}: var(--ds-color-${n});`),
  ...[...radiusNames].map((n) => `  --radius-${n}: var(--ds-radius-${n});`),
  ...[...shadowNames].map((n) => `  --shadow-${n}: var(--ds-shadow-${n});`),
  "}",
  "@layer components {",
  ...[...typeRules].map((r) => `  ${r}`),
  "}",
  "",
].join("\n");
files["theme.css"] = theme;
files["index.css"] = versions.map((v) => `@import "./${v}.css";`).join("\n") + '\n@import "./theme.css";\n';
files["versions.ts"] = `// Generated. Do not edit.\nexport const DS_CURRENT = ${JSON.stringify(manifest.current)};\nexport const DS_VERSIONS = ${JSON.stringify(versions)} as const;\n`;

let stale = [];
mkdirSync(outDir, { recursive: true });
for (const [name, content] of Object.entries(files)) {
  const p = join(outDir, name);
  if (checkOnly) {
    if (!existsSync(p) || readFileSync(p, "utf8") !== content) stale.push(name);
  } else writeFileSync(p, content);
}
if (checkOnly && stale.length) {
  console.error(`Tokens out of date: ${stale.join(", ")}. Run npm run tokens.`);
  process.exit(1);
}
console.log(checkOnly ? "Tokens up to date." : `Generated tokens for ${versions.join(", ")} (current ${manifest.current}).`);
