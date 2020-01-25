import { combineReducers } from 'redux';
import businessReducer from './businessReducer'
import userReducer from './userReducer'
import logReducer from './logReducer'

export default combineReducers({
    business: businessReducer,
    user: userReducer,
    loggedIn: logReducer
});