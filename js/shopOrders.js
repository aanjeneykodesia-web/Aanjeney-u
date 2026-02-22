import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 🔥 YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Listen live orders
const ordersRef = ref(db, "orders");

onValue(ordersRef, (snapshot) => {
  let box = document.getElementById("shopOrders");
  box.innerHTML = "";

  snapshot.forEach(orderSnap => {
    let id = orderSnap.key;
    let o = orderSnap.val();

    let div = document.createElement("div");
    div.className = "orderCard";

    div.innerHTML = `
      <b>Shop:</b> ${o.shopkeeper}<br>
      <b>Items:</b> ${JSON.stringify(o.items)}<br>
      <b>Total:</b> ₹${o.total}<br>
      <b>Status:</b> <b>${o.status}</b><br>

      <button class="orderBtn accept" onclick="updateStatus('${id}','Accepted')">Accept</button>
      <button class="orderBtn deliver" onclick="updateStatus('${id}','Delivered')">Delivered</button>
    `;

    box.appendChild(div);
  });
});

// Update order status
window.updateStatus = function(orderId, status) {
  update(ref(db, "orders/" + orderId), {
    status: status
  });
};
