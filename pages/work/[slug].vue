<template>
  <div class="detail-container" v-if="item">
    <h2>{{ item.title }}</h2>

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
      <video :src="item.videoUrl" autoplay controls preload="auto" muted loop playsinline :poster="item.image" />
    </div>

    <!-- Project Details (structured, review-friendly) -->
    <div class="project-details">
      <h3>Project Details</h3>

      <dl class="details-grid">
        <dt>Status</dt>
        <dd>{{ statusLabel }}</dd>

        <template v-if="item.course">
          <dt>Course</dt>
          <dd>{{ item.course }}</dd>
        </template>

        <template v-if="item.completed">
          <dt>Completed</dt>
          <dd>{{ item.completed }}</dd>
        </template>

        <template v-if="item.engine">
          <dt>Engine</dt>
          <dd>{{ item.engine }}</dd>
        </template>

        <template v-if="item.languages && item.languages.length">
          <dt>Languages</dt>
          <dd>{{ item.languages.join(', ') }}</dd>
        </template>

        <template v-if="item.developmentDuration">
          <dt>Development Duration</dt>
          <dd>{{ item.developmentDuration }}</dd>
        </template>

        <dt>Objective</dt>
        <dd>{{ item.objective }}</dd>

        <dt>Team Size</dt>
        <dd>{{ teamLabel }}</dd>

        <template v-if="showCollaborators">
          <dt>Collaborators</dt>
          <dd>{{ item.collaborators?.join(', ') }}</dd>
        </template>

        <template v-if="item.myRole">
          <dt>My Role</dt>
          <dd>{{ item.myRole }}</dd>
        </template>

        <template v-if="item.myContributions && item.myContributions.length">
          <dt>My Contributions</dt>
          <dd>
            <ul class="contrib-list">
              <li v-for="(c, i) in item.myContributions" :key="i">{{ c }}</li>
            </ul>
          </dd>
        </template>
      </dl>
    </div>

    <div class="description-block">
      <h3>Description</h3>
      <div class="long-description" v-html="longHtml"></div>
    </div>

    <div v-if="downloads.length" class="downloads">
      <h3>Downloads</h3>

      <div class="download-list">
        <div v-for="(d, idx) in downloads" :key="idx" class="download-item">
          <div><strong>{{ d.platform }}</strong><span v-if="d.arch"> — {{ d.arch }}</span></div>
          <a v-if="d.url" :href="d.url" class="download-link" target="_blank" rel="noopener">Download</a>
          <span v-else class="download-missing">Not available yet</span>
        </div>
      </div>
    </div>

    <!-- █ 2½. Artistic Inspiration -->
    <div v-if="item.artisticInfluences" class="credits" v-html="artspoHtml"></div>


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
/* markdown */
const mdNoBreaks = new MarkdownIt({
  breaks:  false,  // only longDescription uses this
  linkify: true
})

/* long-description → HTML */
const longHtml = computed(() =>
        item?.longDescription ? mdNoBreaks.render(dedent(item.longDescription)) : ''
    // item?.longDescription ? md.render(dedent(item.longDescription)) : ''
    // item?.longDescription ? item.longDescription : ''
)

/* parsed credits HTML */
const creditsHtml = computed(() =>
    item?.credits ? md.render(dedent(item.credits)) : ''
)

/* parsed credits HTML */
const artspoHtml = computed(() =>
    item?.artisticInfluences ? md.render(dedent(item.artisticInfluences)) : ''
)

/* details labels (structured overview) */
const statusLabel = computed(() => {
  const s = item?.status ?? 'completed'
  if (s === 'in-progress') return 'In progress'
  if (s === 'prototype') return 'Prototype'
  return 'Completed'
})

const teamLabel = computed(() => {
  const n = item?.teamSize ?? 1
  return n === 1 ? 'Solo' : `Team of ${n}`
})

const showCollaborators = computed(() => {
  const n = item?.teamSize ?? 1
  return n > 1 && (item?.collaborators?.length ?? 0) > 0
})

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
      // .replace(/^• /gm, '- ')             // turn bullets into markdown list
      .replace(/^\s*•\s+/gm, '- ')        // // turn "• ..." into "- ..." even if indented
}

