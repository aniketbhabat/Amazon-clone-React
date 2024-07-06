// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLq_0G9KKZrFigZ-2HvOwCtoGoANoqbkE",
  authDomain: "clone-f7d31.firebaseapp.com",
  projectId: "clone-f7d31",
  storageBucket: "clone-f7d31.appspot.com",
  messagingSenderId: "526784703912",
  appId: "1:526784703912:web:e8854fabd78284d5ce419d",
  measurementId: "G-C1GVFT2H89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);