<template>
  <div class="detail-container" v-if="item">
    <h2>{{ item.title }}</h2>
    <p>{{ item.description }}</p>

    <!-- optional iframe (e.g. itch.io embed) -->
    <div v-if="item.iframeUrl" class="iframe-wrapper">
      <iframe
          :src="item.iframeUrl"
          allowfullscreen
      />
    </div>

    <!-- Screenshots / Media grid -->
    <div v-if="mediaShots.length" class="screenshots">
      <h3>Screenshots / Media</h3>
      <div class="screenshot-grid">
        <template v-for="(src, idx) in mediaShots" :key="idx">
          <!-- Video thumbnail -->
          <video
              v-if="isVideo(src)"
              :src="src"
              class="thumb"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
              @click="open(idx)"
          ></video>

          <!-- Image thumbnail -->
          <img
              v-else
              :src="src"
              class="thumb"
              :alt="item.title"
              @click="open(idx)"
          />
        </template>
      </div>
    </div>

    <!-- Lightbox overlay -->
    <transition name="fade">
      <div
          v-if="lbVisible"
          class="overlay"
          @click.self="closeLightbox"
      >
        <!-- close button -->
        <button
            class="close"
            @click="closeLightbox"
            aria-label="Close Lightbox"
        >×</button>

        <!-- prev / next nav buttons -->
        <button
            v-if="mediaShots.length > 1"
            class="nav-button prev"
            @click.prevent="prevMedia"
            aria-label="Previous Media"
        >
          ‹
        </button>
        <button
            v-if="mediaShots.length > 1"
            class="nav-button next"
            @click.prevent="nextMedia"
            aria-label="Next Media"
        >
          ›
        </button>

        <!-- Full video -->
        <video
            v-if="isVideo(currentSrc)"
            :src="currentSrc"
            class="full video-full"
            autoplay
            muted
            loop
            playsinline
        ></video>

        <!-- Full image -->
        <img
            v-else
            :src="currentSrc"
            class="full image-full"
            :alt="item.title"
        />
      </div>
    </transition>
  </div>

  <div v-else>
    <p>Item not found.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePortfolioItems } from '~/composables/usePortfolioItems'

/** Check if a file is a video by extension. */
function isVideo(src: string) {
  return /\.(mp4|webm)$/i.test(src)
}

const route = useRoute()
const { items } = usePortfolioItems()

/** The portfolio item that matches [slug] */
const item = items.find(i => i.slug === route.params.slug)

/** Build full media paths (prefix /media) */
const mediaShots = computed(() =>
    item?.screenshots?.map(s =>
        s.startsWith('/') ? `/media${s}` : `/media/${s}`
    ) ?? []
)

/** Lightbox state */
const lbVisible = ref(false)
const lbIndex = ref(0)

/** Current media in the lightbox */
const currentSrc = computed(() => mediaShots.value[lbIndex.value] ?? '')

/** Show overlay at index */
function open(idx: number) {
  lbIndex.value = idx
  lbVisible.value = true
}

/** Close overlay */
function closeLightbox() {
  lbVisible.value = false
}

/** Next / prev in array */
function nextMedia() {
  lbIndex.value = (lbIndex.value + 1) % mediaShots.value.length
}
function prevMedia() {
  lbIndex.value =
      (lbIndex.value + mediaShots.value.length - 1) % mediaShots.value.length
}

/** Add arrow key and Esc support */
function onKey(e: KeyboardEvent) {
  if (!lbVisible.value) return
  if (e.key === 'Escape') closeLightbox()
  else if (e.key === 'ArrowRight') nextMedia()
  else if (e.key === 'ArrowLeft') prevMedia()
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped lang="scss">
.detail-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  /* If there's a playable iframe */
  .iframe-wrapper {
    margin: 1rem 0;
    aspect-ratio: 4 / 3; /* or your desired ratio */
    width: 100%;
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }

  /* Thumbnails grid */
  .screenshots {
    margin-top: 2rem;
    .screenshot-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: flex-start; /* prevent auto-stretching */

      .thumb {
        /*
          We remove a fixed "width: 200px" so smaller images (e.g. 50x50)
          stay that size. Large images or videos get capped by max-*
        */
        width: auto;
        height: auto;
        max-width: 200px;
        max-height: 150px;

        border-radius: 4px;
        cursor: pointer;
        transition: transform 0.2s;

        /* For pixel-art crispness on images (does nothing for video) */
        image-rendering: pixelated;

        &:hover {
          transform: scale(1.03);
        }
      }
    }
  }

  /* Lightbox overlay */
  .overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .full {
    border-radius: 6px;
    z-index: 1;
  }

  .video-full {
    /* Large videos scale down if bigger than the viewport */
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
  }

  .image-full {
    /*
      For images, we want original size if smaller than viewport,
      but never bigger than the screen
    */
    width: auto;
    height: auto;
    max-width: 90vw;
    max-height: 90vh;
    image-rendering: pixelated; /* Crisp for pixel art. */
  }

  /* Close button */
  .close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font: 2.5rem/1 monospace;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    z-index: 2;
  }

  /* Prev / Next nav buttons */
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font: 2.5rem/1 monospace;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    border: none;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
  .prev {
    left: 2rem;
  }
  .next {
    right: 2rem;
  }

  /* Fade transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
