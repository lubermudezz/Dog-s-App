import React from "react";
import { Link } from "react-router-dom";
import Img from "../images/landingpage.jpg"


export default function Home () {
    
    return (
        <>
            <h1>PAG DE BIENVENIDA</h1>
            <img src={Img} alt="imagen de bienvenida" />
            <Link to="/dogs"><button> VER PERRITOS DISPONIBLES</button></Link>

        </>
    )
}

/*
    - Barra de búsqueda (buscar perros por nombre)
    - Listado de razas de perro(image, name, temp, weight)
    - Filtrar --> por temps / por raza
    - Boton Ordenar --> nombre, peso (asc y desc)
    - Paginado --> 8 por página


*/