// Replace with your Firebase config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOiQaZdLLjwGOo4Ag5nBOX-FaxzJH6f1w",
  authDomain: "fir-84f73.firebaseapp.com",
  projectId: "fir-84f73",
  storageBucket: "YOUR.appspot.com",
  messagingSenderId: "ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
