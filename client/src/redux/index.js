/*

import axios from 'axios';

export function getAllDogs() {
    return async function (dispatch) {
        const result = await axios.get(`http://localhost:3001/dogs`)
        return dispatch({type:'GET_ALL_DOGS', payload: result.data})
    }
}

export function getDogById () {
    return async function (dispatch) {
        const result = await axios.get(`http://localhost:3001/dogs/:dogId`)
        return dispatch({type:'GET_DOG_BY_ID', payload: result.data})
    }
}

export function createNewDog (payload) {
    return async function (dispatch) {
        const result = await axios.post(`http://localhost:3001/dogs`, payload)
        return result
    } 
}

*/