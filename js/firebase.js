// firebase.js

const firebaseConfig = {
  apiKey: "DEMO_API_KEY_12345",
  authDomain: "shopkeeper-demo.firebaseapp.com",
  databaseURL: "https://shopkeeper-demo-default-rtdb.firebaseio.com",
  projectId: "shopkeeper-demo",
  storageBucket: "shopkeeper-demo.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:demo123abc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const storage = firebase.storage();
