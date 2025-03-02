<script setup>
import StandingsList from "../components/standingsList.vue";
</script>

<template>
  <div class="container m-0">
    <div class="standings">
      <h1>Standings</h1>
      <h4>Standings are updated on a real-time basis</h4>
      <StandingsList />
    </div>
  </div>
</template>

<script>
export default {
  name: "Standings",
  data() {
    return {
      // Add your component data here
    };
  },
  methods: {
    // Add your component methods here
  },
  computed: {
    // Add your computed properties here
  },
  mounted() {
    // Lifecycle hook for when the component is mounted
  },
};
</script>

<style scoped>
.standings {
  /* Add your component styles here */
}
</style>
