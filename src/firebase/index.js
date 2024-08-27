
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2zrMmkBsKWTmeHO7gFC-QrfDvePxoS9A",
  authDomain: "chatapp-d7ed7.firebaseapp.com",
  projectId: "chatapp-d7ed7",
  storageBucket: "chatapp-d7ed7.appspot.com",
  messagingSenderId: "117940852131",
  appId: "1:117940852131:web:5c5f7ddf9cc1d28f8a7616"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
