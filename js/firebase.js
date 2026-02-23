// Replace with your Firebase config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOiQaZdLLjwGOo4Ag5nBOX-FaxzJH6f1w",
  authDomain: "fir-84f73.firebaseapp.com",
  projectId: "fir-84f73",
  storageBucket: "fir-84f73.firebasestorage.app",
  messagingSenderId: "775433137122",
  appId: "1:775433137122:web:de92016f28267de23be7bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
