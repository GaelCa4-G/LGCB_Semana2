function calcularBono() {
    let años = parseInt(document.getElementById("Años").value);
    let bono;

    if (años === 1) {
        bono = 100;
    } else if (años === 2) {
        bono = 200;
    } else if (años === 3) {
        bono = 300;
    } else if (años === 4) {
        bono = 400;
    } else if (años === 5) {
        bono = 500;
    } else {
        bono = 1000;
    }

    document.getElementById("resultado").textContent = "El bono que recibirá es: $" + bono;
};