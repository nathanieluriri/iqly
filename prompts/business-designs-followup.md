# Prompt: finish the business designs export (design system part)

Paste everything below the line into a new Claude Code session that has the `nathanieluriri/iqly` repo checked out and the Figma connector (`mcp__Figma__*` tools) connected.

---

You are finishing an export of iQLY business designs from Figma. Most of it is done and merged in `business-designs/`. Your job is the design system part, which the first run could not get. You do not change anything in Figma.

## 0. Rules for this session

- **Read-only in Figma.** Never create, edit, move, rename or delete anything in either file. Use `use_figma` only for read-only scripts.
- **No app code.** The repo is in the design phase (see `CLAUDE.md`). You only add files under `business-designs/` and update its README and manifest.
- No AI attribution anywhere (commits, PR text, files). No em dashes in anything you write. Minimal comments.
- Commits are authored as nathanieluriri <uririnathaniel@gmail.com>. Run `git config commit.gpgsign false` first, then commit with `git -c user.name=nathanieluriri -c user.email=uririnathaniel@gmail.com commit`.
- No paid services and no new dependencies in `package.json`. Python with Pillow is fine.

## 1. What already exists (do not redo it)

Read `business-designs/README.md` and `business-designs/manifest.json` first.

- Source: app designs file `uzZ7B2copJrWqiUhxjKVNH`, Business page `644:37`.
- 281 frames exported as PNG through the Figma REST images endpoint:
  - desktop (1440, scale 1): sign in 6, home and challenges 22, builder and targeting 53, polls 51, activations 58, judging 38 (228 total);
  - mobile (390, scale 2): home and getting around 12, quick challenge 8, quick poll 6, quick activation and claims 8, judging 10, help requests 5 (49 total);
  - `reference/shipped/`: 4 frames of what is shipped today.
- `manifest.json` holds every frame's id, name, row, order, size, path, text, prototype links (`links` and `nav_links`), row note, plus all row notes and the flow starting points.
- `contact-sheets/` has 13 JPGs, one per row.
- The folder is about 51 MB. Every image was checked for existence and non-blank pixels.

## 2. What is missing (your job)

The design system file `eDc8PWheV2bcsZ4dRQni1M` could not be read: the REST API rate-limited it for days, and the variables endpoint needs an Enterprise plan. Get these through the Figma connector:

1. **Kit images.** Section `571:101` ("Exp/Biz · business kit (experimental)") on page `566:99`. It holds 49 component sets and 42 standalone components. Export one PNG per component set (and per standalone component if cheap) with `get_screenshot`, `maxDimension` 2400. Order by y, then x. Name them `NN-<kebab name>.png` with the `Exp/Biz/` or `Exp/` prefix removed. Save under `business-designs/design-system/kit/`.
2. **Icons sheet.** Section `571:99` ("Icons · lucide additions (pending review)", 27 icons). Export one image to `business-designs/design-system/icons-sheet.png`.
3. **Tokens.** Run `get_variable_defs` on section `571:101` and save the result as `business-designs/design-system/tokens.json`. If it also works on the whole page `566:99`, use the fuller result.

How to call the tools:
- Load them with ToolSearch: `select:mcp__Figma__get_metadata,mcp__Figma__get_screenshot,mcp__Figma__use_figma,mcp__Figma__get_variable_defs,mcp__Figma__whoami`.
- Check access first with `get_metadata` on `eDc8PWheV2bcsZ4dRQni1M`, node `571:101`. Stop and tell me if it fails.
- List the sets with a read-only `use_figma` script (load the `figma:figma-use` skill, pass `skillNames: "figma-use"`).
- `get_screenshot` returns a short-lived URL. Download it at once with `curl -sL -o <path> "<url>"`. Do not request base64. Send independent calls in parallel batches of about 10.

## 3. Update the index

- Add a `design_system` key to `manifest.json`: for each image, its node id, name and path, and the path of `tokens.json`.
- In `business-designs/README.md`, add a "Design system" section (a table of kit images with node ids, the icons sheet, and a short summary of tokens by group such as Color, radius, shadow and type). Remove the design system line from "Not exported".
- Add a contact sheet `contact-sheets/design-system-kit.jpg` (thumbnails 300 px wide, captions underneath, about 10 per row).

## 4. Verify and deliver

- Every new manifest path exists, no image is zero bytes or blank (Pillow pixel variance above a small threshold), and the token values match the colours named in `design-profile.md` (for example `Color/panel` #f5f5f5, `Color/primary` #7128a5).
- Spot-check three kit images by reading them.
- Commit on a new branch, push, and report the counts, the size added, and anything still missing.
