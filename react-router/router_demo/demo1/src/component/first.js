import React, { Component } from 'react';

export default class First extends Component {
    constructor (props) {
        super (props);
    }
    backClick () {
        window.history.go(-1);
    }
    render () {
        return (
            <div>
                <h1>我是第一个页面！</h1>
                <button onClick={() => this.backClick()}>返回</button>
            </div>
        )
    }
}
