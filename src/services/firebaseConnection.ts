// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCht6QH4bP_rKXQRrp5HmjCe-HgMv0f5HI",
  authDomain: "reactlinks-94f22.firebaseapp.com",
  projectId: "reactlinks-94f22",
  storageBucket: "reactlinks-94f22.firebasestorage.app",
  messagingSenderId: "606917131559",
  appId: "1:606917131559:web:033afacf9433d99574fd02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };