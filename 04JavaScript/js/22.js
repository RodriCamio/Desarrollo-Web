// Estructuras de Control

const puntaje = 1000;

if (puntaje == 1000) { // el doble signo de igual chequea que los valores sean iguales pero el triple signo es mas estricto y deben ser iguales hasta en el tipo de dato. 
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual');
}

const efectivo = 1000;
const carrito = 800;

if ( efectivo > carrito ) {
    console.log('El usuario puede pagar');
} else {
    console.log('El usuario no puede pagar');
}

// Mas de una condicion

const rol = "ADMINISTRADOR";

if ( rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'EDITOR') {
    console.log('Eres editor, tienes acceso limitado');
} else {
    console.log('No tienes acceso');
}

