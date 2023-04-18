// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqk3b7hNCOzSBALfnO7tXvPhM6OYi6lQo",
  authDomain: "ema-john-with-firebase-e1e1f.firebaseapp.com",
  projectId: "ema-john-with-firebase-e1e1f",
  storageBucket: "ema-john-with-firebase-e1e1f.appspot.com",
  messagingSenderId: "1090876092082",
  appId: "1:1090876092082:web:77fbfa750c5f3628ae63ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;