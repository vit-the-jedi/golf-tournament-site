import { createApp, ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

// import store
import { store } from "./store/index.js";

//views
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import SignUp from "@/views/SignUp.vue";
import SignUp__success from "@/views/SignUpSuccess.vue";
import Admin from "@/views/Admin.vue";
import adminSignIn from "@/views/adminSignIn.vue";

const loggedIn = ref(false);

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
    {
      path: "/signup-success",
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
  ],
});

// router.beforeEach(async (to) => {
//   // routes with `meta: { requiresAuth: true }` will check for the users, others won't
//   if (to.meta.requiresAuth) {
//     //get current user if signed in
//     if (!loggedIn.value) {
//       // No user is signed in.
//       return {
//         path: "/admin/sign-in",
//       };
//     } else {
//       // ok to go to admin
//       return {
//         path: "/admin",
//       };
//     }
//   }
// });
//create app and init router on it
createApp(App).use(router).use(store).mount("#app");
