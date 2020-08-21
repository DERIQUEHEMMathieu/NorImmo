let area = document.getElementById("area-input");
let bedroom = document.getElementById("bedroom-select");
let materials = document.getElementsByName("material-radio");
let estimateBtn = document.getElementById("estimate-button");

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

const showEstimation = () => {
    let result = estimate();
    result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    document.getElementById("estimate-span").className = "d-inline";
    document.querySelectorAll("#estimate-span strong")[0].innerText = `${result} €` ;
}

estimateBtn.addEventListener("click", showEstimation);
