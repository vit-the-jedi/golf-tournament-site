<script>
export default {
  data() {
    return {
      //get players from url, replace url encoded spaces w/ actual spaces, and create an array by splitting at the url encoded +
      //need an array so we can loop through with v-for
      players: this.$route.query.players.replaceAll("%20", " ").split("%7C"),
    };
  },
  computed: {
    // a computed getter
  },
};
</script>

<template>
  <div class="col-12">
    <h3>{{ this.$route.query.teamName }}</h3>
    <p>
      Entered in: <span>{{ this.$route.query.division }}</span> division
    </p>
    <ol>
      <li v-for="player in players">
        {{ player }}
      </li>
    </ol>
  </div>
</template>
