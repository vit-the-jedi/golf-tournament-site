<script setup>
//import auth from firebase
import { app } from "../middleware/db.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";
import { store } from "../store/index.js";

//components
import secondaryNav from "../components/secondaryNav.vue";

const router = useRouter();
const auth = getAuth(app);
const getAuthState = () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/admin/sign-in");
    } else {
      // User is signed in
      store.commit("setUser", { uid: user.uid });
    }
  });
};
onBeforeMount(() => {
  getAuthState();
});
</script>
<template>
  <secondaryNav />
</template>
