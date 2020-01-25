import { combineReducers } from 'redux';
import testReducer from './testReducer';
import businessReducer from './businessReducer'

export default combineReducers({
    test: testReducer,
    business: businessReducer
});