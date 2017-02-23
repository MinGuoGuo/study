import { urlConfig } from '../../api';
import $ from 'jquery'

export const addStudent = studentParam => {
    return dispatch => {
        return fetch('http://127.0.0.1/sellDoor/php/add.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify(studentParam)
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            if (result.code == 1) {
                alert('保存成功')
            } else {
                alert('保存失败！')
            }
            dispatch({
                type: 'BUTTONLOADING',
                payLoad: {
                    loading: false,
                    loadingText: '保存'
                }
            });
            window.history.go(-1);
        })
        .catch((error) => {
            dispatch({
                type: 'BUTTONLOADING',
                payLoad: {
                    loading: false,
                    loadingText: '保存'
                }
            });
            alert('保存失败！');
        })
    }
};