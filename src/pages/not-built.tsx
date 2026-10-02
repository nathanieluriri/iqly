import { ArrowLeft } from "lucide-react";
import { EmptyState, buttonClasses, useLink } from "../ds";

export function NotBuiltPage({ what, back, backLabel }: { what: string; back: string; backLabel: string }) {
  const Link = useLink();
  return (
    <div className="flex-1 space-y-6 p-6">
      <Link href={back} className={buttonClasses("ghost", "sm", "-ml-2")}>
        <ArrowLeft /> {backLabel}
      </Link>
      <EmptyState headingLevel="h1" title={`${what} is not in this build yet`} body="This prototype covers the four dashboard pages in design system v1." />
    </div>
  );
}
