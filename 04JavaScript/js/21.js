// Arrow Funtion

const sumar = (n1, n2) => console.log(n1 + n2);
sumar(5, 10)

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript')

// Mas ejemplos de como se puede simplificar funciones con Arrow Funtion

const meses = ['Enero', 'Febrero', 'Marzo']; 

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

// forEach
meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
}); 

// Some ideal para arreglo de objetos
resultado = carrito.some( producto => producto.nombre == 'Celular'); // Simplifica mucho, reemplaza la palabra funtion con la flecha, si es un solo parametro podemos sacar los parentesis y como es una sola linea podemos sacar las llaves 

// Reduce
resultado = carrito.reduce((total,producto) => total + producto.precio, 0); // como son dos parametros si incluimos los parentesis

// Filter
resultado = carrito.filter(producto => producto.precio < 100); 
console.log(resultado);
