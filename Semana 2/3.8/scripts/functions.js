function calcularBono() {
    let antiguedad= parseFloat(document.getElementById("Antiguedad").value);
    let sueldo= parseFloat(document.getElementById("Sueldo").value);

    let bonoAntiguedad;
    if (antiguedad > 2 && antiguedad < 5) {
        bonoAntiguedad= sueldo * 0.2;
    } else if (antiguedad >= 5) {
        bonoAntiguedad= sueldo * 0.3;
    } else {
        bonoAntiguedad= 0;
    }

    let bonoSueldo;
    if (sueldo < 1000) {
        bonoSueldo= sueldo * 0.25;
    } else if (sueldo <= 3500) {
        bonoSueldo= sueldo * 0.15;
    } else {
        bonoSueldo= sueldo * 0.1;
    }

    let bonoFinal= Math.max(bonoAntiguedad, bonoSueldo);
    document.getElementById("resultado").textContent= "El bono final es: $" + bonoFinal;
};