// Pasamos un String como parámetro, que indica qué etiqueta queremos crear.
let elemento = document.createElement("elemento");

let tituloPrincipal = document.createElement("h1");
tituloPrincipal.textContent = "Modificando el contenido de texto con textContent";

document.body.appendChild(tituloPrincipal)

let listItem = document.createElement("li");
listItem.textContent = "Matias Andrés Barbieri";

let listaAlumnos = document.querySelector("ul")

listaAlumnos.appendChild(listItem)

let listItem2 = document.createElement("li");
listItem2.textContent = "María Catalina	Cisneros";

listaAlumnos.appendChild(listItem2)
