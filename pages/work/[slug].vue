<!-- pages/work/[slug].vue (template for each portfolio work page)-->
<template>
  <div class="detail-container" v-if="item">
    <h2>{{ item.title }}</h2>
    <p>{{ item.description }}</p>

    <!-- If item has an iframeUrl (like itch.io embed) -->
    <div v-if="item.iframeUrl" class="iframe-wrapper">
      <iframe
          :src="item.iframeUrl"
          width="600"
          height="400"
          frameborder="0"
          allowfullscreen
      />
    </div>

    <!-- Screenshots (if we have an array of strings) -->
    <div v-if="item.screenshots" class="screenshots">
      <h3>Screenshots / Media</h3>
      <div class="screenshot-grid">
        <img
            v-for="(shot, idx) in item.screenshots"
            :key="idx"
            :src="shot"
            :alt="item.title"
        />
      </div>
    </div>
  </div>

  <div v-else>
    <p>Item not found.</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePortfolioItems } from '~/composables/usePortfolioItems'

const route = useRoute()
const slug = route.params.slug as string

const { items } = usePortfolioItems()
const item = items.find(i => i.slug === slug)
</script>

<style scoped lang="scss">
.detail-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  .iframe-wrapper {
    margin: 1rem 0;
  }

  .screenshots {
    margin-top: 2rem;

    .screenshot-grid {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      img {
        width: 200px;
        max-height: 150px;
        object-fit: cover;
      }
    }
  }
}
</style>
