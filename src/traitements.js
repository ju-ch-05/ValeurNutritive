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

    class Aliment {
        constructor(quantite, calories, lipides, grasSat, grasTrans,
            glucides, fibres, sucres, proteines, cholesterol, sodium, calcium) {
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
        }
    }
    
    localStorage.setItem("aliment", JSON.stringify(new Aliment(quantite, calories, lipides, grasSat, 
        grasTrans, glucides, fibres, sucres, proteines, cholesterol, sodium, calcium)));
}
