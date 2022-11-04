import { GET_ALL_DOGS, GET_TEMPERAMENT, URL_DOG, GET_DOG_BY_NAME, URL_TEMPERAMENT, GET_DOG_BY_ID, ORDER_BY_NAME, ORDER_BY_WEIGTH, FILTER_DB_BREEDS, FILTER_API_BREEDS, SEARCH_BY_TEMP } from "./constantes";
import axios from 'axios'

export function getAllDogs() {
    return async function (dispatch) {
        const list = await axios.get(URL_DOG)
        list.data.sort((a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
            } 
            if(a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1
            }
            return 0
        })
        return dispatch({type: GET_ALL_DOGS, payload: list.data})
    }
}

export function getDogById (dogId) {
    return async function (dispatch) {
            const dog = await axios.get(`/dogs/${dogId}`)
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
            const dogByName = await axios.get(`/dogs?name=${name}`)
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
            if(a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1
            } 
            if(a.name.toLowerCase() > b.name.toLowerCase()) {
                return - 1
            }
            return 0
        })
        return dispatch({type: ORDER_BY_NAME, payload: list.data})
    }

}

export function getDogsMinWeight () {
    return async function (dispatch) {
        const list = await axios.get(URL_DOG)
        list.data.sort((a, b) => {
            if (parseFloat(a.weight.replace('NaN', 0).split(' - ').join('.')) > parseFloat(b.weight.replace('NaN', 0).split(' - ').join('.'))) return 1;
            if (parseFloat(a.weight.replace('NaN', 0).split(' - ').join('.')) < parseFloat(b.weight.replace('NaN', 0).split(' - ').join('.'))) return -1;
            else return 0;
        })
        console.log(list.data)
        return dispatch({type: ORDER_BY_WEIGTH, payload: list.data})
}}

export function getDogsMaxWeight() {
    return async function (dispatch) {
        const list = await axios.get(URL_DOG)
        list.data.sort((a, b) => {
            if (parseFloat(a.weight.replace('NaN', 0).split(' - ').join('.')) > parseFloat(b.weight.replace('NaN', 0).split(' - ').join('.'))) return -1;
                    if (parseFloat(a.weight.replace('NaN', 0).split(' - ').join('.')) < parseFloat(b.weight.replace('NaN', 0).split(' - ').join('.'))) return 1;
                    else return 0;
        })
        console.log(list.data)
        return dispatch({type: ORDER_BY_WEIGTH, payload: list.data})
}   
}


//PARA FORMULARIO:
export function getAllTemperaments () {
    return async function (dispatch) {
        const listTemp = await axios.get(URL_TEMPERAMENT)
        return dispatch({type: GET_TEMPERAMENT, payload: listTemp.data})
    }
}

export function filterApiBreeds () {
    return async function (dispatch) {
        const list = await axios.get(URL_DOG)
        const dogs =  list.data.filter((e) => e.createdInDb === false)
        return dispatch({type: FILTER_API_BREEDS, payload: dogs})
    }
}

export function filterDbBreeds () {
    return async function (dispatch) {
        const list = await axios.get(URL_DOG)
        const dogs = await list.data.filter((e) => e.createdInDb === true)
        if(dogs.length) {
                    return dispatch({type: FILTER_DB_BREEDS, payload: dogs})
        } else {
            alert ('Aún no ha añadido perritos') }
    }
        
}

export function searchByTemp(tempSearch) {
    return async function (dispatch) {
        const list = await axios.get(URL_DOG)
        const dogs = list.data.filter((e) => e.temperaments[0].name?.includes(tempSearch) )
        return dispatch({type: SEARCH_BY_TEMP, payload: dogs})

    }
}


