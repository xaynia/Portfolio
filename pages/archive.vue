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
            <div class="img-wrap">
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
            </div>

            <div class="info">
              <h3 class="title">{{ item.title }}</h3>

              <div v-if="shortEngine(item.engine) || item.completed" class="card-meta">
                <span v-if="shortEngine(item.engine)" class="card-meta-tag">{{ shortEngine(item.engine) }}</span>
                <span v-if="shortEngine(item.engine) && item.completed" class="card-meta-sep">·</span>
                <span v-if="item.completed" class="card-meta-tag">{{ item.completed }}</span>
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
            <div class="img-wrap">
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
            </div>

            <div class="info">
              <h3 class="title">{{ item.title }}</h3>

              <div v-if="shortEngine(item.engine) || item.completed" class="card-meta">
                <span v-if="shortEngine(item.engine)" class="card-meta-tag">{{ shortEngine(item.engine) }}</span>
                <span v-if="shortEngine(item.engine) && item.completed" class="card-meta-sep">·</span>
                <span v-if="item.completed" class="card-meta-tag">{{ item.completed }}</span>
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
import { useReveal } from '~/composables/useReveal'

useReveal()

function isVideo(file: string) {
  return /\.(mp4|webm)$/i.test(file)
}

function shortEngine(engine?: string) {
  if (!engine) return ''
  return engine.split(/[;,(]/)[0].trim()
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