<template>
  <div id="open-menu" class="menu--toggle" @click="openMenuHandler"></div>
  <div id="menu" class="menu--list">
    <div class="menu--row">
      <div class="menu--item">
        <router-link to="/">
          <img src="../assets/icons/home.svg" alt="Home" />
          <slot name="navItemText">Home</slot>
        </router-link>
      </div>

      <div class="menu--item">
        <router-link to="/sign-up">
          <img src="../assets/icons/signUp.svg" alt="Sign up" />
          <slot name="navItemText">Sign Up</slot>
        </router-link>
      </div>
    </div>
    <div class="menu--row">
      <div class="menu--item">
        <router-link to="/about">
          <img src="../assets/icons/info.svg" alt="About" />
          <slot name="navItemText">About</slot>
        </router-link>
      </div>

      <div class="menu--item">
        <router-link to="/winners-circle">
          <img src="../assets/icons/trophy.svg" alt="Winner's Circle" />
          <slot name="navItemText">Winner's Circle</slot>
        </router-link>
      </div>
    </div>
    <div class="menu--row">
      <div class="menu--item" v-if="this.$store.getters.checkAdmin">
        <router-link to="/admin">
          <img src="../assets/icons/admin.svg" alt="admin page" />
          <slot name="navItemText">Admin</slot>
        </router-link>
      </div>
      <div class="menu--item" v-if="!this.$store.getters.getLoginState">
        <router-link to="/sign-in">
          <img src="../assets/icons/sign-in.svg" alt="sign-in page" />
          <slot name="navItemText">Sign In</slot>
        </router-link>
      </div>
      <div class="menu--item" v-if="this.$store.getters.getLoginState">
        <button id="menu-sign-out" class="sign-out" @click="signOutHandler">
          Sign Out
        </button>
      </div>
    </div>
    <span class="delete" @click="closeMenuHandler"></span>
  </div>
  <div id="menu--bg" class="ui--backdrop"></div>
</template>

<script>
import { store } from "../store/index.js";

export default {
  data() {
    return {
      userInfo: {
        userSignedIn: store.getters.getLoginState,
        //use store getter to check for admin privaleges
        isAdmin: store.getters.checkAdmin,
      },
    };
  },
  methods: {
    openMenuHandler: function () {
      document.querySelector(".menu--list").classList.add("menu--open");
      document.querySelector(".ui--backdrop").classList.add("backdrop--open");
    },
    menuItemSelectHandler: function (e) {
      document
        .querySelector(".menu--item.selected")
        .classList.remove("selected");
      console.log(e);
    },
    closeMenuHandler: function () {
      document.querySelector(".menu--open").classList.remove("menu--open");
      document
        .querySelector(".ui--backdrop")
        .classList.remove("backdrop--open");
    },
    signOutHandler: async function () {
      await store.dispatch("logOut");
      this.closeMenuHandler();
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.menu--toggle {
  width: 40px;
  height: 0px;
  border-radius: 25px;
  margin: 2px 0;
  border: 5px solid var(--tertiaryColor);
  cursor: pointer;
}
.menu--toggle::before {
  content: "";
  width: 40px;
  height: 0px;
  border-radius: 25px;
  margin: 10px 0 5px 0;
  border: 5px solid var(--tertiaryColor);
  display: block;
  position: relative;
  left: -5px;
}
.menu--toggle::after {
  content: "";
  width: 40px;
  height: 0px;
  border-radius: 25px;
  margin: 2px 0;
  border: 5px solid var(--tertiaryColor);
  display: block;
  position: relative;
  left: -5px;
}

.menu--list {
  position: fixed;
  margin-top: calc(100% * 2);
  background: white;
  border-radius: var(--card-border-radius);
  z-index: 999;
  left: 0;
  width: 100%;
  padding: 5%;
  height: 100vh;
  transition: margin ease-in 0.75s;
  visibility: hidden;
}
.menu--row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  margin: 10vh auto;
}
.menu--row.sign--out {
  display: block;
  margin: auto;
}
.menu--item {
  color: var(--mainColor);
  font-size: 1rem;
  border-radius: var(--input-border-radius);
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  cursor: pointer;
  text-align: center;
}
.menu--item a {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.menu--item img {
  max-width: 55px;
  width: 100%;
  margin: auto;
  padding: 0 0 1rem 0;
}
.menu--item.selected {
  background-color: rgb(204, 241, 253);
}
.menu--open {
  margin-top: 5%;
  visibility: visible;
}
@media screen and (max-width: 767px) {
  .menu--toggle {
    width: 30px;
    border: 3px solid var(--tertiaryColor);
    margin-top: 0.75em;
  }
  .menu--toggle::before {
    width: 30px;
    border: 3px solid var(--tertiaryColor);
    top: -2px;
    left: -3px;
  }
  .menu--toggle::after {
    width: 30px;
    border: 3px solid var(--tertiaryColor);
    top: -2px;
    left: -3px;
  }
}
</style>
