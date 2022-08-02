<template>
  <div class="hero">
    <div class="sticky-note paper-style">
      <div class="intro">
        <h1>
          {{ data.title }}
        </h1>
        <div v-markdown="data.description"></div>
        <router-link to="https://www.youtube.com/watch?v=V51OJr0ee6E">
          <button class="qky-button hero-button">Click Me!</button>
        </router-link>
        <img class="image-left" alt="logo" src="@/assets/qkysad.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: ["data"]
  };
</script>
<style lang="scss" scoped>
  .hero {
    max-width: 720px;
    position: relative;
    margin: auto;
    margin-top: min(150px, 40%);
    margin-bottom: 5%;
    text-align: center;
    font-size: 18px;
    animation: intro-hero-in 1s;
    font-family: var(--font-primary);

    .sticky-note {
      background: var(--bg-main);
      z-index: -1;
      animation: intro-hero-in 1.27s;
      transform: rotate(2deg);
      transition: all 0.3s ease;
      border-radius: var(--border-radius);

      &:hover {
        transform: rotate(6deg);

        .intro {
          transform: rotate(-6.5deg);
        }
      }

      .intro {
        padding: 40px 20px 20px 20px;
        transform: rotate(-2deg);
        text-shadow: 0 0 5px var(--bg-main), 0 0 5px var(bg-main), 0 0 5px var(bg-main);
        transition: transform 0.3s ease;

        h1 {
          margin-bottom: 0.7em;
        }

        .image-left {
          position: absolute;
          left: 0;
          bottom: -45px;
          width: 150px;
          z-index: -1;
        }
      }
    }

    .paper-style {
      box-shadow: 0 0 0 0 var(--shadow-color);
      animation: rippling 2s infinite;
      // box-shadow: 2px 2px 12px var(--shadow-color);
    }
  }

  @keyframes intro-hero-in {
    0% {
      transform: scale(0.3) rotate(-70deg);
      opacity: 0;
    }
  }
</style>
