<script setup>
import { ref, watch, nextTick } from "vue";
import { useStandings } from "../middleware/db.js";
import standingCard from "./standingCard.vue";
import Accordion from "./accordion.vue";
import { transformForAccordion } from "../utils/transformForAccordion.js";
const { standings, sendNewStanding, unsubscribe } = useStandings();
console.log(standings);
</script>

<template>
  <div class="standings">
    <div class="text-center">
      <div class="col-md-6 mx-auto col-12">
        <h3 class="mt-4 pt-4">Top 4 🏆</h3>
        <small>(Top 3 teams from each division receive trophies)</small>
      </div>
    </div>
    <form class="standings-filter col-md-4 col-6 mx-auto">
      <fieldset class="row m-0">
        <label :class="{ active: selectedDivision === 'mens' }" class="col-6">
          <input
            type="radio"
            v-model="selectedDivision"
            value="mens"
            name="standingFilter"
          />
          Mens
        </label>
        <label :class="{ active: selectedDivision === 'coed' }" class="col-6">
          <input
            type="radio"
            v-model="selectedDivision"
            value="coed"
            name="standingFilter"
          />
          Coed
        </label>
      </fieldset>
    </form>
    <div class="row" v-if="standings && standings[selectedDivision]">
      <standingCard
        v-for="(standing, index) of standings[selectedDivision].slice(0, 3)"
        :key="standing.id"
        class="col-md-6 col-12"
        :team="standing"
        :index="index"
      />
    </div>
    <div v-else class="mt-4 pt-4 col-6 mx-auto">
      <p class="text-center">loading...</p>
    </div>
    <div v-if="standings.length > 4" class="accordion-holder col-12 mt-4 pt-4">
      <h4 class="text-center">Up and comers ⛳️</h4>
      <Accordion :data="standings.mens.slice(4)" headerKey="id" />
    </div>
  </div>
</template>

<script>
import { onUnmounted } from "vue";

export default {
  data() {
    return {
      selectedDivision: "mens",
    };
  },
  setup() {
    const standings = ref([]);
    watch(
      standings,
      () => {
        nextTick(() => {
          console.log("updated");
          document
            .querySelector(".standings")
            ?.scrollIntoView({ behavior: "smooth" });
        });
      },
      { deep: true }
    );

    const standing = ref("");
    const send = () => {
      sendStanding(standing.value);
      standing.value = "";
    };

    onUnmounted(() => {
      unsubscribe();
    });

    return { standings, standing, send };
  },
};
</script>

<style scoped>
.standings-filter label {
  border: 2px solid var(--mainColor);
  padding: 4px 8px;
}
.standings-filter label.active,
.standings-filter label:hover {
  background: var(--mainColor);
  color: white;
}
.standings-filter input {
  display: none;
}
</style>
