import React from 'react'
//import { orderByName } from '../../redux/actions/actions'

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
        <label>Order by:</label>
        <select onChange={e => orderDogs(e)}>
            <option value="AZ">Breed: AZ</option>
            <option value="ZA"> Breed: ZA</option>
            <option value="minW" >↓ Weight</option>
            <option value="maxW" >↑ Weight</option>
        </select>
    </div>
  )
}

export default Order;