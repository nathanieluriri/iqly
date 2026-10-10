# Design profile: iQLY

## Product
- One line: challenge-based crowdsourcing platform built for Africa. Businesses post real problems (naming a brand, improving a service, consumer research); contributors submit ideas; the best submissions win cash paid via Paystack to the contributor's bank.
- Audience: contributors (customer dashboard, this repo, iqly.net); businesses (business.iqly.net, apps/brand in iqly-platform); admins (challenge review).
- Market / locale: Nigeria first. Currency NGN, amounts stored in kobo, shown as ₦ with en-NG grouping and two decimals. Payouts via Paystack bank transfer.
- Money format on the experimental business screens: whole naira in lists, stats, buttons and fields; kobo only on balances, receipts and ledgers.

## What is built (source of truth)
- Live product: iqly.net production client bundles (read 2 Oct 2026). Dashboard routes: /dashboard/challenges (Discover), /dashboard/challenges/:id (+ /submit), /dashboard/submissions (+ /:id), /dashboard/wallet, /dashboard/profile.
- Platform code: nathanieluriri/iqly-platform (read 10 Oct 2026). apps/web (contributor app and landing), apps/brand (business app and landing), packages/types (tiers, caps, statuses).
- This repo: the four dashboard pages and /design-system, UI only, on sample data.
- Business facts from code:
  - Tiers: Standard, text answers only, pool from ₦500,000, up to 500 submissions. Advanced, text, PDF, images and video links, pool from ₦3,000,000, up to 100 submissions. Cap = clamp(pool / ₦10,000, 30, 500), Advanced max 100. The code floor is temporarily ₦30,000 (cap.ts says to revert).
  - Platform fee 20% of the pool (PLATFORM_FEE_BPS 2000), charged on top at submit for review. Paystack fee passed on at checkout. The pool is held in escrow until winners are confirmed.
  - Challenge statuses and labels: draft "Draft", in_review "In review", review_returned "Action needed", approved "Approved", live "Live", closed "Closed".
  - Winners: "Top N split" (2 to 30 winners, default 3 winners at 60 / 30 / 10, per-winner floor temporarily ₦1,000, normally ₦5,000) or "Tiered % split" (2 to 5 tiers, default top 10% of submissions share 50% of the pool, next 15% share 30%, next 25% share 20%).
  - Assisted challenge request (iQLY drafts the brief): minimum pool ₦200,000 excluding the fee. The route is parked in code and not linked from the app.
  - Submissions in the business app: the AI score is never shown to brands; pending submissions show "Scoring…".
  - Audience filters in the data model: countries, states, cities, age bands, genders, education, occupations, interests, custom screeners. The builder's Audience step is hidden today.
  - Contributor minimum withdrawal ₦1,000.
- Planned, not built (designed in Figma, labelled proposal): polls for businesses (tag polls that save answers to contributor profiles for targeting, and one-off polls), admin review of polls, poll-based and university targeting, starting a challenge from an ended poll, activations (fixed-reward tasks with proof), the experimental white business dashboard and the one-site, two-doors landing.

## Known gaps in shipped code (read 10 Oct 2026)
- Business dashboard: the Total Pool hint says "across all challenges" but the figure counts live and closed challenges only.
- Legal names (owner, 10 Oct): Terms of Service and Code of Conduct everywhere. The brand declaration still says Terms of Use and Community Guidelines in code; designs use the owner's names.
- Tier and pool are fixed once a challenge is paid (owner, 10 Oct). No upgrades, top-ups or lowering after payment.
- Business refunds (owner, 10 Oct): unused activation spots and withdrawn paid challenges refund to the business's iQLY credit, which the business can then withdraw.
- University list: apps/web/src/lib/nigerian-universities.ts holds about 185 names taken from Wikipedia, fewer than the NUC count, so screens say "Search Nigerian universities" without a number.
- Shipped landings: orange band text 3.47:1, orange eyebrows 2.54:1, #8c7197 meta text 4.13:1 and the "In review" pill 3.08:1 fail 4.5:1. The 390 business header has no link to the contributor site.
- Business landing claims with no code behind them: "Live in 10 minutes", "100+ targeted takes", "Up to 50%", "48 to 72 hours". Figma mirrors the shipped landings as they are and does not reuse these claims elsewhere.

