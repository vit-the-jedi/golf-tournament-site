"use strict";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { update } from "firebase/database";

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


async function getUserPermissions(db, id) {
  //check if user attempting to sign in is admin
  const adminDocRef = doc(db, "admins", id);
  const docSnap = await getDoc(adminDocRef);

  const adminData = {
    permissionLevel: null,
    displayName: null
  }
  if (docSnap.exists()) {
    adminData.permissionLevel = "admin";
    adminData.displayName = docSnap.data().displayName;
  } else {
    adminData.permissionLevel = "user";
  }
  return adminData;
}

async function listTeamDocs(collectionName) {
  return new Promise(async (resolve) => {
    const teamsRef = collection(db, collectionName);
    const orderedDataQuery = query(teamsRef, orderBy("teamName", "asc"));

    await getDocs(orderedDataQuery).then((orderedData) => {
      //order data highest -> lowest
      let dataArr = [];
      orderedData.forEach((doc) => {
        //create empty obj to store values
        const nestedDataObj = {};
        nestedDataObj[doc.id] = doc.data();
        //push to array so we can preserve the correct order we got from firebase query
        dataArr.push(nestedDataObj);
      });
      resolve({
        data: dataArr,
        error: null
      })
    }).catch((error) => {
      resolve({
        data: null,
        error: error
      })
    });

  })

}

async function addPropertyToDoc(collection, docId, valueObj) {
  return new Promise(async (resolve) => {
    const docRef = doc(db, collection, docId)
    //BUG - right now everycall of this function is overwriting the checkedIn array
    //we need to add the array if it doesn't exists
    //and we need to add to the array if it does
    await setDoc(docRef, valueObj, { merge: true })
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};
//have to pass either mens or coed as docName to enter new data into each document
async function addToFirestore(coll, data = null) {
  return new Promise((resolve, reject) => {
    if (!data.hasOwnProperty("id")) {
      data.id = self.crypto.randomUUID();
    }
    const docRef = doc(db, coll, data.id);
    const resolveObj = {
      error: null,
      value: null
    }
    setDoc(docRef, data, { merge: true })
      .then(() => {
        resolveObj.value = true;
        resolve(resolveObj);
      })
      .catch((error) => {
        resolveObj.error = error;
        resolveObj.value = false;
        resolve(resolveObj);
      });
  });

}
async function deleteFromFirestore(coll, docName) {
  return new Promise((resolve, reject) => {
    const docRefToDelete = doc(db, coll, docName);
    const resolveObj = {
      error: null,
      value: null
    }
    deleteDoc(docRefToDelete).then(() => {
      resolveObj.value = true;
      resolve(resolveObj);
    })
      .catch((error) => {
        resolveObj.error = error;
        resolveObj.value = false;
        resolve(resolveObj);
      })
  })
}

export {
  firebaseConfig,
  app,
  db,
  addToFirestore,
  getUserPermissions,
  listTeamDocs,
  deleteFromFirestore,
  addPropertyToDoc,
  auth,
};
