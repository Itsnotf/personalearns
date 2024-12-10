import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM-Tv4WDWFoLkeQH5EdJQRi55qmwO1Uaw",
  authDomain: "personalearns.firebaseapp.com",
  projectId: "personalearns",
  storageBucket: "personalearns.firebasestorage.app",
  messagingSenderId: "345662569409",
  appId: "1:345662569409:web:e65062de9a84df8f888d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }

export default app