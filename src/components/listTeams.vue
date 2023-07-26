<template>
  <div class="row admin--row">
    <div class="admin--column"><h5>Team Name</h5></div>
    <div class="admin--column"><h5>Players</h5></div>
    <div class="admin--column"><h5>Division</h5></div>
    <div class="admin--column"><h5>Needs Grouping</h5></div>
  </div>
  <div class="row admin--row" v-for="team in teamsSignedUp">
    <div class="admin--column">
      <div class="admin--item">
        <span>{{ team.teamName }}</span>
      </div>
    </div>
    <div class="admin--column">
      <div class="admin--item">
        <span>{{ team.players }}</span>
      </div>
    </div>
    <div class="admin--column">
      <div class="admin--item">
        <span>{{ team.division }}</span>
      </div>
    </div>
    <div class="admin--column">
      <div class="admin--item">
        <span>{{ team.needsGrouping }}</span>
      </div>
    </div>
    <div class="admin--tools">
      <div class="row admin--row">
        <button :data-tool-target="team.id" @click="deleteTeamHandler">
          DELETE TEAM
        </button>
        <button :data-tool-target="team.id" @click="editTeamHandler">
          EDIT TEAM
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { listTeamDocs } from "../middleware/db.js";
import { deleteFromFirestore } from "../middleware/db.js";
export default {
  data() {
    return {
      user: null,
      teamsSignedUp: [],
      adminChoices: {
        division: null,
        teamName: null,
      },
      errors: [],
    };
  },
  methods: {
    getTeamsListHandler: async function () {
      const teamsList = await listTeamDocs(
        this.adminChoices.division ?? "mens-league"
      );
      return teamsList;
    },
    async deleteTeamHandler(ev) {
      const teamId = ev.target.getAttribute("data-tool-target");
      let targetTeam;
      for (const o of this.teamsSignedUp) {
        if (o.id === teamId) {
          targetTeam = o;
        }
      }
      const answer = prompt(
        `Are you sure you want to delete this team?
        Type YES (all caps) below to delete.`
      );
      if (answer === "YES") {
        //delete team from db collection
        //re-hydrate ui w/ new list of teams
        await deleteFromFirestore(
          `${targetTeam.division}-league`,
          targetTeam.teamName
        ).then((deleteComplete) => {
          if (deleteComplete) {
            //trigger UI update
            this.$router.go();
          } else {
            this.errors.push(
              "There was a problem deleting this team, please try again"
            );
          }
        });
      } else {
        return;
      }
    },
    editTeamHandler() {
      //edit the teamsSignedUp data
      //send the edits to firebase on save
      //re-hydrate ui w/ new data
      console.log(event);
    },
  },
  //await the call to firebase for teams list
  async mounted() {
    const teamsFromDb = await this.getTeamsListHandler();
    //destructure array of nested objects to get the values we need
    teamsFromDb.forEach((nestedObj) => {
      const [[key, value]] = Object.entries(nestedObj);
      const teamObj = {};
      teamObj.teamName = value.teamName;
      teamObj.division = value.division;
      teamObj.players = `${value.players[0].first_name} ${value.players[0].last_name}`;
      teamObj.needsGrouping = value.needsGrouping === true ? "yes" : "no";
      teamObj.id = value.id;
      this.teamsSignedUp.push(teamObj);
    });
  },
};
</script>
