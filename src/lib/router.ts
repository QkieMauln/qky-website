import { createRouter, createWebHistory, createMemoryHistory, Router, RouteRecordRaw } from "vue-router";

import Index from "@/pages/Index.vue";
import Example from "@/pages/Example.vue";
import Test from "@/pages/Test.vue";
import About from "@/pages/About.vue";
import Gallery from "@/pages/Gallery.vue";
import Family from "@/pages/Family.vue";
import FluffyChat from "@/pages/FluffyChat.vue";
import Authentication from "@/pages/Authentication.vue";
import LoginSection from "@/components/authentication/Login.vue";
import RegisterSection from "@/components/authentication/Register.vue";
import NotFound from "@/pages/NotFound.vue";
import Blog from "@/pages/Blog.vue";

import { authenticated } from "@/store/authenticated";

const routes: Array<RouteRecordRaw> = [
  {
    component: Index,
    path: "/",
    name: "index"
  },
  {
    component: Example,
    path: "/example",
    name: "example",
    meta: { title: "Examples", trustLevel: 1 }
  },
  {
    component: Test,
    path: "/test",
    name: "test",
    meta: { title: "Testing", trustLevel: 3 }
  },
  {
    component: Gallery,
    path: "/gallery",
    name: "Gallery",
    meta: { title: "Qky's Gallery" }
  },
  {
    component: Family,
    path: "/family",
    name: "Family",
    meta: { title: "Qky's Family" }
  },
  {
    component: FluffyChat,
    path: "/fluffy/chat",
    name: "Chat",
    meta: { title: "Qky's Test" }
  },
  {
    component: Authentication,
    path: "/authentication",
    name: "Login",
    children: [
      {
        path: "",
        redirect: "/authentication/login"
      },
      {
        path: "login",
        component: LoginSection,
        meta: { title: "Log In" }
      },
      {
        path: "register",
        component: RegisterSection,
        meta: { title: "Register" }
      }
    ],
    meta: { mustNotAuthenticated: true }
  },
  {
    component: Blog,
    path: "/blog",
    name: "Blog",
    meta: { title: "Diary Blog" }
  },
  {
    component: About,
    path: "/about",
    name: "About",
    meta: { title: "About Qky" }
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound, meta: { title: "I'm lost!" } }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach(async (to) => {
  if (to.meta.mustNotAuthenticated) return !(authenticated().userData.username && authenticated().userData.trustLevel);
  if (typeof to.meta.trustLevel == "number") return authenticated().userData.trustLevel <= to.meta.trustLevel;
});
router.afterEach((to) => {
  const baseTitle = "Qky's Website";
  if (to.name === "index") {
    document.title = baseTitle;
  } else {
    document.title = `${to.meta.title} | ${baseTitle}`;
  }
});

export default router;
/*
  createRouter(): any {
    return _createRouter({
      // use appropriate history implementation for server/client
      // import.meta.env.SSR is injected by Vite.
      history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
      routes
    });
  }
};
*/
