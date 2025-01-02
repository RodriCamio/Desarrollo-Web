const producto = {
    nombreProducto: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

// Forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto);

// Destructuring 
const {precio} = producto; // el nombre de la variable tiene que ser igual al de la propiedad del objeto.
console.log(precio); 
