import { useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "../lib/cn";

export function Tabs<T extends string>({
  value,
  onChange,
  items,
  children,
  className,
}: {
  value: T;
  onChange: (v: T) => void;
  items: { value: T; label: string }[];
  children: (active: T, panelProps: { id: string; role: "tabpanel"; "aria-labelledby": string; tabIndex: 0 }) => ReactNode;
  className?: string;
}) {
  const id = useId();
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const onKey = (e: KeyboardEvent, i: number) => {
    const n =
      e.key === "ArrowRight" ? (i + 1) % items.length : e.key === "ArrowLeft" ? (i - 1 + items.length) % items.length : e.key === "Home" ? 0 : e.key === "End" ? items.length - 1 : -1;
    if (n < 0) return;
    e.preventDefault();
    onChange(items[n].value);
    refs.current[n]?.focus();
  };
  return (
    <div className={cn("space-y-4", className)}>
      <div role="tablist" className="inline-flex h-9 w-fit items-center justify-center rounded-lg bg-panel p-[3px]">
        {items.map((it, i) => {
          const active = it.value === value;
          return (
            <button
              key={it.value}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`${id}-tab-${it.value}`}
              aria-selected={active}
              aria-controls={`${id}-panel`}
              tabIndex={active ? 0 : -1}
              onClick={() => onChange(it.value)}
              onKeyDown={(e) => onKey(e, i)}
              className={cn(
                "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap rounded-md border border-transparent px-2 py-1 type-label-button text-fg outline-none transition-shadow focus-visible:border-line2 focus-visible:shadow-focus-ring",
                active && "bg-card shadow-sm",
              )}
            >
              {it.label}
            </button>
          );
        })}
      </div>
      {children(value, { id: `${id}-panel`, role: "tabpanel", "aria-labelledby": `${id}-tab-${value}`, tabIndex: 0 })}
    </div>
  );
}
