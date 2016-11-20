/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));*/

/*import React, { Component } from 'react';
import { render } from 'react-dom';
import '../index.css';
import { Button } from 'antd';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            number: 0
        };
    }*/
    /*subClick () {
        this.setState({
            number: this.state.number - 1
        });
    }
    addClick () {
        this.setState({
            number: this.state.number + 1
        })
    }
     <Button onClick={() => {this.subClick()}} type="primary" style={{marginRight: 10}}>减法</Button>
     <Button onClick={() => {this.addClick()}} type="primary">加法</Button>
    */
   /* subClick = () => {
        this.setState({
            number: this.state.number - 1
        });
    }
    addClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    render () {
        return (
            <div className="wrap">
                <h3>我是一个加减法的小demo</h3>
                <p style={{margin: '20px 0'}}>&nbsp;click <span>{this.state.number}</span>&nbsp;times</p>
                <Button onClick={this.subClick} type="primary" style={{marginRight: 10}}>减法</Button>
                <Button onClick={this.addClick} type="primary">加法</Button>
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
);*/
/*======================以上方法是直接用react来实现的，下面我们来看下用react+antd来如何实现======================*/


//方法一直接将ui组件渲染然出来
/*
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
render(
    <App />,
    document.getElementById('root')
);*/

//方法二将ui组件合并成容器组件；
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppCountainers.js';
import configureStore from './store/AppStore';

//将ui组件合并成容器组件；
const appStore = configureStore();

//渲染咯；
render(
    <Provider store={appStore}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);




