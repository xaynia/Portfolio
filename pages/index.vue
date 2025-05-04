<template>
  <div class="home-container">
    <div class="masonry">
      <div
          v-for="item in items"
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

        <!-- Text content below the media -->
        <div class="info">
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style scoped lang="scss">
@use '/assets/scss/variables' as *;

.home-container {
  padding: 2rem;
  text-align: center;
  /* Optional global font for a “nice” look:
     font-family: 'Inter', sans-serif;
  */
}

/* Masonry columns approach */
.masonry {
  column-count: 2;
  column-gap: 1rem;

  /* for responsiveness */
  @media (max-width: 1000px) {
    column-count: 2;
  }
  @media (max-width: 600px) {
    column-count: 1;
  }
}

.masonry-item {
  /* Each item is an inline-block “card” in a column */
  display: inline-block;
  width: 100%;
  margin: 0 0 1rem;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;

  /* Subtle card hover effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* The video or image up top */
  video,
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  .info {
    padding: 1rem;

    .title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: $dark; /* or #333 if you like */
    }

    .desc {
      font-size: 0.875rem;
      color: #555;
      line-height: 1.4;
    }
  }
}
</style>
