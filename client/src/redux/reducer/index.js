import { FILTER_API_BREEDS, FILTER_DB_BREEDS, GET_ALL_DOGS, GET_DOG_BY_ID, GET_DOG_BY_NAME, GET_TEMPERAMENT, ORDER_BY_MAX_WEIGHT, ORDER_BY_NAME, ORDER_BY_WEIGTH, SEARCH_BY_TEMP } from "../actions/constantes";

const initialState = {
    allDogs: [],
    temperaments: [],
    dog: {}
    // dogscopy:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_DOGS: 
        return {
            ...state,
            allDogs: action.payload,
            dog: {}
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

        case GET_DOG_BY_ID:
            return{
                ...state,
                dog: action.payload
            }

        case ORDER_BY_NAME: 
        return {
            ...state,
            allDogs: action.payload,
        }
        
        case ORDER_BY_WEIGTH:
            return {
                ...state,
                allDogs: action.payload
            }

        case ORDER_BY_MAX_WEIGHT: {
            return {
                ...state,
                allDogs: action.payload
            }
        }

        case FILTER_API_BREEDS: {
            return {
                ...state,
                allDogs: action.payload
            }
        }

        case FILTER_DB_BREEDS: {
            return {
                ...state,
                allDogs: action.payload
            }
        }

        case SEARCH_BY_TEMP: {
            return {
                ...state,
                allDogs: action.payload
            }
        }

        default: return {...state}
    }
}


export default reducer;