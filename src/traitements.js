var quantite ;
var calories;
var lipides;
var grasSat;
var grasTrans;
var glucides;
var fibres;
var sucres;
var proteines;
var cholesterol;
var sodium;
var calcium;
var fer;

function assignationVariables() {
    quantite = document.getElementById("proportions").value;
    calories = document.getElementById("calories").value;
    lipides = document.getElementById("lipides").value;
    grasSat = document.getElementById("saturés").value;
    grasTrans = document.getElementById("trans").value;
    glucides = document.getElementById("glucides").value;
    fibres = document.getElementById("fibres").value;
    sucres = document.getElementById("sucres").value;
    proteines = document.getElementById("protéines").value;
    cholesterol = document.getElementById("cholestérol").value;
    sodium = document.getElementById("sodium").value;
    calcium = document.getElementById("calcium").value;
    fer = document.getElementById("fer").value;
}

 function remplirTableau() {
    document.getElementById("portion").innerHTML = "Per "+ quantite + " g<br>pour " + quantite + " g";
 }