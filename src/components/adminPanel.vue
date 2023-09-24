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
