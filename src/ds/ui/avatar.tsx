import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type AvatarVariant = "user" | "user-large" | "account" | "account-small" | "brand";

const variants: Record<AvatarVariant, string> = {
  user: "size-8 rounded-full border border-line bg-panel type-body-small text-fg3",
  "user-large": "size-10 rounded-full border border-line bg-panel type-body-small text-fg3",
  account: "size-10 rounded-lg bg-panel type-body-small text-fg",
  "account-small": "size-8 rounded-lg bg-panel type-body-small text-fg",
  brand: "size-5 rounded-full bg-brand-soft type-mono-avatar-initial text-brand",
};

export function Avatar({ variant = "user", initials, className, ...props }: HTMLAttributes<HTMLSpanElement> & { variant?: AvatarVariant; initials: string }) {
  return (
    <span aria-hidden className={cn("inline-flex shrink-0 select-none items-center justify-center", variants[variant], className)} {...props}>
      {initials}
    </span>
  );
}
