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
        <h2>About Me</h2>
        <p>
          My name is Acacia Williams. I am Coast Salish and a Cowichan Tribes member, born and raised in the Cowichan Valley on
          Vancouver Island.
        </p>

        <p>
          I’m completing a Bachelor of Arts in Psychology with a minor in Computational Arts at Concordia University. I began my degree
          in a Psychology specialization, then pivoted to Computational Arts when I realized I
          wanted to build interactive digital work, especially games and real-time 3D environments. That shift reflects how I learn:
          quickly, hands-on, and through making. My projects now sit at the intersection of human experience and digital systems:
          player psychology, visual storytelling, interaction design, and world-building.
        </p>

        <p>
          My artistic background spans both digital and traditional media, including pottery, acrylic painting, pastels, and
          photography. Outside of studio work, I’m an outdoors enthusiast who completed the West Coast Trail in seven days.
          I enjoy playing musical instruments, performing in the U.K. to play flute in my school's chamber orchestra.
        </p>

        <p>
          My equestrian journey started at age six, and I now have 13 years of experience in hunter, jumper, and dressage. I enjoy
          practicing Parelli horsemanship, emphasizing mutual respect and trust between horse and rider—values that strongly influence
          how I approach design, iteration, and teamwork.
        </p>

        <h2>Mission</h2>
        <p>
          I’m passionate about building interactive experiences that feel intentional, where the mechanics, environment, and feedback
          work together to create meaning. My focus is real-time 3D world-building and interaction design, bridging art, design, and
          prototyping. I love working across engines and tools (especially Unreal Engine, Unity, and Blender) to bring ideas to life,
          and I’m drawn to the creative challenge of making worlds that feel readable, immersive, and alive.
        </p>

        <p>
          My Psychology background shapes how I think about players: how people learn systems, how attention and perception affect
          readability, and how design choices influence emotion and decision-making. I’m most excited when a project lets me combine
          those insights with hands-on building—designing the experience and then implementing it through scripting, systems design,
          and iteration.
        </p>

        <h2>Hobbies</h2>
        <p>
          In my free time, I’m learning French and Japanese, reading, and playing games like Magic: The Gathering. I enjoy open-world
          titles and platformers, not only for fun, but because I love studying how games teach players through level design, pacing,
          and feedback. I also enjoy photography, being outdoors, and staying active.
        </p>

        <h2>Future Aspirations</h2>
        <p>
          Professionally, I’m working toward a career in the creative technology industry, ideally in a hybrid role where I can keep
          designing and building: technical art, gameplay systems, interaction design, and world-building. Long-term, I want to explore
          entrepreneurship and eventually run a small game studio, which is why I’m actively building not just my portfolio, but also
          my skills in collaboration, production, and communicating ideas clearly.
        </p>

        <p>
          I’m proud to be the first in my family to pursue and complete university. That milestone carries deep personal significance
          for me, and it continues to shape how I approach my work: with discipline, gratitude, and a drive to earn opportunities
          through consistent effort.
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
  {
    type: 'video',
    src: '/media/Bravissima2.mp4',
    caption: 'In my spare time: riding and training (hunter/jumper).'
  }
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