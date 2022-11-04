import React from 'react'
import S from "./order.module.css"

const Order = ({setOrder}) => {


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