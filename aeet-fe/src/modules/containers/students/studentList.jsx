import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Table, Form } from 'antd';
const FormItem = Form.Item;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
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

class studentList extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    componentWillMount() {
        // ajax
    }
    ComponentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }
    handleFormLayoutChange = (e) => {
        this.setState({ formLayout: e.target.value });
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
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div>
                <div className="search-selection">
                    {/* 姓名：<Input size="large" data-type="name" style={{width: 160, marginRight: 40}} placeholder="姓名"/>
                    年龄：<Input size="large" data-type="age" style={{width: 160, marginRight: 40}} placeholder="年龄"/>
                    <Button type="primary" size="large">搜索</Button>
                    <Button type="primary" size="large" style={{marginLeft: 20}}>新建</Button> */}
                    <Form inline onSubmit={this.handleSubmit}>
                        <FormItem
                        //   validateStatus={userNameError ? 'error' : ''}
                        //   help={userNameError || ''}
                        label="姓名"
                        >
                          {/* {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                          })( */}
                            <Input placeholder="姓名" />
                          {/* )} */}
                        </FormItem>
                        <FormItem
                        //   validateStatus={passwordError ? 'error' : ''}
                        //   help={passwordError || ''}
                            label="年龄"
                            style={{marginLeft: 30}}
                        >
                          {/* {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                          })( */}
                            <Input placeholder="年龄" />
                          {/* )} */}
                        </FormItem>
                        <FormItem style={{marginLeft: 40}}>
                          <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}
                            style={{marginRight: 10}}
                          >
                            搜索
                          </Button>
                          <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}
                          >
                            重置
                          </Button>
                        </FormItem>
                    </Form>
                </div>
                <div className="table">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        )
    }
}
export const List = Form.create()(studentList);
