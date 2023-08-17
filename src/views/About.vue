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
        <h3>We are fun</h3>
        <p>
          The PJA Tournament is fun, family golf contest with a cause. Any
          dollars not spent on the facilitation of the tournament go straight to
          the {{ this.charity }}, an organization that provides sports gear for
          underprivaleged young&nbsp;athletes. To learn more about the impact
          and mission Valley Community Foundation, and the Alphonso and Eulalia
          Vitello Family Fund visit the
          <a
            href="https://www.valleyfoundation.org/articles/alphonso-and-eulalia-vitello-family-fund"
            target="_blank"
            >website</a
          >.
        </p>

        <h3>We are inclusive</h3>
        <p>
          We encourage men and women of all ages to join the tournament. We
          offer both a Men's division and a Co-Ed division to partcipate in. We
          accept all skill levels to come and play. We value family fun over
          everything&nbsp;else!
        </p>

        <h3>We are family</h3>
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
      <h2 class="my-4 text-center">A Look Through the Years</h2>
      <div class="grid">
        <div class="grid-sizer"></div>
        <div
          class="grid-item lazy-background grid-item--width2 grid-item--height3"
        ></div>
        <div
          class="grid-item lazy-background grid-item--width2 grid-item--height3"
        ></div>
        <div class="grid-item lazy-background grid-item--height3"></div>
        <div
          class="grid-item lazy-background grid-item--width1 grid-item--height3"
        ></div>
        <div
          class="grid-item lazy-background grid-item--width2 grid-item--height3"
        ></div>
        <div
          class="grid-item lazy-background grid-item--width2 grid-item--height3"
        ></div>
        <div
          class="grid-item lazy-background grid-item--width2 grid-item--height3"
        ></div>
        <div
          class="grid-item lazy-background grid-item--width3 grid-item--height3"
        ></div>
        <div
          class="grid-item lazy-background grid-item--width2 grid-item--height3"
        ></div>
        <div
          class="grid-item lazy-background grid-item--width2 grid-item--height3"
        ></div>
        <div
          class="grid-item lazy-background grid-item--width1 grid-item--height3"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const lazyBackgrounds = [].slice.call(
      document.querySelectorAll(".lazy-background")
    );

    if ("IntersectionObserver" in window) {
      let lazyBackgroundObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, 500);

            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });

      lazyBackgrounds.forEach(function (lazyBackground) {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }
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
h5 {
  font-weight: bold;
}
p {
  margin-bottom: 2em;
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
  transition: opacity 1s ease-in;
  opacity: 0;
}
.visible {
  opacity: 1;
}
.visible:nth-child(2) {
  background-image: url("../assets/IMG_0119.JPG");
  background-position: center 50%;
}
.visible:nth-child(3) {
  background-image: url("../assets/IMG_4850.JPG");
}
.visible:nth-child(4) {
  background-image: url("../assets/IMG_1328.JPG");
}
.visible:nth-child(5) {
  background-image: url("../assets/e44a7ab4-eed6-4128-bee3-e5e91c9eb7a4.jpg");
}
.visible:nth-child(6) {
  background-image: url("../assets/9b364b36-eccd-4904-a045-c55a526e2327.jpg");
}
.visible:nth-child(7) {
  background-image: url("../assets/1b223711-afa1-4f33-b2a2-31c139543a99.jpg");
  background-position: 25% center;
  background-size: 125%;
}
.visible:nth-child(8) {
  background-image: url("../assets/5f3a57ee-83ea-47fd-9912-30bd5f6dd347.jpg");
  background-position: 25% center;
  background-size: 125%;
}
.visible:nth-child(9) {
  background-image: url("../assets/9512c9e7-779d-48bc-84be-f97742e08d58.jpg");
  background-position: center 34%;
  background-size: 125%;
}
.visible:nth-child(10) {
  background-image: url("../assets/f687f79e-420a-4aa0-ad7a-875c391bc285.jpg");
  background-position: center 34%;
  background-size: 125%;
}
.visible:nth-child(11) {
  background-image: url("../assets/90bd71d5-d4d7-4ac1-920e-ef750ebe4cda.jpg");
  background-position: center 34%;
  background-size: 125%;
}
.visible:nth-child(12) {
  background-image: url("../assets/2acbd12e-1690-4ba7-adbd-b3b28b70aef6.jpg");
  background-position: center 34%;
  background-size: 170%;
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
  .grid-item {
    width: 50%;
    background-position: center center;
    background-size: cover !important;
  }
}
</style>
