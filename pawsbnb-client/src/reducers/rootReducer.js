import { combineReducers } from 'redux';
import businessReducer from './businessReducer'
import fetchReducer from './fetchReducer'
import authReducer from './authReducer'

export default combineReducers({
    requesting: fetchReducer,
    auth: authReducer,
    businesses: businessReducer
});