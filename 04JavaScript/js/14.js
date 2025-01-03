// Arreglos o Arrays
const numeros = [10, 20, 30, 40, 50]; // array mas usado

// Acceder a los valores de un arreglo
console.log(numeros[4]); // debemos especifica el indice que queremos llamar. 
console.log(numeros[2]);

// Conocer la extension de un arreglo
// console.log(meses.length); // cantidad de elementos en el arreglo.

// Metodos para los Arrays
numeros[5] = 60; // si el indice no existe, agrega el valor al ultimo lugar

// Push
numeros.push(70); // Con este metodo siempre vamos a agregar un numero al final sin importar el indice.
numeros.push(80, 90, 100); // Con coma podemos agregar multiples elementos

// unshift
numeros.unshift(-10, -20, -30); // A diferencia del metodo anterior, unshift agrega elementos al principio del arreglo.

console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'); // constructor


// Eliminar elementos
meses.pop(); // Elimina el ultimo elemento del arreglo
meses.shift(); // Elimina el primer elemento del arreglo
meses.splice(2, 1); // Elimina un elemento puntual del arreglo, toma dos valores, el primero es el indice donde esta el elemento que queremos borrar y el segundo valor es cuantos elementos quiero borrar a partir de ese indice que indique en el primer valor

console.table(meses);

// todo esto tiene desventajas como siempre, porque lo ideal seria no modificar el arreglo original sino crear un nuevo arreglo con los datos modificados. 

// Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio']; // Crea un nuevo arreglo agregando un mes al final.
const nuevoArreglo2 = ['Diciembre', ...meses]; // Crea un nuevo arreglo agregando un mes al principio.

console.table(nuevoArreglo);
console.table(nuevoArreglo2);

