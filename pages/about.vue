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
          I am completing my undergraduate degree in Psychology with a minor
          in Computational Arts. My artistic background spans both digital and
          traditional media, including pottery, acrylic painting, pastels, and
          photography. I also play the flute and once traveled to the U.K. to
          perform in a chamber orchestra. In addition, I’m an avid outdoors
          enthusiast who completed the West Coast Trail in seven days.
        </p>

        <p>
          My equestrian journey started at age six, and I now have 13 years
          of experience in hunter, jumper, and dressage. I enjoy practicing Parelli
          horsemanship, emphasizing mutual respect and trust between
          horse and rider.
        </p>

        <h2>Mission</h2>
        <p>
          In an increasingly tech-driven world, my goal is to foster a
          healthier relationship with technology. I aim to develop innovative,
          immersive, and challenging games that promote cognitive and dexterity
          training, ultimately improving mental well-being for gamers. I also
          hope to create a visually enriching open-world game that offers a
          restorative niche.
        </p>

        <h2>Hobbies</h2>
        <p>
          In my free time, I’m learning French and Japanese, reading,
          and playing games like Magic: The Gathering. I also enjoy open-world
          titles (like <em>Satisfactory</em>) and platformers
          (<em>Super Mario Bros. Wonder</em>, <em>Super Mario 3D</em>),
          refining dexterity skills. Committed to overall wellness,
          I’m currently exploring yoga.
        </p>

        <h2>Future Aspirations</h2>
        <p>
          Looking ahead, I plan to develop many games and apps that encourage
          healthier lifestyles—such as wellness apps that reward positive
          habits, provide restorative spaces, encourage physical activity,
          promote connection, and foster critical thinking.
          Driven by a desire to support youth, I also hope to incorporate
          both art therapy and horse therapy into my future career.
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