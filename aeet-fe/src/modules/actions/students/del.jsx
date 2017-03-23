import { urlConfig } from '../../api';
import $ from 'jquery'
import * as types from '../../constants/ActionType.jsx'
import { getStudentsList } from './students.jsx';
import fetch from 'isomorphic-fetch';

// 删除成功以后重新调用渲染列表的action

export const delStudent = (queryObj) => {
    return dispatch => {
        return fetch('http://127.0.0.1/sellDoor/php/del.php', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(queryObj)
        })
        .then( (response) => {
            return response.json()
        })
        .then((result)=>  {
            console.log(result);
        })
        .catch((error) => {
            alert('删除失败')
        });
    };
};

//function delStudents(data) {
//    return {
//        type: types.DELSTUDENT,
//        payLoad: data
//    }
//}
