# Handoff: Insights page, judging updates, activation step (24 Oct 2026)

Read this first if you pick up the Figma work for the business dashboard and landing page. Any account can continue from here.

## Rules for the session

- Design only. No app code in this repo (see `CLAUDE.md`). Work happens in Figma through the Figma connector (`mcp__Figma__*`), loading the `figma-use` skill before every `use_figma` call.
- App designs file: `uzZ7B2copJrWqiUhxjKVNH`. Design system file (source of truth for tokens): `eDc8PWheV2bcsZ4dRQni1M`.
- Screens use Color/Space/Radius variables and text styles, never literal values. Components are instances, never detached copies.
- No em dashes. No AI attribution anywhere. Numbers must foot or be labelled illustrative (Orchid Foods dataset in `design-profile.md`).
- Figma comments: replies can be posted with the REST API (`POST /v1/files/{key}/comments` with `comment_id`, header `X-Figma-Token`). Resolving comments is not available through the API, so the owner clicks Resolve. Never print the token.

## What was done

### Landing page (page `Landing page`, `1:4`)

From the owner's 23 Oct comments:

- Benefits rows reordered to Activations, Challenge Builder, Audience Targeting, Quick polls, Post without your name. 1440 rows frame `2009:8892`, 390 rows frame `2014:9114`. The "challenge review workspace" row was removed.
- Footer logo replaced with the official light business logo (rectangles `2124:76634` at 1440 and `2124:76635` at 390, PNG fill, fit). The source is a raster. Swap in the SVG when the owner supplies it.
- Comments about graphics or copy were left alone and answered with "graphics needed" or "copy update needed skipping for now" (hero dashboard, targeting and challenge copy, AI summaries mention, polls card). Their ids and reply ids are in the table below.

### Business dashboard (page `Business dashboard`, `644:37`)

1. **New main page, Insights.**
   - Sidebar set `Exp/Biz/Sidebar (local, sync to DS)` (`1574:73491`) gained `nav · Insights` (lightbulb icon `Exp/Icon/discover`) after Challenges, in expanded (`2126:76561`) and collapsed (`2126:76568`) variants.
   - New section `Insights · experimental (proposal) · Desktop 1440` (`2128:71593`) inside Desktop view `1451:48445`:
     - I1 `2128:71594` Overview: one table of every source (challenges, polls, activations) with status, response counts, summary state and highlight count. Filter by type with the Segment row.
     - I2 `2132:71755` Summary tab: Tentative banner (before winners), three iQLY findings with sources, "Tips for a sharper summary". Follows filters and highlights.
     - I3 `2132:72090` Breakdown tab: bird's-eye view by place, age band, gender, new to Orchid vs used before. All groups foot to 41 entries. Scored-only and compare-groups chips.
     - I4 `2133:71738` Highlights tab: sentiment segments (All 14, Positive 9, Negative 3, Neutral 2), quote cards with tags, Export highlights button.
     - I5 `2133:72113` Tags tab: intelligent tags (iQLY suggested vs yours), quick search, matching entries as EntryCard instances.
     - I6 `2144:73076` Summary tab with the iQLY Cowork panel docked on the right as its own container (see Cowork below).
   - I1 to I7 carry the iQLY Cowork button beside Help (see Cowork below).
   - Shared header on I2 to I5: breadcrumb, title, StatusPill, filter chips (Place, Age band, Gender, Poll answer), tabs Summary, Breakdown, Highlights, Tags (Ask is no longer a tab). Tabs are cloned from J13 (active tab has a 2px bottom stroke in Color/fg).
2. **Judging section** (`1693:76766`):
   - J2 `1385:45580`: single judge (judge list removed), Shortlisted and Not shortlisted groups, an Auto-score button in the toolbar, "Open insights" button in the head. Summary and trends now live in Insights.
   - J6 `1392:97297`: selection toolbar (Positive, Negative, Neutral, Tag), highlighted phrases in the entry text (green and red underline), tags row (blue is iQLY suggested, grey is yours), highlight count, Auto-score banner in the score panel.
   - J13 `1703:79516`: "View insights" button in the head actions.
   - J14 `2134:225758` (new, right of the last judging frame): Auto-score dialog. Options are score the 23 waiting, re-score all, skip flagged. Shows the three criteria and weights, states that the judge stays in control and nothing is shortlisted or published automatically. The dialog and scrim are absolutely positioned children; a frame screenshot may omit them, a screenshot of the dialog node itself (`2134:225823`) shows it.
3. **Activations**: step 4 Review and pay `1050:17371` has a new card "Add a challenge for finishers" (switch plus challenge picker). The comment was on `1287:90374`, a withdrawn reference frame, so the card was added to the main step 4 frame instead.

### iQLY Cowork (assistant), highlight and tag flow, plans, modes, session details, usage limits (25 Oct 2026)

