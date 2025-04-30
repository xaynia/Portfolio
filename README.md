# 🎨 Portfolio

A single-page artist & game-dev portfolio built with **Nuxt 3**, **Vue 3**, and **SCSS**, deployed automatically to **Netlify**.  
It showcases:

* A JavaScript browser game (itch.io embed)
* Screenshots / GIFs of a Unity project
* A short demo video

---

## 🛠 Tech Stack

| Layer | Tool | Notes |
|-------|------|-------|
| Framework | **Nuxt 3** | File-based routing, hot-reload dev server, static site generation |
| UI Library | **Vue 3** (`.vue` files) | Reactive components |
| Styling | **SCSS** (compiled by Nuxt/Vite) | Variables, nesting, etc. |
| Package Manager | **npm** | Comes with Node.js |
| Hosting / CI CD | **Netlify** | Free tier, builds on every `git push` |

---

## 🚀 Quick Start (Local)

```bash
# clone the repo
git clone https://github.com/<your-user>/portfolio.git
cd portfolio

# install dependencies
npm install

# run dev server (http://localhost:3000)
npm run dev
