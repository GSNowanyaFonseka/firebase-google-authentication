import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeKOfa3iponOrn2sde-NrvQqqUcZA77dQ",
  authDomain: "practice-website-187cd.firebaseapp.com",
  projectId: "practice-website-187cd",
  storageBucket: "practice-website-187cd.firebasestorage.app",
  messagingSenderId: "495704744406",
  appId: "1:495704744406:web:7a91aeb63b8b1d07db8477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;