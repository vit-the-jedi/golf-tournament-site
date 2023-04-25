<template>
  <!-- <loadingSpinner /> -->
  <form @submit="checkForm">
    <div class="form-inner">
      <h2>Enter the secret word to access the admin panel</h2>

      <div class="form-inset">
        <input type="text" id="adminSecret" />
      </div>
      <button type="submit">Continue</button>
    </div>
  </form>
</template>

<script>
import { addToFirestore } from "../middleware/db.js";
import loadingSpinner from "../components/loading.vue";
export default {
  data() {
    return {
      errors: [],
      adminSecretEntered: null,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      if (!this.adminSecretEntered) {
        this.errors.push(
          "Please enter the admin secret to access the admin area."
        );
      }
      e.preventDefault();
    },
    removeErrors: function () {
      const error = document.querySelector(".error");
      if (error) document.removeChild(error);
    },
    formSubmitHandler: async function () {
      //programmatically route to success page w/ relevant form data we can post back for user review
      this.$router.push({
        path: "/signup-success",
        query: {
          players: playersString,
          division: team.division,
          teamName: team.teamName,
        },
      });
    },
  },
};
</script>

<style scoped></style>
