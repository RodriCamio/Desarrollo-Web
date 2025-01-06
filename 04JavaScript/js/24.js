//// For Loop

// for( let i = 0; i < 10; i++ ) { // Se ejecuta la el codigo mientras no se cumpla la condicion. Una vez que se cumple se termina.
//     console.log(i)
// }

//// For + If para verificar los datos

// for( let i = 0; i <= 100; i++ ) {
//     if( i % 2 === 0 ) {
//         console.log(`El Numero ${i} es PAR`);
//     } else {
//         console.log(`El Numero ${i} es IMPAR`);
//     }
// }

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

for( let i = 0; i < carrito.length; i++ ) { // al usar el .length le marcamos la cantidad de elementos.
    console.log( carrito[i].nombre ); // con el [i] podemos ir recorriendo todos los indices. y con el .nombre podemos ver solo los nombres de los elementos. 
}

//// While Loop (se ejecuta cuando la condicion es verdadera, pero cuando la condicion no es verdadera no ejecuta nada)

// let i = 0; // Indice

// while(i < 10) { // Condicion
//     console.log(i)
//     i++; // Incremento
// }

// while(i < 10) { // Condicion

//     if( i % 2 === 0 ) {
//         console.log(`El Numero ${i} es PAR`);
//     } else {
//         console.log(`El Numero ${i} es IMPAR`);
//     }

//     i++; // Incremento
// }


//// Do While Loop (la diferencia con el While es que al menos una vez va a ejecutar el codigo antes de evaluar la condicion )

let i = 0; // Indice

do { 
    console.log(i); // Codigo que se ejecuta al menos una vez

    i++; // Incremento
} while(i < 10); // Condicion