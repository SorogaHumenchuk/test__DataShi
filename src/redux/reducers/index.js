import {combineReducers} from 'redux';
import cryptology from './cryptologyRaducer';
import value from './inputReducer';

const rootReducer = combineReducers({
    cryptology,
    value,
})

export default rootReducer;