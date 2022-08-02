
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import { getDogById } from '../../redux/actions/actions'
import S from "./detail.module.css"

const Detail = () => {
    
    let {dogId} = useParams()

    const dispatch = useDispatch()
    const dog = useSelector(state => state.dog)

    useEffect(() => {
        dispatch(getDogById(dogId))
    }, [dogId])
  
   // let dogName = dog[0].name

    return (
    <div className={S.div}>
        <h1 className={S.title}>Dog Detail:</h1>
        {dog[0] ? <div className={S.dogDiv}>
            
            <div className={S.detailDiv}>
            <p><strong>DOG NAME: </strong> {dog[0].name} </p> 
            <p><strong>WEIGHT:</strong> {dog[0].weight}  </p> 
            <p><strong>HEIGHT:</strong> {dog[0].height}  </p> 
            <p><strong>LIFE SPAN:</strong> {dog[0].life_span}  </p> 
            <p><strong>TEMPERAMENTS:</strong> {dog[0].temperaments[0] ? dog[0].temperaments[0].name : 'sin temperamentos'}  </p>  
            </div>
            

            <img src={dog[0].image} alt="perrito" /> 
 

                

            
        </div> : console.log('No se encontró el detalle que buscaba')}
    </div>
  )
}

export default Detail

/*
    - name, image, temp, weight, life_span, height

*/ 