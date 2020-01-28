import { combineReducers } from 'redux';
import businessReducer from './businessReducer'
import userReducer from './userReducer'
import logReducer from './logReducer'
import clientsReducer from './clientsReducer'
import fetchReducer from './fetchReducer'
import appointmentsReducer from './appointmentsReducer'
import authReducer from './authReducer'

export default combineReducers({
    // business: businessReducer,
    // user: userReducer,
    // loggedIn: logReducer,
    // clients: clientsReducer,
    // appointments: appointmentsReducer,
    requesting: fetchReducer,
    auth: authReducer
});