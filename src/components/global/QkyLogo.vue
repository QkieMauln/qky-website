<template>
  <span class="logo-qky">
    <img alt="logo" src="@/assets/qky.svg" />
    <router-link to="/">
      <span class="title">
        <span class="ch-alt">Qky.Life</span>
        <!-- <span class="ch">Qky</span>
        <span class="ch">.life</span> -->
      </span>
      <details style="display: none">{{ theHiddenText }}</details>
    </router-link>
  </span>
</template>
<style lang="scss" scoped>
  .logo-qky {
    margin-bottom: 5px;
    font-family: var(--font-secondary);
    font-size: 34px;
    letter-spacing: var(--text-spacing);
    a {
      text-decoration: none;
    }

    img {
      width: 43px;
      height: auto;
      position: absolute;
      top: -3.1px;
      left: 23.3px;
      z-index: 0;
      opacity: 0.5;
      transform: rotate(-8deg) translate(86%, 35px) scale(3);
      transform-origin: bottom right;
      image-rendering: pixelated;
    }

    .title {
      position: relative;
      left: 10px;
      z-index: 1;
      .ch-alt {
        color: var(--color-secondary);
        bottom: -2px;
        position: relative;
      }
      .ch {
        font-family: var(--font-secondary);
        &:nth-child(1) {
          color: var(--color-link);
          font-weight: bolder;
          text-shadow: -1px -1px 0 var(--color-primary);
        }

        &:nth-child(2) {
          color: var(--color-primary);
          font-size: 0.4em;
          text-decoration: underline;
        }
      }
    }
  }

  // @keyframes logo-animation {
  //   50%, 90% {
  //     transform: rotate(-8deg) translate(20%, 3px);
  //   }
  //   70%, 80% {
  //     transform: rotate(0deg) translate(0%, 0px);
  //   }
  // }
</style>

<script lang="ts" setup>
  const theHiddenText = `
!!
Cry About It!
!!
`;
</script>
