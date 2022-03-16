let elArray = [{
    image: "https://quizzical-murdock-fa5953.netlify.app/img/pizza1.png",
    name: "Peperoni",
    price: 2.23,
    id: 1,
  },

  {
    image: "https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg",
    name: "Cheessy",
    price: 5.99,
    id: 2,
  },

  {
    image: "https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg",
    name: "Margaritta",
    price: 6.99,
    id: 3,
  },

  {
    image: "https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg",
    name: "Hawaiin",
    price: 7.99,
    id: 4,
  }

];


const elList = document.querySelector("#list");

for (let i = 0; i < elArray.length; i++) {
  let elItems = document.createElement("li");
  elItems.className = "menu__item d-flex"
  elItems.innerHTML = `
    <div class="menu__img-box">
            <img class="menu__img" src="https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg" alt="pizza">
          </div>
         <div class="menu__desc">
          <h3 class="menu__name">${elArray[i].name}</h3>
          <p class="menu__cost">${elArray[i].price}</p>
          <button class="menu__btn addBtn">Add to Cart</button>
         </div>
    `
  elList.appendChild(elItems);
}


const elOutput = document.querySelector("#output__list");
const elAddBtn = document.querySelectorAll(".addBtn");

let elSub = document.getElementById("sub");
let elTax = document.getElementById("tax");
let elTotal = document.getElementById("total");

let sub = 0;
let tax = 0;
let total = 0;



for (let i = 0; i < elAddBtn.length; i++) {
  elAddBtn[i].addEventListener("click", () => {
    let li = document.createElement("li");

    li.className = "menu__item d-flex"
    li.innerHTML = `
    <div class="menu__img-box">
            <img class="menu__img" src="https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg" alt="pizza">
          </div>
         <div class="menu__desc">
          <h3 class="menu__name">${elArray[i].name}</h3>
          <p class="menu__cost">${elArray[i].price}</p>
          <button id="delBtn" class="menu__btn">Remove order</button>
         </div>
    `
    elOutput.appendChild(li);

    sub += elArray[i].price;
    elSub.textContent = sub.toFixed(2);

    tax = sub * 10 / 100;
    elTax.textContent = tax.toFixed(2);

    total = (sub + tax);
    elTotal.textContent = total.toFixed(2);


    let elDel = document.querySelectorAll("#delBtn");

    for(let j = 0; j < elDel.length; j++){
      elDel[j].addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();  


        sub -= elArray[i].price;
        elSub.textContent = sub.toFixed(2);
        console.log(elSub);
    
        tax = s * 10 / 100;
        elTax.textContent = tax.toFixed(2);
    
        total = (s - t);
        elTotal.textContent = total.toFixed(2);
      });
    }

  });

}