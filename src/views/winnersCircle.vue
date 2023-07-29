<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";

//for testing fake data
</script>
<template>
  <secondaryNav />
  <div class="winnders-circle">
    <div class="top--content">
      <h1>The <span>winners</span> circle</h1>
    </div>
    <div class="container">
      <div class="top-copy">
        <p>
          Check out the past winners of our tournament! Sign up to get your name
          featured…if you can!
        </p>
      </div>
      <div id="dataOutput" class="mt-4">
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winners: [
        {
          year: 2022,
          division: "Men's",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
        {
          year: 2022,
          division: "Co-Ed",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
        {
          year: 2021,
          division: "Men's",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
        {
          year: 2021,
          division: "Co-Ed",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
        {
          year: 2020,
          division: "Men's",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
        {
          year: 2020,
          division: "Co-Ed",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
        {
          year: 2019,
          division: "Men's",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
        {
          year: 2019,
          division: "Co-Ed",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
        {
          year: 2018,
          division: "Men's",
          team: [
            "Mike Cappetta",
            "Ryan Cappetta",
            "Kevin Mathews",
            "Zach Bjornberg",
          ],
        },
        {
          year: 2018,
          division: "Co-Ed",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
      ],
    };
  },
  mounted() {
    const winners = this.winners;
    for (const winner of winners) {
      const div = document.createElement("div");
      const yearDiv = document.createElement("div");
      const classes = ["winner--output", "row"];
      classes.forEach((clas) => {
        div.classList.add(clas);
      });
      const yearContainerDiv = document.createElement("div");
      yearContainerDiv.classList.add("year-container");
      const year = document.createElement("h1");
      const division = document.createElement("p");
      const team = document.createElement("div");
      team.classList.add("team-container");
      year.textContent = winner.year;
      division.textContent = winner.division;

      for (const name of winner.team) {
        const nameSpan = document.createElement("span");
        nameSpan.textContent = name;
        team.appendChild(nameSpan);
      }
      yearContainerDiv.appendChild(year);
      yearContainerDiv.appendChild(division);
      div.appendChild(yearContainerDiv);
      div.appendChild(team);
      document.querySelector("#dataOutput").appendChild(div);
    }
    const lineHeight = document
      .querySelector("#dataOutput")
      .getBoundingClientRect().height;
    const line = (document.querySelector(
      ".line"
    ).style.height = `${lineHeight}px`);
  },
};
</script>
<style scope>
.container {
  padding: 1em;
}
.top--content h1 {
  width: 100%;
  text-align: center;
}
.top--content h1 span {
  color: var(--secondColor);
}
.winner--output {
  margin: auto;
  flex-wrap: nowrap;
  padding: 1em 2em;
  justify-content: space-between;
  position: relative;
}
.winner--output div {
  flex-basis: 47%;
  padding: 3%;
}
.team-container span {
  display: block;
}
.top-copy {
  background: var(--tertiaryColor);
  border-radius: var(--card-border-radius);
  max-width: 650px;
  margin: auto;
  padding: 0.5em;
}
.top-copy p {
  max-width: 500px;
  margin: auto;
}
.winner--output:nth-child(-n + 3) {
  color: var(--mainColor);
}
.winner--output {
  color: rgb(148, 147, 147);
}
.winner--output::after {
  content: "";
  border-radius: 100%;
  background-color: var(--secondColor);
  border: 3px solid var(--mainColor);
  width: 15px;
  height: 15px;
  display: block;
  top: 35%;
  left: calc(50% - 7.5px);
  position: absolute;
  opacity: 1;
}
.line {
  position: absolute;
  width: 3px;
  background-color: var(--mainColor);
  height: 100%;
  border-radius: 10px;
  left: calc(50% - 1.5px);
}
</style>
