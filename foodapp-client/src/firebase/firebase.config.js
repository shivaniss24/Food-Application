import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD48kpq_m5TdkvoKp4jqOJBHveWPcMjSuQ",
  authDomain: "foodapp-timely-taste.firebaseapp.com",
  projectId: "foodapp-timely-taste",
  storageBucket: "foodapp-timely-taste.appspot.com",
  messagingSenderId:" 136261348818",
  appId: "1:136261348818:web:147d324cb0982893592c0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;