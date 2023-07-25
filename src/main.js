import { createApp, ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

//auth
import { auth } from "./middleware/db";

//middleware
import { getUserPermissions, db } from "./middleware/db.js";

// import store
import { store } from "./store/index.js";

//views
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import SignUp from "@/views/SignUp.vue";
import SignUp__success from "@/views/SignUpSuccess.vue";
import Admin from "@/views/Admin.vue";
import adminSignIn from "@/views/adminSignIn.vue";
import winnersCircle from "@/views/winnersCircle.vue";
import signIn from "@/views/signIn.vue";
import { authStateListener } from "./auth/auth";

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
      path: "/sign-up",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: signIn,
    },
    {
      path: "/sign-up-success",
      name: "SignUp__success",
      component: SignUp__success,
    },
    {
      path: "/admin/sign-in",
      name: "adminSignIn",
      component: adminSignIn,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/winners-circle",
      name: "winnersCircle",
      component: winnersCircle,
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  console.log(to.fullPath);
  await authStateListener();
  next();
});
//create app and init router on it
createApp(App).use(router).use(store).mount("#app");
