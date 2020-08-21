let cardsHeader = document.getElementsByClassName("card-header");
let arrows = document.querySelectorAll(".card span");


for (let i = 0 ; i < cardsHeader.length; i++) {
    cardsHeader[i].addEventListener('click', () => {
        cardsHeader[i].nextElementSibling.classList.toggle("d-none");
        cardsHeader[i].children[1].innerText == "+" ? cardsHeader[i].children[1].innerText = "-" : cardsHeader[i].children[1].innerText = "+";
    });
 }