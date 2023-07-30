<script setup>
import teamSignUpForm from "../components/teamSignUpForm.vue";
import secondaryNav from "../components/secondaryNav.vue";
import signInForm from "../components/signInForm.vue";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
</script>
<template>
  <secondaryNav />
  <div class="sign-up">
    <div class="container">
      <teamSignUpForm />
    </div>
  </div>
</template>
<script></script>
<style scoped>
.sign-up {
  height: 100vh;
  padding: 10vh 0;
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
