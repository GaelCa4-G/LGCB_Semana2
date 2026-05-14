function sueldoFinal() {
    let num1= parseFloat(document.getElementById("Horas").value);
    let num2= parseFloat(document.getElementById("Dinero").value);
    let result;
    if (num1 > 40) {
        let horasExtra = num1 - 40;
        let pagoExtra = horasExtra * (num2 * 2);
        result = num2 * 40 + pagoExtra;
    } else {
        result = num1 * num2;
    };
    document.getElementById("resultado").textContent= "El resultado es: " + result;
};