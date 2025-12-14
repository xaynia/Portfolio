<template>
  <section class="about-section">
    <div class="about-wrapper">
      <!-- PHOTO COLUMN -->
      <div class="about-photo">
        <div class="photo-container">
          <img
              src="/media/Bravissima.mp4"
              alt="Bravissima (Kisses) and I at Arbutus Meadows (Jumpers) "
              class="photo-img"
          />
          <p class="photo-note">
          </p>
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
  padding: 2rem 1rem; /* Some spacing around the entire section */
}

/* FLEX WRAPPER for two columns */
.about-wrapper {
  display: flex;
  align-items: stretch; /* makes columns align top and bottom */
  flex-wrap: wrap;      /* wraps on smaller screens */
  max-width: 1200px;    /* wider container for large screens */
  margin: 0 auto;
}

/* PHOTO COLUMN */
.about-photo {
  flex: 0 0 40%; /* 40% width on desktop */
  display: flex; /* so it can stretch vertically */
}

.photo-container {
  /* fill the entire parent column to match text height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

/* The actual image */
.photo-container {
  width: 100%;
}

.photo-img {
  width: 100%;
  aspect-ratio: 4 / 5;   /* pick what looks best: 16/9, 1/1, 4/5, etc. */
  object-fit: cover;
  border-radius: 8px;
  display: block;
}

/* Small italic line */
.photo-note {
  margin-top: 0.4rem;
  font-size: 0.85rem; /* slightly smaller text */
  text-align: center;
}

/* TEXT COLUMN */
.about-content {
  flex: 1; /* fill remaining space */
  padding: 1rem;

  /* remove top margin from the first heading to align with the photo top */
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

/* MOBILE (tablets & below) */
@media (max-width: 768px) {
  .about-photo,
  .about-content {
    flex: 0 0 100%;
  }

  .photo-img {
    height: auto; /* let the image resize naturally on narrow screens */
  }
}
</style>
