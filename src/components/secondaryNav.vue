<script setup>
import navItems from "./navItems.vue";
</script>

<template>
  <nav class="nav-container">
    <img src="../assets/logo-secondary.svg" alt="PJA Tournament logo" />
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
  height: auto;
  position: relative;
  left: 20px;
}
</style>
