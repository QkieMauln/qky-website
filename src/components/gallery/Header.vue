<template>
  <div class="header gallery animate__animated animate__fadeInDown animate__faster">
    <div class="text-header">
      <span class="title">Qky's Galleries</span>
      <span class="description p-5">
        This is where i put all of my creations and stuff here, Animations, Drawing, Projects, etc
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header.gallery {
    font-family: var(--font-primary);
    border-bottom: 5px solid var(--bg-main-light);
    background: linear-gradient(0deg, var(--bg-main-dark), transparent), url(@/assets/background_blocks_pattern.svg);
    background-size: 140px;
    height: 100px;
    .text-header {
      margin: 0 auto;
      bottom: -75px;
      position: relative;
      max-width: 450px;
      text-align: center;
      span {
        display: inline-block;
        &.title {
          color: var(--color-secondary);
          padding: 5px 25px;
          background: var(--bg-main-light);
          position: relative;
          margin: 0 auto;
          font-size: 32px;
          border-radius: var(--border-radius);

          margin-bottom: 10px;
          font-weight: bold;
        }
        &.description {
          padding: 5px;
          background: var(--bg-main);
        }
      }
    }
  }
</style>
