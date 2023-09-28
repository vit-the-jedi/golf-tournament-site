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
  updateDoc,
  arrayUnion,
  doc,
  query,
  where,
  onSnapshot,
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

async function getCheckedInTeams(collectionName) {
  return new Promise(async (resolve) => {

    const teams = await listTeamDocs(collectionName);
    const checkedInTeamsResolveObj = {
      data: {},
      error: null
    }
    const checkedInTeams = teams.data.filter((team) => {
      const teamData = team[Object.keys(team)[0]];
      if (teamData.hasOwnProperty("checkedIn")) {
        return teamData;
      }
    });

    const notCheckedInTeams = teams.data.filter((team) => {
      const teamData = team[Object.keys(team)[0]];
      if (!teamData.hasOwnProperty("checkedIn")) {
        return teamData;
      }
    });

    if (checkedInTeams.length > 0) {
      checkedInTeamsResolveObj.data.checkedInTeams = [];
      checkedInTeamsResolveObj.data.checkedInTeams = checkedInTeams;
    }
    if (notCheckedInTeams.length > 0) {
      checkedInTeamsResolveObj.data.notCheckedInTeams = [];
      checkedInTeamsResolveObj.data.notCheckedInTeams = notCheckedInTeams;
    } else {
      checkedInTeamsResolveObj.error = "No teams checked in yet, try again soon.";
    }
    resolve(checkedInTeamsResolveObj);
  });
};

async function addPropertyToDoc(collection, docId, valueObj) {
  return new Promise(async (resolve) => {
    const docRef = doc(db, collection, docId)
    //get document we want to update
    const docSnap = await getDoc(docRef);

    const checkInResolveObj = {
      value: null,
      error: null
    }

    const docData = docSnap.data();
    //check if checkedIn array exists
    if (docData.hasOwnProperty("checkedIn")) {

      //check if our player is already present in the checkedIn array
      for (const value of docData.checkedIn) {
        if (value === valueObj.checkedIn[0]) {
          //resolve to false and pass along a message
          checkInResolveObj.value = false;
          checkInResolveObj.error = "Player already checked in!"
          resolve(checkInResolveObj)
        }
      }
      //if the array is present, update with new value, while preserving the existing ones
      await updateDoc(docRef, {
        checkedIn: arrayUnion(valueObj.checkedIn[0])
      }).then(() => {
        resolve(true);
      })
        .catch((error) => {
          resolve(error);
        });
    } else {
      //else add the checkedIn array and value
      await setDoc(docRef, valueObj, { merge: true })
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          resolve(error);
        });
    }
  });
};

async function unsubscribeToCheckedInUpdates(collection,) {
  const teamsCollRef = collection(db, collection);
  const q = query(teamsCollRef, where('checkedIn', 'in', [0, 1, 2, 3]));
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });
}
async function unsubscribeToNotCheckedInUpdates(collection,) {
  const teamsCollRef = collection(db, collection);
  const q = query(teamsCollRef, where('checkedIn', 'in', [0, 1, 2, 3]));
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });
}

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
  unsubscribeToCheckedInUpdates,
  getCheckedInTeams,
  auth,
};
