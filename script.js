import { popayán, medellin, cartagena, pasto } from "./ciudades.js";

// Obtener los datos del DOM
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

//console.log(enlaces);

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        // Remover el activo de todos los enlaces
        enlaces.forEach(function(enlace) {
            enlace.classList.remove("active");
        });

        // Agregar activo al enlace seleccionado
        this.classList.add("active");

        // Traer la información del objeto correspondiente a la elección
        let contenido = obtenerContenido(this.textContent.trim());
        // Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
});
// Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        "Popayán": popayán,
        "Medellin": medellin,
        "Cartagena": cartagena,
        "Pasto": pasto,
    };
    return contenido[enlace];
}
