import React, { Component, PropTypes } from 'react';
import { Button } from 'antd';
import '../../index.css'

export default class App extends Component {
    render () {
        const { add, sub, number } = this.props;
        return (
            <div className="wrap">
                <h3>我是一个加减法的小demo</h3>
                <p style={{margin: '20px 0'}}>&nbsp;click <span>{number}</span>&nbsp;times</p>
                <Button onClick={sub} type="primary" style={{marginRight: 10}}>减法</Button>
                <Button onClick={add} type="primary">加法</Button>
            </div>
        )
    }
}

//限制组件安全,来验证传入数据的有效性；
App.PropTypes = {
    sub: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    number: PropTypes.number.isRequired
};