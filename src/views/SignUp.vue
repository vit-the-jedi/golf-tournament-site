<script setup>
import teamSignUpForm from "../components/teamSignUpForm.vue";
import secondaryNav from "../components/secondaryNav.vue";
import signInForm from "../components/signInForm.vue";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";

//import auth from firebase
import { app } from "../middleware/db.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = useRouter();
const auth = getAuth(app);
const getAuthState = () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/sign-in?redirect=sign-up");
    } else {
      return;
    }
  });
};
onBeforeMount(() => {
  getAuthState();
});
</script>
<template>
  <secondaryNav />
  <div class="sign-up">
    <div class="container">
      <teamSignUpForm />
    </div>
  </div>
</template>
<script>
import { store } from "../store/index.js";
export default {
  data() {
    return {
      userSignedIn: null,
    };
  },
};
</script>
<style scoped>
.sign-up {
  height: 100vh;
  padding: 10vh 0;
  background: var(--tertiaryColor);
}
.sign-up .top-content {
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.1993391106442577) 0%,
      rgba(0, 0, 0, 0.27777048319327735) 100%
    ),
    url("../assets/hero.jpg");
}
</style>
