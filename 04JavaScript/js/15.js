// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo']; // Array unidimensional, array simple

const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Celular', precio: 400 },
    { nombre: 'Mouse', precio: 20 },
    { nombre: 'Teclado', precio: 20 },
    { nombre: 'Bocinas', precio: 70 },
    { nombre: 'Laptop', precio: 700 },
    { nombre: 'Auriculares', precio: 200 },
    { nombre: 'Pendrive', precio: 100 },
]; // Arreglo de objetos, es un arreglo mas complejo

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
}); // Esto es un iterador que va a recorrer mi arreglo y me va a devolver, en el caso que sea verdadero, un mensaje que dice si mi mes esta en el arreglo o no

// Includes
let resultado = meses.includes('Diciembre'); // Esto es lo mismo pero devuelve como resultado un booleano

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre == 'Celular'
}); // ideal para que nos identifique si hay un elemento en un array de objetos

// Reduce
resultado = carrito.reduce(function(total,producto) { 
    return total + producto.precio
}, 0); // itera los elementos y suma a partir de un valor inicial, en este caso su valor inicial es 0

// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio < 100
}); // Este es de los mas usados, podes filtrar por === (igual a) !== (distinto a) < (menor que) > (mayor que) etc. 

console.log(resultado);