Owner rules, in their words: the assistant is not a tab. It sits beside the Help button, looks like the chat references (threads and chat containers, a docked panel with the top bar spanning over it), has a button that shows Environment, Context, Connectors, Outputs, Changes and Plan, plans look like a plain task list with no numbers, two modes (Ask and Always allow), the Send arrow is white, and usage is limited (Free gets the bare minimum, paid gets far more and can buy extra). Containers are layered fills (page Color/panel, containers Color/card, inner cards Color/panel) with a hairline Color/line border, never a stroke alone. Official logomark only.

**Entry point.** `Exp/Biz/TopBar` (`653:358`, page Pending library) has a hidden child `cowork` (instance of `Exp/Biz/CoworkButton`) left of Help, controlled by the boolean `Show Cowork` (default off, so the 281 older frames did not change). It is on for Insights I1 to I7 and judging J6, J6b to J6e. Its State is Active while the panel is open. In docked frames the structure is sidebar, then `stage` (top-bar over a `body` row of `main` and `chat dock`), so the top bar spans over the panel like the reference. The sidebar set gained `nav · Cowork` (logomark icon) in both variants.

**New local components** (section `1574:58834`, page Business dashboard, all named "(local, sync to DS)"):
- `Exp/Biz/CoworkButton` `2158:77471`: State Default, Active.
- `Exp/Biz/UsageRing` `2158:77481`: Level Low 38%, Approaching 85%, Reached 100%.
- `Exp/Biz/TaskRow` `2160:77514`: State Pending (dashed circle), Running, Done, Skipped, Editing. Text props Title, Detail, Chip 1, Chip 2. No numbers.
- `Exp/Biz/UsageBanner` `2161:77568`: Kind Approaching or Reached, Plan Free or Pro. Text is baked into each variant.
- `Exp/Biz/CoworkComposer` `2161:77691`: Mode Ask or Always allow, State Idle, Running (white stop square), Disabled. Props Placeholder, Scope, Usage ring (instance swap). The Send arrow is white on Color/primary.
- Reused kit: TactileButton, FilterChip, SearchField, ChoiceCard, Switch.

**Frames**, section `iQLY Cowork · experimental (proposal) · Desktop 1440` (`2153:77101`), with a Row note per row:
- Row 1, plans and modes: C1 `2164:77868` empty chat (Ask). C2 `2164:78200` plan waiting for approval (Approve plan, Edit plan, Deny, cost estimate). C3 `2164:78627` plan being edited (ask Cowork to change it, editable titles and options, add or remove a task). C4 `2165:78154` Always allow running (task states, status row, activity log like the reference, Stop).
- Row 2: C5 `2165:78550` done (Changes, output file, Undo all). C6 `2165:78945` mode menu (the menu is a child of the centered column: absolute children of a top level cloned frame did not render in screenshots). C7 `2165:79286` Session details as a right column (Plan, Usage, Environment, Context, Connectors, Outputs, Changes).
- Row 3, usage and limits (illustrative numbers): U1 `2167:78892` Free, approaching (the plan needs about 12% and 9% is left, so the primary action becomes Upgrade to Pro). U2 `2167:79028` Free, limit reached (Cowork pauses mid run). U3 `2167:79144` Pro, approaching (about 1%, 10% left). U4 `2167:79276` Pro, limit reached (Get more usage). U5 `2167:79392` Get more usage dialog (+25% for ₦5,000, +50% for ₦10,000, +100% for ₦20,000, pay with iQLY credit or Paystack, auto top-up off).
- Docked on pages: I6 `2144:73076` (greeting), I7 `2168:79634` (Session details inside the panel, with a back arrow), J6e `2154:77189` (judging entry, Always allow, width 1896).
- Text selection flow on the entry, judging section: J6 `1392:97297`, J6b `2149:76654` (toolbar Highlight, Tag, Ask Cowork), J6c `2149:77072` (How does this read, none preselected, Let Cowork decide), J6d `2149:77510` (Tag: search or create, Let Cowork suggest). Built on a passage of one text node per word in a wrapping auto layout so selections and highlights are real shapes.

**Decisions made, so the next agent does not reopen them.**
- Modes: Ask shows a plan and waits (approve, edit, deny). Always allow runs at once, shows its activity, lists everything under Changes with Undo. Cowork never edits or deletes the user's own highlights and tags in either mode.
- Naming: the AI allowance is "usage", not "credit". `iQLY credit` is the existing naira wallet balance. Plans are Free and Pro, taken from the existing plan frames (Pro ₦20,000 a month, renews 9 Nov). Free resets 1 Nov, Pro resets 9 Nov. Extra usage is a Pro feature; Free is offered Upgrade to Pro (the existing UpgradePrompt wording).
- Illustrative numbers (all labelled): the same plan costs about 12% of a Free month and about 1% of a Pro month; Context 22%; Usage 38%; pack prices follow ₦20,000 for 100%.
- Component text trap: a text property has one default for every variant, so text that differs per variant (the banners) is baked in, not a property.

## Comment ledger (file `uzZ7B2copJrWqiUhxjKVNH`)

