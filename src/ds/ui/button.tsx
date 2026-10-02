import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type ButtonVariant = "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
export type ButtonSize = "default" | "sm" | "icon" | "icon-sm";

const base =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap border transition-colors outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0";

const variants: Record<ButtonVariant, string> = {
  default: "border-transparent bg-primary text-primary-fg hover:bg-primary-hover focus-visible:border-line2 focus-visible:shadow-focus-ring",
  outline: "border-line bg-card text-fg hover:bg-panel focus-visible:border-line2 focus-visible:shadow-focus-ring",
  secondary: "border-transparent bg-secondary text-secondary-fg hover:bg-secondary-hover focus-visible:border-line2 focus-visible:shadow-focus-ring",
  ghost: "border-transparent text-fg hover:bg-panel focus-visible:border-line2 focus-visible:shadow-focus-ring",
  destructive: "border-transparent bg-err-wash text-err hover:bg-err-wash-hover focus-visible:border-err focus-visible:shadow-focus-ring-error",
  link: "border-transparent text-primary underline-offset-4 hover:underline focus-visible:border-line2 focus-visible:shadow-focus-ring",
};

const sizes: Record<ButtonSize, string> = {
  default: "h-8 gap-1.5 rounded-lg px-2.5 type-label-button",
  sm: "h-7 gap-1 rounded-md px-2.5 type-label-button-small",
  icon: "size-8 rounded-lg",
  "icon-sm": "size-7 rounded-md",
};

export function buttonClasses(variant: ButtonVariant = "default", size: ButtonSize = "default", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  variant = "default",
  size = "default",
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <button type={type} className={buttonClasses(variant, size, className)} {...props} />;
}
