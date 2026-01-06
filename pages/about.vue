<template>
  <section class="about-section">
    <div class="about-wrapper">
      <!-- MEDIA COLUMN -->
      <div class="about-photo">
        <div class="photo-container">
          <video
              class="photo-media"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              controls
          >
            <source src="/media/Bravissima2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <p class="photo-note"></p>
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
          in a Psychology specialization, then pivoted to a Psychology major and added a Computational Arts minor when I realized I
          wanted to build interactive digital work, especially games and real-time 3D environments. That shift reflects how I learn:
          quickly, hands-on, and through making. My projects now sit at the intersection of human experience and digital systems:
          player psychology, visual storytelling, interaction design, and world-building.
        </p>

        <p>
          My artistic background spans both digital and traditional media, including pottery, acrylic painting, pastels, and
          photography. I also play the flute and once traveled to the U.K. to perform in a chamber orchestra. Outside of studio work,
          I’m ann outdoors enthusiast who completed the West Coast Trail in seven days.
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

<style scoped lang="scss">
.about-section {
  padding: 2rem 1rem;
}

/* FLEX WRAPPER for two columns */
.about-wrapper {
  display: flex;
  align-items: stretch; /* makes columns same height */
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
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
.photo-note {
  margin-top: 0.4rem;
  font-size: 0.85rem;
  text-align: center;
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
    aspect-ratio: 4 / 5; /* adjust if you want */
  }
}
</style>