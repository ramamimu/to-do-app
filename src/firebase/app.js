import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4ro8Eekb-dT6CQ5EjvLYbBbvbOHCQiXg",
  authDomain: "to-do-app-pweb.firebaseapp.com",
  projectId: "to-do-app-pweb",
  storageBucket: "to-do-app-pweb.appspot.com",
  messagingSenderId: "953870695907",
  appId: "1:953870695907:web:80d0ed69570cc4776f74d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
