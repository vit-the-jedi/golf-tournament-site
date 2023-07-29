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

      <div class="gallery">
        <img src="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.about .top-content {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.15) 00%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url("../assets/about.jpg");
  min-height: 75vh;
  position: relative;
}

h1 {
  position: absolute;
  bottom: 0;
  text-align: center;
}
h1 span {
  color: var(--secondColor);
  font-size: calc(2.5rem * 2);
}
.container {
  padding: 8%;
}
</style>
