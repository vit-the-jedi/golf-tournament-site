<script setup>
import mainNav from "../components/mainNav.vue";
import venmo from "../components/Venmo.vue";
import check from "../components/Check.vue";
</script>

<script>
export default {
  data() {
    return {
      date: "October 7th, 2023",
      time: "10:00am",
      golfCourse: "East Mountain Golf Course",
      golfCourseAddress: "171 E Mountain Rd, Waterbury, CT 06706",
      charity: "Valley Community Foundation",
      addOns: [
        "$10 Pro Shop credit",
        "Coffee & at check-in",
        "Golf Cart",
        "Snacks and drinks",
        "Trophies (1st, 2nd, 3rd place per division, plus longest drive and closest to pin for both front and back 9)",
      ],
      pricing: {
        ticketPrice: "$95.00",
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
    outputCharity() {
      return this.charity;
    },
  },
};
</script>
<template>
  <mainNav />
  <header class="top-content">
    <div class="logo py-3"><img src="../assets/logo.svg" alt="PJA logo" /></div>
    <div class="top-info row py-3">
      <div class="col-md-6 col-12 info--item">
        <p>{{ outputDate }}</p>
      </div>
      <div class="col-md-6 col-12 info--item"><p>100+ Players</p></div>
      <div class="col-md-6 col-12 info--item"><p>Trophies Awarded</p></div>
      <div class="col-md-6 col-12 info--item"><p>Charitable Donations</p></div>
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
        <div class="ball-icons">
          <img src="/src/assets/player-icons.png" />
        </div>
        <h1 class="text-center">Come alone, or bring&nbsp;help!</h1>
        <div class="button-container mb-4">
          <button><router-link to="/sign-up">SIGN UP</router-link></button>
          <small class="text-center d-block w-100">(max 4 players)</small>
        </div>
        <div class="card sub--card entry--info">
          <div class="row">
            <div class="col-md-6 col-12">
              <h1>Entry Deadline:</h1>
              <h2>
                <!--TODO create method to putput deadline (date of tourny minus 1 week)
                  {{ outputDeadline }}-->
                September 30th, 2023
              </h2>
            </div>
            <div class="col-md-6 col-12">
              <h2>When &amp; where?</h2>
              <p>{{ outputDate }}</p>
              <p>SHOTGUN START @ 8AM</p>
              <p>{{ outputGolfCourse }},</p>
              <p>{{ outputGolfCourseAddress }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card pricing">
        <div class="card sub--card">
          <div class="row">
            <div class="col-md-6 col-12">
              <h1>Pricing</h1>
              <h2>Entry fee: {{ outputPrice }} per&nbsp;player</h2>
            </div>
            <div class="col-md-6 col-12">
              <h2>What's included:</h2>
              <ul>
                <li v-for="item in addOns">
                  {{ item }}
                </li>
                <li>
                  All proceeds after operational expenses will be donated to The
                  Vitello Family Fund, a charity within the Vitello Family Fund,
                  a charity within the
                  <a href="https://www.valleyfoundation.org/" target="_blank"
                    >Valley Community Foundation</a
                  >.
                </li>
              </ul>
            </div>
          </div>
          <h2 class="text-center">Payment Methods</h2>
          <div class="row pricing--payment">
            <div class="col-md-6 col-12">
              <check />
            </div>
            <div class="col-md-6 col-12">
              <venmo />
            </div>
          </div>
        </div>
      </div>
      <div class="card rules">
        <div class="card sub--card">
          <div class="row">
            <div class="col-md-6 col-12">
              <h2>Format</h2>
              <ul>
                <li>Teams of four.</li>
                <li>Scramble (best ball) format.</li>
                <li>Men's and Co-ed divisions available.</li>
                <li>Fun first!</li>
              </ul>
            </div>
            <div class="col-md-6 col-12">
              <h2>Questions?</h2>
              <p>Reach out to any of the tournament admins!</p>
              <ul>
                <li>John Vitello</li>
                <li>Al Vitello</li>
                <li>Paul Vitello</li>
                <li>Janice Vitello</li>
                <li>Matt Vitello</li>
                <li>Nicole Vitello</li>
                <li>Anthony Lowell</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-up">
        <div class="wrap-up--text text-center">
          <h2>Ready to have some fun?</h2>
          <h5 class="my-4">Sign up and get started</h5>
          <div class="button-container my-4">
            <button><router-link to="/sign-up">SIGN UP</router-link></button>
            <p class="text-center d-block w-100">(max 4 players)</p>
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
.info-container {
  background: transparent;
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
.card:has(.entry--info) {
  margin-top: -5vh;
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
  .pricing .pricing--payment ul {
    list-style-type: none;
    padding: 0;
    max-width: 30%;
  }
}
@media screen and (max-width: 767px) {
  .container {
    padding: 0;
  }
  .top-content img {
    max-width: 200px;
  }
  .top-info div {
    text-align: center;
  }
  .top-info div p {
    margin-bottom: 0;
  }
  .pricing .pricing--payment ul {
    max-width: 60%;
  }
}
</style>
