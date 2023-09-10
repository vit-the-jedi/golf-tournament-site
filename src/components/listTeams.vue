<template>
  <!--mens list-->
  <div class="admin--card" v-if="this.adminChoices.renderMensList">
    <h2 class="mb-4">Mens League</h2>
    <div class="row admin--row admin--legend">
      <div class="admin--column"><h5>Team</h5></div>
      <div class="admin--column"><h5>Division</h5></div>
      <div class="admin--column"><h5>Needs Grouping</h5></div>
    </div>
    <div
      class="row admin--row"
      v-if="!this.adminChoices.isFiltering"
      v-for="team in teamsSignedUp.mens"
    >
      <div
        class="row admin--row data"
        :data-paid="team.paid"
        :data-needsGrouping="team.needsGrouping"
      >
        <div class="admin--column">
          <div class="admin--item">
            <div class="d-flex justify-content-between">
              <h6 class="team-name">{{ team.teamName }}</h6>
              <span class="ui-info paid" v-if="team.paid">PAID</span>
              <span class="ui-info unpaid" v-if="!team.paid">UNPAID</span>
            </div>
            <div class="team">
              <form action="">
                <input type="hidden" name="player-names" />
                <span v-for="player in team.players"
                  >{{ player.first_name }} {{ player.last_name }}</span
                >
              </form>
            </div>
          </div>
        </div>
        <div class="admin--column">
          <div class="admin--item team-division">
            <span>{{ team.division }}</span>
          </div>
        </div>
        <div class="admin--column">
          <div class="admin--item team-needsGrouping">
            <span v-if="team.needsGrouping">yes</span>
            <span v-if="!team.needsGrouping">no</span>
          </div>
        </div>
        <div class="admin--tools">
          <ul class="dropbtn icons btn-right showLeft" @click="showAdminTools">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="dropdown-content">
            <button class="close-tools" @click="closeAdminTools">
              &times;
            </button>
            <ul>
              <li>
                <button
                  :data-tool-target="team.id"
                  :data-league="team.division"
                  @click="this.editTeamHandler"
                >
                  Edit Team
                </button>
              </li>
              <li>
                <button
                  :data-tool-target="team.id"
                  :data-league="team.division"
                  @click="deleteTeamHandler"
                >
                  Delete Team
                </button>
              </li>
              <li v-if="team.needsGrouping">
                <button
                  :data-tool-target="team.id"
                  :data-league="team.division"
                  @click="groupTeamHandler"
                >
                  Group Team
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--filtered mens-->
    <div
      class="row admin--row"
      v-if="this.adminChoices.isFiltering"
      v-for="team in this.adminChoices.filteredTeams.mens"
    >
      <div class="list--container">
        <div
          class="row admin--row data"
          :data-paid="team.paid"
          :data-needsGrouping="team.needsGrouping"
        >
          <div class="admin--column">
            <div class="admin--item">
              <div class="d-flex justify-content-between">
                <h6 class="team-name">{{ team.teamName }}</h6>
                <span class="ui-info paid" v-if="team.paid">PAID</span>
                <span class="ui-info unpaid" v-if="!team.paid">UNPAID</span>
              </div>
              <div class="team">
                <form action="">
                  <input type="hidden" name="player-names" />
                  <span v-for="player in team.players"
                    >{{ player.first_name }} {{ player.last_name }}</span
                  >
                </form>
              </div>
            </div>
          </div>
          <div class="admin--column">
            <div class="admin--item team-division">
              <span>{{ team.division }}</span>
            </div>
          </div>
          <div class="admin--column">
            <div class="admin--item team-needsGrouping">
              <span v-if="team.needsGrouping">yes</span>
              <span v-if="!team.needsGrouping">no</span>
            </div>
          </div>
          <div class="admin--tools">
            <ul
              class="dropbtn icons btn-right showLeft"
              @click="showAdminTools"
            >
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div class="dropdown-content">
              <button class="close-tools" @click="closeAdminTools">
                &times;
              </button>
              <ul>
                <li>
                  <button
                    :data-tool-target="team.id"
                    :data-league="team.division"
                    @click="this.editTeamHandler"
                  >
                    Edit Team
                  </button>
                </li>
                <li>
                  <button
                    :data-tool-target="team.id"
                    :data-league="team.division"
                    @click="deleteTeamHandler"
                  >
                    Delete Team
                  </button>
                </li>
                <li v-if="team.needsGrouping">
                  <button
                    :data-tool-target="team.id"
                    :data-league="team.division"
                    @click="groupTeamHandler"
                  >
                    Group Team
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="no--data"
      v-if="
        this.adminChoices.isFiltering &&
        Object.keys(this.adminChoices.filteredTeams.mens).length === 0
      "
    >
      <p>No results matching your request</p>
    </div>
  </div>
  <!--coed list-->
  <div class="admin--card" v-if="this.adminChoices.renderCoedList">
    <h2 class="mb-4">Coed League</h2>
    <div class="row admin--row admin--legend">
      <div class="admin--column"><h5>Team</h5></div>
      <div class="admin--column"><h5>Division</h5></div>
      <div class="admin--column"><h5>Needs Grouping</h5></div>
    </div>
    <div
      class="row admin--row"
      v-if="!this.adminChoices.isFiltering"
      v-for="team in teamsSignedUp.coed"
    >
      <div class="list--container">
        <div
          class="row admin--row data"
          :data-paid="team.paid"
          :data-needsGrouping="team.needsGrouping"
        >
          <div class="admin--column">
            <div class="admin--item">
              <div class="d-flex justify-content-between">
                <h6 class="team-name">{{ team.teamName }}</h6>
                <span class="ui-info paid" v-if="team.paid">PAID</span>
                <span class="ui-info unpaid" v-if="!team.paid">UNPAID</span>
              </div>
              <div class="team">
                <form action="">
                  <input type="hidden" name="player-names" />
                  <span v-for="player in team.players"
                    >{{ player.first_name }} {{ player.last_name }}</span
                  >
                </form>
              </div>
            </div>
          </div>
          <div class="admin--column">
            <div class="admin--item team-division">
              <span>{{ team.division }}</span>
            </div>
          </div>
          <div class="admin--column">
            <div class="admin--item team-needsGrouping">
              <span v-if="team.needsGrouping">yes</span>
              <span v-if="!team.needsGrouping">no</span>
            </div>
          </div>
          <div class="admin--tools">
            <ul
              class="dropbtn icons btn-right showLeft"
              @click="showAdminTools"
            >
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div class="dropdown-content">
              <button class="close-tools" @click="closeAdminTools">
                &times;
              </button>
              <ul>
                <li>
                  <button
                    :data-tool-target="team.id"
                    :data-league="team.division"
                    @click="this.editTeamHandler"
                  >
                    Edit Team
                  </button>
                </li>
                <li>
                  <button
                    :data-tool-target="team.id"
                    :data-league="team.division"
                    @click="deleteTeamHandler"
                  >
                    Delete Team
                  </button>
                </li>
                <li v-if="team.needsGrouping">
                  <button
                    :data-tool-target="team.id"
                    :data-league="team.division"
                    @click="groupTeamHandler"
                  >
                    Group Team
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--filtered coed-->
    <div
      class="row admin--row"
      v-if="this.adminChoices.isFiltering"
      v-for="team in this.adminChoices.filteredTeams.coed"
    >
      <div class="list--container">
        <div
          class="row admin--row data"
          :data-paid="team.paid"
          :data-needsGrouping="team.needsGrouping"
        >
          <div class="admin--column">
            <div class="admin--item">
              <div class="d-flex justify-content-between">
                <h6 class="team-name">{{ team.teamName }}</h6>
                <span class="ui-info paid" v-if="team.paid">PAID</span>
                <span class="ui-info unpaid" v-if="!team.paid">UNPAID</span>
              </div>
              <div class="team">
                <form action="">
                  <input type="hidden" name="player-names" />
                  <span v-for="player in team.players"
                    >{{ player.first_name }} {{ player.last_name }}</span
                  >
                </form>
              </div>
            </div>
          </div>
          <div class="admin--column">
            <div class="admin--item team-division">
              <span>{{ team.division }}</span>
            </div>
          </div>
          <div class="admin--column">
            <div class="admin--item team-needsGrouping">
              <span v-if="team.needsGrouping">yes</span>
              <span v-if="!team.needsGrouping">no</span>
            </div>
          </div>
          <div class="admin--tools">
            <ul
              class="dropbtn icons btn-right showLeft"
              @click="showAdminTools"
            >
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div class="dropdown-content">
              <button class="close-tools" @click="closeAdminTools">
                &times;
              </button>
              <ul>
                <li>
                  <button
                    :data-tool-target="team.id"
                    :data-league="team.division"
                    @click="this.editTeamHandler"
                  >
                    Edit Team
                  </button>
                </li>
                <li>
                  <button
                    :data-tool-target="team.id"
                    :data-league="team.division"
                    @click="deleteTeamHandler"
                  >
                    Delete Team
                  </button>
                </li>
                <li v-if="team.needsGrouping">
                  <button
                    :data-tool-target="team.id"
                    :data-league="team.division"
                    @click="groupTeamHandler"
                  >
                    Group Team
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="no--data"
      v-if="
        this.adminChoices.isFiltering &&
        Object.keys(this.adminChoices.filteredTeams.coed).length === 0
      "
    >
      <p>No results matching your request</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["teamsSignedUp", "adminChoices"],
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
    async deleteTeamHandler(ev) {
      this.$emit("delete-team", this.teamGetter(ev.target));
    },
    groupTeamHandler(ev) {
      this.$emit("group-team", this.teamGetter(ev.target));
    },
    teamGetter(target) {
      //re-usable to get the target team from teamsSignedUp
      const id = target.getAttribute("data-tool-target");
      const league = target.getAttribute("data-league");

      for (const [teamId, teamObj] of Object.entries(
        this.teamsSignedUp[league]
      )) {
        if (teamId === id) {
          return teamObj;
        }
      }
    },
    editTeamHandler(ev) {
      this.$emit("edit-team", this.teamGetter(ev.target));
      //edit the teamsSignedUp data
      //send the edits to firebase on save
      //re-hydrate ui w/ new data
    },
  },
};
</script>
<style scoped>
h6 {
  font-weight: bold;
  display: inline;
}
.admin--row,
.list--container {
  width: 100%;
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

@media screen and (max-width: 767px) {
  .admin--legend {
    display: none;
  }
  .paid,
  .unpaid {
    margin-top: 3em;
    max-height: 25px;
  }
  .team-name::before {
    content: "Team Name";
    display: block;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1em;
    width: 100%;
  }
  .team::before {
    content: "Players";
    display: block;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 1em 0;
    width: 100%;
  }
  .team-division::before {
    content: "Division";
    display: block;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1em;
    width: 100%;
  }
  .team-needsGrouping::before {
    content: "Needs Grouping";
    display: block;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1em;
    width: 100%;
  }
  .admin--item {
    padding: 2vh 1vh;
  }
  .admin--row {
    margin-bottom: 1em;
  }
  .dropdown-content {
    right: 20px;
    left: unset;
    background-color: var(--mainColor);
  }
  .dropdown-content ul li button {
    color: #fff;
  }
  .close-tools {
    font-weight: bold;
    font-size: 35px;
    top: -20px;
    right: 12px;
    color: #fff;
  }
}
</style>
