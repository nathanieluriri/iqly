# Prompt: export every iQLY business design from Figma into a folder, with the design guide

Paste everything below the line into a new Claude Code session (cloud or local) that has the `nathanieluriri/iqly` repo checked out.

---

You are exporting every iQLY **business** design from Figma into a tidy folder of images, with a manifest and an index, so people and agents can use the designs without opening Figma. You also carry the design guide below, so anything you write about the designs uses the right words and rules. You do not change the designs.

## 0. Rules for this session

- **Read-only in Figma.** Never create, edit, move, rename or delete anything in either Figma file. Use `use_figma` only for read-only scripts (listing nodes, reading text, names, sizes and links).
- **No app code.** This repo is in the design phase (see `CLAUDE.md`). You only add the export folder and its index.
- No AI attribution anywhere (commits, PR text, files). No em dashes in anything you write. Minimal comments.
- Commits are authored as nathanieluriri <uririnathaniel@gmail.com>. Run `git config commit.gpgsign false` before the first commit, then commit with `git -c user.name=nathanieluriri -c user.email=uririnathaniel@gmail.com commit`.
- Choose the cheapest sound option. No paid services and no new dependencies in `package.json`. Python with Pillow, or plain shell, is fine for post-processing.

## 1. Connect to Figma

1. **Connector.** The designs are read through the Figma MCP connector. Its tools are named `mcp__Figma__*`.
   - If they are listed as deferred, load them in one call with ToolSearch: `select:mcp__Figma__get_metadata,mcp__Figma__get_screenshot,mcp__Figma__use_figma,mcp__Figma__get_variable_defs,mcp__Figma__whoami`.
   - Load the `figma:figma-use` skill before any `use_figma` call. Pass `skillNames: "figma-use"` on each `use_figma` call.
2. **Files.**
   - App designs: https://www.figma.com/design/uzZ7B2copJrWqiUhxjKVNH (file key `uzZ7B2copJrWqiUhxjKVNH`).
   - Design system: https://www.figma.com/design/eDc8PWheV2bcsZ4dRQni1M (file key `eDc8PWheV2bcsZ4dRQni1M`).
3. **Node ids.** Every call takes a file key and a node id. Ids use a colon (`644:37`). In a URL the same id is written with a dash (`node-id=644-37`).
4. **Check access first.** Call `get_metadata` on file `uzZ7B2copJrWqiUhxjKVNH`, node `644:37` (the Business page). Stop and tell me if:
   - it fails, or no Figma tools exist. The Figma connector has to be connected in claude.ai Settings > Connectors under an account that can open both files.
   - the error says read-only mode. That is fine for this job, because exporting only reads.

   Never rebuild designs from memory or from old code.

## 2. What to export (the Business page, `644:37`)

The page has two top-level sections. Discover every frame with a read-only `use_figma` script, never by hand. Sections nest one level: the Desktop view holds row sections, and the Mobile view holds frames directly.

**Desktop view** `1451:48445`, 1440 wide. Export these row sections:

| Section id | Row | Frames (approx.) |
|---|---|---|
| `850:8733` | Sign in (1440 and 390) | 6 |
| `656:349` | Home and challenges (Home, Challenges list and details, Payments, Alerts, Settings) | 22 |
| `662:2985` | New challenge builder and targeting | 53 |
| `657:809` | Polls | 51 |
| `664:4154` | Activations (with claims and the WhatsApp-style help requests) | 58 |
| `1360:43582` | Judging, contained style | 38 |

Skip these:
- `644:38`, a mirror of what is shipped today. Export it only into `reference/shipped/` if it is cheap.
- `1040:15364`, which holds components only and no frames.
- The Archive page `1:6`, which holds retired work such as the old Home option A and the old judging.

**Mobile view** `1471:99437`, 390 wide, 49 frames in 6 rows. Rows are 1244 px apart, starting at y = 360. A frame's row is `round((y - 360) / 1244) + 1`:

1. Home and getting around: Home (highlights) `1492:49128` and its variants:
   - nothing needs you `1519:49857`;
   - no figures yet `1519:49980`;
   - brand new `1519:50121`.

   Also in this row: Go to sheet, Create, Alerts (and all caught up), Challenges, a live challenge, Wallet `1474:47969`, Stats for quants.
