<script setup>
import topContent from "../components/topContent.vue";
</script>

<script>
export default {
  data() {
    return {
      date: "October 21st, 2023",
      time: "8:00am",
      golfCourse: "Timberlin Golf Course",
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
  },
};
</script>
<template>
  <div class="home">
    <topContent>
      <template #heading>Welcome to the 2023 PJA tournament!</template>
    </topContent>

    <div class="container info-container">
      <div>
        <h2>The tournament is on {{ outputDate }}!</h2>
        <h3><router-link to="/signup">Sign up</router-link> now!</h3>
      </div>
      <div>
        <h4>Quick Info</h4>
        <p>
          Some text about the tournament and who runs it and how many people
          come every year blah blah blah
        </p>
      </div>
      <div>
        <h5>Date/Time/Location</h5>
        <ul>
          <li>{{ outputDate }}</li>
          <li>{{ outputGolfCourse }}</li>
          <li>{{ outputTime }}</li>
        </ul>
      </div>
      <div>
        <h5>Rules</h5>
        <ul>
          <li>Teams of four.</li>
          <li>Scramble (best ball) format.</li>
          <li>Men's and Co-ed Leagues available.</li>
          <li>Incomplete teams will be joined to make a foursome.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home .top-content {
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.1993391106442577) 0%,
      rgba(0, 0, 0, 0.27777048319327735) 100%
    ),
    url("../assets/hero.jpg");
}

.home .info-container > div {
  margin: 5vh auto;
}
</style>
