function calcularBeca() {
    let edad= parseInt(document.getElementById("Edad").value);
    let promedio= parseFloat(document.getElementById("Promedio").value);
    let beca;

    if (edad > 18) {
        if (promedio >= 9) {
            beca= 2000;
        } else if (promedio >= 7.5) {
            beca= 1000;
        } else {
            document.getElementById("resultado").textContent= "Estudiele mas mano.";
            return;
        }
    } else {
        if (promedio >= 9) {
            beca= 3000;
        } else if (promedio >= 8) {
            beca= 2000;
        } else if (promedio >= 6) {
            beca= 100;
        } else {
            document.getElementById("resultado").textContent= "Estudiele mas manito.";
            return;
        }
    }

    document.getElementById("resultado").textContent= "La beca es de: $" + beca;
}