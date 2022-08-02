
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
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
    <div>
        <h1>Dog Detail:</h1>
        {dog[0] ? <div className={S.dogDiv}>
            
            <p><strong>DOG NAME: </strong> {dog[0].name} </p> 
            <p><strong>WEIGHT:</strong> {console.log(dog)}  </p> 
            <p><strong>HEIGHT:</strong> {dog[0].temperaments[0].name}  </p>  
            <img src={dog[0].image} alt="perrito" /> 



                

            
        </div> : console.log('sad')}
    </div>
  )
}

export default Detail

/*
    - name, image, temp, weight, life_span, height

*/ 