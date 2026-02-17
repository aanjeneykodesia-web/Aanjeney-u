import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.placeOrder = async function(){
  let product = document.getElementById("product").value;
  let price = document.getElementById("price").value;
  await addDoc(collection(db,"orders"), {product, price, status:"Pending"});
  alert("Order Sent!");
};
