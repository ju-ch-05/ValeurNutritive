class Aliment {
    constructor(quantite, calories, lipides, grasSat, grasTrans,
        glucides, fibres, sucres, proteines, cholesterol, sodium, calcium, fer) {
        this.quantite = quantite;
        this.calories = calories;
        this.lipides = lipides;
        this.grasSat = grasSat;
        this.grasTrans = grasTrans;
        this.glucides = glucides;
        this.fibres = fibres;
        this.sucres = sucres;
        this.proteines = proteines;
        this.cholesterol = cholesterol;
        this.sodium = sodium;
        this.calcium = calcium;
        this.fer = fer;
    }
}

const aNRefLipides = 75;
const aNRefLipidesSat = 20;
const aNRefFibres = 28;
const aNRefSucres = 100;
const aNRefSodium = 2300;
const aNRefCalcium = 1300;
const aNRefFer = 18;
class valeurQuotidienne {
    constructor(aliment) {
        this.vqLipides = (aliment.lipides / aNRefLipides) * 100;
        this.vqLipidesSat = ((aliment.grasSat + aliment.grasTrans) / aNRefLipidesSat) * 100;
        this.vqFibres = (aliment.fibres / aNRefFibres) * 100;
        this.vqSucres = (aliment.sucres / aNRefSucres) * 100;
        this.vqSodium = (aliment.sodium / aNRefSucres) * 100;
        this.vqCalcium = (aliment.calcium / aNRefCalcium) * 100;
        this.vqFer = (aliment.fer / aNRefFer) * 100;
    }
}

function assignationVariables() {
    var quantite = document.getElementById("proportions").value;
    var calories = document.getElementById("calories").value;
    var lipides = document.getElementById("lipides").value;
    var grasSat = document.getElementById("saturés").value;
    var grasTrans = document.getElementById("trans").value;
    var glucides = document.getElementById("glucides").value;
    var fibres = document.getElementById("fibres").value;
    var sucres = document.getElementById("sucres").value;
    var proteines = document.getElementById("protéines").value;
    var cholesterol = document.getElementById("cholestérol").value;
    var sodium = document.getElementById("sodium").value;
    var calcium = document.getElementById("calcium").value;
    var fer = document.getElementById("fer").value;

    var aliment = new Aliment(quantite, calories, lipides, grasSat, 
        grasTrans, glucides, fibres, sucres, proteines, cholesterol, sodium, calcium, fer);

    localStorage.setItem("aliment", JSON.stringify(aliment));
    localStorage.setItem("valeurQuotidienne", JSON.stringify(new valeurQuotidienne(aliment)));
}
