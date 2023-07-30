<template>
  <!-- <loadingSpinner /> -->
  <form id="phone-form">
    <div class="form-inner" v-if="!smsCodeSent">
      <h1 class="text-center">Enter your phone number to sign in</h1>
      <p>
        We'll send a code to your phone, you enter the code on the next screen,
        and you're ready to sign up!
      </p>
      <div class="form-inset">
        <span v-if="errors.length" class="error-list error">
          <span>Please correct the following error(s):</span>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </span>
        <div class="form-control">
          <input type="phone" id="phoneNumber" v-model="userPhoneNumber" />
        </div>
        <div id="recaptcha-container"></div>
      </div>
      <button id="sign-in-button" type="button" @click="checkPhone">
        Continue
      </button>
    </div>
    <div class="form-inner" v-if="smsCodeSent">
      <h1>Enter the 6-digit code</h1>
      <p>
        Your code should arrive within a few minutes. Didn't get a code?<br />
        <router-link to="/sign-up">try again</router-link>
      </p>
      <div class="form-inset">
        <div class="form-control">
          <input type="text" id="smsCode" v-model="userSMSCode" />
        </div>
      </div>
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
  signInWithPhoneNumber,
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
      userPhoneNumber: null,
      userSMSCode: null,
      smsCodeSent: false,
    };
  },
  mounted() {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.showSMSForm();
        },
      },
      auth
    );
    window.recaptchaVerifier.render().then(function (widgetId) {
      window.recaptchaWidgetId = widgetId;
    });
  },
  watch: {
    userSMSCode(value) {
      if (this.userSMSCode.length === 6) {
        this.validateSMSCode();
      }
    },
  },
  methods: {
    openFormHandler: function () {},
    closeFormHandler: function () {},
    checkPhone: function (e) {
      this.errors = [];
      if (!this.userPhoneNumber) {
        this.errors.push("Please enter a phone number");
      } else {
        this.removeErrors();
        this.startSignIn();
      }
      e.preventDefault();
    },
    removeErrors: function () {
      this.errors = [];
    },
    startSignIn: function () {
      const auth = getAuth();
      const appVerifier = window.recaptchaVerifier;
      const parsedPhoneNum = `+1${this.userPhoneNumber}`;

      setPersistence(auth, browserSessionPersistence).then(() => {
        signInWithPhoneNumber(auth, parsedPhoneNum, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            this.smsCodeSent = true;
          })
          .catch((error) => {
            console.error(error);
            window.recaptchaVerifier.render().then(function (widgetId) {
              grecaptcha.reset(widgetId);
            });
          });
      });
    },
    validateSMSCode: async function () {
      const result = await confirmationResult.confirm(String(this.userSMSCode));

      if (result.user) {
        const path = new URLSearchParams(window.location.search);
        //create async function so we can await the call to check + set user permissions
        store.commit(
          "setPermissionLevel",
          await this.userPermissionsHandler(result.user.phoneNumber)
        );
        this.$router.push(this.$route.query.redirect || "/");
      } else {
        this.errors.push("Sign in failed, please try again.");
        console.log(error);
        window.recaptchaVerifier.render().then(function (widgetId) {
          grecaptcha.reset(widgetId);
        });
      }
    },
    userPermissionsHandler: async function (phoneNumber) {
      const permissionResponse = await getUserPermissions(
        firestoreDb,
        phoneNumber
      );
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
