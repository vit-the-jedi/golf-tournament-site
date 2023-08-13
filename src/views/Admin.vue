<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";
import listTeams from "../components/listTeams.vue";
import editTeamModal from "../components/editTeamModal.vue";
import groupTeamModal from "../components/groupTeamModal.vue";
</script>
<template>
  <secondaryNav />
  <div class="container">
    <div class="col-md-7 col-12 admin--card">
      <listTeams
        :teamsSignedUp="this.teamsSignedUp"
        @edit-team="editTeam"
        @delete-team="deleteTeam"
        @group-team="groupTeam"
      />
    </div>
  </div>
  <editTeamModal
    v-if="this.isEditing"
    :teamInfo="this.teamInfo"
    @close-modal="closeEditModal"
    @submit-changes="submitTeamChanges"
  />
  <groupTeamModal
    v-if="this.isGrouping"
    :teamsSignedUp="this.teamsSignedUp"
    :teamInfo="this.teamInfo"
    @close-group-modal="closeGroupModal"
    @submit-group-changes="submitGroupChanges"
  />
</template>
<script>
import { listTeamDocs } from "../middleware/db.js";
import { addToFirestore } from "../middleware/db";
import { deleteFromFirestore } from "../middleware/db.js";
export default {
  components: { editTeamModal, groupTeamModal },
  data() {
    return {
      isEditing: false,
      isGrouping: false,
      hello: true,
      adminChoices: {
        division: null,
        teamName: null,
      },
      teamsSignedUp: [],
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
      const teamsList = await listTeamDocs(
        this.adminChoices.division ?? "mens-league"
      );
      return teamsList;
    },
    async listTeams() {
      const teamsFromDb = await this.getTeamsListHandler();
      //destructure array of nested objects to get the values we need
      teamsFromDb.forEach((nestedObj) => {
        const [[key, value]] = Object.entries(nestedObj);
        const teamObj = {};
        teamObj.teamName = value.teamName;
        teamObj.division = value.division;
        teamObj.players = [];
        value.players.forEach((player) => {
          teamObj.players.push(player);
        });
        teamObj.numOfPlayers = value.numOfPlayers;
        //teamObj.players = `${value.players[0].first_name} ${value.players[0].last_name}`;
        teamObj.needsGrouping = value.needsGrouping;
        teamObj.id = value.id;
        teamObj.paid = value.paid;
        this.teamsSignedUp.push(teamObj);
      });
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
        const deleteComplete = await deleteFromFirestore(
          `${team.division}-league`,
          team.id
        );
        if (deleteComplete) {
          this.teamsSignedUp = [];
          await this.listTeams();
        } else {
          this.errors.push(
            "There was a problem deleting this team, please try again"
          );
        }
      } else {
        return;
      }
    },
    editTeam(team) {
      this.teamInfo.players = team.players;
      this.teamInfo.teamName = team.teamName;
      this.teamInfo.id = team.id;
      this.teamInfo.division = team.division;
      this.teamInfo.paid = team.paid;
      this.isEditing = true;
    },
    groupTeam(team) {
      this.teamInfo.players = team.players;
      this.teamInfo.teamName = team.teamName;
      this.teamInfo.id = team.id;
      this.teamInfo.division = team.division;
      this.teamInfo.needsGrouping = team.needsGrouping;
      this.teamInfo.numOfPlayers = team.numOfPlayers;
      this.isGrouping = true;
    },
    async submitTeamChanges() {
      await addToFirestore(`${this.teamInfo.division}-league`, this.teamInfo);
      this.teamsSignedUp = [];
      await this.listTeams();
    },
    async submitGroupChanges(teamToMerge) {
      //first we add the destination team with the target team
      //then we do an addToFirestore call on the target team for merging
      //then we pass the competely merged team as an arg
      //finally we delete the destination team, as it has been merged with the target

      //merge the teams
      teamToMerge.players.forEach((player) =>
        this.teamInfo.players.push(player)
      );
      if (this.teamInfo.players.length === 4) {
        this.teamInfo.needsGrouping = false;
      }
      this.teamInfo.numOfPlayers = this.teamInfo.players.length;
      await addToFirestore(`${this.teamInfo.division}-league`, this.teamInfo);
      await deleteFromFirestore(
        `${teamToMerge.division}-league`,
        teamToMerge.id
      );
      this.teamsSignedUp = [];
      await this.listTeams();
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
    await this.listTeams();
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
}
.admin--row:hover {
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
  border-bottom: 1px solid var(--mainColor);
  margin: auto;
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
</style>