2. Quick challenge (Hinge-style stepper), then Challenge sent.
3. Quick poll, Poll live results, Poll sent.
4. Quick activation and claims.
5. Judging on the go.
6. Help requests on an activation (WhatsApp style).

**Row notes** are instances of the component `Row note` (Title plus Description). Each one sits above a row and explains that row's flow. Read their text into the manifest; do not export them as images.

**Design system (optional, small).** In file `eDc8PWheV2bcsZ4dRQni1M`:
- page "Experimental · business" `566:99`;
- the kit section `571:101`, exported as one image per component set;
- icons section `571:99`, exported as one sheet.
- Tokens: `get_variable_defs` on the kit section, saved as `tokens.json`.

## 3. Export smartly

**Step A: manifest first, images second.** One read-only `use_figma` script per section, run in parallel, collects for every top-level frame:
- `id`, `name`, `section`, `row`, `order` (sort by y, then x);
- `width`, `height`;
- every text layer joined (for search);
- prototype links (`reactions` with their destination ids);
- the flow starting points on the page (`figma.currentPage.flowStartingPoints`);
- the row note Title and Description for that row.

Write everything to `business-designs/manifest.json`.

**Step B: export the images.** Pick the fastest path that works:

1. **Figma REST API (preferred when a token exists).**
   - If `FIGMA_TOKEN` is set in the environment, call `GET https://api.figma.com/v1/images/uzZ7B2copJrWqiUhxjKVNH?ids=<up to 50 comma-separated ids>&format=png&scale=<s>` with the header `X-Figma-Token`, then curl each returned URL.
   - This is one request per 50 frames, and the fastest option.
   - Retry 429 or 5xx responses with backoff of 2, 4, 8 and 16 seconds.
   - Never print or commit the token.
2. **MCP fallback.**
   - Call `mcp__Figma__get_screenshot` per frame with `maxDimension` set as below. It returns a short-lived URL; download it at once with `curl -sL -o <path> "<url>"`.
   - Do not request base64.
   - Send independent calls in parallel batches of about 10.

**Sizes:**
- **Mobile (390 wide):** `scale=2`, or `maxDimension` = 2 × the frame's longest side, capped at 2400.
- **Desktop (1440 wide):** `scale=1`. Very tall frames (taller than 4000 px) also get a second `scale=0.5` preview.

**Folder layout and names.** Lowercase kebab-case, numbered in canvas order:

```
business-designs/
  README.md                 index: what each folder holds, flows, how to search
  manifest.json
  desktop/
    01-sign-in/ 02-home-and-challenges/ 03-builder-and-targeting/
    04-polls/ 05-activations/ 06-judging/
      01-home.png  02-home-sidebar-collapsed.png  ...
  mobile/
    01-home-and-getting-around/ ... 06-help-requests/
      01-home-highlights.png  02-home-nothing-needs-you.png ...
  design-system/            (optional) kit sets, icons sheet, tokens.json
  contact-sheets/           one JPG per row: thumbnails with numbers and names
```

Names come from the frame names. Strip the "Mobile · Nxx ·" prefix and the "· 390" suffix, and keep the screen meaning, for example `n07-wallet.png`. Never use node ids as names; keep the ids in the manifest.

**Make it light.**
- Convert PNG to WebP at quality 90 only if the folder goes over about 150 MB. Keep PNG otherwise, since agents read PNG best.
- Build the contact sheets with Pillow: thumbnails 300 px wide, captions underneath, about 10 per row.

**Step C: the index.** `business-designs/README.md` holds:
- one table per row (number, name, image path, node id, what it shows in one line, where its links go);
- the prototype flows from the flow starting points, each as an ordered list of screens;
- the row notes.

Write it in plain words, with no em dashes.

**Step D: verify.**
- The image count equals the frame count in the manifest. Report any missing.
- No zero-byte or all-blank images. Check with Pillow that the pixel variance is above a small threshold.
- Spot-check three images per row by reading them.
- Every manifest entry's `path` exists.

**Step E: deliver.**
- Commit `business-designs/` on the current branch and push.
- Report the counts per row, the total size, which export path you used, and anything you skipped and why.
- If git hosting rejects large files, keep the PNGs at `scale=1` for desktop and say so.

