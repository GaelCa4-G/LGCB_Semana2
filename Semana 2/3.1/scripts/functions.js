function votacion() {
    let edad = parseInt(document.getElementById("Edad").value);
    const resultado = document.getElementById("resultado");
    if (edad >= 18) {
        document.getElementById("resultado").textContent= "Eres apto para votar.";
    } else {
        document.getElementById("resultado").textContent= "No eres apto para votar.";
    }
}