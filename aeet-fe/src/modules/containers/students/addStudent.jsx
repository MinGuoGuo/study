import React, { Component } from 'react';
import { addStudent } from '../../actions/index.jsx';
import { connect } from 'react-redux';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Modal } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const addStudents = Form.create()(React.createClass({
    //getInitialState() {
    //    return {
    //        passwordDirty: false,
    //        loading: false,
    //        text: '保存'
    //    };
    //},
    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        this.props.form.validateFieldsAndScroll((err, data) => {
            if (!!err) {
                console.log('Received values of form: ', data);
                return;
            }
            dispatch({
                type: 'BUTTONLOADING',
                payLoad: {
                    loading: true,
                    loadingText: '保存中'
                }
            });
            dispatch(addStudent(data))
        });
    },
    userCheck (rule, value, callback) {
        const re = /^.{2,8}$/;
        if (!re.test(value)) {
            callback('请输入任意格式的2-8位字符,且不能为空!');
        } else {
            callback();
        }
    },
    sexCheck (rule, value, callback) {
        if (value !== '') {
            callback();
        } else{
            callback('请填写您的性别！')
        }
    },
    ageCheck (rule, value, callback) {
        const re = /^[123456789]\d{0,2}$/;
        if (re.test(value) || value == '') {
            callback();
        } else {
            callback('请输入正确的年龄！');
        }
    },
    phoneCheck (rule, value, callback) {
        const re = /^1[34578]\d{9}$/;
        if (re.test(value) || value == '') {
            callback();
        } else {
            callback('请输入正确的11位手机号码！');
        }
    },
    backClick () {
        window.history.go(-1);
    },
    render() {
        const _this = this;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 6,
            },
        };
        const { buttonLoading, loadingText } = this.props;
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="姓名"
                    hasFeedback
                >
                    {getFieldDecorator('name', {
                        //rules: [{
                        //    required: true, message: '用户名不能为空！',
                        //}, {
                        //    validator: this.userCheck,
                        //}],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="性别"
                >
                    {getFieldDecorator('sex', {
                        //rules: [{
                        //    required: true, message: '请选择您的性别!'}, {
                        //
                        //},{
                        //    validator: this.sexCheck
                        //}],
                    })(
                        <Select showSearch default='' placeholder="性别" optionFilterProp="children" onChange={ this.showValue } notFoundContent="">
                            <Option value="男">男</Option>
                            <Option value="女">女</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="年龄"
                    hasFeedback
                >
                    {getFieldDecorator('age', {
                        //rules: [{
                        //    required: true, message: '年龄不能为空！',
                        //}, {
                        //    validator: this.ageCheck
                        //}],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="电话"
                    hasFeedback
                >
                    {getFieldDecorator('tel', {
                        //rules: [{
                        //    required: true, message: '电话号码不能为空！',
                        //}, {
                        //    validator: this.phoneCheck,
                        //}],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button loading={buttonLoading} type="primary" htmlType="submit" size="large">{loadingText}</Button>
                    <Button style={{margin: '0 15px'}} type="primary" onClick={_this.backClick}>返回</Button>
                </FormItem>
            </Form>);
    },

}));

const mapStateToProps = state => {
    console.log('我是state', state);
    const buttonLoading = state.initStudentList.buttonLoading;
    const loadingText = state.initStudentList.loadingText;
    //const {
    //    buttonLoading, loadingText
    //} = state.initinitStudentList;
    return {
        buttonLoading,
        loadingText
    }
};

export default connect(mapStateToProps)(addStudents);
