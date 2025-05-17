<template>
  <div class="home-container">
    <div class="masonry">
      <!-- Left column -->
      <div class="masonry-col">
        <div
            v-for="item in leftItems"
            :key="item.slug"
            class="masonry-item"
            @click="goToDetail(item.slug)"
        >
          <!-- Video or image -->
          <video
              v-if="isVideo(item.image)"
              :src="`/media${item.image}`"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
          />
          <img
              v-else
              :src="`/media${item.image}`"
              alt=""
          />

          <!-- Text content -->
          <div class="info">
            <h3 class="title">{{ item.title }}</h3>
            <p class="desc">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- Right column -->
      <div class="masonry-col">
        <div
            v-for="item in rightItems"
            :key="item.slug"
            class="masonry-item"
            @click="goToDetail(item.slug)"
        >
          <!-- Video or image -->
          <video
              v-if="isVideo(item.image)"
              :src="`/media${item.image}`"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
          />
          <img
              v-else
              :src="`/media${item.image}`"
              alt=""
          />

          <!-- Text content -->
          <div class="info">
            <h3 class="title">{{ item.title }}</h3>
            <p class="desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePortfolioItems } from '~/composables/usePortfolioItems'

/** Determine if the given file is a video (mp4/webm) */
function isVideo(file: string) {
  return /\.(mp4|webm)$/i.test(file)
}

const router = useRouter()
const { items } = usePortfolioItems()

function goToDetail(slug: string) {
  router.push(`/work/${slug}`)
}

// Split items: even indices => left, odd => right
const leftItems = computed(() => items.filter((_, i) => i % 2 === 0))
const rightItems = computed(() => items.filter((_, i) => i % 2 === 1))
</script>

<style lang="scss">
.home-container {
  padding: 2rem;
  text-align: center;
}

/* Masonry wrapper: 2 columns side by side */
.masonry {
  display: flex;
  gap: 1rem; /* space between columns */

  /* If you want them stacked on small screens, break to 1 col: */
  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.masonry-col {
  flex: 1;               /* each column expands equally */
  display: flex;
  flex-direction: column; /* stack items in a vertical flow */
  gap: 1rem;             /* spacing between items in each column */
}

/* The item card styling can stay the same as before */
.masonry-item {
  background: var(--card);
  color: var(--text);
  border-radius: 6px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  video,
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  .info {
    padding: 1rem;
    text-align: center;
    max-width: 90%;
    margin: 0 auto;

    .title {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: var(--text);
    }
    .desc {
      font-size: 0.875rem;
      color: var(--text);
      line-height: 1.4;
    }
  }
}
</style>
