<template>
  <div class="content">
    <div class="content-wrapper animate__animated animate__fadeInUp animate__faster">
      <img alt="404 | Not Found!" src="@/assets/doodles/uwu.svg" />
      <h1>There's Nothing in here! :3</h1>
      <p>You seems lost. wanna <router-link to="/">Go back?</router-link></p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .content-wrapper {
    text-align: center;
    padding-top: 10%;
    img {
      filter: invert(1);
    }
    h1 {
      margin-bottom: 15px;
    }
  }
</style>
