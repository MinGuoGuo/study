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

import React, { Component } from 'react';
import { render } from 'react-dom';
import '../index.css';
import { Button } from 'antd';

class App extends Component {
    render () {
        return (
            <div className="wrap">
                <h3>我是一个加减法的小demo</h3>
                <p style={{margin: '20px 0'}}>&nbsp;click <span>many</span>&nbsp;times</p>
                <Button type="primary" style={{marginRight: 10}}>加法</Button>
                <Button type="primary">减法</Button>
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
);