import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-vBKvHG7gWie8uC90vlC9zfbX3RB7tas",
  authDomain: "sad-466423.firebaseapp.com",
  projectId: "sad-466423",
  storageBucket: "sad-466423.firebasestorage.app",
  messagingSenderId: "715608107645",
  appId: "1:715608107645:web:2199ae0a98f3f646165f14",
  measurementId: "G-EVPR2C2EY5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, auth, db, storage, analytics };