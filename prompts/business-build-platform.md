# Prompt: build the new business pages in iqly-platform from the exported designs (staging first)

Paste everything below the line into a new Claude Code session that has both repos and the Figma connector.

---

It is time to build. You are implementing the new iQLY business dashboard (desktop and mobile) in `nathanieluriri/iqly-platform`, from the finished designs exported in `nathanieluriri/iqly`. Everything ships to staging first, behind a flag. Nothing reaches production in this session.

## 0. Before you write code

1. **Get both repos.**
   - Attach `nathanieluriri/iqly` (read) and `nathanieluriri/iqly-platform` (push) with add_repo if they are not in the session.
   - In `iqly`, check out the default branch `claude/cool-goldberg-lb6ndb`. If PR #2 is not merged yet, also fetch `claude/design-system-export`, which carries the design system part.
2. **Read in this order:**
   1. `iqly/business-designs/README.md` and `manifest.json`. This is the full export:
      - 228 desktop screens and 49 mobile screens, one PNG per screen;
      - every screen's text, prototype links and row note;
      - the flow starting points;
      - `design-system/` (63 kit images, the icons sheet and `tokens.json`).
   2. `iqly/prompts/business-designs-export.md`, section 4: the combined design guide.
   3. `iqly/design-profile.md`: the source of truth for product facts, money rules, vocabulary, the Orchid Foods sample data and every owner decision. Where it disagrees with an older note, the newest dated owner decision wins.
   4. `iqly-platform`:
      - `apps/brand` (the business app): routing, auth, layout, data fetching, tokens and existing components;
      - `packages/types` (statuses, tiers, caps, winner configs; amounts in kobo);
      - the CI and deploy setup.
3. **Figma is the tie-breaker.** Use it only when a PNG is unclear.
   - App file: `uzZ7B2copJrWqiUhxjKVNH`, Business page `644:37`.
   - Design system file: `eDc8PWheV2bcsZ4dRQni1M`.
   - Load the Figma tools with ToolSearch (`select:mcp__Figma__get_screenshot,mcp__Figma__get_metadata,mcp__Figma__get_design_context`), and load the `figma:figma-design-to-code` skill before calling `get_design_context`.
   - Figma is read-only for you: never edit either file.
   - The Figma account has a tool-call limit, so prefer the exported PNGs and manifest. Call Figma only for details they cannot answer.
4. **Confirm the plan with me in one message before editing code.** Include:
   - the target app and paths;
   - how staging works in this repo (branch, environment, URL, how deploys are triggered);
   - the feature-flag approach;
   - your build order.

   Stop and wait if any of these is unclear.

## 1. Staging safety (non-negotiable)

- **Branch:** work on a new branch in `iqly-platform` with small commits per feature. Open a draft PR. Never push to `main` or to a production branch, and never merge.
- **Flag:** put every new page behind a feature flag, for example `NEW_BUSINESS_UI`. It is off by default and on only in staging (or by an explicit per-user override). With the flag off, production behaviour must stay identical.
- **No live writes:**
  - No database migrations or schema changes unless I approve them first. If a screen needs one, write it up and ask.
  - Never point staging builds at production data or production keys.
  - Use Paystack test mode only.
  - No real emails, SMS or payouts from staging flows.
- **Mock data:** where the API does not exist yet, use a typed mock data layer per feature (`features/<area>/data/`). Seed it from the profile's Orchid Foods dataset and the judging dataset. Choose real or mock per feature in one config file. List missing endpoints as a `TODO(api)` list in the PR description.
- **Rollback:** the rollback is turning the flag off. Say in the PR how to do it.

## 2. What to build (from the export)

Follow the order below. Each item is one commit, and each is checked against its PNGs before the next starts.

1. **Tokens and shell.**
   - Map `design-system/tokens.json` into the app's token build (colours, spacing, radius, shadows, text styles).
   - Desktop: the calm sidebar (collapsible to a rail) and top bar.
   - Mobile (under 768 px): `MobileTopBar` with a "Go to" bottom sheet. There is no bottom tab bar.
