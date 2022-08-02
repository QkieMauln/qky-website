import { createApp } from "vue";
import { createPinia } from "pinia";
import twemoji from "twemoji";
import * as marked from "marked";
import App from "./App.vue";
import router from "@/lib/router";
import $EBus from "@/lib/eventBus";
import "@/style/normalize.css";
import "@/style/global.scss";
import "@/style/utils.scss";
import "animate.css";
import e from "express";

// @ts-ignore
const app = createApp(App).use(createPinia()).use(router);

app
  .directive("markdown", (el, bind) => {
    if (!bind.value) return;
    el.innerHTML = marked.marked(bind.value);
    // el.innerHTML = marked(bind.value);
  })
  .directive("emoji", (el, bind) => {
    if (!bind.value) return;
    el.innerHTML = twemoji.parse(bind.value, {
      folder: "svg",
      ext: ".svg"
    });
  })
  .directive("scrolldown", (el) => {
    // console.log(el.scrollTop, el.scrollHeight);
    // if (el.scrollTop > el.scrollHeight - 5000) return console.log("disabled Scroll. Scroll to bottom to continue");
    el.scrollTop = el.scrollHeight + 99999;
  })
  .directive("emodown", (el, bind) => {
    if (!bind.value) return;
    el.innerHTML = marked.marked(
      twemoji.parse(bind.value, {
        folder: "svg",
        ext: ".svg"
      })
    );
  });

// app.config.globalProperties.$bus = $EBus;
app.mount("#app");

// SSR in my cock
// import { createSSRApp } from "vue";

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
// export function createApp() {
//   const app = createSSRApp(App);
//   const route = router.createRouter();
//   app.use(route);
//   return { app, route };
// }
