<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";
</script>
<template>
  <secondaryNav />
  <div class="about">
    <div class="top-content">
      <h1>A VITELLO FAMILY <span>TRADITION</span></h1>
    </div>
    <div class="container">
      <h2>34 Years and counting</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>
<style scoped>
.about .top-content {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.15) 00%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url("../assets/about.jpg");
  min-height: 75vh;
  position: relative;
}

h1 {
  position: absolute;
  bottom: 0;
  text-align: center;
}
h1 span {
  color: var(--secondColor);
  font-size: calc(2.5rem * 2);
}
.container {
  padding: 8%;
}
</style>
