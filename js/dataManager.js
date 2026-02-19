// ===============================
// GLOBAL DATA STORE
// ===============================
let products = [];
let priceList = {};

// ===============================
// LOAD PRICE LIST (from price.json converted from price.pdf)
// ===============================
fetch("price.json")
  .then(res => res.json())
  .then(data => {
    priceList = data;
    console.log("Price list loaded:", priceList);
  });

// ===============================
// ADD PRODUCT FUNCTION
// ===============================
function addProduct(name, quantity) {
  let price = priceList[name] || 0;

  let product = {
    name: name,
    quantity: quantity,
    price: price,
    total: price * quantity
  };

  products.push(product);
  saveToFirebase(product);
  updateTotal();
}

// ===============================
// TOTAL PRICE CALCULATION
// ===============================
function updateTotal() {
  let total = 0;
  products.forEach(p => total += p.total);

  document.getElementById("totalPrice").innerText = "₹" + total;
}

// ===============================
// SEND DATA TO FIREBASE
// ===============================
function saveToFirebase(product) {
  if (!window.firebase) {
    console.log("Firebase not connected. Data stored locally.");
    return;
  }

  firebase.database().ref("orders/").push(product);
}

// ===============================
// EXPORT DATA TO OTHER FILES
// ===============================
function getProducts() {
  return products;
}
