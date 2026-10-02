import { createContext, forwardRef, useContext, useEffect, useRef, useState, type AnchorHTMLAttributes } from "react";
import { Link as RouterLink, Outlet, useLocation, useNavigate } from "react-router";
import { Compass, FileText, UserRound, Wallet } from "lucide-react";
import { AppHeader, LinkProvider, Sidebar, ToastProvider, type LinkLike, type NavItem } from "../ds";
import { USER } from "../data/demo";

export const AppLink: LinkLike = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }>(function AppLink({ href, ...props }, ref) {
  return /^(https?:|#)/.test(href) ? <a ref={ref} href={href} {...props} /> : <RouterLink ref={ref} to={href} {...props} />;
});

const UserContext = createContext({ user: USER, setName: (_: string) => {} });
export const useUser = () => useContext(UserContext);

const NAV: NavItem[] = [
  { label: "Discover", href: "/dashboard/challenges", icon: Compass },
  { label: "My submissions", href: "/dashboard/submissions", icon: FileText },
  { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
  { label: "Profile", href: "/dashboard/profile", icon: UserRound },
];

export function DashboardLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(USER);
  // Between md and lg the full sidebar would take a third of the width, so it starts as an icon rail.
  const [collapsed, setCollapsed] = useState(() => !window.matchMedia("(min-width: 1024px)").matches);
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawer = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  useEffect(() => setMobileOpen(false), [pathname]);
  const toggle = () => {
    if (window.matchMedia("(min-width: 768px)").matches) setCollapsed((c) => !c);
    else {
      opener.current = document.activeElement as HTMLElement;
      setMobileOpen((o) => !o);
    }
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const el = drawer.current;
    const focusables = () => Array.from(el?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]):not([tabindex="-1"])') ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
      if (e.key !== "Tab") return;
      const f = focusables();
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      opener.current?.focus();
    };
  }, [mobileOpen]);

  return (
    <LinkProvider value={AppLink}>
      <UserContext.Provider value={{ user, setName: (name) => setUser((u) => ({ ...u, name })) }}>
      <ToastProvider>
        <div className="flex min-h-svh bg-card">
          <div className="sticky top-0 hidden h-svh md:block">
            <Sidebar items={NAV} activeHref={pathname} user={user} collapsed={collapsed} />
          </div>
          {mobileOpen ? (
            <div ref={drawer} className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" aria-label="Sidebar">
              <button type="button" aria-label="Close" tabIndex={-1} className="absolute inset-0 bg-fg/50" onClick={() => setMobileOpen(false)} />
              <Sidebar items={NAV} activeHref={pathname} user={user} className="relative h-full" onNavigate={() => setMobileOpen(false)} />
            </div>
          ) : null}
          <div className="flex min-w-0 flex-1 flex-col bg-bg/30">
            <AppHeader onToggleSidebar={toggle} user={user} onSignOut={() => navigate("/signed-out")} notice="Sample data" />
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
        </div>
      </ToastProvider>
      </UserContext.Provider>
    </LinkProvider>
  );
}
