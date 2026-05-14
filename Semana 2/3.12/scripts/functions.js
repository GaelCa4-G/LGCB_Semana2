function calcularSueldo() {
    let num1= parseFloat(document.getElementById("Horas").value);
    let num2= parseFloat(document.getElementById("PagoHora").value);
    let sueldo;

    if (num1 <= 40) {
        sueldo = num1 * num2;
        document.getElementById("sueldo").textContent = "El sueldo semanal es: $" + sueldo;
    } else if (num1 <= 45) {
        sueldo = (40 * num2) + ((num1 - 40) * num2 * 2);
        document.getElementById("sueldo").textContent = "El sueldo semanal es: $" + sueldo;
    } else if (num1 <= 50) {
        sueldo = (40 * num2) + (5 * num2 * 2) + ((num1 - 45) * num2 * 3);
        document.getElementById("sueldo").textContent = "El sueldo semanal es: $" + sueldo;
    } else {
        sueldo = "No está permitido trabajar más de 50 horas.";
        document.getElementById("sueldo").textContent = sueldo;
    }
}