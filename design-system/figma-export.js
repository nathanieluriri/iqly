// Run with the Figma MCP `use_figma` tool (or as a plugin) against the design-system file.
// It returns the JSON that goes into design-system/versions/<current>/tokens.json.
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const vars = await figma.variables.getLocalVariablesAsync();
const byId = Object.fromEntries(vars.map((v) => [v.id, v]));
const hex = (c) =>
  "#" + [c.r, c.g, c.b].map((x) => Math.round(x * 255).toString(16).padStart(2, "0")).join("").toUpperCase() +
  (c.a !== undefined && c.a < 1 ? Math.round(c.a * 255).toString(16).padStart(2, "0").toUpperCase() : "");
const out = { source: { figmaFile: figma.fileKey, exportedAt: new Date().toISOString().slice(0, 10) }, collections: {}, textStyles: [], effectStyles: [] };
for (const c of cols) {
  out.collections[c.name] = {};
  for (const id of c.variableIds) {
    const v = byId[id];
    const val = Object.values(v.valuesByMode)[0];
    const value = val && val.type === "VARIABLE_ALIAS" ? { alias: byId[val.id].name } : v.resolvedType === "COLOR" ? hex(val) : val;
    out.collections[c.name][v.name] = c.name === "Primitives" ? value : { value, ...(v.codeSyntax?.WEB ? { css: v.codeSyntax.WEB } : {}) };
  }
}
for (const s of await figma.getLocalTextStylesAsync())
  out.textStyles.push({ name: s.name, family: s.fontName.family, style: s.fontName.style, size: Math.round(s.fontSize * 100) / 100, lineHeight: s.lineHeight.unit === "PERCENT" ? Math.round(s.lineHeight.value * 10) / 1000 : null, letterSpacing: s.letterSpacing.unit === "PERCENT" ? Math.round(s.letterSpacing.value * 10) / 1000 : 0, textCase: s.textCase });
for (const s of await figma.getLocalEffectStylesAsync())
  out.effectStyles.push({ name: s.name, effects: s.effects.map((e) => ({ x: e.offset.x, y: e.offset.y, blur: e.radius, spread: e.spread, color: hex(e.color) })) });
return out;
