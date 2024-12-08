import {obtenerPeliculas, guardarPeliculas} from "./Dbpeliculas.js"
const verPeliculas = obtenerPeliculas();


const peliculas = []

const inputNombrePelicula = document.getElementById("inputNombrePelicula")
const btn = document.getElementById("btn")
const inputFechaEstreno = document.getElementById("inputFechaEstreno")
const inputGenero = document.getElementById("inputGenero")
const mostrarListaPeliculas = document.getElementById("mostrarPeliculas")
const btnEditar = document.getElementById("btnEditar")
const inputImagen = document.getElementById("inputImagen")
btnEditar.classList.add("d-none")

// Agregar variable para mantener el índice de edición
let indiceEdicion = -1;

btn.addEventListener("click", () => {
if(inputNombrePelicula.value === "" || inputFechaEstreno.value === "" || inputGenero.value === "" || inputImagen.value === ""){
        alert("Todos los campos son obligatorios")
        return          
    }
    const nuevaPelicula = {
        nombre: inputNombrePelicula.value,
        fechaEstreno: inputFechaEstreno.value,
        genero: inputGenero.value,
        imagen: inputImagen.value
    }

    verPeliculas.push(nuevaPelicula)
    guardarPeliculas(verPeliculas)
    mostrarPeliculas()
    Swal.fire({
        title: "Éxito!",
        text: "Película agregada correctamente",
        icon: "success"
    });
    inputNombrePelicula.value = ""
    inputFechaEstreno.value = ""
    inputGenero.value = ""
    inputImagen.value = ""
})
mostrarPeliculas()


function mostrarPeliculas(){
    mostrarListaPeliculas.innerHTML = ""
    verPeliculas.forEach((films, index) => {
        mostrarListaPeliculas.innerHTML += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${films.nombre}</td>
        <td>${films.fechaEstreno}</td>
        <td>${films.genero}</td>
        <td><img src="${films.imagen}" alt="Imagen de la pelicula" class="img-thumbnail w-25"></td>
        <td>                    
            <button onclick="eliminarPeliculas(${index})" class="btn btn-danger">Eliminar</button>
            <button onclick="editarPeliculas(${index})" class="btn btn-warning">Editar</button>
        </td>
        </tr>`
    })
}


function eliminarPeliculas(index){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if(result.isConfirmed){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              peliculas.splice(index, 1)
              mostrarPeliculas()
        }
    });
}
function editarPeliculas(index){
    indiceEdicion = index  
    btnEditar.classList.remove("d-none")
    btnEditar.classList.add("d-block")
    btn.classList.add("d-none")
    inputNombrePelicula.value = peliculas[index].nombre
    inputFechaEstreno.value = peliculas[index].fechaEstreno
    inputGenero.value = peliculas[index].genero
}

btnEditar.addEventListener("click", () => {
    peliculas[indiceEdicion].nombre = inputNombrePelicula.value
    peliculas[indiceEdicion].fechaEstreno = inputFechaEstreno.value
    peliculas[indiceEdicion].genero = inputGenero.value
    
    mostrarPeliculas()
    limpiarInputs()  
    

    btnEditar.classList.add("d-none")
    btnEditar.classList.remove("d-block")
    btn.classList.remove("d-none")
    
    indiceEdicion = -1  
})
function limpiarInputs(){
    inputNombrePelicula.value = ""
    inputFechaEstreno.value = ""
    inputGenero.value = ""
}








