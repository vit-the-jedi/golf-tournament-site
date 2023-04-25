<script setup>
import { ref } from "vue";
const mainColor = ref("#003566");
const secondColor = ref("#FFC300");
</script>
<template>
  <!-- <loadingSpinner /> -->
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

      <div class="form-inset">
        <div class="form-control card" v-if="numOfPlayers >= 1">
          <h2>Player 1</h2>
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

          <div v-if="numOfPlayers === 1">
            <button type="button" @click="numOfPlayers++">Add player</button>
            <button type="button">Continue</button>
          </div>
        </div>
        <div class="form-control card" v-if="numOfPlayers >= 2">
          <h2>Player 2</h2>
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
          <div v-if="numOfPlayers === 2">
            <button type="button" @click="numOfPlayers++">Add player</button>
            <button type="button">Continue</button>
          </div>
          <span class="delete" @click="numOfPlayers--"></span>
        </div>
        <div class="form-control card" v-if="numOfPlayers >= 3">
          <h2>Player 3</h2>
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
          <div v-if="numOfPlayers === 3">
            <button type="button" @click="numOfPlayers++">Add player</button>
            <button type="button">Continue</button>
          </div>
          <span class="delete" @click="numOfPlayers--"></span>
        </div>
        <div class="form-control card" v-if="numOfPlayers >= 4">
          <h2>Player 4</h2>
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
          <div v-if="numOfPlayers === 4">
            <button type="button" @click="numOfPlayers++">Add player</button>
            <button type="button">Continue</button>
          </div>
          <span class="delete" @click="numOfPlayers--"></span>
        </div>
      </div>
      <div class="form-control card" v-if="playersAdded">
        <h2>Choose Your Division</h2>
        <select v-model="division" class="input full-width">
          <option value="mens">Men's Division</option>
          <option value="coed">Co-ed Division</option>
        </select>
        <h2>Team Name</h2>
        <p>
          If you leave this blank, your team name will be Player 1’s full name.
          Ex: Team John Smith
        </p>
        <input
          v-model="teamName"
          class="input full-width"
          type="text"
          placeholder="Team Name (optional)"
        />
        <button type="submit">Sign Up</button>
      </div>
    </div>
  </form>
</template>

<script>
import { addToFirestore } from "../middleware/db.js";
import loadingSpinner from "../components/loading.vue";
export default {
  data() {
    return {
      errors: [],
      numOfPlayers: 1,
      player1__firstName: null,
      player1__lastName: null,
      player2__firstName: null,
      player2__lastName: null,
      player3__firstName: null,
      player3__lastName: null,
      player4__firstName: null,
      player4__lastName: null,
      playersAdded: false,
      teamName: null,
      division: "mens",
      needsGrouping: false,
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
        this.removeErrors();
        this.preProcessData();
      }

      this.errors = [];
      if (!this.numOfPlayers) {
        this.errors.push(
          "Please enter the amount of player currently on your team."
        );
      }
      if (!this.player1__firstName) {
        this.errors.push("At least 1 player's first name is required.");
      }
      if (!this.player1__lastName) {
        this.errors.push("At least 1 player's last name is required.");
      }
      if (!this.division) {
        this.errors.push("Please choose a division to be entered in.");
      }
      e.preventDefault();
    },
    removeErrors: function () {
      const error = document.querySelector(".error");
      if (error) document.removeChild(error);
    },
    preProcessData: function () {
      let numOfPlayers = Number(this.numOfPlayers);
      this.teamObj = {};
      const players = [];
      switch (numOfPlayers) {
        case 1:
          //set needs grouping flag
          this.needsGrouping = true;
          players.push({
            first_name: this.player1__firstName,
            last_name: this.player1__lastName,
          });
          break;
        case 2:
          //set needs grouping flag
          this.needsGrouping = true;
          players.push({
            first_name: this.player1__firstName,
            last_name: this.player1__lastName,
          });
          players.push({
            first_name: this.player2__firstName,
            last_name: this.player2__lastName,
          });
          break;
        case 3:
          //set needs grouping flag
          this.needsGrouping = true;
          players.push({
            first_name: this.player1__firstName,
            last_name: this.player1__lastName,
          });
          players.push({
            first_name: this.player2__firstName,
            last_name: this.player2__lastName,
          });
          players.push({
            first_name: this.player3__firstName,
            last_name: this.player3__lastName,
          });
          break;
        case 4:
          players.push({
            first_name: this.player1__firstName,
            last_name: this.player1__lastName,
          });
          players.push({
            first_name: this.player2__firstName,
            last_name: this.player2__lastName,
          });
          players.push({
            first_name: this.player3__firstName,
            last_name: this.player3__lastName,
          });
          players.push({
            first_name: this.player4__firstName,
            last_name: this.player4__lastName,
          });
          break;
        //dont need the grouping flag with 4 players
      }
      //make sure we set num of players to number type
      this.numOfPlayers = Number(this.numOfPlayers);

      //loop through player names and uppercase first letters
      //if teamName is null, let's make one
      players.forEach((item, i, arr) => {
        let fName =
          item.first_name[0].toUpperCase() + item.first_name.substring(1);
        let lName =
          item.last_name[0].toUpperCase() + item.last_name.substring(1);
        item.first_name = fName;
        item.last_name = lName;
      });
      if (!this.teamName)
        this.teamName = `${players[0].first_name} ${players[0].last_name}'s Team`;

      this.teamObj["players"] = players;
      this.teamObj["numOfPlayers"] = this.numOfPlayers;
      this.teamObj["needsGrouping"] = this.needsGrouping;
      this.teamObj["teamName"] = this.teamName;
      this.teamObj["division"] = this.division;
      // //delete the originals we dont need them anymore
      // delete this.player1__firstName;
      // delete this.player1__lastName;
      // delete this.player2__firstName;
      // delete this.player2__lastName;
      // delete this.player3__firstName;
      // delete this.player3__lastName;
      // delete this.player4__firstName;
      // delete this.player4__lastName;
      console.log(this.teamObj);

      //need to pass collection ("teams"), document name (currently sorting by divison), and data
      this.formSubmitHandler();
    },
    formSubmitHandler: async function () {
      const team = this.teamObj;
      // addToFirestore(
      //   `${team.division}-league`,
      //   team.teamName,
      //   team
      // );

      //loop through players array and create a URL-encoded string we can pass to our success page
      let playersString = "";
      team.players.forEach((playerName, index, arr) => {
        //if this is not the last entry, add a plus to the end
        index < arr.length - 1
          ? (playersString += `${playerName.first_name} ${playerName.last_name}|`)
          : (playersString += `${playerName.first_name} ${playerName.last_name}`);
      });

      //programmatically route to success page w/ relevant form data we can post back for user review
      this.$router.push({
        path: "/signup-success",
        query: {
          players: playersString,
          division: team.division,
          teamName: team.teamName,
        },
      });
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
.form-inset {
  max-width: 94%;
  background: #e6e6e6;
  margin: auto;
  padding: 2% 0;
}
.form-control {
  background: none;
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

.delete {
  position: absolute;
  top: 2%;
  right: 2%;
  padding: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-width: 4px;
  border-style: solid;
  border-radius: 9px;
  border-color: v-bind(mainColor);
  background: v-bind(secondColor);
  text-align: center;
}
.delete::after {
  position: absolute;
  content: "X";
  font-weight: 800;
  font-size: 1.5rem;
  left: 25%;
  top: -3%;
}
</style>
