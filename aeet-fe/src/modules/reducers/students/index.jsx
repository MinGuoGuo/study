import * as types from '../../constants/ActionType.jsx';
import { initialState } from './initStudentList.jsx';
/**
 * 获取列表数据
 * */
export default function initStudentList(state = initialState, action) {
    switch (action.type) {
        case types.INITSTUDENTSLIST:
            console.log(action.payLoad);
            let dataTotal = action.payLoad.count;
            let currentPageNo = action.payLoad.totalpage;
            let studentListData = action.payLoad.list || [];
            let current = action.payLoad.page;
            return Object.assign({}, state, {
                studentListData: studentListData,
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
        case types.DELSTUDENT:
            let id = action.payLoad;
            let data = state.studentListData || [];
            for (var i = 0; i < data.length; i++) {
                if(data[i].id == id){
                    data.splice(i, 1)
                }
            }
            return Object.assign({}, state, {
                studentListData: [].concat(data)
            });
        case 'BUTTONLOADING':
            let buttonLoading = action.payLoad.loading;
            let loadingText = action.payLoad.loadingText;
            return Object.assign({}, state, {
                buttonLoading,
                loadingText
            });
        default:
            return state;
    }
}