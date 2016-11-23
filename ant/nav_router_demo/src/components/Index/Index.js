import React, { Component } from 'react';
import { Input, Form, Button, Table, Icon } from 'antd';
import $ from 'jquery';
import './Index.css';
const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
}, {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex'
}, {
    title: '电话',
    dataIndex: 'tel',
    key: 'tel'
},{
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="#">修改</a>
            <span className="ant-divider" />
            <a href="#">删除</a>
        </span>
    )
}];

/*const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    sex: '女',
    tel: '18608447800'
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    sex: '女',
    tel: '18608447800'
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    sex: '女',
    tel: '18608447800'
}];*/


export default class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount = () => {
        console.log(1);

        $.ajax({
            url: '/src/mock/user.json',
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        })
    }
    render () {
        return (
            <div className="index">
                <div className="search">
                    姓名：<Input size="large" style={{width: 160, marginRight: 40}} placeholder="姓名"/>
                    年龄：<Input size="large" style={{width: 160, marginRight: 40}} placeholder="年龄"/>
                    <Button type="primary" size="large">搜索</Button>
                </div>
                <div className="table">
                    <Table columns={columns} dataSource={this.state.data} />
                </div>
            </div>
        )
    }
}