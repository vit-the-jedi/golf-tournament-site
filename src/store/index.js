"use strict";
import { createStore } from "vuex";
import { app } from "../middleware/db.js";
import { signOut, getAuth } from "firebase/auth";
const auth = getAuth(app);
const store = createStore({
  state: {
    //The user state will initially be null. After login, this state will be updated
    user: null,
  },
  mutations: {
    //Mutation to update the user state
    //Takes in two arguments, the state and the payload. When we call this mutation, the payload will be user object from firebase auth
    //When the user logs out, we call the mutation and the payload will be null
    setUser(state, payload) {
      state.user = {};
      for (const [key, value] of Object.entries(payload.user)) {
        state.user[key] = value;
      }
      console.log(store);
    },
  },
  actions: {
    async logout(context) {
      await signOut(auth);
      context.commit("setUser", null);
    },
  },
  getters: {
    checkAdmin(state) {
      return state.user.permissionLevel === "admin" ? true : false;
    },
  },
});
// export the store
export { store };
