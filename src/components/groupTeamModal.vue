<template>
  <dialog open class="admin--card edit-team-dialog">
    <button class="close-tools" @click="closeGroupModal">&times;</button>
    <form id="groupTeam-form" @submit="checkForm">
      <small>ID: {{ this.teamInfo.id }}</small>
      <fieldset>
        <h4 class="text-center my-4">Available Teams for Grouping with:</h4>
        <h5 class="text-center">
          {{ this.teamInfo.teamName }}<br />
          players:
          {{ this.teamInfo.numOfPlayers }}
        </h5>

        <div
          class="team-container admin--row row mx-auto mt-4"
          v-for="team in availableTeams"
        >
          <input
            class="col-2"
            type="radio"
            :id="team.id"
            name="group-teams"
            @input="this.groupingInfo.teamToMerge = team"
          />

          <label :for="team.id" class="row m-auto col-10">
            <div class="col-12">
              <h6 class="select--team-name">{{ team.teamName }}</h6>
            </div>
            <div class="col-12">
              <span class="ui-info player-num"
                >players: {{ team.numOfPlayers }}</span
              >
            </div>
            <div class="col-12">
              <small class="select--id">id:{{ team.id }}</small>
            </div>
          </label>
        </div>
      </fieldset>
      <button
        role="button"
        id="groupTeam-submit"
        @click="submitGroupTeamChangesHandler"
      >
        GROUP TEAMS
      </button>
    </form>
  </dialog>
  <div id="dialog--bg" class="ui--backdrop backdrop--open"></div>
</template>
<script>
export default {
  props: ["teamsSignedUp", "teamInfo"],
  data() {
    return {
      errors: [],
      availableTeams: null,
      groupingInfo: {},
    };
  },
  beforeMount() {
    this.availableTeams = this.teamsSignedUp.filter((team) => {
      if (
        team.numOfPlayers + this.teamInfo.numOfPlayers === 4 &&
        team.id !== this.teamInfo.id
      ) {
        return team;
      }
    });
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      if (!this.groupingInfo.hasOwnProperty("teamToMerge")) {
        this.errors.push("Please choose a team to group with.");
      } else {
        this.submitGroupTeamChangesHandler();
      }
    },
    submitGroupTeamChangesHandler() {
      this.$emit("submit-group-changes", this.groupingInfo.teamToMerge);
      this.closeGroupModal();
    },
    closeGroupModal(ev) {
      this.$emit("close-group-modal");
    },
  },
};
</script>
<style scoped>
dialog {
  position: absolute;
  z-index: 999;
  max-width: 500px;
  transform: translate(0%, 25%);
  top: 0;
  left: 0;
  border: none;
  color: var(--mainColor);
}
h5,
h6 {
  font-weight: bold;
}
input {
  width: 100%;
  margin: 1em auto;
}
fieldset {
  margin: 1em 0;
}
.full-width {
  width: 100%;
}
option span {
  display: block;
}
label {
  padding-top: 1em;
  padding-bottom: 1em;
}
input[type="radio"] {
  max-height: 20px;
}
.team-container {
  border-bottom: 1px solid var(--mainColor);
}
.player-num {
  background-color: var(--tertiaryColor);
  margin-left: 0;
  text-align: center;
  text-transform: uppercase;
}
</style>
