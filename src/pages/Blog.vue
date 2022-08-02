<template>
  <Header />
  <div class="content blog">
    <ContentItem v-for="b in [1, 2, 3]" :key="b"></ContentItem>
  </div>
</template>

<script setup>
  import Header from "@/components/blog/Header.vue";
  import ContentItem from "@/components/blog/ContentItem.vue";
</script>

<style lang="scss" scoped>
  .blog {
    margin-top: 8em !important;
    padding-bottom: 4em !important;
  }
</style>
