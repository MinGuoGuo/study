import * as counter from './counter/counter';
console.log(counter);
export default {
    ...counter
}
// export const ADD = ({commit}, num) => {
//     commit('ADD', num);
// }   
// export const SUB = ({commit}) => {
//     commit('SUB');
// }