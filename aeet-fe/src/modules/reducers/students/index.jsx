import * as types from '../../constants/ActionType.jsx';
import { initialState } from './initStudentList.jsx';
/**
 * 获取列表数据
 * */
export default function initStudentList(state = initialState, action) {
    switch (action.type) {
        case types.INITSTUDENTSLIST:
            const dataTotal = action.payLoad.count;
            const currentPageNo = action.payLoad.totalpage;
            const studentListData = action.payLoad.list || [];
            const current = action.payLoad.page;
            return Object.assign({}, state, {
                current,
                studentListData,
                pagination: {
                    total: dataTotal,
                    defaultPageSize: 10,
                    pageSize: 5,
                    showQuickJumper: true,
                    current: current,
                    showTotal(total) {
                        return '共 ' + total+ ' 条查询结果';
                    }
                }
            });
        case 'BUTTONLOADING':
            let buttonLoading = action.payLoad.loading;
            let loadingText = action.payLoad.loadingText;
            return Object.assign({}, state, {
                buttonLoading,
                loadingText
            });
        case 'ISUPDATE':
            const isUpdate = action.payload.isUpdate;
            return Object.assign({}, state, {
                isUpdate
            })
        default:
            return state;
    }
}