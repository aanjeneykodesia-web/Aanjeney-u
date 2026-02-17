import { db } from "./firebase.js";
import { collection, onSnapshot, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.loadOrders = function(){
  onSnapshot(collection(db,"orders"), snap=>{
    let html="";
    snap.forEach(d=>{
      let o=d.data();
      html += `<p>${o.product} ₹${o.price} - ${o.status}
      <button onclick="approve('${d.id}')">Approve</button></p>`;
    });
    document.getElementById("orders").innerHTML=html;
  });
};

window.approve = async function(id){
  await updateDoc(doc(db,"orders",id),{status:"Approved"});
};
