export const SUB = 'SUB';  //申明一个减法的type值；
export const ADD = 'ADD'; // 申明一个减法的type值；

//导出一个减法的函数；
export function sub () {
    return {
        type: SUB
    }
}

//导出一个加法的函数；
export function add () {
    return {
        type: ADD
    }
}

