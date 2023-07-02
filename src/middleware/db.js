"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
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
const auth = getAuth();

async function getData() {
  const orderedDataQuery = query(
    scoreCollection,
    orderBy("score", "desc"),
    limit(25)
  );
  const checkPermissions = query(adminsCollection);
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

async function getUserPermissions(db, phoneNumber) {
  //check if user attempting to sign in is admin
  const adminDocRef = doc(db, "admins", phoneNumber);
  const docSnap = await getDoc(adminDocRef);

  if (docSnap.exists()) {
    return "admin";
  } else {
    return "user";
  }
}

async function listTeamDocs(collectionName) {
  const teamsRef = collection(db, collectionName);
  const orderedDataQuery = query(teamsRef, orderBy("teamName", "asc"));

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
  return dataArr;
}

//have to pass either mens or coed as docName to enter new data into each document
async function addToFirestore(coll, docName, data = null) {
  const docRef = doc(db, coll, docName);
  setDoc(docRef, data, { merge: true })
    .then(() => {
      console.log("Document has been added successfully");
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}

async function deleteFromFirestore(coll, docName) {
  try {
    const teamDeleted = await deleteDoc(doc(db, coll, docName));
    if (teamDeleted) {
      return true;
    }
  } catch (e) {
    throw e;
  }
}
export {
  firebaseConfig,
  app,
  db,
  addToFirestore,
  getUserPermissions,
  listTeamDocs,
  deleteFromFirestore,
};
