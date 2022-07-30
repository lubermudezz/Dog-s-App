import { GET_ALL_DOGS, GET_DOG_BY_NAME, GET_TEMPERAMENT } from "../actions/constantes";

const initialState = {
    allDogs: [],
    dog: {},
    temperaments: []
    // dogscopy:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_DOGS: 
        return {
            ...state,
            allDogs: action.payload,
        }
        case GET_TEMPERAMENT:
            return{
                ...state,
                temperaments: action.payload

            }
        case GET_DOG_BY_NAME:
            return {
                ...state,
                allDogs: action.payload
            }

        default: return {...state}
    }
}


export default reducer;