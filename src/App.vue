<script setup>
import infoModal from "./components/infoModal.vue";
</script>

<template>
  <infoModal v-if="alert.showAlert" v-bind:alert="alert" />
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
  mounted() {
    // const unsubscribe = store.subscribeAction({
    //   after: (action, state) => {
    //     console.log(`after action payload ${action.payload}`);
    //     if (action.payload === null) {
    //       const path = this.$router.currentRoute.value.fullPath;
    //       if (path === "/admin" || path === "/sign-up") {
    //         this.alert.showAlert = true;
    //         this.alert.alertOptions.type = "warn";
    //         this.alert.alertOptions.title = "Sign In Required";
    //         this.alert.alertOptions.body =
    //           "You must sign in before you can access this page.";
    //         this.alert.alertOptions.removable = false;
    //         this.alert.alertOptions.action.type = "linkout";
    //         this.alert.alertOptions.action.target = "/sign-in";
    //         this.alert.alertOptions.action.buttonText = "Sign In";
    //       }
    //     }
    //   },
    // });
  },
  unmounted() {
    this.unsubscribe();
  },
};
</script>
