import { urlConfig } from '../../api';
import { message } from 'antd';

export const addStudent = (studentParam, message) => {
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
                message.success('保存成功')
            } else {
                message.error('保存失败！')
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
            message.error('保存失败！');
        })
    }
};