// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiZKL2nLh38CnFteI-2lKNlaL1oW93Xww",
  authDomain: "email-b7c94.firebaseapp.com",
  projectId: "email-b7c94",
  storageBucket: "email-b7c94.appspot.com",
  messagingSenderId: "492891187465",
  appId: "1:492891187465:web:c2b0780a44a68a43f40bd8",
  measurementId: "G-DTM8F4TH5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth=getAuth(app)
