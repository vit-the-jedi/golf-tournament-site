"use strict";
import { createStore } from "vuex";
import { app } from "../middleware/db.js";
import { signOut, getAuth } from "firebase/auth";

//firebase auth
const auth = getAuth(app);

const store = createStore({
  state: {
    //The user state data will initially be empty. After login, this state will be updated
    user: {
      userData: {},
      userLoggedIn: false,
    },
    loading: false,
    team: null,
  },
  mutations: {
    //Mutation to update the user state
    //Takes in two arguments, the state and the payload. When we call this mutation, the payload will be user object from firebase auth
    //When the user logs out, we call the mutation and the payload will be null
    setUser(state, payload) {
      if (payload) {
        for (const [key, value] of Object.entries(payload)) {
          state.user.userData[key] = value;
        }
      } else {
        //null means either no one has signed in yet, or user has signed out
        state.user.userData = {};
        state.user.userLoggedIn = false;
      }
      console.log(state.user);
    },
    setUserLoggedIn(state, value) {
      state.user.userLoggedIn = value;
    },
    setPermissionLevel(state, value) {
      state.user.userData.permissionLevel = value;
    },
    setUserDisplayName(state, value) {
      state.user.userData.displayName = value
    },
    setLoadingState(state, value) {
      state.loading = value;
    },
    setTeam(state, value) {
      state.team = value;
      console.log(state.team);
    },
  },
  actions: {
    logOut(context) {
      signOut(auth);
    },
    async fetchUser(context, user) {
      context.commit("setUserLoggedIn", user !== null);
      if (user) {
        context.commit("setUser", user);
      } else {
        context.commit("setUser", null);
      }
    },
  },
  getters: {
    checkAdmin(state) {
      return state.user.userData.permissionLevel === "admin" ? true : false;
    },
    getUserDisplayName(state) {
      const displayName = state.user.userData.displayName;
      return displayName !== null ? displayName : "Admin"
    },
    getUser(state) {
      return state.user.userData;
    },
    getLoginState(state) {
      return state.user.userLoggedIn;
    },
    getLoadingState(state) {
      return state.loading;
    },
    getTeam(state) {
      return state.team;
    },
  },
});
// export the store
export { store };
