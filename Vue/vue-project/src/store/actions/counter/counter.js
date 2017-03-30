import {fetchData} from '../../../utils/fetch';


export const ADD = ({commit}, num) => {
    commit('ADD', num);
}   
export const SUB = ({commit}) => {
    commit('SUB');
}
// export const request = ({commit})