## Sanctioned dataset
- Contributor: src/data/demo.ts. Every wallet figure is computed from its ledger and withdrawal rows. Three challenge titles are the live iqly.net hero titles; all other content is illustrative.
- Business (illustrative, documented in the Figma row notes): Orchid Foods with six challenges (C1 live ₦1,500,000, 41 of 150 submissions; C2 in review ₦3,000,000 started from poll P3; C3 draft ₦800,000; C4 and C5 closed; C6 action needed ₦700,000), six polls (P1 live 214 votes; P3 ended 1,180 votes) and three activations (A1 live ₦500, 462 of 500 taken, ₦215,500 paid). Totals: ₦7,500,000 total pool, ₦5,200,000 in escrow, ₦6,000,000 paid to winners.

## Domain vocabulary (from the shipped UI)
- brief / challenge, submission, reward pool, tier (Standard, Advanced), Live / Closed.
- Business challenge status: Draft, In review, Action needed, Approved, Live, Closed.
- Submission status: Under review (pending, scored), Winner, Not selected (filtered_out).
- Withdrawal status words shown raw: pending, completed, failed, reversed.
- Ledger types: "award" confirmed in code; "withdrawal" assumed, TBD against the API enum.
- Winners: "Publish winners" in the judging panel opens a confirm dialog ("Publish N winners?") that releases the total from escrow into the winners' wallets and notifies every participant; it can't be undone (publish-panel.tsx, confirm-winners-dialog.tsx). Designs use a click to confirm, not press and hold.
- Proposal vocabulary: poll states Draft, In review, Action needed, Live, Ended; activation claims in the business view To confirm, Needs info, Confirmed, Rejected; submissions table column "Quality score" with "Scoring…" and "Scored"; the reviewer is "iQLY"; challenges count submissions, activations count spots.
- Banned: em dashes in copy (owner preference). Shipped strings that contain them are rewritten with a period or a comma.

## Reference bar
- Linear's Figma library for component discipline; Mercury and Paystack dashboards for money UI restraint; Grey's web app (app.grey.co) for the business dashboard layout.
- Landings: audience-split sites such as Grey, Wise, Moniepoint and taxflow.com.ng; tactile components in the spirit of dqnamo.com/kitchen.
- Pass rules: every colour, radius, shadow and text style comes from the design-system tokens; copy only from the shipped code; figures foot; no gradients except the shipped cover fallback and the shipped marketing radials; no overlap that hides data; 0 overflow at 1440 / 834 / 390.

## Brand
- Tokens: Figma file eDc8PWheV2bcsZ4dRQni1M (collections Primitives, Color, Spacing & Radius; 31 text styles; 6 effect styles), mirrored in design-system/versions/<v>/tokens.json.
- Type: Plus Jakarta Sans (UI), Geist Mono (labels, ledger types), Bricolage Grotesque (experimental display and landing styles).
- Logos: official files only (public/brand, Figma Logo and Logomark components, the iQLY Business wordmark from apps/brand/public). Never redraw or recolour.

