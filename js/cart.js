/* global Cart */
'use strict';
var outerList = document.querySelector('#ourList').length; 
console.log(outerList);
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

// function loadCart() {
  // var cartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
  // cart = new Cart(cartItems);
// }

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var rowCount = table.rows.length;
for (var x=rowCount-1; x>0; x--) {
   myTable.deleteRow(x);
}
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tbodys= document.getElementById("tbody");

  // TODO: Iterate over the items in the cart
  for(var i=0;i<=cartItems.length;i++)
  {

    var TrE1=document.createElement("tr");
    tbodys.appendChild(TrE1);
    var tdE1=document.createElement("td");
    var tdE2=document.createElement("td");
    var tdE3=Document.createElement("td");
    TrE1.appendChild(tdE1);
    TrE1.appendChild(tdE2);
    TrE1.appendChild(tdE3);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {


  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  localStorage.removeItem('cartItem');

  // TODO: Save the cart back to local storage
  localStorage.setItem("cart",cart);
  // TODO: Re-draw the cart table
  showCart();


}

// This will initialize the page and draw the cart on screen
renderCart();
