function menorFinal() {
    let num1= parseFloat(document.getElementById("Edad1").value);
    let num2= parseFloat(document.getElementById("Edad2").value);
    let num3= parseFloat(document.getElementById("Edad3").value);
    let nombre1= document.getElementById("Persona1").value;
    let nombre2= document.getElementById("Persona2").value;
    let nombre3= document.getElementById("Persona3").value;

    if (num1 < num2 && num1 < num3) {
        document.getElementById("resultado").textContent= nombre1 + " es el/la menor.";
    } else if (num2 < num1 && num2 < num3) {
        document.getElementById("resultado").textContent= nombre2 + " es el/la menor.";
    } else {
        document.getElementById("resultado").textContent= nombre3 + " es el/la menor.";
    }
};