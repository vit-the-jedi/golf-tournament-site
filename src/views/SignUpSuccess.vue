<script setup>
import teamInfo from "../components/teamInfo.vue";
import secondaryNav from "../components/secondaryNav.vue";
</script>
<template>
  <secondaryNav />
  <div class="sign-up__success">
    <div class="container info-container mt-4">
      <div class="text-center pt-4">
        <h1 class="pt-4">All Set!</h1>
        <h4>Review your details below</h4>
      </div>
      <teamInfo />
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
@media screen and (max-width: 767px) {
  .container {
    padding: 0;
  }
}
</style>
