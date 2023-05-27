import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAIVqQUP1y_nrAa8vmq2a1w49dA6EDOj0A",
  authDomain: "proyecto-react-7e33f.firebaseapp.com",
  projectId: "proyecto-react-7e33f",
  storageBucket: "proyecto-react-7e33f.appspot.com",
  messagingSenderId: "568934075656",
  appId: "1:568934075656:web:24d12f179261527e13f0bd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)