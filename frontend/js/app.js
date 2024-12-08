import {obtenerPeliculas, guardarPeliculas} from "./Dbpeliculas.js"
const verPeliculas = obtenerPeliculas();
const inputNombrePelicula = document.getElementById("inputNombrePelicula")
const btn = document.getElementById("btn")
const inputFechaEstreno = document.getElementById("inputFechaEstreno")
const inputGenero = document.getElementById("inputGenero")
const mostrarListaPeliculas = document.getElementById("mostrarPeliculas")
const btnEditar = document.getElementById("btnEditar")
const inputImagen = document.getElementById("inputImagen")
btnEditar.classList.add("d-none")


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



function mostrarPeliculas(){
    mostrarListaPeliculas.innerHTML = ""
    verPeliculas.forEach(({nombre, fechaEstreno, genero, imagen}, index) => {
        mostrarListaPeliculas.innerHTML += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${nombre}</td>
        <td>${fechaEstreno}</td>
        <td>${genero}</td>
        <td><img src="${imagen}" alt="Imagen de la pelicula" class="img-thumbnail w-25"></td>
        <td>                    
            <button onclick="eliminarPeliculas(${index})" class="btn btn-danger">Eliminar</button>
            <button onclick="editarPeliculas(${index})" class="btn btn-warning">Editar</button>
        </td>
        </tr>`
    })
}


 window.eliminarPeliculas = (index) => {
    Swal.fire({
        title: "¿Estas seguro de eliminar esta pelicula?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if(result.isConfirmed){
            Swal.fire({
                title: "Eliminado!",
                text: "La pelicula ha sido eliminada.",
                icon: "success"
              });
              verPeliculas.splice(index, 1)
              guardarPeliculas(verPeliculas)
              mostrarPeliculas()
        }
    });
}
    window.editarPeliculas = (index) => {
    indiceEdicion = index  
    btnEditar.classList.remove("d-none")
    btnEditar.classList.add("d-block")
    btn.classList.add("d-none")
    inputNombrePelicula.value = verPeliculas[index].nombre
    inputFechaEstreno.value = verPeliculas[index].fechaEstreno
    inputGenero.value = verPeliculas[index].genero
    inputImagen.value = verPeliculas[index].imagen
}

btnEditar.addEventListener("click", () => {
    verPeliculas[indiceEdicion].nombre = inputNombrePelicula.value
    verPeliculas[indiceEdicion].fechaEstreno = inputFechaEstreno.value
    verPeliculas[indiceEdicion].genero = inputGenero.value
    verPeliculas[indiceEdicion].imagen = inputImagen.value
    
    guardarPeliculas(verPeliculas)
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
    inputImagen.value = ""
}








