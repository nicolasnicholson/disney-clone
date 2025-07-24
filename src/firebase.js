import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// your firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBDddPLouKn43_g98Xp9NC2CVe1S3mymUU",
  authDomain: "disney-clone-9be1f.firebaseapp.com",
  projectId: "disney-clone-9be1f",
  storageBucket: "disney-clone-9be1f.firebasestorage.app",
  messagingSenderId: "274910315013",
  appId: "1:274910315013:web:49d8a54d494612f8e8526c",
  measurementId: "G-D40PQCWWG2"
};

// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // firebase db
const auth = firebase.auth(); //firebase auth
const provider = new firebase.auth.GoogleAuthProvider(); // Google auth provider
const storage = firebase.storage(); // firebase storage

export { auth, provider, storage };
export default db;
