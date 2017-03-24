import { urlConfig } from '../../api';
import fetch from 'isomorphic-fetch';
import { message } from 'antd';

// 删除成功以后重新调用渲染列表的action

export const delStudent = (queryObj) => {
    return dispatch => {
        return fetch('http://127.0.0.1/sellDoor/php/del.php', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(queryObj)
        })
        .then( (response) => {
            return response.json();
        })
        .then((result)=>  {
            if (result.code == 1) {
                message.success('删除成功！');
                dispatch({
                    type: 'ISUPDATE',
                    payload: {
                        isUpdate: true
                    }
                });
            } else {
                message.error('删除失败！')
            }
        })
        .catch((error) => {
            debugger;
            message.error('参数错误！')
        });
    };
};

