<template>
  <div class="home-container">

    <!-- ✅ FEATURED -->
    <section v-if="featuredItems.length" class="featured-section">
      <h2 class="section-title">Featured</h2>

      <div class="featured-carousel">
        <button
            v-if="featuredItems.length > 1"
            class="featured-nav prev"
            type="button"
            aria-label="Previous featured project"
            @click.stop="prevFeatured"
        >
          ‹
        </button>

        <div class="featured-viewport">
          <div
              class="featured-track"
              :style="{ transform: `translateX(-${featuredIndex * 100}%)` }"
          >
            <NuxtLink
                v-for="item in featuredItems"
                :key="item.slug"
                :to="`/work/${item.slug}`"
                class="masonry-item featured-card featured-slide"
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

        <button
            v-if="featuredItems.length > 1"
            class="featured-nav next"
            type="button"
            aria-label="Next featured project"
            @click.stop="nextFeatured"
        >
          ›
        </button>

        <div v-if="featuredItems.length > 1" class="featured-dots">
          <button
              v-for="(item, idx) in featuredItems"
              :key="item.slug + '-dot'"
              type="button"
              class="featured-dot"
              :class="{ active: idx === featuredIndex }"
              :aria-label="`Go to featured project ${idx + 1}`"
              @click="featuredIndex = idx"
          />
        </div>
      </div>
    </section>

    <!--    <section v-if="featuredItems.length" class="featured-section">-->
<!--      <h2 class="section-title">Featured</h2>-->

<!--      <div class="featured-grid">-->
<!--        <NuxtLink-->
<!--            v-for="item in featuredItems"-->
<!--            :key="item.slug"-->
<!--            :to="`/work/${item.slug}`"-->
<!--            class="masonry-item featured-card"-->
<!--            :aria-label="`Open project: ${item.title}`"-->
<!--        >-->
<!--          <video-->
<!--              v-if="isVideo(item.image)"-->
<!--              :src="`/media${item.image}`"-->
<!--              autoplay-->
<!--              muted-->
<!--              loop-->
<!--              playsinline-->
<!--              preload="metadata"-->
<!--              aria-hidden="true"-->
<!--          />-->
<!--          <img-->
<!--              v-else-->
<!--              :src="`/media${item.image}`"-->
<!--              :alt="item.title"-->
<!--              loading="lazy"-->
<!--              decoding="async"-->
<!--          />-->

<!--          <div class="info">-->
<!--            <h3 class="title">{{ item.title }}</h3>-->

<!--            <div v-if="item.course || item.completed" class="meta-row center">-->
<!--              <span v-if="item.course" class="meta-pill">{{ item.course }}</span>-->
<!--              <span v-if="item.completed" class="meta-pill">{{ item.completed }}</span>-->
<!--            </div>-->

<!--            <p class="desc">{{ item.description }}</p>-->
<!--          </div>-->
<!--        </NuxtLink>-->
<!--      </div>-->
<!--    </section>-->

    <!-- ✅ ALL WORK -->
    <section class="allwork-section">
      <div class="section-head">
        <h2 class="section-title">All Work</h2>

        <NuxtLink to="/archive" class="section-link">Archive</NuxtLink>
      </div>

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
import { computed, ref } from 'vue'
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

const featuredIndex = ref(0)
const featuredCount = computed(() => featuredItems.value.length)

function nextFeatured() {
  if (featuredCount.value < 2) return
  featuredIndex.value = (featuredIndex.value + 1) % featuredCount.value
}

function prevFeatured() {
  if (featuredCount.value < 2) return
  featuredIndex.value =
      (featuredIndex.value + featuredCount.value - 1) % featuredCount.value
}


// All Work grid should hide archived items, but still include featured items
const homeGridItems = computed(() => items.filter(i => !i.archived))

// Split items: even indices => left, odd => right
const leftItems  = computed(() => homeGridItems.value.filter((_, i) => i % 2 === 0))
const rightItems = computed(() => homeGridItems.value.filter((_, i) => i % 2 === 1))
</script>

<style lang="scss">
.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 0 1rem; /* spacing under the row */
}

.section-link,
.section-link:visited {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--pill-border);
  background: var(--card);
  color: var(--text);       /* matches your other text */
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
}

.section-link:hover,
.section-link:focus-visible {
  color: var(--link);       /* accent on hover */
  text-decoration: underline;
}

.section-link:active {
  color: var(--link);
}

@media (max-width: 600px) {
  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Section titles */
/* (section-title base style is now global in assets/scss/main.scss) */
.section-head .section-title {
  margin: 0; /* remove the default bottom margin inside the row */
}

/* ✅ Featured section */
.featured-section {
  margin-bottom: 2.5rem;
}

.featured-carousel {
  position: relative;
  max-width: 1360px;   /* 800 to 1000 works well */
  margin: 0 auto;
}

/* Featured: lock media area so every slide has the same height */
.featured-slide video,
.featured-slide img {
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  object-fit: cover;
  display: block;
}

/* Lock Featured card text size so it does not shrink on wide screens */
.featured-card .info .title {
  font-size: 18px;
  line-height: 1.3;
  max-width: 40rem;   /* about 640px at 16px base font */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.featured-card .info .desc {
  font-size: 14px;
  line-height: 1.4;
}

/* view window */
.featured-viewport {
  overflow: hidden;
}

/* horizontal track */
.featured-track {
  display: flex;
  width: 100%;
  transition: transform 0.4s ease;
}

/* single full width slide */
.featured-slide {
  flex: 0 0 100%;
  max-width: 100%;
}

/* nav arrows */
.featured-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  font: 2rem/1 monospace;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 2;
}

.featured-nav.prev { left: 0.75rem; }
.featured-nav.next { right: 0.75rem; }

.featured-nav:hover {
  background: rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 255, 255, 0.35);
}

.featured-nav.prev { left: 0.5rem; }
.featured-nav.next { right: 0.5rem; }

/* dots */
.featured-dots {
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
}

.featured-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--pill-border);
  background: transparent;
  cursor: pointer;
}

.featured-dot.active {
  background: var(--link);
}

/* Reuse masonry card styling, but make featured subtly stand out */
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
/* (masonry, masonry-col, masonry-item styles are now global in assets/scss/main.scss) */
</style>