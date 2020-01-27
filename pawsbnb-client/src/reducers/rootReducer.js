import { combineReducers } from 'redux';
import businessReducer from './businessReducer'
import userReducer from './userReducer'
import logReducer from './logReducer'
import clientsReducer from './clientsReducer'

export default combineReducers({
    business: businessReducer,
    user: userReducer,
    loggedIn: logReducer,
    clients: clientsReducer
});