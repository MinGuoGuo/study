import { SUB, ADD } from '../constants/actionType.jsx'
// 定义一个减法的函数；
export const sub = () => {
    return {
        type: SUB
    }
};

// 定义一个加法的函数；
export const add = () => {
    return {
        type: ADD
    }
}
