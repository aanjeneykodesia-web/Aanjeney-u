// js/admin.js
import { db } from "./firebase.js";
import { collection, onSnapshot, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const box = document.getElementById("ordersBox");

onSnapshot(collection(db, "orders"), (snap) => {
  box.innerHTML = "";
  snap.forEach(d => {
    let o = d.data();
    box.innerHTML += `
      <div style='border:1px solid green;padding:10px;margin:10px;'>
        <b>Order:</b> ₹${o.totalPrice}<br>
        Status: ${o.status}<br>
        <button onclick="approveOrder('${d.id}')">Approve</button>
      </div>
    `;
  });
});

window.approveOrder = async function(id) {
  await updateDoc(doc(db, "orders", id), {status: "Approved"});
};
