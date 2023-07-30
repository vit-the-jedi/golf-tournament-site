<script setup>
//components
import signInForm from "../components/signInForm.vue";
import secondaryNav from "../components/secondaryNav.vue";
import { onBeforeMount } from "vue";
import { store } from "../store";
</script>

<template>
  <secondaryNav />
  <div class="sign-in">
    <div class="container">
      <div class="card"><signInForm /></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
};
</script>
<style scoped>
.card {
  padding-top: 3em;
  padding-bottom: 3em;
}
</style>
