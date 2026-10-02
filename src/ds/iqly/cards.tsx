import { Clock, FileText, Info, Sparkles, Tag, UserRound } from "lucide-react";
import { cn } from "../lib/cn";
import { deadlineLabel, formatRelative, formatReward, isDimmed } from "../lib/format";
import { useLink } from "../lib/link";
import { Avatar } from "../ui/avatar";
import { Tooltip } from "../ui/misc";

export type SubmissionStatusValue = "pending" | "scored" | "winner" | "filtered_out";

const STATUS: Record<string, { label: string; className: string }> = {
  pending: { label: "Under review", className: "border-warn-dot bg-warn-soft text-warn" },
  scored: { label: "Under review", className: "border-warn-dot bg-warn-soft text-warn" },
  winner: { label: "Winner", className: "border-ok-dot bg-ok-soft text-ok" },
  filtered_out: { label: "Not selected", className: "border-brand-line bg-card-glass text-brand-fg2" },
};

export function SubmissionStatus({ status, className }: { status: string; className?: string }) {
  const s = STATUS[status] ?? { label: status.replace("_", " "), className: STATUS.filtered_out.className };
  return <span className={cn("inline-flex h-5 items-center rounded-md border px-2 py-0.5 type-label-badge", s.className, className)}>{s.label}</span>;
}

const cardShell = "group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-soft bg-card outline-none transition-colors hover:border-brand-line2 focus-visible:shadow-focus-ring";
const coverWash = "bg-brand-wash bg-linear-to-br from-accent/15 via-bg/30 to-brand/15";

export type Challenge = {
  id: string;
  title: string | null;
  body: string;
  tier: "standard" | "advanced";
  category: string | null;
  rewardPool: number | null;
  status: "live" | "closed";
  deadline: string | null;
  brandName: string | null;
  coverImageUrl?: string | null;
};

export function ChallengeCard({ c, href }: { c: Challenge; href: string }) {
  const Link = useLink();
  const dimmed = isDimmed(c.status, c.deadline);
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-soft bg-card hover:border-brand-line2 has-[a:focus-visible]:shadow-focus-ring",
        dimmed
          ? "opacity-60 saturate-[0.35] transition-[border-color,opacity,filter] hover:opacity-100 hover:saturate-100 has-[:focus-visible]:opacity-100 has-[:focus-visible]:saturate-100"
          : "transition-colors",
      )}
    >
      <div className={cn("relative aspect-[16/10] w-full overflow-hidden", coverWash)}>
        {c.coverImageUrl ? <img src={c.coverImageUrl} alt="" loading="lazy" className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" /> : null}
        {dimmed ? <span className="absolute top-3 left-3 rounded-full bg-brand/85 px-2.5 py-1 type-mono-pill text-sidebar-fg backdrop-blur-sm">Closed</span> : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex min-w-0 items-center gap-2 whitespace-nowrap type-mono-card-eyebrow text-accent-strong">
          <Sparkles aria-hidden className="size-3 shrink-0" />
          <span>{c.tier === "advanced" ? "Advanced" : "Standard"}</span>
          {c.category ? (
            <>
              <span aria-hidden className="opacity-50">
                ·
              </span>
              <Tag aria-hidden className="size-3 shrink-0" />
              <span className="truncate">{c.category.replace("_", " ")}</span>
            </>
          ) : null}
        </div>
        <div className="mt-3 flex items-center gap-2">
          {c.brandName ? <Avatar variant="brand" initials={c.brandName.charAt(0).toUpperCase()} /> : <UserRound aria-hidden className="size-4 shrink-0 text-brand-line2" />}
          <span className="truncate type-label-badge text-brand-fg2">{c.brandName ?? "Anonymous"}</span>
        </div>
        <h3 className="mt-2 line-clamp-2 type-heading-card-title text-brand">
          <Link href={href} className="outline-none after:absolute after:inset-0 after:content-['']">
            {c.title ?? "Untitled brief"}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 type-body-relaxed text-brand-fg2">{c.body}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <div className="flex items-center gap-1 type-mono-micro text-brand-fg3">
              <span>Reward pool</span>
              <Tooltip content="Total prize money the brand has funded for this brief. After judging closes, it's split across the top contributors per the brief's winner rules.">
                {(id) => (
                  <button
                    type="button"
                    aria-label="What is the reward pool?"
                    aria-describedby={id}
                    className="relative z-10 -m-1.5 inline-flex rounded-sm p-1.5 text-brand-fg3 outline-none hover:text-brand focus-visible:text-brand focus-visible:shadow-focus-ring"
                  >
                    <Info aria-hidden className="size-3" />
                  </button>
                )}
              </Tooltip>
            </div>
            <p className="mt-0.5 type-figure-reward text-brand">{c.rewardPool !== null ? formatReward(c.rewardPool) : "–"}</p>
          </div>
          <div className="flex items-center gap-1.5 type-meta-caption text-brand-fg-60">
            <Clock aria-hidden className="size-3.5" />
            <span>{deadlineLabel(c.status, c.deadline)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export type Submission = { id: string; title: string | null; body: string; status: SubmissionStatusValue; createdAt: string; challengeTitle: string | null; coverImageUrl?: string | null };

export function SubmissionCard({ s, href }: { s: Submission; href: string }) {
  const Link = useLink();
  return (
    <Link href={href} className={cardShell}>
      <div className={cn("relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden", coverWash)}>
        {s.coverImageUrl ? (
          <img src={s.coverImageUrl} alt="" loading="lazy" className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
        ) : (
          <FileText aria-hidden className="size-10 text-brand-line2 transition-transform duration-300 group-hover:scale-[1.05]" />
        )}
        <SubmissionStatus status={s.status} className="absolute top-3 left-3 backdrop-blur-sm" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 type-mono-card-eyebrow text-accent-strong">
          <FileText aria-hidden className="size-3 shrink-0" />
          <span className="truncate">{s.challengeTitle ?? "Submission"}</span>
        </div>
        <h3 className="mt-3 line-clamp-2 type-heading-card-title text-brand">{s.title ?? "Untitled"}</h3>
        <p className="mt-2 line-clamp-2 type-body-relaxed text-brand-fg2">{s.body}</p>
        <div className="mt-auto flex items-center gap-1.5 pt-5 type-meta-caption text-brand-fg-60">
          <Clock aria-hidden className="size-3.5" />
          <span>Sent {formatRelative(s.createdAt)}</span>
        </div>
      </div>
    </Link>
  );
}
