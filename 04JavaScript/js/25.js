const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Celular', precio: 400 },
    { nombre: 'Mouse', precio: 20 },
    { nombre: 'Teclado', precio: 20 },
    { nombre: 'Bocinas', precio: 70 },
    { nombre: 'Laptop', precio: 700 },
    { nombre: 'Auriculares', precio: 200 },
    { nombre: 'Pendrive', precio: 100 },
]; 

// Metodos exclusivos de arreglos

// ForEach (se ejecuta tantas veces como la cantidad de elementos)
carrito.forEach( producto => console.log( producto.nombre ));

// Map
const arreglo2 = carrito.map( producto => producto.nombre);
console.log(arreglo2); 

// si bien la sintaxis es la misma para los dos, forEach es para mostrar en pantalla un arreglo mientras que map es para crear nuevos arreglos. 
