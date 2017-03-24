import { urlConfig } from '../../api';
import * as types from '../../constants/ActionType.jsx'
import fetch from 'isomorphic-fetch';
import {message} from 'antd';

export const getStudentsList = (queryObj, message) => {
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
            message.error('参数错误!')
        })

    };

};

function receiveStudentList(data) {
    return {
        type: types.INITSTUDENTSLIST,
        payLoad: data
    }
}
