import { cloneElement, isValidElement, useId, type ReactElement, type ReactNode } from "react";
import { cn } from "../lib/cn";

export function FormField({
  label,
  help,
  error,
  caps = false,
  children,
  className,
}: {
  label: ReactNode;
  help?: ReactNode;
  error?: ReactNode;
  caps?: boolean;
  children: ReactElement<Record<string, unknown>> | ReactNode;
  className?: string;
}) {
  const id = useId();
  const helpId = `${id}-help`;
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        id,
        "aria-describedby": help || error ? helpId : undefined,
        "aria-invalid": error ? true : undefined,
      })
    : children;
  return (
    <div className={cn(caps ? "space-y-1.5" : "space-y-2", className)}>
      <label htmlFor={id} className={cn("flex items-center gap-2", caps ? "type-label-field-caps text-fg3" : "type-label-field text-fg")}>
        {label}
      </label>
      {control}
      {error || help ? (
        <p id={helpId} className={cn("type-meta-caption", error ? "text-err" : "text-fg3")}>
          {error ?? help}
        </p>
      ) : null}
    </div>
  );
}
