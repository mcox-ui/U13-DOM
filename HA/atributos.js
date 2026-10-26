let botonGoogle = document.querySelector("#btn-google");

// Nos muestra cuál es el valor del atributo href.
botonGoogle.getAttribute("href") 

console.log(botonGoogle.getAttribute("href"))

// Cambia el valor del atributo href por el valor que se pasa como segundo Parámetro.
botonGoogle.setAttribute("href", "http://www.plataforma5.la") 
botonGoogle.setAttribute("target", "_blank")
botonGoogle.textContent = "Ir a Plataforma 5 ahora"

// -----------------

let logo = document.querySelector("img")
console.log(logo.getAttribute("src"))

logo.setAttribute("src", "https://www.plataforma5.la/static/media/LogoP5Footer.5278a9a1010612a25ba638427ecd72ef.svg")