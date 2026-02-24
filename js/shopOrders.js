// js/shopOrders.js
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let cart = [];
let totalPrice = 0;

window.addToCart = function() {
  let name = document.getElementById("productName").value;
  let qty = Number(document.getElementById("productQty").value);

  if(!name || !qty) return alert("Enter product and quantity");

  cart.push({name, qty});
  totalPrice += qty * 10; // demo price

  document.getElementById("totalPrice").innerText = "₹" + totalPrice;

  let list = document.getElementById("cartList");
  list.innerHTML = "";
  cart.forEach(i => list.innerHTML += `<li>${i.name} - ${i.qty}</li>`);
};

window.sendConfirmedOrder = async function() {
  await addDoc(collection(db, "orders"), {
    items: cart,
    totalPrice: totalPrice,
    status: "Pending",
    time: Date.now()
  });

  alert("Order Sent to Firebase");
  cart = [];
  totalPrice = 0;
  document.getElementById("cartList").innerHTML = "";
  document.getElementById("totalPrice").innerText = "₹0";
};
