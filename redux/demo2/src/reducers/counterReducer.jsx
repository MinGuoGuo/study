import { SUB, ADD } from '../constants/actionType.jsx';

// 定义一个加减法的函数;
export const counter = (state = 0, action) => {
	console.log('action.payLoad', action.payLoad);
    switch(action.type) {
        case ADD:
            return state + action.payLoad;
        case SUB:
            return state - action.payLoad;
        default:
            return state;
    }
}

// export default counter
