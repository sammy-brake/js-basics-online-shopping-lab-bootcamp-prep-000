var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item ; 
  var itemPrice = Math.floor(Math.random() *100) ; 
 var object = {[itemName]: itemPrice} ; 
  cart.push(object) ; 
  console.log(`${itemName} has been added to your cart.`);
  return cart;
 
}



function viewCart() {
  cart  = [];
 
 var i = cart.length;

if(i === 0) {
console.log("Your shopping cart is empty.");
}

if(i===1) {
console.log(`In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`);
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
