import { useState, type FormEvent } from "react";
import {
  BalanceCard,
  BankVerified,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FormField,
  Input,
  LedgerRow,
  PageHeader,
  SavedBank,
  Select,
  Tabs,
  WithdrawalRow,
  formatNaira,
  useToast,
} from "../ds";
import { BANKS, LEDGER, SAVED_BANK, WITHDRAWALS, walletTotals, type Withdrawal } from "../data/demo";

type Tab = "withdrawals" | "transactions" | "bank";
type Bank = typeof SAVED_BANK;

export function WalletPage() {
  const [tab, setTab] = useState<Tab>("withdrawals");
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>(WITHDRAWALS);
  const [bank, setBank] = useState<Bank | null>(SAVED_BANK);
  const totals = walletTotals(LEDGER, withdrawals);

  return (
    <div className="flex-1 p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <PageHeader title="Wallet" description="Earnings from winning briefs land here. Withdraw to your bank when you're ready." />
        <BalanceCard withdrawable={totals.withdrawable} pendingWithdrawals={totals.pendingWithdrawals} totalEarned={totals.totalEarned} />
        <Tabs
          value={tab}
          onChange={setTab}
          items={[
            { value: "withdrawals", label: "Withdrawals" },
            { value: "transactions", label: "Transactions" },
            { value: "bank", label: "Bank account" },
          ]}
        >
          {(active, panel) => (
            <div {...panel} className="space-y-4 outline-none">
              {active === "withdrawals" ? (
                <>
                  {bank ? (
                    <RequestWithdrawal
                      available={totals.withdrawable}
                      onRequested={(amount) => setWithdrawals((w) => [{ id: `w${w.length + 1}`, amount, status: "pending", createdAt: new Date().toISOString() }, ...w])}
                    />
                  ) : (
                    <Card>
                      <CardContent className="py-8 text-center type-body-small text-fg3">Add a bank account first to request a withdrawal.</CardContent>
                    </Card>
                  )}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent withdrawals</CardTitle>
                      <CardDescription>Most recent {withdrawals.length} requests.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {withdrawals.length === 0 ? (
                        <p className="type-body-small text-fg3">No withdrawals yet.</p>
                      ) : (
                        <div className="divide-y divide-line">
                          {withdrawals.map((w) => (
                            <WithdrawalRow key={w.id} amount={w.amount} createdAt={w.createdAt} status={w.status} />
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </>
              ) : null}
              {active === "transactions" ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Transactions</CardTitle>
                    <CardDescription>Every credit + debit on your wallet ledger.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {LEDGER.length === 0 ? (
                      <p className="type-body-small text-fg3">No transactions yet.</p>
                    ) : (
                      <div className="divide-y divide-line">
                        {LEDGER.map((l) => (
                          <LedgerRow key={l.id} type={l.type} amount={l.amount} createdAt={l.createdAt} />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ) : null}
              {active === "bank" ? <BankAccount current={bank} onSaved={setBank} /> : null}
            </div>
          )}
        </Tabs>
      </div>
    </div>
  );
}

function RequestWithdrawal({ available, onRequested }: { available: number; onRequested: (kobo: number) => void }) {
  const toast = useToast();
  const [value, setValue] = useState("");
  const [pending, setPending] = useState(false);
  const kobo = Number(value) * 100;
  const valid = Number.isFinite(kobo) && kobo >= 100_000 && kobo <= available;

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setPending(true);
    const id = toast.loading("Submitting withdrawal...");
    window.setTimeout(() => {
      onRequested(kobo);
      setValue("");
      setPending(false);
      toast.success("Withdrawal requested. Funds usually arrive within 1–2 business days", id);
    }, 900);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request withdrawal</CardTitle>
        <CardDescription>Funds land in your bank within 1 business day after iQLY approves the transfer.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="grid gap-3 md:grid-cols-[1fr_auto]">
          <div className="space-y-1">
            <Input type="number" inputMode="decimal" placeholder="1000" min={1000} value={value} onChange={(e) => setValue(e.target.value)} aria-label="Amount in naira" aria-describedby="withdraw-help" />
            <p id="withdraw-help" className="type-meta-caption text-fg3">
              Minimum ₦1,000 · available {formatNaira(available)}
            </p>
          </div>
          <Button type="submit" disabled={pending || !valid}>
            {pending ? "Submitting…" : "Withdraw"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function BankAccount({ current, onSaved }: { current: Bank | null; onSaved: (b: Bank) => void }) {
  const toast = useToast();
  const [bankCode, setBankCode] = useState("");
  const [account, setAccount] = useState("");
  const [resolved, setResolved] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [saving, setSaving] = useState(false);

  function verify() {
    if (!bankCode || account.length !== 10) return;
    setVerifying(true);
    window.setTimeout(() => {
      setVerifying(false);
      // Illustrative: the live app resolves the name with Paystack; numbers ending in 0 fail here to show the error path.
      if (account.endsWith("0")) {
        setResolved(null);
        toast.error("Could not verify account");
      } else setResolved("ADAEZE OKAFOR");
    }, 700);
  }

  function save() {
    if (!resolved) return;
    setSaving(true);
    const id = toast.loading("Saving bank details...");
    window.setTimeout(() => {
      const label = BANKS.find((b) => b.value === bankCode)?.label ?? "";
      onSaved({ bankCode, bankName: label, accountName: resolved, accountNumber: account });
      setSaving(false);
      setBankCode("");
      setAccount("");
      setResolved(null);
      toast.success("Bank account saved", id);
    }, 900);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bank account</CardTitle>
        <CardDescription>{current ? "Replace the bank we'll send withdrawals to." : "Add the bank we'll send withdrawals to."}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {current ? <SavedBank bankName={current.bankName} accountName={current.accountName} last4={current.accountNumber.slice(-4)} /> : null}
        <div className="grid gap-3 md:grid-cols-2">
          <FormField label="Bank">
            <Select
              className="w-full"
              value={bankCode}
              onChange={(e) => {
                setBankCode(e.target.value);
                setResolved(null);
              }}
              placeholder="Select bank"
              options={BANKS}
            />
          </FormField>
          <FormField label="Account number">
            <Input
              inputMode="numeric"
              maxLength={10}
              placeholder="0123456789"
              value={account}
              onChange={(e) => {
                setAccount(e.target.value.replace(/\D/g, ""));
                setResolved(null);
              }}
            />
          </FormField>
        </div>
        {resolved ? <BankVerified accountName={resolved} /> : null}
        <div className="flex gap-2">
          <Button variant="outline" onClick={verify} disabled={verifying || !bankCode || account.length !== 10}>
            {verifying ? "Verifying…" : "Verify account"}
          </Button>
          <Button onClick={save} disabled={saving || !resolved}>
            {saving ? "Saving…" : current ? "Replace bank" : "Save bank"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
