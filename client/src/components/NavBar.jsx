import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar () {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to={"/dogs"}>Home</NavLink></li>
                    <li><NavLink to={"/"}>Volver al inicio</NavLink></li>
                    <li><NavLink to={"/dogs/create"}>Create New Dog</NavLink></li>
                </ul>
            </nav>
        </>
    )
}