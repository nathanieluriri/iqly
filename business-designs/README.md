# iQLY business designs

Every business screen from the Figma app designs file, exported as images so people and agents can use them without opening Figma.

- Source: [Figma app designs](https://www.figma.com/design/uzZ7B2copJrWqiUhxjKVNH), Business page (`644:37`). Read-only export, nothing in Figma was changed.
- Desktop frames are 1440 wide at scale 1. Mobile frames are 390 wide at scale 2 (780 px images).
- 228 desktop frames, 49 mobile frames and 4 shipped reference frames.
- Product facts, vocabulary, money rules and visual rules live in [`../design-profile.md`](../design-profile.md). It is the source of truth.

## Folders

| Folder | Holds |
|---|---|
| `desktop/` | Six row folders, one per Figma row section, numbered in canvas order |
| `mobile/` | Six row folders, one per mobile row |
| `reference/shipped/` | What is shipped today (apps/brand), for comparison only |
| `contact-sheets/` | One JPG per row: thumbnails with their file names |
| `manifest.json` | Every frame: node id, name, row, order, size, image path, all text, prototype links, row note |

## How to search

- Find a screen by words on it: search the `text` field in `manifest.json` (for example `Publish 3 winners` or `₦1,500,000`).
- Find the Figma node: each entry has `id`. Open it with `https://www.figma.com/design/uzZ7B2copJrWqiUhxjKVNH?node-id=<id with : changed to ->`.
- Links: `links` holds the node ids a frame's prototype hotspots go to. In the tables below, `#07` means number 07 in the same row; links to other rows name the row folder.
- Start with the contact sheet for a row, then open the full image.

## A note on the mobile look

The mobile frames show the current look: white pages, light grey containers, the dark purple `Color/brand` accent and tactile buttons. Where an older rule in `design-profile.md` describes a grey page, these frames are the newer state.

## Desktop (1440)

### Row 1: Sign in

Folder `desktop/01-sign-in/`, 6 frames. Contact sheet: [`desktop-01-sign-in.jpg`](contact-sheets/desktop-01-sign-in.jpg)

> Row 1 · Sign in for businesses. Copy from apps/brand/src/routes/_auth (login, signup, verify-email, forgot-password). Sign in opens Home; Forgot? opens the reset form; Create business opens Check your email. 390 Create business has no Check your email copy yet (same as 1440). Send reset link and Resend email have no next screen (deliberate dead ends).

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Exp · Sign in · 1440 | [01-sign-in.png](desktop/01-sign-in/01-sign-in.png) | `850:8734` | Sign in | #02, #04, 02-home-and-challenges #01 |
| 02 | Exp · Create business · 1440 | [02-create-business.png](desktop/01-sign-in/02-create-business.png) | `850:8793` | Create business | #01, #03 |
| 03 | Exp · Check your email · 1440 | [03-check-your-email.png](desktop/01-sign-in/03-check-your-email.png) | `850:8865` | Check your email | #01 |
| 04 | Exp · Forgot password · 1440 | [04-forgot-password.png](desktop/01-sign-in/04-forgot-password.png) | `850:8916` | Forgot password | #01 |
| 05 | Exp · Sign in · 390 | [05-sign-in-390.png](desktop/01-sign-in/05-sign-in-390.png) | `850:8967` | Sign in | #06, 02-home-and-challenges #01 |
| 06 | Exp · Create business · 390 | [06-create-business-390.png](desktop/01-sign-in/06-create-business-390.png) | `850:9021` | Create business | #05 |

### Row 2: Home and challenges

Folder `desktop/02-home-and-challenges/`, 22 frames. Contact sheet: [`desktop-02-home-and-challenges.jpg`](contact-sheets/desktop-02-home-and-challenges.jpg)

> **Row 1 · Business home and challenges**: Experimental. White canvas, light sidebar with Exp icons, the official iQLY for Business wordmark and a workspace switcher: clearly the business product, not the contributor app. Home (Grey layout): Waiting on you (C6 changes, P5 change, 19 claims to confirm on A1), challenge escrow with a per-challenge breakdown and round actions next to live polls, one figure strip, recent submissions with quality score. Fix and resubmit opens the edit form directly (C6 in row 2, P5 in Polls row 3); Review claims opens the A1 queue; escrow rows open C2, C1 and C6. Challenges: tabs by status. Live detail: submissions, judging, and Publish winners as in code (publish-panel.tsx): disabled until judging ends on 23 Oct, then a confirm step lists each winner and amount before ₦1,500,000 leaves escrow. Data: illustrative Orchid Foods set. Escrow C2 ₦3,000,000 + C1 ₦1,500,000 + C6 ₦700,000 = ₦5,200,000. Paid to winners ₦2,000,000 + ₦4,000,000 = ₦6,000,000. Votes 214 + 158 = 372. A1: 431 confirmed + 19 to confirm + 7 need info + 5 rejected = 462. Dead ends on purpose: closed rows (C4, C5), Export, View public page, B03 submission rows and tabs, Request a challenge (assisted requests start from ₦200,000), Verification, Profile, the escrow eye toggle and the top bar (search, notifications, help, avatar, workspace switcher). Home is drawn once; it does not change after a task.

> **Row 2 · Payments, C3 in review, C6 fix and resubmit**: Payments: money in (pools, fees, activation budgets) and money out (winners, activation payouts) in one ledger. Kobo on totals and ledger rows, whole naira elsewhere. Ledger rows and Download statement are not linked. C3 in review: where Continue to Paystack lands at the end of the C3 builder. ₦800,000 pool + 20% fee ₦160,000 = ₦960,000; the Paystack fee is shown on the Paystack receipt. Paystack checkout is off-site and not drawn. Withdraw opens the paid, withdrawn review step (Targeting row 1), which resubmits without a second payment. Back goes to Challenges after paying for C3. C6 fix and resubmit: the two must-change notes sit beside their fields, and the audience is edited to University students to match the brief (What you sent keeps the original Students). Resubmit lands on C6 in review after changes, whose Withdraw returns to the edit; its back link and sidebar open Challenges after resubmitting C6. The ₦700,000 pool stays in escrow throughout.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Exp · Home · 1440 | [01-home.png](desktop/02-home-and-challenges/01-home.png) | `656:350` | Home | 01-sign-in #01, #03, #06, #08, #14, 03-builder-and-targeting #01, 04-polls #01, 04-polls #07 (+3 more) |
| 02 | Exp · Challenges · 1440 | [02-challenges.png](desktop/02-home-and-challenges/02-challenges.png) | `668:4838` | Challenges | 01-sign-in #01, #03, #04, #05, #09, #10, 03-builder-and-targeting #01, 03-builder-and-targeting #07 |
| 03 | Exp · Challenge · live · 1440 | [03-challenge-live.png](desktop/02-home-and-challenges/03-challenge-live.png) | `668:5142` | Challenge, live | 01-sign-in #01, #02 |
| 04 | Exp · Challenge · in review · 1440 | [04-challenge-in-review.png](desktop/02-home-and-challenges/04-challenge-in-review.png) | `727:4362` | Challenge, in review | 01-sign-in #01, #02, #21 |
| 05 | Exp · Challenge · action needed · 1440 | [05-challenge-action-needed.png](desktop/02-home-and-challenges/05-challenge-action-needed.png) | `727:4605` | Challenge, action needed | 01-sign-in #01, #02, #16 |
| 06 | Exp · Alerts · 1440 | [06-alerts.png](desktop/02-home-and-challenges/06-alerts.png) | `868:9507` | Alerts | 01-sign-in #01, #04, #16, 04-polls #19, 04-polls #22, 04-polls #24, 05-activations #03 |
| 07 | Exp · Settings · 1440 | [07-settings.png](desktop/02-home-and-challenges/07-settings.png) | `872:9707` | Settings | 01-sign-in #01, #11, #12, #13 |
| 08 | Exp · Home · sidebar collapsed · 1440 | [08-home-sidebar-collapsed.png](desktop/02-home-and-challenges/08-home-sidebar-collapsed.png) | `873:56672` | Home, sidebar collapsed | #01, #03, #06, #14, 03-builder-and-targeting #01, 04-polls #01, 04-polls #07, 04-polls #21 (+2 more) |
| 09 | Exp · Challenges · status filter open · 1440 | [09-challenges-status-filter-open.png](desktop/02-home-and-challenges/09-challenges-status-filter-open.png) | `948:11784` | Challenges, status filter open | 01-sign-in #01, #02, #03, #04, #05, 03-builder-and-targeting #01, 03-builder-and-targeting #07 |
| 10 | Exp · Challenges · row menu open · 1440 | [10-challenges-row-menu-open.png](desktop/02-home-and-challenges/10-challenges-row-menu-open.png) | `972:12977` | Challenges, row menu open | 01-sign-in #01, #02, #03, #04, #05, #09, 03-builder-and-targeting #01, 03-builder-and-targeting #07 |
| 11 | Exp · Settings · Business profile · 1440 | [11-settings-business-profile.png](desktop/02-home-and-challenges/11-settings-business-profile.png) | `877:10089` | Settings, Business profile | 01-sign-in #01, #07 |
| 12 | Exp · Settings · Notifications · 1440 | [12-settings-notifications.png](desktop/02-home-and-challenges/12-settings-notifications.png) | `877:10186` | Settings, Notifications | 01-sign-in #01, #07 |
| 13 | Exp · Settings · Bank account · 1440 | [13-settings-bank-account.png](desktop/02-home-and-challenges/13-settings-bank-account.png) | `877:10283` | Settings, Bank account | 01-sign-in #01, #07 |
| 14 | Exp · Payments · 1440 | [14-payments.png](desktop/02-home-and-challenges/14-payments.png) | `728:4634` | Payments | 01-sign-in #01, #13 |
| 15 | Exp · Challenge · in review · new · 1440 | [15-challenge-in-review-new.png](desktop/02-home-and-challenges/15-challenge-in-review-new.png) | `745:5526` | Challenge, in review, new | 01-sign-in #01, #18, #22 |
| 16 | Exp · Challenge · fix and resubmit · 1440 | [16-challenge-fix-and-resubmit.png](desktop/02-home-and-challenges/16-challenge-fix-and-resubmit.png) | `761:6077` | Challenge, fix and resubmit | 01-sign-in #01, #02, #05, #17 |
| 17 | Exp · Challenge · in review after changes · 1440 | [17-challenge-in-review-after-changes.png](desktop/02-home-and-challenges/17-challenge-in-review-after-changes.png) | `761:21144` | Challenge, in review after changes | 01-sign-in #01, #19 |
| 18 | Exp · Challenges · after paying for C3 · 1440 | [18-challenges-after-paying-for-c3.png](desktop/02-home-and-challenges/18-challenges-after-paying-for-c3.png) | `762:7064` | Challenges, after paying for C3 | 01-sign-in #01, #03, #04, #05, #15, 03-builder-and-targeting #01 |
| 19 | Exp · Challenges · after resubmitting C6 · 1440 | [19-challenges-after-resubmitting-c6.png](desktop/02-home-and-challenges/19-challenges-after-resubmitting-c6.png) | `793:7764` | Challenges, after resubmitting C6 | 01-sign-in #01, #03, #04, #17, 03-builder-and-targeting #01, 03-builder-and-targeting #07 |
| 20 | Exp · Challenge · approved · 1440 | [20-challenge-approved.png](desktop/02-home-and-challenges/20-challenge-approved.png) | `995:29384` | Challenge, approved | 01-sign-in #01, #02 |
| 21 | Exp · Challenge · in review · menu open · 1440 | [21-challenge-in-review-menu-open.png](desktop/02-home-and-challenges/21-challenge-in-review-menu-open.png) | `1004:14364` | Challenge, in review, menu open | 01-sign-in #01, #02, #04, 03-builder-and-targeting #20 |
| 22 | Exp · Challenge · in review · new · menu open · 1440 | [22-challenge-in-review-new-menu-open.png](desktop/02-home-and-challenges/22-challenge-in-review-new-menu-open.png) | `1004:14552` | Challenge, in review, new, menu open | 01-sign-in #01, #15, #18, 03-builder-and-targeting #13 |

### Row 3: New challenge builder and targeting

Folder `desktop/03-builder-and-targeting/`, 53 frames. Contact sheet: [`desktop-03-builder-and-targeting.jpg`](contact-sheets/desktop-03-builder-and-targeting.jpg)

> **Row 1 · New challenge: all ten steps, then withdrawn**: Proposal on the shipped builder’s steps: Type, Basics, Brief, Cover, Survey, Audience (hidden in the shipped builder), Reward, Timeline, Brand visibility (Anonymity in the shipped builder), Review and fund. Brief is the big step: overview (up to 5,000 characters), problem statement (up to 2,000), up to 3 deliverables and up to 5 success criteria with importance 1 to 5. Cover is optional (empty, then uploaded); contributors see it on the challenge card on Discover and at the top of the brief. Audience adds University and Poll answers to the shipped filters; the second Audience frame is Advanced targeting. C3 Packaging ideas: Standard, ₦800,000, cap 80 submissions, 14 days open then 7 days judging, Top N split with 3 winners (60 / 30 / 10: ₦480,000, ₦240,000, ₦80,000). Fee 20% ₦160,000, total ₦960,000. Review and fund keeps Continue to Paystack at the footer right. Finished steps on the rail and in the strip open their step. Save and exit sits next to the Preview switch on every step and goes to Challenges, where the draft waits. Collapse steps sits at the top of the rail, in the same spot as Expand steps. Withdrawn (already paid): Tier is fixed at payment and the pool is shown as paid. Back, Audience Edit and Edit split open paid copies of the Audience and Reward steps (pool locked, Paid 10 Oct box) whose buttons return to the review. Resubmit for review needs no second payment.

> **Row 2 · From poll P3, then fund**: Proposal. Start a challenge from an ended poll (P3) opens the builder with the poll answer already targeted (C2, Advanced, ₦3,000,000, 10 winners). Review and fund: summary, declaration and the payment summary: ₦3,000,000 pool + 20% fee ₦600,000 = ₦3,600,000, Paystack fee added at checkout. Continue to Paystack lands on the C2 in review detail (row 1 of Home and challenges). Withdrawn (already paid) resubmits without a second payment; its Back and Edit links open paid copies of the Audience and Reward steps. C2’s Basics to Survey and Timeline to Brand visibility are not drawn; those finished steps on its rail and strip are not linked.

> **Row 3 · No tag polls yet, and from poll P1**: The no tag polls frame is the state for a business that hasn’t run a tag poll yet; Create a poll opens New poll for that draft, with Back to draft.

> **Row 4 · New challenge help, collapsed steps and a long title**: Help links open a popover under the link: Which tier fits? (Type), How your brief is used (Brief), How targeting works (Audience), How the money works (Reward, Review and fund). The close button and the link both go back, and the popover follows its link when the steps are collapsed. Brief with the steps collapsed: the rail becomes a strip under the title and the brief takes the full width. Basics with a 200-character title: the title stops at 640 px and the current crumb at 320 px, each ending with an ellipsis, so the save status and Save and exit stay clear of it. The title field keeps one line.

> **Row 5 · New challenge previews, desktop**: Preview on Desktop in step order from Basics to Review: the iqly.net brief page in a browser, scaled to fit, filling in as the steps are done. Until a cover is added, the brief shows the default cover. Each sits under its step in row 1.

> **Row 6 · New challenge previews, mobile**: Preview on Mobile in step order: the contributor app’s brief in a phone at actual size, drawn full length so the whole brief can be read. Each sits under its step in row 1.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Exp · New challenge · 1 Type · 1440 | [01-new-challenge-1-type.png](desktop/03-builder-and-targeting/01-new-challenge-1-type.png) | `724:3616` | New challenge, 1 Type | 01-sign-in #01, 02-home-and-challenges #02, #02, #27 |
| 02 | Exp · New challenge · 2 Basics · 1440 | [02-new-challenge-2-basics.png](desktop/03-builder-and-targeting/02-new-challenge-2-basics.png) | `1098:24583` | New challenge, 2 Basics | 01-sign-in #01, 02-home-and-challenges #02, #01, #03, #44 |
| 03 | Exp · New challenge · 3 Brief · 1440 | [03-new-challenge-3-brief.png](desktop/03-builder-and-targeting/03-new-challenge-3-brief.png) | `1098:24950` | New challenge, 3 Brief | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #04, #29, #45 |
| 04 | Exp · New challenge · 4 Cover · empty · 1440 | [04-new-challenge-4-cover-empty.png](desktop/03-builder-and-targeting/04-new-challenge-4-cover-empty.png) | `1100:25058` | New challenge, 4 Cover, empty | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #46 |
| 05 | Exp · New challenge · 4 Cover · 1440 | [05-new-challenge-4-cover.png](desktop/03-builder-and-targeting/05-new-challenge-4-cover.png) | `1100:25308` | New challenge, 4 Cover | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #04, #06, #47 |
| 06 | Exp · New challenge · 5 Survey · 1440 | [06-new-challenge-5-survey.png](desktop/03-builder-and-targeting/06-new-challenge-5-survey.png) | `1100:25558` | New challenge, 5 Survey | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #07, #48 |
| 07 | Exp · New challenge · 6 Audience · 1440 | [07-new-challenge-6-audience.png](desktop/03-builder-and-targeting/07-new-challenge-6-audience.png) | `662:2986` | New challenge, 6 Audience | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #08 (+3 more) |
| 08 | Exp · New challenge · 6 Audience · advanced targeting · 1440 | [08-new-challenge-6-audience-advanced-targeting.png](desktop/03-builder-and-targeting/08-new-challenge-6-audience-advanced-targeting.png) | `662:3380` | New challenge, 6 Audience, advanced targeting | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #07 (+1 more) |
| 09 | Exp · New challenge · 7 Reward · 1440 | [09-new-challenge-7-reward.png](desktop/03-builder-and-targeting/09-new-challenge-7-reward.png) | `725:3954` | New challenge, 7 Reward | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #07 (+3 more) |
| 10 | Exp · New challenge · 8 Timeline · 1440 | [10-new-challenge-8-timeline.png](desktop/03-builder-and-targeting/10-new-challenge-8-timeline.png) | `1100:25883` | New challenge, 8 Timeline | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #07 (+3 more) |
| 11 | Exp · New challenge · 9 Brand visibility · 1440 | [11-new-challenge-9-brand-visibility.png](desktop/03-builder-and-targeting/11-new-challenge-9-brand-visibility.png) | `1100:26173` | New challenge, 9 Brand visibility | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #07 (+4 more) |
| 12 | Exp · New challenge · 10 Review and fund · 1440 | [12-new-challenge-10-review-and-fund.png](desktop/03-builder-and-targeting/12-new-challenge-10-review-and-fund.png) | `726:4220` | New challenge, 10 Review and fund | 01-sign-in #01, 02-home-and-challenges #02, 02-home-and-challenges #15, #01, #02, #03, #05, #06 (+6 more) |
| 13 | Exp · New challenge · 10 Review · withdrawn · 1440 | [13-new-challenge-10-review-withdrawn.png](desktop/03-builder-and-targeting/13-new-challenge-10-review-withdrawn.png) | `759:6043` | New challenge, 10 Review, withdrawn | 01-sign-in #01, 02-home-and-challenges #02, 02-home-and-challenges #15, #01, #02, #03, #05, #06 (+6 more) |
| 14 | Exp · New challenge · 6 Audience · paid, withdrawn · 1440 | [14-new-challenge-6-audience-paid-withdrawn.png](desktop/03-builder-and-targeting/14-new-challenge-6-audience-paid-withdrawn.png) | `793:55014` | New challenge, 6 Audience, paid, withdrawn | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #08 (+4 more) |
| 15 | Exp · New challenge · 7 Reward · paid, withdrawn · 1440 | [15-new-challenge-7-reward-paid-withdrawn.png](desktop/03-builder-and-targeting/15-new-challenge-7-reward-paid-withdrawn.png) | `793:55363` | New challenge, 7 Reward, paid, withdrawn | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #10 (+3 more) |
| 16 | Exp · New challenge · from poll · 1 Type · 1440 | [16-new-challenge-from-poll-1-type.png](desktop/03-builder-and-targeting/16-new-challenge-from-poll-1-type.png) | `724:3874` | New challenge, from poll, 1 Type | 01-sign-in #01, 02-home-and-challenges #02, #17, 04-polls #22 |
| 17 | Exp · New challenge · from poll · 6 Audience · 1440 | [17-new-challenge-from-poll-6-audience.png](desktop/03-builder-and-targeting/17-new-challenge-from-poll-6-audience.png) | `663:3783` | New challenge, from poll, 6 Audience | 01-sign-in #01, 02-home-and-challenges #02, #16, #18, 04-polls #22 |
| 18 | Exp · New challenge · from poll · 7 Reward · 1440 | [18-new-challenge-from-poll-7-reward.png](desktop/03-builder-and-targeting/18-new-challenge-from-poll-7-reward.png) | `725:4211` | New challenge, from poll, 7 Reward | 01-sign-in #01, 02-home-and-challenges #02, #16, #17, #19 |
| 19 | Exp · New challenge · from poll · 10 Review and fund · 1440 | [19-new-challenge-from-poll-10-review-and-fund.png](desktop/03-builder-and-targeting/19-new-challenge-from-poll-10-review-and-fund.png) | `663:4093` | New challenge, from poll, 10 Review and fund | 01-sign-in #01, 02-home-and-challenges #02, 02-home-and-challenges #04, #16, #17, #18 |
| 20 | Exp · New challenge · from poll · 10 Review · withdrawn · 1440 | [20-new-challenge-from-poll-10-review-withdrawn.png](desktop/03-builder-and-targeting/20-new-challenge-from-poll-10-review-withdrawn.png) | `759:5793` | New challenge, from poll, 10 Review, withdrawn | 01-sign-in #01, 02-home-and-challenges #02, 02-home-and-challenges #04, #16, #17, #18, #21, #22 |
| 21 | Exp · New challenge · from poll · 6 Audience · paid, withdrawn · 1440 | [21-new-challenge-from-poll-6-audience-paid-withdrawn.png](desktop/03-builder-and-targeting/21-new-challenge-from-poll-6-audience-paid-withdrawn.png) | `793:55632` | New challenge, from poll, 6 Audience, paid, withdrawn | 01-sign-in #01, 02-home-and-challenges #02, #16, #20, #22, 04-polls #22 |
| 22 | Exp · New challenge · from poll · 7 Reward · paid, withdrawn · 1440 | [22-new-challenge-from-poll-7-reward-paid-withdrawn.png](desktop/03-builder-and-targeting/22-new-challenge-from-poll-7-reward-paid-withdrawn.png) | `793:55878` | New challenge, from poll, 7 Reward, paid, withdrawn | 01-sign-in #01, 02-home-and-challenges #02, #16, #20, #21 |
| 23 | Exp · New challenge · 6 Audience · no tag polls yet · 1440 | [23-new-challenge-6-audience-no-tag-polls-yet.png](desktop/03-builder-and-targeting/23-new-challenge-6-audience-no-tag-polls-yet.png) | `663:3475` | New challenge, 6 Audience, no tag polls yet | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #07 (+2 more) |
| 24 | Exp · New challenge · from poll P1 · 1 Type · 1440 | [24-new-challenge-from-poll-p1-1-type.png](desktop/03-builder-and-targeting/24-new-challenge-from-poll-p1-1-type.png) | `761:53688` | New challenge, from poll P1, 1 Type | 01-sign-in #01, 02-home-and-challenges #02, #25, 04-polls #23 |
| 25 | Exp · New challenge · from poll P1 · 6 Audience · 1440 | [25-new-challenge-from-poll-p1-6-audience.png](desktop/03-builder-and-targeting/25-new-challenge-from-poll-p1-6-audience.png) | `761:53764` | New challenge, from poll P1, 6 Audience | 01-sign-in #01, 02-home-and-challenges #02, #24, 04-polls #23 |
| 26 | Exp · New poll · 1 Type · for a challenge draft · 1440 | [26-new-poll-1-type-for-a-challenge-draft.png](desktop/03-builder-and-targeting/26-new-poll-1-type-for-a-challenge-draft.png) | `934:11093` | New poll, 1 Type, for a challenge draft | 01-sign-in #01, 02-home-and-challenges #02, #23, 04-polls #01, 04-polls #08 |
| 27 | Exp · New challenge · 1 Type · help open · 1440 | [27-new-challenge-1-type-help-open.png](desktop/03-builder-and-targeting/27-new-challenge-1-type-help-open.png) | `1104:33865` | New challenge, 1 Type, help open | 01-sign-in #01, 02-home-and-challenges #02, #01, #02 |
| 28 | Exp · New challenge · 2 Basics · long title · 1440 | [28-new-challenge-2-basics-long-title.png](desktop/03-builder-and-targeting/28-new-challenge-2-basics-long-title.png) | `1146:36272` | New challenge, 2 Basics, long title | 01-sign-in #01, 02-home-and-challenges #02, #01, #03, #44 |
| 29 | Exp · New challenge · 3 Brief · help open · 1440 | [29-new-challenge-3-brief-help-open.png](desktop/03-builder-and-targeting/29-new-challenge-3-brief-help-open.png) | `1104:34072` | New challenge, 3 Brief, help open | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #04, #45 |
| 30 | Exp · New challenge · 3 Brief · steps collapsed · 1440 | [30-new-challenge-3-brief-steps-collapsed.png](desktop/03-builder-and-targeting/30-new-challenge-3-brief-steps-collapsed.png) | `1111:35099` | New challenge, 3 Brief, steps collapsed | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #04, #29, #45 |
| 31 | Exp · New challenge · 6 Audience · help open · 1440 | [31-new-challenge-6-audience-help-open.png](desktop/03-builder-and-targeting/31-new-challenge-6-audience-help-open.png) | `1104:34310` | New challenge, 6 Audience, help open | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #07 (+3 more) |
| 32 | Exp · New challenge · 7 Reward · help open · 1440 | [32-new-challenge-7-reward-help-open.png](desktop/03-builder-and-targeting/32-new-challenge-7-reward-help-open.png) | `1104:34585` | New challenge, 7 Reward, help open | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #05, #06, #07 (+3 more) |
| 33 | Exp · New challenge · 10 Review and fund · help open · 1440 | [33-new-challenge-10-review-and-fund-help-open.png](desktop/03-builder-and-targeting/33-new-challenge-10-review-and-fund-help-open.png) | `1104:34822` | New challenge, 10 Review and fund, help open | 01-sign-in #01, 02-home-and-challenges #02, 02-home-and-challenges #15, #01, #02, #03, #05, #06 (+6 more) |
| 34 | Exp · New challenge · 4 Cover · empty · preview · desktop · 1440 | [34-new-challenge-4-cover-empty-preview-desktop.png](desktop/03-builder-and-targeting/34-new-challenge-4-cover-empty-preview-desktop.png) | `1103:29435` | New challenge, 4 Cover, empty, preview, desktop | 01-sign-in #01, 02-home-and-challenges #02, #03, #04, #06, #46 |
| 35 | Exp · New challenge · 4 Cover · preview · desktop · 1440 | [35-new-challenge-4-cover-preview-desktop.png](desktop/03-builder-and-targeting/35-new-challenge-4-cover-preview-desktop.png) | `1103:30459` | New challenge, 4 Cover, preview, desktop | 01-sign-in #01, 02-home-and-challenges #02, #03, #05, #06, #47 |
| 36 | Exp · New challenge · 5 Survey · preview · desktop · 1440 | [36-new-challenge-5-survey-preview-desktop.png](desktop/03-builder-and-targeting/36-new-challenge-5-survey-preview-desktop.png) | `1103:31483` | New challenge, 5 Survey, preview, desktop | 01-sign-in #01, 02-home-and-challenges #02, #05, #06, #07, #48 |
| 37 | Exp · New challenge · 6 Audience · preview · desktop · 1440 | [37-new-challenge-6-audience-preview-desktop.png](desktop/03-builder-and-targeting/37-new-challenge-6-audience-preview-desktop.png) | `1103:32507` | New challenge, 6 Audience, preview, desktop | 01-sign-in #01, 02-home-and-challenges #02, #06, #07, #09, #49 |
| 38 | Exp · New challenge · 7 Reward · preview · desktop · 1440 | [38-new-challenge-7-reward-preview-desktop.png](desktop/03-builder-and-targeting/38-new-challenge-7-reward-preview-desktop.png) | `1103:33531` | New challenge, 7 Reward, preview, desktop | 01-sign-in #01, 02-home-and-challenges #02, #07, #09, #10, #50 |
| 39 | Exp · New challenge · 8 Timeline · preview · desktop · 1440 | [39-new-challenge-8-timeline-preview-desktop.png](desktop/03-builder-and-targeting/39-new-challenge-8-timeline-preview-desktop.png) | `1103:34555` | New challenge, 8 Timeline, preview, desktop | 01-sign-in #01, 02-home-and-challenges #02, #09, #10, #11, #51 |
| 40 | Exp · New challenge · 9 Brand visibility · preview · desktop · 1440 | [40-new-challenge-9-brand-visibility-preview-desktop.png](desktop/03-builder-and-targeting/40-new-challenge-9-brand-visibility-preview-desktop.png) | `1103:35579` | New challenge, 9 Brand visibility, preview, desktop | 01-sign-in #01, 02-home-and-challenges #02, #10, #11, #12, #52 |
| 41 | Exp · New challenge · 10 Review · preview · desktop · 1440 | [41-new-challenge-10-review-preview-desktop.png](desktop/03-builder-and-targeting/41-new-challenge-10-review-preview-desktop.png) | `1103:36603` | New challenge, 10 Review, preview, desktop | 01-sign-in #01, 02-home-and-challenges #02, 02-home-and-challenges #15, #11, #12, #53 |
| 42 | Exp · New challenge · 3 Brief · preview · desktop · 1440 | [42-new-challenge-3-brief-preview-desktop.png](desktop/03-builder-and-targeting/42-new-challenge-3-brief-preview-desktop.png) | `1103:28411` | New challenge, 3 Brief, preview, desktop | 01-sign-in #01, 02-home-and-challenges #02, #02, #03, #04, #45 |
| 43 | Exp · New challenge · 2 Basics · preview · desktop · 1440 | [43-new-challenge-2-basics-preview-desktop.png](desktop/03-builder-and-targeting/43-new-challenge-2-basics-preview-desktop.png) | `1103:27387` | New challenge, 2 Basics, preview, desktop | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #44 |
| 44 | Exp · New challenge · 2 Basics · preview · mobile · 1440 | [44-new-challenge-2-basics-preview-mobile.png](desktop/03-builder-and-targeting/44-new-challenge-2-basics-preview-mobile.png) | `1103:26921` | New challenge, 2 Basics, preview, mobile | 01-sign-in #01, 02-home-and-challenges #02, #01, #02, #03, #43 |
| 45 | Exp · New challenge · 3 Brief · preview · mobile · 1440 | [45-new-challenge-3-brief-preview-mobile.png](desktop/03-builder-and-targeting/45-new-challenge-3-brief-preview-mobile.png) | `1103:27945` | New challenge, 3 Brief, preview, mobile | 01-sign-in #01, 02-home-and-challenges #02, #02, #03, #04, #42 |
| 46 | Exp · New challenge · 4 Cover · empty · preview · mobile · 1440 | [46-new-challenge-4-cover-empty-preview-mobile.png](desktop/03-builder-and-targeting/46-new-challenge-4-cover-empty-preview-mobile.png) | `1103:28969` | New challenge, 4 Cover, empty, preview, mobile | 01-sign-in #01, 02-home-and-challenges #02, #03, #04, #06, #34 |
| 47 | Exp · New challenge · 4 Cover · preview · mobile · 1440 | [47-new-challenge-4-cover-preview-mobile.png](desktop/03-builder-and-targeting/47-new-challenge-4-cover-preview-mobile.png) | `1103:29993` | New challenge, 4 Cover, preview, mobile | 01-sign-in #01, 02-home-and-challenges #02, #03, #05, #06, #35 |
| 48 | Exp · New challenge · 5 Survey · preview · mobile · 1440 | [48-new-challenge-5-survey-preview-mobile.png](desktop/03-builder-and-targeting/48-new-challenge-5-survey-preview-mobile.png) | `1103:31017` | New challenge, 5 Survey, preview, mobile | 01-sign-in #01, 02-home-and-challenges #02, #05, #06, #07, #36 |
| 49 | Exp · New challenge · 6 Audience · preview · mobile · 1440 | [49-new-challenge-6-audience-preview-mobile.png](desktop/03-builder-and-targeting/49-new-challenge-6-audience-preview-mobile.png) | `1103:32041` | New challenge, 6 Audience, preview, mobile | 01-sign-in #01, 02-home-and-challenges #02, #06, #07, #09, #37 |
| 50 | Exp · New challenge · 7 Reward · preview · mobile · 1440 | [50-new-challenge-7-reward-preview-mobile.png](desktop/03-builder-and-targeting/50-new-challenge-7-reward-preview-mobile.png) | `1103:33065` | New challenge, 7 Reward, preview, mobile | 01-sign-in #01, 02-home-and-challenges #02, #07, #09, #10, #38 |
| 51 | Exp · New challenge · 8 Timeline · preview · mobile · 1440 | [51-new-challenge-8-timeline-preview-mobile.png](desktop/03-builder-and-targeting/51-new-challenge-8-timeline-preview-mobile.png) | `1103:34089` | New challenge, 8 Timeline, preview, mobile | 01-sign-in #01, 02-home-and-challenges #02, #09, #10, #11, #39 |
| 52 | Exp · New challenge · 9 Brand visibility · preview · mobile · 1440 | [52-new-challenge-9-brand-visibility-preview-mobile.png](desktop/03-builder-and-targeting/52-new-challenge-9-brand-visibility-preview-mobile.png) | `1103:35113` | New challenge, 9 Brand visibility, preview, mobile | 01-sign-in #01, 02-home-and-challenges #02, #10, #11, #12, #40 |
| 53 | Exp · New challenge · 10 Review · preview · mobile · 1440 | [53-new-challenge-10-review-preview-mobile.png](desktop/03-builder-and-targeting/53-new-challenge-10-review-preview-mobile.png) | `1103:36137` | New challenge, 10 Review, preview, mobile | 01-sign-in #01, 02-home-and-challenges #02, 02-home-and-challenges #15, #11, #12, #41 |

### Row 4: Polls

Folder `desktop/04-polls/`, 51 frames. Contact sheet: [`desktop-04-polls.jpg`](contact-sheets/desktop-04-polls.jpg)

> **Row 1 · Poll library**: Proposal, not in code. Polls live in the business account so every result stays reachable. Two types from the owner’s draft: answers saved to contributor profiles as tags (usable for targeting) or one-off (results only). Every poll goes through iQLY review first (Draft, In review, Live, Ended, or Action needed). Data: illustrative Orchid Foods polls P1 to P6. P1 matches the contributor screens (214 votes, 45 / 33 / 22). 372 = 214 + 158. 1,180 tags from P3; after P1 ends, 1,394 tags across two polls (some people hold tags from both). Empty: the first visit explains both types before the first poll. The library after ending P1 early, after resubmitting P5 and after sending P6 is where those flows return (back links and sidebar). Dead ends on purpose: P2 View results (no P2 results frame) and the tabs.

> **Row 2 · Create a poll (tags and one-off)**: Proposal. Five rail steps: Type (tags or one-off), Question and options (2 to 4, each option shows the tag it creates), Cover, Audience and timing, Review. Cover is optional: the empty drop zone, then the uploaded photo, which contributors see at the top of the poll and on its card in Quick polls. Drafts save as you go and the status beside the title says when; Save and exit goes to the Polls library with the draft kept. Collapse steps, at the top of the rail, folds the rail into a strip under the title and the form takes the full width; Expand steps, in the same spot, brings it back (row 5 shows it collapsed). The tag path re-enacts how P4 was made (8 to 9 Oct). One-off path (P6 draft): Type with One-off selected, Question, Cover, Audience and timing, Review, then in review. Back and Edit on the one-off path return to the one-off steps. Finished steps on the rail and in the strip open their step. Withdraw on the in-review frame returns to the question step.

> **Row 3 · Review, results, end early, resubmit**: Proposal. In review (info banner, status timeline, Withdraw), action needed (flagged options and one must-change note), live results with End poll early, ended with Start a challenge from this poll (P3), ended early (P1) with its own start into Targeting row 3 (the P1 tags are now targetable), edit after changes and in review after changes (P5). Numbers: P1 96 + 71 + 47 = 214 (45 / 33 / 22). P3 342 + 451 + 268 + 119 = 1,180 (29 / 38 / 23 / 10). Age split is illustrative: 101 + 71 + 30 + 12 = 214. Bars are drawn at the exact share of the track.

> **Row 4 · End poll early (dialog)**: Opens over Live results, which show through a 40% scrim. End poll (destructive) ends the poll and lands on Ended early; Keep it running, the close button or a click on the dimmed page closes it. Plain click to confirm, as in the shipped confirm dialogs.

> **Row 5 · New poll help and collapsed steps**: Help links open a popover under the link: How tags work (Type and Question), How one-off polls work, Where it shows, What happens next. The close button and the link both go back. The popover follows its link when the steps are collapsed. Question with the steps collapsed: the rail becomes a strip under the title (Expand steps, then the numbered steps with the current one named) and the form fills the width. Finished step numbers open their step.

> **Row 6 · New poll previews, tags**: Every step has the Edit and Preview switch in the same place; on Type, Preview is disabled until there is a question. Preview hides the rail and form and shows a full-width stage: Mobile is the contributor app in a phone at actual size, Desktop the iqly.net page in a browser, scaled to fit. In step order: Question, Cover (empty, then uploaded), Audience and timing, Review. Until a cover is added, the poll shows the default cover.

> **Row 7 · New poll previews, one-off**: The same previews for the one-off poll (P6 draft) in step order: Question, Cover, Audience and timing, Review, Mobile then Desktop for each.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Exp · Polls · 1440 | [01-polls.png](desktop/04-polls/01-polls.png) | `657:810` | Polls | 01-sign-in #01, 03-builder-and-targeting #16, #06, #07, #14, #19, #20, #21 (+1 more) |
| 02 | Exp · Polls · empty · 1440 | [02-polls-empty.png](desktop/04-polls/02-polls-empty.png) | `657:1197` | Polls, empty | 01-sign-in #01, #07, #14 |
| 03 | Exp · Polls · after ending P1 early · 1440 | [03-polls-after-ending-p1-early.png](desktop/04-polls/03-polls-after-ending-p1-early.png) | `762:7302` | Polls, after ending P1 early | 01-sign-in #01, 03-builder-and-targeting #16, #07, #14, #19, #20, #22, #23 |
| 04 | Exp · Polls · after resubmitting P5 · 1440 | [04-polls-after-resubmitting-p5.png](desktop/04-polls/04-polls-after-resubmitting-p5.png) | `762:7407` | Polls, after resubmitting P5 | 01-sign-in #01, 03-builder-and-targeting #16, #07, #14, #19, #21, #22, #25 |
| 05 | Exp · Polls · after sending P6 · 1440 | [05-polls-after-sending-p6.png](desktop/04-polls/05-polls-after-sending-p6.png) | `793:7992` | Polls, after sending P6 | 01-sign-in #01, 03-builder-and-targeting #16, #07, #18, #19, #20, #21, #22 |
| 06 | Exp · Polls · row menu open · 1440 | [06-polls-row-menu-open.png](desktop/04-polls/06-polls-row-menu-open.png) | `972:13222` | Polls, row menu open | 01-sign-in #01, 03-builder-and-targeting #16, #01, #07, #14, #19, #20, #21 (+2 more) |
| 07 | Exp · New poll · 1 Type · 1440 | [07-new-poll-1-type.png](desktop/04-polls/07-new-poll-1-type.png) | `658:1299` | New poll, 1 Type | 01-sign-in #01, #01, #08, #13, #28 |
| 08 | Exp · New poll · 2 Question · 1440 | [08-new-poll-2-question.png](desktop/04-polls/08-new-poll-2-question.png) | `658:1617` | New poll, 2 Question | 01-sign-in #01, #01, #07, #09, #29, #34 |
| 09 | Exp · New poll · 3 Cover · empty · 1440 | [09-new-poll-3-cover-empty.png](desktop/04-polls/09-new-poll-3-cover-empty.png) | `1092:21228` | New poll, 3 Cover, empty | 01-sign-in #01, #01, #07, #08, #10, #11, #36 |
| 10 | Exp · New poll · 3 Cover · 1440 | [10-new-poll-3-cover.png](desktop/04-polls/10-new-poll-3-cover.png) | `1092:21489` | New poll, 3 Cover | 01-sign-in #01, #01, #07, #08, #09, #11, #38 |
| 11 | Exp · New poll · 4 Audience and timing · 1440 | [11-new-poll-4-audience-and-timing.png](desktop/04-polls/11-new-poll-4-audience-and-timing.png) | `659:1805` | New poll, 4 Audience and timing | 01-sign-in #01, #01, #07, #08, #10, #12, #31, #40 |
| 12 | Exp · New poll · 5 Review · 1440 | [12-new-poll-5-review.png](desktop/04-polls/12-new-poll-5-review.png) | `659:2093` | New poll, 5 Review | 01-sign-in #01, #01, #07, #08, #10, #11, #19, #32 (+1 more) |
| 13 | Exp · New poll · 1 Type · one-off · 1440 | [13-new-poll-1-type-one-off.png](desktop/04-polls/13-new-poll-1-type-one-off.png) | `793:8256` | New poll, 1 Type, one-off | 01-sign-in #01, #01, #07, #14, #33 |
| 14 | Exp · New poll · 2 Question · one-off · 1440 | [14-new-poll-2-question-one-off.png](desktop/04-polls/14-new-poll-2-question-one-off.png) | `730:4886` | New poll, 2 Question, one-off | 01-sign-in #01, #01, #13, #15, #44 |
| 15 | Exp · New poll · 3 Cover · one-off · 1440 | [15-new-poll-3-cover-one-off.png](desktop/04-polls/15-new-poll-3-cover-one-off.png) | `1092:21750` | New poll, 3 Cover, one-off | 01-sign-in #01, #01, #13, #14, #16, #46 |
| 16 | Exp · New poll · 4 Audience and timing · one-off · 1440 | [16-new-poll-4-audience-and-timing-one-off.png](desktop/04-polls/16-new-poll-4-audience-and-timing-one-off.png) | `761:21360` | New poll, 4 Audience and timing, one-off | 01-sign-in #01, #01, #13, #14, #15, #17, #48 |
| 17 | Exp · New poll · 5 Review · one-off · 1440 | [17-new-poll-5-review-one-off.png](desktop/04-polls/17-new-poll-5-review-one-off.png) | `761:21432` | New poll, 5 Review, one-off | 01-sign-in #01, #01, #13, #14, #15, #16, #18, #50 |
| 18 | Exp · Poll · in review · one-off · 1440 | [18-poll-in-review-one-off.png](desktop/04-polls/18-poll-in-review-one-off.png) | `761:21514` | Poll, in review, one-off | 01-sign-in #01, #05 |
| 19 | Exp · Poll · in review · 1440 | [19-poll-in-review.png](desktop/04-polls/19-poll-in-review.png) | `660:2199` | Poll, in review | 01-sign-in #01, #01 |
| 20 | Exp · Poll · action needed · 1440 | [20-poll-action-needed.png](desktop/04-polls/20-poll-action-needed.png) | `660:2477` | Poll, action needed | 01-sign-in #01, #01, #24 |
| 21 | Exp · Poll · live results · 1440 | [21-poll-live-results.png](desktop/04-polls/21-poll-live-results.png) | `661:2599` | Poll, live results | 01-sign-in #01, #01, #26 |
| 22 | Exp · Poll · ended · create challenge · 1440 | [22-poll-ended-create-challenge.png](desktop/04-polls/22-poll-ended-create-challenge.png) | `661:2879` | Poll, ended, create challenge | 01-sign-in #01, 03-builder-and-targeting #16, #01 |
| 23 | Exp · Poll · ended early · 1440 | [23-poll-ended-early.png](desktop/04-polls/23-poll-ended-early.png) | `729:4753` | Poll, ended early | 01-sign-in #01, 03-builder-and-targeting #24, #03 |
| 24 | Exp · Poll · edit after changes · 1440 | [24-poll-edit-after-changes.png](desktop/04-polls/24-poll-edit-after-changes.png) | `730:5180` | Poll, edit after changes | 01-sign-in #01, #01, #20, #25 |
| 25 | Exp · Poll · in review · after changes · 1440 | [25-poll-in-review-after-changes.png](desktop/04-polls/25-poll-in-review-after-changes.png) | `745:5735` | Poll, in review, after changes | 01-sign-in #01, #04 |
| 26 | Exp · Poll · live results · menu open · 1440 | [26-poll-live-results-menu-open.png](desktop/04-polls/26-poll-live-results-menu-open.png) | `1004:14739` | Poll, live results, menu open | 01-sign-in #01, #01, #21, #27 |
| 27 | Overlay · End poll early | [27-overlay-end-poll-early.png](desktop/04-polls/27-overlay-end-poll-early.png) | `729:4979` | Overlay, End poll early | 01-sign-in #01, #23 |
| 28 | Exp · New poll · 1 Type · help open · 1440 | [28-new-poll-1-type-help-open.png](desktop/04-polls/28-new-poll-1-type-help-open.png) | `1020:14191` | New poll, 1 Type, help open | 01-sign-in #01, #01, #07, #08, #13 |
| 29 | Exp · New poll · 2 Question · help open · 1440 | [29-new-poll-2-question-help-open.png](desktop/04-polls/29-new-poll-2-question-help-open.png) | `1145:36080` | New poll, 2 Question, help open | 01-sign-in #01, #01, #07, #08, #09, #34 |
| 30 | Exp · New poll · 2 Question · steps collapsed · 1440 | [30-new-poll-2-question-steps-collapsed.png](desktop/04-polls/30-new-poll-2-question-steps-collapsed.png) | `1115:84606` | New poll, 2 Question, steps collapsed | 01-sign-in #01, #01, #07, #09, #29, #34 |
| 31 | Exp · New poll · 4 Audience and timing · help open · 1440 | [31-new-poll-4-audience-and-timing-help-open.png](desktop/04-polls/31-new-poll-4-audience-and-timing-help-open.png) | `1021:61366` | New poll, 4 Audience and timing, help open | 01-sign-in #01, #01, #07, #08, #10, #11, #12, #40 |
| 32 | Exp · New poll · 5 Review · help open · 1440 | [32-new-poll-5-review-help-open.png](desktop/04-polls/32-new-poll-5-review-help-open.png) | `1021:61579` | New poll, 5 Review, help open | 01-sign-in #01, #01, #07, #08, #10, #11, #12, #19 (+1 more) |
| 33 | Exp · New poll · 1 Type · one-off · help open · 1440 | [33-new-poll-1-type-one-off-help-open.png](desktop/04-polls/33-new-poll-1-type-one-off-help-open.png) | `1020:14381` | New poll, 1 Type, one-off, help open | 01-sign-in #01, #01, #07, #13, #14 |
| 34 | Exp · New poll · 2 Question · preview · mobile · 1440 | [34-new-poll-2-question-preview-mobile.png](desktop/04-polls/34-new-poll-2-question-preview-mobile.png) | `1021:14538` | New poll, 2 Question, preview, mobile | 01-sign-in #01, #01, #07, #08, #09, #35 |
| 35 | Exp · New poll · 2 Question · preview · desktop · 1440 | [35-new-poll-2-question-preview-desktop.png](desktop/04-polls/35-new-poll-2-question-preview-desktop.png) | `1047:16078` | New poll, 2 Question, preview, desktop | 01-sign-in #01, #01, #07, #08, #09, #34 |
| 36 | Exp · New poll · 3 Cover · empty · preview · mobile · 1440 | [36-new-poll-3-cover-empty-preview-mobile.png](desktop/04-polls/36-new-poll-3-cover-empty-preview-mobile.png) | `1093:69276` | New poll, 3 Cover, empty, preview, mobile | 01-sign-in #01, #01, #08, #09, #11, #37 |
| 37 | Exp · New poll · 3 Cover · empty · preview · desktop · 1440 | [37-new-poll-3-cover-empty-preview-desktop.png](desktop/04-polls/37-new-poll-3-cover-empty-preview-desktop.png) | `1093:69304` | New poll, 3 Cover, empty, preview, desktop | 01-sign-in #01, #01, #08, #09, #11, #36 |
| 38 | Exp · New poll · 3 Cover · preview · mobile · 1440 | [38-new-poll-3-cover-preview-mobile.png](desktop/04-polls/38-new-poll-3-cover-preview-mobile.png) | `1093:69762` | New poll, 3 Cover, preview, mobile | 01-sign-in #01, #01, #08, #10, #11, #39 |
| 39 | Exp · New poll · 3 Cover · preview · desktop · 1440 | [39-new-poll-3-cover-preview-desktop.png](desktop/04-polls/39-new-poll-3-cover-preview-desktop.png) | `1093:69790` | New poll, 3 Cover, preview, desktop | 01-sign-in #01, #01, #08, #10, #11, #38 |
| 40 | Exp · New poll · 4 Audience and timing · preview · mobile · 1440 | [40-new-poll-4-audience-and-timing-preview-mobile.png](desktop/04-polls/40-new-poll-4-audience-and-timing-preview-mobile.png) | `1060:18964` | New poll, 4 Audience and timing, preview, mobile | 01-sign-in #01, #01, #10, #11, #12, #41 |
| 41 | Exp · New poll · 4 Audience and timing · preview · desktop · 1440 | [41-new-poll-4-audience-and-timing-preview-desktop.png](desktop/04-polls/41-new-poll-4-audience-and-timing-preview-desktop.png) | `1060:19225` | New poll, 4 Audience and timing, preview, desktop | 01-sign-in #01, #01, #10, #11, #12, #40 |
| 42 | Exp · New poll · 5 Review · preview · mobile · 1440 | [42-new-poll-5-review-preview-mobile.png](desktop/04-polls/42-new-poll-5-review-preview-mobile.png) | `1048:16453` | New poll, 5 Review, preview, mobile | 01-sign-in #01, #01, #11, #12, #19, #43 |
| 43 | Exp · New poll · 5 Review · preview · desktop · 1440 | [43-new-poll-5-review-preview-desktop.png](desktop/04-polls/43-new-poll-5-review-preview-desktop.png) | `1048:16718` | New poll, 5 Review, preview, desktop | 01-sign-in #01, #01, #11, #12, #19, #42 |
| 44 | Exp · New poll · 2 Question · one-off · preview · mobile · 1440 | [44-new-poll-2-question-one-off-preview-mobile.png](desktop/04-polls/44-new-poll-2-question-one-off-preview-mobile.png) | `1021:14754` | New poll, 2 Question, one-off, preview, mobile | 01-sign-in #01, #01, #13, #14, #15, #45 |
| 45 | Exp · New poll · 2 Question · one-off · preview · desktop · 1440 | [45-new-poll-2-question-one-off-preview-desktop.png](desktop/04-polls/45-new-poll-2-question-one-off-preview-desktop.png) | `1047:16570` | New poll, 2 Question, one-off, preview, desktop | 01-sign-in #01, #01, #13, #14, #15, #44 |
| 46 | Exp · New poll · 3 Cover · one-off · preview · mobile · 1440 | [46-new-poll-3-cover-one-off-preview-mobile.png](desktop/04-polls/46-new-poll-3-cover-one-off-preview-mobile.png) | `1093:70399` | New poll, 3 Cover, one-off, preview, mobile | 01-sign-in #01, #01, #14, #15, #16, #47 |
| 47 | Exp · New poll · 3 Cover · one-off · preview · desktop · 1440 | [47-new-poll-3-cover-one-off-preview-desktop.png](desktop/04-polls/47-new-poll-3-cover-one-off-preview-desktop.png) | `1093:70427` | New poll, 3 Cover, one-off, preview, desktop | 01-sign-in #01, #01, #14, #15, #16, #46 |
| 48 | Exp · New poll · 4 Audience and timing · one-off · preview · mobile · 1440 | [48-new-poll-4-audience-and-timing-one-off-preview-mobile.png](desktop/04-polls/48-new-poll-4-audience-and-timing-one-off-preview-mobile.png) | `1060:19523` | New poll, 4 Audience and timing, one-off, preview, mobile | 01-sign-in #01, #01, #15, #16, #17, #49 |
| 49 | Exp · New poll · 4 Audience and timing · one-off · preview · desktop · 1440 | [49-new-poll-4-audience-and-timing-one-off-preview-desktop.png](desktop/04-polls/49-new-poll-4-audience-and-timing-one-off-preview-desktop.png) | `1060:19782` | New poll, 4 Audience and timing, one-off, preview, desktop | 01-sign-in #01, #01, #15, #16, #17, #48 |
| 50 | Exp · New poll · 5 Review · one-off · preview · mobile · 1440 | [50-new-poll-5-review-one-off-preview-mobile.png](desktop/04-polls/50-new-poll-5-review-one-off-preview-mobile.png) | `1048:17023` | New poll, 5 Review, one-off, preview, mobile | 01-sign-in #01, #01, #16, #17, #18, #51 |
| 51 | Exp · New poll · 5 Review · one-off · preview · desktop · 1440 | [51-new-poll-5-review-one-off-preview-desktop.png](desktop/04-polls/51-new-poll-5-review-one-off-preview-desktop.png) | `1048:17286` | New poll, 5 Review, one-off, preview, desktop | 01-sign-in #01, #01, #16, #17, #18, #50 |

### Row 5: Activations

Folder `desktop/05-activations/`, 58 frames. Contact sheet: [`desktop-05-activations.jpg`](contact-sheets/desktop-05-activations.jpg)

> **Row 1 · Activations for businesses**: Claims list is full width with a Status filter (default To confirm). Each claim opens its own page (Activations › activation › contributor) with the recording in full and Confirm, Ask for info and Reject under it; Confirm opens the next claim with a toast.

> **Row 2 · New activation steps, devices menu, help and collapsed steps**: Four rail steps: Task (row 1), Cover (empty, then uploaded; contributors see it at the top of the activation), Reward and spots, Review and pay, each with Save and exit and the Edit and Preview switch. How the money works opens under its link on Review and pay. The first frame is Task with the steps collapsed into the strip under the title. Every step’s device chip opens its Devices menu in place, and each device toggles with a click; the devices open frame and the collapsed frame are reference frames outside the click-through. Task’s Continue goes to the saved cover; Cover · empty is what Remove shows. Steps can carry an optional help line (Help for this step), shown under the step in Review, the previews and on iqly.net. Reward and spots asks how much to fund now: Every spot, or Part now with an amount (₦100,000 covers 100 of 200 spots). The choice sets the A2 funding variables that Review and pay, How the money works, the in-review page and every Activations list read; the part-now reference in row 4 shows Part now picked.

> **Row 3 · New activation previews**: Mobile and Desktop previews in step order: Task, Cover (empty, then uploaded), Reward and spots, Review and pay. Until a cover is added, the activation shows the default cover. Steps 2 to 5 show their help lines.

> **Row 4 · Empty new activation and steps opened from Review**: New activation, on every Activations list, opens the empty Task: blank fields, one empty step on All devices, no confirmation picked, and Preview and Continue disabled until there is something to show. How steps work opens its help in place. Edit and the rail on Review and pay open Task, Cover and Reward from review: every other step is Done and linked, and the footer has only Save and go to Review. Remove on Cover from review opens Cover · empty from review. Help popovers close back to the step they were opened from. Also in this row: the after funding list with the Live row menu open, and Reward and spots with Part now picked (reference).

> **Row 5 · Withdraw to Draft, cancel or add money while in review**: More on the activation in review opens its menu: Withdraw to Draft and Cancel activation, with Add money above them when only part of the spots is funded. Withdraw to Draft opens a dialog (Keep in review, the close button and the scrim go back); Withdraw sets A2 back to Draft and opens Activations with a toast: the money stays held in escrow, so resubmitting costs nothing. Cancel activation opens a dialog (Keep it goes back); Cancel activation marks A2 Cancelled, sends the money held to iQLY credit and opens Activations with a toast. Add money opens a dialog with the amount that covers every spot, paid with Paystack or, when there is enough, iQLY credit; it opens the in-review page with a toast. The part-now reference shows the menu and the page when only part is funded. Money follows the path (Prototype state variables read by Payments, Home and every Activations list): after paying, Held in escrow ₦5,434,500.00 (₦5,334,500.00 with Part now), “3 challenges and 2 activations”, Paid in ₦13,995,000.00 (₦13,895,000.00) and an In escrow ledger row, which stays while the activation is withdrawn to Draft; after a cancel, escrow ₦5,234,500.00, iQLY credit ₦200,000.00 (₦100,000.00) and the ledger row shows Refunded, To iQLY credit. Paying again with Paystack is a second payment, so Paid in grows; paying from iQLY credit moves credit into escrow and leaves Paid in as it is. Add money gets its own ledger row (Added to the activation budget, Paid in +₦100,000.00 or From iQLY credit ₦100,000.00), Refunded after a cancel. Every Paid in movement has its own + row, so the + rows add up to Paid in; older rows move to page 2 so page 1 keeps 8 rows, and the footer counts them (of 12, 13 or 14). The prototype keeps the figures right for up to two payments, one Add money and two cancels (21 paths checked by script). Toasts close after 4 seconds. The Payments reference (mode After cancel) shows the page after a cancel.

> **Row 6 · From the Activations list, and a cancelled activation**: More on the In review row of the Activations list opens Withdraw to Draft and Cancel activation, with the same dialogs and actions as the detail page. A cancelled activation keeps a Cancelled row (0 of 200, Cancelled 12 Oct, ₦200,000 refunded to iQLY credit) that opens the cancelled page: Cancelled pill, no More menu, stages Draft, In review and Cancelled, Held for spots ₦0.00 with the refund under it, and Send it again, which puts A2 back in Draft and opens Review and pay. A draft that was paid before opens Review and pay from the list, and Review and pay reads the state: a draft withdrawn to Draft shows the Withdrawn banner and Resubmit for review, with nothing to pay; otherwise the checkout card, with Pay with (iQLY credit or Paystack) when the credit covers the amount, and the matching button. Once the task is set, the builder header and breadcrumb show it instead of New activation.

> **Row 7 · Pay from iQLY credit, resubmit for free (references)**: Reference frames, outside the click-through, set the prototype state explicitly: Review and pay for a draft withdrawn to Draft (mode Withdrawn), Review and pay and Add money with iQLY credit to spend (mode After cancel), Payments after paying again from iQLY credit (mode Paid from credit) and Payments after adding money (mode Added money). The modes hold the values a script got by running the stored actions.

> **Row 7 · Help requests**: WhatsApp-style (owner 18 Oct): chat list on the left (search, Open and Resolved pills, last message, time, unread count), conversation on the right with a pinned claim bar (Reject, Confirm and pay ₦500), proof and messages as bubbles and voice notes, system notes, quick replies and a composer. Sorted closes the chat with the payout as a system note; none open shows a welcome card with round shortcuts.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Exp · Activations · 1440 | [01-activations.png](desktop/05-activations/01-activations.png) | `664:4155` | Activations | 01-sign-in #01, #03, #09, #10, #30, #47, #50 |
| 02 | Exp · New activation · 1 Task · 1440 | [02-new-activation-1-task.png](desktop/05-activations/02-new-activation-1-task.png) | `664:4488` | New activation, 1 Task | 01-sign-in #01, #01, #13, #18, #20 |
| 03 | Exp · Activation · claims · 1440 | [03-activation-claims.png](desktop/05-activations/03-activation-claims.png) | `665:4901` | Activation, claims | 01-sign-in #01, #01, #07 |
| 04 | Exp · Activations · after funding · 1440 | [04-activations-after-funding.png](desktop/05-activations/04-activations-after-funding.png) | `731:5239` | Activations, after funding | 01-sign-in #01, #01, #03, #10, #30, #35, #47 |
| 05 | Exp · Activation · claims · after confirm · 1440 | [05-activation-claims-after-confirm.png](desktop/05-activations/05-activation-claims-after-confirm.png) | `731:5461` | Activation, claims, after confirm | 01-sign-in #01, #06, #08 |
| 06 | Exp · Activations · after one confirm · 1440 | [06-activations-after-one-confirm.png](desktop/05-activations/06-activations-after-one-confirm.png) | `762:7826` | Activations, after one confirm | 01-sign-in #01, #05, #10, #30, #47, #50 |
| 07 | Exp · Activation · claim · Bisi Adewale · 1440 | [07-activation-claim-bisi-adewale.png](desktop/05-activations/07-activation-claim-bisi-adewale.png) | `951:11572` | Activation, claim, Bisi Adewale | 01-sign-in #01, #01, #03, #08 |
| 08 | Exp · Activation · claim · Kunle Okafor · after confirming Bisi · 1440 | [08-activation-claim-kunle-okafor-after-confirming-bisi.png](desktop/05-activations/08-activation-claim-kunle-okafor-after-confirming-bisi.png) | `954:11876` | Activation, claim, Kunle Okafor, after confirming Bisi | 01-sign-in #01, #05, #06 |
| 09 | Exp · Activations · row menu open · 1440 | [09-activations-row-menu-open.png](desktop/05-activations/09-activations-row-menu-open.png) | `972:13470` | Activations, row menu open | 01-sign-in #01, #01, #03, #10, #30, #47, #50 |
| 10 | Exp · Activation · in review · 1440 | [10-activation-in-review.png](desktop/05-activations/10-activation-in-review.png) | `1213:37490` | Activation, in review | 01-sign-in #01, #01, #38 |
| 11 | Exp · New activation · 1 Task · steps collapsed · 1440 | [11-new-activation-1-task-steps-collapsed.png](desktop/05-activations/11-new-activation-1-task-steps-collapsed.png) | `1115:84680` | New activation, 1 Task, steps collapsed | 01-sign-in #01, #01, #13, #18, #20 |
| 12 | Exp · New activation · 2 Cover · empty · 1440 | [12-new-activation-2-cover-empty.png](desktop/05-activations/12-new-activation-2-cover-empty.png) | `1093:21738` | New activation, 2 Cover, empty | 01-sign-in #01, #01, #02, #13, #14, #22 |
| 13 | Exp · New activation · 2 Cover · 1440 | [13-new-activation-2-cover.png](desktop/05-activations/13-new-activation-2-cover.png) | `1093:21977` | New activation, 2 Cover | 01-sign-in #01, #01, #02, #12, #14, #24 |
| 14 | Exp · New activation · 3 Reward and spots · 1440 | [14-new-activation-3-reward-and-spots.png](desktop/05-activations/14-new-activation-3-reward-and-spots.png) | `1050:17302` | New activation, 3 Reward and spots | 01-sign-in #01, #01, #02, #13, #15, #19, #26 |
| 15 | Exp · New activation · 4 Review and pay · 1440 | [15-new-activation-4-review-and-pay.png](desktop/05-activations/15-new-activation-4-review-and-pay.png) | `1050:17371` | New activation, 4 Review and pay | 01-sign-in #01, #01, #04, #14, #16, #28, #32, #33 (+1 more) |
| 16 | Exp · New activation · 4 Review and pay · help open · 1440 | [16-new-activation-4-review-and-pay-help-open.png](desktop/05-activations/16-new-activation-4-review-and-pay-help-open.png) | `1024:15328` | New activation, 4 Review and pay, help open | 01-sign-in #01, #01, #04, #14, #15, #28, #32, #33 (+1 more) |
| 17 | Exp · New activation · 1 Task · devices open · 1440 | [17-new-activation-1-task-devices-open.png](desktop/05-activations/17-new-activation-1-task-devices-open.png) | `1174:36502` | New activation, 1 Task, devices open | 01-sign-in #01, #01, #13, #18, #20 |
| 18 | Exp · New activation · 1 Task · help open · 1440 | [18-new-activation-1-task-help-open.png](desktop/05-activations/18-new-activation-1-task-help-open.png) | `1174:36037` | New activation, 1 Task, help open | 01-sign-in #01, #01, #13, #20 |
| 19 | Exp · New activation · 3 Reward and spots · help open · 1440 | [19-new-activation-3-reward-and-spots-help-open.png](desktop/05-activations/19-new-activation-3-reward-and-spots-help-open.png) | `1174:36277` | New activation, 3 Reward and spots, help open | 01-sign-in #01, #01, #02, #13, #15, #26 |
| 20 | Exp · New activation · 1 Task · preview · mobile · 1440 | [20-new-activation-1-task-preview-mobile.png](desktop/05-activations/20-new-activation-1-task-preview-mobile.png) | `1024:15099` | New activation, 1 Task, preview, mobile | 01-sign-in #01, #01, #02, #13, #21 |
| 21 | Exp · New activation · 1 Task · preview · desktop · 1440 | [21-new-activation-1-task-preview-desktop.png](desktop/05-activations/21-new-activation-1-task-preview-desktop.png) | `1051:17785` | New activation, 1 Task, preview, desktop | 01-sign-in #01, #01, #02, #13, #20 |
| 22 | Exp · New activation · 2 Cover · empty · preview · mobile · 1440 | [22-new-activation-2-cover-empty-preview-mobile.png](desktop/05-activations/22-new-activation-2-cover-empty-preview-mobile.png) | `1093:71030` | New activation, 2 Cover, empty, preview, mobile | 01-sign-in #01, #01, #02, #12, #14, #23 |
| 23 | Exp · New activation · 2 Cover · empty · preview · desktop · 1440 | [23-new-activation-2-cover-empty-preview-desktop.png](desktop/05-activations/23-new-activation-2-cover-empty-preview-desktop.png) | `1093:71058` | New activation, 2 Cover, empty, preview, desktop | 01-sign-in #01, #01, #02, #12, #14, #22 |
| 24 | Exp · New activation · 2 Cover · preview · mobile · 1440 | [24-new-activation-2-cover-preview-mobile.png](desktop/05-activations/24-new-activation-2-cover-preview-mobile.png) | `1093:71637` | New activation, 2 Cover, preview, mobile | 01-sign-in #01, #01, #02, #13, #14, #25 |
| 25 | Exp · New activation · 2 Cover · preview · desktop · 1440 | [25-new-activation-2-cover-preview-desktop.png](desktop/05-activations/25-new-activation-2-cover-preview-desktop.png) | `1093:71665` | New activation, 2 Cover, preview, desktop | 01-sign-in #01, #01, #02, #13, #14, #24 |
| 26 | Exp · New activation · 3 Reward and spots · preview · mobile · 1440 | [26-new-activation-3-reward-and-spots-preview-mobile.png](desktop/05-activations/26-new-activation-3-reward-and-spots-preview-mobile.png) | `1060:20079` | New activation, 3 Reward and spots, preview, mobile | 01-sign-in #01, #01, #13, #14, #15, #27 |
| 27 | Exp · New activation · 3 Reward and spots · preview · desktop · 1440 | [27-new-activation-3-reward-and-spots-preview-desktop.png](desktop/05-activations/27-new-activation-3-reward-and-spots-preview-desktop.png) | `1060:20361` | New activation, 3 Reward and spots, preview, desktop | 01-sign-in #01, #01, #13, #14, #15, #26 |
| 28 | Exp · New activation · 4 Review and pay · preview · mobile · 1440 | [28-new-activation-4-review-and-pay-preview-mobile.png](desktop/05-activations/28-new-activation-4-review-and-pay-preview-mobile.png) | `1051:18180` | New activation, 4 Review and pay, preview, mobile | 01-sign-in #01, #01, #04, #14, #15, #29 |
| 29 | Exp · New activation · 4 Review and pay · preview · desktop · 1440 | [29-new-activation-4-review-and-pay-preview-desktop.png](desktop/05-activations/29-new-activation-4-review-and-pay-preview-desktop.png) | `1051:18483` | New activation, 4 Review and pay, preview, desktop | 01-sign-in #01, #01, #04, #14, #15, #28 |
| 30 | Exp · New activation · 1 Task · empty · 1440 | [30-new-activation-1-task-empty.png](desktop/05-activations/30-new-activation-1-task-empty.png) | `1214:38018` | New activation, 1 Task, empty | 01-sign-in #01, #01, #31 |
| 31 | Exp · New activation · 1 Task · empty · help open · 1440 | [31-new-activation-1-task-empty-help-open.png](desktop/05-activations/31-new-activation-1-task-empty-help-open.png) | `1214:38359` | New activation, 1 Task, empty, help open | 01-sign-in #01, #01, #30 |
| 32 | Exp · New activation · 1 Task · from review · 1440 | [32-new-activation-1-task-from-review.png](desktop/05-activations/32-new-activation-1-task-from-review.png) | `1215:38020` | New activation, 1 Task, from review | 01-sign-in #01, #01, #15, #18, #20, #33, #34 |
| 33 | Exp · New activation · 2 Cover · from review · 1440 | [33-new-activation-2-cover-from-review.png](desktop/05-activations/33-new-activation-2-cover-from-review.png) | `1215:38103` | New activation, 2 Cover, from review | 01-sign-in #01, #01, #15, #24, #32, #34, #36 |
| 34 | Exp · New activation · 3 Reward and spots · from review · 1440 | [34-new-activation-3-reward-and-spots-from-review.png](desktop/05-activations/34-new-activation-3-reward-and-spots-from-review.png) | `1215:38151` | New activation, 3 Reward and spots, from review | 01-sign-in #01, #01, #15, #19, #26, #32, #33 |
| 35 | Exp · Activations · after funding · row menu open · 1440 | [35-activations-after-funding-row-menu-open.png](desktop/05-activations/35-activations-after-funding-row-menu-open.png) | `1227:38976` | Activations, after funding, row menu open | 01-sign-in #01, #01, #03, #10, #30, #47 |
| 36 | Exp · New activation · 2 Cover · empty · from review · 1440 | [36-new-activation-2-cover-empty-from-review.png](desktop/05-activations/36-new-activation-2-cover-empty-from-review.png) | `1227:39279` | New activation, 2 Cover, empty, from review | 01-sign-in #01, #01, #15, #22, #32, #33, #34 |
| 37 | Exp · New activation · 3 Reward and spots · part now (reference) · 1440 | [37-new-activation-3-reward-and-spots-part-now-reference.png](desktop/05-activations/37-new-activation-3-reward-and-spots-part-now-reference.png) | `1235:86951` | New activation, 3 Reward and spots, part now (reference) | 01-sign-in #01, #01, #02, #13, #15, #19, #26 |
| 38 | Exp · Activation · in review · menu open · 1440 | [38-activation-in-review-menu-open.png](desktop/05-activations/38-activation-in-review-menu-open.png) | `1241:39622` | Activation, in review, menu open | 01-sign-in #01, #01, #10, #39, #41, #45 |
| 39 | Exp · Activation · in review · withdraw dialog · 1440 | [39-activation-in-review-withdraw-dialog.png](desktop/05-activations/39-activation-in-review-withdraw-dialog.png) | `1241:39691` | Activation, in review, withdraw dialog | 01-sign-in #01, #10, #40 |
| 40 | Exp · Activations · after withdraw · 1440 | [40-activations-after-withdraw.png](desktop/05-activations/40-activations-after-withdraw.png) | `1241:39760` | Activations, after withdraw | 01-sign-in #01, #01, #03, #09, #30 |
| 41 | Exp · Activation · in review · add money dialog · 1440 | [41-activation-in-review-add-money-dialog.png](desktop/05-activations/41-activation-in-review-add-money-dialog.png) | `1241:39853` | Activation, in review, add money dialog | 01-sign-in #01, #10, #42 |
| 42 | Exp · Activation · in review · money added · 1440 | [42-activation-in-review-money-added.png](desktop/05-activations/42-activation-in-review-money-added.png) | `1241:39922` | Activation, in review, money added | 01-sign-in #01, #01, #10, #38 |
| 43 | Exp · Activation · in review · menu open · part now (reference) · 1440 | [43-activation-in-review-menu-open-part-now-reference.png](desktop/05-activations/43-activation-in-review-menu-open-part-now-reference.png) | `1241:40817` | Activation, in review, menu open, part now (reference) | 01-sign-in #01, #01, #10, #39, #41, #45 |
| 44 | Exp · Payments · after cancel (reference) · 1440 | [44-payments-after-cancel-reference.png](desktop/05-activations/44-payments-after-cancel-reference.png) | `1258:88686` | Payments, after cancel (reference) | 01-sign-in #01, 02-home-and-challenges #13 |
| 45 | Exp · Activation · in review · cancel dialog · 1440 | [45-activation-in-review-cancel-dialog.png](desktop/05-activations/45-activation-in-review-cancel-dialog.png) | `1273:41465` | Activation, in review, cancel dialog | 01-sign-in #01, #10, #46 |
| 46 | Exp · Activations · after cancel · 1440 | [46-activations-after-cancel.png](desktop/05-activations/46-activations-after-cancel.png) | `1275:42308` | Activations, after cancel | 01-sign-in #01, #01, #03, #09, #30, #50 |
| 47 | Exp · Activations · in review row menu open · 1440 | [47-activations-in-review-row-menu-open.png](desktop/05-activations/47-activations-in-review-row-menu-open.png) | `1275:41378` | Activations, in review row menu open | 01-sign-in #01, #01, #03, #10, #30, #35, #48, #49 |
| 48 | Exp · Activations · withdraw dialog · 1440 | [48-activations-withdraw-dialog.png](desktop/05-activations/48-activations-withdraw-dialog.png) | `1275:41668` | Activations, withdraw dialog | #01, #40 |
| 49 | Exp · Activations · cancel dialog · 1440 | [49-activations-cancel-dialog.png](desktop/05-activations/49-activations-cancel-dialog.png) | `1275:41958` | Activations, cancel dialog | #01, #46 |
| 50 | Exp · Activation · cancelled · 1440 | [50-activation-cancelled.png](desktop/05-activations/50-activation-cancelled.png) | `1280:42222` | Activation, cancelled | 01-sign-in #01, #01, #15 |
| 51 | Exp · New activation · 4 Review and pay · withdrawn (reference) · 1440 | [51-new-activation-4-review-and-pay-withdrawn-reference.png](desktop/05-activations/51-new-activation-4-review-and-pay-withdrawn-reference.png) | `1287:90374` | New activation, 4 Review and pay, withdrawn (reference) | 01-sign-in #01, #01, #04, #14, #16, #28, #32, #33 (+1 more) |
| 52 | Exp · New activation · 4 Review and pay · paying from iQLY credit (reference) · 1440 | [52-new-activation-4-review-and-pay-paying-from-iqly-credit-reference.png](desktop/05-activations/52-new-activation-4-review-and-pay-paying-from-iqly-credit-reference.png) | `1287:90482` | New activation, 4 Review and pay, paying from iQLY credit (reference) | 01-sign-in #01, #01, #04, #14, #16, #28, #32, #33 (+1 more) |
| 53 | Exp · Activation · in review · add money from iQLY credit (reference) · 1440 | [53-activation-in-review-add-money-from-iqly-credit-reference.png](desktop/05-activations/53-activation-in-review-add-money-from-iqly-credit-reference.png) | `1287:90590` | Activation, in review, add money from iQLY credit (reference) | 01-sign-in #01, #10, #42 |
| 54 | Exp · Payments · after paying from iQLY credit (reference) · 1440 | [54-payments-after-paying-from-iqly-credit-reference.png](desktop/05-activations/54-payments-after-paying-from-iqly-credit-reference.png) | `1287:90681` | Payments, after paying from iQLY credit (reference) | 01-sign-in #01, 02-home-and-challenges #13 |
| 55 | Exp · Payments · after adding money (reference) · 1440 | [55-payments-after-adding-money-reference.png](desktop/05-activations/55-payments-after-adding-money-reference.png) | `1299:43246` | Payments, after adding money (reference) | 01-sign-in #01, 02-home-and-challenges #13 |
| 56 | Exp · Activation · help requests · open · 1440 | [56-activation-help-requests-open.png](desktop/05-activations/56-activation-help-requests-open.png) | `1496:49504` | Activation, help requests, open | 01-sign-in #01, #57 |
| 57 | Exp · Activation · help requests · sorted · 1440 | [57-activation-help-requests-sorted.png](desktop/05-activations/57-activation-help-requests-sorted.png) | `1496:49749` | Activation, help requests, sorted | 01-sign-in #01 |
| 58 | Exp · Activation · help requests · none open · 1440 | [58-activation-help-requests-none-open.png](desktop/05-activations/58-activation-help-requests-none-open.png) | `1496:49958` | Activation, help requests, none open | 01-sign-in #01 |

### Row 6: Judging, contained style

Folder `desktop/06-judging/`, 38 frames. Contact sheet: [`desktop-06-judging.jpg`](contact-sheets/desktop-06-judging.jpg)

> **Row 1 · 15 Oct, shortlisting**: Contained style (owner, 17 Oct): grey canvas, one white panel, the entry in a grey block. The four steps are a stepper, not tabs: the current step is its icon in a ring (hover for what the step is), the others are dots (hover shows their icon, faded). One queue, one entry at a time. iQLY marks entries: lilac means suggested, amber means flagged; click a mark to read why. A person decides each one: Shortlist, Pass (read, not for the shortlist) or Not considering (spam, copies or off-brief, with a reason and Restore). The demo follows the sample data: shortlist Zobolicious (A1), pass Kola Kick after reading iQLY’s reason (A1n, A1b), set Best drink ever aside with a reason (A1p, A1pb, A1pr), land on Red Cap (A1q). Score and Rank stay locked until the shortlist is done.

> **Row 2 · 15 Oct, scoring**: Every judge scores the same 8 entries; each criterion folds to one line. By default nobody sees other judges’ scores until every judge has finished; the owner can change that and who may break ties in Judging settings (gear on Overview). The overview shows who has finished, never the scores, and follows Tolu’s save: 21 of 24 before, 22 of 24 after.

> **Row 3 · All 24 scores in**: The team table opens: team score is the average of the judges’ weighted scores. A gap of 4 points or more is marked Discuss and shows the score without each outlier; the marks fold away. Rank follows the team score and only tied rows drag. Break the tie (or a drag) asks who takes 3rd, shows each judge’s score for both, and needs a reason every judge can see. Undo reopens the tie; the Overview and Rank step remember the choice.

> **Row 4 · Keeping the tie**: Right: both share 3rd and each gets the full ₦150,000, so the brand tops up ₦150,000 when it publishes. Break the tie asks who takes 3rd, from the kept tie too. Left: the shortlist once all scores are in.

> **Row 5 · Setting on, not the default**: A judge sees the team’s scores as soon as they save their own. The overlay on the right is the settings dialog the gear opens.

> **Row 6 · Contained, with extras**: The same contained style plus an iQLY side panel (X2) and round icon actions that show their label on hover (X1, X3). The main rows above use labelled buttons pinned in the reader head.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Exp · Judging · A0 · Overview, shortlisting · 1440 | [01-judging-a0-overview-shortlisting.png](desktop/06-judging/01-judging-a0-overview-shortlisting.png) | `1385:45351` | Judging, A0, Overview, shortlisting | 02-home-and-challenges #01, #35 |
| 02 | Exp · Judging · A1 · Shortlist, to review · 1440 | [02-judging-a1-shortlist-to-review.png](desktop/06-judging/02-judging-a1-shortlist-to-review.png) | `1361:43685` | Judging, A1, Shortlist, to review | 02-home-and-challenges #01, #01, #03, #09, #10, #11 |
| 03 | Exp · Judging · A1n · Shortlist, next entry after Shortlist · 1440 | [03-judging-a1n-shortlist-next-entry-after-shortlist.png](desktop/06-judging/03-judging-a1n-shortlist-next-entry-after-shortlist.png) | `1401:47381` | Judging, A1n, Shortlist, next entry after Shortlist | 02-home-and-challenges #01, #01, #04, #05, #09, #10, #12 |
| 04 | Exp · Judging · A1b · Shortlist, iQLY reason open · 1440 | [04-judging-a1b-shortlist-iqly-reason-open.png](desktop/06-judging/04-judging-a1b-shortlist-iqly-reason-open.png) | `1385:45425` | Judging, A1b, Shortlist, iQLY reason open | 02-home-and-challenges #01, #01, #03, #05, #09, #10, #12 |
| 05 | Exp · Judging · A1p · Shortlist, flagged entry after Pass · 1440 | [05-judging-a1p-shortlist-flagged-entry-after-pass.png](desktop/06-judging/05-judging-a1p-shortlist-flagged-entry-after-pass.png) | `1401:97844` | Judging, A1p, Shortlist, flagged entry after Pass | 02-home-and-challenges #01, #01, #06, #07, #09, #10, #13 |
| 06 | Exp · Judging · A1pb · Shortlist, iQLY flag reason open · 1440 | [06-judging-a1pb-shortlist-iqly-flag-reason-open.png](desktop/06-judging/06-judging-a1pb-shortlist-iqly-flag-reason-open.png) | `1401:98055` | Judging, A1pb, Shortlist, iQLY flag reason open | 02-home-and-challenges #01, #01, #05, #07, #09, #10, #13 |
| 07 | Exp · Judging · A1pr · Not considering, reason · 1440 | [07-judging-a1pr-not-considering-reason.png](desktop/06-judging/07-judging-a1pr-not-considering-reason.png) | `1420:61873` | Judging, A1pr, Not considering, reason | 02-home-and-challenges #01, #08 |
| 08 | Exp · Judging · A1q · Shortlist, next entry after Not considering · 1440 | [08-judging-a1q-shortlist-next-entry-after-not-considering.png](desktop/06-judging/08-judging-a1q-shortlist-next-entry-after-not-considering.png) | `1393:47065` | Judging, A1q, Shortlist, next entry after Not considering | 02-home-and-challenges #01, #01, #09, #10, #14 |
| 09 | Exp · Judging · A2 · Shortlist, shortlisted · 1440 | [09-judging-a2-shortlist-shortlisted.png](desktop/06-judging/09-judging-a2-shortlist-shortlisted.png) | `1362:43804` | Judging, A2, Shortlist, shortlisted | 02-home-and-challenges #01, #01, #10 |
| 10 | Exp · Judging · A3 · Shortlist, not considering · 1440 | [10-judging-a3-shortlist-not-considering.png](desktop/06-judging/10-judging-a3-shortlist-not-considering.png) | `1362:44120` | Judging, A3, Shortlist, not considering | 02-home-and-challenges #01, #01, #09 |
| 11 | Exp · Judging · A1i · Shortlist, to review · iQLY open · 1440 | [11-judging-a1i-shortlist-to-review-iqly-open.png](desktop/06-judging/11-judging-a1i-shortlist-to-review-iqly-open.png) | `1448:47920` | Judging, A1i, Shortlist, to review, iQLY open | 02-home-and-challenges #01, #01, #02, #03, #09, #10 |
| 12 | Exp · Judging · A1ni · Shortlist, next entry after Shortlist · iQLY open · 1440 | [12-judging-a1ni-shortlist-next-entry-after-shortlist-iqly-open.png](desktop/06-judging/12-judging-a1ni-shortlist-next-entry-after-shortlist-iqly-open.png) | `1448:48161` | Judging, A1ni, Shortlist, next entry after Shortlist, iQLY open | 02-home-and-challenges #01, #01, #03, #04, #05, #09, #10 |
| 13 | Exp · Judging · A1pi · Shortlist, flagged entry after Pass · iQLY open · 1440 | [13-judging-a1pi-shortlist-flagged-entry-after-pass-iqly-open.png](desktop/06-judging/13-judging-a1pi-shortlist-flagged-entry-after-pass-iqly-open.png) | `1448:48403` | Judging, A1pi, Shortlist, flagged entry after Pass, iQLY open | 02-home-and-challenges #01, #01, #05, #06, #07, #09, #10 |
| 14 | Exp · Judging · A1qi · Shortlist, next entry after Not considering · iQLY open · 1440 | [14-judging-a1qi-shortlist-next-entry-after-not-considering-iqly-open.png](desktop/06-judging/14-judging-a1qi-shortlist-next-entry-after-not-considering-iqly-open.png) | `1448:48645` | Judging, A1qi, Shortlist, next entry after Not considering, iQLY open | 02-home-and-challenges #01, #01, #08, #09, #10 |
| 15 | Exp · Judging · B1 · Overview, scoring · 1440 | [15-judging-b1-overview-scoring.png](desktop/06-judging/15-judging-b1-overview-scoring.png) | `1360:43583` | Judging, B1, Overview, scoring | 02-home-and-challenges #01, #17, #35 |
| 16 | Exp · Judging · B1s · Judging settings · 1440 | [16-judging-b1s-judging-settings.png](desktop/06-judging/16-judging-b1s-judging-settings.png) | `1416:48333` | Judging, B1s, Judging settings | 02-home-and-challenges #01, #15 |
| 17 | Exp · Judging · B2 · Shortlist done, shortlisted · 1440 | [17-judging-b2-shortlist-done-shortlisted.png](desktop/06-judging/17-judging-b2-shortlist-done-shortlisted.png) | `1372:37` | Judging, B2, Shortlist done, shortlisted | 02-home-and-challenges #01, #15, #18 |
| 18 | Exp · Judging · B3 · Shortlist done, not considering · 1440 | [18-judging-b3-shortlist-done-not-considering.png](desktop/06-judging/18-judging-b3-shortlist-done-not-considering.png) | `1372:369` | Judging, B3, Shortlist done, not considering | 02-home-and-challenges #01, #15, #17 |
| 19 | Exp · Judging · B4 · Score, before saving · 1440 | [19-judging-b4-score-before-saving.png](desktop/06-judging/19-judging-b4-score-before-saving.png) | `1364:44100` | Judging, B4, Score, before saving | 02-home-and-challenges #01, #15, #17, #20 |
| 20 | Exp · Judging · B5 · Score, saved · 1440 | [20-judging-b5-score-saved.png](desktop/06-judging/20-judging-b5-score-saved.png) | `1385:45654` | Judging, B5, Score, saved | 02-home-and-challenges #01, #15, #17 |
| 21 | Exp · Judging · C0 · Overview, all scores in · 1440 | [21-judging-c0-overview-all-scores-in.png](desktop/06-judging/21-judging-c0-overview-all-scores-in.png) | `1385:45580` | Judging, C0, Overview, all scores in | 02-home-and-challenges #01, #22, #28, #35 |
| 22 | Exp · Judging · C1 · Team scores · 1440 | [22-judging-c1-team-scores.png](desktop/06-judging/22-judging-c1-team-scores.png) | `1372:625` | Judging, C1, Team scores | 02-home-and-challenges #01, #21, #28 |
| 23 | Exp · Judging · C2 · Rank, tie for 3rd · 1440 | [23-judging-c2-rank-tie-for-3rd.png](desktop/06-judging/23-judging-c2-rank-tie-for-3rd.png) | `1366:44398` | Judging, C2, Rank, tie for 3rd | 02-home-and-challenges #01, #21, #22, #24, #28, #30 |
| 24 | Exp · Judging · C3r · Rank, reason to break the tie · 1440 | [24-judging-c3r-rank-reason-to-break-the-tie.png](desktop/06-judging/24-judging-c3r-rank-reason-to-break-the-tie.png) | `1404:61874` | Judging, C3r, Rank, reason to break the tie | #25 |
| 25 | Exp · Judging · C3 · Rank, tie broken · 1440 | [25-judging-c3-rank-tie-broken.png](desktop/06-judging/25-judging-c3-rank-tie-broken.png) | `1366:44697` | Judging, C3, Rank, tie broken | 02-home-and-challenges #01, #21, #22, #23, #26, #28 |
| 26 | Exp · Judging · C4 · Publish 3 winners · 1440 | [26-judging-c4-publish-3-winners.png](desktop/06-judging/26-judging-c4-publish-3-winners.png) | `1416:47839` | Judging, C4, Publish 3 winners | 02-home-and-challenges #01, #25, #27 |
| 27 | Exp · Judging · C5 · Winners published · 1440 | [27-judging-c5-winners-published.png](desktop/06-judging/27-judging-c5-winners-published.png) | `1368:938` | Judging, C5, Winners published | 02-home-and-challenges #01 |
| 28 | Exp · Judging · Cs · Shortlist done, shortlisted (all scores in) · 1440 | [28-judging-cs-shortlist-done-shortlisted-all-scores-in.png](desktop/06-judging/28-judging-cs-shortlist-done-shortlisted-all-scores-in.png) | `1393:47264` | Judging, Cs, Shortlist done, shortlisted (all scores in) | 02-home-and-challenges #01, #21, #22 |
| 29 | Exp · Judging · C3rK · Rank, break a kept tie · 1440 | [29-judging-c3rk-rank-break-a-kept-tie.png](desktop/06-judging/29-judging-c3rk-rank-break-a-kept-tie.png) | `1417:47841` | Judging, C3rK, Rank, break a kept tie | 02-home-and-challenges #01, #25 |
| 30 | Exp · Judging · K3 · Rank, tie kept · 1440 | [30-judging-k3-rank-tie-kept.png](desktop/06-judging/30-judging-k3-rank-tie-kept.png) | `1385:45922` | Judging, K3, Rank, tie kept | 02-home-and-challenges #01, #21, #22, #28, #29, #31 |
| 31 | Exp · Judging · K4 · Publish 4 winners · 1440 | [31-judging-k4-publish-4-winners.png](desktop/06-judging/31-judging-k4-publish-4-winners.png) | `1416:48086` | Judging, K4, Publish 4 winners | 02-home-and-challenges #01, #30, #32 |
| 32 | Exp · Judging · K5 · Winners published, tie kept · 1440 | [32-judging-k5-winners-published-tie-kept.png](desktop/06-judging/32-judging-k5-winners-published-tie-kept.png) | `1385:46224` | Judging, K5, Winners published, tie kept | 02-home-and-challenges #01 |
| 33 | Exp · Judging · S5 · Setting on, score saved and team shown · 1440 | [33-judging-s5-setting-on-score-saved-and-team-shown.png](desktop/06-judging/33-judging-s5-setting-on-score-saved-and-team-shown.png) | `1364:44396` | Judging, S5, Setting on, score saved and team shown | 02-home-and-challenges #01, #34 |
| 34 | Exp · Judging · S6 · Setting on, team scores while waiting · 1440 | [34-judging-s6-setting-on-team-scores-while-waiting.png](desktop/06-judging/34-judging-s6-setting-on-team-scores-while-waiting.png) | `1365:44301` | Judging, S6, Setting on, team scores while waiting | 02-home-and-challenges #01 |
| 35 | Overlay · Judging settings | [35-overlay-judging-settings.png](desktop/06-judging/35-overlay-judging-settings.png) | `1393:47462` | Overlay, Judging settings |  |
| 36 | Exp · Judging · X1 · Contained, shortlist (discovery) · 1440 | [36-judging-x1-contained-shortlist-discovery.png](desktop/06-judging/36-judging-x1-contained-shortlist-discovery.png) | `1391:46627` | Judging, X1, Contained, shortlist (discovery) | 02-home-and-challenges #01, #37 |
| 37 | Exp · Judging · X2 · Contained, iQLY panel open (discovery) · 1440 | [37-judging-x2-contained-iqly-panel-open-discovery.png](desktop/06-judging/37-judging-x2-contained-iqly-panel-open-discovery.png) | `1392:46765` | Judging, X2, Contained, iQLY panel open (discovery) | 02-home-and-challenges #01, #36 |
| 38 | Exp · Judging · X3 · Contained, score (discovery) · 1440 | [38-judging-x3-contained-score-discovery.png](desktop/06-judging/38-judging-x3-contained-score-discovery.png) | `1392:97297` | Judging, X3, Contained, score (discovery) | 02-home-and-challenges #01 |

## Mobile (390)

### Row 1: Home and getting around

Folder `mobile/01-home-and-getting-around/`, 12 frames. Contact sheet: [`mobile-01-home-and-getting-around.jpg`](contact-sheets/mobile-01-home-and-getting-around.jpg)

> **Mobile row 1 · Home and getting around**: Home: greeting, "Needs you" as three photo cards in a sideways scroll (option A: full photo with a dark overlay and white text; option B, N01b: photo strip above plain text), the week’s figures as cards with illustrations, and "Stats for quants" (N08) for the full side-by-side comparison. Wallet: a card for iQLY credit, quick actions, escrow and paid-out tiles, illustrated recent rows. Lists split by pill filters (Exp/Chip, no "All"). N09 is the all-caught-up empty state.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Mobile · N01b · Home, highlights · 390 | [01-n01b-home-highlights.png](mobile/01-home-and-getting-around/01-n01b-home-highlights.png) | `1492:49128` | Home, highlights | #05, #06, #07, #09, #11, #12, 02-quick-challenge #01, 03-quick-poll #01 (+2 more) |
| 02 | Mobile · N01c · Home, nothing needs you · 390 | [02-n01c-home-nothing-needs-you.png](mobile/01-home-and-getting-around/02-n01c-home-nothing-needs-you.png) | `1519:49857` | Home, nothing needs you | #05, #06, #11, #12, 02-quick-challenge #01, 03-quick-poll #01, 04-quick-activation-and-claims #01 |
| 03 | Mobile · N01d · Home, no figures yet · 390 | [03-n01d-home-no-figures-yet.png](mobile/01-home-and-getting-around/03-n01d-home-no-figures-yet.png) | `1519:49980` | Home, no figures yet | #05, #06, #07, #11, 02-quick-challenge #01, 03-quick-poll #01, 04-quick-activation-and-claims #01 |
| 04 | Mobile · N01e · Home, brand new business · 390 | [04-n01e-home-brand-new-business.png](mobile/01-home-and-getting-around/04-n01e-home-brand-new-business.png) | `1519:50121` | Home, brand new business | #05, #06, #11, 02-quick-challenge #01, 03-quick-poll #01, 04-quick-activation-and-claims #01 |
| 05 | Mobile · N02 · Go to sheet · 390 | [05-n02-go-to-sheet.png](mobile/01-home-and-getting-around/05-n02-go-to-sheet.png) | `1474:47623` | Go to sheet |  |
| 06 | Mobile · N03 · Create · 390 | [06-n03-create.png](mobile/01-home-and-getting-around/06-n03-create.png) | `1474:47719` | Create | 02-quick-challenge #01, 03-quick-poll #01, 04-quick-activation-and-claims #01 |
| 07 | Mobile · N04 · Alerts · 390 | [07-n04-alerts.png](mobile/01-home-and-getting-around/07-n04-alerts.png) | `1474:47770` | Alerts | #05, #06, #08, #09, 03-quick-poll #05, 04-quick-activation-and-claims #07 |
| 08 | Mobile · N09 · Alerts, all caught up · 390 | [08-n09-alerts-all-caught-up.png](mobile/01-home-and-getting-around/08-n09-alerts-all-caught-up.png) | `1494:49382` | Alerts, all caught up | #05, #06 |
| 09 | Mobile · N05 · Challenges · 390 | [09-n05-challenges.png](mobile/01-home-and-getting-around/09-n05-challenges.png) | `1474:47838` | Challenges | #05, #06, #10 |
| 10 | Mobile · N06 · Challenge live · 390 | [10-n06-challenge-live.png](mobile/01-home-and-getting-around/10-n06-challenge-live.png) | `1474:47912` | Challenge live | 05-judging #01 |
| 11 | Mobile · N07 · Payments · 390 | [11-n07-payments.png](mobile/01-home-and-getting-around/11-n07-payments.png) | `1474:47969` | Payments | #05, #06 |
| 12 | Mobile · N08 · Stats for quants · 390 | [12-n08-stats-for-quants.png](mobile/01-home-and-getting-around/12-n08-stats-for-quants.png) | `1487:49105` | Stats for quants |  |

### Row 2: Quick challenge

Folder `mobile/02-quick-challenge/`, 8 frames. Contact sheet: [`mobile-02-quick-challenge.jpg`](contact-sheets/mobile-02-quick-challenge.jpg)

> **Mobile row 2 · Quick challenge**: Name, what to send, prize pool with room for submissions on a slider, winners (Top 1, Top 3 or a custom number split evenly), how long, then a clear "You pay" breakdown and Pay. Everything else is changed after saving the draft.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Mobile · N10 · Quick challenge 1 Name · 390 | [01-n10-quick-challenge-1-name.png](mobile/02-quick-challenge/01-n10-quick-challenge-1-name.png) | `1475:47775` | Quick challenge 1 Name | #02 |
| 02 | Mobile · N11 · Quick challenge 2 What to send · 390 | [02-n11-quick-challenge-2-what-to-send.png](mobile/02-quick-challenge/02-n11-quick-challenge-2-what-to-send.png) | `1475:47827` | Quick challenge 2 What to send | #03 |
| 03 | Mobile · N12 · Quick challenge 3 Prize pool · 390 | [03-n12-quick-challenge-3-prize-pool.png](mobile/02-quick-challenge/03-n12-quick-challenge-3-prize-pool.png) | `1475:47881` | Quick challenge 3 Prize pool | #04 |
| 04 | Mobile · N13 · Quick challenge 4 Winners · 390 | [04-n13-quick-challenge-4-winners.png](mobile/02-quick-challenge/04-n13-quick-challenge-4-winners.png) | `1475:47935` | Quick challenge 4 Winners | #05, #08 |
| 05 | Mobile · N14 · Quick challenge 5 How long · 390 | [05-n14-quick-challenge-5-how-long.png](mobile/02-quick-challenge/05-n14-quick-challenge-5-how-long.png) | `1475:47994` | Quick challenge 5 How long | #06 |
| 06 | Mobile · N15 · Quick challenge 6 Review and pay · 390 | [06-n15-quick-challenge-6-review-and-pay.png](mobile/02-quick-challenge/06-n15-quick-challenge-6-review-and-pay.png) | `1475:48062` | Quick challenge 6 Review and pay | #07 |
| 07 | Mobile · N16 · Challenge sent · 390 | [07-n16-challenge-sent.png](mobile/02-quick-challenge/07-n16-challenge-sent.png) | `1475:48130` | Challenge sent | 01-home-and-getting-around #01, 01-home-and-getting-around #09 |
| 08 | Mobile · N13b · Quick challenge 4 Winners, custom · 390 | [08-n13b-quick-challenge-4-winners-custom.png](mobile/02-quick-challenge/08-n13b-quick-challenge-4-winners-custom.png) | `1476:100506` | Quick challenge 4 Winners, custom | #05 |

### Row 3: Quick poll

Folder `mobile/03-quick-poll/`, 6 frames. Contact sheet: [`mobile-03-quick-poll.jpg`](contact-sheets/mobile-03-quick-poll.jpg)

> **Mobile row 3 · Quick poll**: Question, answers, tags or not, how long, send. Live results show votes and each answer’s share.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Mobile · N20 · Quick poll 1 Question · 390 | [01-n20-quick-poll-1-question.png](mobile/03-quick-poll/01-n20-quick-poll-1-question.png) | `1476:48029` | Quick poll 1 Question | #02 |
| 02 | Mobile · N21 · Quick poll 2 Answers · 390 | [02-n21-quick-poll-2-answers.png](mobile/03-quick-poll/02-n21-quick-poll-2-answers.png) | `1476:48076` | Quick poll 2 Answers | #03 |
| 03 | Mobile · N22 · Quick poll 3 Tags · 390 | [03-n22-quick-poll-3-tags.png](mobile/03-quick-poll/03-n22-quick-poll-3-tags.png) | `1476:48138` | Quick poll 3 Tags | #04 |
| 04 | Mobile · N23 · Quick poll 4 How long · 390 | [04-n23-quick-poll-4-how-long.png](mobile/03-quick-poll/04-n23-quick-poll-4-how-long.png) | `1476:48194` | Quick poll 4 How long | #06 |
| 05 | Mobile · N24 · Poll live results · 390 | [05-n24-poll-live-results.png](mobile/03-quick-poll/05-n24-poll-live-results.png) | `1476:48263` | Poll live results |  |
| 06 | Mobile · N25 · Poll sent · 390 | [06-n25-poll-sent.png](mobile/03-quick-poll/06-n25-poll-sent.png) | `1476:48321` | Poll sent | 01-home-and-getting-around #01, #05 |

### Row 4: Quick activation and claims

Folder `mobile/04-quick-activation-and-claims/`, 8 frames. Contact sheet: [`mobile-04-quick-activation-and-claims.jpg`](contact-sheets/mobile-04-quick-activation-and-claims.jpg)

> **Mobile row 4 · Quick activation and claims**: Task, the steps (each opens its own edit screen with the help line, pay and devices), how steps are confirmed, spots, pay. Claims confirm one at a time with a playable proof and an undo snackbar.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Mobile · N30 · Quick activation 1 Task · 390 | [01-n30-quick-activation-1-task.png](mobile/04-quick-activation-and-claims/01-n30-quick-activation-1-task.png) | `1479:48776` | Quick activation 1 Task | #02 |
| 02 | Mobile · N31 · Quick activation 2 Steps · 390 | [02-n31-quick-activation-2-steps.png](mobile/04-quick-activation-and-claims/02-n31-quick-activation-2-steps.png) | `1479:48826` | Quick activation 2 Steps | #03, #04 |
| 03 | Mobile · N31a · Quick activation edit a step · 390 | [03-n31a-quick-activation-edit-a-step.png](mobile/04-quick-activation-and-claims/03-n31a-quick-activation-edit-a-step.png) | `1479:48912` | Quick activation edit a step |  |
| 04 | Mobile · N31b · Quick activation 3 How steps are confirmed · 390 | [04-n31b-quick-activation-3-how-steps-are-confirmed.png](mobile/04-quick-activation-and-claims/04-n31b-quick-activation-3-how-steps-are-confirmed.png) | `1479:48961` | Quick activation 3 How steps are confirmed | #05 |
| 05 | Mobile · N32 · Quick activation 4 Spots · 390 | [05-n32-quick-activation-4-spots.png](mobile/04-quick-activation-and-claims/05-n32-quick-activation-4-spots.png) | `1479:49020` | Quick activation 4 Spots | #06 |
| 06 | Mobile · N33 · Quick activation 5 Pay · 390 | [06-n33-quick-activation-5-pay.png](mobile/04-quick-activation-and-claims/06-n33-quick-activation-5-pay.png) | `1479:49072` | Quick activation 5 Pay | 01-home-and-getting-around #01 |
| 07 | Mobile · N34 · Claim to confirm · 390 | [07-n34-claim-to-confirm.png](mobile/04-quick-activation-and-claims/07-n34-claim-to-confirm.png) | `1476:48571` | Claim to confirm | #08, 06-help-requests #01 |
| 08 | Mobile · N35 · Claim confirmed, next · 390 | [08-n35-claim-confirmed-next.png](mobile/04-quick-activation-and-claims/08-n35-claim-confirmed-next.png) | `1476:48617` | Claim confirmed, next | 01-home-and-getting-around #01 |

### Row 5: Judging on the go

Folder `mobile/05-judging/`, 10 frames. Contact sheet: [`mobile-05-judging.jpg`](contact-sheets/mobile-05-judging.jpg)

> **Mobile row 5 · Judging on the go**: Overview with progress and illustrated stages; entries as a swipeable card stack you can scroll inside, with round Not considering, Shortlist and Pass buttons; iQLY’s reason in a sheet; who has scored as judge avatars beside each entry (N49, dashed circle means not yet); one criterion per score screen; team scores as a podium; winners as cards; tie and publish in sheets.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Mobile · N40 · Judging overview · 390 | [01-n40-judging-overview.png](mobile/05-judging/01-n40-judging-overview.png) | `1477:48460` | Judging overview | #02 |
| 02 | Mobile · N41 · Shortlist entry · 390 | [02-n41-shortlist-entry.png](mobile/05-judging/02-n41-shortlist-entry.png) | `1477:48525` | Shortlist entry | #01, #03, #06 |
| 03 | Mobile · N42 · iQLY reason sheet · 390 | [03-n42-iqly-reason-sheet.png](mobile/05-judging/03-n42-iqly-reason-sheet.png) | `1477:48581` | iQLY reason sheet | #01, #02, #06, #10 |
| 04 | Mobile · N43 · Score one criterion · 390 | [04-n43-score-one-criterion.png](mobile/05-judging/04-n43-score-one-criterion.png) | `1477:48657` | Score one criterion | #01, #02, #05, #06 |
| 05 | Mobile · N44 · Team scores · 390 | [05-n44-team-scores.png](mobile/05-judging/05-n44-team-scores.png) | `1477:48732` | Team scores | #06 |
| 06 | Mobile · N45 · Rank with a tie · 390 | [06-n45-rank-with-a-tie.png](mobile/05-judging/06-n45-rank-with-a-tie.png) | `1477:48815` | Rank with a tie | #01, #02, #04, #07 |
| 07 | Mobile · N46 · Who takes 3rd · 390 | [07-n46-who-takes-3rd.png](mobile/05-judging/07-n46-who-takes-3rd.png) | `1477:48897` | Who takes 3rd | #08 |
| 08 | Mobile · N47 · Publish winners sheet · 390 | [08-n47-publish-winners-sheet.png](mobile/05-judging/08-n47-publish-winners-sheet.png) | `1477:48967` | Publish winners sheet | #09 |
| 09 | Mobile · N48 · Winners published · 390 | [09-n48-winners-published.png](mobile/05-judging/09-n48-winners-published.png) | `1477:49041` | Winners published | 01-home-and-getting-around #01 |
| 10 | Mobile · N49 · Shortlist with judges · 390 | [10-n49-shortlist-with-judges.png](mobile/05-judging/10-n49-shortlist-with-judges.png) | `1491:49112` | Shortlist with judges | #04 |

### Row 6: Help requests

Folder `mobile/06-help-requests/`, 5 frames. Contact sheet: [`mobile-06-help-requests.jpg`](contact-sheets/mobile-06-help-requests.jpg)

> **Mobile row 6 · Help requests on an activation**: Built like a WhatsApp chat. The list shows each contributor with their last message, time and unread count, under Open and Resolved pills. The chat has a pinned bar (claim waiting, ₦500 in escrow, Confirm and pay), their proof and message as bubbles and voice notes, system notes for dates and iQLY support, quick replies and a composer. Sorted shows the payout as a system note and closes the chat. Reached from Claims ("Help · 2"). Desktop versions sit in the Activations section.

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Mobile · N50 · Help requests · 390 | [01-n50-help-requests.png](mobile/06-help-requests/01-n50-help-requests.png) | `1495:49297` | Help requests | #02 |
| 02 | Mobile · N51 · Help request · 390 | [02-n51-help-request.png](mobile/06-help-requests/02-n51-help-request.png) | `1495:49352` | Help request | #03, #04 |
| 03 | Mobile · N52 · Typing a reply · 390 | [03-n52-typing-a-reply.png](mobile/06-help-requests/03-n52-typing-a-reply.png) | `1495:49439` | Typing a reply | #02, #04 |
| 04 | Mobile · N53 · Help request sorted · 390 | [04-n53-help-request-sorted.png](mobile/06-help-requests/04-n53-help-request-sorted.png) | `1495:49502` | Help request sorted |  |
| 05 | Mobile · N54 · Help requests, none open · 390 | [05-n54-help-requests-none-open.png](mobile/06-help-requests/05-n54-help-requests-none-open.png) | `1495:49564` | Help requests, none open | 04-quick-activation-and-claims #07 |

## Reference: shipped today

### Shipped today (reference)

Folder `reference/shipped/`, 4 frames. Contact sheet: [`reference-shipped.jpg`](contact-sheets/reference-shipped.jpg)

| # | Name | Image | Node | Shows | Links to |
|---|---|---|---|---|---|
| 01 | Dashboard · 1440 | [01-dashboard.png](reference/shipped/01-dashboard.png) | `644:39` | Dashboard | #02, #04 |
| 02 | Challenges · 1440 | [02-challenges.png](reference/shipped/02-challenges.png) | `646:125` | Challenges | #01, #03, #04 |
| 03 | New challenge · Type · 1440 | [03-new-challenge-type.png](reference/shipped/03-new-challenge-type.png) | `646:476` | New challenge, Type | #01, #02, #04 |
| 04 | Verification · before approval · 1440 | [04-verification-before-approval.png](reference/shipped/04-verification-before-approval.png) | `646:662` | Verification, before approval | #01, #02 |

## Prototype flows

Each flow starts at a Figma flow starting point and follows the first unvisited in-screen link (not the sidebar) that stays in the same row, so it is the main path, not every branch.

### Business · experimental home (from `656:350`)

1. [Home](desktop/02-home-and-challenges/01-home.png)
2. [Challenge, live](desktop/02-home-and-challenges/03-challenge-live.png)
3. [Challenges](desktop/02-home-and-challenges/02-challenges.png)
4. [Challenge, in review](desktop/02-home-and-challenges/04-challenge-in-review.png)
5. [Challenge, in review, menu open](desktop/02-home-and-challenges/21-challenge-in-review-menu-open.png)

### Business · experimental home (from `868:9507`)

1. [Alerts](desktop/02-home-and-challenges/06-alerts.png)
2. [Challenge, in review](desktop/02-home-and-challenges/04-challenge-in-review.png)
3. [Challenge, in review, menu open](desktop/02-home-and-challenges/21-challenge-in-review-menu-open.png)
4. [Challenges](desktop/02-home-and-challenges/02-challenges.png)
5. [Challenge, live](desktop/02-home-and-challenges/03-challenge-live.png)

### Business · experimental home (from `872:9707`)

1. [Settings](desktop/02-home-and-challenges/07-settings.png)
2. [Settings, Business profile](desktop/02-home-and-challenges/11-settings-business-profile.png)

### Business · experimental home (from `873:56672`)

1. [Home, sidebar collapsed](desktop/02-home-and-challenges/08-home-sidebar-collapsed.png)
2. [Home](desktop/02-home-and-challenges/01-home.png)
3. [Challenge, live](desktop/02-home-and-challenges/03-challenge-live.png)
4. [Challenges](desktop/02-home-and-challenges/02-challenges.png)
5. [Challenge, in review](desktop/02-home-and-challenges/04-challenge-in-review.png)
6. [Challenge, in review, menu open](desktop/02-home-and-challenges/21-challenge-in-review-menu-open.png)

### Business · experimental home (from `877:10089`)

1. [Settings, Business profile](desktop/02-home-and-challenges/11-settings-business-profile.png)
2. [Settings](desktop/02-home-and-challenges/07-settings.png)
3. [Settings, Notifications](desktop/02-home-and-challenges/12-settings-notifications.png)

### Business · experimental home (from `877:10186`)

1. [Settings, Notifications](desktop/02-home-and-challenges/12-settings-notifications.png)
2. [Settings](desktop/02-home-and-challenges/07-settings.png)
3. [Settings, Business profile](desktop/02-home-and-challenges/11-settings-business-profile.png)

### Business · experimental home (from `877:10283`)

1. [Settings, Bank account](desktop/02-home-and-challenges/13-settings-bank-account.png)
2. [Settings](desktop/02-home-and-challenges/07-settings.png)
3. [Settings, Business profile](desktop/02-home-and-challenges/11-settings-business-profile.png)

### Polls · create, review, target (from `657:810`)

1. [Polls](desktop/04-polls/01-polls.png)
2. [New poll, 1 Type](desktop/04-polls/07-new-poll-1-type.png)
3. [New poll, 1 Type, help open](desktop/04-polls/28-new-poll-1-type-help-open.png)
4. [New poll, 2 Question](desktop/04-polls/08-new-poll-2-question.png)
5. [New poll, 2 Question, preview, mobile](desktop/04-polls/34-new-poll-2-question-preview-mobile.png)
6. [New poll, 2 Question, preview, desktop](desktop/04-polls/35-new-poll-2-question-preview-desktop.png)
7. [New poll, 3 Cover, empty](desktop/04-polls/09-new-poll-3-cover-empty.png)
8. [New poll, 3 Cover](desktop/04-polls/10-new-poll-3-cover.png)
9. [New poll, 3 Cover, preview, mobile](desktop/04-polls/38-new-poll-3-cover-preview-mobile.png)
10. [New poll, 3 Cover, preview, desktop](desktop/04-polls/39-new-poll-3-cover-preview-desktop.png)
11. [New poll, 4 Audience and timing](desktop/04-polls/11-new-poll-4-audience-and-timing.png)
12. [New poll, 4 Audience and timing, help open](desktop/04-polls/31-new-poll-4-audience-and-timing-help-open.png)
13. [New poll, 4 Audience and timing, preview, mobile](desktop/04-polls/40-new-poll-4-audience-and-timing-preview-mobile.png)
14. [New poll, 4 Audience and timing, preview, desktop](desktop/04-polls/41-new-poll-4-audience-and-timing-preview-desktop.png)
15. [New poll, 5 Review](desktop/04-polls/12-new-poll-5-review.png)
16. [New poll, 5 Review, help open](desktop/04-polls/32-new-poll-5-review-help-open.png)
17. [New poll, 5 Review, preview, mobile](desktop/04-polls/42-new-poll-5-review-preview-mobile.png)
18. [New poll, 5 Review, preview, desktop](desktop/04-polls/43-new-poll-5-review-preview-desktop.png)
19. [Poll, in review](desktop/04-polls/19-poll-in-review.png)

### Polls · create, review, target (from `972:13222`)

1. [Polls, row menu open](desktop/04-polls/06-polls-row-menu-open.png)
2. [Polls](desktop/04-polls/01-polls.png)
3. [New poll, 1 Type](desktop/04-polls/07-new-poll-1-type.png)
4. [New poll, 1 Type, help open](desktop/04-polls/28-new-poll-1-type-help-open.png)
5. [New poll, 2 Question](desktop/04-polls/08-new-poll-2-question.png)
6. [New poll, 2 Question, preview, mobile](desktop/04-polls/34-new-poll-2-question-preview-mobile.png)
7. [New poll, 2 Question, preview, desktop](desktop/04-polls/35-new-poll-2-question-preview-desktop.png)
8. [New poll, 3 Cover, empty](desktop/04-polls/09-new-poll-3-cover-empty.png)
9. [New poll, 3 Cover](desktop/04-polls/10-new-poll-3-cover.png)
10. [New poll, 3 Cover, preview, mobile](desktop/04-polls/38-new-poll-3-cover-preview-mobile.png)
11. [New poll, 3 Cover, preview, desktop](desktop/04-polls/39-new-poll-3-cover-preview-desktop.png)
12. [New poll, 4 Audience and timing](desktop/04-polls/11-new-poll-4-audience-and-timing.png)
13. [New poll, 4 Audience and timing, help open](desktop/04-polls/31-new-poll-4-audience-and-timing-help-open.png)
14. [New poll, 4 Audience and timing, preview, mobile](desktop/04-polls/40-new-poll-4-audience-and-timing-preview-mobile.png)
15. [New poll, 4 Audience and timing, preview, desktop](desktop/04-polls/41-new-poll-4-audience-and-timing-preview-desktop.png)
16. [New poll, 5 Review](desktop/04-polls/12-new-poll-5-review.png)
17. [New poll, 5 Review, help open](desktop/04-polls/32-new-poll-5-review-help-open.png)
18. [New poll, 5 Review, preview, mobile](desktop/04-polls/42-new-poll-5-review-preview-mobile.png)
19. [New poll, 5 Review, preview, desktop](desktop/04-polls/43-new-poll-5-review-preview-desktop.png)
20. [Poll, in review](desktop/04-polls/19-poll-in-review.png)

### Polls · create, review, target (from `762:7302`)

1. [Polls, after ending P1 early](desktop/04-polls/03-polls-after-ending-p1-early.png)
2. [New poll, 1 Type](desktop/04-polls/07-new-poll-1-type.png)
3. [New poll, 1 Type, help open](desktop/04-polls/28-new-poll-1-type-help-open.png)
4. [Polls](desktop/04-polls/01-polls.png)
5. [Poll, in review](desktop/04-polls/19-poll-in-review.png)

### Polls · create, review, target (from `762:7407`)

1. [Polls, after resubmitting P5](desktop/04-polls/04-polls-after-resubmitting-p5.png)
2. [New poll, 1 Type](desktop/04-polls/07-new-poll-1-type.png)
3. [New poll, 1 Type, help open](desktop/04-polls/28-new-poll-1-type-help-open.png)
4. [Polls](desktop/04-polls/01-polls.png)
5. [Poll, in review](desktop/04-polls/19-poll-in-review.png)

### Polls · create, review, target (from `793:7992`)

1. [Polls, after sending P6](desktop/04-polls/05-polls-after-sending-p6.png)
2. [New poll, 1 Type](desktop/04-polls/07-new-poll-1-type.png)
3. [New poll, 1 Type, help open](desktop/04-polls/28-new-poll-1-type-help-open.png)
4. [Polls](desktop/04-polls/01-polls.png)
5. [Poll, in review](desktop/04-polls/19-poll-in-review.png)

### Polls · start a challenge from a poll (from `661:2879`)

1. [Poll, ended, create challenge](desktop/04-polls/22-poll-ended-create-challenge.png)
2. [Polls](desktop/04-polls/01-polls.png)
3. [New poll, 1 Type](desktop/04-polls/07-new-poll-1-type.png)
4. [New poll, 1 Type, help open](desktop/04-polls/28-new-poll-1-type-help-open.png)
5. [New poll, 2 Question](desktop/04-polls/08-new-poll-2-question.png)
6. [New poll, 2 Question, preview, mobile](desktop/04-polls/34-new-poll-2-question-preview-mobile.png)
7. [New poll, 2 Question, preview, desktop](desktop/04-polls/35-new-poll-2-question-preview-desktop.png)
8. [New poll, 3 Cover, empty](desktop/04-polls/09-new-poll-3-cover-empty.png)
9. [New poll, 3 Cover](desktop/04-polls/10-new-poll-3-cover.png)
10. [New poll, 3 Cover, preview, mobile](desktop/04-polls/38-new-poll-3-cover-preview-mobile.png)
11. [New poll, 3 Cover, preview, desktop](desktop/04-polls/39-new-poll-3-cover-preview-desktop.png)
12. [New poll, 4 Audience and timing](desktop/04-polls/11-new-poll-4-audience-and-timing.png)
13. [New poll, 4 Audience and timing, help open](desktop/04-polls/31-new-poll-4-audience-and-timing-help-open.png)
14. [New poll, 4 Audience and timing, preview, mobile](desktop/04-polls/40-new-poll-4-audience-and-timing-preview-mobile.png)
15. [New poll, 4 Audience and timing, preview, desktop](desktop/04-polls/41-new-poll-4-audience-and-timing-preview-desktop.png)
16. [New poll, 5 Review](desktop/04-polls/12-new-poll-5-review.png)
17. [New poll, 5 Review, help open](desktop/04-polls/32-new-poll-5-review-help-open.png)
18. [New poll, 5 Review, preview, mobile](desktop/04-polls/42-new-poll-5-review-preview-mobile.png)
19. [New poll, 5 Review, preview, desktop](desktop/04-polls/43-new-poll-5-review-preview-desktop.png)
20. [Poll, in review](desktop/04-polls/19-poll-in-review.png)

### Polls · first time (empty) (from `657:1197`)

1. [Polls, empty](desktop/04-polls/02-polls-empty.png)
2. [New poll, 1 Type](desktop/04-polls/07-new-poll-1-type.png)
3. [New poll, 1 Type, help open](desktop/04-polls/28-new-poll-1-type-help-open.png)
4. [Polls](desktop/04-polls/01-polls.png)
5. [Poll, in review](desktop/04-polls/19-poll-in-review.png)

### Targeting · no polls yet (from `663:3475`)

1. [New challenge, 6 Audience, no tag polls yet](desktop/03-builder-and-targeting/23-new-challenge-6-audience-no-tag-polls-yet.png)
2. [New challenge, 2 Basics](desktop/03-builder-and-targeting/02-new-challenge-2-basics.png)
3. [New challenge, 3 Brief](desktop/03-builder-and-targeting/03-new-challenge-3-brief.png)
4. [New challenge, 4 Cover, empty](desktop/03-builder-and-targeting/04-new-challenge-4-cover-empty.png)
5. [New challenge, 4 Cover](desktop/03-builder-and-targeting/05-new-challenge-4-cover.png)
6. [New challenge, 5 Survey](desktop/03-builder-and-targeting/06-new-challenge-5-survey.png)
7. [New challenge, 5 Survey, preview, mobile](desktop/03-builder-and-targeting/48-new-challenge-5-survey-preview-mobile.png)
8. [New challenge, 5 Survey, preview, desktop](desktop/03-builder-and-targeting/36-new-challenge-5-survey-preview-desktop.png)
9. [New challenge, 6 Audience](desktop/03-builder-and-targeting/07-new-challenge-6-audience.png)
10. [New challenge, 6 Audience, preview, mobile](desktop/03-builder-and-targeting/49-new-challenge-6-audience-preview-mobile.png)
11. [New challenge, 6 Audience, preview, desktop](desktop/03-builder-and-targeting/37-new-challenge-6-audience-preview-desktop.png)
12. [New challenge, 7 Reward](desktop/03-builder-and-targeting/09-new-challenge-7-reward.png)
13. [New challenge, 8 Timeline](desktop/03-builder-and-targeting/10-new-challenge-8-timeline.png)
14. [New challenge, 9 Brand visibility](desktop/03-builder-and-targeting/11-new-challenge-9-brand-visibility.png)
15. [New challenge, 9 Brand visibility, preview, mobile](desktop/03-builder-and-targeting/52-new-challenge-9-brand-visibility-preview-mobile.png)
16. [New challenge, 9 Brand visibility, preview, desktop](desktop/03-builder-and-targeting/40-new-challenge-9-brand-visibility-preview-desktop.png)
17. [New challenge, 10 Review and fund](desktop/03-builder-and-targeting/12-new-challenge-10-review-and-fund.png)
18. [New challenge, 10 Review, preview, mobile](desktop/03-builder-and-targeting/53-new-challenge-10-review-preview-mobile.png)
19. [New challenge, 10 Review, preview, desktop](desktop/03-builder-and-targeting/41-new-challenge-10-review-preview-desktop.png)

### Activations (from `1275:42308`)

1. [Activations, after cancel](desktop/05-activations/46-activations-after-cancel.png)
2. [New activation, 1 Task, empty](desktop/05-activations/30-new-activation-1-task-empty.png)
3. [New activation, 1 Task, empty, help open](desktop/05-activations/31-new-activation-1-task-empty-help-open.png)
4. [Activations](desktop/05-activations/01-activations.png)
5. [Activation, in review](desktop/05-activations/10-activation-in-review.png)
6. [Activation, in review, menu open](desktop/05-activations/38-activation-in-review-menu-open.png)
7. [Activation, in review, withdraw dialog](desktop/05-activations/39-activation-in-review-withdraw-dialog.png)
8. [Activations, after withdraw](desktop/05-activations/40-activations-after-withdraw.png)
9. [Activation, claims](desktop/05-activations/03-activation-claims.png)
10. [Activation, claim, Bisi Adewale](desktop/05-activations/07-activation-claim-bisi-adewale.png)
11. [Activation, claim, Kunle Okafor, after confirming Bisi](desktop/05-activations/08-activation-claim-kunle-okafor-after-confirming-bisi.png)
12. [Activation, claims, after confirm](desktop/05-activations/05-activation-claims-after-confirm.png)
13. [Activations, after one confirm](desktop/05-activations/06-activations-after-one-confirm.png)
14. [Activations, in review row menu open](desktop/05-activations/47-activations-in-review-row-menu-open.png)
15. [Activations, after funding, row menu open](desktop/05-activations/35-activations-after-funding-row-menu-open.png)

### Activations (from `1241:39760`)

1. [Activations, after withdraw](desktop/05-activations/40-activations-after-withdraw.png)
2. [New activation, 1 Task, empty](desktop/05-activations/30-new-activation-1-task-empty.png)
3. [New activation, 1 Task, empty, help open](desktop/05-activations/31-new-activation-1-task-empty-help-open.png)
4. [Activations](desktop/05-activations/01-activations.png)
5. [Activation, in review](desktop/05-activations/10-activation-in-review.png)
6. [Activation, in review, menu open](desktop/05-activations/38-activation-in-review-menu-open.png)
7. [Activation, in review, withdraw dialog](desktop/05-activations/39-activation-in-review-withdraw-dialog.png)

### Activations (from `664:4155`)

1. [Activations](desktop/05-activations/01-activations.png)
2. [Activation, in review](desktop/05-activations/10-activation-in-review.png)
3. [Activation, in review, menu open](desktop/05-activations/38-activation-in-review-menu-open.png)
4. [Activation, in review, withdraw dialog](desktop/05-activations/39-activation-in-review-withdraw-dialog.png)
5. [Activations, after withdraw](desktop/05-activations/40-activations-after-withdraw.png)
6. [New activation, 1 Task, empty](desktop/05-activations/30-new-activation-1-task-empty.png)
7. [New activation, 1 Task, empty, help open](desktop/05-activations/31-new-activation-1-task-empty-help-open.png)

### Activations (from `972:13470`)

1. [Activations, row menu open](desktop/05-activations/09-activations-row-menu-open.png)
2. [Activation, in review](desktop/05-activations/10-activation-in-review.png)
3. [Activation, in review, menu open](desktop/05-activations/38-activation-in-review-menu-open.png)
4. [Activation, in review, withdraw dialog](desktop/05-activations/39-activation-in-review-withdraw-dialog.png)
5. [Activations, after withdraw](desktop/05-activations/40-activations-after-withdraw.png)
6. [New activation, 1 Task, empty](desktop/05-activations/30-new-activation-1-task-empty.png)
7. [New activation, 1 Task, empty, help open](desktop/05-activations/31-new-activation-1-task-empty-help-open.png)
8. [Activations](desktop/05-activations/01-activations.png)
9. [Activations, in review row menu open](desktop/05-activations/47-activations-in-review-row-menu-open.png)
10. [Activations, after funding, row menu open](desktop/05-activations/35-activations-after-funding-row-menu-open.png)
11. [Activation, claims](desktop/05-activations/03-activation-claims.png)
12. [Activation, claim, Bisi Adewale](desktop/05-activations/07-activation-claim-bisi-adewale.png)
13. [Activation, claim, Kunle Okafor, after confirming Bisi](desktop/05-activations/08-activation-claim-kunle-okafor-after-confirming-bisi.png)
14. [Activation, claims, after confirm](desktop/05-activations/05-activation-claims-after-confirm.png)
15. [Activations, after one confirm](desktop/05-activations/06-activations-after-one-confirm.png)
16. [Activation, cancelled](desktop/05-activations/50-activation-cancelled.png)
17. [New activation, 4 Review and pay](desktop/05-activations/15-new-activation-4-review-and-pay.png)
18. [New activation, 4 Review and pay, help open](desktop/05-activations/16-new-activation-4-review-and-pay-help-open.png)
19. [New activation, 3 Reward and spots](desktop/05-activations/14-new-activation-3-reward-and-spots.png)
20. [New activation, 3 Reward and spots, preview, mobile](desktop/05-activations/26-new-activation-3-reward-and-spots-preview-mobile.png)
21. [New activation, 3 Reward and spots, preview, desktop](desktop/05-activations/27-new-activation-3-reward-and-spots-preview-desktop.png)
22. [New activation, 2 Cover](desktop/05-activations/13-new-activation-2-cover.png)
23. [New activation, 2 Cover, empty](desktop/05-activations/12-new-activation-2-cover-empty.png)
24. [New activation, 2 Cover, empty, preview, mobile](desktop/05-activations/22-new-activation-2-cover-empty-preview-mobile.png)
25. [New activation, 2 Cover, empty, preview, desktop](desktop/05-activations/23-new-activation-2-cover-empty-preview-desktop.png)
26. [New activation, 1 Task](desktop/05-activations/02-new-activation-1-task.png)
27. [New activation, 1 Task, preview, mobile](desktop/05-activations/20-new-activation-1-task-preview-mobile.png)
28. [New activation, 1 Task, preview, desktop](desktop/05-activations/21-new-activation-1-task-preview-desktop.png)

### Activations (from `762:7826`)

1. [Activations, after one confirm](desktop/05-activations/06-activations-after-one-confirm.png)
2. [Activation, in review](desktop/05-activations/10-activation-in-review.png)
3. [Activation, in review, menu open](desktop/05-activations/38-activation-in-review-menu-open.png)
4. [Activation, in review, withdraw dialog](desktop/05-activations/39-activation-in-review-withdraw-dialog.png)
5. [Activations, after withdraw](desktop/05-activations/40-activations-after-withdraw.png)
6. [New activation, 1 Task, empty](desktop/05-activations/30-new-activation-1-task-empty.png)
7. [New activation, 1 Task, empty, help open](desktop/05-activations/31-new-activation-1-task-empty-help-open.png)
8. [Activations](desktop/05-activations/01-activations.png)
9. [Activations, in review row menu open](desktop/05-activations/47-activations-in-review-row-menu-open.png)
10. [Activations, after funding, row menu open](desktop/05-activations/35-activations-after-funding-row-menu-open.png)
11. [Activation, claims](desktop/05-activations/03-activation-claims.png)
12. [Activation, claim, Bisi Adewale](desktop/05-activations/07-activation-claim-bisi-adewale.png)
13. [Activation, claim, Kunle Okafor, after confirming Bisi](desktop/05-activations/08-activation-claim-kunle-okafor-after-confirming-bisi.png)
14. [Activation, claims, after confirm](desktop/05-activations/05-activation-claims-after-confirm.png)

### Business · shipped (apps/brand) (from `644:39`)

1. [Dashboard](reference/shipped/01-dashboard.png)
2. [Challenges](reference/shipped/02-challenges.png)
3. [New challenge, Type](reference/shipped/03-new-challenge-type.png)
4. [Verification, before approval](reference/shipped/04-verification-before-approval.png)

### Business sign in 1440 (from `850:8734`)

1. [Sign in](desktop/01-sign-in/01-sign-in.png)
2. [Create business](desktop/01-sign-in/02-create-business.png)
3. [Check your email](desktop/01-sign-in/03-check-your-email.png)

### Business sign in 390 (from `850:8967`)

1. [Sign in](desktop/01-sign-in/05-sign-in-390.png)
2. [Create business](desktop/01-sign-in/06-create-business-390.png)

### Challenge approved, ready to publish (from `995:29384`)

1. [Challenge, approved](desktop/02-home-and-challenges/20-challenge-approved.png)
2. [Challenges](desktop/02-home-and-challenges/02-challenges.png)
3. [Challenge, live](desktop/02-home-and-challenges/03-challenge-live.png)

### Judging (proposal) 1 · shortlisting, 16 Oct (from `1385:45351`)

1. [Judging, A0, Overview, shortlisting](desktop/06-judging/01-judging-a0-overview-shortlisting.png)
2. [Overlay, Judging settings](desktop/06-judging/35-overlay-judging-settings.png)

### Judging (proposal) 2 · scoring, 17 Oct (from `1364:44100`)

1. [Judging, B4, Score, before saving](desktop/06-judging/19-judging-b4-score-before-saving.png)
2. [Judging, B1, Overview, scoring](desktop/06-judging/15-judging-b1-overview-scoring.png)
3. [Judging, B2, Shortlist done, shortlisted](desktop/06-judging/17-judging-b2-shortlist-done-shortlisted.png)
4. [Judging, B3, Shortlist done, not considering](desktop/06-judging/18-judging-b3-shortlist-done-not-considering.png)

### Judging (proposal) 3 · rank and publish, 17 Oct (from `1385:45580`)

1. [Judging, C0, Overview, all scores in](desktop/06-judging/21-judging-c0-overview-all-scores-in.png)
2. [Judging, C1, Team scores](desktop/06-judging/22-judging-c1-team-scores.png)
3. [Judging, Cs, Shortlist done, shortlisted (all scores in)](desktop/06-judging/28-judging-cs-shortlist-done-shortlisted-all-scores-in.png)

### Judging (proposal) setting on · scores after saving (from `1364:44396`)

1. [Judging, S5, Setting on, score saved and team shown](desktop/06-judging/33-judging-s5-setting-on-score-saved-and-team-shown.png)
2. [Judging, S6, Setting on, team scores while waiting](desktop/06-judging/34-judging-s6-setting-on-team-scores-while-waiting.png)

### Judging (discovery) · contained shortlist (from `1391:46627`)

1. [Judging, X1, Contained, shortlist (discovery)](desktop/06-judging/36-judging-x1-contained-shortlist-discovery.png)
2. [Judging, X2, Contained, iQLY panel open (discovery)](desktop/06-judging/37-judging-x2-contained-iqly-panel-open-discovery.png)

### Judging (discovery) · contained score (from `1392:97297`)

1. [Judging, X3, Contained, score (discovery)](desktop/06-judging/38-judging-x3-contained-score-discovery.png)

### Mobile · Home, brand new (from `1519:50121`)

1. [Home, brand new business](mobile/01-home-and-getting-around/04-n01e-home-brand-new-business.png)
2. [Go to sheet](mobile/01-home-and-getting-around/05-n02-go-to-sheet.png)

### Mobile · Home, no figures yet (from `1519:49980`)

1. [Home, no figures yet](mobile/01-home-and-getting-around/03-n01d-home-no-figures-yet.png)
2. [Go to sheet](mobile/01-home-and-getting-around/05-n02-go-to-sheet.png)

### Mobile · Home, nothing needs you (from `1519:49857`)

1. [Home, nothing needs you](mobile/01-home-and-getting-around/02-n01c-home-nothing-needs-you.png)
2. [Go to sheet](mobile/01-home-and-getting-around/05-n02-go-to-sheet.png)

### Mobile · Home (from `1492:49128`)

1. [Home, highlights](mobile/01-home-and-getting-around/01-n01b-home-highlights.png)
2. [Go to sheet](mobile/01-home-and-getting-around/05-n02-go-to-sheet.png)

### Mobile · Quick challenge (from `1475:47775`)

1. [Quick challenge 1 Name](mobile/02-quick-challenge/01-n10-quick-challenge-1-name.png)
2. [Quick challenge 2 What to send](mobile/02-quick-challenge/02-n11-quick-challenge-2-what-to-send.png)
3. [Quick challenge 3 Prize pool](mobile/02-quick-challenge/03-n12-quick-challenge-3-prize-pool.png)
4. [Quick challenge 4 Winners](mobile/02-quick-challenge/04-n13-quick-challenge-4-winners.png)
5. [Quick challenge 5 How long](mobile/02-quick-challenge/05-n14-quick-challenge-5-how-long.png)
6. [Quick challenge 6 Review and pay](mobile/02-quick-challenge/06-n15-quick-challenge-6-review-and-pay.png)
7. [Challenge sent](mobile/02-quick-challenge/07-n16-challenge-sent.png)

### Mobile · Quick poll (from `1476:48029`)

1. [Quick poll 1 Question](mobile/03-quick-poll/01-n20-quick-poll-1-question.png)
2. [Quick poll 2 Answers](mobile/03-quick-poll/02-n21-quick-poll-2-answers.png)
3. [Quick poll 3 Tags](mobile/03-quick-poll/03-n22-quick-poll-3-tags.png)
4. [Quick poll 4 How long](mobile/03-quick-poll/04-n23-quick-poll-4-how-long.png)
5. [Poll sent](mobile/03-quick-poll/06-n25-poll-sent.png)
6. [Poll live results](mobile/03-quick-poll/05-n24-poll-live-results.png)

### Mobile · Quick activation (from `1479:48776`)

1. [Quick activation 1 Task](mobile/04-quick-activation-and-claims/01-n30-quick-activation-1-task.png)
2. [Quick activation 2 Steps](mobile/04-quick-activation-and-claims/02-n31-quick-activation-2-steps.png)
3. [Quick activation edit a step](mobile/04-quick-activation-and-claims/03-n31a-quick-activation-edit-a-step.png)

### Mobile · Judging (from `1477:48460`)

1. [Judging overview](mobile/05-judging/01-n40-judging-overview.png)
2. [Shortlist entry](mobile/05-judging/02-n41-shortlist-entry.png)
3. [iQLY reason sheet](mobile/05-judging/03-n42-iqly-reason-sheet.png)
4. [Rank with a tie](mobile/05-judging/06-n45-rank-with-a-tie.png)
5. [Score one criterion](mobile/05-judging/04-n43-score-one-criterion.png)
6. [Team scores](mobile/05-judging/05-n44-team-scores.png)

### Mobile · Help requests (from `1495:49297`)

1. [Help requests](mobile/06-help-requests/01-n50-help-requests.png)
2. [Help request](mobile/06-help-requests/02-n51-help-request.png)
3. [Typing a reply](mobile/06-help-requests/03-n52-typing-a-reply.png)
4. [Help request sorted](mobile/06-help-requests/04-n53-help-request-sorted.png)

## Design system (partial)

Source: [design system file](https://www.figma.com/design/eDc8PWheV2bcsZ4dRQni1M), kit section `571:101`. 16 of 63 kit images are exported; the Figma MCP tool-call limit for a Collab seat stopped the run. `design-system/kit-nodes.tsv` lists every kit node in export order, and `manifest.json` (`design_system.kit_missing`) lists what is left. The icons sheet (`571:99`) and `tokens.json` are not exported yet.

| Image | Component | Node |
|---|---|---|
| design-system/kit/01-icon-business-additions.png | Exp/Icon · business additions | `576:101` |
| design-system/kit/02-status-pill.png | Exp/Biz/StatusPill | `576:164` |
| design-system/kit/03-progress-ring.png | Exp/Biz/ProgressRing | `576:185` |
| design-system/kit/04-nav-item.png | Exp/Biz/NavItem | `576:200` |
| design-system/kit/05-action-button.png | Exp/Biz/ActionButton | `576:202` |
| design-system/kit/06-save-button.png | Exp/Biz/SaveButton | `577:115` |
| design-system/kit/07-target-chip.png | Exp/Biz/TargetChip | `577:139` |
| design-system/kit/08-review-note.png | Exp/Biz/ReviewNote | `577:169` |
| design-system/kit/09-action-banner.png | Exp/Biz/ActionBanner | `577:193` |
| design-system/kit/10-option-input.png | Exp/Biz/OptionInput | `578:191` |
| design-system/kit/11-poll-type-card.png | Exp/Biz/PollTypeCard | `578:277` |
| design-system/kit/12-signature.png | Exp/Biz/Signature | `580:168` |
| design-system/kit/13-avatar.png | Exp/Biz/Avatar | `576:110` |
| design-system/kit/14-activation-card.png | Exp/Biz/ActivationCard | `581:149` |
| design-system/kit/15-top-bar.png | Exp/Biz/TopBar | `581:171` |
| design-system/kit/17-switch.png | Exp/Biz/Switch | `616:1135` |

## Not exported

- `1040:15364`, builder preview components (no frames).
- The Archive page `1:6` (retired work).
- Row notes are text, so they are in this index and the manifest, not images.
- Design system kit images and `tokens.json`: the Figma API rate-limited the design system file for this token, and the variables endpoint needs an Enterprise plan. Use the [design system file](https://www.figma.com/design/eDc8PWheV2bcsZ4dRQni1M) directly.
