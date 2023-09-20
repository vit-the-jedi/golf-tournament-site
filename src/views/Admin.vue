<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";
import listTeams from "../components/listTeams.vue";
import editTeamModal from "../components/editTeamModal.vue";
import groupTeamModal from "../components/groupTeamModal.vue";
import adminPanel from "../components/adminPanel.vue";
import teamSignUpForm from "../components/teamSignUpForm.vue";
</script>
<template>
  <secondaryNav />
  <div
    class="container row m-auto"
    v-if="Object.keys(teamsSignedUp).length > 0"
  >
    <div class="col-md-7 col-12">
      <listTeams
        :teamsSignedUp="teamsSignedUp"
        :adminChoices="adminChoices"
        @edit-team="editTeam"
        @delete-team="deleteTeam"
        @group-team="groupTeam"
      />
    </div>
    <div class="col-md-5 col-12 admin--panel">
      <adminPanel
        :adminChoices="adminChoices"
        @filter-league="filterLeague"
        @filter-attribute="filterAttribute"
        @clear-filters="clearFilters"
      />
      <div class="admin--card">
        <teamSignUpForm
          :adminChoices="adminChoices"
          @adminTeamCreated="getTeamsListHandler"
        />
      </div>
    </div>
  </div>
  <editTeamModal
    v-if="isEditing"
    :teamInfo="teamInfo"
    @close-modal="closeEditModal"
    @submit-changes="submitTeamChanges"
  />
  <groupTeamModal
    v-if="isGrouping"
    :teamsSignedUp="teamsSignedUp"
    :teamInfo="teamInfo"
    @close-group-modal="closeGroupModal"
    @submit-group-changes="submitGroupChanges"
  />
