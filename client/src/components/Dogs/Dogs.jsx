import React from "react";
//import {useDispatch, useSelector} from 'react-redux'
//import { GET_ALL_DOGS } from "../redux/actions/constantes";
//import { getAllDogs } from "../redux/actions/actions";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
//import { Link } from "react-router-dom";
import S from "./dog.module.css"

export default function Dogs () {

    return (
     
        <div key='perri' className={S.dogDiv}>
            <h1>Let's find your dog!</h1>
            <SearchBar/>
            <Card/>

        </div>
        
    )
}