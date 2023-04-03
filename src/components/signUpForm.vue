<template>
  <form>
    <div class="form-inner">
      <h2>Enter up to 4 players for your group.</h2>
      <p>
        Groups with less than 4 players are subject to grouping with another
        team to create a foursome.
      </p>
      <div class="form-control">
        <label>Player 1</label>
        <input
          v-model="player1__firstName"
          class="input"
          type="text"
          placeholder="First Name"
          required
        />
        <input
          v-model="player1__lastName"
          class="input"
          type="text"
          placeholder="Last Name"
          required
        />
      </div>

      <div class="form-control">
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
      <div class="form-control">
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
      <div class="form-control">
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
        <label>Division (select one)</label>
        <select v-model="division" class="input full-width" required>
          <option value="">Choose a division...</option>
          <option value="mens">Men's Division</option>
          <option value="coed">Co-ed Division</option>
        </select>
      </div>
      <button type="submit">Sign Up</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      player1Name: "",
      player2Name: "",
      player3Name: "",
      player4Name: "",
      teamName: "",
      division: "",
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.player1__firstName && this.player1__lastName) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.age) {
        this.errors.push("Age required.");
      }

      e.preventDefault();
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
</style>
