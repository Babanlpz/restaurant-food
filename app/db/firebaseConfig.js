// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKg14f10PUy6sg7E5DPWiyML8jwfNeLSM",
  authDomain: "restaurant-food-53be7.firebaseapp.com",
  projectId: "restaurant-food-53be7",
  storageBucket: "restaurant-food-53be7.appspot.com",
  messagingSenderId: "7371948460",
  appId: "1:7371948460:web:e7e63837961332a367ba09",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
