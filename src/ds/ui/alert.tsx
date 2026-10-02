import { Check } from "lucide-react";

export function BankVerified({ accountName }: { accountName: string }) {
  return (
    <div role="status" className="flex items-center gap-2 rounded-md bg-brand-soft p-3 type-body-small-strong text-fg">
      <Check aria-hidden className="size-4 text-brand" />
      <span>{accountName}</span>
    </div>
  );
}

export function SavedBank({ bankName, accountName, last4 }: { bankName: string; accountName: string; last4: string }) {
  return (
    <div className="rounded-md border border-line bg-card p-4 type-body-small">
      <p className="type-body-small-strong text-fg">{bankName}</p>
      <p className="text-fg3">
        {accountName} · ••••{last4}
      </p>
    </div>
  );
}
