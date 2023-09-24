<template>
  <!--checked in list-->
  <div class="admin--card">
    <h2 class="mb-4">Checked In Teams</h2>
    <ul>
      <li v-for="team in this.teamsCheckedIn"></li>
    </ul>
    <div class="no--data" v-if="Object.keys(this.teamsCheckedIn).length === 0">
      <p>No results matching your request</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["teamsCheckedIn", "teamsNotCheckedIn", "adminChoices"],
};
</script>
<style scoped>
h6 {
  font-weight: bold;
  display: inline;
}
.admin--row,
.list--container {
  width: 100%;
}
.admin--column:first-child {
  flex-basis: 50%;
}
.admin--column {
  flex-basis: 25%;
}
.team {
  font-size: 0.95rem;
}

@media screen and (max-width: 767px) {
  .admin--legend {
    display: none;
  }
  .paid,
  .unpaid {
    margin-top: 3em;
    max-height: 25px;
  }
  .team-name::before {
    content: "Team Name";
    display: block;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1em;
    width: 100%;
  }
  .team::before {
    content: "Players";
    display: block;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 1em 0;
    width: 100%;
  }
  .team-division::before {
    content: "Division";
    display: block;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1em;
    width: 100%;
  }
  .team-needsGrouping::before {
    content: "Needs Grouping";
    display: block;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1em;
    width: 100%;
  }
  .admin--item {
    padding: 2vh 1vh;
  }
  .admin--row {
    margin-bottom: 1em;
  }
  .dropdown-content {
    right: 20px;
    left: unset;
    background-color: var(--mainColor);
  }
  .dropdown-content ul li button {
    color: #fff;
  }
  .close-tools {
    font-weight: bold;
    font-size: 35px;
    top: -20px;
    right: 12px;
    color: #fff;
  }
}
</style>
