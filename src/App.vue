<template>
  <div class="root" :data-theme-cp="themes.initial[theme]">
    <Login v-show="userData.username" />
    <HeaderNav />
    <div class="main-content-preview">
      <RouterView />
      <!-- <button @click.prevent="loginCheck()">LoginCheck Again</button> -->
    </div>
    <Footer />
    <AlertBox />
  </div>
</template>

<script setup>
  import HeaderNav from "@/components/global/HeaderNav.vue";
  import Footer from "@/components/global/Footer.vue";
  import AlertBox from "@/components/global/AlertBox.vue";
  import Login from "@/components/global/HeaderLoginDetail.vue";
  import $axios from "@/lib/axios";
  import { storeToRefs } from "pinia";
  import themeSwitch from "@/store/theme";
  import { ref, onMounted } from "vue";
  import { authenticated as auth } from "@/store/authenticated";
  import $bus from "@/lib/eventBus";

  const { theme, themes } = storeToRefs(themeSwitch());
  const authenticate = auth();
  const { userData } = storeToRefs(authenticate);

  function loginCheck() {
    $axios
      .get("@me", {
        headers: {
          "x-access-token": userData.value.token
        }
      })
      .then((r) => {
        authenticate.loggedIn(r.data);
      })
      .catch((e) => {
        if (!e.response)
          return $bus.emit("alertTest", {
            success: false,
            message:
              "The API doesn't respond! Some functionality might fail because some content need to be fetched from the API"
          });
        if (e.response.data.message == "Unauthorized! Access Expired!") {
          localStorage.setItem("token", null);
        }
      });
  }
  loginCheck();
</script>

<style scoped>
  .main-content-preview {
    min-height: calc(100vh - 156px);
  }
</style>
