<template>
  <div class="row admin--row">
    <div class="admin--column"><h5>Team</h5></div>
    <div class="admin--column"><h5>Division</h5></div>
    <div class="admin--column"><h5>Needs Grouping</h5></div>
  </div>
  <div class="row admin--row" v-for="team in teamsSignedUp">
    <div class="admin--column">
      <div class="admin--item">
        <div class="d-flex justify-content-between">
          <h6>{{ team.teamName }}</h6>
          <span class="paid" v-if="team.paid">PAID</span>
          <span class="paid unpaid" v-if="!team.paid">UNPAID</span>
        </div>
        <div class="team">
          <span>{{ team.players }}</span>
        </div>
      </div>
    </div>
    <!-- <div class="admin--column">
      <div class="admin--item">
        <span>{{ team.players }}</span>
      </div>
    </div> -->
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
      <ul class="dropbtn icons btn-right showLeft" @click="showAdminTools">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="dropdown-content">
        <button class="close-tools" @click="closeAdminTools">&times;</button>
        <ul>
          <li>
            <button :data-tool-target="team.id" @click="editTeamHandler">
              Edit Team
            </button>
          </li>
          <li>
            <button :data-tool-target="team.id" @click="deleteTeamHandler">
              Delete Team
            </button>
          </li>
          <li>
            <button :data-tool-target="team.id" @click="markTeamPaidHandler">
              Mark as paid
            </button>
          </li>
          <li>
            <button :data-tool-target="team.id" @click="markTeamUnPaidHandler">
              Mark as un-paid
            </button>
          </li>
        </ul>
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
    closeAdminTools(ev) {
      const parent = ev.target.parentNode;
      parent.classList.remove("show");
    },
    showAdminTools(ev) {
      const parent = ev.target.parentNode;
      const menu = parent.querySelector(".dropdown-content");
      menu.classList.add("show");
    },
    getTeamsListHandler: async function () {
      const teamsList = await listTeamDocs(
        this.adminChoices.division ?? "mens-league"
      );
      return teamsList;
    },
    async deleteTeamHandler(ev) {
      const teamId = ev.target.getAttribute("data-tool-target");
      const targetTeam = Object.values(this.teamsSignedUp).filter(
        (team) => team.id === teamId
      )[0];
      const answer = prompt(
        `Are you sure you want to delete ${targetTeam.teamName}?
        Type YES (all caps) below to delete.`
      );
      if (answer === "YES") {
        //delete team from db collection
        //re-hydrate ui w/ new list of teams
        const deleteComplete = await deleteFromFirestore(
          `${targetTeam.division}-league`,
          targetTeam.teamName
        );
        if (deleteComplete) {
          //trigger UI update
          this.$router.go();
        } else {
          this.errors.push(
            "There was a problem deleting this team, please try again"
          );
        }
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
<style scoped>
h6 {
  font-weight: bold;
  display: inline;
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
.paid {
  display: inline;
  max-width: 100px;
  border-radius: 5px;
  background-color: #51cc8a;
  font-weight: bold;
  color: white;
  margin-left: 20px;
  font-size: 0.8rem;
  padding: 0.25rem;
}
.paid.unpaid {
  background-color: #ef376e;
}
</style>
