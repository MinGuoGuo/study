import { combineReducers } from 'redux';
import { counter } from './counterReducer.jsx';
console.log('counter', counter);

export const rootReducer = combineReducers({
    counter
});
