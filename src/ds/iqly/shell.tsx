import { useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import { LogOut, PanelLeft } from "lucide-react";
import { cn } from "../lib/cn";
import { useLink } from "../lib/link";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Logo, Logomark } from "./logo";

export type NavItem = { label: string; href: string; icon: ComponentType<{ className?: string }> };

export function Sidebar({
  items,
  activeHref,
  user,
  collapsed = false,
  onNavigate,
  className,
}: {
  items: NavItem[];
  activeHref: string;
  user: { name: string };
  collapsed?: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  const Link = useLink();
  return (
    <aside className={cn("flex h-full flex-col border-r border-sidebar-border bg-sidebar text-sidebar-fg transition-[width]", collapsed ? "w-12" : "w-[280px]", className)}>
      <div className={cn("flex h-16 shrink-0 items-center border-b border-sidebar-border", collapsed ? "justify-center" : "px-4")}>
        <Link href="/dashboard/challenges" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus focus-visible:outline-solid" onClick={onNavigate}>
          {collapsed ? <Logomark tone="on-dark" /> : <Logo tone="on-dark" />}
        </Link>
      </div>
      <nav aria-label="Dashboard" className={cn("flex-1 pt-3", collapsed ? "px-0" : "px-2")}>
        <ul className={cn("flex flex-col gap-2", collapsed && "items-center")}>
          {items.map((it) => {
            const active = activeHref.startsWith(it.href);
            const Icon = it.icon;
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  aria-current={active ? "page" : undefined}
                  title={collapsed ? it.label : undefined}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-2 rounded-md transition-colors hover:bg-sidebar-accent focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus focus-visible:outline-solid",
                    collapsed ? "size-8 justify-center" : "h-11 p-2",
                    active ? "bg-sidebar-accent type-body-small-strong" : "type-body-small",
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  <span className={cn(collapsed && "sr-only")}>{it.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={cn("flex h-16 shrink-0 items-center gap-2 border-t border-sidebar-border", collapsed ? "justify-center px-1.5" : "px-3")}>
        <Avatar variant={collapsed ? "account-small" : "account"} initials={user.name.charAt(0).toUpperCase()} />
        {collapsed ? null : <p className="truncate type-body-small-strong">{user.name}</p>}
      </div>
    </aside>
  );
}

export function AppHeader({ onToggleSidebar, user, onSignOut, notice }: { onToggleSidebar: () => void; user: { name: string; email: string }; onSignOut: () => void; notice?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent) {
        if (e.key !== "Escape") return;
        setOpen(false);
        trigger.current?.focus();
      } else if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b border-line bg-card px-4">
      <Button variant="ghost" size="icon-sm" className="-ml-1" onClick={onToggleSidebar} aria-label="Toggle Sidebar">
        <PanelLeft />
      </Button>
      <div className="ml-auto flex items-center gap-4">
        {notice ? <Badge variant="neutral">{notice}</Badge> : null}
        <div ref={ref} className="relative">
          <button
            ref={trigger}
            type="button"
            aria-label="Account"
            aria-controls="account-panel"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="rounded-full outline-none focus-visible:shadow-focus-ring"
          >
            <Avatar initials={user.name.charAt(0).toUpperCase()} />
          </button>
          {open ? (
            <div id="account-panel" className="absolute right-0 mt-2 w-56 rounded-lg border border-line bg-card p-1 shadow-md">
              <div className="grid px-2 py-1.5">
                <span className="truncate type-body-small-strong text-fg">{user.name}</span>
                <span className="truncate type-meta-caption text-fg3">{user.email}</span>
              </div>
              <div className="-mx-1 my-1 h-px bg-line" />
              <button type="button" onClick={onSignOut} className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 type-body-small text-fg outline-none hover:bg-panel focus-visible:bg-panel">
                <LogOut aria-hidden className="size-4" />
                <span>Sign out</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
