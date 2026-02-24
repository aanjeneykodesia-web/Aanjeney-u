import { db } from "./firebase.js";
import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.adminLoad = function(){
  onSnapshot(collection(db,"orders"),snap=>{
    document.getElementById("totalOrders").innerText = snap.size;
  });
};
