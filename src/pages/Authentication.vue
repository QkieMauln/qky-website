<template>
  <div class="content">
    <div class="auth-wrapper">
      <div class="nav-section">
        <router-link class="navigation-button" v-emoji="'🚪 Login'" to="/authentication/login"></router-link>
        <router-link class="navigation-button" v-emoji="'📩 Register'" to="/authentication/register"></router-link>
      </div>
      <div class="auth-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import $bus from "@/lib/eventBus";

  export default {
    mounted() {
      $bus.emit("isLoggedIn", true);
    }
  };
</script>

<style lang="scss" scoped>
  .auth-wrapper {
    margin: 0 auto;
    padding: 7% 0;
    max-width: 500px;
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 480px) {
      display: block;
    }
    .nav-section {
      display: block;
      box-shadow: 2px 2px 7px var(--shadow-color);
      @media screen and (max-width: 480px) {
        display: flex;
      }
      .navigation-button:any-link {
        @media screen and (max-width: 480px) {
          width: 100%;
          text-align: center;
          color: var(--color-primary) !important;
          text-decoration: none;
        }
        display: block;
        color: var(--color-primary) !important;
        text-decoration: none;
        background: var(--bg-main-dark);
        padding: 10px;
        white-space: nowrap;
        // font-weight: bold;
        font-family: var(--font-secondary);
        cursor: pointer;
        &.router-link-active {
          background: var(--bg-main);
        }
      }
    }
    .auth-content {
      background: var(--bg-main);
      padding: 10px;
      width: 100%;
      box-shadow: 2px 2px 7px var(--shadow-color);
    }
  }
</style>
