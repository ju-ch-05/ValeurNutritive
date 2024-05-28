var aliment = JSON.parse(localStorage.getItem("aliment"));
var valeurQuotidienne = JSON.parse(localStorage.getItem("valeurQuotidienne"));

// Quantités
remplir("portion", "Per " + aliment.quantite + "g<br>Pour " + aliment.quantite + "g");
remplir("calories", "Calories " + aliment.calories);
remplir("lipides", "Fat / Lipides " + aliment.lipides + "g");
remplir("grasSat", "Saturated / saturés " + aliment.grasSat + "g");
remplir("grasTrans", "+ Trans / trans " + aliment.grasTrans + "g");
remplir("glucides", "Carbohydrate / Glucides " + aliment.glucides + "g");
remplir("fibres", "Fibre / Fibres " + aliment.fibres + "g");
remplir("sucres", "Sugars / Sucres " + aliment.sucres + "g");
remplir("proteines", "Protein / Protéines " + aliment.proteines + "g");
remplir("cholesterol", "Cholesterol / Cholestérol " + aliment.cholesterol + "mg");
remplir("sodium", "Sodium " + aliment.sodium + "mg");
remplir("potassium", "Potassium " + aliment.potassium + "mg");
remplir("calcium", "Calcium " + aliment.calcium + "mg");
remplir("fer", "Iron / Fer " + aliment.fer + "mg");
// Valeurs quotidiennes
remplir("lipidesVQ", valeurQuotidienne.vqLipides + "%");
remplir("grasSatVQ", valeurQuotidienne.vqLipidesSat + "%");
remplir("fibresVQ", valeurQuotidienne.vqFibres + "%");
remplir("sucresVQ", valeurQuotidienne.vqSucres + "%");
remplir("sodiumVQ", valeurQuotidienne.vqSodium + "%");
remplir("potassiumVQ", valeurQuotidienne.vqPotassium + "%");
remplir("calciumVQ", valeurQuotidienne.vqCalcium + "%");
remplir("ferVQ", valeurQuotidienne.vqFer + "%");

function remplir(ID, message) {
    document.getElementById(ID).innerHTML = message;
}