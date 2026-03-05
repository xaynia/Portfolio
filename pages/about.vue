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
          I’m Acacia Williams, Coast Salish and a Cowichan Tribes member from the Cowichan Valley on Vancouver Island. I’m a game developer and creative technologist building interactive 3D experiences that combine mechanics, atmosphere, and storytelling.
        </p>

        <p>
          I’m completing a B.A. in Psychology with a minor in Computational Arts at Concordia University. Psychology trained me in research methods and experimental thinking, so I approach design through playtests, clear questions, and iteration, focusing on how players learn systems, how flow and pacing shape the experience, and how agency and choice make interaction meaningful.
        </p>

        <p>
        Computational Arts is where I built my practical game making toolkit: prototyping in engine, implementing systems, and bringing projects to polished builds through real time 3D pipelines.
        </p>

        <h2>What I build</h2>
        <p>
          I take ideas from concept to playable prototype, then refine through playtesting and polish. I enjoy the full loop: concept, implementation, tuning, and presentation. I care about player agency and experiences that feel clear, polished, and intentional, whether it’s an atmospheric 3D world or a simple, replayable game that anyone can pick up and enjoy.
        </p>

        <p>
          My focus areas include gameplay systems, interaction design, and real time world building, plus technical art workflows that connect art and implementation, from shaders and materials to in engine tools and performance aware setup.
        </p>

        <h2>Current focus</h2>
        <p>
          I’m building toward independent releases under my own studio practice, and I’m seeking support and opportunities that let me work full time on production. Right now I’m especially focused on learning mobile game development through rapid prototyping, game jams, and small, shippable experiments.
        </p>

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
  flex: 0 0 40%;
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
  aspect-ratio: 3 / 5;
  height: clamp(640px, 78vh, 1100px);
  max-height: 1200px;
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

/* TEXT COLUMN */
.about-content {
  flex: 1;
  padding: 1rem;

  h2:first-of-type {
    margin-top: -1rem;
  }

  h2 {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.2rem;
    line-height: 1.7;
  }
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