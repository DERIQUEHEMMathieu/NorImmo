let lastnameInput = document.getElementById("lastnameInput");
let firstnameInput = document.getElementById("firstnameInput");
let phoneNumber = document.getElementById("phoneNumberInput");
let messageInput = document.getElementById("userMessage");
let maxCharactersLeft  = document.getElementById("maxCharactersLeft");
let create = document.getElementsByTagName("main")[0];

let errorMessage = document.createElement("p");
errorMessage.style.backgroundColor = "red";
errorMessage.style.width = "400px";
errorMessage.style.color = "yellow";
errorMessage.style.fontFamily = "boild";
errorMessage.style.display = "flex";
errorMessage.style.justifyContent = "center";
errorMessage.style.marginLeft = "22em";

create.appendChild(errorMessage);
errorMessage.style.marginTop = "1em";

// Regex pour repérer les mots bannis et insensible à la casse
const BANNEDWORDS = /\b(con|connard|sex|sexe)\b/gi;
// Regex vérification numéro de téléphone
const PHONEREGEX = /^0[6,7]{1}[0-9]{8}/g;
const MESSAGEMAXLENGTH = 400;

// Détection de digits dans les chaînes de caractères
function number (myString){
    return /\d/.test(myString);
}

// Détection des mots bannis
function forbiddenWords (myString){
    return BANNEDWORDS.test(myString);
}

// Décompte du nombre de caractères disponibles restants
messageInput.addEventListener("keypress", function(){
    let currentLength = MESSAGEMAXLENGTH - this.value.length - 1;
    console.log(`nombre de lettres dans le msg ${this.value.length}`);
    if (currentLength < 400){
        this.style.borderColor = "green";
    } else {
        this.style.borderColor = "red";
    }
    maxCharactersLeft.innerHTML = currentLength + " caractères restant (max 400)";
});

function submit() {
    errorMessage.innerText = "";
    if (number(lastnameInput.value) || lastnameInput.value.length < 2 || lastnameInput.value.length > 50){
        lastnameInput.style.borderColor = "red";
        errorMessage.innerText += "Veuillez renseigner un nom valide (2 à 50 lettres)\n";
    } else {
        lastnameInput.style.borderColor = "green";
    }
    if (number(firstnameInput.value) || firstnameInput.value.length < 2 || firstnameInput.value.length > 50){
        firstnameInput.style.borderColor = "red";
        errorMessage.innerText += "Veuillez renseigner un prénom valide (2 à 50 lettres)\n";
    } else {
        firstnameInput.style.borderColor = "green";
    }

    if (!PHONEREGEX.test(phoneNumber.value)){
        phoneNumber.style.borderColor = "red";
        errorMessage.innerText += "Veuillez renseigner un numéro de téléphone valide\n";
    } else {
        phoneNumber.style.borderColor = "green";
    }
    if(messageInput.value.length > MESSAGEMAXLENGTH){
        errorMessage.innerText += "Vous avez dépassé le nombre maximal de caratères autorisés\n";
    }
    if(forbiddenWords(messageInput.value)){
        errorMessage.style.width = "800px";
        errorMessage.style.marginLeft = "9em";
        errorMessage.innerText += "ATTENTION ! Ce site est protégé et vous avez utilisé un / des mot(s) interdit(s) [sex, sexe, con, connard]\n";
    }
}