// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSWOFmYwzGiYO6UIoE7El_ZsIN9h9AGjE",
  authDomain: "portfolio-2cfb0.firebaseapp.com",
  projectId: "portfolio-2cfb0",
  storageBucket: "portfolio-2cfb0.appspot.com",
  messagingSenderId: "143525371020",
  appId: "1:143525371020:web:0a34092b21073b76d96fa9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
