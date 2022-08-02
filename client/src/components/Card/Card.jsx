import React, {useEffect} from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link} from "react-router-dom";
import { getAllDogs, getAllTemperaments, getDogsZA, orderByName} from "../../redux/actions/actions";
//import Detail from "../Detail/Detail";
import Paginación from "../Paginación/Paginación";
import Order from "../Order/Order"
import S from "./card.module.css"

export default function Card () {
    const dispatch = useDispatch()
    const allDogs = useSelector(state => state.allDogs)
   // const temperaments = useSelector(state=> state.temperaments)
    const [page, setPage] = useState(1)
    const perPage = 8;

    const [order, setOrder] = useState ('AZ')

    

    useEffect(() => {
        if(order === 'AZ') dispatch(getAllDogs())
        if(order === 'ZA') dispatch(getDogsZA())
        
        //dispatch(getAllTemperaments())
    }, [dispatch, order])

   
    return (
     
        <div key='perri'>
            <Order setOrder={setOrder}/>
            <Paginación page={page} setPage={setPage}/>
            <div  className={S.cardDiv}>
                { allDogs ?
                        allDogs
                        .slice((page-1) * perPage, (page-1) * perPage + perPage)
                        .map (e => {
                            return (

                            
                                <div key={e.id}> 
                                <Link to={`/dogs/detail/${e.id}`}>
                                    <span> 
                                        
                                    <img src={e.image} alt='perito' />
                                    
                                    <h1 key='pichi'>{e.name}</h1>
                                 <p>Temperaments: {e.temperaments[0].name}</p> 
                                    <p>soy el peso: {e.weight}</p> 
                                    
                                    
                                    </span>                         
                                </Link>
                                </div>
                            
                                //<img src={e.image} alt="fotito" />
                            )
                        }) : console.log('no hay perritos')
 
                } 
            </div>
            
            <div>
                <Paginación page={page} setPage={setPage} />
            </div>

        </div>
        
    )
}