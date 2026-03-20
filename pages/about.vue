<template>
  <section class="about-section">
    <div class="about-wrapper">
      <!-- MEDIA COLUMN -->
      <div class="about-photo">
        <div class="photo-container">

          <div class="about-carousel">
            <button
                v-if="mediaSlides.length > 1"
                class="about-nav prev"
                type="button"
                aria-label="Previous media"
                @click.stop="prevMedia"
            >
              ‹
            </button>

            <div class="about-viewport">
              <div
                  class="about-track"
                  :style="{ transform: `translateX(-${mediaIndex * 100}%)` }"
              >
                <div
                    v-for="(slide, i) in mediaSlides"
                    :key="slide.src + i"
                    class="about-slide"
                >
                  <img
                      v-if="slide.type === 'image'"
                      class="about-media is-img"
                      :src="slide.src"
                      :alt="slide.alt"
                      loading="eager"
                      decoding="async"
                  />

                  <video
                      v-else
                      :ref="setVideoRef"
                      class="about-media is-video"
                      controls
                      muted
                      playsinline
                      preload="none"
                  >
                    <source :src="slide.src" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <button
                v-if="mediaSlides.length > 1"
                class="about-nav next"
                type="button"
                aria-label="Next media"
                @click.stop="nextMedia"
            >
              ›
            </button>

            <div v-if="mediaSlides.length > 1" class="about-dots">
              <button
                  v-for="(slide, i) in mediaSlides"
                  :key="slide.src + '-dot'"
                  type="button"
                  class="about-dot"
                  :class="{ active: i === mediaIndex }"
                  :aria-label="`Go to media ${i + 1}`"
                  @click="mediaIndex = i"
              />
            </div>
          </div>

          <p v-if="currentCaption" class="photo-note">{{ currentCaption }}</p>
        </div>
      </div>


      <!-- TEXT COLUMN -->
      <div class="about-content">
        <h2>About</h2>
        <p>
          Acacia Williams. Coast Salish (Cowichan Tribes), from Vancouver Island. Based in Montreal.
        </p>

        <p>
          Game developer and creative technologist. Psychology and Computational Arts, Concordia University.
        </p>

        <p>
          I make games, interactive environments, and real-time 3D work. I playtest everything.
        </p>

        <h2>Interests</h2>
        <p>
          Generative AI, procedural systems, agentic workflows. Currently exploring how AI tools can integrate directly into creative pipelines, connecting models to engines and DCCs through protocols like MCP.
        </p>

        <p>
          Also builds Unreal Engine pipelines for fun, plays flute, rides horses (hunter/jumper), and once hiked the West Coast Trail in seven days.
        </p>

        <h2>Current focus</h2>
        <p>
          Independent game development. Mobile prototyping, game jams, small shippable experiments.
        </p>

        <h2>Tools</h2>
        <div class="tools-strip">
          <!-- Unreal Engine -->
          <div class="tool-icon" title="Unreal Engine">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm0 1.846c5.595 0 10.154 4.559 10.154 10.154S17.595 22.154 12 22.154 1.846 17.595 1.846 12 6.405 1.846 12 1.846zm-1.594 4.17c-.494.678-.965 1.727-1.178 2.353-.213.627-.7 2.124-.7 2.124L6.59 12.1s-.237.06-.358.18c0 0-.906 1.037-.906 1.096 0 .06 0 3.834 0 3.834l1.037-.619 1.037.619s.155-2.21.155-2.39c0-.178.534-.98.534-.98l1.037-1.274s.06 3.063.06 3.182c0 .119-.416.772-.416.772l1.453.86 1.453-.86s-.416-.653-.416-.772c0-.119.06-5.987.06-5.987s.593.474.89.474c.297 0 .89-.474.89-.474s-.357 4.078-.357 4.197c0 .119.534.802.534.802l1.037-.619 1.037.619s0-3.774 0-3.834c0-.06-.906-1.096-.906-1.096-.12-.119-.358-.18-.358-.18l-1.937-1.607s-.487-1.497-.7-2.124c-.214-.626-.684-1.675-1.178-2.353-.297-.406-.534-.584-.534-.584s-.237.178-.534.584z"/></svg>
          </div>
          <!-- Blender -->
          <div class="tool-icon" title="Blender">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.282 1.59-.878 2.153a3.389 3.389 0 0 1-2.361.921 3.382 3.382 0 0 1-2.362-.921c-.596-.564-.923-1.33-.878-2.152h-.002zm-5.946 0c.076-1.325.718-2.469 1.681-3.282a5.724 5.724 0 0 1 3.506-1.385 5.723 5.723 0 0 1 3.506 1.385c.963.813 1.607 1.957 1.68 3.282.078 1.39-.46 2.642-1.404 3.56a5.665 5.665 0 0 1-3.782 1.538 5.673 5.673 0 0 1-3.783-1.538c-.944-.918-1.482-2.17-1.404-3.56zm3.5-9.769l3.677 2.895H6.527l3.537-2.895zm-6.08 5.136c.153 0 .304.037.447.1l3.878 3.032a7.834 7.834 0 0 0-.063.996c0 1.896.689 3.629 1.828 4.961a7.721 7.721 0 0 0 5.637 2.847 7.72 7.72 0 0 0 5.636-2.847 7.163 7.163 0 0 0 1.828-4.961c0-1.896-.689-3.63-1.828-4.962a7.441 7.441 0 0 0-2.459-1.907l-5.22-4.127-2.573-2.04c-.464-.366-1.063-.36-1.517-.005l-.012.009-3.677 3.01-.003.003a1.065 1.065 0 0 0-.093 1.5c.197.237.474.375.77.395h.003z"/></svg>
          </div>
          <!-- Unity -->
          <div class="tool-icon" title="Unity">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.4 12L6.24 18.961l-2.209-6.96L0 12l4.031-.001 2.209-6.96L10.4 12zM17.6 0l-7.048 4.17 2.638 4.536H20.4L24 12l-3.6 3.294h-7.21l-2.638 4.536L17.6 24l6.4-12L17.6 0z"/></svg>
          </div>
          <!-- Max MSP -->
          <div class="tool-icon tool-text" title="Max MSP">Max</div>
          <!-- Premiere Pro -->
          <div class="tool-icon" title="Premiere Pro">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.594 8.696h1.702c.464 0 .869.06 1.216.178.348.119.632.298.852.538.22.24.381.534.484.882.103.349.154.748.154 1.198 0 .494-.069.918-.206 1.272-.137.354-.33.646-.576.876a2.28 2.28 0 0 1-.876.52 3.737 3.737 0 0 1-1.1.154H7.586v3.094H6.594V8.696zm.992 4.698h.592c.263 0 .505-.034.726-.103.22-.068.41-.177.57-.326.16-.15.285-.34.375-.572.09-.232.134-.51.134-.836 0-.292-.037-.547-.112-.766a1.371 1.371 0 0 0-.326-.548 1.344 1.344 0 0 0-.53-.33 2.164 2.164 0 0 0-.72-.11H7.586v3.59zM13.5 10.238a.893.893 0 0 0 .162-.006l.018-.002v-.966h.006c-.16-.01-.328.01-.498.06-.17.05-.326.134-.466.254-.14.12-.258.282-.354.484-.096.202-.16.45-.192.744h-.006v.506h-.756v.784h.756v5.222h.984v-5.222h.872v-.784h-.872v-.166c0-.328.058-.586.174-.774.116-.188.24-.293.37-.316l.002-.018zM3.6 0H20.4A3.6 3.6 0 0 1 24 3.6v16.8a3.6 3.6 0 0 1-3.6 3.6H3.6A3.6 3.6 0 0 1 0 20.4V3.6A3.6 3.6 0 0 1 3.6 0z"/></svg>
          </div>
          <!-- After Effects -->
          <div class="tool-icon" title="After Effects">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 0h16.8A3.6 3.6 0 0 1 24 3.6v16.8a3.6 3.6 0 0 1-3.6 3.6H3.6A3.6 3.6 0 0 1 0 20.4V3.6A3.6 3.6 0 0 1 3.6 0zm14.168 14.897c-.468 0-.737.21-.842.628-.238 1.047-.526 1.677-.84 2.038-.352.332-.786.498-1.302.498-.724 0-1.26-.416-1.608-1.248-.366-.87-.55-2.142-.55-3.816 0-1.434.158-2.556.472-3.366.296-.798.776-1.198 1.438-1.198.502 0 .89.202 1.166.604.248.368.428.916.54 1.644.048.27.226.406.534.406h1.256c.182 0 .321-.06.418-.18.096-.118.131-.277.104-.476-.156-1.206-.568-2.14-1.236-2.8C16.452 7.21 15.558 6.88 14.44 6.88c-1.318 0-2.342.52-3.072 1.56-.748 1.06-1.122 2.536-1.122 4.43 0 2.048.36 3.584 1.08 4.606.698.998 1.71 1.498 3.036 1.498 1.106 0 1.998-.37 2.676-1.11.676-.738 1.09-1.67 1.242-2.794.028-.2-.006-.356-.102-.47a.538.538 0 0 0-.41-.176h-1.18v-.527zM10.14 8.362c-.1-.322-.31-.482-.63-.482H8.27c-.32 0-.534.16-.63.482L5.03 16.574c-.06.194-.028.354.096.48.124.126.28.19.466.19h1.144c.334 0 .546-.164.636-.49l.554-2.158h2.942l.594 2.158c.102.326.312.49.632.49h1.214c.188 0 .345-.064.468-.19.124-.126.156-.286.096-.48L10.14 8.362zm-1.7 5.07l.966-3.644h.044l1.006 3.644H8.44z"/></svg>
          </div>
          <!-- Substance Painter -->
          <div class="tool-icon tool-text" title="Substance Painter">Sp</div>
          <!-- JavaScript -->
          <div class="tool-icon" title="JavaScript">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
          </div>
          <!-- C# -->
          <div class="tool-icon tool-text" title="C#">C#</div>
          <!-- Python -->
          <div class="tool-icon" title="Python">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.89.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/></svg>
          </div>
          <!-- Photoshop -->
          <div class="tool-icon" title="Photoshop">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 0h16.8A3.6 3.6 0 0 1 24 3.6v16.8a3.6 3.6 0 0 1-3.6 3.6H3.6A3.6 3.6 0 0 1 0 20.4V3.6A3.6 3.6 0 0 1 3.6 0zm3.116 8.632h1.726c.47 0 .882.062 1.236.186.354.124.642.302.864.534.222.232.388.516.498.852.11.336.166.718.166 1.146 0 .496-.07.926-.21 1.29-.14.364-.336.664-.59.9a2.38 2.38 0 0 1-.896.54c-.348.124-.738.186-1.17.186H7.714v3.12H6.716V8.632zm.998 4.792h.636c.27 0 .516-.036.738-.11.222-.072.414-.182.576-.33.162-.148.288-.338.378-.57.09-.232.136-.51.136-.836 0-.286-.038-.538-.114-.756a1.352 1.352 0 0 0-.33-.546 1.396 1.396 0 0 0-.54-.33 2.108 2.108 0 0 0-.726-.112H7.714v3.59zm6.684-1.88c-.31-.14-.586-.322-.828-.546l.528-.876c.224.196.48.36.768.492.288.132.604.198.948.198.354 0 .632-.074.834-.222.202-.148.304-.354.304-.618 0-.168-.044-.308-.132-.42a1.124 1.124 0 0 0-.348-.3 2.64 2.64 0 0 0-.498-.222 8.89 8.89 0 0 0-.576-.186 6.16 6.16 0 0 1-.69-.264 2.296 2.296 0 0 1-.564-.36 1.564 1.564 0 0 1-.384-.51c-.094-.2-.142-.44-.142-.72 0-.292.06-.554.18-.786.12-.232.282-.43.486-.594a2.24 2.24 0 0 1 .726-.384c.278-.09.574-.136.888-.136.374 0 .72.062 1.038.186.318.124.586.298.804.522l-.486.828a2.078 2.078 0 0 0-.648-.408 1.834 1.834 0 0 0-.756-.156c-.324 0-.578.072-.762.216-.184.144-.276.336-.276.576 0 .152.04.28.12.384.08.104.188.198.324.282.136.084.292.16.468.228.176.068.364.14.564.216.26.096.502.198.726.306.224.108.42.238.588.39.168.152.3.334.396.546.096.212.144.47.144.774 0 .308-.062.584-.186.828a1.85 1.85 0 0 1-.504.618 2.284 2.284 0 0 1-.744.39 2.94 2.94 0 0 1-.906.136c-.436 0-.84-.078-1.212-.234z"/></svg>
          </div>
          <!-- Git -->
          <div class="tool-icon" title="Git">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.66 2.66c.645-.222 1.387-.078 1.9.435.72.72.72 1.884 0 2.604-.72.72-1.885.72-2.604 0-.516-.516-.643-1.27-.394-1.902l-2.48-2.481v6.529c.175.087.34.2.486.346.72.72.72 1.884 0 2.604-.72.72-1.886.72-2.605 0-.72-.72-.72-1.885 0-2.604.18-.18.385-.317.604-.413V8.858c-.22-.1-.423-.235-.604-.414-.52-.52-.643-1.274-.392-1.906L7.622 3.79.452 10.96c-.604.605-.604 1.584 0 2.19l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.186"/></svg>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

