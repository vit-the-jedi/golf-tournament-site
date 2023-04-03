<template>
  <div class="item">
    <router-link to="/"> <slot name="navItemText">Home</slot> | </router-link>
    <router-link to="/signup">
      <slot name="navItemText">Sign Up</slot> |
    </router-link>
    <router-link to="/about">
      <slot name="navItemText">About</slot>
    </router-link>
  </div>
</template>
