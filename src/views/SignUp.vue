<script setup>
import signUpForm from "../components/signUpForm.vue";
import secondaryNav from "../components/secondaryNav.vue";
</script>
<template>
  <secondaryNav />
  <div class="sign-up">
    <div class="container">
      <signUpForm />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
    };
  },
};
</script>
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
