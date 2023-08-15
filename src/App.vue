<script setup>
import infoModal from "./components/infoModal.vue";
import loadingScreen from "./components/loadingScreen.vue";
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
  data() {
    return {
      alert: {
        showAlert: false,
        alertOptions: {
          type: "",
          title: "",
          body: "",
          removable: null,
          action: {},
        },
      },
    };
  },
  computed: mapState(["user"]),
};
</script>
