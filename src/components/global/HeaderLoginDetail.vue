<template>
  <div class="detail-login">
    <div class="user-wrapper">
      <div class="profile-picture">
        <img src="https://qky.thighs.media/questions/7040f882.png" alt="profile picture bruh" />
      </div>
      <div class="details">
        <div>
          <span v-emodown="`👋 Welcome, **${userData.username}** `"></span>
        </div>
        <hr />
        <span v-emodown="`🌟 Tier **{{ userData.trustLevel }}** (${trustData[userData.trustLevel]})`"></span>
      </div>
    </div>
    <span class="interaction-wrapper">
      <button class="red">Logout</button>
      <button class="">Settings...</button>
    </span>
  </div>
</template>

<script>
  import { authenticated } from "@/store/authenticated";
  // import { setup, onMounted } from "vue";
  import { storeToRefs } from "pinia";
  export default {
    data: () => {
      const trustData = [
        "Member",
        "👥 Friends",
        "🌟 Close Friends",
        "✨ My Best Friends",
        "💖 More Than Friends",
        "🐾 Owner"
      ];
      return { trustData, userData: { username: "null", trustLevel: 0 } };
    },
    mounted() {
      console.log(this.userData);
      // const { userData } = authenticated();
      this.userData = { username: "Coolio", trustLevel: this.userData.trustLevel + 2 };
      console.log(this.userData);
    }
  };
</script>

<style lang="scss" scoped>
  .detail-login {
    padding: 5px 10px;
    background: var(--bg-main-light);
    position: relative;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    .user-wrapper {
      display: flex;
      width: 100%;
      align-items: center;
      .profile-picture {
        position: relative;
        padding: 0;
        img {
          border-radius: 100%;
          overflow: hidden;
          height: 60px;
          width: 60px;
          border: var(--border-template);
        }
      }
      div.details {
        width: 100%;
        margin-left: 10px;
        hr {
          margin: 7px 0;
          margin-bottom: 5px;
          margin-left: -10px;
          width: 100%;
          border-top: var(--border-template);
        }
        hr:after,
        hr:before {
          all: unset;
        }
      }
    }
    .interaction-wrapper {
      padding-left: 10px;
      display: grid;
      gap: 5px;
      button {
        border-radius: var(--border-radius);
        border: var(--border-template);
        padding: 5px 10px;
        font-family: var(--font-secondary);
        background: var(--bg-main);
        box-shadow: 2px 2px 0 var(--bg-main-dark);
        color: var(--color-primary);
        &.red {
          background: var(--bg-failed);
        }
        cursor: pointer;
        &:hover {
          transition: 100ms;
          transform: translate(2px, 2px);
          box-shadow: 0px 0px 0 var(--shadow-color);
        }
      }
    }
  }
</style>
