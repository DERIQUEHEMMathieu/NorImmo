let area = document.getElementById("area-input");
let bedroom = document.getElementById("bedroom-select");
let materials = document.getElementsByName("material-radio");
let estimateBtn = document.getElementById("estimate-button");

// Calculate cost of the project
const estimate = () => {
    let chosenMaterialValue = "";
    let subTotal = area.value * 1000 + bedroom.value * 10000;

    for(material of materials){
        if(material.checked){
            chosenMaterialValue =  material.value;
        }
    }

    if(chosenMaterialValue === "parpaing") return subTotal + subTotal * 20/100;
    else if(chosenMaterialValue === "bois") return subTotal + subTotal * 15/100;
    else return subTotal + subTotal * 30/100;
}

// Show price with delay and transitions
const showEstimation = () => {
    let price = document.querySelectorAll("#estimate-span strong")[0];
    let result = estimate();

    price.innerText = ' ' ;
    price.style.fontSize = "1px"; // 'reset' for several estimations
    result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // add space every 3 digits
    document.getElementById("estimate-span").style.opacity = "1";
    setTimeout(() => { 
        price.innerText = `${result} €` ;
        price.style.fontSize = "1rem";
    }, 500);
}

estimateBtn.addEventListener("click", showEstimation);
