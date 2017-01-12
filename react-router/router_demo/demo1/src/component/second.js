import React, { Component } from 'react';

export default class Second extends Component {
    constructor (props) {
        super (props);
        this.state = {
            result: 0
        }
    }
    addClick (x) {
        console.log(typeof parseInt(x));
        this.setState({
            result: this.state.result + parseInt(x)
        });
    }
    render () {
        return (
            <div>
                <h1>我是第二个页面</h1>
                <button onClick={() => this.addClick(this.props.params.num)}>Add</button>
                <p>姓名: {this.props.params.name}</p>
                <p>年龄: {this.props.params.age}</p>
            </div>
        )
    }
}
