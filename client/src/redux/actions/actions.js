import { GET_ALL_DOGS, GET_TEMPERAMENT, URL_DOG, GET_DOG_BY_NAME, URL_TEMPERAMENT } from "./constantes";
import axios from 'axios'

export function getAllDogs() {
    return async function (dispatch) {
        const list = await axios.get(URL_DOG)
        return dispatch({type: GET_ALL_DOGS, payload: list.data})
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
       try { const dogByName = await axios.get(`http://localhost:3001/dogs?name=${name}`)
        return dispatch({type: GET_DOG_BY_NAME, payload: dogByName.data})}
        catch (err) {
            console.log(err)
        }
    }
}


//PARA FORMULARIO:
export function getAllTemperaments () {
    return async function (dispatch) {
        const listTemp = await axios.get(URL_TEMPERAMENT)
        return dispatch({type: GET_TEMPERAMENT, payload: listTemp.data})
    }
}



