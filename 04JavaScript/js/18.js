// Funciones con argumentos y parametros

// Funcion simple
function sumar(){
    console.log( 1 + 1 );
}; // en esta funcion solo podemos tener un resultado que es 1 + 1. Pero si queremos reutilizar este codigo debemos usar parametros y argumentos

sumar() 

// Funcion con argumentos y valores
const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
} // en esta funcion definimos dos argumentos que son n1 y n2, y la operacion que van a realizar

sumar2(5, 10);  // cuando llamamos la funcion le pasamos los valores que necesitamos y de esta manera podemos reutilizar la funcion las veces que necesitemos
sumar2(10, 20);

// Funcion con argumentos y valores por default.
function sumar3(numero1 = 0, numero2 = 0){
    console.log( numero1 + numero2);
}; // en esta funcion definios dos valores por default, es decir que si el usuario no define algun valor, este tomara el que le definimos por defecto. 



sumar3(1)
sumar3(2, 2)
sumar3()