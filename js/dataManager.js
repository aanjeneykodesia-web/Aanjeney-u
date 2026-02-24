// js/dataManager.js
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.saveOrderToFirebase = async function(orderData) {
  await addDoc(collection(db, "orders"), orderData);
};
