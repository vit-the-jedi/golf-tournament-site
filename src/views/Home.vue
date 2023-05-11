<script setup>
import mainNav from "../components/mainNav.vue";
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
      user: null,
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
  <mainNav />
  <header class="top-content">
    <div class="logo py-3"><img src="../assets/logo.svg" alt="PJA logo" /></div>
    <div class="top-info row py-3">
      <div class="col-6 info--item">
        <p>{{ outputDate }}</p>
      </div>
      <div class="col-6 info--item"><p>100+ Players</p></div>
      <div class="col-6 info--item"><p>Trophies Awarded</p></div>
      <div class="col-6 info--item"><p>Charitable Donations</p></div>
      <p class="py-3">
        The PJA Tournament is organized by the Vitello and Lowell families, and
        growing annually thanks to participation by amazing family and friends.
      </p>

      <div><router-link to="/about">Learn More</router-link></div>
    </div>
  </header>
  <div class="home">
    <div class="container info-container">
      <div class="card">
        <div class="button-container">
          <!--TODO create signup btn component
           <signUpBtn/>-->
          <small>(max 4 players)</small>
        </div>
        <div class="card sub--card">
          <div class="row">
            <div class="col-md-6 col-12">
              <h3>
                Entry Deadline:
                <span>
                  <!--TODO create method to putput deadline (date of tourny minus 1 week)-->{{
                    outputDeadline
                  }}</span
                >
              </h3>
            </div>
            <div class="col-md-6 col-12">
              <h2>When & where?</h2>
              <p>{{ outputDate }}</p>
              <p>{{ outputGolfCourse }}, {{ outputGolfCourseAddress }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <div class="row info--row">
      <div class="info--card">
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
