'use strict';
var cartItem=0;
// Set up an empty cart for use on this page
function Cart (newItem){
this.cart = newItem; 
this.amount=0;
Cart.all.push(this); 

}
Cart.all =[];
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (let i = 0; i < names.length; i++) {
    var opE1 = document.createElement('option');
    selectElement.appendChild(opE1);
    opE1.textContent= names[i].split('.',1);

  }
 }

function addSelectedItemToCart(){

  var newChartData = JSON.stringify(Cart.all);
    localStorage.setItem('cartItems',newChartData);
}
function saveToLocalStorage(){
  
  var newBroughtData = localStorage.getItem('cartItems');
  if(newBroughtData){
      Products.all = JSON.parse(newBroughtData);

      renderlist();
      
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function renderlist()
{
  var s = document.getElementById('items');
  var qunity=document.getElementById("quantity").value;
  
  var text = s[s.selectedIndex].text;
  var output=document.getElementById("cartContents");
  var ulE1  = document.getElementById('ourList');
  output.appendChild(ulE1);
    var liE1 = document.createElement('li');
    ulE1.appendChild(liE1);    
liE1.textContent= `${text} and it has ${qunity}`;
new Cart(text);
  }



var numberOfItemsIserted=0;

function handleSubmit(event) {
  event.preventDefault();
  
  cartItem++;
  // Do all the things ...
  
  renderlist();
  // cart.saveToLocalStorage();
  addSelectedItemToCart();
  // updateCounter();
  
  var value =document.getElementById("totalitems");
 value.textContent = `(${cartItem})`;
  // updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
// function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
// }

// TODO: Update the cart count in the header nav with the number of items in the Cart
// function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
// function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
// }

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.

saveToLocalStorage();
populateForm();