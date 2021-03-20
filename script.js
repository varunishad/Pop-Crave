var navclick = document.getElementsByClassName("nav-link");
var search = document.getElementById("srch");
var card = document.getElementsByClassName("card");
var filterbtn = document.getElementsByClassName("filterbtn");
var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");


$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");

  });
})

function removeActiveBtn() {
  for (let j = 0; j < filterbtn.length; j++) {
    filterbtn[j].classList.remove("active");
  }
}

// Input Button on enter

inp1.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#srch").click();
    removeActiveBtn();
    document.getElementById("store").click();
    inp2.value = inp1.value;
  }
});
inp2.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#srch").click();
    removeActiveBtn();
    inp1.value = "";
  }
});

var elm = document.createElement("div");
var p = document.createElement("p");
var count = 0;
search.addEventListener("click", function () {
  var filter = inp1.value.toUpperCase() || inp2.value.toUpperCase();
  var h5 = document.getElementsByTagName("h5");
  for (var i = 0; i < h5.length; i++) {
    var txt = h5[i].textContent || h5[i].innerText;

    if (txt.toUpperCase().indexOf(filter) > -1) {

      h5[i].parentNode.parentNode.style.display = "block";
    } else {
      h5[i].parentNode.parentNode.style.display = "none";
    }
  }
  for (let j = 0; j < card.length; j++) {
    if (card[j].style.display === "block") {
      count += 1;
    }
  }
  //search response
  elm.classList.add("justify-content-center", "input-group", "searchResult");
  p.id = "result";
  elm.appendChild(p);
  p.innerText = `"${count}" results for "${filter}"`;

  var child3 = document.getElementById("explore");
  child3.insertBefore(elm, child3.children[3]);
  count = 0;
});

function deleteResultDiv() {
  if (document.getElementsByClassName("searchResult").length > 0) {
    document.getElementById("result").parentElement.remove();
  }
}

// Filter Buttons

filterbtn[0].addEventListener("click", function () {
  for (var j = 0; j < filterbtn.length; j++) {
    filterbtn[j].className = filterbtn[j].className.replace("active", "");
  }
  this.className += " active";
  for (var i = 0; i < card.length; i++) {
    if (card[i].classList.contains("all")) {
      card[i].style.display = "block";
    }
  }
  deleteResultDiv()
});

filterbtn[1].addEventListener("click", function () {
  for (var j = 0; j < filterbtn.length; j++) {
    filterbtn[j].className = filterbtn[j].className.replace("active", "");
  }
  this.className += " active";
  for (var i = 0; i < card.length; i++) {
    if (card[i].classList.contains("cake")) {
      card[i].style.display = "block";
    } else {
      card[i].style.display = "none";
    }
  }
  deleteResultDiv()
});

filterbtn[2].addEventListener("click", function () {
  for (var j = 0; j < filterbtn.length; j++) {
    filterbtn[j].className = filterbtn[j].className.replace("active", "");
  }
  this.className += " active";
  for (var i = 0; i < card.length; i++) {
    if (card[i].classList.contains("cupcake")) {
      card[i].style.display = "block";
    } else {
      card[i].style.display = "none";
    }
  }
  deleteResultDiv()
});

filterbtn[3].addEventListener("click", function () {
  for (var j = 0; j < filterbtn.length; j++) {
    filterbtn[j].className = filterbtn[j].className.replace("active", "");
  }
  this.className += " active";
  for (var i = 0; i < card.length; i++) {
    if (card[i].classList.contains("sweet")) {
      card[i].style.display = "block";
    } else {
      card[i].style.display = "none";
    }
  }
  deleteResultDiv()
});

filterbtn[4].addEventListener("click", function () {
  for (var j = 0; j < filterbtn.length; j++) {
    filterbtn[j].className = filterbtn[j].className.replace("active", "");
  }
  this.className += " active";
  for (var i = 0; i < card.length; i++) {
    if (card[i].classList.contains("chocolate")) {
      card[i].style.display = "block";
    } else {
      card[i].style.display = "none";
    }
  }
  deleteResultDiv()
});

// adding modal

