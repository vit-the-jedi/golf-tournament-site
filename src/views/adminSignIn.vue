<script setup>
import adminSignInForm from "../components/adminSignInForm.vue";
</script>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
};
</script>
<template>
  <div class="admin admin--sign-in">
    <adminSignInForm />
  </div>
</template>

<style scoped>
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
