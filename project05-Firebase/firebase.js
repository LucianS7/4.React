import { initializeApp } from "firebase/app";
import  { getFirestore, collection } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8dKuwbkfp6YMCzEfLxmWWrmqVfXSPmnU",
  authDomain: "react-notes-b88a0.firebaseapp.com",
  projectId: "react-notes-b88a0",
  storageBucket: "react-notes-b88a0.appspot.com",
  messagingSenderId: "956976321217",
  appId: "1:956976321217:web:2fc2b2ae43aae41bca7a40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and configure Firestore database for the app 
export const db = getFirestore(app);

// Create a reference to the "notes" colection in the Firestore database for the app
export const notesCollection = collection(db, "notes")