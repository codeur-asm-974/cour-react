import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNE86Mp07TaIsztnkJGQBp_C0P8_QUKGs",
  authDomain: "courreact.firebaseapp.com",
  projectId: "courreact",
  storageBucket: "courreact.appspot.com",
  messagingSenderId: "1081231333619",
  appId: "1:1081231333619:web:3623898fe4a1d3da8cbf86",
  measurementId: "G-1LX0NQZ00Y",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