for (var l = 1; l < card.length + 1; l++) {
  // console.log(l);
  // var card = document.getElementsByClassName("card");
  var cardTitle = card[l - 1].children[1].children[0].innerText;
  var cardImg = card[l - 1].children[0].children[0].src
  // console.log(l.toString().length)

  // if(l.toString().length === 1)
  document.getElementById("cards").innerHTML += `<div class="modal fade" id="exampleModalCenter${l}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle${l}" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
   <div class="modal-content">
    <div class="modal-header">
     <h5 class="modal-title" id="exampleModalLongTitle${l}"> ${cardTitle} </h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
   </button>
 </div>
 <div class="modal-body">
   <img src="${cardImg}" class="img-fluid" alt="...">
 </div>
</div>
</div>
</div>`
}

//  -------- To access all the elements one by one and perform an action (Imp) -------

// Add item to cart

const storeItem = document.querySelectorAll(".store-item-icon");

storeItem.forEach(function (item) {
  item.addEventListener("click", function (event) {
    var x = event.target
    var img_src = x.parentElement.parentElement.children[0].src;
    var item_name = x.parentElement.parentElement.nextElementSibling.children[0].textContent
    var price = x.parentElement.parentElement.nextElementSibling.children[1].children[1].textContent;
    price = parseInt(price);

    delete_item = document.querySelectorAll(".cart-item-remove");
    var cart = document.getElementById("cart");
    var newDiv = document.createElement("div");
    var cart_item = document.getElementsByClassName(".cart-item");

    newDiv.id = "data-" + (cart_item.length + 1);

    newDiv.innerHTML = `<img src="${img_src}" alt="..." class="img-fluid rounded-circle"><div class="item-text w-50">
    <p id="cart-item-title" class="txt mb-0">${item_name}</p>
    <span>₹</span>
    <span id="cart-item-price" class="cart-item-price">${price}</span></div><a href="#" id="${newDiv.id}" class="cart-item-remove" onclick="deleteIt(${cart_item.length + 1})"><i class="fa fa-trash"></i></a>`

    newDiv.classList.add("cart-item", "d-flex", "justify-content-between", "text-capitalize", "mb-4");
    cart.insertBefore(newDiv, cart.childNodes[0]);

    myEstimate();

    // modal 

    var modal = document.getElementsByClassName("modal");
    var dTar = x.parentElement.parentElement.parentElement.dataset.target;
    var index = dTar.substring(19); // to get the index from the data-target attribute of each card

    modal[index - 1].id = "#";
    alert("item added to cart");

    setTimeout(function () {
      modal[index - 1].id = `exampleModalCenter${index}`;
    }, 300);
  })
})

// Estimate amount

function myEstimate() {
  var total = document.querySelectorAll(".item-total");
  var item_count = document.getElementById("item-count");
  var cart_item = document.querySelectorAll(".cart-item");
  var checkOut = document.getElementById("checkoutBtn");
  var estimate = 0;

  cart_item.forEach(function (x) {
    x = x.children[1].children[2].innerText;
    estimate += parseInt(x);
  });

  total.forEach(function (y) {
    y.innerText = estimate
  });
  item_count.innerText = cart_item.length

  // Checkout
  if (document.getElementsByClassName("cart-item").length === 0) {
    checkOut.href = "#";
    document.getElementById("cart").classList.remove("show-cart");
    // checkOut.style.display = "none"
  } else {
    checkOut.href = "https://rzp.io/l/EFVekB5";
  }
}

// delete Item

function deleteIt(z) {
  document.getElementById("data-" + z).remove();
  myEstimate();
}

// showcart 

document.getElementById("top-btn").addEventListener("click", function () {
  if (document.getElementsByClassName("cart-item").length === 0) {
    document.getElementById("cart").classList.remove("show-cart");
  } else {
    document.getElementById("cart").classList.toggle("show-cart");
  }
})

// Clear Cart 

document.getElementById("clear-cart").addEventListener("click", function () {
  document.querySelectorAll(".cart-item").forEach(function (x) {
    x.remove();
    myEstimate();
  })
})

// var allCards = document.querySelectorAll(".card");
// allCards.forEach(function(xyz){
//   xyz.addEventListener("click",function(eve){
//     eve.target.
//   })
// })

myEstimate();