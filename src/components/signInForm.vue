<template>
  <!-- <loadingSpinner /> -->
  <form id="phone-form">
    <span v-if="errors.length" class="error-list error">
      <span>Please correct the following error(s):</span>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </span>
    <div class="form-inner" v-if="!smsCodeSent">
      <h2>Enter your phone number to sign in</h2>
      <div class="form-inset">
        <div class="form-control">
          <input type="phone" id="phoneNumber" v-model="userPhoneNumber" />
        </div>
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
import { useRouter } from "vue-router";
import { addToFirestore } from "../middleware/db.js";
import loadingSpinner from "../components/loading.vue";
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
  margin: auto;
}
.form-inner {
  margin: auto;
}
.form-inner input {
  max-width: 300px;
  width: 80%;
  margin: auto;
}
h2 {
  max-width: 70%;
  margin: auto auto 4% auto;
}
button {
  margin: 4% auto auto auto;
}
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
