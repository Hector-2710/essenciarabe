# Essenciarabe

A premium catalog of Arabic-inspired fragrances — full bottles and decants — built with [Astro](https://astro.build). Minimalist, Apple-inspired design with glassmorphism, native view transitions, a persistent cart, and checkout over WhatsApp. No backend, no CMS, no client-side framework.

**Stack:** Astro 5 · TypeScript · Tailwind CSS v4 · nanostores

## 📸 Screenshots

| | |
| --- | --- |
| ![Home](public/web/1.png) | ![Product detail](public/web/2.png) |

## ✨ Key Features

- **Dual catalog, 46 products** — 9 full bottles and 37 decants, served from two Astro content collections. Nothing is hardcoded, so adding stock is a single file.
- **Persistent cart** — nanostores store mirrored to `localStorage`, so the cart survives reloads, navigation, and view transitions.
- **WhatsApp checkout** — the order is assembled client-side and handed off as a prefilled message to the store's number. Zero server, zero payment integration.
- **Native view transitions** — the product image is a shared element between card and detail page (`transition:name`), so navigation animates instead of cutting.
- **Static-first** — the site ships zero JavaScript except the cart and mobile menu. Every page is pre-rendered at build time.
- **Localized catalog** — all copy in Spanish, prices in CLP formatted with `es-CL` and no decimals.

## 🧰 Tech Stack

| Tool | Version | Role |
| --- | --- | --- |
| [Astro](https://astro.build) | ^5.17.1 | Static site generation, content collections, routing, view transitions |
| TypeScript | ^5.9.3 | Strict typing across components and content |
| [Tailwind CSS](https://tailwindcss.com) | ^4.1.18 | Styling, wired through the Vite plugin (no config file) |
| [nanostores](https://github.com/nanostores/nanostores) | ^1.1.0 | Cart state and drawer visibility |

## 🚀 Getting Started

Requires **Node.js 18+** and npm.

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:4321
npm run build     # build the static site to dist/
npm run preview   # serve the production build locally
npx astro check   # typecheck components and TypeScript
```

There is no test suite, linter, or formatter by design — `npm run build` (plus `npx astro check` when touching types) is how changes get verified.

## 📁 Project Structure

```
src/
├── components/        # Navbar, Cart drawer, PerfumeCard, TrustSignals
├── content/
│   ├── config.ts      # Collection schemas (shared by both collections)
│   ├── perfumes/      # Full-bottle products (markdown)
│   └── decants/       # Decant products (markdown)
├── layouts/
│   └── MainLayout.astro # Shell, nav, cart markup, cart/menu script
├── pages/
│   ├── index.astro    # Home + hardcoded featured product ids
│   ├── perfumes.astro # Perfumes listing
│   ├── decants.astro  # Decants listing
│   ├── [name].astro   # Dynamic detail route (id or name)
│   ├── articulos/     # Editorial article pages
│   ├── contact.astro
│   └── us.astro
├── store/
│   └── cartStore.ts   # Cart state, SSR-guarded localStorage persistence
├── styles/
│   └── global.css     # Design tokens (@theme) + shared component classes
└── assets/            # Bundled SVGs

public/
├── images/            # Product photography
├── notes/             # Fragrance-note imagery
├── web/               # README screenshots
└── favicon.*
```

## 🧩 How It Works

**Content is the catalog.** Each product is one markdown file in `src/content/perfumes/` or `src/content/decants/`, validated by the Zod schema in `src/content/config.ts`:

```yaml
---
id: decant-asad
name: Asad
brand: Lattafa
price: 12000
image: /images/asad.jpg
description: A warm, sweet opening over a woody base.
---
```

`id` is the real primary key — it must be unique across both collections and prefixed `perfume-` or `decant-`. It is also the view-transition name and the cart key, so changing it after launch breaks existing shared-element animations and saved carts. Note that `name` is *not* unique: a scent can exist as both a decant and a full bottle, so never key logic off it.

**The cart is one delegated listener.** `MainLayout.astro` owns a single script that re-initializes on `astro:page-load` and delegates all `.add-to-cart-btn` clicks. Any element carrying that class plus `data-id`, `data-name`, `data-price`, `data-image`, and `data-brand` works — on cards and detail pages alike — so components never attach their own listeners and never double-fire.

**Styling has no config file.** Design tokens (Apple palette, Outfit font) and reusable classes (`.nav-link`, `.btn-apple`) live in `src/styles/global.css` under `@theme` and `@layer components`. That file is imported from `Navbar.astro` only.

## 🚀 Deployment

Deployed on [Vercel](https://vercel.com) with automatic deployments. The build is fully static (`npm run build` → `dist/`), so no environment variables or server configuration are needed. `dist/` and `.astro/` are gitignored.

## 🤝 Contributing

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`).


## 📄 License

Released under the [MIT License](LICENSE).

```
MIT License
Copyright (c) 2026 Essenciarabe

```

