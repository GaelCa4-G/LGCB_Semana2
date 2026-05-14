function regaloFinal() {
    let num1= parseFloat(document.getElementById("Presupuesto").value);
    if (num1 <= 10) {
        document.getElementById("resultado").textContent= "Nomas compra una tarjeta.";
    } else if (num1 > 10 && num1 <= 100) {
        document.getElementById("resultado").textContent= "Comprale chocolates.";
    } else if (num1 > 100 && num1 <= 250) {
        document.getElementById("resultado").textContent= "Comprale flores.";
    } else if (num1 > 250) {
        document.getElementById("resultado").textContent= "Comprale un anillo.";
    }
};