import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { Badge, type BadgeVariant } from "./ui/badge";
import { Button, type ButtonVariant } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BankVerified, SavedBank } from "./ui/alert";
import { FormField } from "./ui/form-field";
import { Input, SearchInput } from "./ui/input";
import { ChipToggle, Separator, Skeleton, Spinner, Tooltip } from "./ui/misc";
import { EmptyState, PageHeader, Pagination } from "./ui/page";
import { Select } from "./ui/select";
import { Combobox } from "./ui/combobox";
import { Tabs } from "./ui/tabs";
import { ToastView } from "./ui/toast";
import { Logo, Logomark } from "./iqly/logo";
import { AppHeader, Sidebar } from "./iqly/shell";
import { BalanceCard, LedgerRow, WithdrawalRow } from "./iqly/wallet";
import { ChallengeCard, SubmissionCard, SubmissionStatus } from "./iqly/cards";
import { Compass, UserRound, Wallet } from "lucide-react";

// Reads the token names a version actually defines from its generated stylesheet,
// so a frozen version's gallery lists its own tokens, not today's.
function useTokenNames(version: string, prefix: string) {
  const [names, setNames] = useState<string[]>([]);
  useEffect(() => {
    const found = new Set<string>();
    for (const sheet of Array.from(document.styleSheets)) {
      let rules: CSSRuleList;
      try {
        rules = sheet.cssRules;
      } catch {
        continue;
      }
      const walk = (list: CSSRuleList) => {
        for (const r of Array.from(list)) {
          if (r instanceof CSSStyleRule && r.selectorText.includes(`[data-ds="${version}"]`)) {
            for (const p of Array.from(r.style)) if (p.startsWith(prefix)) found.add(p);
          } else if ("cssRules" in r) walk((r as CSSGroupingRule).cssRules);
        }
      };
      walk(rules);
    }
    setNames([...found]);
  }, [version, prefix]);
  return names;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4 rounded-xl border border-line bg-card p-6">
      <h2 className="type-mono-eyebrow text-accent-strong">{title}</h2>
      {children}
    </section>
  );
}

const BUTTON_VARIANTS: ButtonVariant[] = ["default", "outline", "secondary", "ghost", "destructive", "link"];
const BADGE_VARIANTS: BadgeVariant[] = ["default", "secondary", "destructive", "outline", "success", "warning", "info", "accent", "neutral"];
const now = Date.now();
const ago = (d: number) => new Date(now - d * 86_400_000).toISOString();
const ahead = (d: number) => new Date(now + d * 86_400_000).toISOString();

