<template>
  <div class="admin--card">
    <form id="admin-filters">
      <fieldset>
        <legend>Filters</legend>
        <label>Filter by league</label>
        <select
          id="league-filter"
          class="w-100"
          @change="
            (event) => {
              filterByLeague(event);
            }
          "
          v-model="this.leagueFilter"
        >
          <option value="mens">Men's</option>
          <option value="coed">Co-Ed</option>
          <option value="both">Both</option>
        </select>

        <label>Filter by attribute</label>
        <select
          id="attribute-filter"
          class="w-100"
          @change="
            (event) => {
              filterByAttributeHandler(event);
            }
          "
          v-model="this.attributeFilter"
        >
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
          <option value="needsGrouping">Needs Grouping</option>
        </select>
        <button
          v-if="this.adminChoices.isFiltering"
          role="button"
          @click="clearFiltersHandler"
        >
          Clear Filters
        </button>
      </fieldset>
      <fieldset class="mt-4" v-if="false">
        <legend>Add a Team</legend>

        <div class="row">
          <label>Player 1</label>
          <div class="col-md-6">
            <input
              v-model="players.player1__firstName"
              class="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div class="col-md-6">
            <input
              v-model="players.player1__lastName"
              class="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <label>Player 2</label>
          <div class="col-md-6">
            <input
              v-model="players.player2__firstName"
              class="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div class="col-md-6">
            <input
              v-model="players.player2__lastName"
              class="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <label>Player 3</label>
          <div class="col-md-6">
            <input
              v-model="players.player3__firstName"
              class="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div class="col-md-6">
            <input
              v-model="players.player3__lastName"
              class="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <label>Player 4</label>
          <div class="col-md-6">
            <input
              v-model="players.player4__firstName"
              class="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div class="col-md-6">
            <input
              v-model="players.player4__lastName"
              class="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <label>Team Info</label>
          <div class="col-md-6">
            <input
              v-model="teamName"
              class="input full-width"
              type="text"
              placeholder="Team Name (optional)"
            />
          </div>
          <div class="col-md-6">
            <select v-model="division" class="input full-width">
              <option value="mens">Men's league</option>
              <option value="coed">Co-ed league</option>
            </select>
            <button type="submit">Create Team</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
export default {
  props: ["adminChoices"],
  data() {
    return {
      leagueFilter: null,
      attributeFilter: null,
      numOfPlayers: 1,
      players: {
        player1__firstName: null,
        player1__lastName: null,
        player2__firstName: null,
        player2__lastName: null,
        player3__firstName: null,
        player3__lastName: null,
        player4__firstName: null,
        player4__lastName: null,
      },
      teamName: null,
      division: "mens",
      needsGrouping: false,
    };
  },
  methods: {
    filterByLeague(ev) {
      this.$emit("filter-league", ev.target.value);
    },
    filterByAttributeHandler(ev) {
      this.$emit("filter-attribute", ev.target.value);
    },
    clearFiltersHandler(ev) {
      ev.preventDefault();
      this.leagueFilter = null;
      this.attributeFilter = null;
      this.$emit("clear-filters");
    },
  },
};
</script>
<style scoped>
label {
  margin-top: 1em;
}
</style>
