<template>
  <div class="detail-container" v-if="item">
    <h2>{{ item.title }}</h2>

    <!-- long description: \n → <br> -->
    <div class="long-description" v-html="longHtml"></div>

    <!-- █ 1. Playable iframe (game / YouTube) -->
    <div v-if="item.iframeUrl"
         class="media-wrapper"
         :style="{ aspectRatio: item.ratio || '16 / 9' }">
      <iframe :src="item.iframeUrl" allowfullscreen />
    </div>

    <!-- █ 2. Self-hosted movie -->
    <div v-else-if="item.videoUrl"
         class="media-wrapper"
         :style="{ aspectRatio: item.ratio || '16 / 9' }">
      <video :src="item.videoUrl" controls preload="none" :poster="item.image" />
    </div>

    <!-- █ 2½. Credits -->
    <div v-if="item.credits" class="credits" v-html="creditsHtml"></div>

    <!-- █ 3. Screenshots / Media grid -->
    <div v-if="mediaShots.length" class="screenshots">
      <h3>Screenshots / Media</h3>

      <div class="screenshot-grid">
        <template v-for="(src, idx) in mediaShots" :key="idx">
          <!-- PDF thumb -->
          <div v-if="isPdf(src)" class="thumb pdf-thumb" @click="open(idx)">
            <img :src="thumbFor(src)"
                 @error="e => (e.currentTarget as HTMLImageElement).src = '/media/default-pdf-thumb.png'">
            <span class="badge">PDF</span>
          </div>

          <!-- Video thumbnail -->
          <video v-else-if="isVideo(src)"
                 :src="src"
                 class="thumb"
                 autoplay muted loop playsinline preload="auto"
                 @click="open(idx)" />

          <!-- Image thumbnail -->
          <img v-else
               :src="src"
               :class="['thumb', { small: isTiny(src) }]"
               :alt="item.title"
               @click="open(idx)" />
        </template>
      </div>
    </div>

    <!-- █ 4. Light-box overlay -->
    <transition name="fade">
      <div v-if="lbVisible" class="overlay" @click.self="closeLightbox">
        <button class="close" @click="closeLightbox" aria-label="Close">×</button>

        <button v-if="mediaShots.length > 1"
                class="nav-button prev"
                aria-label="Previous"
                @click.prevent="prevMedia">‹</button>
        <button v-if="mediaShots.length > 1"
                class="nav-button next"
                aria-label="Next"
                @click.prevent="nextMedia">›</button>

        <!-- full PDF -->
        <iframe v-if="isPdf(currentSrc)"
                :src="currentSrc + '#page=1&zoom=page-width&toolbar=0'"
                class="full pdf-full"
                :style="{ width: '90vw', height: '90vh' }"
                tabindex="-1"
                title="PDF viewer"> </iframe>

        <!-- Full video -->
        <video v-else-if="isVideo(currentSrc)"
               :src="currentSrc"
               class="full video-full"
               autoplay muted loop playsinline />

        <!-- Full image -->
        <img v-else
             :src="currentSrc"
             class="full image-full"
             :alt="item.title" />
      </div>
    </transition>
  </div>

  <div v-else><p>Item not found.</p></div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePortfolioItems } from '~/composables/usePortfolioItems'
import MarkdownIt from 'markdown-it'
/* markdown */
const md = new MarkdownIt({
  breaks:  true,   // keep your <br> breaks
  linkify: true    // auto-link plain URLs
})

/* long-description → HTML */
const longHtml = computed(() =>
    item?.longDescription ? md.render(item.longDescription) : ''
)

/* parsed credits HTML */
const creditsHtml = computed(() =>
    item?.credits ? md.render(dedent(item.credits)) : ''
)


/* helpers ------------------------------------------------ */
const isVideo = (src: string) => /\.(mp4|webm)$/i.test(src)
const isPdf   = (src: string) => /\.pdf$/i.test(src)

const tinySprites = ['/chameleon.png', '/enemy.png', '/sakura.png']
const isTiny      = (src: string) => tinySprites.some(p => src.endsWith(p))

