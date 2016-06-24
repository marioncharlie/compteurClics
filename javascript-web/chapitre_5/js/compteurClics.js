var nombreClics = 0;
var boutonElt = document.getElementById("clic");
boutonElt.addEventListener("click", compter);

function compter() {
    nombreClics++;
    document.getElementById("compteurClics").textContent = nombreClics;
}


var boutonDesactElt = document.getElementById("desactiver"); // décla var elt bouton desactiver
boutonDesactElt.addEventListener("click", desactivation);

function desactivation() {
    boutonElt.removeEventListener("click", compter);
}