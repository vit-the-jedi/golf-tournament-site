<script setup>
import "vue-toast-notification/dist/theme-bootstrap.css";
</script>

<template>
  <!-- <loadingScreen v-if="this.$store.getters.getLoadingState">
    <h1>{{ this.loadingHeader }}</h1>
    <img src="./assets/icons/loading-icon.png" />
    <h4>{{ this.loadingSubheader }}</h4>
  </loadingScreen> -->
  <router-view></router-view>
</template>
<script>
import { mapState } from "vuex";
import { store } from "./store";
export default {
  name: "vuex3",
  computed: mapState(["user"]),
};
</script>
