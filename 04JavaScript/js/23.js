const metodoPago = 'tarjeta';

switch(metodoPago) { // entre parentesis va el valor a analizar
    case 'tarjeta': // en el caso que el valor consida con el caso se va ejecutar
        console.log('Pagaste con tarjeta');
        break;  // Marca que hasta aqui se ejecutara el codigo en caso de cumplirse el caso. 
    case 'cheque':
        console.log('Pagaste con cheque');
        break;
    case 'efectivo':
        console.log('Pagaste en efectivo');
        break;
    default: // en el caso de IF y Else, el ultimo no es obligatorio pero en Switch siempre tenemos que poner un default.
        console.log('Aun no has pagado');
        break;
}