// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKV6_FkAJSrWx1Ef7hCm1BzUtUwg6vtU8",
  authDomain: "brand-shop-project.firebaseapp.com",
  projectId: "brand-shop-project",
  storageBucket: "brand-shop-project.appspot.com",
  messagingSenderId: "1088791036308",
  appId: "1:1088791036308:web:c83744d44a18f3422f4f81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
