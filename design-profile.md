# Design profile: iQLY

## Product
- One line: challenge-based crowdsourcing platform built for Africa. Businesses post real problems (naming a brand, improving a service, consumer research); contributors submit ideas; the best submissions win cash paid via Paystack to the contributor's bank.
- Audience: contributors (customer dashboard, this repo); businesses (business.iqly.net, not in scope).
- Market / locale: Nigeria first. Currency NGN, amounts stored in kobo, shown as ₦ with en-NG grouping and two decimals. Payouts via Paystack bank transfer.

## What is built (source of truth)
- Live product: iqly.net production client bundles (read 2 Oct 2026). Dashboard routes: /dashboard/challenges (Discover), /dashboard/challenges/:id (+ /submit), /dashboard/submissions (+ /:id), /dashboard/wallet, /dashboard/profile.
- This repo: the four dashboard pages and /design-system, UI only, on sample data. Challenge detail, submit and submission detail are not built here yet.
- Planned, not built: TBD (owner to list).

## Sanctioned dataset
- Path: src/data/demo.ts. Every wallet figure is computed from its ledger and withdrawal rows. Three challenge titles are the live iqly.net hero titles; all other content is illustrative.

## Domain vocabulary (from the shipped UI)
- brief / challenge, submission, reward pool, tier (Standard, Advanced), Live / Closed.
- Submission status: Under review (pending, scored), Winner, Not selected (filtered_out).
- Withdrawal status words shown raw: pending, completed, failed, reversed.
- Ledger types: "award" confirmed in code; "withdrawal" assumed, TBD against the API enum.
- Banned: em dashes in copy (owner preference). Shipped strings that contain them are rewritten with a period.

## Reference bar
- Linear's Figma library for component discipline; Mercury and Paystack dashboards for money UI restraint.
- Pass rules: every colour, radius, shadow and text style comes from the design-system tokens; copy only from the shipped code; figures foot; no gradients except the shipped cover fallback; no overlap that hides data; 0 overflow at 1440 / 834 / 390.

## Brand
- Tokens: Figma file eDc8PWheV2bcsZ4dRQni1M (collections Primitives, Color, Spacing & Radius; 31 text styles; 6 effect styles), mirrored in design-system/versions/<v>/tokens.json.
- Type: Plus Jakarta Sans (UI), Geist Mono (labels, ledger types).
- Logos: official files only (public/brand, Figma Logo and Logomark components). Never redraw or recolour.

## Figma
- Design system file: eDc8PWheV2bcsZ4dRQni1M (pages 📘 Cover, 💠 App). Library published by the owner.
- Reference kit (read only): DvFtf4bSjJPTm9qp4j34g8.
- No-touch zones: none declared.

## Proof
- Customer proof available: TBD.
