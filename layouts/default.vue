<!-- layouts/default.vue -->
<template>
  <div>
    <header class="site-header">
      <nav class="nav-container">
        <!-- Site Logo / Title -->
        <h1 class="logo">Acacia Williams</h1>

        <!-- Navigation Links -->
        <ul class="nav-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <!-- External links -->
          <li>
            <a href="https://github.com/xaynia" target="_blank" rel="noopener">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@9/icons/github.svg" class="icon" alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/YOUR_DISCORD" target="_blank" rel="noopener">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@9/icons/discord.svg" class="icon" alt="Discord" />
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Page Content goes here -->
    <main>
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <p>© 2025 Acacia Williams — All rights reserved</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@use '/assets/scss/variables' as *;

.site-header {
  background-color: $primary;
  color: white;
  padding: 1rem 2rem;

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
      color: white;
      text-decoration: none;
    }

    .icon {
      width: 24px;
      height: 24px;
      filter: invert(100%);
    }
  }
}

.site-footer {
  background-color: #333;
  color: #eee;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;

  p {
    font-size: 0.9rem;
  }
}
</style>
