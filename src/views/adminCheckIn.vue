<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";
import adminPanel from "../components/adminPanel.vue";
import checkInForm from "../components/checkInForm.vue";
</script>
<template>
  <secondaryNav />
  <div class="container row m-0">
    <div class="col-md-6 col-12 mx-auto">
      <div class="admin--card">
        <checkInForm />
      </div>
    </div>
    <div class="col-md-6 col-12 mx-auto">
      <div class="admin--card">
        <div class="d-flex flex-column checked-in--stats">
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
    </div>
    <div class="col-md-6 col-12 mx-auto">
      <div class="admin--card mt-0">
        <h1>Men's League</h1>
        <div
          class="row admin--row data w-100"
          v-for="team in this.notCheckedInTeams"
        >
          <div class="admin--column">
            <div class="admin--item">
              <div class="d-flex justify-content-between">
                <h6 class="team-name">{{ team.teamName }}</h6>
                <span
                  >Checked In:
                  <span class="ui-info unpaid" style="display: inline">0</span>
                </span>
                <span>Total Players: {{ team.numOfPlayers }}</span>
              </div>
              <div
                class="player checked--in justify-content-between d-flex"
                v-for="(item, index) in team.players"
              >
                <ul class="player--list d-flex justify-content-center">
                  <li>{{ index + 1 }}</li>
                  <li>
                    <span>{{ item.first_name }}&nbsp;</span>
                  </li>
                  <li>
                    <span>{{ item.last_name }}</span>
                  </li>
                  <li><span class="ui-info unpaid">CHECKED IN</span></li>
                </ul>
              </div>
              <div class="col-12 row">
                <button
                  @click="showTeamDetails"
                  class="secondary--button more-info"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row admin--row data w-100"
          v-for="team in this.checkedInTeams"
        >
          <div class="admin--column">
            <div class="admin--item">
              <div class="d-flex justify-content-between">
                <h6 class="team-name">{{ team.teamName }}</h6>
                <span
                  >Checked In:
                  <span class="ui-info paid" style="display: inline">{{
                    team.checkedInPlayers.length
                  }}</span></span
                >
                <span>Total Players: {{ team.numOfPlayers }}</span>
              </div>
              <div
                class="player checked--in justify-content-between d-flex"
                v-for="(item, index) in team.checkedInPlayers"
              >
                <ul class="player--list d-flex justify-content-center">
                  <li>{{ index + 1 }}</li>
                  <li>
                    <span>{{ item.first_name }}&nbsp;</span>
                  </li>
                  <li>
                    <span>{{ item.last_name }}</span>
                  </li>
                  <li><span class="ui-info paid">CHECKED IN</span></li>
                </ul>
              </div>
              <div
                class="player checked--in justify-content-between d-flex"
                v-for="(item, index) in team.notCheckedInPlayers"
              >
                <ul class="player--list d-flex justify-content-center">
                  <li>{{ index + 1 }}</li>
                  <li>
                    <span>{{ item.first_name }}&nbsp;</span>
                  </li>
                  <li>
                    <span>{{ item.last_name }}</span>
                  </li>
                  <li><span class="ui-info unpaid">CHECKED IN</span></li>
                </ul>
              </div>
              <div class="col-12 row">
                <button
                  @click="showTeamDetails"
                  class="secondary--button more-info"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-12 mx-auto">
      <div class="admin--card mt-0">
        <h1>Co-ed League</h1>
      </div>
    </div>
  </div>
</template>
<script>
import {
  unsubscribeToCheckedInUpdates,
  getCheckedInTeams,
  listTeamDocs,
  addPropertyToDoc,
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
      searchResult: {
        players: [],
        teamName: null,
        id: null,
      },
    };
  },
  methods: {
    findPlayer: async function (ev) {
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
                this.findPlayer__firstName.toLowerCase() &&
              player.last_name.toLowerCase().replaceAll(" ", "") ===
                this.findPlayer__lastName.toLowerCase()
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
      }
    },
    async getCheckedInTeamsHandler() {
      //create data partition for mens and coed league so we can filter them
      await getCheckedInTeams(
        import.meta.env.MODE === "development" ? "testing" : "mens-league"
      ).then((checkInTeamData) => {
        //initial call successfull, now let's make sure we get updates
        if (!checkInTeamData.error) {
          checkInTeamData.data.checkedInTeams.forEach(function (team) {
            this.createCheckedInTeamsData(team);
          }, this);

          checkInTeamData.data.notCheckedInTeams.forEach(function (team) {
            this.createNotCheckedInTeamsData(team);
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

        //calculate the number of people checked in
        this.totalPlayersCheckedIn += checkedInPlayersArray.length;
        //calculate the number of people not checked in
        this.totalPlayersNotCheckedIn += notCheckedInPlayersArray.length;
      }, this);
    },
    createNotCheckedInTeamsData(team, league) {
      Object.values(team).forEach(function (teamObj) {
        const notCheckedInTeamObj = {};
        //push remaining into other array
        notCheckedInTeamObj.players = teamObj.players;
        notCheckedInTeamObj.numOfPlayers = teamObj.numOfPlayers;
        notCheckedInTeamObj.teamName = teamObj.teamName;
        this.notCheckedInTeams.push(notCheckedInTeamObj);
        //calculate the number of people not checked in
        this.totalPlayersNotCheckedIn += 1;
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
    showTeamDetails(e) {
      const parent = e.currentTarget.closest(".admin--item");
      const listContainer = [...parent.querySelectorAll(".player")];
      let playerListHeight = 0;
      listContainer.forEach((container) => {
        for (const list of container.querySelectorAll(".player--list")) {
          playerListHeight += list.getBoundingClientRect().height;
        }
      });

      if (e.currentTarget.classList.contains("info--open")) {
        listContainer.forEach((container) => {
          container.style.height = `0px`;
        });

        e.currentTarget.classList.remove("info--open");
      } else {
        e.currentTarget.classList.add("info--open");
        e.currentTarget.textContent = "Less Info";
        listContainer.forEach((container) => {
          if (parent.querySelectorAll(".player").length > 1) {
            container.style.height = `${
              playerListHeight / parent.querySelectorAll(".player").length
            }px`;
          } else {
            container.style.height = `${playerListHeight}px`;
          }
        });
      }
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
  height: 0;
  overflow: hidden;
}
.player--list {
  list-style-type: none;
  max-width: 100%;
  width: 100%;
  padding: 1em;
}
.player--list li {
  flex-grow: 1;
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