2. **Shared kit components.** Build them from `design-system/kit/`. Every button is tactile (`TactileButton` Primary, Secondary, Outline and Destructive, Default and Large), including icon buttons. Reuse shipped components where they already match.
3. **Home**, desktop and mobile. Mobile Home uses:
   - Needs you highlights;
   - the quick actions panel;
   - the Last 7 days panel with its rows;
   - the three variants: nothing needs you, no figures yet, and brand new.
4. **Challenges:**
   - the list;
   - the detail page in every status;
   - the challenge builder, with its steps;
   - targeting with poll answers;
   - the mobile quick challenge.
5. **Polls:** list, builder, review states, live results, ended, start a challenge from a poll, and the mobile quick poll.
6. **Activations:**
   - list and builder;
   - claims and the claim detail page;
   - withdraw, cancel and add money;
   - help requests in WhatsApp style (desktop and mobile);
   - the mobile quick activation.
7. **Payments and Wallet.** Mobile Wallet:
   - a dark purple card with the mono mark stamp and the bulb pattern;
   - the Add bank cut-out pill;
   - the quick actions, tiles and Recent rows.
8. **Settings, Alerts and Sign in.**
9. **Judging**, desktop (the contained style) and mobile (swipe stack, scroll inside the card, tie sheets, publish).

## 3. Visual rules (owner decisions, latest first)

- **Mobile surfaces:**
  - pages are white;
  - containers, cards, header buttons and search fields are light grey (`Color/secondary`);
  - an icon circle inside a grey container is white.
- **Purple:**
  - on mobile, use the dark purple `Color/brand` #2d0048 instead of the bright `Color/primary`;
  - desktop still uses its current styling, so build it as exported.
- **Layering:** nothing is white on white or grey on grey. Text contrast is 4.5:1 or better.
- **Tactile buttons:** every button has a `Color/line` edge and a white inner highlight 1 px from the top. On dark purple buttons the edge is `Color/brand-dark` and the highlight is 22% white.
- **Selection states:** they are neutral (grey with dark text), never purple.
- **Money:**
  - NGN, stored in kobo.
  - Whole naira in lists, buttons and fields. Kobo on balances and ledgers.
  - Platform fee: 20% of the pool on challenges.
  - The Paystack fee is added at checkout.
- **Copy:** take it from the frames and the profile vocabulary. No em dashes. Figures must foot (add up across screens).
- **Logos:** use only official logo files. The wallet card's `Logomark/Mono on ink` and `Logomark/Bulb` were approved by the owner.

## 4. Quality bar and checks

- **Before each push:** run the repo's typecheck, lint, unit tests and build.
- **Business maths:** pure functions with unit tests, covering:
  - fees, caps and pool splits;
  - activation funding and refunds;
  - poll percentages and analytics changes;
  - judging weighted and team scores, Discuss, ties and prizes.
- **Screenshots:** use Playwright (Chromium is preinstalled at `/opt/pw-browsers`) to screenshot every new route at 1440 and 390, with the flag on. Compare each screenshot side by side with its PNG in `business-designs/`.
- **Every screen needs these states:**
  - loading, empty, and error with retry;
  - toasts;
  - dialogs that close on Esc and on the scrim, and trap focus;
  - an unsaved-changes guard on builders;
  - keyboard access for every action.
- **Gauntlet:** run the `anthropic-skills:gauntlet-loop` skill per feature group, with at most 3 critic rounds each.
  - Critics are blind: they get the screenshots, the matching PNGs and this spec, never your account of what you built.
  - Bar: calm like Linear; money as restrained as Mercury and Paystack; layout like Grey.
- **Before asking me to look:** confirm the flag-off build is unchanged from the base branch (same routes, no visual change). Deploy to staging only with the flag on, and post the staging URL.

## 5. Rules for this session

- No AI attribution anywhere (commits, PR text, code, comments, docs). No em dashes. Minimal comments.
- Commits are authored as nathanieluriri <uririnathaniel@gmail.com>. Run `git config commit.gpgsign false` first.
- No new paid services or infrastructure. Ask before adding any dependency.
- **Report at the end:**
  - what is built and where;
  - the staging URL and how to turn the flag on;
  - test and check results as numbers;
  - the `TODO(api)` list;
  - open questions;
  - screenshots.
