<script setup>
import navItems from "./navItems.vue";
</script>

<template>
  <nav class="nav-container">
    <router-link to="/"><img src="../assets/logo-secondary.svg" alt="PJA Tournament logo" /></router-link>
    <navItems />
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 2%;
  align-content: center;
}
nav img {
  max-width: 100px;
  height: 100px;
  position: relative;
  left: 20px;
}

@media screen and (max-width: 767px) {
  .nav-container {
    padding-bottom: 1em;
  }
  .nav-container img {
    margin: unset;
    max-width: 65px;
    height: 65px;
  }
}
</style>
