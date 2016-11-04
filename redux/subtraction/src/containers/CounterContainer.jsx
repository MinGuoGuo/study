import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../component/counter.jsx';//直接引入ui组件即可
import * as CounterAction from '../actions/CounterAction.jsx';

//将state绑定到ui组件的props上去；
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

//讲action上的所有方法绑定到ui组件的props上去；
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(CounterAction, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

