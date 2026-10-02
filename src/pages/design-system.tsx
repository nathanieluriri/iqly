import { lazy, Suspense, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";
import { LinkProvider, Logo, PageHeader, Select, Spinner, ToastProvider } from "../ds";
import CurrentGallery from "../ds/Gallery";
import { DS_CURRENT, DS_VERSIONS } from "../ds/tokens/versions";
import { AppLink } from "../app/layout";

// Frozen versions live in src/ds-archive/<version>, created by `npm run ds:release`.
const archived = import.meta.glob<{ default: React.ComponentType<{ version: string }> }>("../ds-archive/*/Gallery.tsx");

export function DesignSystemPage() {
  const [params, setParams] = useSearchParams();
  const version = (DS_VERSIONS as readonly string[]).includes(params.get("v") ?? "") ? params.get("v")! : DS_CURRENT;
  useEffect(() => {
    document.title = `Design system ${version} · iQLY`;
  }, [version]);
  const Gallery = useMemo(() => {
    if (version === DS_CURRENT) return CurrentGallery;
    const loader = archived[`../ds-archive/${version}/Gallery.tsx`];
    return loader ? lazy(loader) : null;
  }, [version]);

  return (
    <LinkProvider value={AppLink}>
      <ToastProvider>
        <div className="min-h-svh bg-bg">
          <header className="flex h-16 items-center gap-4 border-b border-line bg-card px-4 sm:px-6">
            <AppLink href="/dashboard/challenges" aria-label="Back to the dashboard" className="rounded-md focus-visible:shadow-focus-ring">
              <Logo />
            </AppLink>
            <span className="hidden type-mono-eyebrow text-accent-strong sm:inline">Design system</span>
            <Select
              aria-label="Version"
              className="ml-auto w-44"
              value={version}
              onChange={(e) => setParams(e.target.value === DS_CURRENT ? {} : { v: e.target.value })}
              options={DS_VERSIONS.map((v) => ({ value: v, label: v === DS_CURRENT ? `${v} (current)` : `${v} (archived)` }))}
            />
          </header>
          <main data-ds={version} className="mx-auto max-w-6xl space-y-6 p-4 sm:p-6">
            <PageHeader title={`iQLY design system ${version}`} description="Every token and component the app uses, rendered live from code. Older versions render from their frozen copies." />
            {Gallery ? (
              <Suspense fallback={<Spinner />}>
                <Gallery version={version} />
              </Suspense>
            ) : (
              <p className="type-body-small text-fg3">No frozen components found for {version}.</p>
            )}
          </main>
        </div>
      </ToastProvider>
    </LinkProvider>
  );
}