/* media setup */
<script setup lang="ts">
import { computed, ref, watch } from 'vue'

type MediaSlide =
    | { type: 'image'; src: string; alt: string; caption?: string }
    | { type: 'video'; src: string; caption?: string }

const mediaSlides = ref<MediaSlide[]>([
  {
    type: 'image',
    src: '/media/acacia.png',
    alt: 'Acacia Williams',
    caption: ''
  },
  // {
  //   type: 'video',
  //   src: '/media/Bravissima2.mp4',
  //   caption: 'In my spare time: riding and training (hunter/jumper).'
  // }
])

const mediaIndex = ref(0)

function nextMedia() {
  if (mediaSlides.value.length < 2) return
  mediaIndex.value = (mediaIndex.value + 1) % mediaSlides.value.length
}

function prevMedia() {
  if (mediaSlides.value.length < 2) return
  mediaIndex.value =
      (mediaIndex.value + mediaSlides.value.length - 1) % mediaSlides.value.length
}

/** Pause/reset the video when you leave the video slide */
const videoEl = ref<HTMLVideoElement | null>(null)
function setVideoRef(el: HTMLVideoElement | null) {
  // only one video in this carousel
  if (el) videoEl.value = el
}

watch(mediaIndex, (newIdx, oldIdx) => {
  const oldSlide = mediaSlides.value[oldIdx]
  if (oldSlide?.type === 'video' && videoEl.value) {
    videoEl.value.pause()
    videoEl.value.currentTime = 0
  }
})

