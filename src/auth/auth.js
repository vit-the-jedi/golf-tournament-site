"use strict";
import { app, auth } from "../middleware/db.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { store } from "../store/index.js";

//middleware
import { getUserPermissions, db } from "../middleware/db.js";

//return a promise so we can await the call to firebase
const checkAuthStatus = new Promise((resolve) => {
  auth.onAuthStateChanged(async (user) => {
    store.dispatch("fetchUser", user);
    if (user) {
      const permissionLevelResp = await getUserPermissions(
        db,
        store.state.user.userData.uid
      );
      store.commit("setPermissionLevel", permissionLevelResp.permissionLevel);
      store.commit(
        "setUserDisplayName",
        permissionLevelResp.displayName
      );
      console.log("user set in store");
      console.log(store.state.user);
      resolve(user);
    } else {
      console.log("user null / logged out");
      console.log(store.state.user);
      resolve(store.getters.getLoginState);
    }
    //resolve the user object once we've gotten it
    //and also set everything in vuex store
  });
});

export { checkAuthStatus };
