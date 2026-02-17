import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.registerUser = async function(role){
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  await addDoc(collection(db, role), {name, mobile, time:new Date()});
  alert("Registered!");
};
