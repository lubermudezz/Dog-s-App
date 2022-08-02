import React from 'react'
//import { orderByName } from '../../redux/actions/actions'
import S from "./order.module.css"

const Order = ({setOrder}) => {

    /*
    
                    const dogs = state.allDogs
                const orderDogs = action.payload === 'AZ' ?
                    dogs.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)) :
                    dogs.sort((a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0))
    */

function orderDogs(e) {
    e.preventDefault(e)
    setOrder(e.target.value)
}


  return (
    <div>
        <div className={S.span}> 
        <label className={S.label}>Order by: </label>
        <select onChange={e => orderDogs(e)} className={S.select}>
            <option className={S.option} value="AZ">Breed: AZ</option>
            <option className={S.option} value="ZA"> Breed: ZA</option>
            <option className={S.option} value="minW" >↓ Weight</option>
            <option className={S.option} value="maxW" >↑ Weight</option>
        </select>
        </div>
    </div>
  )
}

export default Order;