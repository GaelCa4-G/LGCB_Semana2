function costoFinal() {
    let num1= parseFloat(document.getElementById("Alumnos").value);
    let costoPorAlumno;

    if (num1 > 100) {
        costoPorAlumno = 20;
    } else if (num1 >= 50) {
        costoPorAlumno = 35;
    } else if (num1 >= 20) {
        costoPorAlumno = 40;
    } else {
        costoPorAlumno = 70;
    }

    const result = num1 * costoPorAlumno;
    document.getElementById("resultado").textContent = "El costo total del pasaje es: $" + result;
}