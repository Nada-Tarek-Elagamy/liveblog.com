// lib/firebaseConfig.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1J7OK_6I6oKYtnc0hfnV2c9ZGtp9QGc0",
  authDomain: "liveblog-com.firebaseapp.com",
  projectId: "liveblog-com",
  storageBucket: "liveblog-com.appspot.com",
  messagingSenderId: "717595142284",
  appId: "1:717595142284:web:0907b592652c8848bf33a9",
  measurementId: "G-YQ61FGR8FJ"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
