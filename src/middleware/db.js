"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1edFnLIXTMe98ey2m1XnS3de0xTzX17E",
  authDomain: "pja-golf-tournament.firebaseapp.com",
  projectId: "pja-golf-tournament",
  storageBucket: "pja-golf-tournament.appspot.com",
  messagingSenderId: "191775654052",
  appId: "1:191775654052:web:4d08bdb790677759ad2631",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getLeaderboardData(db) {
  const scoreCollection = collection(db, "leaderboard");

  const orderedDataQuery = query(
    scoreCollection,
    orderBy("score", "desc"),
    limit(25)
  );
  const orderedData = await getDocs(orderedDataQuery);
  //order data highest -> lowest
  let dataArr = [];
  orderedData.forEach((doc) => {
    //create empty obj to store values
    const nestedDataObj = {};
    nestedDataObj[doc.id] = doc.data();
    //push to array so we can preserve the correct order we got from firebase query
    dataArr.push(nestedDataObj);
  });
  console.log(dataArr);
  return dataArr;
}

//have to pass either mens or coed as docName to enter new data into each document
async function addToFirestore(coll, docName, data = null) {
  const docRef = doc(db, "teams", docName);
  setDoc(docRef, data, { merge: true })
    .then(() => {
      console.log("Document has been added successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}
export { firebaseConfig, app, db, getLeaderboardData, addToFirestore };
