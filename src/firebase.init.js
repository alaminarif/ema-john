// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXFVApNZZ59ItMoE2_Bh8pveM8SXVkoAk",
  authDomain: "ema-jhon-rf.firebaseapp.com",
  projectId: "ema-jhon-rf",
  storageBucket: "ema-jhon-rf.appspot.com",
  messagingSenderId: "677618738861",
  appId: "1:677618738861:web:9509c789e7bbf2b7d80824",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
