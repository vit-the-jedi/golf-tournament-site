<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";
</script>
<template>
  <secondaryNav />
  <div class="about">
    <div class="top-content">
      <h1>A VITELLO FAMILY <span>TRADITION</span></h1>
    </div>
    <div class="container">
      <h2>34 Years and counting</h2>

      <div class="mt-4">
        <h5>We are fun</h5>
        <p>
          The PJA Tournament is fun, family golf contest with a cause. Any
          dollars not spent on the faciliation of the tournament go straight to
          the Valley League Fund, an organization that provides sports gear for
          underprivaleged young&nbsp;athletes.
        </p>

        <h5>We are inclusive</h5>
        <p>
          We encourage men and women of all ages to join the tournament. We
          offer both a Men's League and a Co-Ed league to partcipate in. We
          accept all skill levels to come and play. We value family fun over
          everything&nbsp;else!
        </p>

        <h5>We are family</h5>
        <p>
          For 30+ years this tournament has grown to be a can't-miss for our
          family and friends. In 2022, we had a record number of golfers attend,
          with over 100 players joining and playing for both fun and
          philanthropy. We plan to continue to keep the tradition alive and well
          for years to come. If you are a long time participant, or are just
          seeing what we're about, we encourage you to
          <router-link to="/sign-up">sign up</router-link> and join us on the
          day of the&nbsp;tournament.
        </p>
      </div>
    </div>

    <div class="gallery">
      <div class="grid">
        <div class="grid-sizer"></div>
        <div class="grid-item grid-item--width2 grid-item--height3"></div>
        <div class="grid-item grid-item--width2 grid-item--height3"></div>
        <div class="grid-item grid-item--height3"></div>
        <div class="grid-item grid-item--height3"></div>
        <div class="grid-item grid-item--width3"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    initMasonry() {
      const elem = document.querySelector(".grid");
      const msnry = new Masonry(elem, {
        // options
        itemSelector: ".grid-item",
        columnWidth: 200,
      });
    },
  },
  mounted() {
    let masonryScript = document.createElement("script");
    masonryScript.setAttribute(
      "src",
      "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
    );
    document.head.appendChild(masonryScript);
    this.initMasonry();
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
}

h1 {
  text-align: center;
  width: 100%;
}
h1 span {
  display: block;
}
.about .top-content {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.15) 00%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url("../assets/about.jpg");
  min-height: 75vh;
  position: relative;
  background-size: 100%;
  background-position: center 30%;
}

h1 {
  position: absolute;
  bottom: 0;
  text-align: center;
}
h1 span {
  color: var(--secondColor);
  font-size: 4rem;
}
.container {
  padding: 8%;
}
.gallery {
  background-color: var(--secondColor);
  padding: 2em 1em 1em 1em;
}
.grid {
  max-width: 1200px;
  position: relative;
}

/* clearfix */
.grid:after {
  content: "";
  display: block;
  clear: both;
}

/* ---- grid-item ---- */

.grid-sizer,
.grid-item {
  width: 20%;
  position: relative;
  overflow: hidden;
}
.grid-item {
  height: 120px;
  float: left;
  border: 5px solid var(--secondColor);
  border-radius: 5px;
  background-size: cover;
  border-radius: var(--card-border-radius);
}
.grid-item:nth-child(2) {
  background-image: url("../assets/gallery/IMG_0119.JPG");
  background-position: center 72%;
}
.grid-item:nth-child(3) {
  background-image: url("../assets/gallery/IMG_4850.JPG");
}
.grid-item:nth-child(4) {
  background-image: url("../assets/gallery/IMG_1328.JPG");
}
.grid-item--width2 {
  width: 40%;
}
.grid-item--width3 {
  width: 60%;
}

.grid-item--height2 {
  height: 200px;
}
.grid-item--height3 {
  height: 260px;
}
.grid-item--height4 {
  height: 360px;
}
@media screen and (max-width: 767px) {
  .about .top-content {
    min-height: 40vh;
  }
}
</style>
