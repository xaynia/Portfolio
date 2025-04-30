<template>
  <div class="portfolio">
    <h1>My Portfolio v1.0</h1>

    <!-- JavaScript game -->
    <section>
      <h2>JavaScript Game 2</h2>
      <iframe
          src="https://xaynia.itch.io/lost-colours"
          width="600" height="400" frameborder="0" />
      <p>
        <a href="https://github.com/xaynia/CART-253" target="_blank">Source code</a>
      </p>
    </section>

    <!-- Unity screenshots -->
    <section>
      <h2>Unity Game</h2>
      <img src="/unity-shot1.png" alt="Unity screenshot" style="max-width:100%" />
    </section>

    <!-- Two-minute video --> <!--TODO-->
<!--    <section>-->
<!--      <h2>Show-reel</h2>-->
<!--      <video controls width="600" style="max-width:100%">-->
<!--        <source src="/demo.mp4" type="video/mp4" />-->
<!--      </video>-->
<!--    </section>-->
  </div>
</template>

<style scoped lang="scss">
.portfolio {
  padding:2rem;
  max-width:800px;
  margin:auto;

  section { margin-top:2rem; }
}
</style>
