export const SUB = 'SUB';
export const ADD = 'ADD';

//导出一个减法的函数；
export function sub() {
    return {
        type: SUB
    }
}

//导出一个加法的函数;
export function add() {
    return {
        type: ADD
    }
}
