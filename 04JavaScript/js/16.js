// Declaracion de Funcion
function sumar() {
    console.log(10 + 10);
}

sumar()

// Expresion de la funcion
const sumar2 = function() {
    console.log(2 + 2);
}

sumar2()

// Diferencias entre el tipo de funciones
// La forma declarativa tiene la capacidad de que si llamo a la funcion antes de definirla, esto va a funcionar porque en el primer vistazo que hace JS (llamado etapa de creacion o registro) sobre el codigo, define las funciones y en el segundo (la etapa de ejecucion) las variables. 
// La forma de "expresion" es una variable con una funcion y va dar error si intento llamarla antes de declararla. 



// IIFE
(function() {
    console.log('Esto es una funcion');
})(); // funciones que no necesitan llamarse porque se llaman ellas mismas
// Son utiles para proteger las variables para que no se mesclen con las de otros archivos.