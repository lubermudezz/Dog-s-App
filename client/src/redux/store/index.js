import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer'
import thunk from 'redux-thunk'

const composeEnhancers =(typeof window !== 'undefined' && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) || compose;

export const store = createStore(
    reducer,  
    composeEnhancers(applyMiddleware(thunk))
);