/* item lookup ------------------------------------------- */
const route = useRoute()
const { items } = usePortfolioItems()
const item = items.find(i => i.slug === route.params.slug)
const downloads = item?.downloads ?? []

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
// font
.detail-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--bg);
  color: var(--text);

  .description-block {
    margin: 0.35rem 0 1.1rem;
    padding: 1rem 1.25rem;
    background: var(--card);
    border-radius: 6px;

    h3 { margin: 0 0 0.75rem; }

    .long-description { margin: 0; }

    /* optional: remove extra space after last paragraph */
    .long-description :deep(p:last-child) { margin-bottom: 0; }
  }

  .downloads {
    margin-top: 1.5rem;
    padding: 1rem 1.25rem;
    background: var(--card);
    border-radius: 6px;
  }

  .download-list {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .download-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .download-link {
    color: var(--link);
    text-decoration: none;
    font-weight: 600;
  }
  .download-link:hover { text-decoration: underline; }

  .download-missing {
    opacity: 0.8;
    font-weight: 600;
  }

  h2 {
    margin-bottom: 0.25rem;
  }

  /* nicer spacing under title */
  .meta-row {
    margin: 0.35rem 0 1.1rem;
  }

  /* Project Details block */
  .project-details {
    margin: 0.35rem 0 1.1rem;
    padding: 1rem 1.25rem;
    background: var(--card);
    border-radius: 6px;
  }

  .project-details h3 {
    margin-bottom: 0.75rem;
  }

  .details-grid {
    display: grid;
    grid-template-columns: 190px 1fr;
    gap: 0.6rem 1.25rem;
  }

  @media (max-width: 700px) {
    .details-grid {
      grid-template-columns: 1fr;
    }
  }

  .details-grid dt {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted);
  }

  .details-grid dd {
    margin: 0;
    font-weight: 600;
  }

  .contrib-list {
    margin: 0.25rem 0 0;
    padding-left: 1.25rem;
  }

  .contrib-list li {
    margin-bottom: 0.35rem;
    font-weight: 500;
  }

  .contrib-list li:last-child {
    margin-bottom: 0;
  }

  /* spacing for markdown-rendered description (global reset removes default margins) */
  .long-description :deep(p) {
    margin: 0 0 0.9rem;
  }

  .long-description :deep(ul),
  .long-description :deep(ol) {
    margin: 0 0 0.9rem;
    padding-left: 1.25rem;
  }

  .long-description :deep(a) {
    color: var(--link);
  }

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
    border-left: 15px solid #444;
    border-radius: 6px;
    font-size: 0.97rem;
    line-height: 2.0;
    white-space: normal;

    a       { color: var(--link); }
    a:hover { text-decoration: underline; }
  }

  /* Make the first bold line in credits act like a header */
  .credits :deep(p:first-child) {
    margin: 0 0 0.6rem;
  }
  .credits :deep(p:first-child strong) {
    display: block;
    font-size: 1.05rem;   /* try 1.0 – 1.15rem */
    font-weight: 700;
    line-height: 1.2;
  }

  /* Tighten Markdown defaults */
  :deep(p) {
    margin: 0.35rem 0;
  }
  :deep(p:first-child) { margin-top: 0; }
  :deep(p:last-child)  { margin-bottom: 0; }

  :deep(ul),
  :deep(ol) {
    margin: 0.5rem 0 0;
    padding-left: 1.25rem;
  }

  :deep(li) {
    margin: 0.25rem 0;
  }

  /* markdown-it often wraps list items in <p> */
  :deep(li > p) {
    margin: 0;
  }

  :deep(a) {
    color: var(--link);
    text-decoration: none;
    overflow-wrap: anywhere; /* better than word-break for long URLs */
  }
  :deep(a:hover) {
    text-decoration: underline;
  }

  /* long description */
  .long-description {
    margin-bottom: 1rem;
    line-height: 1.6; }
}
</style>
