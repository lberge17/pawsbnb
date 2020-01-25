import { combineReducers } from 'redux';
import businessReducer from './businessReducer'
import userReducer from './userReducer'

export default combineReducers({
    business: businessReducer,
    user: userReducer
});