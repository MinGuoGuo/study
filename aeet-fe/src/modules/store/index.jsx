import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import createLogger from 'redux-logger';
import reducers from '../reducers/index.jsx';
const rootReducer = combineReducers({
    ...reducers
});

const loggerMiddleware = createLogger();  // 打印日志用的；

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
    //loggerMiddleware
)(createStore);

export default function configureStore(state) {
    return createStoreWithMiddleware(rootReducer, state);
}