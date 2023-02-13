document.addEventListener("DOMContentLoaded", () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);

      const dataArray = [data[5], data[6], data[7]];
      const parentDiv = document.querySelector(".productcont");
      const childrenDiv = document.querySelectorAll(".product");

      for (let i = 0; i < dataArray.length; i++) {
        childrenDiv[i].innerHTML = `
            <h3 class="productname">${dataArray[i].title}</h3>
            <p>${dataArray[i].description}</p>
            <p class="price">$${dataArray[i].price}</p>
            <button class="addtocart">Add To Cart</button>
        `;
      }

      const product1 = document.getElementsByClassName("productname")[0];
      const product2 = document.getElementsByClassName("productname")[1];
      const product3 = document.getElementsByClassName("productname")[2];

      const price1 = document.getElementsByClassName("price")[0];
      const price2 = document.getElementsByClassName("price")[1];
      const price3 = document.getElementsByClassName("price")[2];

      const cartContainer = document.querySelector(".cart-container");
      const cartTable = document.getElementById("carttable");
      const buttons = document.getElementsByClassName("addtocart");
      console.log(buttons);

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
          
          const tr = document.createElement("tr");
          const td1 = document.createElement("td");
          const td2 = document.createElement("td");

          cartTable.appendChild(tr);
          cartTable.appendChild(td1);
          cartTable.appendChild(td2);

          if(buttons[i] === buttons[0]) {
            td1.textContent = product1.textContent;
            td2.textContent = price1.textContent;
          } if(buttons[i] === buttons[1]) {
            td1.textContent = product2.textContent;
            td2.textContent = price2.textContent;
          } if(buttons[i] === buttons[2]) {
            td1.textContent = product3.textContent;
            td2.textContent = price3.textContent;
          }
        });
      }

      document.getElementById("emptycart").addEventListener("click", () => {
        tr.remove;
      })
    });
});
