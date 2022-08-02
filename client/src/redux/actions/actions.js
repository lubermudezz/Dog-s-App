import { GET_ALL_DOGS, GET_TEMPERAMENT, URL_DOG, GET_DOG_BY_NAME, URL_TEMPERAMENT, GET_DOG_BY_ID, ORDER_BY_NAME } from "./constantes";
import axios from 'axios'
//import { useSelector } from "react-redux";

export function getAllDogs() {
    return async function (dispatch) {
        const list = await axios.get(URL_DOG)
        console.log(list.data)
        return dispatch({type: GET_ALL_DOGS, payload: list.data})
    }
}

export function getDogById (dogId) {
    return async function (dispatch) {
            const dog = await axios.get(`http://localhost:3001/dogs/${dogId}`)
            return dispatch({type: GET_DOG_BY_ID, payload: dog.data})
      
    }
}


export function postNewDog(dog) {
    return async function () {
        try{
           await axios.post(URL_DOG, dog)
        }
        catch(err) {console.log(err)}

    }
}

export function getDogByName(name) {
  
    
    return async (dispatch) => {
       try { 
            const dogByName = await axios.get(`http://localhost:3001/dogs?name=${name}`)
                    return dispatch({type: GET_DOG_BY_NAME, payload: dogByName.data})
        
        }
        catch (err) {
            console.log('no existe la raza')
        }
       
    }
}



export function getDogsZA () {
    return async function (dispatch) {
        const list = await axios.get(URL_DOG)
        list.data.sort((a, b) => {
            if(a.name < b.name) {
                return 1
            } 
            if(a.name > b.name) {
                return - 1
            }
            return 0
        })
        console.log(list.data)
        return dispatch({type: ORDER_BY_NAME, payload: list.data})
    }
    /*
    
    export function getAllDogs() {
    return async function (dispatch) {
        const list = await axios.get(URL_DOG)
        return dispatch({type: GET_ALL_DOGS, payload: list.data})
    }
}
    */
}

//PARA FORMULARIO:
export function getAllTemperaments () {
    return async function (dispatch) {
        const listTemp = await axios.get(URL_TEMPERAMENT)
        return dispatch({type: GET_TEMPERAMENT, payload: listTemp.data})
    }
}



