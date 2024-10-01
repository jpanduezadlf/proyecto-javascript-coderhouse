let precioProds = [5000, 8000, 9500, 6800];

const APLICAR_DESCUENTO = function(valor, descuento) {
    return valor * (1 - descuento);
}

function calcularPrecio(cantidades, desc=0) {
    let costoTotal = 0;
    for(let i = 0; i < 4; i++){
        costoTotal += cantidades[i] * precioProds[i];
    }
    return APLICAR_DESCUENTO(costoTotal, desc);
}

let i = 0;
let cants = [0, 0, 0, 0];
while (i <= 3){
    cantidad = parseFloat(prompt(`Cuántos del producto ${i+1} quieres comprar? Este producto cuesta $${precioProds[i]}.
Ingresa un valor entero mayor o igual a cero.`));
    if (cantidad >= 0 && cantidad % 1 == 0) {
        cants[i] = cantidad;
        i++;
    } else {
        alert("Recuerda ingresar únicamente números enteros mayores o iguales a 0.");
    }
}

let descuento = 0;

let precioFinal = calcularPrecio(cants);

if (precioFinal >= 250000){
    precioFinal = calcularPrecio(cants, 0.5);
    descuento = 50;
} else if (precioFinal >= 200000){
    precioFinal = calcularPrecio(cants, 0.4);
    descuento = 40;
} else if (precioFinal >= 150000){
    precioFinal = calcularPrecio(cants, 0.3);
    descuento = 30;
} else if (precioFinal >= 100000){
    precioFinal = calcularPrecio(cants, 0.2);
    descuento = 20;
} else if (precioFinal >= 50000){
    precioFinal = calcularPrecio(cants, 0.1);
    descuento = 10;
}

alert(`El precio de tu compra es $${precioFinal}. Se le aplicó un ${descuento}% de descuento por la cantidad gastada.`)