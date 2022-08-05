import React from "react";
import { Link } from "react-router-dom";
import S from './home.module.css'
import video from '../images/videoback.mp4'

export default function Home () {
    
    return (
        <div className={S.homeDiv}>
            <video autoPlay muted loop className={S.backV}>
                <source src={video} type="video/mp4"  />
            </video>

            <h1>BIENVENIDOS</h1>
            <Link to="/dogs"><button>PERRITOS DISPONIBLES</button></Link>
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