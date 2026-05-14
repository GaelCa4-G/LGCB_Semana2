function costoFinal() {
    let num1 = parseFloat(document.getElementById("Costo").value);
    let num2 = parseInt(document.getElementById("Lugar").value, 10);

    let num3;
    if (num2 === 1) {
        num3 = 750;
    } else if (num2 === 2) {
        num3 = 800;
    } else if (num2 === 3) {
        num3 = 1200;
    } else if (num2 === 4) {
        num3 = 1800;
    } else {
        document.getElementById("resultado").textContent = "invalido, debes ingresar un número del 1 al 4.";
        return;
    }

    const result = num1 * num3 * 2;
    document.getElementById("resultado").textContent = "El costo del pasaje es, " + result;
}