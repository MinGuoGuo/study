import { createStore } from 'redux';
import reducer from '../reducers/CombineReducer.js';

const store = createStore(reducer); //创建一个新的store，将reducer放里面去；

//将创建好的新store返回出去；
const configureStore = () => store;

//将新建的store函数暴露出去；
export default configureStore;