const currentCaption = computed(() => mediaSlides.value[mediaIndex.value]?.caption ?? '')
</script>

<style scoped lang="scss">
.about-section {
  padding: 2rem 1rem;
}

/* FLEX WRAPPER for two columns */
.about-wrapper {
  display: flex;
  align-items: flex-start; /* don’t stretch media to full text height */
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1.5rem;
}


/* MEDIA COLUMN */
.about-photo {
  flex: 0 0 30%;
  display: flex; /* allow child to stretch */
}

.photo-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Video fills the column height and crops nicely */
.photo-media {
  width: 100%;
  height: 100%;
  flex: 1;               /* take remaining height */
  object-fit: cover;     /* crop instead of squish */
  border-radius: 8px;
  display: block;
}

/* Note under media */
/* Carousel */
.about-carousel {
  position: relative;
  width: 100%;
}

.about-viewport {
  overflow: hidden;
  border-radius: 8px;
  /* stable size so it doesn’t become a giant moving wall */
  aspect-ratio: 3 / 4;
  height: clamp(380px, 50vh, 550px);
  max-height: 600px;
  background: var(--card);
}

.about-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.35s ease;
}

.about-slide {
  flex: 0 0 100%;
  max-width: 100%;
  height: 100%;
}

.about-media {
  width: 100%;
  height: 100%;
  display: block;
  border: 0;
}

