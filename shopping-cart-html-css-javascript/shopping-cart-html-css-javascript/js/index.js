//Get product elements
const firstProductName = document.getElementsByClassName("productname")[0];
const secondProductName = document.getElementsByClassName("productname")[1];
const thirdProductName = document.getElementsByClassName("productname")[2];


//Get descriptions
const firstProductDiv = document.getElementsByClassName("product")[0];
const firstProductDesc = firstProductDiv.getElementsByTagName("p")[0];

const secondProductDiv = document.getElementsByClassName("product")[1];
const secondProductDesc = secondProductDiv.getElementsByTagName("p")[0];

const thirdProductDiv = document.getElementsByClassName("product")[2];
const thirdProductDesc = thirdProductDiv.getElementsByTagName("p")[0];


//Get prices
const firstPrice = document.getElementsByClassName("price")[0];

const secondPrice = document.getElementsByClassName("price")[1];

const thirdPrice = document.getElementsByClassName("price")[2];

// GET ALL BUTTONS

//Add to cart button

const addToCartButton1 = document.getElementsByClassName("addtocart")[0];
// console.log(addToCartButton1);

const addToCartButton2 = document.getElementsByClassName("addtocart")[1];
// console.log(addToCartButton2);

const addToCartButton3 = document.getElementsByClassName("addtocart")[2];
// console.log(addToCartButton3);

//Empty cart button

const emptyCartButton = document.getElementById("emptycart");
// console.log(emptyCartButton);

//Checkout button

const checkoutButton = document.getElementById("checkout");
// console.log(checkoutButton);

//FETCH products,descriptions and prices from API

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    //product titles
    firstProductName.textContent = data[5].title;
    secondProductName.textContent = data[6].title;
    thirdProductName.textContent = data[7].title;
    

    //product descriptions
    firstProductDesc.textContent = data[5].description;
secondProductDesc.textContent = data[6].description;
thirdProductDesc.textContent = data[7].description;

    //product prices

    firstPrice.textContent = `$${data[5].price}`;
secondPrice.textContent = `$${data[6].price}`;
thirdPrice.textContent = `$${data[7].price}`;

  //add to shopping cart click event

const shoppingCart = document.getElementById("carttable");
console.log(shoppingCart);
 //elements to be added

 //create table elements withing the shopping cart
// const row = document.createElement("tr");
// const td = document.createElement("td");
// td.textContent = firstProductName.textContent;

//     const shoppingCart = document.getElementById("carttable");
// console.log(shoppingCart);
//     const row = document.createElement("tr");
//     const td = document.createElement("td");
//     row.appendChild(td);
//     shoppingCart.appendChild(row);


  });








// Add to cart - eventlisteners when clicked

// for(let i = 0, i < addToCartButtons.length, i++) {
//     addToCartButtons[i]
// }
