import { bindActionCreators } from 'redux';
import {  connect } from 'react-redux';
import App from '../components/App.js'; //将ui组件引入；
import * as AppAction from '../actions/AppActions.js'; //将全部的state都引入进来；

//state绑定到ui组件上去；
const mapStateToProps = (state) => {
    return {
        number: state.number
    }
};

// 将action里面所有的方法绑定到ui组件上的props上去；
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(AppAction, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);