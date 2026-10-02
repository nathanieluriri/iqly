import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { cn } from "../lib/cn";
import { fieldClasses } from "./input";
import type { Option } from "./select";

export function Combobox({
  options,
  value,
  onChange,
  placeholder,
  searchPlaceholder,
  emptyText,
  className,
  id,
  ...aria
}: {
  options: readonly Option[];
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  searchPlaceholder: string;
  emptyText: string;
  className?: string;
  id?: string;
  "aria-describedby"?: string;
}) {
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? options.filter((o) => o.label.toLowerCase().includes(q)) : options;
  }, [options, query]);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  useEffect(() => {
    document.getElementById(`${listId}-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active, listId]);

  const pick = (v: string) => {
    onChange(v);
    setOpen(false);
    setQuery("");
    trigger.current?.focus();
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") setActive((a) => Math.min(a + 1, matches.length - 1));
    else if (e.key === "ArrowUp") setActive((a) => Math.max(a - 1, 0));
    else if (e.key === "Enter" && matches[active]) pick(matches[active].value);
    else if (e.key === "Escape") {
      setOpen(false);
      trigger.current?.focus();
    } else return;
    e.preventDefault();
  };

  return (
    <div ref={root} className={cn("relative", className)}>
      <button
        ref={trigger}
        id={id}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-haspopup="listbox"
        {...aria}
        onClick={() => {
          setOpen((o) => !o);
          setActive(0);
        }}
        className={cn(fieldClasses, "flex items-center justify-between gap-1.5 text-left", selected ? "text-fg" : "text-fg3")}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <ChevronDown aria-hidden className="size-4 shrink-0 text-fg3" />
      </button>
      {open ? (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-line bg-card shadow-md">
          <div className="flex items-center gap-2 border-b border-line px-2.5">
            <Search aria-hidden className="size-4 shrink-0 text-fg3" />
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={onKey}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              aria-controls={listId}
              aria-activedescendant={matches[active] ? `${listId}-${active}` : undefined}
              className="h-9 w-full bg-transparent type-body-small text-fg outline-none placeholder:text-fg3"
            />
          </div>
          <ul id={listId} role="listbox" className="max-h-64 overflow-y-auto p-1">
            {matches.length === 0 ? (
              <li className="py-6 text-center type-body-small text-fg3">{emptyText}</li>
            ) : (
              matches.map((o, i) => (
                <li
                  key={o.value}
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={o.value === value}
                  onMouseEnter={() => setActive(i)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => pick(o.value)}
                  className={cn("flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 type-body-small text-fg", i === active && "bg-panel")}
                >
                  <Check aria-hidden className={cn("size-4 shrink-0", o.value === value ? "text-fg" : "text-transparent")} />
                  <span className="truncate">{o.label}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
