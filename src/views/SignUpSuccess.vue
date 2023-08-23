<script setup>
import teamInfo from "../components/teamInfo.vue";
import secondaryNav from "../components/secondaryNav.vue";
import venmo from "../components/Venmo.vue";
import check from "../components/Check.vue";
</script>
<template>
  <secondaryNav />
  <div class="sign-up__success">
    <div class="container info-container mt-4">
      <div class="text-center pt-4">
        <h1 class="pt-4">All Set!</h1>
        <h4>Review your details below</h4>
      </div>
      <teamInfo />
      <div class="payment--info row col-md-10 mx-auto p-4">
        <h2 class="text-center w-100 pt-4">Payment Methods</h2>
        <div class="my-4 row mx-auto w-100">
          <div class="col-md-12 text-center">
            <h3>Ticket Price:</h3>
            <h5>{{ ticketPrice }} per player</h5>
          </div>
          <div class="col-md-10 row my-4 mx-auto">
            <div class="col-md-6"><check /></div>
            <div class="col-md-6 venmo-container"><venmo /></div>
          </div>
        </div>
      </div>
      <div class="col-md-10 mx-auto my-4 px-4">
        <p>
          If you see an issue with your submission, please reach out to our
          tournament admins at
          <a href="mailto:pjatournament@gmail.com">pjatournament@gmail.com</a>.
        </p>
        <p>
          Please provide your team name, team id and division in your inquiry.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
      ticketPrice: "$95.00",
    };
  },
};
</script>
<style scoped>
.card {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.payment--info {
  background-color: var(--tertiaryColor);
}
@media screen and (max-width: 767px) {
  .container {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 1em;
  }
  .venmo-container {
    margin-top: 2em;
  }
}
</style>
