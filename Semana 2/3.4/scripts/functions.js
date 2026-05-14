function cobroFinal() {
    let num1= parseFloat(document.getElementById("Horas").value);
    if (num1 <= 2) {
        const result= num1 * 5;
        document.getElementById("resultado").textContent= "El costo es de $" + result + ".";
    } else if (num1 > 2 && num1 <= 5) {
        const preResult= 2 * 5;
        const result= (num1 - 2) * 4 + preResult;
        document.getElementById("resultado").textContent= "El costo es de $" + result + ".";
    }
    else if (num1 > 5 && num1 <= 10) {
        const preResult= (2 * 5) + (3 * 4);
        const result= (num1 - 5) * 3 + preResult;
        document.getElementById("resultado").textContent= "El costo es de $" + result + ".";
    } else if (num1 > 10) {
        const preResult= (2 * 5) + (3 * 4) + (5 * 3);
        const result= ((num1 - 10) * 2) + preResult;
        document.getElementById("resultado").textContent= "El costo es de $" + result + ".";
    }
};