## 4. The design guide (combined)

Use this when you describe screens in the index, and treat it as the rules any future build must follow. The full source of truth is `design-profile.md` in this repo; where it is more detailed, it wins.

### Product and data
- **Product:** iQLY is a challenge-based crowdsourcing platform built for Africa, Nigeria first. Businesses run challenges (people send ideas, the brand picks winners), polls (one question, answered in a tap) and activations (people are paid to do a task, step by step).
- **Business statuses:**
  - Challenges: Draft, In review, Action needed, Approved, Live, Closed.
  - Polls: Draft, In review, Action needed, Live, Ended.
  - Submissions: Under review, Winner, Not selected.
- **Money:** NGN, stored in kobo.
  - Whole naira in lists, buttons, fields and prizes (₦900,000).
  - Kobo on balances, receipts and ledgers (₦1,650,000.00).
  - The Paystack fee is added at checkout.
  - Platform fee: 20% of the pool on challenges.
  - A withdrawn challenge keeps its pool in escrow.
  - A cancelled activation refunds to iQLY credit.
  - Winners are paid from escrow into their iQLY wallets. "Publish N winners?" cannot be undone.
- **Sample data** (illustrative, all from the profile):
  - Orchid Foods: challenges C1 to C6, polls P1 to P6, activations A1 to A3.
  - The analytics table: Responses 1,320 (+36%), poll votes 829 (+15%), claims 450 (+83%), 41 submissions.
  - The zobo judging set: 41 submissions; judges Tolu, Kemi and Dayo; ₦1,500,000 pool split 60/30/10; Ember and Hibiscus Spark tie at 7.8; Zobolicious marked Discuss.

  Figures must foot. Never invent numbers.
- **Copy:** words from the frames and the profile vocabulary only. No em dashes, ever.

### Visual system
- **Tokens only.** The Figma design system (file `eDc8PWheV2bcsZ4dRQni1M`) is the source of truth. Every colour, radius, shadow and text style comes from its variables and styles. Screens use component instances, never detached copies or literal colours.
- **Type:** Plus Jakarta Sans for UI; Geist Mono for labels and ledger types.
- **Main colours:**
  - `Color/panel` #f5f5f5 (page grey) and `Color/card` #ffffff;
  - `Color/secondary` #f4f4f5 (light grey controls);
  - `Color/fg` #0a0a0a, `Color/fg2` #404040, and `Color/fg3` #737373 (fg3 only on white);
  - `Color/primary` #7128a5 (purple);
  - `Color/tint` and `Color/tint-strong` (lilac).
- **Logos:** official files only (`public/brand`, Figma Logo, Logomark, Logo/Business). Never redraw or recolour a logo. The single exception was approved by the owner: `Logomark/Mono on ink` (the official geometry in ink and white) and `Logomark/Bulb` (the bulb alone, as a faint pattern) on the wallet card.
- **No same colour on same colour:** no white on white, grey on grey or lilac on lilac.
  - Secondary buttons are light grey on white. On grey or tinted surfaces they become Outline.
  - Text contrast is 4.5:1 or better.
- **Less purple.** Selection and navigation states are neutral:
  - grey fills with dark text;
  - the selected segment is white with a soft shadow;
  - selected cards get a dark border;
  - the chosen score is dark with a white number.

  Purple stays for primary buttons, links, charts, progress, switches and radios that are on, the "Suggested by iQLY" tag, avatars and illustrations.
- **Desktop shell:**
  - Calm Grey-style sidebar: org card, muted icons, collapsible to a rail with tooltips.
  - Quiet top bar with a search pill and help. Alerts come from the sidebar with a count.
  - Rows open on click. Row actions live in a More menu.
  - Tables are one card with a toolbar (title, Status filter chip, search, sort). There are no status tab rows.
  - Desktop is designed at 1440 and must hold at 1024 and 390.
- **Builders** (challenge, poll, activation):
  - a vertical step rail;
  - an Edit/Preview switch with mobile and desktop previews;
  - help behind a link on each step;
  - drafts save on their own, with a toast;
  - the step strip can collapse.
