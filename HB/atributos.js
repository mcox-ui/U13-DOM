let botonGoogle = document.querySelector("#btn-google");


botonGoogle.getAttribute("href") // Nos muestra cuál es el valor del atributo href.

console.log(botonGoogle.getAttribute("href")); // Muestra el valor del atributo href en la consola.

botonGoogle.setAttribute("href", "http://www.plataforma5.la") // Cambia el valor del atributo href por el valor que se pasa como segundo Parámetro.

botonGoogle.textContent = "Ir a  Plataforma 5"

botonGoogle.setAttribute("target", "_blank") // Agrega un nuevo atributo al elemento, en este caso el atributo target con el valor _blank.


