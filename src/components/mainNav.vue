<script setup>
import navItems from "./navItems.vue";
</script>

<template>
  <div class="nav-container">
    <img
      alt="Vue logo"
      class="logo"
      src="../assets/logo.svg"
      width="125"
      height="125"
    />
    <navItems />
  </div>
</template>
<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 2.5vh;
}
.nav-container .item {
  padding: 0 5%;
}
.nav-container .item a {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo {
  max-width: 50px;
  height: auto;
}
</style>