export default function Gallery({ version }: { version: string }) {
  const colors = useTokenNames(version, "--ds-color-");
  const types = useTokenNames(version, "--ds-type-").filter((n) => n.endsWith("-size")).map((n) => n.slice(10, -5));
  const radii = useTokenNames(version, "--ds-radius-");
  const shadows = useTokenNames(version, "--ds-shadow-");
  const [tab, setTab] = useState("withdrawals");
  const [chip, setChip] = useState(true);
  const [page, setPage] = useState(1);
  const [uni, setUni] = useState("");

  return (
    <div className="space-y-6">
      <p className="type-meta-caption text-fg3">Sample content on this page is illustrative.</p>

      <Section title="Colour">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {colors.map((n) => (
            <div key={n} className="rounded-lg border border-line p-2">
              <div className="h-10 rounded-md border border-line" style={{ background: `var(${n})` }} />
              <p className="mt-2 truncate type-mono-code text-fg">{n.slice(11)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography">
        <div className="divide-y divide-line">
          {types.map((t) => (
            <div key={t} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-3">
              <span className="w-48 shrink-0 type-mono-code text-fg3">{t}</span>
              <span className={`type-${t} min-w-0 max-w-full text-brand [overflow-wrap:anywhere]`}>Earnings from winning briefs</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Radius and elevation">
        <div className="flex flex-wrap gap-6">
          {radii.map((r) => (
            <div key={r} className="text-center">
              <div className="size-16 border border-brand-line2 bg-card" style={{ borderRadius: `var(${r})` }} />
              <p className="mt-2 type-mono-code text-fg3">{r.slice(12)}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 rounded-xl bg-panel p-6">
          {shadows.map((s) => (
            <div key={s} className="text-center">
              <div className="h-16 w-32 rounded-xl bg-card" style={{ boxShadow: `var(${s})` }} />
              <p className="mt-2 type-mono-code text-fg3">{s.slice(12)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Logo">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-6 rounded-lg bg-sidebar px-6 py-5">
            <Logo tone="on-dark" />
            <Logomark tone="on-dark" />
          </div>
          <div className="flex items-center gap-6 rounded-lg bg-bg px-6 py-5">
            <Logo />
            <Logomark />
          </div>
        </div>
      </Section>

      <Section title="Button">
        <div className="grid gap-3">
          {BUTTON_VARIANTS.map((v) => (
            <div key={v} className="flex flex-wrap items-center gap-3">
              <span className="w-24 type-mono-code text-fg3">{v}</span>
              <Button variant={v}>Request withdrawal</Button>
              <Button variant={v}>
                Withdraw <ArrowRight />
              </Button>
              <Button variant={v} disabled>
                Disabled
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Badge and status">
        <div className="flex flex-wrap gap-2">
          {BADGE_VARIANTS.map((v) => (
            <Badge key={v} variant={v}>
              {v}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["pending", "winner", "filtered_out"].map((s) => (
            <SubmissionStatus key={s} status={s} />
          ))}
        </div>
      </Section>

      <Section title="Form controls">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Account number">
            <Input placeholder="0123456789" inputMode="numeric" />
          </FormField>
          <FormField label="Account number" error="Could not verify account">
            <Input defaultValue="0123456780" />
          </FormField>
          <div className="space-y-1">
            <Input type="number" placeholder="1000" aria-label="Amount in naira" />
            <p className="type-meta-caption text-fg3">Minimum ₦1,000 · available ₦12,500.00</p>
          </div>
          <FormField label="Bank">
            <Select value="" onChange={() => {}} placeholder="Select bank" options={[{ value: "044", label: "Access Bank" }]} />
          </FormField>
          <FormField label="Country" caps>
            <Input disabled defaultValue="Nigeria" />
          </FormField>
          <FormField label="University" caps>
            <Combobox value={uni} onChange={setUni} options={[{ value: "University of Lagos", label: "University of Lagos" }, { value: "Covenant University", label: "Covenant University" }]} placeholder="Select your university" searchPlaceholder="Search universities…" emptyText="No university found." />
          </FormField>
          <SearchInput placeholder="Search by title…" />
          <div className="flex flex-wrap gap-2">
            <ChipToggle selected={chip} onClick={() => setChip((c) => !c)}>
              Student
            </ChipToggle>
            <ChipToggle selected={false}>Employed</ChipToggle>
          </div>
        </div>
      </Section>

      <Section title="Tabs, avatar, utility">
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
            <div {...panel} className="type-body-small text-fg3">
              Showing {active}
            </div>
          )}
        </Tabs>
        <div className="flex flex-wrap items-center gap-3">
          <Avatar initials="N" />
          <Avatar variant="user-large" initials="N" />
          <Avatar variant="account" initials="N" />
          <Avatar variant="brand" initials="O" />
          <Spinner />
          <Tooltip content="Total prize money the brand has funded for this brief.">
            {(id) => (
              <Button variant="outline" aria-describedby={id}>
                Hover for tooltip
              </Button>
            )}
          </Tooltip>
        </div>
        <Skeleton className="h-4 w-80 max-w-full" />
        <Separator />
      </Section>

      <Section title="Card, alerts, toasts">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Request withdrawal</CardTitle>
              <CardDescription>Funds land in your bank within 1 business day after iQLY approves the transfer.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-12 rounded-md border border-dashed border-brand-line bg-tint" />
            </CardContent>
          </Card>
          <div className="space-y-3">
            <BankVerified accountName="ADAEZE OKAFOR" />
            <SavedBank bankName="Access Bank" accountName="ADAEZE OKAFOR" last4="6789" />
          </div>
          <div className="space-y-2">
            <ToastView type="success" message="Bank account saved" />
            <ToastView type="error" message="Failed to request withdrawal" />
            <ToastView type="loading" message="Submitting withdrawal..." />
          </div>
        </div>
      </Section>

      <Section title="Page parts">
        <PageHeader title="Wallet" description="Earnings from winning briefs land here. Withdraw to your bank when you're ready." />
        <EmptyState title="No briefs match these filters" body="Try widening your search or clearing some filters." />
        <Pagination page={page} pageCount={8} onPageChange={setPage} />
      </Section>

      <Section title="Shell">
        <div className="flex h-[560px] overflow-hidden rounded-lg border border-line">
          <Sidebar
            items={[
              { label: "Discover", href: "#discover", icon: Compass },
              { label: "My submissions", href: "#submissions", icon: FileText },
              { label: "Wallet", href: "#wallet", icon: Wallet },
              { label: "Profile", href: "#profile", icon: UserRound },
            ]}
            activeHref="#wallet"
            user={{ name: "Adaeze Okafor" }}
            className="hidden sm:flex"
          />
          <div className="min-w-0 flex-1">
            <AppHeader onToggleSidebar={() => {}} onSignOut={() => {}} user={{ name: "Adaeze Okafor", email: "adaeze@example.com" }} notice="Sample data" />
          </div>
        </div>
      </Section>

      <Section title="Wallet">
        <BalanceCard withdrawable={1_250_000} pendingWithdrawals={1_000_000} totalEarned={6_250_000} />
        <div className="divide-y divide-line">
          <WithdrawalRow amount={1_000_000} createdAt={new Date(now - 2 * 3_600_000).toISOString()} status="pending" />
          <WithdrawalRow amount={4_000_000} createdAt={ago(10)} status="completed" />
          <WithdrawalRow amount={500_000} createdAt={ago(11)} status="failed" />
        </div>
        <div className="divide-y divide-line">
          <LedgerRow type="award" amount={1_250_000} createdAt={ago(2)} />
          <LedgerRow type="withdrawal" amount={-4_000_000} createdAt={ago(10)} />
          <LedgerRow type="award" amount={5_000_000} createdAt={ago(13)} />
        </div>
      </Section>

      <Section title="Cards">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <ChallengeCard href="#" c={{ id: "a", title: "Naming a new sparkling water brand for Gen Z.", body: "Three flavours, one can, a name that travels from Lagos to Accra.", tier: "standard", category: "marketing", rewardPool: 25_000_000, status: "live", deadline: ahead(5), brandName: "Orchid Foods" }} />
          <ChallengeCard href="#" c={{ id: "b", title: "Why do Lagosians skip mobile banking on Sundays?", body: "Help us read a weekly dip in app sessions.", tier: "advanced", category: "customer_experience", rewardPool: 40_000_000, status: "closed", deadline: ago(2), brandName: null }} />
          <SubmissionCard href="#" s={{ id: "s1", title: "Fizzo: short, loud, easy to say", body: "A two-syllable name that works on a can and in a hashtag.", status: "pending", createdAt: ago(3), challengeTitle: "Naming a new sparkling water brand for Gen Z." }} />
          <SubmissionCard href="#" s={{ id: "s2", title: "Sunday is data day", body: "Data bundles reset on Sunday, so people wait.", status: "winner", createdAt: ago(20), challengeTitle: "Why do Lagosians skip mobile banking on Sundays?" }} />
        </div>
      </Section>
    </div>
  );
}
