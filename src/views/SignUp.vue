<script setup>
import teamSignUpForm from "../components/teamSignUpForm.vue";
import secondaryNav from "../components/secondaryNav.vue";
import signInForm from "../components/signInForm.vue";
</script>
<template>
  <secondaryNav />
  <div class="sign-up">
    <div class="container">
      <div v-if="!user">
        <signInForm />
      </div>
      <div v-if="user">
        <teamSignUpForm />
      </div>
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
