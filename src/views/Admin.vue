<script setup>
//import auth from firebase
import { app } from "../middleware/db.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";
import { store } from "../store/index.js";

//components
import secondaryNav from "../components/secondaryNav.vue";
import listTeams from "../components/listTeams.vue";

const router = useRouter();
const auth = getAuth(app);
const getAuthState = () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/sign-in");
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
  <div class="container">
    <listTeams />
  </div>
</template>

<style>
.admin--column,
.admin--tools button {
  flex-basis: 25%;
}
.admin--tools {
  width: 100%;
}
.admin--tools button {
  background: grey;
  padding: unset;
  font-size: unset;
}
.admin--item {
  display: flex;
  justify-content: space-between;
  padding: 5vh 2vh;
}
.admin--item:nth-child(odd) {
  background: #acacac;
}
.admin--item:nth-child(even) {
  background: #e6e6e6;
}
.admin--item span {
  display: block;
}
</style>
