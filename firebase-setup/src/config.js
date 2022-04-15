// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBK2hdpxLRRlfcUNow17MHfws7zQYEk5tw",
  authDomain: "hv-ischool-react-app.firebaseapp.com",
  projectId: "hv-ischool-react-app",
  storageBucket: "hv-ischool-react-app.appspot.com",
  messagingSenderId: "390788422900",
  appId: "1:390788422900:web:a7521f52363fa4477392a1"
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);