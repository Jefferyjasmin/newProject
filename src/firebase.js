import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBpsPCZ-SjvuE6G_4v0M9estn4BBhAMg-I",
  authDomain: "twitter-clone-d72a2.firebaseapp.com",
  projectId: "twitter-clone-d72a2",
  storageBucket: "twitter-clone-d72a2.appspot.com",
  messagingSenderId: "984461860756",
  appId: "1:984461860756:web:31f1335ba622a3c1297981",
  measurementId: "G-S55X4Y6MRL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
