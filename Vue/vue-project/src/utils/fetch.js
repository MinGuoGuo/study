import 'whatwg-fetch';

export const fetchDta = (url, params) => {
    return async ({commit}, options = {}) => {
                const result = await fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'text/plain'},
                    body: JSON.stringify(params)
                })
                .then( (response) => {
                    return response.json();
                 })
                .catch((error) => {
                    console.log('请求失败！')
                });
                commit('getList', result);
        }
}