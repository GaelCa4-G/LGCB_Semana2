function precioFinal() {
    let precio= parseFloat(document.getElementById("Articulo").value);
    if (precio > 100) {
        if (precio >= 200) {
            let descuento= precio * 0.15;
            let result= precio - descuento;
            document.getElementById("resultado").textContent= "El precio final del articulo es: $" + result;
        } else {
            let descuento= precio * 0.12;
            let result= precio - descuento;
            document.getElementById("resultado").textContent= "El precio final del articulo es: $" + result;
        }
    } else {
        let descuento= precio * 0.1;
        let result= precio - descuento;
        document.getElementById("resultado").textContent= "El precio final del articulo es: $" + result;
    }
};