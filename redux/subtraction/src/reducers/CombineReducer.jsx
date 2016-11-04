import { combineReducers } from 'redux';
import counter from './CounterReducer.jsx';

//将所有的reducer合并成一个reducer
const rootReducer = combineReducers({
    counter
});

export default rootReducer;