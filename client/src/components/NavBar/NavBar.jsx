import React from "react";
import { NavLink } from "react-router-dom";
import S from "./navbar.module.css"


export default function Navbar () {
    return (
        <>
            <nav className={S.navbar}>
                <ul>
                   
                    <li><NavLink to={"/"}>Volver al inicio</NavLink></li> 
                    <li><NavLink to={"/dogs"}>Home</NavLink></li>
                    <li><NavLink to={"/dogs/create"}>Create New Dog</NavLink></li>
                </ul>
            </nav>
        </>
    )
}