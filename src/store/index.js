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
      data: {},
      userLoggedIn: false,
    },
  },
  mutations: {
    //Mutation to update the user state
    //Takes in two arguments, the state and the payload. When we call this mutation, the payload will be user object from firebase auth
    //When the user logs out, we call the mutation and the payload will be null
    setUser(state, payload) {
      if (payload) {
        for (const [key, value] of Object.entries(payload)) {
          state.user.data[key] = value;
        }
      } else {
        //null means either no one has signed in yet, or user has signed out
        state.user.data = {};
        state.user.userLoggedIn = false;
      }
      console.log(store.state.user);
    },
    setUserLoggedIn(state, value) {
      state.user.userLoggedIn = value;
    },
    setPermissionLevel(state, value) {
      state.user.data.permissionLevel = value;
    },
  },
  actions: {
    async logOut(context) {
      await signOut(auth);
      context.commit("setUser", null);
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
      return state.user.data.permissionLevel === "admin" ? true : false;
    },
    getUser(state) {
      return state.user;
    },
    getLoginState(state) {
      return state.user.userLoggedIn;
    },
  },
});
// export the store
export { store };
