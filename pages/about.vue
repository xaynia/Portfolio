<template>
  <section class="about-section">
    <div class="about-photo">
      <img src="/media/AcaciaCyberpunk.png" alt="Picture of me" />
    </div>
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
        In my free time, I’m learning French and Japanese, reading , and
        playing games like Magic: The Gathering, which boost cognition.
        I also enjoy open-world titles such as <em>Satisfactory</em> and
        platformer games like <em>Super Mario Bros. Wonder</em> and <em>Super Mario
        3D</em>, which help refine dexterity. Committed to overall wellness,
        I’m currently exploring yoga.
      </p>

      <h2>Future Aspirations</h2>
      <p>
        Looking ahead, I plan to develop many games and apps that encourage
        healthier lifestyles, such as wellness apps that reward positive
        habits; act as a restorative niche; encourage physical activity;
        promote connection and critical thinking; expand knowledge.
        Driven by a desire to support youth, I also hope to
        incorporate both art therapy and horse therapy into my future career.

      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  max-width: 600px;
  text-align: center;
  padding: 0 1rem;

  .about-photo {
    margin-bottom: 1rem;
    img {
      max-width: 100%;
      border-radius: 8px;
    }
  }

  .about-content {
    h1 {
      margin: 0 0 1rem;
    }
    p {
      line-height: 1.6;
    }

    h2 {
      margin: 1rem 0 0 0;
    }

  }
}
</style>
