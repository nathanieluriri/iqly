// Sanctioned sample dataset. Every figure the UI shows is computed from these rows.
// Three challenge titles are the ones the live iqly.net hero uses; everything else is illustrative.
import type { Challenge, Submission, WithdrawalStatus } from "../ds";

const now = Date.now();
const day = 86_400_000;
const at = (offsetDays: number, offsetHours = 0) => new Date(now + offsetDays * day + offsetHours * 3_600_000).toISOString();

export const USER = { name: "Adaeze Okafor", email: "adaeze@example.com" };

export type DemoChallenge = Challenge & { createdAt: string };

export const CHALLENGES: DemoChallenge[] = [
  { id: "c1", title: "Naming a new sparkling water brand for Gen Z.", body: "Three flavours, one can. Give us a name that travels from Lagos to Accra and still fits a hashtag.", tier: "standard", category: "marketing", rewardPool: 25_000_000, status: "live", deadline: at(5), brandName: "Orchid Foods", createdAt: at(-9) },
  { id: "c2", title: "A grocery delivery service that beats Bolt Food.", body: "Tell us the one thing that would make you switch for your weekly shop, and how we should say it.", tier: "advanced", category: "strategy", rewardPool: 60_000_000, status: "live", deadline: at(12), brandName: "Basket NG", createdAt: at(-4) },
  { id: "c3", title: "Why do Lagosians skip mobile banking on Sundays?", body: "Our app sessions dip every Sunday. Help us understand why before we spend on a campaign.", tier: "advanced", category: "customer_experience", rewardPool: 40_000_000, status: "closed", deadline: at(-3), brandName: null, createdAt: at(-40) },
  { id: "c4", title: "Redesign the first five minutes of our savings app", body: "New users drop before their first deposit. Sketch an onboarding that earns the first ₦1,000.", tier: "advanced", category: "product_design", rewardPool: 50_000_000, status: "live", deadline: at(1), brandName: "Kudi Box", createdAt: at(-12) },
  { id: "c5", title: "A tagline for a solar kiosk network", body: "Kiosks charge phones and sell airtime off-grid. We need one line that works in English and Pidgin.", tier: "standard", category: "marketing", rewardPool: 15_000_000, status: "live", deadline: at(0, 6), brandName: "Sunline", createdAt: at(-7) },
  { id: "c6", title: "How should a campus bookshop sell online?", body: "Students buy from WhatsApp sellers. Help a university bookshop compete without a big budget.", tier: "standard", category: "innovation", rewardPool: 10_000_000, status: "live", deadline: at(20), brandName: "Unibooks", createdAt: at(-2) },
  { id: "c7", title: "Cut queue time at our branch counters", body: "Customers wait 40 minutes on Mondays. Propose a fix staff can roll out in a week.", tier: "advanced", category: "customer_experience", rewardPool: 35_000_000, status: "live", deadline: at(8), brandName: "Harbour Microfinance", createdAt: at(-6) },
  { id: "c8", title: "Name our electric okada fleet", body: "A fleet of electric bikes for last-mile delivery needs a name riders are proud to wear.", tier: "standard", category: "marketing", rewardPool: 20_000_000, status: "closed", deadline: at(-15), brandName: "Volt Riders", createdAt: at(-45) },
  { id: "c9", title: "What would make you trust a used-phone marketplace?", body: "Buyers fear stolen or faulty phones. Tell us what proof would get you to pay.", tier: "standard", category: "technology", rewardPool: 12_000_000, status: "live", deadline: null, brandName: "Swapit", createdAt: at(-1) },
  { id: "c10", title: "Packaging ideas for a cassava snack", body: "We are moving from plain sachets to shelf packs. Pitch a look that stands out in a supermarket.", tier: "standard", category: "product_design", rewardPool: 18_000_000, status: "live", deadline: at(3), brandName: "Garri & Co", createdAt: at(-10) },
  { id: "c11", title: "Grow weekday ridership on our ferry route", body: "Weekends are full, weekdays are not. Give us a plan to fill the 9am ferry.", tier: "advanced", category: "strategy", rewardPool: 45_000_000, status: "live", deadline: at(15), brandName: "Lagoon Lines", createdAt: at(-3) },
  { id: "c12", title: "Rename our youth current account", body: "Our account for 18 to 25 year olds has a name nobody remembers. Suggest a better one.", tier: "standard", category: "marketing", rewardPool: 8_000_000, status: "live", deadline: at(9), brandName: "Harbour Microfinance", createdAt: at(-5) },
  { id: "c13", title: "Make school fee payments less stressful", body: "Parents pay fees in three trips to the bank. Design a flow that takes one.", tier: "advanced", category: "product_design", rewardPool: 55_000_000, status: "live", deadline: at(25), brandName: "Classpay", createdAt: at(-1) },
];

