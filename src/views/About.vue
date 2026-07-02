<script setup>
//components
import Gallery from "../components/gallery.vue";
import secondaryNav from "../components/secondaryNav.vue";

const tournamentAge = new Date().getFullYear() - 1989;
</script>
<template>
  <secondaryNav />
  <div class="about">
    <div class="top-content">
      <h1>A VITELLO FAMILY <span>TRADITION</span></h1>
    </div>
    <div class="container">
      <h2>{{ tournamentAge }} Years and counting</h2>

      <div class="mt-4">
        <h3>We are fun</h3>
        <p>
          The PJA Scramble Tournament is a fun golf competition held for a
          worthy cause. After all expenses are paid, the remaining proceeds are
          donated to the Alphonso and Eulalia Vitello Family Fund/Valley
          Community Foundation for the benefit of the residents of Derby and the
          Valley, especially disadvantaged youth. To learn more about the
          mission and impact of this charitable endeavor please visit the
          <a
            href="https://www.valleyfoundation.org/articles/alphonso-and-eulalia-vitello-family-fund"
            target="_blank"
            >website</a
          >.
        </p>

        <h3>We are inclusive</h3>
        <p>
          We encourage men and women to join the tournament. We offer both a
          Men's division and a Co-Ed division. All skill levels are welcome to
          join us. Our highest priority is camaraderie and fun!
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

      <Gallery />
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
img.rotate {
  transform: rotate(90deg);
}
.about .top-content {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.15) 00%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url("/src/assets/about-desktop.jpg");
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
.masonry-item > img {
  max-width: 90%;
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
  .about .top-content {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.15) 00%,
        rgba(0, 0, 0, 0.75) 100%
      ),
      url("/src/assets/about-mobile.jpg");
    background-size: cover;
  }
}
</style>
