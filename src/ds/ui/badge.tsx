import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info" | "accent" | "neutral";

const variants: Record<BadgeVariant, string> = {
  default: "border-transparent bg-primary text-primary-fg",
  secondary: "border-transparent bg-secondary text-secondary-fg",
  destructive: "border-transparent bg-err-wash text-err",
  outline: "border-line text-fg",
  success: "border-transparent bg-brand-soft text-brand",
  warning: "border-transparent bg-warn-soft text-warn",
  info: "border-transparent bg-info-soft text-info",
  accent: "border-transparent bg-accent-soft text-accent-strong",
  neutral: "border-transparent bg-panel text-fg3",
};

export function Badge({ variant = "default", className, ...props }: HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-md border px-2 py-0.5 type-label-badge [&_svg]:size-3",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