export const SUBMISSIONS: Submission[] = [
  { id: "s1", title: "Fizzo: short, loud, easy to say", body: "A two-syllable name that works on a can and in a hashtag, with room for flavour lines.", status: "pending", createdAt: at(-3), challengeTitle: CHALLENGES[0].title },
  { id: "s2", title: "Sunday is data day", body: "Data bundles reset on Sunday, so people wait to open apps until the new bundle lands.", status: "winner", createdAt: at(-34), challengeTitle: CHALLENGES[2].title },
  { id: "s3", title: "Ekpe: a name riders own", body: "A short, local name with a strong sound, printed big on the tank and the rider vest.", status: "winner", createdAt: at(-30), challengeTitle: CHALLENGES[7].title },
  { id: "s4", title: "Bring the shop to the hostel", body: "A WhatsApp catalogue plus a weekly hostel drop beats a website nobody visits.", status: "scored", createdAt: at(-1), challengeTitle: CHALLENGES[5].title },
  { id: "s5", title: "One counter for quick jobs", body: "Split deposits under ₦50,000 to a fast counter and send everything else to the main line.", status: "filtered_out", createdAt: at(-20), challengeTitle: CHALLENGES[6].title },
];

export type LedgerEntry = { id: string; type: string; amount: number; createdAt: string };
export type Withdrawal = { id: string; amount: number; status: WithdrawalStatus; createdAt: string };

// Awards match the two winning submissions above and land after each brief closes (kobo).
// Timeline: award 50,000 (13d ago) → failed 5,000 (11d) → paid out 40,000 (10d) → award 12,500 (2d) → 10,000 requested (2h).
export const LEDGER: LedgerEntry[] = [
  { id: "l3", type: "award", amount: 1_250_000, createdAt: at(-2) },
  { id: "l2", type: "withdrawal", amount: -4_000_000, createdAt: at(-10) },
  { id: "l1", type: "award", amount: 5_000_000, createdAt: at(-13) },
];

export const WITHDRAWALS: Withdrawal[] = [
  { id: "w3", amount: 1_000_000, status: "pending", createdAt: at(0, -2) },
  { id: "w2", amount: 4_000_000, status: "completed", createdAt: at(-10) },
  { id: "w1", amount: 500_000, status: "failed", createdAt: at(-11) },
];

// Names as Paystack's bank list returns them; the live app loads this list from Paystack.
export const BANKS = [
  { value: "044", label: "Access Bank" },
  { value: "070", label: "Fidelity Bank" },
  { value: "011", label: "First Bank of Nigeria" },
  { value: "214", label: "First City Monument Bank" },
  { value: "058", label: "Guaranty Trust Bank" },
  { value: "50211", label: "Kuda Bank" },
  { value: "50515", label: "Moniepoint MFB" },
  { value: "999992", label: "OPay Digital Services Limited (OPay)" },
  { value: "999991", label: "PalmPay" },
  { value: "033", label: "United Bank For Africa" },
  { value: "035", label: "Wema Bank" },
  { value: "057", label: "Zenith Bank" },
];

export const SAVED_BANK = { bankCode: "044", bankName: "Access Bank", accountName: "ADAEZE OKAFOR", accountNumber: "0123456789" };

// Totals derive from the rows: earned 62,500.00, paid out 40,000.00, on hold 10,000.00, available 12,500.00.
export function walletTotals(ledger: LedgerEntry[], withdrawals: Withdrawal[]) {
  const totalEarned = ledger.filter((l) => l.type === "award").reduce((s, l) => s + l.amount, 0);
  const balance = ledger.reduce((s, l) => s + l.amount, 0);
  const pendingWithdrawals = withdrawals.filter((w) => w.status === "pending" || w.status === "processing").reduce((s, w) => s + w.amount, 0);
  return { totalEarned, pendingWithdrawals, withdrawable: balance - pendingWithdrawals };
}
