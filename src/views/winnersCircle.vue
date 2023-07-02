<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";

//for testing fake data
</script>
<template>
  <div id="dataOutput"></div>
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
          division: "Men's",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
        {
          year: 2022,
          division: "Men's",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
        {
          year: 2022,
          division: "Men's",
          team: ["John Doe", "John Doe", "Ricky Jones", "Jim Kramer"],
        },
      ],
    };
  },
  mounted() {
    console.log(this.winners);
    const winners = this.winners;
    for (const winner of winners) {
      const div = document.createElement("div");
      const yearDiv = document.createElement("div");
      const classes = ["winner--output", "row"];
      classes.forEach((clas) => {
        div.classList.add(clas);
      });
      const year = document.createElement("h1");
      const division = document.createElement("p");
      const team = document.createElement("div");
      year.textContent = winner.year;
      division.textContent = winner.division;
      team.textContent = winner.team;
      div.appendChild(year);
      div.appendChild(division);
      div.appendChild(team);
      document.querySelector("#dataOutput").appendChild(div);
    }
  },
};
</script>
<style scope></style>
