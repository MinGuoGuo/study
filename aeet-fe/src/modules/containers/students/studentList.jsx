import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Table, Form, Popconfirm, message } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import $ from 'jquery';
const FormItem = Form.Item;
import { getStudentsList, delStudent } from '../../actions/index.jsx';
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class studentList extends Component {
    
    componentWillMount() {

    }
    componentDidMount() {
        let obj = {name: '', age: '', page: 1, pagesize: 10};
        const { dispatch } = this.props;
        dispatch(getStudentsList(obj));
    }
    searchClick() {
        const { dispatch } = this.props;
        let searchData = this.props.form.getFieldsValue();
        searchData.pagesize = 5;
        searchData.page = 1;
        for (var i in searchData) {
            if(searchData[i] == undefined) {
                searchData[i] = '';
            }
        }
        dispatch(getStudentsList(searchData));
    }
    delClick(id) {
        const { dispatch, pagination } = this.props;
        dispatch(delStudent({id: id}));
        // let searchData = this.props.form.getFieldsValue();
        // console.log('pagination', pagination);
        // searchData.page = pagination.current;
        // searchData.pagesize = 5;
        // dispatch(getStudentsList(searchData));
    }
    handTableChange(e) {
        const { dispatch } = this.props;
        let searchData = this.props.form.getFieldsValue();
        for (var i in searchData) {
            if(searchData[i] == undefined) {
                searchData[i] = '';
            }
        }
        searchData.page = e.current;
        searchData.pagesize = 5;
        dispatch(getStudentsList(searchData));
    }
    render() {
        const { data, pagination } = this.props;
        const columns = [{
          title: '姓名',
          dataIndex: 'test_name',
          key: 'test_name'
        }, {
          title: '年龄',
          dataIndex: 'test_age',
          key: 'test_age'
        }, {
          title: '性别',
          dataIndex: 'test_sex',
          key: 'test_sex'
        },{
            title: '电话',
            dataIndex: 'test_phone',
            key: 'test_phone'
        },{
          title: '操作',
          key: 'test_id',
          dataIndex: 'test_id',
          render: (text, record) => (
            <span>
              <span><Link to={{pathname: "modifyUser/" + record.test_id}}>修改</Link></span>
              <span className="ant-divider" />
               <Popconfirm placement="topRight" title="是否删除本条数据" onConfirm={this.delClick.bind(this, record.test_id)} okText="确认" cancelText="取消">
                   <a href="javascript:;">
                       删除
                   </a>
               </Popconfirm>
            </span>
          )
        }];
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (
            <div>
                <div className="search-selection">
                    <Form inline from={this.props.from}>
                        <FormItem
                            label="姓名"
                        >
                            {getFieldDecorator('name')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            label="年龄"
                        >
                          {/* {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                          })( */}
                            <Input placeholder="年龄 " />
                          {/* )} */}
                            {getFieldDecorator('age')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem style={{margin: '0 20px'}}>
                          <Button
                            type="primary"
                            onClick={this.searchClick.bind(this)}
                          >
                            搜索
                          </Button>
                          <Button
                            type="primary"
                            style={{margin: '0 20px'}}
                          >
                            重置
                          </Button>
                        </FormItem>
                    </Form>
                    <div style={{margin: '20px 0'}}>
                        <FormItem>
                            <Button
                                type="primary"
                            >
                                <Link to="/adduser">新建</Link>
                            </Button>
                        </FormItem>
                    </div>
                </div>
                <div className="table">
                    <Table bordered pagination={pagination} onChange={this.handTableChange.bind(this)} columns={columns} dataSource={data}  rowKey={(record, index)=>index} />
                </div>
            </div>
        )
    }
}
const student = Form.create()(studentList);

//将所有的state绑定到ui组件上去；
//const mapStateToProps = (state) => {j/
//    console.log('state', state.initStudentList);
//    return {
//        data: state
//    }
//};
function mapStateToProps(state) {
    const data = state.initStudentList.studentListData;
    const pagination = state.initStudentList.pagination;
    return {
        data,
        pagination
    }
}

 //将action上所有的方法绑定到组件上去；
//const mapDispatchToProps = (dispatch) => {
//    return bindActionCreators(getStudentsList, dispatch);
//};

export default connect(mapStateToProps)(student);
