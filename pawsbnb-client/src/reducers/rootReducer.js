import { combineReducers } from 'redux';
import testReducer from './testReducer';
import businessReducer from './businessReducer'
import userReducer from './userReducer'

export default combineReducers({
    test: testReducer,
    business: businessReducer,
    user: userReducer
});