<script setup>
import { ref, watch, nextTick } from "vue";
import { useStandings } from "../middleware/db.js";
import standingCard from "./standingCard.vue";
import Accordion from "./accordion.vue";
import { transformForAccordion } from "../utils/transformForAccordion.js";
const { standings, sendNewStanding } = useStandings();
console.log(standings);
console.log(standings.mens);
</script>

<template>
  <div class="standings">
    <div class="text-center">
      <div class="col-md-6 mx-auto col-12">
        <h3 class="mt-4 pt-4">Top 4 🏆</h3>
        <small>(Top 3 teams from each division receive trophies)</small>
      </div>
    </div>
    <div class="row">
      <standingCard
        v-for="(standing, index) of standings.mens.slice(0, 3)"
        :key="standing.id"
        class="col-md-6 col-12"
        :team="standing"
        :index="index"
      />
    </div>
    <div v-if="standings.length > 4" class="accordion-holder col-12 mt-4 pt-4">
      <h4 class="text-center">Up and comers ⛳️</h4>
      <Accordion :data="standings.mens.slice(4)" headerKey="id" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    //const bottom = ref(null)
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

    return { standings, standing, send };
  },
};
</script>
