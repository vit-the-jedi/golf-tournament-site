"use strict";
import { app, auth } from "../middleware/db.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { store } from "../store/index.js";

//middleware
import { getUserPermissions, db } from "../middleware/db.js";

const authStateListener = async () => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      store.dispatch("fetchUser", user);
      const permissionLevel = await getUserPermissions(
        db,
        store.state.user.data.phoneNumber
      );
      store.commit("setPermissionLevel", permissionLevel);
    }
  });
  return true;
};

export { authStateListener };
