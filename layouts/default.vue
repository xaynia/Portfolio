<template>
  <div class="layout-wrapper">
    <!-- Fixed Header -->
    <header :class="['site-header', { hidden: isHidden }]">
      <nav class="nav-container">
        <h1 class="logo">Acacia Williams</h1>
        <ul class="nav-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
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
            <a href="https://discord.gg/YOUR_DISCORD" target="_blank" rel="noopener">
              <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@9/icons/discord.svg"
                  class="icon"
                  alt="Discord"
              />
            </a>
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

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isHidden = ref(false)
let lastScrollY = 0

function handleScroll() {
  const currentScrollY = window.scrollY
  // If scrolling down and passed 50px, hide header
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    isHidden.value = true
  } else {
    // Scrolling up or near top, show header
    isHidden.value = false
  }
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<!--
  Note:
  - Using un-scoped or global classes for layout typically works better,
    because you often want these layout rules to apply site-wide.
  - If you prefer SCSS variables (e.g. $primary, etc.), adapt the color lines.
-->
<style scoped lang="scss">
.layout-wrapper {
  /* Make the layout fill the full vertical space, ensuring footer sticks at bottom */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Fixed, transparent header that slides up and down */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* so it stays above content */
  background-color: rgba(255, 255, 255, 0.85);
  color: #333;
  padding: 1rem 2rem;
  transition: transform 0.3s ease;

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.5rem;
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
  }
}

/* Slide the header upward (hidden) */
.hidden {
  transform: translateY(-100%);
}

/* Push main content below the fixed header (set this to header’s height) */
.header-spacer {
  height: 64px;
}

/* Black footer always at bottom, spanning full width */
.site-footer {
  background-color: #333;
  color: #eee;
  text-align: center;
  padding: 1rem;
  margin-top: auto; /* Force it to stick to bottom of layout-wrapper */

  p {
    font-size: 0.9rem;
  }
}
</style>
