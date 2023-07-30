import { createApp, ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

//auth
import { checkAuthStatus } from "./auth/auth";
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

const authenticated = () => {
  return checkAuthStatus.then((user) => {
    if (user) return true;
    else return false;
  });
};

async function loginRequired(to, from, next) {
  const userAuthenticated = await authenticated();
  if (to.fullPath === "/sign-in") {
    if (userAuthenticated) {
      next("/");
    } else {
      next();
    }
  } else {
    if (userAuthenticated) {
      if (to.fullPath === "/sign-in") next("/");
      else next();
    } else {
      next("/sign-in");
    }
  }
}

const checkTeam = (to, from, next) => {
  const teamInStore = store.getters.getTeam;
  const savedTeam = JSON.parse(sessionStorage.getItem("team"));
  if (teamInStore) {
    next();
  } else {
    if (savedTeam) {
      store.commit("setTeam", savedTeam);
      next();
    } else {
      next("/sign-up");
    }
  }
};

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
      beforeEnter: loginRequired,
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: signIn,
      beforeEnter: loginRequired,
    },
    {
      path: "/sign-up-success",
      name: "SignUp__success",
      component: SignUp__success,
      beforeEnter: checkTeam,
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
      beforeEnter: loginRequired,
    },
    {
      path: "/winners-circle",
      name: "winnersCircle",
      component: winnersCircle,
    },
  ],
});

//create app and init router on it
createApp(App).use(router).use(store).mount("#app");
