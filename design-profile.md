# Design profile: iQLY

## Product
- One line: challenge-based crowdsourcing platform built for Africa. Businesses post real problems (naming a brand, improving a service, consumer research); contributors submit ideas; the best submissions win cash paid via Paystack to the contributor's bank.
- Audience: contributors (customer dashboard, this repo, iqly.net); businesses (business.iqly.net, apps/brand in iqly-platform); admins (challenge review).
- Market / locale: Nigeria first. Currency NGN, amounts stored in kobo, shown as ₦ with en-NG grouping and two decimals. Payouts via Paystack bank transfer.

## What is built (source of truth)
- Live product: iqly.net production client bundles (read 2 Oct 2026). Dashboard routes: /dashboard/challenges (Discover), /dashboard/challenges/:id (+ /submit), /dashboard/submissions (+ /:id), /dashboard/wallet, /dashboard/profile.
- Platform code: nathanieluriri/iqly-platform (read 10 Oct 2026). apps/web (contributor app and landing), apps/brand (business app and landing), packages/types (tiers, caps, statuses).
- This repo: the four dashboard pages and /design-system, UI only, on sample data.
- Business facts from code:
  - Tiers: Standard, text answers only, pool from ₦500,000, up to 500 submissions. Advanced, text, PDF, images and video links, pool from ₦3,000,000, up to 100 submissions. Cap = clamp(pool / ₦10,000, 30, 500), Advanced max 100. The code floor is temporarily ₦30,000 (cap.ts says to revert).
  - Platform fee 20% of the pool (PLATFORM_FEE_BPS 2000), charged on top at submit for review. Paystack fee passed on at checkout. The pool is held in escrow until winners are confirmed.
  - Challenge statuses and labels: draft "Draft", in_review "In review", review_returned "Action needed", approved "Approved", live "Live", closed "Closed".
  - Winners: "1st place" rows or "Top N%".
  - Assisted challenge request (iQLY drafts the brief) from ₦200,000.
  - Audience filters in the data model: countries, states, cities, age bands, genders, education, occupations, interests, custom screeners. The builder's Audience step is hidden today.
  - Contributor minimum withdrawal ₦1,000.
- Planned, not built (designed in Figma, labelled proposal): polls for businesses (tag polls that save answers to contributor profiles for targeting, and one-off polls), admin review of polls, poll-based and university targeting, starting a challenge from an ended poll, activations (fixed-reward tasks with proof), the experimental white business dashboard and the one-site, two-doors landing.

## Sanctioned dataset
- Contributor: src/data/demo.ts. Every wallet figure is computed from its ledger and withdrawal rows. Three challenge titles are the live iqly.net hero titles; all other content is illustrative.
- Business (illustrative, documented in the Figma row notes): Orchid Foods with six challenges (C1 live ₦1,500,000, 41 of 150 submissions; C2 in review ₦3,000,000 started from poll P3; C4 and C5 closed), six polls (P1 live 214 votes; P3 ended 1,180 votes) and three activations (A1 live ₦500, 462 of 500 taken, ₦215,500 paid). Totals: ₦7,500,000 total pool, ₦5,200,000 in escrow, ₦6,000,000 paid to winners.

## Domain vocabulary (from the shipped UI)
- brief / challenge, submission, reward pool, tier (Standard, Advanced), Live / Closed.
- Business challenge status: Draft, In review, Action needed, Approved, Live, Closed.
- Submission status: Under review (pending, scored), Winner, Not selected (filtered_out).
- Withdrawal status words shown raw: pending, completed, failed, reversed.
- Ledger types: "award" confirmed in code; "withdrawal" assumed, TBD against the API enum.
- Proposal vocabulary: poll states Draft, In review, Action needed, Live, Ended; activation claims Checking, Needs info, Confirmed, Rejected.
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
- Design system file: eDc8PWheV2bcsZ4dRQni1M (pages 📘 Cover, 💠 App, Experimental · mobile, Experimental · landing). Library published by the owner.
- App file: uzZ7B2copJrWqiUhxjKVNH. Pages: Web app, Mobile app, Landing page (shipped landings and the experimental two-doors landing), Business dashboard (shipped screens and the experimental white dashboard with polls, targeting and activations), Admin app (poll review section added beside the existing admin frames).
- Pending library page in the App file: local components waiting for the owner to publish (lucide icons, the business wordmark, Exp/Biz and Exp/Land kits). Swap them for library components after publish.
- Reference kit (read only): DvFtf4bSjJPTm9qp4j34g8.
- No-touch zones: the existing admin app frames (not created in these rounds).

## Proof
- Customer proof available: TBD. Unrendered stats and a testimonial in apps/web marketing content are not used.
