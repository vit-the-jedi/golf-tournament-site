<script>
import { store } from "../store/index";
export default {
  data() {
    return {
      team: store.getters.getTeam,
    };
  },
};
</script>

<template>
  <div class="card col-md-10 mx-auto pt-4">
    <div class="ball-icons">
      <img src="/src/assets/player-icons.png" />
    </div>
    <div class="team-info-container">
      <div class="text-center w-100">
        <h2>{{ this.team.teamName }}</h2>
        <p>
          Division: <span>{{ this.team.division }}</span>
        </p>
        <p>Team ID: {{ team.id }}</p>
      </div>
      <div class="players col-md-7 p-0">
        <div class="table row m-auto">
          <div class="col-6 player-name" v-for="player in team.players">
            <p>{{ player.first_name }} {{ player.last_name }}</p>
          </div>
          <!-- <span v-if="team.players.length >= 2" class="line line-h"></span>
          <span class="line line-v"></span> -->
        </div>
      </div>
      <div class="col-md-10 mx-auto">
        <p>
          If you see an issue with your submission, please reach out to our
          tournament admins at
          <a href="mailto:pjatournament@gmail.com">pjatournament@gmail.com</a>.
        </p>
        <p>
          Please provide your team name, team id and division in your inquiry.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ball-icons img {
  max-width: 100%;
}
.card {
  margin-top: 4em;
  background-color: var(--secondColor);
  position: relative;
}
.team-info-container {
  margin-top: 4em;
}
.team-info * {
  margin: 1em auto;
}
.players {
  margin: 2em auto;
  position: relative;
  border: 2px solid var(--mainColor);
  border-radius: calc(var(--card-border-radius) / 2);
}
.players .table {
  position: relative;
  padding-top: 1em;
}
.players ol {
  margin-top: 2em;
}
.players .table div::before {
  position: absolute;
  color: var(--mainColor);
}
.players .table .player-name:nth-child(1)::before {
  content: "1.";
}
.players .table .player-name:nth-child(2)::before {
  content: "2.";
}
.players .table .player-name:nth-child(3)::before {
  content: "3.";
}
.players .table .player-name:nth-child(4)::before {
  content: "4.";
}
.players .table div {
  padding-bottom: 1em;
}
.players .table div p {
  color: var(--mainColor);
}
.line {
  position: absolute;
  background-color: var(--mainColor);
  border-radius: 10px;
}
.line-h {
  height: 1px;
  width: 100%;
  top: calc(50% - 0.5px);
  left: 0;
}
.line-v {
  width: 1px;
  height: 100%;
}
a:hover {
  color: var(--mainColor);
}

@media screen and (max-width: 767px) {
  .players .table div::before {
    left: 5px;
  }
}
</style>
