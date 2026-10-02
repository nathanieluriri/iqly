import { forwardRef, type InputHTMLAttributes } from "react";
import { Search } from "lucide-react";
import { cn } from "../lib/cn";

export const fieldClasses =
  "h-8 w-full min-w-0 rounded-lg border border-line bg-transparent px-2.5 py-1 type-body-small outline-none transition-colors placeholder:text-fg3 focus-visible:border-line2 focus-visible:shadow-focus-ring aria-invalid:border-err aria-invalid:shadow-focus-ring-error disabled:pointer-events-none disabled:bg-panel disabled:opacity-50";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn(fieldClasses, "text-fg", className)} {...props} />;
});

export function SearchInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={cn("relative w-full sm:w-72", className)}>
      <Search aria-hidden className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-fg3" />
      <input type="search" className={cn(fieldClasses, "pl-8 text-fg")} {...props} />
    </div>
  );
}
