// js/transporter.js
import { db } from "./firebase.js";
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const q = query(collection(db, "orders"), where("status", "==", "Approved"));

onSnapshot(q, snap => {
  let box = document.getElementById("deliveryOrders");
  box.innerHTML = "";
  snap.forEach(d => {
    let o = d.data();
    box.innerHTML += `<div>Deliver Order: ₹${o.totalPrice}</div>`;
  });
});
