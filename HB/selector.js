// let alumno = document.querySelector("li");

let estudiantes = document.querySelectorAll("li");

function mostrarLista (listaDeAlumnos) {
    for(let i = 0; i < listaDeAlumnos.length; i++){
        console.log(listaDeAlumnos[i])
    }
}

mostrarLista(estudiantes);

let tituloPrincipal = document.createElement("h1");
tituloPrincipal.textContent = "Esto es mi título principal"

document.body.appendChild(tituloPrincipal);

let listaAlumnos = document.querySelector("ol");

let estudianteA = document.createElement("li");
estudianteA.textContent = "María Emilia	Saenz Valiente"

let estuadianteB = document.createElement("li");
estuadianteB.textContent = "Sofía Esperon"

listaAlumnos.appendChild(estudianteA);
listaAlumnos.appendChild(estuadianteB)