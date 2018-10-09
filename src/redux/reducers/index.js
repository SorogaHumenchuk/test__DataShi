import {combineReducers} from 'redux';
import currency from './PBreducer';
import inputs from './inputReducer';

const rootReducer = combineReducers({
    currency,
    inputs,
})

export default rootReducer;     