- **Judging (desktop, the contained style):**
  - **Layout:** a grey canvas, a white sidebar and the page in one white panel.
  - **Stepper:** Overview, Shortlist, Score, Rank and publish. The current step is its icon in a ring; other steps are dots.
  - **Shortlist:** one queue (To review, Shortlisted, Not considering, Passed). iQLY's reasons sit behind its tag.
  - **Scoring:** criteria fold to one line. Other judges' scores stay hidden until everyone is done (a setting). Score gaps of 4 or more are marked Discuss.
  - **Ties:** a tie is broken with a reason or kept, and the brand tops up when it is kept.
- **Mobile (390), one consistent look (latest owner decisions, 19 Oct):**
  - **Page:** white (`Color/card`), with content on a 16 px margin.
  - **Containers:** every list, group of rows, card and panel is light grey (`Color/secondary`), 20 px corners, 16 px padding, no hairline under the last row. Nothing is grey on grey or white on white.
  - **Accent:** the dark purple `Color/brand` (#2d0048), never the brighter `Color/primary`. It is used for primary buttons, the Next arrow, links, radios, the slider, chart bars, icons in circles, and the Needs you rings and badges.
  - **Buttons:** every button is tactile, after `Exp/Biz/TactileButton`.
    - Grey buttons: `Color/secondary` fill, 1 px `Color/line` edge, and a white inner highlight 1 px from the top. Inside a grey container they turn white.
    - Purple buttons: `Color/brand` fill, `Color/brand-dark` edge, and a 22% white highlight.
    - This covers header buttons, Save and Done pills, quick actions, play, send, the judging actions, score taps and chat quick replies.
  - **Header:** `Exp/Biz/MobileTopBar` has no bar fill and 44 px round tactile buttons (menu, back, close, "+"). Home and Wallet use the same round buttons with the avatar.
  - **Navigation:** the menu opens a "Go to" bottom sheet. There is no bottom tab bar and no side drawer.
  - **Icons:** rows and tiles use line icons in dark purple inside round circles (light grey on the white page, white inside grey containers), not illustrations. The `Exp/Figure` people appear only on empty and success states.
  - **Home:** greeting with the business name, then Needs you as Instagram-style highlights (photo circles with a dark purple ring, a count badge, a two-line label and a See all circle). Below that, a grey quick actions panel (Challenge, Poll, Activation, Wallet), then Last 7 days as one grey panel of rows ending in Stats for quants. Variants cover nothing needs you, no figures yet and a brand new business.
  - **Wallet:** a dark purple iQLY credit card with `Logomark/Mono on ink` as a stamp and `Logomark/Bulb` as a faint pattern, the grey escrow card behind it, and a tactile grey "Add bank" pill. The pill has a white ring in the page colour, so it cuts into the card corner. Below it: round quick actions, two tiles, and Recent with View all.
  - **Judging swipe stack:** a neat pile, with two cards stepping 12 px down and in behind the front card. A long entry scrolls inside the card, with a scroll bar and a fade at the bottom.
  - **Create flows:** a Hinge-style stepper, one question per screen. The pieces are `Exp/Biz/StepMarker` dots, an H1 question, `Exp/Biz/LineField` or `Exp/Biz/RadioRow` choices in a grey panel, and `Exp/Biz/NextButton`. The last step is "You pay" with one Pay button. Anything not asked is changed after saving the draft.
  - **Filters:** `Exp/Chip` pills, never an "All" option.
  - **Touch and sheets:** taps are at least 44 px. Sheets are white over a 32% scrim.
  - **Help requests:** WhatsApp style. A chat list with search and Open/Resolved pills; a conversation with a pinned claim bar (Reject, Confirm and pay), proof as voice notes, system notes and quick replies. iQLY support steps in after 2 days.
- **Reference bar:**
  - calm like Linear;
  - money as restrained as Mercury and Paystack;
  - layout like Grey;
  - judging as clear as Greenhouse scorecards;
  - mobile as spacious as Hinge, with Dribbble-style fintech panels.

The desktop screens have not had the white, dark purple and tactile pass yet. Describe them as they are.

## 5. Report back

- Counts per row and the total.
- Folder size.
- The export path you used (REST or MCP).
- Anything missing or skipped.
- Links to three contact sheets.
- The commit hash.
