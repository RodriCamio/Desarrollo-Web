// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // .freeze .seal son parecidos con la diferencia de que el primero no permite agregar, eliminar ni modificar nada del objeto mientras que el segundo permite modificar datos preexistentes.

producto.precio = 'NUEVO PRECIO'; // modificar una propiedad

delete producto.precio; // eliminar una propiedad

console.log(producto);