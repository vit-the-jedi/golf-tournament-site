<template>
  <!-- <loadingSpinner /> -->
  <form id="phone-form">
    <div class="form-inner" v-if="!smsCodeSent">
      <h2>Enter your phone number to sign in</h2>
      <div class="form-inset">
        <input type="phone" id="phoneNumber" v-model="userPhoneNumber" />
      </div>
      <button id="sign-in-button" type="button" @click="checkPhone">
        Continue
      </button>
    </div>
    <div class="form-inner" v-if="smsCodeSent">
      <h2>Enter the code</h2>

      <div class="form-inset">
        <input type="text" id="smsCode" v-model="userSMSCode" />
      </div>
    </div>
    <div id="recaptcha-container"></div>
  </form>
  <div id="form--bg" class="ui--backdrop"></div>
</template>

<script>
import { addToFirestore } from "../middleware/db.js";
import loadingSpinner from "../components/loading.vue";
import { app } from "../middleware/db.js";
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
        this.startSignIn();
      }
      e.preventDefault();
    },
    removeErrors: function () {
      const error = document.querySelector(".error");
      if (error) document.removeChild(error);
    },
    formSubmitHandler: async function () {
      //programmatically route to success page w/ relevant form data we can post back for user review
      this.$router.push({
        path: "/admin",
        query: {
          players: playersString,
          division: team.division,
          teamName: team.teamName,
        },
      });
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
          .then(() => {})
          .catch((error) => {
            console.error(error);
            window.recaptchaVerifier.render().then(function (widgetId) {
              grecaptcha.reset(widgetId);
            });
          });
      });
    },
    validateSMSCode: function () {
      confirmationResult
        .confirm(String(this.userSMSCode))
        .then((result) => {
          //push to vuex store here
          store.commit("setUser", { user: result.user });
          this.$router.push({
            path: "/admin",
          });
        })
        .catch((error) => {
          this.errors.push("Sign in failed, please try again.");
          console.log(error);
          window.recaptchaVerifier.render().then(function (widgetId) {
            grecaptcha.reset(widgetId);
          });
        });
    },
  },
};
</script>

<style scoped>
.menu--list {
  position: fixed;
  margin-top: calc(100% * 2);
  background: white;
  border-radius: var(--card-border-radius);
  z-index: 999;
  left: 0;
  width: 100%;
  padding: 5% 5% 140% 5%;
  transition: margin ease-in 0.75s;
}
.menu--open {
  margin-top: 35%;
}
</style>
