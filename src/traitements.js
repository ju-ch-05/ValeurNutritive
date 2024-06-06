class Aliment {
  constructor(
    quantite,
    calories,
    lipides,
    grasSat,
    grasTrans,
    glucides,
    fibres,
    sucres,
    proteines,
    cholesterol,
    sodium,
    potassium,
    calcium,
    fer
  ) {
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
    this.potassium = potassium;
    this.calcium = calcium;
    this.fer = fer;
  }
}

const aNRefLipides = 75;
const aNRefLipidesSat = 20;
const aNRefFibres = 28;
const aNRefSucres = 100;
const aNRefSodium = 2300;
const aNRefPotassium = 5000;
const aNRefCalcium = 1300;
const aNRefFer = 18;
class valeurQuotidienne {
  constructor(aliment) {
    this.vqLipides = Math.round((aliment.lipides / aNRefLipides) * 100);
    this.vqLipidesSat = Math.round(
      ((parseFloat(aliment.grasSat) + parseFloat(aliment.grasTrans)) /
        aNRefLipidesSat) *
        100
    );
    this.vqFibres = Math.round((aliment.fibres / aNRefFibres) * 100);
    this.vqSucres = Math.round((aliment.sucres / aNRefSucres) * 100);
    this.vqSodium = Math.round((aliment.sodium / aNRefSodium) * 100);
    this.vqPotassium = Math.round((aliment.potassium / aNRefPotassium) * 100);
    this.vqCalcium = Math.round((aliment.calcium / aNRefCalcium) * 100);
    this.vqFer = Math.round((aliment.fer / aNRefFer) * 100);
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
  var potassium = document.getElementById("potassium").value;
  var calcium = document.getElementById("calcium").value;
  var fer = document.getElementById("fer").value;

  var aliment = new Aliment(
    quantite,
    calories,
    lipides,
    grasSat,
    grasTrans,
    glucides,
    fibres,
    sucres,
    proteines,
    cholesterol,
    sodium,
    potassium,
    calcium,
    fer
  );

  localStorage.setItem("aliment", JSON.stringify(aliment));
  localStorage.setItem(
    "valeurQuotidienne",
    JSON.stringify(new valeurQuotidienne(aliment))
  );
}
