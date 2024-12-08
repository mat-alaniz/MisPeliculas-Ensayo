import {obtenerPeliculas, guardarPeliculas} from "./Dbpeliculas.js"

const peliculasTarjeta = document.getElementById("peliculasTarjeta")
const verPeliculas = obtenerPeliculas()
function mostrarPeliculas(){
    peliculasTarjeta.innerHTML = ""
    verPeliculas.forEach((pelicula, index) => {
        peliculasTarjeta.innerHTML += `
     <div class="card h-100 shadow-sm mb-4 mx-2" style="width: 18rem;" onmouseover="this.classList.add('card-hover')" onmouseout="this.classList.remove('card-hover')">
        <div class="card-header bg-dark text-white text-center">
            <h4 class="card-title mb-0">${pelicula.nombre}</h4>
        </div>
        <img src="${pelicula.imagen}" class="card-img-top p-2" alt="${pelicula.nombre}">
        <div class="card-body">
            <p class="card-text"><i class="bi bi-calendar-event"></i> ${pelicula.fechaEstreno}</p>
            <p class="card-text"><span class="badge bg-primary">${pelicula.genero}</span></p>
        </div>
     </div>
        `
    })
}
mostrarPeliculas()



