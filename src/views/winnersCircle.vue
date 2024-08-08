<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";

//for testing fake data
</script>
<template>
  <secondaryNav />
  <div class="winnders-circle">
    <div class="top--content">
      <h1>The <span>winners</span> <span class="large">circle</span></h1>
    </div>
    <div class="container">
      <div class="top-copy">
        <p>
          Check out the past winners of our tournament!
          <router-link to="/sign-up">Sign up</router-link> to get your name featured…if you can!
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
          year: 2023,
          division: "Men's",
          team: ["Colin Roberts", "Justin Williams", "Ryan Mcllelan", "Mike Zacciarello"],
        },
        {
          year: 2023,
          division: "Co-Ed",
          team: ["Nicole Vitello", "Kiara Bonilla", "Dan Duffy", "Al Vitello"],
        },
        {
          year: 2022,
          division: "Men's",
          team: ["Mike Sundwall", "Tom Seaver", "Silengo"],
        },
        {
          year: 2022,
          division: "Co-Ed",
          team: ["Nicole Vitello", "Hannah Dill", "Brian Dill", "Adam Faass"],
        },
        {
          year: 2021,
          division: "Men's",
          team: ["Joe Lowell", "Ryan Carey", "Ethan Cheffer", "Jim Carey"],
        },
        {
          year: 2021,
          division: "Co-Ed",
          team: ["Nicole Vitello", "Hannah Dill", "Kiarra Bonilla", "Brian Dill"],
        },
        {
          year: 2020,
          division: "Men's",
          team: ["Kyle Phelan", "Dennis Phelan", "Steven Julius", "Mark Julius"],
        },
        {
          year: 2020,
          division: "Co-Ed",
          team: ["Caitlyn Longwell", "Lisa Longwell", "Glenn Longwell", "Matt Paolini"],
        },
        {
          year: 2019,
          division: "Men's",
          team: ["Richard Moore", "Andy Vojt", "Brian Glatzel", "Donn Malner"],
        },
        {
          year: 2019,
          division: "Co-Ed",
          team: ["Marianne Elliott", "Lisa Longwell", "Donna Monks", "Mary Okolo"],
        },
        {
          year: 2018,
          division: "Men's",
          team: ["Mike Cappetta", "Ryan Cappetta", "Kevin Mathews", "Zach Bjornberg"],
        },
        {
          year: 2018,
          division: "Co-Ed",
          team: ["Lisa Longwell", "Rhea Adler", "Nicole Vitello", "Cindy Moser"],
        },
        {
          year: 2017,
          division: "Men's",
          team: ["Del Koupf", "Mike Seaver", "Troy Sundwall", "Mike Sundwall"],
        },
        {
          year: 2017,
          division: "Co-Ed - *First year of inception",
          team: ["Rhea Adler", "Marianne Elliott", "Janice Vitello", "Nicole Vitello"],
        },
        {
          year: 2016,
          division: "Men's",
          team: ["Bill Cirscuolo", "Mark Sytra", "Troy Sundwall", "Mike Sundwall"],
        },
        {
          year: 2015,
          division: "Men's",
          team: ["John Casertano", "Mike Casertano", "Kyle Dahn", "Keith Crumb"],
        },
        {
          year: 2014,
          division: "Men's",
          team: ["John Casertano", "Mike Casertano", "Rick Dondero"],
        },
        {
          year: 2013,
          division: "Men's",
          team: ["John Casertano", "Mike Casertano", "Rick Dondero"],
        },
        {
          year: 2012,
          division: "Men's",
          team: ["Johnny Vitello", "Tom Maher", "Billy Mageski", "Mike Sundwall"],
        },
        {
          year: 2011,
          division: "Men's",
          team: ["Rick Moore", "Mike Hinckley", "Pete Giannini"],
        },
        {
          year: 2010,
          division: "Men's",
          team: ["Johnny Vitello", "Tom Maher", "Billy Mageski", "Tom Howard"],
        },
        {
          year: 2009,
          division: "Men's",
          team: ["Phil Curry", "Dave LaClair", "Kevin Langan", "Joe Jarvie"],
        },
        {
          year: 2008,
          division: "Men's",
          team: ["Phil Curry", "Joe Jarvie", "Dave LaClair"],
        },
        {
          year: 2007,
          division: "Men's",
          team: ["Jonny Molchan", "Jay Valentine", "Jim Schmidt", "Richard Schmidt"],
        },
        {
          year: 2006,
          division: "Men's",
          team: ["Jonny Molchan", "Jay Valentine", "Jim Schmidt", "Richard Schmidt"],
        },
        {
          year: 2005,
          division: "Men's",
          team: ["John Casertano", "Mike Casertano", "Jeff Dahn", "Bob Neibling"],
        },
        {
          year: 2004,
          division: "Men's",
          team: ["Del Koupf", "Mike Seaver", "Don Waldron", "Mike Sundwall"],
        },
        {
          year: 2003,
          division: "Men's",
          team: ["Dennis Perrino", "Steve Worley", "Ed Yocher"],
        },
        {
          year: 2002,
          division: "Men's",
          team: ["Rick Schaefer", "Ron Mitchell", "Pete Andersen", "Pete Czuchra"],
        },
        {
          year: 2001,
          division: "Men's",
          team: ["Del Koupf", "Bill Criscuolo", "Frank Wallaby", "Mike Sundwall"],
        },
        {
          year: 2000,
          division: "Men's",
          team: ["Del Koupf", "Chris Dellavalle", "Mike Silengo", "Mike Sundwall"],
        },
        {
          year: 1999,
          division: "Men's",
          team: ["Del Koupf", "Mike Seaver", "Don Waldron", "Mike Sundwall"],
        },
        {
          year: 1998,
          division: "Men's",
          team: ["Rick Diotalevi", "Randy Diotalevi", "Rod Diotalevi", "Tino Diotalevi"],
        },
        {
          year: 1997,
          division: "Men's",
          team: ["Ed Yocher", "Vin Malerba", "Charley Mahoney"],
        },
        {
          year: 1993,
          division: "Men's",
          team: ["Paul Vitello", "Tom Howard", "Joe Mastrangelo", "Adam Mastrangelo"],
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
    const lineHeight = document.querySelector("#dataOutput").getBoundingClientRect().height;
    const line = (document.querySelector(".line").style.height = `${lineHeight}px`);
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
.top--content h1 .large {
  display: block;
  font-size: 2em;
  color: var(--mainColor);
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
  color: rgb(118, 118, 118);
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
