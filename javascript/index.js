let cant;
let frase;
let precio;

class Carrito {
    constructor(productos) {
        this.productos = productos;
      	this.precio = this.calcularPrecio();
        this.descuento = this.obtenerDescuento();
      	this.aplicarDescuento = (valor, descuento) => valor * (1 - descuento);
        this.precioFinal = this.aplicarDescuento(this.precio, this.descuento);
        this.fraseSalida = this.construirFraseSalida();
    }
    construirFraseSalida(){
        if (this.productos.length == 0) {
            return `No tienes productos en tu carrito. El costo de tu carrito es $0.`
        } else if (this.productos.length == 1) {
            return `Tu carrito contiene ${this.productos[0].cantidad} ${this.productos[0].nombre}. Su costo total es de $${this.precioFinal}. Dado el tamaño de tu compra, se aplicó un descuento de ${this.descuento*100}%.`
        } else {
            frase = `Tu carrito contiene `
            for (let i = 0; i < this.productos.length; i++){
                switch (i) {
                    case (this.productos.length - 1):
                        frase += `y ${this.productos[i].cantidad} ${this.productos[i].nombre}. Su costo total es de $${this.precioFinal}. Dado el tamaño de tu compra, se aplicó un descuento de ${this.descuento*100}%.`
                        break;
                    case (this.productos.length - 2):
                        frase += `${this.productos[i].cantidad} ${this.productos[i].nombre} `
                        break;
                    default:
                        frase += `${this.productos[i].cantidad} ${this.productos[i].nombre}, `
                        break;
                }
            }
            return frase;
        }
    }
    calcularPrecio() {
        return this.productos.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
    }
    obtenerDescuento() {  
        if (this.precio >= 250000) 
            return 0.5;  
        if (this.precio >= 200000) 
            return 0.4;  
        if (this.precio >= 150000) 
            return 0.3;  
        if (this.precio >= 100000) 
            return 0.2;  
        if (this.precio >= 50000) 
            return 0.1;  
        return 0;
    }
}

class Producto {
    constructor(nombre) {
        this.nombre = nombre;
        this.precio = Math.round(Math.random()*10000);
        this.cantidad = this.preguntarCantidad();
    }
    preguntarCantidad() {
        do {    
            cant = parseFloat(prompt(`¿Cuántos de ${this.nombre} quieres comprar? Este producto cuesta $${this.precio}. Ingresa un valor entero mayor o igual a cero.`));    
            if (cant >= 0 && Number.isInteger(cant)) {      
                return cant;
            } else {
                alert("Recuerda ingresar únicamente números enteros mayores o iguales a 0.");    
            }  
        } while (cant < 0 || !Number.isInteger(cant));
    }
}

let carrito;
function crearProductos() {
    let productos = {}
    let listaProductos = [];
    let contador = 1;
    let prefijo = "producto";
    let error = 0;
    do {
        if (error == 0) {
            productos[prefijo + contador] = prompt("¿Qué producto quieres agregar al carrito?");
        }
        masProductos = prompt("¿Quieres agregar otro producto? (1: Si - 0: No)");
        contador += 1;
        switch (masProductos) {
            case "0":
                contador = 0;
                break;
            case "1":
                error = 0;
                break;
            default:
                alert("Por favor introduzca únicamente 1 o 0 como respuesta a la pregunta")
                error = 1;
                break;
        }
    } while (contador > 0);

    for(let producto in productos) {
        nuevoProducto = new Producto(productos[producto]);
        listaProductos.push(nuevoProducto);
    }

    carrito = new Carrito(listaProductos);
    alert(carrito.fraseSalida);
}

crearProductos();