import { SUB, ADD } from '../constants/actionType.jsx';

// 定义一个加减法的函数;
export const counter = (state = 0, action) => {
    switch(action.type) {
        case ADD:
            return state + 1;
        case SUB:
            return state - 1;
        default:
            return state;
    }
}

// export default counter
