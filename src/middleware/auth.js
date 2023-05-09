"use strict";
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1edFnLIXTMe98ey2m1XnS3de0xTzX17E",
  authDomain: "pja-golf-tournament.firebaseapp.com",
  projectId: "pja-golf-tournament",
  storageBucket: "pja-golf-tournament.appspot.com",
  messagingSenderId: "191775654052",
  appId: "1:191775654052:web:4d08bdb790677759ad2631",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.languageCode = "en";

window.recaptchaVerifier = new RecaptchaVerifier(
  "sign-in-button",
  {
    size: "invisible",
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    },
  },
  auth
);

const appVerifier = window.recaptchaVerifier;

const showSMSForm = () => {
  const smsForm = document.querySelector("#sms-form");
  const uiBg = document.querySelector("#form--bg");
  smsForm.classList.add("form--open");
  uiBg.classList.add("backdrop--open");
};

export { auth, appVerifier };
