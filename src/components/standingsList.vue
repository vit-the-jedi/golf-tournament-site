<script setup>
import { ref, watch, nextTick } from "vue";
import { useStandings } from "../middleware/db.js";
import standingCard from "./standingCard.vue";
const { standings, sendNewStanding } = useStandings();
</script>

<template>
  <div class="standings row">
    <div
      v-for="(standing, index) in standings"
      :key="standing.id"
      class="col-md-6 col-12"
    >
      <standingCard :team="standing" :index="index" />
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
