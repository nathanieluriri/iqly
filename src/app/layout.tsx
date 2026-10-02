import { forwardRef, useEffect, useState, type AnchorHTMLAttributes } from "react";
import { Link as RouterLink, Outlet, useLocation } from "react-router";
import { Compass, FileText, UserRound, Wallet } from "lucide-react";
import { AppHeader, LinkProvider, Sidebar, ToastProvider, type LinkLike, type NavItem } from "../ds";
import { USER } from "../data/demo";

export const AppLink: LinkLike = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }>(function AppLink({ href, ...props }, ref) {
  return /^(https?:|#)/.test(href) ? <a ref={ref} href={href} {...props} /> : <RouterLink ref={ref} to={href} {...props} />;
});

const NAV: NavItem[] = [
  { label: "Discover", href: "/dashboard/challenges", icon: Compass },
  { label: "My submissions", href: "/dashboard/submissions", icon: FileText },
  { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
  { label: "Profile", href: "/dashboard/profile", icon: UserRound },
];

export function DashboardLayout() {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => setMobileOpen(false), [pathname]);
  const toggle = () => (window.matchMedia("(min-width: 768px)").matches ? setCollapsed((c) => !c) : setMobileOpen((o) => !o));

  return (
    <LinkProvider value={AppLink}>
      <ToastProvider>
        <div className="flex min-h-svh bg-card">
          <div className="sticky top-0 hidden h-svh md:block">
            <Sidebar items={NAV} activeHref={pathname} user={USER} collapsed={collapsed} />
          </div>
          {mobileOpen ? (
            <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" aria-label="Sidebar">
              <button type="button" aria-label="Close" className="absolute inset-0 bg-fg/50" onClick={() => setMobileOpen(false)} />
              <Sidebar items={NAV} activeHref={pathname} user={USER} className="relative h-full" onNavigate={() => setMobileOpen(false)} />
            </div>
          ) : null}
          <div className="flex min-w-0 flex-1 flex-col bg-bg/30">
            <AppHeader onToggleSidebar={toggle} user={USER} onSignOut={() => {}} notice="Sample data" />
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
        </div>
      </ToastProvider>
    </LinkProvider>
  );
}
