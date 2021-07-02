import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZcSbZrOTMtDDu6dNEydmGWvCdNgXVgWY",
    authDomain: "clone-bf295.firebaseapp.com",
    projectId: "clone-bf295",
    storageBucket: "clone-bf295.appspot.com",
    messagingSenderId: "1093559711399",
    appId: "1:1093559711399:web:ebb882933f7033a2fc4d82",
    measurementId: "G-N8WP4HGTB7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};