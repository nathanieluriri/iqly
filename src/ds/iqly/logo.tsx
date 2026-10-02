import { cn } from "../lib/cn";

// Official files from iqly.net, served unaltered from /public/brand.
export function Logo({ tone = "on-light", className }: { tone?: "on-light" | "on-dark"; className?: string }) {
  return <img src={tone === "on-dark" ? "/brand/iqly-logo-cream.svg" : "/brand/iqly-logo.svg"} alt="iQLY" draggable={false} className={cn("h-7 w-auto select-none", className)} />;
}

export function Logomark({ tone = "on-light", className }: { tone?: "on-light" | "on-dark"; className?: string }) {
  return <img src={tone === "on-dark" ? "/brand/iqly-logomark-cream.svg" : "/brand/iqly-logomark.svg"} alt="iQLY" draggable={false} className={cn("size-8 select-none", className)} />;
}
