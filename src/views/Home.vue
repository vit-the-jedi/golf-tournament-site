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
      pricing: {
        ticketPrice: "$85.00",
        addOns: ["Golf Cart (per 1-2 players)", "Snacks", "Water"],
        trophies: [
          "First Place",
          "Second Place",
          "Third Place",
          "longest drive (front 9)",
          "longest drive (back 9)",
          "closest to pin (front 9)",
          "closest to pin  (back 9)",
        ],
      },
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
    outputPrice() {
      // `this` points to the component instance
      return this.pricing.ticketPrice;
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
          <ul>
            <li>{{ outputGolfCourse }}</li>
            <li>{{ outputGolfCourseAddress }}</li>
          </ul>
          <p>Please arrive promptly to sign in and find your cart.</p>
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
          <h4>Pricing</h4>
          <h5>Entry fee: $85.00</h5>
          <p>What's included:</p>
          <ul>
            <li v-for="item in pricing.addOns">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info--row {
  background-color: black;
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
.info--card p,
.info--card h4,
.info--card h5,
.info--card ul {
  margin: 2.5vh 0;
}
</style>
