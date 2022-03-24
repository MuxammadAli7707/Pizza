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
const elOutput = document.querySelector("#output__list");

let elSub = document.getElementById("sub");
let elTax = document.getElementById("tax");
let elTotal = document.getElementById("total");


let newPizzaArray = [];

elArray.forEach(element => {
  let elItems = document.createElement("li");
  elItems.className = "menu__item d-flex animate__animated animate__fadeInUp"
  elItems.innerHTML = `
    <div class="menu__img-box">
            <img class="menu__img" src="https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg" alt="pizza">
          </div>
         <div class="menu__desc">
          <h3 class="menu__name">${element.name}</h3>
          <p class="menu__cost">${element.price}</p>
          <button class="menu__btn" onclick='addItem(${element.id})'>Add to Cart</button>
         </div>
    `;
  elList.appendChild(elItems);
});

function addItem(listId) {
  newPizzaArray.push(elArray.filter((element) => element.id === listId)[0]);
  addCart(newPizzaArray);
}

function addCart(cartPizzaArray) {
  let arr = cartPizzaArray;
  let topArr = [];

  arr.forEach((element) => {
    if (arr != "") topArr.push(arr[0]);
    arr = arr.filter((el) => {
      return arr[0].id != el.id;
    });
  });

  let li = 0;
  let listArr = [];

  let sub = 0;
  let tax = 0;
  let total = 0;

  topArr.forEach((element) => {
    let count = cartPizzaArray.filter((item) => {
      return item.id == element.id;
    });
    li = `
    <li class="menu__item d-flex position-relative">
    <div class="menu__img-box">
            <img class="menu__img" src="https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg" alt="pizza">
          </div>
         <div class="menu__desc">
         <h3 class="menu__name">${element.name}</h3>
         <p class="menu__cost">${element.price}</p>

         <span id="total" class="count">${count.length}</span>
         <button class="menu__btn" onclick='remove(${element.id})'>Remove order</button>
         </div>
    </li>
    `;

    cartPizzaArray.forEach((item) => {
      sub += item.price;
      tax = sub * 10 / 100;
      total = (sub + tax);
    });
  
    elSub.textContent = sub.toFixed(2);
    elTax.textContent = tax.toFixed(2);
    elTotal.textContent = total.toFixed(2);

    listArr.push(li);
    elOutput.innerHTML = listArr.join("");
  });
}

function remove(elId) {
  let a = 0;
  let massArry = [];

  newPizzaArray.forEach((el) => {
    if(el.id === elId && a === 0) {
      a++;
    } else {
      massArry.push(el);
    }
  });

  newPizzaArray = massArry;

  if(newPizzaArray.length === 0) {
    elOutput.innerHTML = "";
    sub = 0;
    tax = 0;
    total = 0;

    elSub.textContent = sub.toFixed(2);
    elTax.textContent = tax.toFixed(2);
    elTotal.textContent = total.toFixed(2);
  } else {
    addCart(newPizzaArray);
  }
}



//   for (let i = 0; i < elArray.length; i++) {
//   let elItems = document.createElement("li");
//   elItems.className = "menu__item d-flex animate__animated animate__fadeInUp"
//   elItems.innerHTML = `
//     <div class="menu__img-box">
//             <img class="menu__img" src="https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg" alt="pizza">
//           </div>
//          <div class="menu__desc">
//           <h3 class="menu__name">${elArray[i].name}</h3>
//           <p class="menu__cost">${elArray[i].price}</p>
//           <button class="menu__btn" onclick='addItem(${elArray[i].id})'>Add to Cart</button>
//          </div>
//     `;
//   elList.appendChild(elItems);
// }

// let newPizzasArr = [];
// function addItem(id) {
//   for (let i = 0; i < elArray.length; i++) {
//     if (id == elArray[i].id) {
//       newPizzasArr.push(elArray[i]);
//     }
//   }

//   for (let i = 0; i < newPizzasArr.length; i++) {
//     if (i == newPizzasArr.length - 1) {
//       let li = document.createElement("li");
//       li.className = "menu__item d-flex animate__animated animate__fadeInUp";
//       li.innerHTML = `
//             <div class="menu__img-box">
//               <img class="menu__img" src="https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg" alt="pizza">
//             </div>
//            <div class="menu__desc">
//             <h3 class="menu__name">${newPizzasArr[i].name}</h3>
//             <span id="total" class="count">${newPizzasArr.length}</span>
//             <p class="menu__cost">${newPizzasArr[i].price}</p>
//             <button id="delBtn" class="menu__btn" onclick='removeItem(${i})'>Remove order</button>
//            </div>
//     `;
//       sub += newPizzasArr[i].price;
//       elSub.textContent = sub.toFixed(2);
//       tax = sub * 10 / 100;
//       elTax.textContent = tax.toFixed(2);
//       total = (sub + tax);
//       elTotal.textContent = total.toFixed(2);

//       elOutput.appendChild(li);
//     }
//   }
// }


// function removeItem(index) {
//   let newArrRemove = [];

//   for (let i = 0; i < newPizzasArr.length; i++) {
//     if (index != i) {
//       newArrRemove.push(newPizzasArr[i]);
//     }
//   }

//   newPizzasArr = newArrRemove;

//   elOutput.innerHTML = "";
//   sub = 0;
//   tax = 0;
//   total = 0;

//   for (let i = 0; i < newPizzasArr.length; i++) {
//     let li = document.createElement("li");
//     li.className = "menu__item d-flex animate__animated animate__fadeInUp";
//     li.innerHTML = `
//           <div class="menu__img-box">
//           <img class="menu__img" src="https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg" alt="pizza">
//         </div>
//       <div class="menu__desc">
//         <h3 class="menu__name">${newPizzasArr[i].name}</h3>
//         <span id="total" class="count">${newPizzasArr.length}</span>
//         <p class="menu__cost">${newPizzasArr[i].price}</p>
//         <button id="delBtn" class="menu__btn d-flex" onclick='removeItem(${i})'>Remove order</button>
//       </div>
//     `;
//     sub += newPizzasArr[i].price;
//     elSub.textContent = sub.toFixed(2);
//     tax = sub * 10 / 100;
//     elTax.textContent = tax.toFixed(2);
//     total = (sub + tax);
//     elTotal.textContent = total.toFixed(2);
//     elOutput.appendChild(li);
//   }

//   if(newPizzasArr.length == 0){
//     sub = 0;
//     tax = 0;
//     total = 0;
//     elSub.textContent = sub.toFixed(2);
//     elTax.textContent = tax.toFixed(2);
//     elTotal.textContent = total.toFixed(2);
//   }
// }
