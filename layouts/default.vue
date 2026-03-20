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
      <p>© 2026 Acacia Williams — All rights reserved</p>
      <button class="back-to-top" @click="scrollTop">↑ Back to top</button>
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

function toggle () {
  isDark.value = !isDark.value
}

function scrollTop () {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>


<style lang="scss">
@use '/assets/scss/variables' as *;
@use 'sass:map';

.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Fixed header with blur */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  color: var(--text);
  padding: 0 2.5rem;
  height: 56px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  .nav-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 0.95rem;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }

  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    li a {
      color: inherit;
      text-decoration: none;
      font-size: 0.78rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.6;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }

    .icon {
      width: 18px;
      height: 18px;
      filter: invert(0%);
      opacity: 0.5;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }

    .mode-btn {
      background: none;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      line-height: 1;
      opacity: 0.5;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
}

.dark .site-header {
  background: rgba(29, 29, 29, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

/* Slide header up when hidden */
.hidden {
  transform: translateY(-100%);
}

/* Reserve space for fixed header */
.header-spacer {
  height: 56px;
}

/* Footer */
.site-footer {
  border-top: 1px solid rgba(128, 128, 128, 0.12);
  background: transparent;
  color: var(--text);
  text-align: center;
  padding: 2rem 1rem;
  margin-top: auto;
  opacity: 0.4;

  p {
    font-size: 0.72rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .back-to-top {
    margin-top: 0.75rem;
    background: none;
    border: 1px solid var(--text);
    border-radius: 999px;
    padding: 0.25rem 0.75rem;
    color: var(--text);
    cursor: pointer;
    font-size: 0.68rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    opacity: 0.7;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
