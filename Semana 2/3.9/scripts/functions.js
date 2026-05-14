function costoSeguro() {
    let plan = document.getElementById("Plan").value || "";
    let alcohol = document.getElementById("Alcohol").value || "";
    let lentes = document.getElementById("Lentes").value || "";
    let enfermedad = document.getElementById("Enfermedad").value || "";
    let edad = parseFloat(document.getElementById("Edad").value);

    let cuotaBase;
    const p = plan.trim().toLowerCase();
    if (p === "a") {
        cuotaBase = 1200;
    } else if (p === "b") {
        cuotaBase = 950;
    } else {
        document.getElementById("resultado").textContent = "Ingresa un plan válido (A o B).";
        return;
    }

    let cargo = 0;

    const a = alcohol;
    if (a === "Si") {
        cargo += cuotaBase * 0.10;
    } else if (a === "No") {
    } else {
        document.getElementById("resultado").textContent = "Ingresa 'Si' o 'No' para el hábito de beber alcohol.";
        return;
    }
    const l = lentes;
    if (l === "Si") {
        cargo += cuotaBase * 0.05;
    } else if (l === "No") {
    } else {
        document.getElementById("resultado").textContent = "Ingresa 'Si' o 'No' para el uso de lentes.";
        return;
    }

    const e = enfermedad;
    if (e === "Si") {
        cargo += cuotaBase * 0.05;
    } else if (e === "No") {
    } else {
        document.getElementById("resultado").textContent = "Ingresa 'Si' o 'No' para la presencia de alguna enfermedad.";
        return;
    }

    if (edad > 40) {
        cargo += cuotaBase * 0.20;
    } else {
        cargo += cuotaBase * 0.10;
    }

    const result = cuotaBase + cargo;
    document.getElementById("resultado").textContent = "El costo de la póliza es: $" + result;
}