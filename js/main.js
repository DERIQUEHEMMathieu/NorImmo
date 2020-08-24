
let slide = ['img/maison1.jpg', 'img/maison2.jpg', 'img/maison3.jpg', 'img/maison4.jpg'];
let numero = 0;
var i= 0;
let time = 4000;

/**
 * 
//  * @param {Number} sens - Valeurs possibles (-1, 1)
//  */
// function ChangeSlide(sens) {
//     numero = numero + sens;
//     if (numero < 0)
//         numero = slide.length - 1;
//     if (numero > slide.length - 1)
//         numero = 0;
//     document.getElementById("img").src = slide[numero];
// }
document.querySelector("#slider div:first-of-type").addEventListener("click", ()=>{ // on recupere le boutton en js et on lui applique une fonction au click
    numero--;
    if(numero < 0){
        numero = slide.length -1;
    }
    document.getElementById("img").src = slide[numero]
})

document.querySelector("#slider div:last-of-type").addEventListener("click", ()=>{// on recupere le boutton en js et on lui applique une fonction au click
    numero++;
    if(numero > slide.length -1){
        numero = 0;
    }
    document.getElementById("img").src = slide[numero]
})

function AutoChange(){
    document.getElementById("img").src  = slide[i]; // Initialise la premiere source de l'image a slide[0]
    if (i < slide.length -1){ //Parcourir le tableau 
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("AutoChange()", time); // utilisation de setTimeOut pour changer toutes les "time" secondes
}

window.onload = AutoChange; // Lancer la fonction quand la page est chargée 



