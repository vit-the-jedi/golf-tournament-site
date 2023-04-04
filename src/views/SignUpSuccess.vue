<script setup>
import topContent from "../components/topContent.vue";
</script>
<template>
  <div class="sign-up__success">
    <topContent>
      <template #heading>You're all set!</template>
    </topContent>
    <div class="container">
      <p>Thanks for signing up! Your team details are below.</p>
      <p>
        Please take a screenshot, we'll use your team name to identify you
        moving forward.
      </p>
    </div>
  </div>
</template>
<style scoped>
.sign-up__success .top-content {
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.1993391106442577) 0%,
      rgba(0, 0, 0, 0.27777048319327735) 100%
    ),
    url("../assets/hero.jpg");
}
</style>
