<script>
export default {
  data() {
    return {
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
    };
  },
  computed: {
    // a computed getter
    outputPrice() {
      // `this` points to the component instance
      return this.ticketPrice;
    },
  },
};
</script>
<template>
  <div class="pricing row">
    <h2>Pricing</h2>
    <div class="col-md-6 col-12">
      <h3>
        Entry fee: <span>{{ outputPrice }}</span>
      </h3>
    </div>
    <div class="col-md-6 col-12 row">
      <div class="col-md-6 col-12">
        <ul>
          <li v-for="item in addOns">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="col-md-6 col-12">
        <ul>
          <li v-for="item in trophies">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing {
  width: 100%;
}
.pricing h2 {
  text-align: center;
  width: 100%;
  margin-bottom: 10vh;
}
</style>
