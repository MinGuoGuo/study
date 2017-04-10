import fetchData from '../../../utils/fetch';
import { Message } from 'element-ui';

// 获取列表数据；
export const initList = ({commit}, params) => {
    fetchData('http://127.0.0.1/sellDoor/php/list.php', params, (data) => {
        commit('INITLIST', data);
    });
};

// 删除操作
export const delList = ({commit}, params) => {
    fetchData('http://127.0.0.1/sellDoor/php/del.php', params.id, (data) => {
        if (data.code == '1') {
            debugger
            Message({
                message: '删除成功！',
                type: 'success'
            });
            initList({commit}, params.list);
        } else {
            Message({
                message: '删除失败',
                type: 'error'
            });
        }
    });
}