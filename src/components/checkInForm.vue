<template>
  <form id="check-in-form" class="w-100">
    <fieldset v-if="!this.searchResult.id">
      <legend>Check in by player name</legend>
      <input
        class="input"
        type="text"
        v-model="checkInPlayer__firstName"
        placeholder="First Name"
      />
      <input
        class="input"
        type="text"
        v-model="checkInPlayer__lastName"
        placeholder="Last Name"
      />
      <select v-model="checkInPlayer__division" class="input full-width">
        <option value="mens">Men's league</option>
        <option value="coed">Co-ed league</option>
      </select>
      <button class="w-100" type="submit" @click="searchForPlayer">
        Search
      </button>
    </fieldset>

    <div
      v-if="this.searchResult.id"
      class="search--result col-md-8 mx-auto col-12"
    >
      <h4 class="mt-4">Is this you?</h4>
      <h5>{{ this.searchResult.teamName }}</h5>
      <p v-for="player in this.searchResult.players">
        {{ player.first_name }} {{ player.last_name }}
      </p>
      <button @click="checkPlayerIn">Check In</button>
    </div>
  </form>
</template>

<script>
import { listTeamDocs, addPropertyToDoc } from "../middleware/db.js";
export default {
  data() {
    return {
      checkInPlayer__firstName: null,
      checkInPlayer__lastName: null,
      checkInPlayer__division: null,
      searchResult: {
        players: [],
        teamName: null,
        id: null,
      },
      playersToCheckIn: [],
    };
  },
  methods: {
    searchForPlayer: async function (ev) {
      ev.preventDefault();
      console.log(this);
      await listTeamDocs(
        import.meta.env.MODE === "development"
          ? "testing"
          : `${this.checkInPlayer__division}-league`
      ).then((teams) => {
        for (const team of teams.data) {
          const id = Object.keys(team)[0];
          team[id].players.forEach((player, index, arr) => {
            if (
              player.first_name.toLowerCase().replaceAll(" ", "") ===
                this.checkInPlayer__firstName.toLowerCase() &&
              player.last_name.toLowerCase().replaceAll(" ", "") ===
                this.checkInPlayer__lastName.toLowerCase()
            ) {
              this.searchResult.players = team[id].players;
              this.searchResult.teamName = team[id].teamName;
              this.searchResult.id = team[id].id;
              this.searchResult.divison = this.checkInPlayer__division;
              this.searchResult.foundIndex = index;
            }
          });
        }
      });
    },
    checkPlayerIn: async function (ev) {
      ev.preventDefault();
      const checkInObj = {
        checkedIn: [],
      };
      //track players by index
      checkInObj.checkedIn.push(this.searchResult.foundIndex);
      //pass division, team id, and obj w/ key as new field name and value as the value for the field
      const propertyAdded = await addPropertyToDoc(
        import.meta.env.MODE === "development"
          ? "testing"
          : `${this.checkInPlayer__division}-league`,
        this.searchResult.id,
        checkInObj
      );

      //if promise resolved to true, our player was successfully checked in
      if (propertyAdded.value) {
        this.$toast.success("Player checked in successfully.");
      }
      //else there was an issue
      else {
        //handles condition where player is already checked in
        if (propertyAdded.error.includes("checked in")) {
          this.$toast.warning(propertyAdded.error);
        }
        //handles error from firebase
        else {
          this.$toast.error(
            "There was a problem checking you in, please try again."
          );
        }
        this.searchResult.players = [];
        this.searchResult.teamName = null;
        this.searchResult.id = null;
        this.checkInPlayer__firstName = null;
        this.checkInPlayer__lastName = null;
        this.checkInPlayer__division = null;
      }
    },
  },
};
</script>
