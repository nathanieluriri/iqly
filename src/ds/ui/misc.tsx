import { useId, useState, type HTMLAttributes, type ReactNode } from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "../lib/cn";

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-panel", className)} {...props} />;
}

export function Separator({ className }: { className?: string }) {
  return <div role="separator" className={cn("h-px w-full bg-line", className)} />;
}

export function Spinner({ className, label = "Loading" }: { className?: string; label?: string }) {
  return <LoaderCircle role="status" aria-label={label} className={cn("size-4 animate-spin text-fg3", className)} />;
}

export function Tooltip({ content, children, side = "top" }: { content: ReactNode; children: (describedBy: string) => ReactNode; side?: "top" | "bottom" }) {
  const id = useId();
  const [dismissed, setDismissed] = useState(false);
  return (
    <span
      className="group/tooltip relative inline-flex"
      onKeyDown={(e) => e.key === "Escape" && setDismissed(true)}
      onMouseLeave={() => setDismissed(false)}
      onBlur={() => setDismissed(false)}
    >
      {children(id)}
      <span
        id={id}
        role="tooltip"
        className={cn(
          "pointer-events-none absolute left-1/2 z-50 hidden w-max max-w-[min(16rem,calc(100vw-2rem))] -translate-x-1/2 rounded-md bg-fg px-3 py-1.5 type-meta-caption text-card group-focus-within/tooltip:block group-hover/tooltip:block",
          side === "top" ? "bottom-full mb-2" : "top-full mt-2",
          dismissed && "group-focus-within/tooltip:hidden group-hover/tooltip:hidden",
        )}
      >
        {content}
      </span>
    </span>
  );
}

export function ChipToggle({ selected, className, ...props }: HTMLAttributes<HTMLButtonElement> & { selected: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "rounded-full border px-3 py-1.5 type-body-small outline-none transition-colors focus-visible:shadow-focus-ring",
        selected ? "border-fg bg-fg text-card" : "border-line bg-card text-fg hover:bg-panel",
        className,
      )}
      {...props}
    />
  );
}