</template>
<script>
const getEnvMode = () => {
  return import.meta.env.MODE === "development" ? "testing" : "mens-league";
};
import { listTeamDocs } from "../middleware/db.js";
import { addToFirestore } from "../middleware/db";
import { deleteFromFirestore } from "../middleware/db.js";
export default {
  components: { editTeamModal, groupTeamModal, teamSignUpForm },
  data() {
    return {
      isEditing: false,
      isGrouping: false,
      adminChoices: {
        league: null,
        renderCoedList: true,
        renderMensList: true,
        renderPaid: true,
        renderUnpaid: true,
        renderNeedsGrouping: true,
        filteredTeams: {
          mens: [],
          coed: [],
        },
        isFiltering: false,
      },
      teamsSignedUp: {},
      teamInfo: {
        teamName: null,
        id: null,
        players: [],
        division: null,
        needsGrouping: null,
        numOfPlayers: null,
      },
    };
  },
  methods: {
    getTeamsListHandler: async function () {
      this.teamsSignedUp.mens = {};
      this.teamsSignedUp.coed = {};
      //create data partition for mens and coed league so we can filter them
      await listTeamDocs(
        import.meta.env.MODE === "development" ? "testing" : "mens-league"
      )
        .then((listTeamData) => {
          if (listTeamData.data && !listTeamData.error) {
            listTeamData.data.forEach(function (team) {
              this.createTeamsData(team, "mens");
            }, this);
          } else {
            //msg error
            console.log(listTeamData.error);
            console.log("admin list error");
          }
        })
        .catch((error) => {});
      await listTeamDocs(
        import.meta.env.MODE === "development" ? "testing" : "coed-league"
      )
        .then((listTeamData) => {
          if (listTeamData.data && !listTeamData.error) {
            listTeamData.data.forEach(function (team) {
              this.createTeamsData(team, "coed");
            }, this);
          } else {
            //msg error
            console.log(listTeamData.error);
            console.log("admin list error");
          }
        })
        .catch((error) => {});
      //if admin has no choice or wants both, render both
      if (!this.adminChoices.division) {
        this.adminChoices.renderMensList = true;
        this.adminChoices.renderCoedList = true;
      }
      console.log(this.teamsSignedUp);
    },
    createTeamsData(team, league) {
      Object.values(team).forEach(function (teamObj) {
        this.teamsSignedUp[league][teamObj.id] = teamObj;
      }, this);
    },
    createFilteredTeamsData(team, league) {
      this.adminChoices.filteredTeams[league][team.id] = {};
      for (const [teamKey, teamVal] of Object.entries(team)) {
        this.adminChoices.filteredTeams[league][team.id][teamKey] = teamVal;
      }
    },
    clearFilters() {
      this.adminChoices.isFiltering = false;
      this.adminChoices.filteredTeams.mens = {};
      this.adminChoices.filteredTeams.coed = {};
      this.getTeamsListHandler();
    },
    closeEditModal() {
      this.isEditing = false;
    },
    closeGroupModal() {
      this.isGrouping = false;
    },
    async deleteTeam(team) {
      const answer = prompt(
        `Are you sure you want to delete ${team.teamName}?
        Type YES (all caps) below to delete.`
      );
      if (answer === "YES") {
        //delete team from db collection
        //re-hydrate ui w/ new list of teams
        await deleteFromFirestore(
          import.meta.env.MODE === "development"
            ? "testing"
            : `${team.division}-league`,
          team.id
        ).then(async (teamDeleted) => {
          if (teamDeleted.value) {
            //success message
            this.$toast.success("Team deleted", {
              duration: 3000,
            });
            this.teamsSignedUp = {};
            await this.getTeamsListHandler();
          } else {
            //msg error
            this.$toast.error("There was a problem, please try again.", {
              duration: 3000,
            });
            console.error(teamDeleted.error);
          }
        });
      } else {
        //msg to try again
        return;
      }
    },
    editTeam(team) {
      this.teamInfo.players = team.players;
      this.teamInfo.teamName = team.teamName;
      this.teamInfo.id = team.id;
      this.teamInfo.division = team.division;
      this.teamInfo.paid = team.paid;
      //quick and dirty scroll to top for mobile users
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.isEditing = true;
    },
    groupTeam(team) {
      this.teamInfo.players = team.players;
      this.teamInfo.teamName = team.teamName;
      this.teamInfo.id = team.id;
      this.teamInfo.division = team.division;
      this.teamInfo.needsGrouping = team.needsGrouping;
      this.teamInfo.numOfPlayers = team.numOfPlayers;
      //quick and dirty scroll to top for mobile users
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.isGrouping = true;
    },
    async submitTeamChanges() {
      await addToFirestore(
        import.meta.env.MODE === "development"
          ? "testing"
          : `${this.teamInfo.division}-league`,
        this.teamInfo
      ).then(async (teamAdded) => {
        if (teamAdded.value) {
          //show success msg
          this.$toast.success("Team updated", {
            duration: 3000,
          });
          //get teams again
          this.teamsSignedUp = {};
          await this.getTeamsListHandler();
        } else {
          //show error msg and dont navigate
          if (teamAdded.error) {
            //msg error
            this.$toast.error("There was a problem, please try again.", {
              duration: 3000,
            });
            console.error(teamAdded.error);
          }
        }
      });
    },
    async submitGroupChanges(teamToMerge) {
      //first we add the destination team with the target team
      //then we do an addToFirestore call on the target team for merging
      //then we pass the competely merged team as an arg
      //finally we delete the destination team, as it has been merged with the target

      //merge the teams
      teamToMerge.players.forEach(function (player) {
        this.teamInfo.players.push(player);
      }, this);
      if (this.teamInfo.players.length === 4) {
        this.teamInfo.needsGrouping = false;
      }
      this.teamInfo.numOfPlayers = this.teamInfo.players.length;

      const answer = prompt(
        `Are you sure you want to group these teams?
        Team after grouping will be:
          ${this.teamInfo.teamName}
              ${this.teamInfo.players[0]?.first_name || ""} ${
          this.teamInfo.players[0]?.last_name || ""
        }
              ${this.teamInfo.players[1]?.first_name || ""} ${
          this.teamInfo.players[1]?.last_name || ""
        }
              ${this.teamInfo.players[2]?.first_name || ""} ${
          this.teamInfo.players[2]?.last_name || ""
        }
              ${this.teamInfo.players[3]?.first_name || ""} ${
          this.teamInfo.players[3]?.last_name || ""
        }
        Type YES (all caps) below to confirm group.`
      );
      if (answer === "YES") {
        await addToFirestore(
          import.meta.env.MODE === "development"
            ? "testing"
            : `${this.teamInfo.division}-league`,
          this.teamInfo
        ).then(async (teamAdded) => {
          await deleteFromFirestore(
            import.meta.env.MODE === "development"
              ? "testing"
              : `${teamToMerge.division}-league`,
            teamToMerge.id
          ).then(async () => {
            this.$toast.success("Teams grouped sucessfully");
            this.teamsSignedUp = {};
            await this.getTeamsListHandler();
          });
        });
      } else {
        this.$toast.warning(
          "You must confirm you want to group teams together. Please try again."
        );
        return;
      }
    },
    filterLeague(filterTeamValue) {
      if (filterTeamValue === "mens") {
        this.adminChoices.renderMensList = true;
        this.adminChoices.renderCoedList = false;
      } else if (filterTeamValue === "coed") {
        this.adminChoices.renderMensList = false;
        this.adminChoices.renderCoedList = true;
      } else {
        this.adminChoices.renderMensList = true;
        this.adminChoices.renderCoedList = true;
      }
      //quick and dirty scroll to top for mobile users
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    filterAttribute(attr) {
      this.adminChoices.isFiltering = true;
      let leagues = [];
      if (
        this.adminChoices.renderCoedList &&
        this.adminChoices.renderMensList
      ) {
        leagues = ["mens", "coed"];
      } else if (this.adminChoices.renderCoedList) {
        leagues = ["coed"];
      } else {
        leagues = ["mens"];
      }

      this.adminChoices.filteredTeams.mens = {};
      this.adminChoices.filteredTeams.coed = {};
      switch (attr) {
        case "paid":
          leagues.forEach((league) =>
            Object.values(this.teamsSignedUp[league]).forEach((team) => {
              if (team.paid) this.createFilteredTeamsData(team, league);
            })
          );
          break;
        case "unpaid":
          leagues.forEach((league) =>
            Object.values(this.teamsSignedUp[league]).forEach((team) => {
              if (!team.paid) this.createFilteredTeamsData(team, league);
            })
          );
          break;
        case "needsGrouping":
          leagues.forEach((league) =>
            Object.values(this.teamsSignedUp[league]).forEach((team) => {
              if (team.needsGrouping)
                this.createFilteredTeamsData(team, league);
            })
          );
          break;
        default:
          return;
      }
      //quick and dirty scroll to top for mobile users
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    concatPlayerNames(playersArr) {
      playersArr.forEach((player, i, arr) => {
        let name = "";
        let playerNum = i + 1;
        name += player.first_name;
        name += " ";
        name += player.last_name;
        this.teamInfo[`player${playerNum}_name`] = name;
      });
    },
  },
  //await the call to firebase for teams list
  async mounted() {
    await this.getTeamsListHandler();
  },
};
</script>

<style>
.container {
  background-color: #f0f4f7;
}
.admin--card {
  background-color: white;
  border-radius: var(--card-border-radius);
  padding: 2em;
  margin: 2em auto;
}
.data.admin--row:hover {
  background-color: #e6e6e6;
}
.admin--tools {
  width: 30px;
  position: absolute;
  right: 0;
}
.admin--tools button {
  background: grey;
  padding: unset;
  font-size: unset;
}
.admin--tools button:hover,
.edit-team-dialog .payment-button:hover {
  background-color: #e6e6e6;
}
.admin--item {
  justify-content: space-between;
  padding: 5vh 2vh;
}
.admin--row {
  margin: auto;
}
.admin--row:not(:last-child) {
  border-bottom: 1px solid var(--mainColor);
}
.admin--item span {
  display: block;
}
.showLeft {
  text-shadow: none !important;
  color: #fff !important;
  padding: 10px;
}
.icons {
  position: relative;
  z-index: 997;
  margin-left: -15px;
}
.icons li {
  background: none repeat scroll 0 0 var(--mainColor);
  height: 5px;
  width: 5px;
  line-height: 0;
  list-style: none outside none;
  margin-right: 15px;
  margin-top: 3px;
  vertical-align: top;
  border-radius: 50%;
  pointer-events: none;
}

.btn-left {
  left: 0.4em;
}

.btn-right {
  right: 0.4em;
}

.dropbtn {
  color: var(--mainColor);
  font-size: 12px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  display: inline-block;
  right: 0.4em;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 997;
  left: 20px;
  top: 0;
}
.dropdown-content ul {
  list-style: none;
  padding: 1em;
  margin-bottom: 0;
}
.dropdown-content button,
.close-tools {
  background: none;
  font-family: "Nunito Sans", sans-serif;
  text-transform: none;
  font-weight: normal;
  letter-spacing: unset;
  color: var(--mainColor);
  border: none;
}
.show {
  display: block;
}
.close-tools {
  position: absolute;
  top: 0px;
  right: 20px;
  font-weight: normal;
  font-size: 1.25em;
  text-align: right;
  max-width: 15px;
  background: none;
  color: var(--mainColor);
}
.ui-info {
  font-weight: bold;
  color: white;
  margin-left: 20px;
  font-size: 0.8rem;
  padding: 0.25rem;
  display: inline;
  max-width: 100px;
  border-radius: 5px;
}
.paid {
  background-color: var(--success);
}
.unpaid {
  background-color: var(--danger);
}
@media screen and (max-width: 767px) {
  .admin--card {
    display: flex;
    flex-wrap: wrap;
  }
  .admin--card h2 {
    width: 100%;
    flex-basis: 100%;
  }
  .data .admin--column {
    width: 100%;
    flex-basis: 100% !important;
  }
  .data .admin--column h6 {
    text-align: left;
  }
}
</style>
