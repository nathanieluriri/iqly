import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/cn";
import { fieldClasses } from "./input";

export type Option = { value: string; label: string };

export function Select({
  options,
  placeholder,
  className,
  value,
  ...props
}: Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> & { options: readonly Option[]; placeholder?: string }) {
  const empty = value === "" || value === undefined;
  return (
    <div className={cn("relative", className)}>
      <select
        value={value ?? ""}
        className={cn(fieldClasses, "cursor-pointer appearance-none pr-8", empty && placeholder ? "text-fg3" : "text-fg")}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((o) => (
          <option key={o.value} value={o.value} className="text-fg">
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-fg3" />
    </div>
  );
}
