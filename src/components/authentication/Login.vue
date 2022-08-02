<template>
  <h1>Login</h1>
  <div class="input-group">
    <input placeholder="Your Username..." v-model="username" />
  </div>
  <div class="input-group and-button">
    <input placeholder="Your Password..." :type="nakedpass ? 'text' : 'password'" v-model="password" />
    <button
      :class="{ 'input-button': true, active: nakedpass }"
      @click="nakedpass = !nakedpass"
      v-emoji="'👀'"
    ></button>
  </div>
  <div class="input-group">
    <p>Fill out all the fields then finish the Captcha.</p>
  </div>
  <div class="input-group">
    <vue-hcaptcha sitekey="fdffe708-4009-493f-b5c4-8fba5b887358" @verify="captchaSubmit"></vue-hcaptcha>
  </div>
  <div class="input-group">
    <button class="lets-go" v-if="captchaData" @click.prevent="captchaSubmit()">Login!</button>
  </div>
</template>

<script>
  import { ref } from "vue";
  import $axios from "@/lib/axios";
  import $router from "@/lib/router";
  import { authenticated } from "@/store/authenticated";
  import $bus from "@/lib/eventBus";
  let captchaData = ref("");
  import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";

  export default {
    components: { VueHcaptcha },
    data: () => ({ nakedpass: false, username: "", password: "" }),
    setup() {
      return { captchaData };
    },
    methods: {
      captchaSubmit(x, e) {
        let dataPost = this.$data;
        if (x) captchaData.value = x;
        dataPost["CaptchaResponse"] = x ?? captchaData.value;
        $axios
          .post("/signin", dataPost)
          .then((r) => {
            console.log(r.data);
            localStorage.setItem("token", r.data.accessToken);
            // localStorage.setItem("refreshToken", r.data.refreshToken);
            authenticated().loggedIn(r.data);
            $bus.emit("alertTest", r.data);
            $router.push("/");
          })
          .catch((e) => {
            if (e.response) return $bus.emit("alertTest", { message: e.response.data.message ?? "No Response..." });
            $bus.emit("alertTest", { message: "No Response from server..." });
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 30px;
  }
  .input-group {
    font-family: var(--font-primary);
    margin-bottom: 10px;
    &.and-button {
      display: flex;
      input {
        border-radius: 0px;
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
    }
    * {
      animation: pop-down 0.7s;
    }
    input {
      background: var(--bg-main-dark);
      border: var(--border-template);
      border-radius: var(--border-radius);
      color: var(--color-primary);
      padding: 10px 10px;
      width: 100%;
      outline: 0;
      font-family: var(--font-secondary);
      &:focus {
        transition: 0.3s;
        box-shadow: inset 2px 2px 0 var(--shadow-color), inset 2px 2px 5px var(--shadow-color);
      }
    }
    button {
      border: var(--border-template);
      border-left: none;
      font-family: var(--font-secondary);
      font-size: 1.1em;
      cursor: pointer;
      &.lets-go {
        background: var(--bg-success);
        width: 100%;
        padding: 10px 15px;
        border-radius: var(--border-radius);
        box-shadow: 2px 2px 0 var(--bg-success-dark);
        &:hover {
          transform: translate(2px, 2px);
          box-shadow: none;
          transition: 0.1s;
        }
      }
      &.input-button {
        background: var(--bg-main-light);
        border-top-right-radius: var(--border-radius);
        box-shadow: none;
        border-bottom-right-radius: var(--border-radius);
        transition: 0.3s;
        &.active {
          box-shadow: inset 2px 2px 0 var(--shadow-color), inset 2px 2px 5px var(--shadow-color);
          background: var(--bg-main);
        }
      }
    }
  }
  @keyframes pop-down {
    from {
      opacity: 0;
      margin-top: -10px;
    }
  }
</style>
