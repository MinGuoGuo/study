import { urlConfig } from '../../api';
import $ from 'jquery'
import * as types from '../../constants/ActionType.jsx'
import fetch from 'isomorphic-fetch';

export const getStudentsList = (queryObj) => {
    return dispatch => {
       return fetch('http://127.0.0.1/sellDoor/php/list.php', {
            method: 'POST',
            headers: {'Content-Type': 'text/plain'},
            body: JSON.stringify(queryObj)
        })
        .then( (response) => {
            return response.json();
        })
        .then((result)=>  {
            dispatch(receiveStudentList(result));
        })
        .catch((error) => {
            alert('请求失败呀')
        })

    };

};

function receiveStudentList(data) {
    return {
        type: types.INITSTUDENTSLIST,
        payLoad: data
    }
}
