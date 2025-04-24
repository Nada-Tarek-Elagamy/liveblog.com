// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1J7OK_6I6oKYtnc0hfnV2c9ZGtp9QGc0",
  authDomain: "liveblog-com.firebaseapp.com",
  projectId: "liveblog-com",
  storageBucket: "liveblog-com.firebasestorage.app",
  messagingSenderId: "717595142284",
  appId: "1:717595142284:web:0907b592652c8848bf33a9",
  measurementId: "G-YQ61FGR8FJ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };