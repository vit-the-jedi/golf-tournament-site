<script setup>
import topContent from "../components/topContent.vue";
import signUpForm from "../components/signUpForm.vue";
</script>
<template>
  <div class="sign-up">
    <div class="container">
      <signUpForm />
    </div>
  </div>
</template>
<style scoped>
.sign-up .top-content {
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.1993391106442577) 0%,
      rgba(0, 0, 0, 0.27777048319327735) 100%
    ),
    url("../assets/hero.jpg");
}
</style>
