import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";
import { cn } from "../lib/cn";
import { Button } from "./button";

export function PageHeader({ title, description, as: Heading = "h1" }: { title: string; description?: string; as?: "h1" | "h2" }) {
  return (
    <div>
      <Heading className="type-heading-page-title text-fg">{title}</Heading>
      {description ? <p className="mt-1 type-body-small text-fg3">{description}</p> : null}
    </div>
  );
}

export function EmptyState({ title, body, icon, headingLevel = "p" }: { title: string; body: string; icon?: ReactNode; headingLevel?: "p" | "h1" | "h2" }) {
  const Title = headingLevel;
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line py-16 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-panel text-fg3">{icon ?? <Compass aria-hidden className="size-5" />}</div>
      <Title className="type-heading-card-section text-fg">{title}</Title>
      <p className="max-w-sm type-body-small text-fg3">{body}</p>
    </div>
  );
}

function pages(page: number, count: number): Array<number | "…"> {
  if (count <= 7) return Array.from({ length: count }, (_, i) => i + 1);
  const out: Array<number | "…"> = [1];
  if (page > 3) out.push("…");
  for (let p = Math.max(2, page - 1); p <= Math.min(count - 1, page + 1); p++) out.push(p);
  if (page < count - 2) out.push("…");
  out.push(count);
  return out;
}

export function Pagination({ page, pageCount, onPageChange }: { page: number; pageCount: number; onPageChange: (p: number) => void }) {
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1 pt-2">
      <Button variant="ghost" size="sm" disabled={page <= 1} onClick={() => onPageChange(page - 1)} aria-label="Previous page">
        <ChevronLeft />
      </Button>
      {pages(page, pageCount).map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className="px-2 type-body-small text-fg3">
            …
          </span>
        ) : (
          <Button key={p} variant={p === page ? "default" : "ghost"} size="sm" className={cn("min-w-9")} aria-current={p === page ? "page" : undefined} onClick={() => onPageChange(p)}>
            {p}
          </Button>
        ),
      )}
      <Button variant="ghost" size="sm" disabled={page >= pageCount} onClick={() => onPageChange(page + 1)} aria-label="Next page">
        <ChevronRight />
      </Button>
    </nav>
  );
}
