import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { Button, ChallengeCard, EmptyState, PageHeader, Pagination, SearchInput, Select } from "../ds";
import { CHALLENGES } from "../data/demo";
import { CATEGORIES, SORTS, TIERS } from "../data/reference";

const PER_PAGE = 12;
const STATUSES = [
  { value: "all", label: "All" },
  { value: "live", label: "Live" },
  { value: "closed", label: "Closed" },
];

export function DiscoverPage() {
  const [params, setParams] = useSearchParams();
  const page = Math.max(1, Number(params.get("page") ?? 1) || 1);
  const tier = params.get("tier") ?? "all";
  const category = params.get("category") ?? "all";
  const status = params.get("status") ?? "all";
  const sort = params.get("sort") ?? "deadline.asc";
  const q = params.get("q") ?? "";
  const [draft, setDraft] = useState(q);

  const set = (key: string, value: string, fallback: string) =>
    setParams((p) => {
      const n = new URLSearchParams(p);
      if (value === fallback || value === "") n.delete(key);
      else n.set(key, value);
      if (key !== "page") n.delete("page");
      return n;
    });

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (draft.trim() !== q) set("q", draft.trim(), "");
    }, 300);
    return () => window.clearTimeout(t);
  });

  const filtered = useMemo(() => {
    const items = CHALLENGES.filter(
      (c) =>
        (tier === "all" || c.tier === tier) &&
        (category === "all" || c.category === category) &&
        (status === "all" || c.status === status) &&
        (!q || (c.title ?? "").toLowerCase().includes(q.toLowerCase())),
    );
    const far = Number.MAX_SAFE_INTEGER;
    const closed = (c: (typeof items)[number]) => (c.status === "closed" || (c.deadline !== null && Date.parse(c.deadline) < Date.now()) ? 1 : 0);
    return [...items].sort((a, b) =>
      closed(a) - closed(b) ||
      (sort === "rewardPool.desc"
        ? (b.rewardPool ?? 0) - (a.rewardPool ?? 0)
        : sort === "createdAt.desc"
          ? b.createdAt.localeCompare(a.createdAt)
          : (a.deadline ? Date.parse(a.deadline) : far) - (b.deadline ? Date.parse(b.deadline) : far)),
    );
  }, [tier, category, status, sort, q]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const hasFilters = tier !== "all" || category !== "all" || status !== "all" || q.length > 0;

  return (
    <div className="flex-1 space-y-6 p-6">
      <PageHeader title="Discover challenges" description="Browse every live brief. Filter by type, category, or search the title." />
      <div className="flex flex-wrap items-center gap-2">
        <SearchInput value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Search by title…" aria-label="Search by title" />
        <Select aria-label="Status" className="w-[130px]" value={status} onChange={(e) => set("status", e.target.value, "all")} options={STATUSES} />
        <Select aria-label="Tier" className="w-[160px]" value={tier} onChange={(e) => set("tier", e.target.value, "all")} options={TIERS} />
        <Select aria-label="Category" className="w-[200px]" value={category} onChange={(e) => set("category", e.target.value, "all")} options={CATEGORIES} />
        <Select aria-label="Sort" className="w-[180px]" value={sort} onChange={(e) => set("sort", e.target.value, "deadline.asc")} options={SORTS} />
        <div className="ml-auto flex items-center gap-2 type-body-small text-fg3">
          <span>
            {filtered.length} brief{filtered.length === 1 ? "" : "s"}
          </span>
          {hasFilters ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setDraft("");
                setParams(new URLSearchParams(sort === "deadline.asc" ? {} : { sort }));
              }}
            >
              Clear filters
            </Button>
          ) : null}
        </div>
      </div>
      {visible.length === 0 ? (
        <EmptyState
          title={hasFilters ? "No briefs match these filters" : "No challenges yet"}
          body={hasFilters ? "Try widening your search or clearing some filters." : "New challenges land every week. Check back soon."}
        />
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((c) => (
              <ChallengeCard key={c.id} c={c} href={`/dashboard/challenges/${c.id}`} />
            ))}
          </div>
          {pageCount > 1 ? <Pagination page={page} pageCount={pageCount} onPageChange={(p) => set("page", String(p), "1")} /> : null}
        </>
      )}
    </div>
  );
}
