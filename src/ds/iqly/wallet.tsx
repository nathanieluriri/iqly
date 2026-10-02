import { Badge, type BadgeVariant } from "../ui/badge";
import { formatNaira, formatRelative } from "../lib/format";

export function BalanceCard({ withdrawable, pendingWithdrawals, totalEarned }: { withdrawable: number | null; pendingWithdrawals: number; totalEarned: number | null }) {
  return (
    <div className="flex flex-col gap-1 overflow-hidden rounded-xl border border-line bg-card px-4 py-6">
      <p className="type-label-overline text-fg3">Available to withdraw</p>
      <p className="type-figure-balance text-fg">{withdrawable === null ? "–" : formatNaira(withdrawable)}</p>
      {pendingWithdrawals > 0 ? <p className="type-meta-caption text-fg3">{formatNaira(pendingWithdrawals)} on hold for pending withdrawals</p> : null}
      <p className="type-meta-caption text-fg3">Lifetime earned: {totalEarned === null ? "–" : formatNaira(totalEarned)}</p>
    </div>
  );
}

export type WithdrawalStatus = "pending" | "processing" | "completed" | "failed" | "reversed";

export function withdrawalBadge(status: WithdrawalStatus): BadgeVariant {
  return status === "completed" ? "default" : status === "failed" || status === "reversed" ? "destructive" : "secondary";
}

export function WithdrawalRow({ amount, createdAt, status }: { amount: number; createdAt: string; status: WithdrawalStatus }) {
  return (
    <div className="flex items-center justify-between py-3 type-body-small">
      <div>
        <p className="type-body-small-strong text-fg">{formatNaira(amount)}</p>
        <p className="type-meta-caption text-fg3">{formatRelative(createdAt)}</p>
      </div>
      <Badge variant={withdrawalBadge(status)}>{status}</Badge>
    </div>
  );
}

export function LedgerRow({ type, amount, createdAt }: { type: string; amount: number; createdAt: string }) {
  const credit = amount > 0;
  return (
    <div className="flex items-center justify-between py-2 type-body-small">
      <div>
        <p className="type-mono-ledger-type text-fg3">{type}</p>
        <p className="type-meta-caption text-fg3">{formatRelative(createdAt)}</p>
      </div>
      <span className={credit ? "type-body-small-strong text-brand" : "type-body-small-strong text-fg"}>
        {credit ? "+" : ""}
        {formatNaira(Math.abs(amount))}
      </span>
    </div>
  );
}
