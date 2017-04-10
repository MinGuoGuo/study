import 'whatwg-fetch';
import { Message } from 'element-ui';

const fetchData = (url, params, callback) => {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(params)
    })
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        callback(result) 
    })
    .catch((error) => {
        debugger;
         Message({
            message: '参数错误',
            type: 'error'
        });
    });
};

export default fetchData;