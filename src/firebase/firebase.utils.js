import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCtzjA_MM7zNXGyXYr7HeEJspF9MKMC2rU",
  authDomain: "crwn-db-88470.firebaseapp.com",
  projectId: "crwn-db-88470",
  storageBucket: "crwn-db-88470.appspot.com",
  messagingSenderId: "454880017269",
  appId: "1:454880017269:web:e04d36e12f163139f0f13c",
  measurementId: "G-8Q97CR5PWN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
