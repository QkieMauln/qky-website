<template>
  <div class="alert-container">
    <!-- <div class="alert-balloon">
      <div class="content-wrapper">Hello World</div>
      <div class="loader" :style="{ width: `100%` }"></div>
    </div> -->
    <div
      v-for="test of alerts"
      :key="test"
      :class="{ gone: test.fading, 'alert-balloon': true, green: test.data.success }"
    >
      <div class="content-wrapper">
        <div class="image">
          <img
            :src="
              test.data.success
                ? 'https://twemoji.maxcdn.com/v/13.1.0/72x72/2705.png'
                : 'https://twemoji.maxcdn.com/v/13.1.0/72x72/26a0.png'
            "
            alt=""
          />
        </div>
        <div class="text" v-emodown="test.data.message"></div>
      </div>
      <div class="loader" :style="{ width: `${((test.time - 50) / (timeOut - 50)) * 100}%` }"></div>
    </div>
  </div>
</template>

<script setup>
  import $bus from "@/lib/eventBus";
  import { ref } from "vue";
  let alerts = ref([]);
  let timeOut = 1000;

  // warn https://twemoji.maxcdn.com/v/13.1.0/72x72/26a0.png
  // ok https://twemoji.maxcdn.com/v/13.1.0/72x72/2705.png
  // function setExpiration(array, itemIndex, delay) {
  //   setTimeout(() => {
  //     array[itemIndex].fading = true;
  //     setTimeout(() => array.splice(itemIndex, 1), 500);
  //   }, delay);
  // }
  setInterval(() => {
    if (!alerts) return;
    alerts.value.map((x) => {
      x.time--;
      x.fading = x.time < 50;
      return x;
    });
    alerts.value = alerts.value.filter((x) => x.time > 0);
  }, 10);

  $bus.on("alertTest", function (data) {
    alerts.value.push({ data, fading: false, time: timeOut });
    // setExpiration(alerts.value, 0, 5000);
  });
</script>

<style lang="scss" scoped>
  .alert-container {
    position: fixed;
    z-index: 9;
    display: flex;
    flex-direction: column;
    bottom: 0;
    gap: 5px;
    margin: 5px;
    right: 0;
    // height: 0;
    max-width: 690px;
    font-family: var(--font-primary);
    align-items: flex-end;
    .alert-balloon {
      color: var(--color-secondary);
      position: relative;
      z-index: 10;
      background: var(--bg-failed);
      backdrop-filter: blur(5px);
      animation: 1s bounceInRight;
      box-shadow: 2px 2px 14px var(--shadow-color);
      border: var(--border-template);
      overflow: hidden;
      border-radius: var(--border-radius);
      &.green {
        background: var(--bg-success);
      }
      .content-wrapper {
        display: flex;
        .image {
          padding: 14px 12px;
          padding-right: 0;
          img {
            width: 32px;
          }
        }
        .text {
          line-height: 1.12em;
          font-size: 1.12em;
          padding: 14px 12px;
        }
      }
      .loader {
        background: var(--color-secondary);
        transition: 0.01s;
        height: 3px;
        float: right;
      }
      &.gone {
        animation: 1s lightSpeedOutRight;
      }
    }
  }
</style>
