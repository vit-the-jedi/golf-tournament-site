<script setup>
import mainNav from "../components/mainNav.vue";
</script>

<script>
export default {
  data() {
    return {
      date: "October 7th, 2023",
      time: "8:00am",
      golfCourse: "Hawk's Landing Golf Course",
      golfCourseAddress: "201 Pattonwood Dr Southington, CT 06489",
      pricing: {
        ticketPrice: "$85.00",
        addOns: [
          "Golf Cart (per 1-2 players)",
          "Snacks",
          "Water",
          "Trophies (1st, 2nd, 3rd place per division, plus longest drive and closest to pin for both front and back 9)",
          "All proceeds after operational charges will be donated to the ",
        ],
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
      <p class="pt-3 mb-0">
        The PJA Tournament is organized by the Vitello family, and growing
        annually thanks to participation of amazing family and friends.
      </p>
      <router-link to="/about">Learn More</router-link>
    </div>
  </header>
  <div class="home">
    <div class="container info-container">
      <div class="card">
        <div class="button-container mb-4">
          <button><router-link to="/sign-up">SIGN UP</router-link></button>
          <small class="text-center d-block w-100">(max 4 players)</small>
        </div>
        <div class="card sub--card entry--info">
          <div class="row">
            <div class="col-12">
              <h2>Entry Deadline:</h2>
              <h3>
                <!--TODO create method to putput deadline (date of tourny minus 1 week)
                  {{ outputDeadline }}-->
                September 31st, 2023
              </h3>
            </div>
            <div class="col-12">
              <h2>When & where?</h2>
              <p>{{ outputDate }}</p>
              <p><strong>SHOTGUN START @ 10AM</strong></p>
              <p>{{ outputGolfCourse }},</p>
              <p>{{ outputGolfCourseAddress }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card pricing">
        <div class="card sub--card">
          <div class="row">
            <div class="col-12">
              <h2>Pricing</h2>
              <h3>Entry fee: $85.00</h3>
            </div>
            <div class="col-12">
              <h4>What's included:</h4>
              <ul>
                <li v-for="item in pricing.addOns">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="row pricing--payment">
            <div class="col-12">
              <h2>Payment Methods</h2>
              <p>Check payable to:</p>
              <ul>
                <li>John Vitello</li>
                <li>P.O Box 7009</li>
                <li>Meriden, CT, 06450</li>
                <li><a href="mailto:jayvee1@att.net">jayvee1@att.net</a></li>
              </ul>
            </div>
            <div class="col-12">
              <img src="../assets/Venmo_Logo_White.png" alt="Venmo Logo" />
              <p>@PJA-tournament</p>
              <!---VENMO QR HERE-->
              <div id="venmo"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card rules">
        <div class="card sub--card">
          <h2>Rules</h2>
          <div class="col-12">
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
      <div class="wrap-up">
        <div class="wrap-up--text">
          <h3>Ready to have some fun?</h3>
          <p>Sign up and get started</p>
          <div class="button-container mb-4">
            <button><router-link to="/sign-up">SIGN UP</router-link></button>
            <small class="text-center d-block w-100">(max 4 players)</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-content .info--item::before {
  display: inline-block;
  width: 3vw;
  height: 3vh;
  top: 4px;
  position: relative;
  content: "";
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: 5px;
}
.top-content .info--item:nth-of-type(1)::before {
  background-image: url("../assets/icons/calendar-regular.svg");
}
.top-content .info--item:nth-of-type(2)::before {
  background-image: url("../assets/icons/people-group-solid.svg");
}
.top-content .info--item:nth-of-type(3)::before {
  background-image: url("../assets/icons/trophy-solid.svg");
}
.top-content .info--item:nth-of-type(4)::before {
  background-image: url("../assets/icons/golf-charity.svg");
}
.top-info p {
  color: white;
  display: inline-block;
}
.top-info a {
  text-align: center;
  width: 100%;
  display: block;
}
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
.card:has(.entry--info) {
  margin-top: -5vh;
}
.card:has(.entry--info)::before {
  content: "";
  background: url("../assets/player-icons.png") no-repeat center center /
    contain;
  width: 40%;
  max-width: 50vw;
  min-height: 13vh;
  margin: -10vh auto auto auto;
}
.card.sub--card .col-12 {
  margin: 2vh auto;
}
.entry--info {
  border-color: var(--mainColor);
}
.pricing {
  background: var(--mainColor);
  border-radius: 0;
}
.pricing * {
  color: white;
}
.pricing .card {
  background: none;
  border-color: white;
}
.pricing .pricing--payment ul {
  list-style-type: none;
  padding: 0;
  max-width: 30%;
}
.rules {
  background: white;
  border: none;
}
.rules .sub--card {
  border-color: var(--mainColor);
}
.wrap-up {
  padding: 8% 4%;
  background: var(--secondColor);
}
.wrap-up .wrap-up--text {
  padding: 2.5vw;
  max-width: 500px;
  width: 100%;
  margin: auto;
}

@media screen and (min-width: 768px) {
  .card:has(.entry--info)::before {
    max-width: 20vw;
  }
}
</style>
