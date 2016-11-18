import react, { Component, PropTypes } from 'react';

class Counter extends Component {
    render () {
        const { add, sub, counter } = this.props;
        return (
            <div>
                <p>
                    click {counter} times
                    &nbsp;
                    <button onClick={sub}>减法</button>
                    &nbsp;
                    <button onClick={add}>加法</button>
                </p>
            </div>
        )
    }
}


//限制组件安全；
Counter.PropTypes = {
    sub: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
};
export default Counter