<template>
  <div class="grid-wrapper">
    <Showcase v-for="(media, i) in galleryData" :key="'qkyFanartID' + i" :meta="media" :index="i" />
  </div>
  <div v-if="error" class="error">Error!</div>
</template>

<script setup>
  import Showcase from "@/components/gallery/Showcase.vue";
  import $axios from "@/lib/axios";
  import $bus from "@/lib/eventBus";
  import { ref } from "@vue/reactivity";
  import { authenticated } from "@/store/authenticated";
  let galleryData = ref([]);
  let error = ref(false);
  $axios
    .get("/gallery", {
      headers: {
        "x-access-token": authenticated().userData.token
      }
    })
    .then((r) => (galleryData.value = r.data))
    .catch(() => {
      error.value = true;
      $bus.emit("alertTest", { success: false, message: "Failed to fetch the gallery data!" });
    });
</script>

<style lang="scss" scoped>
  .grid-wrapper {
    margin-top: 8em;
    margin-bottom: 4em;
    display: grid;
    gap: 10px;
    justify-items: center;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media screen and (max-width: 520px) {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>
