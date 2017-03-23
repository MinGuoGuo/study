import { SUB, ADD } from '../constants/actionType.jsx'
// 定义一个减法的函数；
export const sub = (data) => {
    return {
        type: SUB,
        payLoad: data
    }
};

// 定义一个加法的函数；
export const add = (data) => {
    return {
        type: ADD,
        payLoad: data
    }
}
