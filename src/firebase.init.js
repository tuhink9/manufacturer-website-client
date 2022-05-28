// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgAGRP5i7aUoFBvlNkRBqk_aOoG4mVGHU",
  authDomain: "himashray-motors.firebaseapp.com",
  projectId: "himashray-motors",
  storageBucket: "himashray-motors.appspot.com",
  messagingSenderId: "605603580581",
  appId: "1:605603580581:web:0bb2f3b7645e6fb85bdb4c",
  measurementId: "G-8HPJ28JNBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth =  getAuth(app);

export default auth;