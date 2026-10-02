# iQLY web

Customer dashboard UI (Discover, My submissions, Wallet, Profile) built on the iQLY design system. Runs on sample data.

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # fails if tokens are out of sync with design-system/
```

`/design-system` renders every token and component live, with a version switcher.

## Design system is the source of truth

Figma file `eDc8PWheV2bcsZ4dRQni1M` → `design-system/versions/<v>/tokens.json` → `src/ds/tokens/*.css` (generated) → every component.

- Components in `src/ds` only use token utilities (`bg-primary`, `text-fg3`, `rounded-xl`, `shadow-md`, `type-body-small`). Tailwind's default palette is switched off, so an off-system colour fails to compile.
- To sync after a Figma change: run `design-system/figma-export.js` against the Figma file, paste the result over the current version's `tokens.json`, then `npm run tokens`. Every page updates at once.
- Spacing tokens must stay on the 4px grid; the generator refuses anything else.

## Versions

`npm run ds:release v2` freezes the current version: its tokens stay in `design-system/versions/v1`, its component code is copied to `src/ds-archive/v1`, and v2 becomes current. Archived versions stay viewable at `/design-system?v=v1`. In Figma, save a named version (File → Save to version history) with the same label.
