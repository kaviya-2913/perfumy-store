// ===== SHOP NOW BUTTON =====

let shopBtn =
document.querySelector(".hero-content button");

shopBtn.addEventListener("click",function(){

alert(
"Welcome to Perfumy Store 🌸"
);

});



// ===== BUY NOW BUTTON =====

let buyButtons =
document.querySelectorAll(".product-card button");

buyButtons.forEach(function(btn){

btn.addEventListener("click",function(){

alert(
"Perfume added to cart 🛒"
);

});

});



// ===== SEARCH =====

let search =
document.getElementById("search");

search.addEventListener("keyup",

function(){

let value =
search.value.toUpperCase();

let cards =
document.querySelectorAll(
".product-card"
);

cards.forEach(function(card){

let name =
card.querySelector("h3")
.textContent.toUpperCase();

if(name.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});



// ===== DARK MODE =====

let mode =
document.getElementById("mode");

mode.addEventListener("click",

function(){

document.body.classList.toggle(
"dark"
);

});