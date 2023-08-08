<template>
  <dialog open class="admin--card">
    <form id="editTeam-form">
      <fieldset>
        <legend>Team Name</legend>
        <input
          class="input full-width"
          type="text"
          id="team-name"
          :value="this.teamInfo.teamName"
          @input="(event) => (this.teamInfo.teamName = event.target.value)"
        />
        <small>ID: {{ this.teamInfo.id }}</small>
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
      <fieldset>
        <legend>Players</legend>
        <input
          class="input full-width"
          v-if="this.teamInfo.player1_name"
          type="text"
          id="player1-name"
          :value="this.teamInfo.player1_name"
          @input="(event) => (this.teamInfo.player1_name = event.target.value)"
        />
        <input
          class="input full-width"
          v-if="this.teamInfo.player2_name"
          type="text"
          id="player2-name"
          :value="this.teamInfo.player2_name"
          @input="(event) => (this.teamInfo.player2_name = event.target.value)"
        />
        <input
          class="input full-width"
          v-if="this.teamInfo.player3_name"
          type="text"
          id="player3-name"
          :value="this.teamInfo.player3_name"
          @input="(event) => (this.teamInfo.player3_name = event.target.value)"
        />
        <input
          class="input full-width"
          v-if="this.teamInfo.player4_name"
          type="text"
          id="player4-name"
          :value="this.teamInfo.player4_name"
          @input="(event) => (this.teamInfo.player4_name = event.target.value)"
        />
      </fieldset>
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
import { doc } from "firebase/firestore";
import { addToFirestore } from "../middleware/db";
export default {
  props: ["teamInfo"],
  methods: {
    submitTeamChangesHandler(e) {
      e.preventDefault();
      console.log(this.teamInfo);
      // addToFirestore(
      //   `${this.teamInfo.division}-league`,
      //   this.teamInfo.oldTeamName,
      //   this.teamInfo
      // ).then((resp) => {
      //   if (resp) {
      //     console.log(resp);
      //   }
      // });
    },
  },
};
</script>
<style scoped>
dialog {
  position: fixed;
  z-index: 999;
  max-width: 400px;
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
</style>
