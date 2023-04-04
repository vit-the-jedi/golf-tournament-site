<template>
  <form @submit="checkForm">
    <div class="form-inner">
      <h2>Enter up to 4 players for your group.</h2>
      <p>
        Groups with less than 4 players are subject to grouping with another
        team to create a foursome.
      </p>
      <span v-if="errors.length" class="error-list error">
        <span>Please correct the following error(s):</span>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </span>
      <div class="form-control">
        <label>How many players are you signing up today?</label>
        <select v-model="numOfPlayers" class="input full-width">
          <option value="1">1 Player</option>
          <option value="2">2 Players</option>
          <option value="3">3 Players</option>
          <option value="4">4 Players</option>
        </select>
      </div>
      <div class="form-control" v-if="numOfPlayers >= 1">
        <label>Player 1</label>
        <input
          v-model="player1__firstName"
          class="input"
          type="text"
          placeholder="First Name"
        />
        <input
          v-model="player1__lastName"
          class="input"
          type="text"
          placeholder="Last Name"
        />
      </div>

      <div class="form-control" v-if="numOfPlayers >= 2">
        <label>Player 2</label>
        <input
          v-model="player2__firstName"
          class="input"
          type="text"
          placeholder="First Name"
        />
        <input
          v-model="player2__lastName"
          class="input"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div class="form-control" v-if="numOfPlayers >= 3">
        <label>Player 3</label>
        <input
          v-model="player3__firstName"
          class="input"
          type="text"
          placeholder="First Name"
        />
        <input
          v-model="player3__lastName"
          class="input"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div class="form-control" v-if="numOfPlayers >= 4">
        <label>Player 4</label>
        <input
          v-model="player4__firstName"
          class="input"
          type="text"
          placeholder="First Name"
        />
        <input
          v-model="player4__lastName"
          class="input"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div class="form-control">
        <label
          >Team Name (optional) <br />
          <small
            >If you leave this blank, your team name will be Player 1's full
            name. Ex: Team John Smith</small
          ></label
        >
        <input
          v-model="teamName"
          class="input full-width"
          type="text"
          placeholder="Team Name (optional)"
        />
      </div>
      <div class="form-control">
        <label>Choose a division</label>
        <select v-model="division" class="input full-width">
          <option value="mens">Men's Division</option>
          <option value="coed">Co-ed Division</option>
        </select>
      </div>
      <button type="submit">Sign Up</button>
    </div>
  </form>
</template>

<script>
import { addToFirestore } from "../middleware/db.js";
export default {
  data() {
    return {
      errors: [],
      numOfPlayers: null,
      player1__firstName: null,
      player1__lastName: null,
      player2__firstName: null,
      player2__lastName: null,
      player3__firstName: null,
      player3__lastName: null,
      player4__firstName: null,
      player4__lastName: null,
      teamName: null,
      division: null,
    };
  },
  methods: {
    checkForm: function (e) {
      if (
        this.numOfPlayers &&
        this.player1__firstName &&
        this.player1__lastName &&
        this.division
      ) {
        e.preventDefault();
        this.preProcessData();
      }

      this.errors = [];
      if (!this.numOfPlayers) {
        this.errors.push(
          "Please enter the amount of player currently on your team."
        );
      }
      if (!this.player1__firstName) {
        this.errors.push("At least 1 player's first name required.");
      }
      if (!this.player1__lasttName) {
        this.errors.push("At least 1 player's last name required.");
      }
      if (!this.division) {
        this.errors.push("Please choose a division to be entered in.");
      }
      e.preventDefault();
    },
    preProcessData: function () {
      let numOfPlayers = Number(this.numOfPlayers);
      this.players = [];
      switch (numOfPlayers) {
        case 1:
          //set needs grouping flag
          this.needsGrouping = true;
          this.players.push({
            first_name: this.player1__firstName,
            last_name: this.player1__lastName,
          });
          break;
        case 2:
          //set needs grouping flag
          this.needsGrouping = true;
          this.players.push({
            first_name: this.player1__firstName,
            last_name: this.player1__lastName,
          });
          this.players.push({
            first_name: this.player2__firstName,
            last_name: this.player2__lastName,
          });
          break;
        case 3:
          //set needs grouping flag
          this.needsGrouping = true;
          this.players.push({
            first_name: this.player1__firstName,
            last_name: this.player1__lastName,
          });
          this.players.push({
            first_name: this.player2__firstName,
            last_name: this.player2__lastName,
          });
          this.players.push({
            first_name: this.player3__firstName,
            last_name: this.player3__lastName,
          });
          break;
        case 4:
          this.players.push({
            first_name: this.player1__firstName,
            last_name: this.player1__lastName,
          });
          this.players.push({
            first_name: this.player2__firstName,
            last_name: this.player2__lastName,
          });
          this.players.push({
            first_name: this.player3__firstName,
            last_name: this.player3__lastName,
          });
          this.players.push({
            first_name: this.player4__firstName,
            last_name: this.player4__lastName,
          });
          delete this.needsGrouping;
          break;
        //dont need the grouping flag with 4 players
      }
      //make sure we set num of players to number type
      this.numOfPlayers = Number(this.numOfPlayers);

      //loop through player names and uppercase first letters
      //if teamName is null, let's make one
      this.players.forEach((item, i, arr) => {
        let fName =
          item.first_name[0].toUpperCase() + item.first_name.substring(1);
        let lName =
          item.last_name[0].toUpperCase() + item.last_name.substring(1);
        item.first_name = fName;
        item.last_name = lName;
      });
      if (!this.teamName)
        this.teamName = `${this.players[0].first_name} ${this.players[0].last_name}'s Team`;
      //delete the originals we dont need them anymore
      delete this.player1__firstName;
      delete this.player1__lastName;
      delete this.player2__firstName;
      delete this.player2__lastName;
      delete this.player3__firstName;
      delete this.player3__lastName;
      delete this.player4__firstName;
      delete this.player4__lastName;
      console.log(this);
    },
  },
};
</script>

<style scoped>
.form-inner {
  max-width: 900px;
  margin: auto;
  display: block;
}
form {
  display: flex;
  flex-direction: column;
}

form label {
  width: 100%;
  flex-basis: 100%;
}
.form-control {
  flex-basis: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: none;
  padding: 2%;
}
.form-control input,
.form-control select {
  padding: 2%;
  margin: 0 1%;
}
.form-control input:not(.full-width),
.form-control select:not(.full-width) {
  flex-basis: 48%;
  width: 48%;
}
.form-control .full-width {
  width: 100%;
  flex-basis: 100%;
}
button {
  border-radius: 3px;
  background: green;
  color: #fff;
  font-weight: 700;
  max-width: 300px;
  margin: auto;
  width: 100%;
  display: block;
  border: 0;
  padding: 2.5% 0;
  font-size: 1.25rem;
  text-transform: uppercase;
}
.error {
  color: red;
}
.error-list * {
  color: inherit;
}
.error-list {
  max-width: 400px;
  width: 100%;
  margin: auto;
}
</style>
