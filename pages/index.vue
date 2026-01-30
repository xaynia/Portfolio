<template>
  <div class="home-container">

    <!-- ✅ FEATURED -->
    <section v-if="featuredItems.length" class="featured-section">
      <h2 class="section-title">Featured</h2>

      <div class="featured-grid">
        <div
            v-for="item in featuredItems"
            :key="item.slug"
            class="masonry-item featured-card"
            @click="goToDetail(item.slug)"
        >
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

          <div class="info">
            <h3 class="title">{{ item.title }}</h3>

            <div v-if="item.course || item.completed" class="meta-row center">
              <span v-if="item.course" class="meta-pill">{{ item.course }}</span>
              <span v-if="item.completed" class="meta-pill">{{ item.completed }}</span>
            </div>

            <p class="desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ✅ ALL WORK -->
    <section class="allwork-section">
      <h2 class="section-title">All Work</h2>

      <div class="masonry">
        <!-- Left column -->
        <div class="masonry-col">
          <div
              v-for="item in leftItems"
              :key="item.slug"
              class="masonry-item"
              @click="goToDetail(item.slug)"
          >
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

            <div class="info">
              <h3 class="title">{{ item.title }}</h3>

              <div v-if="item.course || item.completed" class="meta-row center">
                <span v-if="item.course" class="meta-pill">{{ item.course }}</span>
                <span v-if="item.completed" class="meta-pill">{{ item.completed }}</span>
              </div>

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

            <div class="info">
              <h3 class="title">{{ item.title }}</h3>

              <div v-if="item.course || item.completed" class="meta-row center">
                <span v-if="item.course" class="meta-pill">{{ item.course }}</span>
                <span v-if="item.completed" class="meta-pill">{{ item.completed }}</span>
              </div>

              <p class="desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePortfolioItems } from '~/composables/usePortfolioItems'

function isVideo(file: string) {
  return /\.(mp4|webm)$/i.test(file)
}

const router = useRouter()
const { items } = usePortfolioItems()

function goToDetail(slug: string) {
  router.push(`/work/${slug}`)
}

/** ✅ Featured first (sorted), then everything else below */
const featuredItems = computed(() =>
    [...items]
        .filter(i => i.featured)
        .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999))
)

// featured WILL appear in all work:
const nonFeaturedItems = computed(() => items)

// featured will NOT appear in all work:
// const nonFeaturedItems = computed(() => items.filter(i => !i.featured))

// Split non-featured items: even indices => left, odd => right
const leftItems = computed(() => nonFeaturedItems.value.filter((_, i) => i % 2 === 0))
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
