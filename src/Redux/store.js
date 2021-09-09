import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import userReducer from './UserDuck';
import tasksReducer from './TasksDuck';

const rootReducer = combineReducers({
    loggedUser: userReducer,   
    tasks: tasksReducer
}); 

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) ) 
    return store
}
