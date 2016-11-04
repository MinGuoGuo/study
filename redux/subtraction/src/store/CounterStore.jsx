import { createStore } from 'redux';
import reducer from '../reducers/CombineReducer.jsx';


const store = createStore(reducer);  //创建一个新的store，将reducer放里面去；

//创建一个函数将store返回出去；
const configureStore = () => store

//将返回的store返回出去；
export default configureStore
