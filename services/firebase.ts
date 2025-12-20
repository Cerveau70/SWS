// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB609l7Wrlu_mRzs5nwO8Rx-IjdmxUe730",
  authDomain: "smart-48b40.firebaseapp.com",
  projectId: "smart-48b40",
  storageBucket: "smart-48b40.firebasestorage.app",
  messagingSenderId: "15288446070",
  appId: "1:15288446070:web:ce4b284d4f00f190220357",
  measurementId: "G-H1RLCH3PMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics: ReturnType<typeof getAnalytics> | null = null;
try {
  analytics = getAnalytics(app);
} catch (e) {
  // Analytics can fail in non-browser environments or if disabled
  analytics = null;
}

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };

export default app;
