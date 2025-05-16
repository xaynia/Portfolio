<template>
  <div class="layout-wrapper">
    <!-- Fixed Header -->
    <header :class="['site-header', { hidden: isHidden }]">
      <nav class="nav-container">
        <h1>
          <NuxtLink to="/" class="logo">Acacia Williams</NuxtLink>
        </h1>
        <ul class="nav-links">
          <li><NuxtLink to="/about">About</NuxtLink></li>
<!--          <li><NuxtLink to="/contact">Contact</NuxtLink></li>-->
          <li><NuxtLink to="/cv">CV</NuxtLink></li>
          <li>
            <a href="https://github.com/xaynia" target="_blank" rel="noopener">
              <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@9/icons/github.svg"
                  class="icon"
                  alt="Github"
              />
            </a>
          </li>
          <li>
            <a href="https://discord.com/users/329761406817796097" target="_blank" rel="noopener">
              <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@9/icons/discord.svg"
                  class="icon"
                  alt="Discord"
              />
            </a>
          </li>
          <!--toggle button mode switch-->
          <li>
            <button class="mode-btn" @click="toggle">
              <span v-if="isDark" aria-label="Switch to light mode">🌙</span>
              <span v-else   aria-label="Switch to dark mode">☀️</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Spacer so main content doesn’t hide behind the fixed header -->
    <div class="header-spacer" />

    <!-- Main content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <p>© 2025 Acacia Williams — All rights reserved</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

/* ── header hide on scroll ─────────────────────────────── */
const isHidden = ref(false)
let lastScrollY = 0
function handleScroll () {
  const y = window.scrollY
  isHidden.value = y > lastScrollY && y > 50
  lastScrollY = y
}
onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

/* ── day / night toggle (client-only) ───────────────────── */
const STORAGE_KEY = 'prefers-dark'
const isDark      = ref(false)

onMounted(() => {
  const saved   = localStorage.getItem(STORAGE_KEY)
  const system  = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value  = saved !== null ? saved === 'true' : system

  watch(isDark, val => {
    document.documentElement.classList.toggle('dark', val)
    localStorage.setItem(STORAGE_KEY, String(val))
  }, { immediate: true })
})

function toggle () { isDark.value = !isDark.value }
</script>


<style scoped lang="scss">
@use '/assets/scss/variables' as *;

.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Fixed, semi-transparent header */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.85);
  color: #333;
  padding: 1rem 2rem;
  transition: transform 0.3s ease;

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Logo link as home */
  .logo {
    font-size: 1.5rem;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;

    li a {
      color: inherit;
      text-decoration: none;
    }

    .icon {
      width: 24px;
      height: 24px;
      filter: invert(0%);
    }

      /* ADD ▸ button style */
    .mode-btn {
      background: none;
      border: none;
      font-size: 1.3rem;
      cursor: pointer;
      line-height: 1;
    }
  }
}

//  dark theme overrides
:deep(html.dark) {
  body         { background: map-get($colors-dark, bg); color: map-get($colors-dark, text); }
  .site-header { background-color: rgba(34,34,34,.85); color: #eaeaea; }
  .site-footer { background: #111; color: #ccc; }
  .icon        { filter: invert(90%); }
}

/* Slide header up when hidden */
.hidden {
  transform: translateY(-100%);
}

/* Reserve space for fixed header */
.header-spacer {
  height: 64px;
}

/* Footer stuck to bottom */
.site-footer {
  background-color: #333;
  color: #eee;
  text-align: center;
  padding: 1rem;
  margin-top: auto;

  p {
    font-size: 0.9rem;
  }
}
</style>
