import { createStore } from 'redux';
import { rootReducer } from '../reducers/combineReducers.jsx';
console.log('rootReducer', rootReducer);

// 创建一个新的store，将reducer放里面去；
const store = createStore(rootReducer);
console.log('store', store);

// 创建一个函数将store返回出去；
export const configureStore = () => store
