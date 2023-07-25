<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";
import listTeams from "../components/listTeams.vue";
import { store } from "../store";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { authStateListener } from "../auth/auth";
</script>
<template>
  <secondaryNav />
  <div class="container">
    <listTeams />
  </div>
</template>
<!-- <script>
import { mapState } from "vuex";
export default {
  data() {},
  name: "vuex1",
  computed: mapState(["user"]),
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "setUser" || mutation.type === "fetchUser") {
        if (!state.user.userLoggedIn) {
          this.$router.push("/sign-in");
        }
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script> -->

<style>
.admin--column,
.admin--tools button {
  flex-basis: 25%;
}
.admin--tools {
  width: 100%;
}
.admin--tools button {
  background: grey;
  padding: unset;
  font-size: unset;
}
.admin--item {
  display: flex;
  justify-content: space-between;
  padding: 5vh 2vh;
}
.admin--item:nth-child(odd) {
  background: #acacac;
}
.admin--item:nth-child(even) {
  background: #e6e6e6;
}
.admin--item span {
  display: block;
}
</style>
