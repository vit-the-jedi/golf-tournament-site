import { createApp, ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

//auth
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
      meta: {
        //requiresAuth: true
      }
      //beforeEnter: loginRequired,
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: signIn,
      //beforeEnter: loginRequired,
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
      meta: {
        requiresAuth: true
      }
      //beforeEnter: loginRequired,
    },
    {
      path: "/winners-circle",
      name: "winnersCircle",
      component: winnersCircle,
    },
  ],
});
function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe()
        resolve(user)
      },
      reject
    )
  })
}
const auth = getAuth();
router.beforeEach(async (to) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !(await getCurrentUser())) {
    return `/sign-in?redirect=${to.fullPath}`
  }
})

//create app and init router on it
createApp(App).use(router).use(store).mount("#app");