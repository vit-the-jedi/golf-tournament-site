<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";
import adminPanel from "../components/adminPanel.vue";
</script>
<template>
  <secondaryNav />
  <div class="container row m-0">
    <div class="admin--card col-12 mx-auto">
      <div class="d-flex justify-content-between checked-in--stats">
        <h5>
          Total Players Checked In:
          <span class="ui-info paid">{{ this.totalPlayersCheckedIn }}</span>
        </h5>
        <h5>
          Total Players Not Checked In:
          <span class="ui-info unpaid">{{
            this.totalPlayersNotCheckedIn
          }}</span>
        </h5>
      </div>
    </div>
    <div class="col-md-6 col-12 mx-auto">
      <div class="admin--card mt-0">
        <h1>Men's League</h1>
        <div
          class="row admin--row data w-100"
          v-for="team in this.checkedInTeams"
        >
          <div class="admin--column">
            <div class="admin--item">
              <div class="d-flex justify-content-between">
                <h6 class="team-name">{{ team.teamName }}</h6>
                <span>Total players: {{ team.numOfPlayers }}</span>
              </div>
              <div
                class="player checked--in justify-content-between d-flex"
                v-for="item in team.checkedInPlayers"
              >
                <span>{{ item.first_name }}&nbsp;</span>
                <span>{{ item.last_name }}</span>
                <span class="ui-info paid">CHECKED IN</span>
              </div>
              <div
                class="player checked--in justify-content-between d-flex"
                v-for="item in team.notCheckedInPlayers"
              >
                <span>{{ item.first_name }}&nbsp;</span>
                <span>{{ item.last_name }}</span>
                <span class="ui-info unpaid">CHECKED IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-12 mx-auto">
      <div class="admin--card mt-0">
        <h1>Co-ed League</h1>
        <div
          class="row admin--row data w-100"
          v-for="team in this.notCheckedInTeams"
        >
          <div class="admin--column">
            <div class="admin--item">
              <h6 class="team-name">{{ team.teamName }}</h6>
              <div v-for="item in this.notCheckedInTeams">
                <div
                  class="player checked--in justify-content-between d-flex"
                  v-for="player in item.notCheckedInPlayers"
                >
                  <span>{{ player.first_name }}&nbsp;</span>
                  <span>{{ player.last_name }}</span>
                  <span class="ui-info paid">CHECKED IN</span>
                </div>
              </div>
              <div>
                <div v-for="item in this.checkedInTeams">
                  <div
                    class="player justify-content-between d-flex"
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
      totalPlayersCheckedIn: 0,
      totalPlayersNotCheckedIn: 0,
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
        //push all checked in players in to our array
        checkedInTeamObj.checkedInPlayers = checkedInPlayersArray;

        //push remaining into other array
        checkedInTeamObj.notCheckedInPlayers = notCheckedInPlayersArray;
        checkedInTeamObj.numOfPlayers = teamObj.numOfPlayers;
        checkedInTeamObj.teamName = teamObj.teamName;
        this.checkedInTeams.push(checkedInTeamObj);
        console.log(this.checkedInTeams);

        //calculate the number of people checked in
        this.totalPlayersCheckedIn += checkedInPlayersArray.length;
        //calculate the number of people not checked in
        this.totalPlayersNotCheckedIn += notCheckedInPlayersArray.length;
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
.admin--column {
  flex-grow: 1;
}
.player {
  margin: 0.25em auto;
}
.player span {
  font-size: 14px;
}
.player.checked--in .unpaid {
  text-decoration: line-through;
}
.checked-in--stats .ui-info {
  font-size: 1em;
}
</style>
