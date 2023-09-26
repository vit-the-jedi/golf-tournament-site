<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";
import adminPanel from "../components/adminPanel.vue";
</script>
<template>
  <secondaryNav />
  <div class="container row m-0">
    <div class="col-md-10 col-12 mx-auto">
      <div class="admin--card">
        <div
          class="row admin--row data w-100"
          v-for="team in this.checkedInTeams"
        >
          <div class="admin--column">
            <p>{{ team.teamName }}</p>
            <div class="admin--item">
              <div v-for="item in this.checkedInTeams">
                <div
                  class="player checked--in d-flex"
                  v-for="player in item.checkedInPlayers"
                >
                  <span>{{ player.first_name }}&nbsp;</span>
                  <span>{{ player.last_name }}</span>
                  <span class="ui-info paid">CHECKED IN</span>
                </div>
              </div>
              <div>
                <div v-for="item in this.checkedInTeams">
                  <div
                    class="player d-flex"
                    v-for="player in item.notCheckedInPlayers"
                  >
                    <span>{{ player.first_name }}&nbsp;</span>
                    <span>{{ player.last_name }}</span>
                    <span class="ui-info unpaid">CHECKED IN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  unsubscribeToCheckedInUpdates,
  getCheckedInTeams,
} from "../middleware/db.js";

export default {
  components: {},
  data() {
    return {
      adminChoices: {
        league: null,
        renderCoedList: true,
        renderMensList: true,
        renderCheckedIn: true,
        renderNotCheckedIn: true,
        filteredTeams: {
          mens: [],
          coed: [],
        },
        isFiltering: false,
      },
      checkedInTeams: [],
      notCheckedInTeams: [],
    };
  },
  methods: {
    async getCheckedInTeamsHandler() {
      //create data partition for mens and coed league so we can filter them
      await getCheckedInTeams(
        import.meta.env.MODE === "development" ? "testing" : "mens-league"
      ).then((checkInTeamData) => {
        //initial call successfull, now let's make sure we get updates
        if (checkInTeamData.data && !checkInTeamData.error) {
          checkInTeamData.data.forEach(function (team) {
            this.createCheckedInTeamsData(team);
          }, this);
        } else {
          this.$toast.error(checkInTeamData.error);
        }
      });
    },
    createCheckedInTeamsData(team) {
      Object.values(team).forEach(function (teamObj) {
        const checkedInTeamObj = {};
        checkedInTeamObj["checkedInPlayers"] = [];
        checkedInTeamObj["notCheckedInPlayers"] = [];
        const playerArray = teamObj.players;
        const checkedInPlayersArray = playerArray.filter(
          (player, index, arr) => {
            if (teamObj.checkedIn.includes(index)) {
              return player;
            }
          }
        );

        const notCheckedInPlayersArray = playerArray.filter(
          (player, index, arr) => {
            if (!teamObj.checkedIn.includes(index)) {
              return player;
            }
          }
        );
        //push all checked in players in =to our array
        checkedInTeamObj.checkedInPlayers = checkedInPlayersArray;

        //push remaining into other array
        checkedInTeamObj.notCheckedInPlayers = notCheckedInPlayersArray;

        checkedInTeamObj.teamName = teamObj.teamName;
        this.checkedInTeams.push(checkedInTeamObj);
        console.log(this.checkedInTeams);
      }, this);
    },
    createNotCheckedInTeamsData(team, league) {
      Object.values(team).forEach(function (teamObj) {
        this.notCheckedInTeamsData[league][teamObj.id] = teamObj;
      }, this);
    },
    scrollToActionHandler(ev) {
      console.log(ev.currentTarget);
      const scrollTargetId =
        ev.currentTarget.getAttribute("data-scroll-target");
      const scrollTarget = document.getElementById(`${scrollTargetId}`);
      scrollTarget.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    filterLeague(filterTeamValue) {
      if (filterTeamValue === "checked-in") {
        this.adminChoices.renderCheckedIn = true;
        this.adminChoices.renderNotCheckedIn = false;
      } else if (filterTeamValue === "not-checked-in") {
        this.adminChoices.renderCheckedIn = false;
        this.adminChoices.renderNotCheckedIn = true;
      } else {
        this.adminChoices.renderCheckedIn = true;
        this.adminChoices.renderNotCheckedIn = true;
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
  },
  //await the call to firebase for teams list
  async mounted() {
    await this.getCheckedInTeamsHandler();
  },
};
</script>

<style>
@import "../assets/admin.css";

.player {
  justify-content: space-evenly;
}
.player .ui-info {
  min-width: 118px;
  text-align: center;
  width: 100%;
  display: block;
}
</style>
