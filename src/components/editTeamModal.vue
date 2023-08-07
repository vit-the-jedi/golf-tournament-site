<template>
  <dialog open class="admin--card">
    <form id="editTeam-form">
      <fieldset>
        <legend>Team Name</legend>
        <input type="text" id="team-name" :value="this.teamInfo.teamName" />
        <span>{{ this.teamInfo.id }}</span>
      </fieldset>
      <fieldset>
        <legend>Players</legend>
        <input
          v-if="this.teamInfo.player1_name"
          type="text"
          id="player1-name"
          :value="this.teamInfo.player1_name"
        />
        <input
          v-if="this.teamInfo.player2_name"
          type="text"
          id="player2-name"
          :value="this.teamInfo.player2_name"
        />
        <input
          v-if="this.teamInfo.player3_name"
          type="text"
          id="player3-name"
          :value="this.teamInfo.player3_name"
        />
        <input
          v-if="this.teamInfo.player4_name"
          type="text"
          id="player4-name"
          :value="this.teamInfo.player4_name"
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
export default {
  props: ["teamInfo"],
  mounted() {
    console.log(this.teamInfo);
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
</style>
