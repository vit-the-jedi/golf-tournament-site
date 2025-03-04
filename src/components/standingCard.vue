<template>
  <div class="team-container">
    <h3>{{ createPlacement(index) }}</h3>
    <h4 class="team-name">{{ team.id }}</h4>
    <div v-if="team.players" class="players">
      <div class="row m-auto">
        <div
          class="col-6 text-left"
          v-for="(player, index) of team.players"
          :key="player"
        >
          <p>{{ index + 1 }}. {{ player }}</p>
        </div>
      </div>
    </div>
    <ul class="score-list">
      <li class="score-item">
        <span class="score">Score: {{ team.score }}</span>
      </li>
      <li class="score-item">
        <span class="score">Current Hole: {{ team.currentHole }}</span>
      </li>
      <li class="score-item">
        <span class="score">Hole Started On: {{ team.holeStartedOn }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    team: Object,
    index: Number,
  },
  methods: {
    createPlacement(index) {
      let placements = ["1st", "2nd", "3rd", "4th"];
      return index <= 4 ? `${placements[index]} Place` : "";
    },
  },
};
</script>
<style scoped>
.team-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.team-name {
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}
.score-list {
  list-style: none;
  padding: 0;
}
.score-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid #ddd;
  font-size: 1.2em;
}
.score-item:last-child {
  border-bottom: none;
}
.match-label {
  font-weight: bold;
  color: #555;
}
.score {
  color: #2c3e50;
  font-weight: bold;
}
.players {
  font-size: 0.9rem;
  color: #000;
}
.players p {
  margin-bottom: 10px;
}
</style>
