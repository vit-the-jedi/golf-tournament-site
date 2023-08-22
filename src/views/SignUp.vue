<script setup>
import teamSignUpForm from "../components/teamSignUpForm.vue";
import secondaryNav from "../components/secondaryNav.vue";
import loadingScreen from "../components/loadingScreen.vue";
</script>
<template>
  <secondaryNav />
  <!-- <loadingScreen :loading-screen="loadingScreen" v-if="this.showLoader">
    <h1>{{ this.loadingHeader }}</h1>
    <img src="./assets/icons/loading-icon.png" />
    <h4>{{ this.loadingSubheader }}</h4>
  </loadingScreen> -->
  <div class="sign-up">
    <div class="container">
      <teamSignUpForm />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoader: false,
      loadingHeader: "hello",
      loadingSubheader: "test test test",
    };
  },
  methods: {
    loadingScreen() {
      alert("ayyyy");
    },
  },
};
</script>
<style scoped>
.sign-up {
  height: 100vh;
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
