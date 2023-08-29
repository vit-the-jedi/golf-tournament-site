<script setup></script>
<template>
  <form @submit="checkForm" class="mt-4">
    <h1>Choose your squad</h1>
    <p class="ui--info">
      Please sign up your entire team in the same session. While single players
      are welcomed, we prefer the team captain signs up his/her entire team
      at&nbsp;once.
    </p>
    <div class="form-inner">
      <span v-if="errors.length" class="error-list error">
        <span>Please correct the following error(s):</span>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </span>

      <div id="players" class="form-inset players-form" v-if="!playersAdded">
        <div class="form-control card" v-if="numOfPlayers >= 1">
          <h2>Player 1</h2>
          <h5 class="text-uppercase font-weight-bold">Team Captain</h5>
          <input
            v-model="players.player1__firstName"
            class="input"
            type="text"
            placeholder="First Name"
          />
          <input
            v-model="players.player1__lastName"
            class="input"
            type="text"
            placeholder="Last Name"
          />

          <div class="button-container" v-if="numOfPlayers === 1">
            <button type="button" @click="numOfPlayers++">Add player</button>
            <button type="submit" @click="checkPlayerForm">Continue</button>
          </div>
        </div>
        <div class="form-control card" v-if="numOfPlayers >= 2">
          <h2>Player 2</h2>
          <input
            v-model="players.player2__firstName"
            class="input"
            type="text"
            placeholder="First Name"
          />
          <input
            v-model="players.player2__lastName"
            class="input"
            type="text"
            placeholder="Last Name"
          />
          <div class="button-container" v-if="numOfPlayers === 2">
            <button type="button" @click="numOfPlayers++">Add player</button>
            <button type="submit" @click="checkPlayerForm">Continue</button>
          </div>
          <span class="delete" @click="numOfPlayers--"></span>
        </div>
        <div class="form-control card" v-if="numOfPlayers >= 3">
          <h2>Player 3</h2>
          <input
            v-model="players.player3__firstName"
            class="input"
            type="text"
            placeholder="First Name"
          />
          <input
            v-model="players.player3__lastName"
            class="input"
            type="text"
            placeholder="Last Name"
          />
          <div class="button-container" v-if="numOfPlayers === 3">
            <button type="button" @click="numOfPlayers++">Add player</button>
            <button type="submit" @click="checkPlayerForm">Continue</button>
          </div>
          <span class="delete" @click="numOfPlayers--"></span>
        </div>
        <div class="form-control card" v-if="numOfPlayers >= 4">
          <h2>Player 4</h2>
          <input
            v-model="players.player4__firstName"
            class="input"
            type="text"
            placeholder="First Name"
          />
          <input
            v-model="players.player4__lastName"
            class="input"
            type="text"
            placeholder="Last Name"
          />
          <div class="button-container" v-if="numOfPlayers === 4">
            <button type="submit" @click="checkPlayerForm">Continue</button>
          </div>
          <span class="delete" @click="numOfPlayers--"></span>
        </div>
      </div>
      <div class="form-control card summary-container" v-if="playersAdded">
        <div class="team-summary">
          <div class="ball-icons">
            <img src="/src/assets/player-icons.png" />
          </div>
          <h2>Your Squad</h2>
          <ol class="row mx-auto my-4 w-100">
            <li class="col-md-6 col-12" v-if="numOfPlayers >= 1">
              <span v-if="players.player1__firstName">{{
                players.player1__firstName
              }}</span
              >&nbsp;
              <span v-if="players.player1__lastName">{{
                players.player1__lastName
              }}</span>
            </li>
            <li class="col-md-6 col-12" v-if="numOfPlayers >= 2">
              <span v-if="players.player2__firstName">{{
                players.player2__firstName
              }}</span
              >&nbsp;<span v-if="players.player2__lastName">{{
                players.player2__lastName
              }}</span>
            </li>
            <li class="col-md-6 col-12" v-if="numOfPlayers >= 3">
              <span v-if="players.player3__firstName">{{
                players.player3__firstName
              }}</span
              >&nbsp;<span v-if="players.player3__lastName">{{
                players.player3__lastName
              }}</span>
            </li>
            <li class="col-md-6 col-12" v-if="numOfPlayers === 4">
              <span v-if="players.player4__firstName">{{
                players.player4__firstName
              }}</span
              >&nbsp;<span v-if="players.player4__lastName">{{
                players.player4__lastName
              }}</span>
            </li>
          </ol>
        </div>
      </div>
      <div class="form-control card" v-if="playersAdded">
        <button role="button" class="back--btn mb-4" @click="goBack">
          <span class="d-block w-100">Go Back</span>
        </button>
        <h2 class="mt-4">Choose Your league</h2>
        <select v-model="division" class="input full-width">
          <option value="mens">Men's league</option>
          <option value="coed">Co-ed league</option>
        </select>
        <h2 class="mt-4">Team Name</h2>
        <p>
          If you leave this blank, your team name will be Player 1’s full name.
        </p>
        <p>
          Ex: Team {{ players.player1__firstName }}
          {{ players.player1__lastName }}
        </p>
        <input
          v-model="teamName"
          class="input full-width"
          type="text"
          placeholder="Team Name (optional)"
        />
        <recaptcha ref="recaptcha" @verify="verifyRecaptcha"></recaptcha>
        <button type="submit" :disabled="!isRecaptchaVerified">Sign Up</button>
      </div>
    </div>
  </form>
