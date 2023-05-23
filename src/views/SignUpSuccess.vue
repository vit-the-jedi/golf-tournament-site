<script setup>
import teamInfo from "../components/teamInfo.vue";
</script>
<template>
  <div class="sign-up__success">
    <topContent>
      <template #heading>You're all set!</template>
    </topContent>
    <div class="container info-container">
      <div class="top-copy">
        <h2>Thanks for signing up</h2>
        <p>
          Please take a screenshot, we'll use your team name to identify you
          moving forward.
        </p>
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
