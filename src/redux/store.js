import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();  

const store = createStore(rootReducer, DevTools, applyMiddleware(thunk));

export default store;