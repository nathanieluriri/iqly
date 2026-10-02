import { Card, CardContent, PageHeader, SubmissionCard } from "../ds";
import { SUBMISSIONS } from "../data/demo";

export function SubmissionsPage() {
  const items = [...SUBMISSIONS].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return (
    <div className="flex-1 space-y-6 p-6">
      <PageHeader title="My submissions" description="Everything you've sent. Tap one to see it in full." />
      {items.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center type-body-small text-fg3">No submissions yet. Find a brief that fits your perspective.</CardContent>
        </Card>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((s) => (
            <SubmissionCard key={s.id} s={s} href={`/dashboard/submissions/${s.id}`} />
          ))}
        </div>
      )}
    </div>
  );
}
