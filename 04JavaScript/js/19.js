// Funciones que retornan valores

// Una suma simple
function sumar(n1, n2) {
    return n1 + n2;
}

const resultado = sumar(2, 3);

console.log(`El resultado es: ${resultado}`);

// ejemplo de un carrito de compras

let total = 0;  // Creamos la variable inicial que vamos a ir modificando

function agregarCarrito(precio) {
    return total + precio; // De esta forma se van sumando los precios de los productos
}

function calcularImpuesto(total) {
    return 1.21 * total; // Aca al total le calculamos el 21% de impuesto
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total); // Mostramos el subtotal

const totalApagar = calcularImpuesto(total); // Generamos la variable con el total a pagar con impuesto

console.log(`El total a pagar con impuesto es: $${totalApagar}`)

