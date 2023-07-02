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
      <div class="menu--item" v-if="userInfo.isAdmin">
        <router-link to="/admin">
          <img src="../assets/icons/admin.svg" alt="admin page" />
          <slot name="navItemText">Admin</slot>
        </router-link>
      </div>
      <div class="menu--item" v-if="userInfo.userSignedIn">
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
//import auth from firebase
import { app, getUserPermissions, db } from "../middleware/db.js";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { store } from "../store/index.js";
//router
import { useRouter } from "vue-router";
import { watch } from "vue";

const router = useRouter();
//auth instance
const auth = getAuth(app);
const firestoreDb = db;

export default {
  data() {
    return {
      userInfo: {
        userSignedIn: false,
        isAdmin: false,
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
    signOutHandler: () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("signed out successfully");
          store.commit("setUser", null);
          router.push("/sign-in");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAuthState: function () {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          this.userInfo.userSignedIn = false;
          return;
        } else {
          if (!store.state.user) {
            //create async function so we can await the call to check + set user permissions
            (async function () {
              user.permissionLevel = await getUserPermissions(
                firestoreDb,
                user.phoneNumber
              );
              //push to vuex store here
              store.commit("setUser", { user });
            })();
          }
          this.userInfo.userSignedIn = true;
        }
      });
    },
  },
  beforeMount() {
    this.getAuthState();
  },
  computed: {
    checkUserUpdate() {
      if (store.state.user) {
        this.userInfo.isAdmin = store.getters.checkAdmin;
      }
    },
  },
  watch: {
    checkUserUpdate(updated, old) {
      console.log(updated, old);
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
}
@media screen and(max-width) {
}
</style>
