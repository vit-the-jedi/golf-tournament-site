<template>
  <dialog open class="admin--card edit-team-dialog">
    <button class="close-tools" @click="closeEditModal">&times;</button>
    <form id="editTeam-form">
      <small>ID: {{ this.teamInfo.id }}</small>
      <fieldset>
        <legend>Team Name</legend>
        <input
          class="input full-width"
          type="text"
          id="team-name"
          :value="this.teamInfo.teamName"
          @input="(event) => (this.teamInfo.teamName = event.target.value)"
        />
      </fieldset>
      <fieldset>
        <legend>Division</legend>
        <select
          :value="this.teamInfo.division"
          @input="(event) => (this.teamInfo.division = event.target.value)"
          class="input full-width"
        >
          <option value="mens">Men's Division</option>
          <option value="coed">Co-ed Division</option>
        </select>
      </fieldset>
      <fieldset class="row">
        <legend>Players</legend>
        <!-- player 1 -->
        <input
          class="input col-6"
          v-if="this.teamInfo.players[0]"
          type="text"
          id="player1-first-name"
          :value="this.teamInfo.players[0].first_name"
          @input="
            (event) =>
              (this.teamInfo.players[0].first_name = event.target.value)
          "
        />
        <input
          class="input col-6"
          v-if="this.teamInfo.players[0]"
          type="text"
          id="player1-first-name"
          :value="this.teamInfo.players[0].last_name"
          @input="
            (event) => (this.teamInfo.players[0].last_name = event.target.value)
          "
        />
        <!-- player 2 -->
        <input
          class="input col-6"
          v-if="this.teamInfo.players[1]"
          type="text"
          id="player1-first-name"
          :value="this.teamInfo.players[1].first_name"
          @input="
            (event) =>
              (this.teamInfo.players[1].first_name = event.target.value)
          "
        />
        <input
          class="input col-6"
          v-if="this.teamInfo.players[1]"
          type="text"
          id="player1-first-name"
          :value="this.teamInfo.players[1].last_name"
          @input="
            (event) => (this.teamInfo.players[1].last_name = event.target.value)
          "
        />
        <!-- player 3 -->
        <input
          class="input col-6"
          v-if="this.teamInfo.players[2]"
          type="text"
          id="player1-first-name"
          :value="this.teamInfo.players[2].first_name"
          @input="
            (event) =>
              (this.teamInfo.players[2].first_name = event.target.value)
          "
        />
        <input
          class="input col-6"
          v-if="this.teamInfo.players[2]"
          type="text"
          id="player1-first-name"
          :value="this.teamInfo.players[2].last_name"
          @input="
            (event) => (this.teamInfo.players[2].last_name = event.target.value)
          "
        />
        <!-- player 4 -->
        <input
          class="input col-6"
          v-if="this.teamInfo.players[3]"
          type="text"
          id="player1-first-name"
          :value="this.teamInfo.players[3].first_name"
          @input="
            (event) =>
              (this.teamInfo.players[3].first_name = event.target.value)
          "
        />
        <input
          class="input col-6"
          v-if="this.teamInfo.players[3]"
          type="text"
          id="player1-first-name"
          :value="this.teamInfo.players[3].last_name"
          @input="
            (event) => (this.teamInfo.players[3].last_name = event.target.value)
          "
        />
      </fieldset>
      <div class="row w-100 m-auto">
        <div class="col-6">
          <p>
            Current payment status:
            <span class="paid" v-if="this.teamInfo.paid">PAID</span>
            <span class="paid unpaid" v-if="!this.teamInfo.paid">UNPAID</span>
          </p>
        </div>
        <div class="col-6">
          <button
            class="payment-button"
            v-if="!this.teamInfo.paid"
            @click="(event) => (this.teamInfo.paid = true)"
          >
            Mark Team Paid
          </button>
          <button
            class="payment-button"
            v-if="this.teamInfo.paid"
            @click="(event) => (this.teamInfo.paid = false)"
          >
            Mark Team Unpaid
          </button>
        </div>
      </div>
      <button
        role="button"
        id="editTeam-submit"
        @click="submitTeamChangesHandler"
      >
        SUBMIT CHANGES
      </button>
    </form>
  </dialog>
  <div id="dialog--bg" class="ui--backdrop backdrop--open"></div>
</template>
<script>
export default {
  props: ["teamInfo"],
  mounted() {
    console.log(this.teamInfo);
  },
  methods: {
    submitTeamChangesHandler(e) {
      e.preventDefault();
      this.$emit("submit-changes");
      this.closeEditModal();
    },
    closeEditModal(ev) {
      this.$emit("close-modal");
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
.payment-button {
  font-family: "Nunito Sans", sans-serif;
  font-size: 12px;
  max-width: 200px;
  background-color: white;
  border: 2px solid var(--mainColor);
  color: var(--mainColor);
}
</style>
