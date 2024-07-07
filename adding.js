var nom = document.querySelector("#nom");
var marque = document.querySelector("#marque");
var prix = document.querySelector("#prix");

var add = document.querySelector(".add");
var sort = document.querySelector(".sort");
var card = document.querySelector(".card");
var mycards = document.querySelector(".mycards");

let count = 0;

// function gereTout() {
//     var newCard = card.cloneNode(true)

//     newCard.style.display ="block" // la rendre visible

//     mycards.appendChild(newCard)

//    var mynom = newCard.querySelector(".mynom")
//    mynom.textContent = nom.value

//    var mymark = newCard.querySelector(".mymark")
//    mymark.textContent = marque.value

//    var myprix = newCard.querySelector(".myprix")
//    myprix.textContent = prix.value.concat("f")

//     mycards.style.display="flex"

// }
var tab = [];
add.addEventListener("click", () => {
  var newCard = card.cloneNode(true);

  newCard.style.display = "block"; // la rendre visible

  mycards.appendChild(newCard);

  var mynom = newCard.querySelector(".mynom");
  mynom.textContent = nom.value;

  var mymark = newCard.querySelector(".mymark");
  mymark.textContent = marque.value;

  var myprix = newCard.querySelector(".myprix");
  myprix.textContent = prix.value.concat("f");

  mycards.style.display = "flex";

  tab.push(newCard);


// deleteChild()

});

var inorder = [];

sort.addEventListener("click", () => {
  tab.forEach((card) => {
    var price = card.querySelector(".myprix").textContent;
    price = parseInt(price.slice(0, -1));

    inorder.push({ card, price });
    inorder.sort((a, b) => a.price - b.price);
  });



  inorder.forEach((order) => {
    mycards.appendChild(order.card);
  });
});




// function deleteChild() {
//   var precedentCard = null
//   tab.forEach(card=>{
//     precedentCard=card
//     var count=0
  
//     card.addEventListener("click",()=>{

//       if (precedentCard!==null && precedentCard!==card) {
//         count=0
//       }
//       count++
  
//       if (count===2) {
//         mycards.removeChild(card)
//       }
      


      






//     })


//   })

  
// }
