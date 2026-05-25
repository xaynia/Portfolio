# Portfolio

A responsive, dark-mode–ready portfolio for games, interactive art, and short
films – built with **Nuxt 3 (+ Vite)**, **Vue 3**, and **SCSS** and deployed
automatically to **Netlify**.

| Live Site | Light/Dark Toggle | PDF viewer | Video & Game embeds |
|-----------|------------------|------------|---------------------|
| <https://acacia-portfolio.netlify.app> | ✅ | ✅ | ✅ |

---

## ✨ Features

| Category | Detail |
|----------|--------|
| Media types | • Embedded WebGL / HTML5 games (local or itch.io)  <br>• Self-hosted MP4 / WebM videos  <br>• PDF sheets & reports with in-page reader  <br>• JPG / PNG / GIF / sprite thumbnails |
| Light-box | Custom overlay with keyboard **← → Esc** navigation, loops video thumbs, lazy-loads full files |
| Theme      | One-click **light ↔ dark** (CSS-variable palette) stored per session |
| Layout     | Masonry home grid → individual `/work/[slug]` pages with responsive iframes and per-project aspect ratios |
| Content    | All projects declared in **`/composables/usePortfolioItems.ts`** – add or edit items in one JSON-like array |
| Tooling    | Auto-generated routes, HMR, Type-safe components, Netlify CI/CD |

---

## 🛠 Tech Stack

| Layer             | Tool / Library                              | Notes                                            |
|-------------------|---------------------------------------------|--------------------------------------------------|
| Framework         | **Nuxt 3**                                  | File-based routing & static generation           |
| UI Runtime        | **Vue 3** (Composition API)                 | Single-file components                          |
| Styling           | **SCSS** + CSS variables                    | Global `theme.scss` + component-scoped styles    |
| Light-box module  | **nuxt-easy-lightbox**                      | Lightweight viewer                               |
| Markdown render   | **markdown-it**                             | Renders long descriptions & credit blocks        |
| Package manager   | **npm**                                     | Node 18+                                         |
| CI / Hosting      | **Netlify**                                 | Free tier, preview deploys on every push         |

---
