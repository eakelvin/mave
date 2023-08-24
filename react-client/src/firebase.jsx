// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANqzXUtN1gscEjtUyhuBJCVWVe86zMPDM",
  authDomain: "mave-sports.firebaseapp.com",
  projectId: "mave-sports",
  storageBucket: "mave-sports.appspot.com",
  messagingSenderId: "1075009796045",
  appId: "1:1075009796045:web:771f0cf121e0f4964a7684",
  measurementId: "G-CT5JNYPN09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);