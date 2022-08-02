<template>
  <footer>
    <div class="content-wrapper">
      <img class="logo-footer" alt="The logo" src="@/assets/qky.svg" />
      <div class="details">
        <span class="title">
          Qky.Life
          <span class="version">v1.0.0</span>
        </span>
        <div class="wrapper-flex">
          <div class="wrapper-item">
            Technology Used
            <div class="list-tech">
              <img
                v-for="(icon, i) in iconLogos"
                :key="'techIcon' + i"
                class="logo"
                :title="icon[1]"
                :alt="icon[1]"
                :src="icon[0]"
              />
            </div>
          </div>
          <div class="wrapper-item">
            <span>Copyright &copy; {{ year }} - QkyMauln</span>
            <div>
              <router-link to="/authentication">Log In!</router-link>
            </div>
            <div>
              <button class="btn" @click="themeSwitch().updateTheme()">
                Toggle Theme to {{ themeSwitch().getTheme().nextName }}!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
  // #646CFF vite //#3178C6 ts //#4FC08D vue//#1867C0 vtify//#339933 node//#F5792A blender
  import tslg from "@/assets/techs/typescript.svg";
  import vitelg from "@/assets/techs/vite.svg";
  import vuelg from "@/assets/techs/vuedotjs.svg";
  import pinialg from "@/assets/techs/pinia.svg";
  import themeSwitch from "@/store/theme";

  const year = new Date().getFullYear();
  const iconLogos = [
    [tslg, "TypeScript"],
    [vitelg, "Vite"],
    [vuelg, "Vue"],
    [pinialg, "Pinia"]
  ];
</script>

<style lang="scss" scoped>
  footer {
    background: var(--bg-main);
    position: absolute;
    width: 100%;
    min-height: 96px;
    .content-wrapper {
      margin: 0 auto;
      max-width: 625px;
      padding: 10px;
      display: flex;
      img.logo-footer {
        margin: 10px;
        width: 50px;

        @media screen and (max-width: 500px) {
          display: none;
        }
      }
      div.details {
        box-sizing: border-box;
        text-align: center;
        width: 100%;
        span.title {
          font-family: var(--font-secondary);
          font-size: 1.5em;
          .version {
            font-size: 0.75em;
            font-family: var(--font-secondary);
            font-weight: thin;
          }
        }
      }
      .wrapper-flex {
        margin-top: 10px;
        display: flex;
        .wrapper-item {
          min-width: 100px;
          width: 100%;
          font-family: Open Sans;
        }
      }
    }
  }
  .list-tech {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    img.logo {
      width: 25px;
      height: 25px;
    }
  }
</style>
