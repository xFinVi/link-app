import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBD_oJA1svmLyOgEMfprzCkuVnCnZsk4z4",
    authDomain: "linkedin-clone-a4b1e.firebaseapp.com",
    projectId: "linkedin-clone-a4b1e",
    storageBucket: "linkedin-clone-a4b1e.appspot.com",
    messagingSenderId: "1089286292229",
    appId: "1:1089286292229:web:b2389bd042637f80432d6c",
    measurementId: "G-TX8NK7PKGM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};
