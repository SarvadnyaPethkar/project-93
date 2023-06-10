import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-yrRuBLGdIDB55uJ3Pcrakm-bIXN6QgM",
  authDomain: "database-34a5a.firebaseapp.com",
  projectId: "database-34a5a",
  storageBucket: "database-34a5a.appspot.com",
  messagingSenderId: "12504938879",
  appId: "1:12504938879:web:67ab63aa6f29e9434d424a"
};

firebase.initializeApp(firebaseConfig)

export default firebase.database()