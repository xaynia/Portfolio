<template>
  <div class="home-container">

    <!-- ✅ FEATURED -->
    <section v-if="featuredItems.length" class="featured-section">
      <h2 class="section-title">Featured</h2>

      <div class="featured-grid">
        <NuxtLink
            v-for="item in featuredItems"
            :key="item.slug"
            :to="`/work/${item.slug}`"
            class="masonry-item featured-card"
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
    </section>

    <!-- ✅ ALL WORK -->
    <section class="allwork-section">
      <h2 class="section-title">All Work</h2>

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

/** ✅ Featured first (sorted), then everything else below */
const featuredItems = computed(() =>
    [...items]
        .filter(i => i.featured)
        .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999))
)

// featured WILL appear in all work:
const nonFeaturedItems = computed(() => items)

// Split items: even indices => left, odd => right
const leftItems  = computed(() => nonFeaturedItems.value.filter((_, i) => i % 2 === 0))
const rightItems = computed(() => nonFeaturedItems.value.filter((_, i) => i % 2 === 1))
</script>

<style lang="scss">
.home-container {
  padding: 2rem;
}

/* Section titles */
.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 1rem;
}

/* ✅ Featured section */
.featured-section {
  margin-bottom: 2.5rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

/* Reuse your masonry card styling, but make featured subtly stand out */
.featured-card {
  outline: 1px solid var(--pill-border);
}

/* Clamp featured descriptions so they don’t become massive cards */
.featured-card .desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Masonry wrapper: 2 columns side by side */
.masonry {
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.masonry-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* IMPORTANT: masonry-item is now a NuxtLink (<a>) but should look identical */
.masonry-item {
  display: block;              /* anchors are inline by default */
  text-decoration: none;
  color: inherit;

  background: var(--card);
  border-radius: 6px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  &:focus-visible {
    outline: 2px solid var(--link);
    outline-offset: 3px;
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

    .meta-row {
      margin: 0.35rem 0 0.65rem;
    }

    .desc {
      font-size: 0.875rem;
      color: var(--text);
      line-height: 1.4;
    }
  }
}
</style>