## Figma
- Design system file: eDc8PWheV2bcsZ4dRQni1M (pages 📘 Cover, 💠 App, Experimental · mobile, Experimental · landing (not approved), Experimental · business (not approved)). Library published by the owner.
- App file: uzZ7B2copJrWqiUhxjKVNH. Pages: Web app, Mobile app, Landing page (shipped landings and the experimental two-doors landing), Business dashboard (shipped screens and the experimental white dashboard with polls, targeting and activations), Admin app (poll review section added beside the existing admin frames).
- Pending library page in the App file: local copies of the lucide icon additions, the business wordmark and the Exp/Biz and Exp/Land kits, used by the business and landing screens until the owner publishes. The same components are already built in the DS file (sections 571:99, 571:100 and 571:101 on Experimental · business; 585:99 on Experimental · landing) with the same names and variants. After publish: swap every App instance to the library component of the same name and variant, then delete the Pending library sections. Exp/Biz HoldButton, StatTile, QuickAction, Stamp, DropZone, Receipt and TierPicker are unused and were not ported.
- Business shell (10 Oct, owner feedback "too crowded"): calm Grey-style sidebar (org card with dropdown on top, muted icons, soft wash active item, no "New" badges, request card and user at the bottom) and a quiet top bar (soft search pill, plain icons). Home is greeting, Waiting on you, one ruled row of figures, Live now list. Detail pages use a ruled figure row instead of boxed stat cards; list rows open on click and keep a button only for real actions.
- Buttons for businesses (app and business landing): Exp/Biz/TactileButton (after Kitchen's tactile button). The darker 3px base is an inside bottom stroke so parents never clip it; 1px top highlight; Kind Primary, Secondary, Destructive; State Default, Pressed, Disabled; Size Default (35) and Large (51, trailing arrow, for the business landing). Ghost stays the flat library Button. Icons inside use the scalable line set (Icon/*). The individuals landing keeps the hard-shadow pill buttons.
- Business Home: no buttons in the page header; quick actions (New challenge, Run a poll, Plan an activation, Statements) sit in a row under the greeting.
- Business Home (round 6): greeting with a 7/14/30 day switch; four illustrated quick action tiles (Exp/Biz/ActionTile, Exp/Illus/*: token colours only); a weekly stat row (value, change vs last week, 14-day sparkline); "Responses per day" column chart (this week in primary, last week in line2 for emphasis, hairline grid, tooltip on hover) beside "By source" bars and a Money card; Live now list. Dataviz rules followed: one axis, single hue for magnitude, text in text tokens, no number on every bar.
- Analytics sample series (27 Sep to 10 Oct, responses = submissions + poll votes + activation claims): 58, 52, 40, 212, 188, 171, 248 | 220, 250, 222, 234, 122, 107, 81. Last week 969, this week 1,236 (+28%); votes 723 to 829 (+15%); claims 246 to 366 (+49%); submissions 41 (C1 from 6 Oct). Built from P3 (30 Sep to 7 Oct), P1 (from 5 Oct), P2 (from 7 Oct), A3 (27 to 29 Sep), A1 (from 3 Oct), C1 (from 6 Oct).
- Alerts live on their own page (sidebar item with a count). Settings page: General tab with business details, profile, email notifications (Exp/Biz/Switch) and iQLY credit with Withdraw.
- Sidebar collapses (Exp/Biz/Sidebar State=Expanded 248 / Collapsed 72); the main column fills the width.
- No "Example" chips or "Example data" notes anywhere (owner, 10 Oct): sample content stays unlabelled on screens.
- Business auth (apps/brand/src/routes/_auth): email and password sign in ("Welcome back"), signup with company name, first and last name, work email and password ("Create your business"), verify email ("Check your email"), forgot and reset password. Designed in the "Sign in for businesses" section after app.grey.co: grey canvas, inset photo card (brand cover photo, logo in a notched corner tab, carousel bar, Example poll card, "Ask Nigeria. Hear back in days.") and a white form card.
- Landing audience switch: Grey-style strip above the nav (For individuals / For businesses, active tab underlined in accent orange). The footer and the 390 menu keep their pill switch.
- Reference kit (read only): DvFtf4bSjJPTm9qp4j34g8.
- No-touch zones: the existing admin app frames (not created in these rounds).

## Proof
- Customer proof available: TBD. Unrendered stats and a testimonial in apps/web marketing content are not used.
