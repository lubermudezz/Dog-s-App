import React from "react";
import { Link } from "react-router-dom";
import S from './home.module.css'

export default function Home () {
    
    return (
        <div className={S.homeDiv}>
            <h1>WELCOME</h1>
            <Link to="/dogs"><button> FIND YOUR DOG</button></Link>
        </div>
    )
}

/*
    - Barra de búsqueda (buscar perros por nombre)
    - Listado de razas de perro(image, name, temp, weight)
    - Filtrar --> por temps / por raza
    - Boton Ordenar --> nombre, peso (asc y desc)
    - Paginado --> 8 por página


*/