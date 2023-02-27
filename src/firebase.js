// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCueJKFANAvaS39YahDm2NNRdzeuHRRBak",
  authDomain: "chat-24d52.firebaseapp.com",
  projectId: "chat-24d52",
  storageBucket: "chat-24d52.appspot.com",
  messagingSenderId: "12617426577",
  appId: "1:12617426577:web:bab94447391f7ccff38130",
  measurementId: "G-WSWXDVDXB2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();