<template>
  <!-- <loadingSpinner /> -->
  <form id="phone-form">
    <div class="form-inner">
      <h1 class="text-center">Enter your email and password to sign in</h1>
      <div class="form-inset">
        <span v-if="errors.length" class="error-list error">
          <span>Please correct the following error(s):</span>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </span>

        <div class="form-control">
          <input
            type="email"
            id="email"
            v-model="userEmail"
            placeholder="Email"
          />
        </div>
        <div class="form-control">
          <input
            type="password"
            id="password"
            v-model="userPassword"
            placeholder="Password"
          />
        </div>
      </div>
      <button id="sign-in-button" type="button" @click="checkCredentials">
        Continue
      </button>
    </div>
  </form>
  <div id="form--bg" class="ui--backdrop"></div>
</template>

<script>
import { app, getUserPermissions, db } from "../middleware/db.js";
import { store } from "../store/index.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const auth = getAuth(app);
auth.languageCode = "en";
const appVerifier = window.recaptchaVerifier;
const firestoreDb = db;

export default {
  data() {
    return {
      errors: [],
      userPassword: null,
      userEmail: null,
    };
  },
  mounted() {
    // const auth = getAuth();
    // window.recaptchaVerifier = new RecaptchaVerifier(
    //   "recaptcha-container",
    //   {
    //     size: "normal",
    //     callback: (response) => {
    //       // reCAPTCHA solved, allow signInWithPhoneNumber.
    //       this.showSMSForm();
    //     },
    //   },
    //   auth
    // );
    // window.recaptchaVerifier.render().then(function (widgetId) {
    //   window.recaptchaWidgetId = widgetId;
    // });
  },
  watch: {
    // userSMSCode(value) {
    //   if (this.userSMSCode.length === 6) {
    //     this.validateSMSCode();
    //   }
    // },
  },
  methods: {
    checkCredentials: function (e) {
      this.errors = [];
      // if (!this.userPhoneNumber) {
      //   this.errors.push("Please enter a phone number");
      // } else {
      //   this.removeErrors();
      //   this.startSignIn();
      // }
      e.preventDefault();
      this.startSignIn();
    },
    removeErrors: function () {
      this.errors = [];
    },
    startSignIn: function () {
      const auth = getAuth();
      const email = this.userEmail;
      const password = this.userPassword;

      setPersistence(auth, browserSessionPersistence).then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then(async (result) => {
            if (result.user) {
              //create async function so we can await the call to check + set user permissions
              store.commit(
                "setPermissionLevel",
                await this.userPermissionsHandler(result.user.uid)
              );
              //check if there is redirect metadata in route,
              //if yes, go to redirect
              //else go to home page
              this.$router.push(this.$route.query.redirect || "/");
              //hotfix for issue with vue state not updating until refresh
            } else {
              this.errors.push("Sign in failed, please try again.");
              console.log(error);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      });
    },
    userPermissionsHandler: async function (userId) {
      const permissionResponse = await getUserPermissions(firestoreDb, userId);
      return permissionResponse;
    },
  },
};
</script>

<style scoped>
form {
  max-width: 90%;
  width: 100%;
  margin: auto;
}
.form-inner {
  margin: auto;
}
.form-inner p {
  max-width: 500px;
  margin: 0 auto 1em auto;
}
.form-inner input {
  max-width: 300px;
  width: 80%;
  margin: auto;
}
h1 {
  max-width: 70%;
  margin: auto auto 2% auto;
}
button {
  margin: 2% auto auto auto;
}
#recaptcha-container {
  margin: 1em auto auto auto;
  max-width: 304px;
}
</style>
