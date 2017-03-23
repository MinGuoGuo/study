import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterAction from '../actions/counterAction.jsx'

class Counter extends Component {
    render() {
        const { add, sub, num } = this.props;
        console.log('this.props', this.props);
        return (
            <div>
                <p>
                    currentNo is <span style={{color: 'red', marginRight: 20}}>{ num }</span>
                    &nbsp;
                    <button onClick={() => {add(2)}}>加法</button>
                    &nbsp;&nbsp;
                    <button onClick={() => {sub(1)}}>减法</button>
                </p>
            </div>
        )

    }
}

// 限制组件安全；
Counter.PropTypes = {
    sub: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    num: PropTypes.number.isRequired
}

// 将state绑定到ui组件的props上去；
const mapStateToProps = (state) => {
    console.log('state.counter', state.counter);
    console.log(state);
    return {
        num: state.counter
    }
}

// 将action上所有的方法绑定到ui组件的props上去；
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(CounterAction, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
