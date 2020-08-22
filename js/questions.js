let cardsHeader = document.getElementsByClassName("card-header");

for (let i = 0 ; i < cardsHeader.length; i++) {
    cardsHeader[i].addEventListener('click', () => {
        cardsHeader[i].children[1].innerText == "+" ? cardsHeader[i].children[1].innerText = "-" : cardsHeader[i].children[1].innerText = "+";
        cardsHeader[i].nextElementSibling.style.height === "0px" ? cardsHeader[i].nextElementSibling.style.height = cardsHeader[i].nextElementSibling.scrollHeight + "px" : cardsHeader[i].nextElementSibling.style.height = "0px";
    });
}