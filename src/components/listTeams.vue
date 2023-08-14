<template>
  <!--mens list-->
  <div class="admin--card" v-if="this.adminChoices.renderMensList">
    <h2 class="mb-4">Mens League</h2>
    <div class="row admin--row">
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
              <h6>{{ team.teamName }}</h6>
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
          <div class="admin--item">
            <span>{{ team.division }}</span>
          </div>
        </div>
        <div class="admin--column">
          <div class="admin--item">
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
                  @click="this.editTeamHandler"
                >
                  Edit Team
                </button>
              </li>
              <li>
                <button :data-tool-target="team.id" @click="deleteTeamHandler">
                  Delete Team
                </button>
              </li>
              <li v-if="team.needsGrouping">
                <button :data-tool-target="team.id" @click="groupTeamHandler">
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
                <h6>{{ team.teamName }}</h6>
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
            <div class="admin--item">
              <span>{{ team.division }}</span>
            </div>
          </div>
          <div class="admin--column">
            <div class="admin--item">
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
                    @click="this.editTeamHandler"
                  >
                    Edit Team
                  </button>
                </li>
                <li>
                  <button
                    :data-tool-target="team.id"
                    @click="deleteTeamHandler"
                  >
                    Delete Team
                  </button>
                </li>
                <li v-if="team.needsGrouping">
                  <button :data-tool-target="team.id" @click="groupTeamHandler">
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
    <div class="row admin--row">
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
                <h6>{{ team.teamName }}</h6>
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
            <div class="admin--item">
              <span>{{ team.division }}</span>
            </div>
          </div>
          <div class="admin--column">
            <div class="admin--item">
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
                    @click="this.editTeamHandler"
                  >
                    Edit Team
                  </button>
                </li>
                <li>
                  <button
                    :data-tool-target="team.id"
                    @click="deleteTeamHandler"
                  >
                    Delete Team
                  </button>
                </li>
                <li v-if="team.needsGrouping">
                  <button :data-tool-target="team.id" @click="groupTeamHandler">
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
                <h6>{{ team.teamName }}</h6>
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
            <div class="admin--item">
              <span>{{ team.division }}</span>
            </div>
          </div>
          <div class="admin--column">
            <div class="admin--item">
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
                    @click="this.editTeamHandler"
                  >
                    Edit Team
                  </button>
                </li>
                <li>
                  <button
                    :data-tool-target="team.id"
                    @click="deleteTeamHandler"
                  >
                    Delete Team
                  </button>
                </li>
                <li v-if="team.needsGrouping">
                  <button :data-tool-target="team.id" @click="groupTeamHandler">
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
      const teamId = ev.target.getAttribute("data-tool-target");
      const targetTeam = Object.values(this.teamsSignedUp).filter(
        (team) => team.id === teamId
      )[0];

      this.$emit("delete-team", targetTeam);
    },
    groupTeamHandler(ev) {
      const teamId = ev.target.getAttribute("data-tool-target");
      const targetTeam = Object.values(this.teamsSignedUp).filter(
        (team) => team.id === teamId
      )[0];

      this.$emit("group-team", targetTeam);
    },
    editTeamHandler(ev) {
      const id = ev.target.getAttribute("data-tool-target");
      const targetTeam = this.teamsSignedUp.filter((team) => team.id === id);
      this.$emit("edit-team", targetTeam[0]);
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
.no--data {
  margin: 2em auto;
  text-align: center;
}
</style>
