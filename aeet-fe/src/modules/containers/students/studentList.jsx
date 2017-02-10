import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Table } from 'antd';
import './studentList.css'

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

export default class studentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }
    componentWillMount() {
        // ajax
    }
    ComponentDidMount() {

    }
    render() {
        const columns = [{
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          render: text => <a href="#">{text}</a>,
        }, {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        }, {
          title: '地址',
          dataIndex: 'address',
          key: 'address',
        }, {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
              <a href="#">修改</a>
              <span className="ant-divider" />
              <a href="#" className="ant-dropdown-link">
                删除
              </a>
            </span>
          ),
        }];
        return (
            <div>
                <div className="search-selection">
                    姓名：<Input size="large" data-type="name" style={{width: 160, marginRight: 40}} placeholder="姓名"/>
                    年龄：<Input size="large" data-type="age" style={{width: 160, marginRight: 40}} placeholder="年龄"/>
                    <Button type="primary" size="large">搜索</Button>
                    <Button type="primary" size="large" style={{marginLeft: 20}}>新建</Button>
                </div>
                <div className="table">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        )
    }
}
