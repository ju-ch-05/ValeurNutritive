var aliment = JSON.parse(localStorage.getItem("aliment"));

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
remplir("calcium", "Calcium " + aliment.calcium + "mg");
remplir("fer", "Iron / Fer " + aliment.fer + "mg");

function remplir(ID, message) {
    document.getElementById(ID).innerHTML = message;
}