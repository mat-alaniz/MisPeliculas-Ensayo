export const obtenerPeliculas = () => {
    const peliculas = localStorage.getItem("peliculas")
    return peliculas ? JSON.parse(peliculas) : []
}

// creamos una funcion para guardar las peliculas en el local storage
export const guardarPeliculas = (peliculas) => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas))
}