.about-media.is-img {
  object-fit: cover;
  background: var(--card);
}

.about-media.is-video {
  object-fit: contain;
}

/* Arrows */
.about-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  border: 1px solid var(--pill-border);
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;
  display: grid;
  place-items: center;
  z-index: 2;
}

.about-nav.prev { left: 0.5rem; }
.about-nav.next { right: 0.5rem; }

/* Dots */
.about-dots {
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
}

.about-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--pill-border);
  background: transparent;
  cursor: pointer;
}

.about-dot.active {
  background: var(--link);
}

/* Tools strip */
.tools-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.75rem 0;
}

.tool-icon {
  width: 22px;
  height: 22px;
  opacity: 0.35;
  transition: opacity 0.25s ease, transform 0.25s ease;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-icon:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.tool-icon svg {
  width: 100%;
  height: 100%;
}

.tool-icon.tool-text {
  width: auto;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

/* TEXT COLUMN */
.about-content {
  flex: 1;
  padding: 1rem;

  h2:first-of-type {
    margin-top: -0.5rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 0.6rem;
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #2ab5a0;
  }

  h2::after {
    content: '';
    display: block;
    margin-top: 0.5rem;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(42, 181, 160, 0.4),
      rgba(42, 181, 160, 0.1) 60%,
      transparent
    );
  }

  p {
    margin-bottom: 1.2rem;
    line-height: 1.7;
    font-size: 0.95rem;
  }
}

.dark .about-content h2 {
  color: #4dd9c0;
}

.dark .about-content h2::after {
  background: linear-gradient(
    to right,
    rgba(77, 217, 192, 0.4),
    rgba(77, 217, 192, 0.1) 60%,
    transparent
  );
}

/* MOBILE */
@media (max-width: 768px) {
  .about-photo,
  .about-content {
    flex: 0 0 100%;
  }


  /* On mobile, don't force tall height */
  .photo-media {
    height: auto;
    aspect-ratio: 4 / 5;
  }
}
</style>