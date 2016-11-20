import { combineReducers } from 'redux';
import number from './AppReducer.js';

//将所有的reducer合并成一个reducer
const rootReduce= combineReducers({
    number
});

export default rootReduce;