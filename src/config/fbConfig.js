import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAza5Yl09Lxkfhfz2vT64I9KqJJHvcf65A",
  authDomain: "marioplan-c25c1.firebaseapp.com",
  databaseURL: "https://marioplan-c25c1.firebaseio.com",
  projectId: "marioplan-c25c1",
  storageBucket: "marioplan-c25c1.appspot.com",
  messagingSenderId: "1010290535978",
  appId: "1:1010290535978:web:953e1a7bd55a7b4f139d53",
  measurementId: "G-50HG286X1T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
