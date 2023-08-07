<script setup>
//components
import secondaryNav from "../components/secondaryNav.vue";
import listTeams from "../components/listTeams.vue";
</script>
<template>
  <secondaryNav />
  <div class="container">
    <div class="col-md-7 col-12 admin--card"><listTeams /></div>
  </div>
</template>

<style>
.container {
  background-color: #f0f4f7;
}
.admin--card {
  background-color: white;
  border-radius: var(--card-border-radius);
  padding: 2em;
}
.admin--row:hover {
  background-color: #e6e6e6;
}
.admin--tools {
  width: 30px;
  position: absolute;
  right: 0;
}
.admin--tools button {
  background: grey;
  padding: unset;
  font-size: unset;
}
.admin--item {
  justify-content: space-between;
  padding: 5vh 2vh;
}
.admin--row {
  border-bottom: 1px solid var(--mainColor);
  margin: auto;
}
.admin--item span {
  display: block;
}
.showLeft {
  text-shadow: none !important;
  color: #fff !important;
  padding: 10px;
}
.icons {
  position: relative;
  z-index: 997;
  margin-left: -15px;
}
.icons li {
  background: none repeat scroll 0 0 var(--mainColor);
  height: 5px;
  width: 5px;
  line-height: 0;
  list-style: none outside none;
  margin-right: 15px;
  margin-top: 3px;
  vertical-align: top;
  border-radius: 50%;
  pointer-events: none;
}

.btn-left {
  left: 0.4em;
}

.btn-right {
  right: 0.4em;
}

.dropbtn {
  color: var(--mainColor);
  font-size: 12px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  display: inline-block;
  right: 0.4em;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 997;
  left: 20px;
  top: 0;
}
.dropdown-content ul {
  list-style: none;
  padding: 1em;
  margin-bottom: 0;
}
.dropdown-content button {
  background: none;
  font-family: "Nunito Sans", sans-serif;
  text-transform: none;
  font-weight: normal;
  letter-spacing: unset;
  color: var(--mainColor);
  border: none;
}
.show {
  display: block;
}
.close-tools {
  position: absolute;
  top: 0px;
  right: 20px;
  font-weight: normal;
  font-size: 1.25em;
  text-align: right;
}
</style>
