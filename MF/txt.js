// let tituloPrincipal = document.querySelector("p");

// // tituloPrincipal.textContent = "Cambio con textContent";

// tituloPrincipal.innerHTML = "<mark>¡Hola!</mark>"

// ------------------------------------

let botonGoogle = document.querySelector("#btn-google");

botonGoogle.getAttribute("href") // Nos muestra cuál es el valor del atributo href.

console.log(botonGoogle.getAttribute("href"));

botonGoogle.setAttribute("href", "http://www.youtube.com") // Cambiamos el valor del atributo href.

// Seteamos un nuevo atributo al boton de google, target _blank, para que se abra en una nueva pestaña.
botonGoogle.setAttribute("target", "_blank");

botonGoogle.textContent = "Ir a YouTube"; // Cambiamos el texto del boton de google.

// ----------------------------------------------------

let logo = document.querySelector("img")

logo.getAttribute("src") // Nos muestra cuál es el valor del atributo src.

logo.setAttribute("src", "http://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg")


