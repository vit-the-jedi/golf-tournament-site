import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

//views
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import SignUp from "@/views/SignUp.vue";

//create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
  ],
});

//create app and init router on it
createApp(App).use(router).mount("#app");
