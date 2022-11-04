import React from "react";
import { NavLink } from "react-router-dom";
import S from "./navbar.module.css"


export default function Navbar () {
    return (
        <>
            <nav className={S.navbar}>
                <ul>
                   
                    <li><NavLink to={"/"}>Página de Bienvenida</NavLink></li> 
                    <li><NavLink to={"/dogs"}>Perritos</NavLink></li>
                    <li><NavLink to={"/dogs/create"}>Crear un perro nuevo</NavLink></li>
                </ul>
            </nav>
        </>
    )
}