<template>
  <div class="info-banner">
    <h5 class="info-banner--header">
      Ready to play? <router-link to="/check-in">Check in</router-link> now!
    </h5>
    <span @click="removeBanner" class="delete"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addBanner: true,
    };
  },
  mounted() {
    this.$emit("banner-mounted");
  },
  methods: {
    removeBanner(ev) {
      const banner = ev.target.parentNode;
      document.querySelector("#app").removeChild(banner);
      sessionStorage.setItem("banner-removed", "true");
    },
  },
};
</script>
<style scoped>
.info-banner {
  background: var(--mainColor);
  padding: 1em;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
}
.info-banner--header {
  color: #fff;
  width: 100%;
  text-align: center;
}
</style>
