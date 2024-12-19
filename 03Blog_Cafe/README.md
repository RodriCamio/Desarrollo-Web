# Blog de Café - Proyecto 3

## Captura de Pantalla
[![screenshot-Blog-Cafe.png](https://i.postimg.cc/k41xCTHP/screenshot-Blog-Cafe.png)](https://postimg.cc/R6t3QL9g)

## Descripción
Este es el tercer proyecto del curso de Desarrollo Web y consiste en un Blog de Café diseñado para aplicar conceptos avanzados de HTML, CSS y principio de JavaScript importando una libreria. A lo largo del desarrollo, se implementaron buenas prácticas y herramientas modernas para optimizar el rendimiento, la responsividad y la experiencia de usuario.  

## Tecnologías Utilizadas  

**HTML**: Uso de `preload` y `prefetch` para optimizar la carga de recursos, implementación de `<picture>` para cargar diferentes formatos de imagen según compatibilidad, incorporación de un script de JavaScript para funcionalidades adicionales, imágenes con lazy loading para mejorar el rendimiento e integración de Google Fonts.  

**CSS**: Paleta de colores personalizada mediante variables CSS, uso de fuentes personalizadas, configuración global de tamaños y estilos con base 10px = 1rem y `box-sizing` global, ajustes responsivos mediante media queries, uso combinado de Grid y Flexbox, creación de utilidades reutilizables para facilitar el desarrollo, y uso de `normalize.css` para garantizar estilos consistentes entre navegadores.  

**JavaScript**: Uso de la librería modernizr.js para detectar compatibilidad con formatos WebP y cargar imágenes optimizadas mediante `<picture>`.  

## Estructura del Proyecto  

El Blog de Café está compuesto por las siguientes páginas:  
- **index.html**: Página principal del blog.  
- **nosotros.html**: Contiene una imagen y un texto organizados mediante grid.  
- **contacto.html**: Incluye una imagen con un formulario superpuesto.  
- **cursos.html**: Proporciona información sobre los cursos disponibles.  
- **entrada.html**: Describe una publicación específica del blog.  

---

## Tecnologías utilizadas

### Lenguajes:
- **HTML5:** Para la estructura del contenido.
- **CSS3:** Para la estilización y el diseño responsivo.
- **JS:** Para importar la libreria Modernizr.js.

### Frameworks y herramientas:
- **Normalize.css:** Para asegurar la consistencia de estilos entre navegadores.
- **Google Fonts:** Para incorporar tipografías personalizadas.
- **Modernizr:** Para incorporar tipografías personalizadas.
- **Preload HTML:** Permite a los navegadores cargar anticipadamente recursos esenciales para mejorar la velocidad de carga de la página.
- **Prefetch HTML:** Permite a los navegadores cargar anticipadamente recursos que no son esenciales, pero que podrían ser necesarios en el futuro, para mejorar la experiencia del usuario.
- **Lazy Loading HTML:** permite cargar imágenes y otros recursos solo cuando el usuario los necesita, mejorando la velocidad de carga de la página y reduciendo el consumo de datos.

--- 

## Estructura del Proyecto  

El Blog de Café está compuesto por las siguientes páginas:  
- **index.html**: Página principal del blog.  
- **nosotros.html**: Contiene una imagen y un texto organizados mediante grid.  
- **contacto.html**: Incluye una imagen con un formulario superpuesto.  
- **cursos.html**: Proporciona información sobre los cursos disponibles.  
- **entrada.html**: Describe una publicación específica del blog.
- **/css/styles.css:** Archivo principal de estilos.
- **/css/normalize.css:** Reseteo de estilos para navegadores.
- **/js/modernizr.js:** una biblioteca de JavaScript que detecta las capacidades y características del navegador del usuario, permitiendo en este caso detectar si soporta imagenes con formato .webp o no. 

## Cómo Ejecutar
1. Clonar este repositorio:
   ```bash
   git clone https://github.com/RodriCamio/Desarrollo-Web.git
   ```
2. Abrir la carpeta `03Blog_Cafe`, el archivo `index.html` en cualquier navegador web.
---

**Blog de Cafe** - Proyecto realizado como parte del curso de desarrollo web 2024.

## Agradecimientos
- A **Juan Pablo De la Torre Valdez** por su excelente curso y enseñanza.
- A la comunidad de Udemy por los recursos compartidos.