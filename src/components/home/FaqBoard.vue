<template>
  <div class="whiteboard-wrapper">
    <img class="doodles" alt="The Doodles" src="@/assets/doodles/doodle_qky.svg" />
    <img class="doodles" alt="The Doodles" src="@/assets/doodles/uwu.svg" />
    <img class="doodles" alt="The Doodles" src="@/assets/doodles/doodle.svg" />
    <div class="paper-section at-first">
      <p>I will answer your questions even though nobody has asked me any.</p>
      <p>So when you want to know about me, there it is! It's right here. So hello my friends! :D</p>
    </div>
    <div class="paper-section as-title">
      <h1>Frequently Asked Questions</h1>
    </div>
    <div class="grid-distrib">
      <FaqNote v-for="(faq, i) in data" :key="i" :faqdata="faq"></FaqNote>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: ["data"]
  };
</script>
<style lang="scss" scoped>
  .grid-distrib {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 25px 15px;
    margin: 15px;
  }
  .doodles {
    position: absolute;
    opacity: 0.4;
    &:nth-child(1) {
      top: 2px;
      right: 10px;
      width: 169px;
    }
    &:nth-child(2) {
      top: 500px;
      right: 30px;
      width: 169px;
    }
    &:nth-child(3) {
      bottom: 50px;
      left: 50px;
      width: 169px;
    }
  }
</style>
