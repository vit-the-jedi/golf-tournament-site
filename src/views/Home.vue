<script setup>
import topContent from "../components/topContent.vue";
import pricingTable from "../components/pricing.vue";
</script>

<script>
export default {
  data() {
    return {
      date: "October 21st, 2023",
      time: "8:00am",
      golfCourse: "Timberlin Golf Course",
      golfCourseAddress: "100 Golf Way, Berlin CT, 07678",
    };
  },
  computed: {
    // a computed getter
    outputDate() {
      // `this` points to the component instance
      return this.date;
    },
    outputTime() {
      // `this` points to the component instance
      return this.time;
    },
    outputGolfCourse() {
      // `this` points to the component instance
      return this.golfCourse;
    },
    outputGolfCourseAddress() {
      // `this` points to the component instance
      return this.golfCourseAddress;
    },
  },
};
</script>
<template>
  <div class="home">
    <topContent>
      <template #heading>Welcome to the 2023 PJA tournament!</template>
    </topContent>

    <div class="container info-container">
      <div class="top-copy">
        <h2>The tournament is on {{ outputDate }}!</h2>
        <h3><router-link to="/signup">Sign up</router-link> now!</h3>
      </div>
    </div>
    <div class="row info--row">
      <div class="col-md-6 col-12">
        <div class="card info--card">
          <h4>When?</h4>
          <p>{{ outputDate }}, {{ outputTime }}</p>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div class="card info--card">
          <h4>Where?</h4>
          <p>
            Snacks, water, and golf carts will be available! Please arrive
            promptly to sign in and find your cart.
          </p>
          <ul>
            <li>{{ outputGolfCourse }}</li>
            <li>{{ outputGolfCourseAddress }}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div class="card info--card">
          <h4>Rules</h4>
          <ul>
            <li>Teams of four.</li>
            <li>Scramble (best ball) format.</li>
            <li>Men's and Co-ed Leagues available.</li>
            <li>Incomplete teams will be joined to make a foursome.</li>
            <li>Have fun!</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div class="card info--card">
          <h4>Tournament Administrators</h4>
          <p>
            You can always reach out to any of these fine people if you need
            help or have questions!
          </p>
          <ul>
            <li>John Vitello</li>
            <li>Janice Vitello</li>
            <li>Paul Vitello</li>
            <li>Al Vitello</li>
            <li>Matt Vitello</li>
            <li>Nicole Lowell</li>
            <li>Anthony Lowell</li>
          </ul>
        </div>
      </div>
      <pricingTable />
    </div>
  </div>
</template>

<style scoped>
.top-copy {
  padding: 5vh 0;
}
.home .info-container > div {
  margin: 5vh auto;
}
.info--row {
  background-color: var(--lighter-color);
  padding: 10vh;
}
.info--row div {
  padding: 5vh;
  margin: 0vh auto;
}
.card.info--card {
  border: 2px solid #fff;
  background-color: transparent;
  height: 100%;
  color: #fff;
}
</style>
