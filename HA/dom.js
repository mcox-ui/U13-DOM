// console.dir(document)

let tituloPrincipal = document.querySelector("h1");

tituloPrincipal.style.color = "tomato"
tituloPrincipal.textContent = "<mark>Cambiado desde JavaScript</mark>"
tituloPrincipal.innerHTML = "<mark>Cambiado desde JavaScript</mark>"


let tituloSecundario = document.querySelector("h2");

tituloSecundario.classList.add("importante");
tituloSecundario.classList.remove("importante")




