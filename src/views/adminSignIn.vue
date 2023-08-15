<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";

//vuex store
import { store } from "../store/index.js";
//components
import signInForm from "../components/signInForm.vue";
import secondaryNav from "../components/secondaryNav.vue";
</script>

<template>
  <secondaryNav />
  <div class="admin admin--sign-in">
    <div class="container">
      <signInForm />
    </div>
  </div>
</template>

<style scoped>
.admin {
  height: 100vh;
  padding: 10vh 0;
  background: var(--tertiaryColor);
}
h1,
p {
  text-align: center;
}
.info--row {
  background-color: black;
  padding: 10vh;
}
.info--row div {
  padding: 5vh;
  margin: 0vh auto;
}
.card.info--card {
  border: 2px solid #fff;
  background-color: transparent;
  height: 100%;
  color: #fff;
}
.info--card p,
.info--card h4,
.info--card h5,
.info--card ul {
  margin: 2.5vh 0;
}
</style>
