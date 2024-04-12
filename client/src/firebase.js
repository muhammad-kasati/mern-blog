// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9fa94.firebaseapp.com",
  projectId: "mern-blog-9fa94",
  storageBucket: "mern-blog-9fa94.appspot.com",
  messagingSenderId: "463555536834",
  appId: "1:463555536834:web:2db4bf47da54d65aff185b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);