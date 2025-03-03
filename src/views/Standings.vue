<script setup>
import secondaryNav from "../components/secondaryNav.vue";
import StandingsList from "../components/standingsList.vue";
</script>

<template>
  <secondaryNav />
  <div class="container">
    <div class="standings">
      <div class="text-center">
        <h1>Standings</h1>
        <h4>Standings are updated on a real-time basis</h4>
      </div>
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
