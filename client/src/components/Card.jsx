import React, {useEffect} from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllDogs} from "../redux/actions/actions";
import Paginación from "./Paginación/Paginación";

export default function Card () {
    const dispatch = useDispatch()
    const allDogs = useSelector(state => state.allDogs)
   // const temperaments = useSelector(state=> state.temperaments)
    const [page, setPage] = useState(1)
    const perPage = 8;
    

    useEffect(() => {
        dispatch(getAllDogs())
        //dispatch(getAllTemperaments())
    }, [dispatch])

    return (
     
        <div key='perri'>
            
            <Paginación page={page} setPage={setPage}/>
            <div>
                { allDogs ?
                    allDogs
                    .slice((page-1) * perPage, (page-1) * perPage + perPage)
                    .map (e => {
                        return (

                            <div key={e.id}>
                               
                                <h1 key='pichi'>{e.name}</h1>
                                <img src={e.image} alt='perito'/>
                                <h2>Soy el temperamento: {e.temp}</h2>
                                <h3>soy el peso: {e.weight}</h3>                          

                            </div>
                            
                            //<img src={e.image} alt="fotito" />
                        )
                    }) : console.log('no hay perritos')

                }  
            </div>
            
            <div><Paginación page={page} setPage={setPage} /></div>

        </div>
        
    )
}