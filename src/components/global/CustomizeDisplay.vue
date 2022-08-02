<template>
  <div class="modal">
    <input type="color" name="color" v-model="color" />
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const color = ref("#000000");
</script>
