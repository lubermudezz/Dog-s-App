import React from "react";
//import {useDispatch, useSelector} from 'react-redux'
//import { GET_ALL_DOGS } from "../redux/actions/constantes";
//import { getAllDogs } from "../redux/actions/actions";
import Card from "./Card";
import SearchBar from "./SearchBar/SearchBar";
//import { Link } from "react-router-dom";

export default function Dogs () {

    return (
     
        <div key='perri'>
            <h1>Soy DOGS</h1>
            <SearchBar/>
           <Card/>

        </div>
        
    )
}