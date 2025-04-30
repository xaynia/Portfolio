<template>
  <div class="home-container">
    <h2>Welcome to My Portfolio</h2>
    <p>Hover over an item to see its name. Click to learn more.</p>

    <div class="grid">
      <div
          v-for="item in items"
          :key="item.slug"
          class="grid-item"
          @click="goToDetail(item.slug)"
      >
        <img :src="item.image" :alt="item.title" />
        <div class="overlay">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { usePortfolioItems } from '~/composables/usePortfolioItems'

const router = useRouter()
const { items } = usePortfolioItems()

function goToDetail(slug: string) {
  router.push(`/work/${slug}`)
}
</script>

<style scoped lang="scss">
@use '/assets/scss/variables' as *;

.home-container {
  padding: 2rem;
  text-align: center;

  p {
    margin-bottom: 1.5rem;
    color: $dark;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.grid-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }

  &:hover .overlay {
    opacity: 1;
  }
}
</style>