</template>

<script>
import { addToFirestore } from "../middleware/db.js";
import { store } from "../store/index.js";
import Recaptcha from "./Recaptcha.vue";

export default {
  components: {
    Recaptcha,
  },
  mounted() {},
  data() {
    return {
      errors: [],
      numOfPlayers: 1,
      players: {
        player1__firstName: null,
        player1__lastName: null,
        player2__firstName: null,
        player2__lastName: null,
        player3__firstName: null,
        player3__lastName: null,
        player4__firstName: null,
        player4__lastName: null,
      },
      playersAdded: false,
      teamName: null,
      division: "mens",
      needsGrouping: false,
      isRecaptchaVerified: false,
    };
  },
  watch: {
    player1__firstName(value) {
      this.player1__firstName = value;
      this.checkPlayerName(value);
    },
    player1__lastName(value) {
      this.player1__lastName = value;
      this.checkPlayerName(value);
    },
    player2__firstName(value) {
      this.player2__firstName = value;
      this.checkPlayerName(value);
    },
    player2__lastName(value) {
      this.player2__lastName = value;
      this.checkPlayerName(value);
    },
    player3__firstName(value) {
      this.player3__firstName = value;
      this.checkPlayerName(value);
    },
    player3__lastName(value) {
      this.player3__lastName = value;
      this.checkPlayerName(value);
    },
    player4__firstName(value) {
      this.player4__firstName = value;
      this.checkPlayerName(value);
    },
    player4__lastName(value) {
      this.player4__lastName = value;
      this.checkPlayerName(value);
    },
  },
  methods: {
    goBack(e) {
      if (e) e.preventDefault();
      this.playersAdded = false;
    },
    verifyRecaptcha(res) {
      if (res) {
        this.isRecaptchaVerified = true;
      }
    },
    loadingScreenHandler(action) {
      this.$emit("loading-screen");
    },
    checkPlayerName: function (v) {
      if (v === null || v.length == 0 || v.match(/\d+/g)) {
        return false;
      } else {
        return true;
      }
    },
    checkPlayerForm: function (e) {
      e.preventDefault();
      for (let i = 0; i <= this.numOfPlayers - 1; i++) {
        const fNameValid = this.checkPlayerName(
          this.players[`player${i + 1}__firstName`]
        );
        const lNameValid = this.checkPlayerName(
          this.players[`player${i + 1}__lastName`]
        );
        if (!fNameValid || !lNameValid) {
          this.addError("Please enter a first and last name for each player.");
          this.$toast.error(
            "Please enter a first and last name for each player",
            {
              duration: 3000,
            }
          );
        } else {
          this.errors = [];
        }
      }

      if (this.numOfPlayers === 1) {
        this.$toast.open({
          message: `If you are part of a team, we encourage you to sign up your entire team at once.
              If you have more players, go back and sign them up.`,
          type: "warning",
          duration: 10000,
          // all of other options may go here
        });
      }

      if (!this.errors.length) {
        this.playersAdded = true;
        console.log(this);
        return true;
      }
    },
    checkForm: function (e) {
      if (
        this.numOfPlayers &&
        this.players.player1__firstName &&
        this.players.player1__lastName &&
        this.division
      ) {
        e.preventDefault();
        this.removeErrors();
        this.preProcessData();
      }

      if (!this.division) {
        this.$toast.error("Please select a division", {
          duration: 3000,
        });
      }
      e.preventDefault();
    },
    addError: function (errorString) {
      if (this.errors.length > 0) {
        for (const error of this.errors) {
          if (error && error === errorString) {
            return;
          } else this.errors.push(errorString);
        }
      } else this.errors.push(errorString);
    },
    removeErrors: function (e) {
      this.errors = [];
    },
    preProcessData: function () {
      let numOfPlayers = Number(this.numOfPlayers);
      this.teamObj = {};
      const playersArr = [];
      switch (numOfPlayers) {
        case 1:
          //set needs grouping flag
          this.needsGrouping = true;
          playersArr.push({
            first_name: this.players.player1__firstName,
            last_name: this.players.player1__lastName,
          });
          break;
        case 2:
          //set needs grouping flag
          this.needsGrouping = true;
          playersArr.push({
            first_name: this.players.player1__firstName,
            last_name: this.players.player1__lastName,
          });
          playersArr.push({
            first_name: this.players.player2__firstName,
            last_name: this.players.player2__lastName,
          });
          break;
        case 3:
          //set needs grouping flag
          this.needsGrouping = true;
          playersArr.push({
            first_name: this.players.player1__firstName,
            last_name: this.players.player1__lastName,
          });
          playersArr.push({
            first_name: this.players.player2__firstName,
            last_name: this.players.player2__lastName,
          });
          playersArr.push({
            first_name: this.players.player3__firstName,
            last_name: this.players.player3__lastName,
          });
          break;
        case 4:
          playersArr.push({
            first_name: this.players.player1__firstName,
            last_name: this.players.player1__lastName,
          });
          playersArr.push({
            first_name: this.players.player2__firstName,
            last_name: this.players.player2__lastName,
          });
          playersArr.push({
            first_name: this.players.player3__firstName,
            last_name: this.players.player3__lastName,
          });
          playersArr.push({
            first_name: this.players.player4__firstName,
            last_name: this.players.player4__lastName,
          });
          break;
        //dont need the grouping flag with 4 players
      }
      //make sure we set num of players to number type
      this.numOfPlayers = Number(this.numOfPlayers);

      //loop through player names and uppercase first letters
      //if teamName is null, let's make one
      playersArr.forEach((item, i, arr) => {
        let fName =
          item.first_name[0].toUpperCase() + item.first_name.substring(1);
        let lName =
          item.last_name[0].toUpperCase() + item.last_name.substring(1);
        item.first_name = fName;
        item.last_name = lName;
      });
      if (!this.teamName)
        this.teamName = `${playersArr[0].first_name} ${playersArr[0].last_name}'s Team`;

      this.teamObj["players"] = playersArr;
      this.teamObj["numOfPlayers"] = this.numOfPlayers;
      this.teamObj["needsGrouping"] = this.needsGrouping;
      this.teamObj["teamName"] = this.teamName;
      this.teamObj["division"] = this.division;
      //we don't offer payments so let's default to false
      this.teamObj.paid = false;
      this.formSubmitHandler();
    },
    formSubmitHandler: async function () {
      const team = this.teamObj;
      addToFirestore(`${team.division}-league`, team).then((teamAdded) => {
        if (teamAdded.value) {
          //show success msg
          this.$toast.success("Team signed up successfully!", {
            duration: 3000,
          });
          //set team to vuex store
          // and navigate
          store.commit("setTeam", this.teamObj);
          sessionStorage.setItem("team", JSON.stringify(this.teamObj));
          //programmatically route to success page w/ relevant form data we can post back for user review
          this.$router.push({
            path: "/sign-up-success",
          });
        } else {
          //show error msg and dont navigate
          if (teamAdded.error) {
            //msg error
            this.$toast.error("There was a problem, please try again.", {
              duration: 3000,
            });
            console.error(teamAdded.error);
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.error-list {
  display: none;
}
.back--btn {
  background: var(--secondColor);
  max-width: 120px;
  font-size: 100%;
  border: 2px solid var(--mainColor);
  color: var(--mainColor);
  text-decoration: underline;
  position: absolute;
  left: 15px;
  top: 15px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: bold;
  text-align: left;
  letter-spacing: normal;
}
.back--btn span {
  width: 100%;
  display: block;
  text-align: center;
}
.back--btn span::before {
  content: "<<";
  font-size: 100%;
}
.form-control {
  padding-top: calc(var(--player-icon-height) / 4);
  margin-bottom: calc(var(--player-icon-height) / 8);
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 10%;
}
.players-form .form-control::before {
  width: var(--player-icon-width);
  height: var(--player-icon-height);
  content: "";
  position: absolute;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  margin: auto;
  top: calc(-1 * var(--player-icon-height) / 2);
  left: calc(100% / 2 - var(--player-icon-width) / 2);
}
.players-form .form-control:nth-of-type(1)::before {
  background-image: url("../assets/icons/player1.svg");
}
.players-form .form-control:nth-of-type(2)::before {
  background-image: url("../assets/icons/player2.svg");
}
.players-form .form-control:nth-of-type(3)::before {
  background-image: url("../assets/icons/player3.png");
}
.players-form .form-control:nth-of-type(4)::before {
  background-image: url("../assets/icons/player4.png");
}
.summary-container {
  background-color: var(--secondColor);
}

.team-summary {
  padding: 0.5em;
}
.team-summary ol li {
  list-style-position: inside;
  margin-bottom: 2em;
}
@media screen and (min-width: 768px) {
  .form-inner {
    margin-top: 15%;
  }
  .back--btn {
    margin-bottom: 1em;
  }
}
</style>
