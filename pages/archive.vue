<!-- pages/archive.vue -->
<template>
  <div class="home-container">
    <section class="allwork-section">
      <h2 class="section-title">Archive</h2>

      <p class="archive-note">
        Smaller projects, studies, and early experiments.
      </p>

      <div class="masonry">
        <!-- Left column -->
        <div class="masonry-col">
          <NuxtLink
              v-for="item in leftItems"
              :key="item.slug"
              :to="`/work/${item.slug}`"
              class="masonry-item"
              :aria-label="`Open project: ${item.title}`"
          >
            <video
                v-if="isVideo(item.image)"
                :src="`/media${item.image}`"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                aria-hidden="true"
            />
            <img
                v-else
                :src="`/media${item.image}`"
                :alt="item.title"
                loading="lazy"
                decoding="async"
            />

            <div class="info">
              <h3 class="title">{{ item.title }}</h3>

              <div v-if="item.course || item.completed" class="meta-row center">
                <span v-if="item.course" class="meta-pill">{{ item.course }}</span>
                <span v-if="item.completed" class="meta-pill">{{ item.completed }}</span>
              </div>

              <p class="desc">{{ item.description }}</p>
            </div>
          </NuxtLink>
        </div>

        <!-- Right column -->
        <div class="masonry-col">
          <NuxtLink
              v-for="item in rightItems"
              :key="item.slug"
              :to="`/work/${item.slug}`"
              class="masonry-item"
              :aria-label="`Open project: ${item.title}`"
          >
            <video
                v-if="isVideo(item.image)"
                :src="`/media${item.image}`"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                aria-hidden="true"
            />
            <img
                v-else
                :src="`/media${item.image}`"
                :alt="item.title"
                loading="lazy"
                decoding="async"
            />

            <div class="info">
              <h3 class="title">{{ item.title }}</h3>

              <div v-if="item.course || item.completed" class="meta-row center">
                <span v-if="item.course" class="meta-pill">{{ item.course }}</span>
                <span v-if="item.completed" class="meta-pill">{{ item.completed }}</span>
              </div>

              <p class="desc">{{ item.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="back-home">
        <NuxtLink to="/">← Back to home</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioItems } from '~/composables/usePortfolioItems'

function isVideo(file: string) {
  return /\.(mp4|webm)$/i.test(file)
}

const { items } = usePortfolioItems()

// Archived page shows only archived items.
// Extra guard: never show featured here, even if someone accidentally sets both.
const archivedItems = computed(() =>
    items.filter(i => i.archived && !i.featured)
)

const leftItems  = computed(() => archivedItems.value.filter((_, i) => i % 2 === 0))
const rightItems = computed(() => archivedItems.value.filter((_, i) => i % 2 === 1))
</script>

<style scoped lang="scss">
.archive-note {
  max-width: 65ch;
  margin: 0 auto 1.25rem;
  text-align: center;
  opacity: 0.85;
}

.back-home {
  margin-top: 1.5rem;
  text-align: center;
}
</style>