| Comment | Topic | Outcome | Reply id |
| --- | --- | --- | --- |
| 1979927239 | Landing hero dashboard to challenge | Graphics needed, skipped | 1980050526 |
| 1979927452 | Targeting copy | Copy update needed, skipped | 1980050528 |
| 1979927588 | Challenge copy | Copy update needed, skipped | 1980050530 |
| 1979929222 | First three things | Reordered | 1980050531 |
| 1979929924 | Remove challenge review workspace | Removed | 1980050532 |
| 1979930575 | Mention AI summaries | Copy update needed, skipped | 1980050533 |
| 1979931830 | Polls card | Graphics needed, skipped | 1980050534 |
| 1979935181, 1979935299 | Light logo (1440, 390) | Replaced | 1980050536, 1980050538 |
| 1979907793 | Optional challenge step in activation | Done | 1980053952 |
| 1979911969 | J6 tags, highlights, export, automate | Done | 1980053955 |
| 1979913959 | Summary as a tab | Done (Insights I2) | 1980053956 |
| 1979915161 | Summary at end of challenge | Done (Insights I2) | 1980053960 |
| 1979915749 | Simplify J2, shortlist split, auto-score, one judge | Done | 1980053962 |
| 1979917321 | Bird's-eye view | Done (Insights I3) | 1980053963 |
| 1979916376 | Chatbot | Done (iQLY Cowork page and panel) | 1980053964 |

All threads are left unresolved for the owner to resolve after review.

## Open items and decisions for the owner

- Is the Summary a paid feature? Tentative summary before winners and final summary after are shown for every challenge. Gating (Pro vs Free) is undecided.
- The icon library has no paperclip, X, chevron-down, chevron-left, up-arrow or gauge, so Cowork reuses Icon/plus (rotated 45 degrees for close), Icon/chevron-up (rotated for down, right and left), Icon/arrow-up-right (rotated for send) and Icon/layout-dashboard (Session details). Replace with proper icons when added to the kit.
- Mobile Insights and mobile Cowork are not designed. Desktop 1440 only.
- Insights overview rows for polls and activations show only their own counts. Their detail pages are not designed.
- Auto-score: the real scoring rules, a badge component for auto-scored marks and the error state are not designed.
- EntryCard instances in I5 show "Not scored" because the proposal component has no score prop. Add a score prop to `Exp/Biz/EntryCard (proposal)` (`1695:76771`) and sync it to the design system.
- Insights sidebar item and the new frames use local kit components. Sync them into the design system file when approved.
- The activation card is not shown on the reference frames (`1287:90374` and the "paying from iQLY credit" reference).
- Landing items still waiting on graphics or copy: hero dashboard replacement, targeting and challenge copy, AI summaries line, second polls card. Business footer logo needs the SVG.
- Landing mobile tag clipping (the "Closes in 6 days" pills in the Briefs animation and similar tags) is a code fix in `iqly-platform` (`packages/ui/src/landing/contributor.tsx`). Not started. Proposed: the pill drops to its own line under the business name below about 480px, then a scan at 320, 360 and 390 pixels.

## Helper pattern for scripts

Each `use_figma` call is a fresh scope, so paste the helpers again: load Variable objects by id (Color/bg `355:38`, panel `355:39`, card `355:40`, fg `355:41`, fg2 `355:42`, fg3 `355:43`, line `355:44`, primary `355:51`, primary-fg `355:52`, tint `355:53`, ok `355:58`, ok-soft `355:59`, err `355:64`, err-soft `355:65`, info `355:67`, info-soft `355:68`), bind fills with `figma.variables.setBoundVariableForPaint`, copy text styles from existing nodes (the Body/Small and Heading styles are remote, so read `textStyleId` from J13 text nodes and load the style font), build auto-layout frames with `layoutMode` `'HORIZONTAL'` or `'VERTICAL'`, and set `layoutSizing*` after appending. Component instance property names carry a suffix id, so match them by prefix. Clone J13 (`1703:79516`) for a new page shell and clone its `tabs` and `head` frames. A script that throws rolls back all of its changes, so wrap risky steps in try and catch. `findOne` by name can match an instance with the same name as a frame, so filter by `type`.

## Checks run

- Screenshots of I1 to I6, J2, J6, J14 dialog and activation step 4 were read.
- Sweep over the new and edited frames: no em dashes added, no unstyled text, no unbound fills except the existing sidebar icon paths. The one en dash found in J6 is the existing "Your total" placeholder.

## Chat design process (gauntlet)

Bar: replicate the owner's two chat reference screenshots (threads plus chat containers, docked chat panel) in the light iQLY theme with the official logomark and kit components. Two rounds with a blind critic. Round 1 found overlaps in the docked page, a clipped send button, a right-pointing send arrow and missing scope pill. Round 2 found a send button overflowing the panel composer, a 4px top-edge mismatch and an undifferentiated question bubble. All fixed; the loop stopped at two rounds. Lesson: frame screenshots are the evidence, and widths of auto-layout rows must be checked numerically when a clip is suspected.