function thumbFor(src: string) {
  if (!isPdf(src)) return src
  const custom = src.replace(/\.pdf$/i, '-thumb.jpg')
  return `/media${custom}`.replace('//', '/')
}
/* helper to remove common leading indent */
function dedent(mdText: string) {
  const lines = mdText.replace(/\r\n/g, '\n').split('\n')
  // ignore first & last if they’re blank
  if (lines[0].trim() === '') lines.shift()
  if (lines[lines.length - 1].trim() === '') lines.pop()
  // find smallest indent >0
  const indent = Math.min(
      ...lines.filter(l => l.trim()).map(l => l.match(/^ +/)?.[0].length ?? 0)
  )
  return lines
      .map(l => l.slice(indent))          // strip indent
      .join('\n')
      .replace(/^• /gm, '- ')             // turn bullets into markdown list
}

/* item lookup ------------------------------------------- */
const route = useRoute()
const { items } = usePortfolioItems()
const item = items.find(i => i.slug === route.params.slug)

/* A. longDescription -------------------------- */
const formatted = computed(() => {
  return (item?.longDescription ?? '')
      // remove indent that follows each newline
      .replace(/\r?\n[ \t]+/g, '\n')
      // blank line → paragraph break (<br><br>)
      .replace(/\n{2,}/g, '<br><br>')
      // leftover single newline → space
      .replace(/\n/g, ' ')
      .trim()
})
// old formatted long description:
// const formatted = computed(() =>
//     (item?.longDescription ?? '').replace(/\n/g, '<br>')
// )

/* B. screenshots array ------------------------------------------- */
const mediaShots = computed(() =>
    item?.screenshots?.map(s =>
        s.startsWith('/') ? `/media${s}` : `/media/${s}`
    ) ?? []
)

/* light-box state & helpers -------------------------------------- */
const lbVisible  = ref(false)
const lbIndex    = ref(0)
const currentSrc = computed(() => mediaShots.value[lbIndex.value] ?? '')

function open(i: number)      { lbIndex.value = i; lbVisible.value = true }
function closeLightbox()      { lbVisible.value = false }
function nextMedia()          { lbIndex.value = (lbIndex.value + 1) % mediaShots.value.length }
function prevMedia()          { lbIndex.value = (lbIndex.value + mediaShots.value.length - 1) % mediaShots.value.length }

function onKey(e: KeyboardEvent) {
  if (!lbVisible.value) return
  if (e.key === 'Escape')      closeLightbox()
  else if (e.key === 'ArrowRight') nextMedia()
  else if (e.key === 'ArrowLeft')  prevMedia()
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped lang="scss">
.detail-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg);
  color: var(--text);

  /* media wrapper */
  .media-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    iframe,
    video {
      width: 100%;
      height: 100%;
      border: 0;
      object-fit: cover;
    }
  }

  /* screenshots / thumbnails */
  .screenshots {
    margin-top: 2rem;
    .screenshot-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      .thumb {
        max-width: 200px;
        max-height: 150px;
        border-radius: 4px;
        cursor: pointer;
        transition: transform 0.2s;
        img,
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &:hover { transform: scale(1.03); }

        &.small {
          max-width: 50px;
          max-height: 20px;
          img { width: auto; height: auto; object-fit: contain; }
        }
      }
      .pdf-thumb img { object-fit: contain; background: #fff; }
    }
  }

  /* overlay */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 900;
  }
  .full {
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 6px;
  }
  .close,
  .nav-button {
    font: 2.5rem/1 monospace;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 3rem; height: 3rem;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    &:hover { background: rgba(255, 255, 255, 0.3); }
  }
  .prev { left: 2rem; }
  .next { right: 2rem; }

  /* credits box */
  .credits {
    margin: 1.5rem 0 0;
    padding: 1rem 1.25rem;
    background: var(--card);
    border-left: 4px solid #444;
    border-radius: 6px;
    font-size: 0.85rem;
    white-space: pre-wrap;

    a       { color: var(--link); }
    a:hover { text-decoration: underline; }
  }

  /* long description */
  .long-description { line-height: 1.6; }
}
</style>
