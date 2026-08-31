# WAW Play

WAW Play is the discovery and community platform for WAW's games and fictional worlds.
It is where players find worlds and games, follow the content they care about, play,
watch short-form video from the WAW universe, compare rankings, talk to other players,
and manage their player profile. Individual WAW games keep their own gameplay logic —
WAW Play owns the platform-level relationship between a player and everything WAW makes:
identity, follows, favorites, achievements, rankings, activity, and communication.

## Core sections

- **Library** — everything a player can browse: games, worlds, owned/joined content,
  followed content, favorites, recently played, and undiscovered content, with search,
  filtering, and sorting.
- **World** — a universe profile page. A world groups games, comics, books, videos,
  characters, news, and other content types under one identity; players can follow,
  favorite, and browse it.
- **Game** — a game profile page. A game belongs to a world but also stands on its own:
  info, media, rules, play/launch action, player progress, achievements, rankings, and
  discussion. Gameplay itself lives outside WAW Play; WAW Play tracks the platform-level
  player↔game relationship.
- **Messenger / Chat** — the communication center: private and group conversations,
  community/game/world discussions, comments, and mentions, opening into individual
  chat threads.
- **Ranks** — cross-platform leaderboards for games, worlds, players, and achievements,
  each linking back to the ranked entity's profile.
- **Profile** — a player's identity on the platform (public and private views), covering
  achievements, favorites, games, worlds, follows, friends, and activity.
- **Feed** — a vertical, short-form discovery feed surfacing video and content from
  across WAW worlds and games.

Library, Messenger, Feed, Ranks, and Profile are the primary navigation destinations;
World, Game, and Chat are contextual pages opened from them.

## Prerequisites

- Node `^22.22.3`, `^24.15.0`, or `>=26.0.0` with npm 8+ (Angular CLI 22 is provided locally via devDependencies)

## Getting Started

```sh
npm install   # install dependencies
npm start     # serve on http://localhost:4200 with proxy.conf.json
```

Environments live in `src/environments/`:

- `environment.ts` for local development (extends `environment.prod.ts`)
- `environment.prod.ts` for production builds (API URL, meta tags, languages, defaults)

## Scripts

- `npm start` — dev server with proxying to the configured API URL (`proxy.conf.json`)
- `npm run build` — production app build to `dist/`
- `npm run build:ngx-bos` — build the `@wawjs/ngx-bos` package with ng-packagr
- `npm run start:devkit` / `npm run build:devkit` — serve/build `projects/devkit` (serves on port 4310; routes: `/` showcase, `/uikit` component reference, `/translations` translation editor)

`devkit` is also directly reachable via the Angular CLI itself if you'd rather not go
through the npm script aliases, e.g. `ng serve devkit` or `ng build devkit`.

## Project Structure (key paths)

- `src/app/app.config.ts` — root providers (zoneless change detection, `ngxBosProvide`, WAW services, TinyMCE, router)
- `src/app/app.routes.ts` — route map for guest, user, and admin areas
- `src/app/app.formcomponents.ts` — project-specific dynamic form components
- `src/app/layouts/` — layout shells (topbar, sidebar, footer nav, user shell)
- `src/app/pages/` — routed pages per section (`library`, `world`, `game`, `messenger`,
  `chat`, `ranks`, `profile`, `feed`, plus `sign`/`settings`)
- `src/app/features/` — one folder per domain entity (see [CLAUDE.md](../CLAUDE.md) for
  the shared `<entity>.interface.ts` / `<entity>.data.ts` / `<entity>-icon` /
  `<entity>-short` / `<entity>-view` / `<entity>-form` structure), including the shared
  `share-profile` component reused across profile-like entities
- `src/environments/` — API / meta / language configuration
- `src/i18n/en.json` / `src/i18n/ua.json` — interface translations (served at `/i18n`), read by `@wawjs/ngx-translate`. Each file is an array of strings, one per language, positionally aligned — `en.json[i]` is both the English source text and the lookup key used everywhere in `src/app` (e.g. `translateService.translate('Settings')`), and `ua.json[i]` is its translation. `projects/devkit`'s `/translations` route is the tool for browsing/editing these.
- `projects/ngx-bos/` — the reusable `@wawjs/ngx-bos` package (users/auth, file upload, form adapters, guards, selectors, pages, and routes). See [projects/ngx-bos/README.md](projects/ngx-bos/README.md).
- `projects/devkit/` — merged showcase + uikit + translator app:
  - `src/app/pages/`, `src/app/layout/`, `src/app/shared/` (root routes, `/`) — a fuller example app (dashboards, users, ecommerce, projects, applications, account, authentication, error pages) built from real ngx-prime components with concrete demo data, showing what a complete app assembled from the component set looks like, not just isolated controls.
  - `src/app/uikit/` (routes under `/uikit`) — ngx-prime component reference (a demo page per component, across Form/Data/Button/Overlay/Navigation/Feedback/Layout/Media/Misc) plus composite "in-context" pages showing several components assembled together. Its `/uikit/design-lab` route is a live theme configurator — preset switcher, primary/surface color pickers, primitive border-radius scale, semantic focus-ring/form-field tokens, a representative component-token tree (Button/Card/Table), global config (ripple/inputVariant/darkModeSelector/RTL/zIndex), and a `pt` pass-through example — all wired to the real `@wawjs/css-prime-styled` / `@wawjs/ngx-prime` APIs, with live preview. Its topbar "Download Config" button exports a diff-only JSON of whatever you actually changed there, for handing to a human or an AI to apply in code. See [projects/devkit/ROADMAP.md](projects/devkit/ROADMAP.md) for the full component/feature inventory.
  - `src/app/translator/` (route `/translations`) — browses `src/i18n/en.json`/`ua.json` in a table (Table + Tag for missing/untranslated indicators, InputText to edit values), and downloads an updated JSON per language for you to drop back over the real file — it has no backend, so it can't write those files directly from the browser. v1 scope only: no new-language support, machine translation, or pluralization tooling.
- `projects/devkit/ROADMAP.md` — status and design notes for the uikit-derived component reference, if you want the "why", not just the "what".

## Development Notes

- Components are standalone and signals-first; favor `computed` / `signal` / `effect`. Angular 22 uses OnPush by default, so do not set `changeDetection` explicitly.
- WAW services power guards, CRUD helpers, store/http access, and meta tags. Update `environment.meta` when changing branding.
- Dynamic form templates must be registered through `src/app/app.formcomponents.ts` so schemas can reference them by name.
- Reusable package APIs are imported from `@wawjs/ngx-bos`, never from package-internal source paths.

## Component Structure

Keep component classes consistent in this order:

1. Injections (via `inject()`)
2. Inputs / outputs / view queries
3. Variables (readonly/public first, then private)
4. Constructor (only when needed)
5. Lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.)
6. Functions (public, then private)

Private variables and functions start with an underscore (`_`).

## Contributing

1. Create a feature branch.
2. Keep changes aligned with the standalone + signals pattern.
3. Open a pull request for review.
