import { db } from "./firebase.js";
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.loadApproved = function(){
  const q=query(collection(db,"orders"),where("status","==","Approved"));
  onSnapshot(q,snap=>{
    let html="";
    snap.forEach(d=>{
      let o=d.data();
      html += `<p>Deliver: ${o.product} ₹${o.price}</p>`;
    });
    document.getElementById("deliveries").innerHTML=html;
  });
};
