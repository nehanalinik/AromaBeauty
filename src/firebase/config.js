import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUmRSXTQCOWVrbJ5LSU5aAcFWuI76zr1g",
  authDomain: "beauty-ritual-a2d0e.firebaseapp.com",
  projectId: "beauty-ritual-a2d0e",
  storageBucket: "beauty-ritual-a2d0e.appspot.com",
  messagingSenderId: "117105770052",
  appId: "1:117105770052:web:178ef0766a145b99fc4611",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);
export default app;
