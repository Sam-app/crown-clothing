import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fireBasConfig = {
  apiKey: "AIzaSyAZV2tc7gebwYaXrwKsOWp7IekMDAonIyE",
  authDomain: "crwn-db-9de07.firebaseapp.com",
  databaseURL: "https://crwn-db-9de07.firebaseio.com",
  projectId: "crwn-db-9de07",
  storageBucket: "",
  messagingSenderId: "745348981004",
  appId: "1:745348981004:web:6002fbe7ae44688c"
};

firebase.initializeApp(fireBasConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authintication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
