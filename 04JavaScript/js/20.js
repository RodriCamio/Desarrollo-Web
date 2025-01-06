// Metodos de Propiedad

const reproductor = { // Creamos una variable que va a almacenar nuestros metodos
    reproducir: function(id) { 
        console.log(`Se esta reproducionendo la cancion con el ID: ${id}`);
    },
    pausar: function() {
        console.log('Se esta pausando la cancion...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Se esta creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Se esta reproducionendo la playlist: ${nombre}`);
    }
}

reproductor.reproducir(5000); // llamamos a las difententes propiedades de nuestro metodo
reproductor.pausar();
reproductor.crearPlaylist('Musica Cristiana');
reproductor.reproducirPlaylist('Musica Cristiana');

// Podemos agregar propiedades por fuera del objeto

reproductor.borrarPlaylist = function(nombre) {
    console.log(`Eliminando la playlist: ${nombre}`);
}

reproductor.borrarPlaylist('Musica Cristiana');
