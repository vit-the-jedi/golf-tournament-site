"use strict";
import { app, auth } from "../middleware/db.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { store } from "../store/index.js";

//middleware
import { getUserPermissions, db } from "../middleware/db.js";

const authStateListener = async () => {
  auth.onAuthStateChanged(async (user) => {
    const userObj = store.getters.getUser;
    if (userObj.hasOwnProperty("uid")) {
      console.log(
        `user
    exists in store:`,
        store.state.user
      );
    } else {
      store.dispatch("fetchUser", user);

      if (user) {
        const permissionLevel = await getUserPermissions(
          db,
          store.state.user.userData.phoneNumber
        );
        store.commit("setPermissionLevel", permissionLevel);
      }
      console.log(`user set in store:`, store.state.user);
    }
  });
};

const authStatus = async () => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
    }
  });
};

export { authStateListener };
