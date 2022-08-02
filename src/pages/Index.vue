<template>
  <div class="content">
    <Hero :data="homepage.header" />
  </div>
</template>

<script lang="ts" setup>
  import homepage from "@/json/homepage.json";
  import Hero from "@/components/home/Hero.vue";
  // import homeFaqBoard from "@/components/home/faqBoard.vue";
</script>
