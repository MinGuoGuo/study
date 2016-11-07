import React, {Component, Render} from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker, message, Button, Menu, Icon } from 'antd';

/*function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));*/

/*直接将component里面的Component导出来，然后可以不用React.Component来引用*/
/*class App extends Component {
  render () {
    return (
        <div style={{ margin: 100}}>
          <h1>AntDesign Demo</h1>
          <hr/><br/>
          <DatePicker />
        </div>
    )
  }
};*/

//class App extends Component {
//    constructor (props) {
//        super (props);
//        this.state = {
//            loading: false,
//            text: '保存'
//        }
//    }
//    handleClick () {
//        console.log(1);
//        this.setState({
//            loading: this.state.loading == false ? true : false,
//            text: this.state.text == '保存' ? '保存中' : '保存'
//        });
//
//        /*let value = this.state.loading;
//        console.log(value)
//        if (value) {
//            this.state.text = '保存';
//        } else {
//            this.state.text = '保存中';
//        };*/
//    }
//    render () {
//        return (
//            <div style={{margin: 100}}>
//                <Button type="primary" size="large" loading={this.state.loading} onClick={() => this.handleClick()}>{this.state.text}</Button>
//            </div>
//        )
//    }
//}


//做个加active样式的方法；
/*class App extends  Component {
    render () {
        return (

        )
    }
}*/
class Header extends Component {
    render () {
        return (
            <div className="header">
                <p>
                    我是头部
                </p>
            </div>
        )
    }
}

const  SubMenu = Menu.SubMenu;
class Nav extends Component {
    constructor (props) {
        super (props);
        this.state = {
            current: '1',
            openKeys: []
        }
    }
    handleClick = (e) => {
        console.log('click', e);
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1)
        })
    }
    onToggle = (info) => {
        console.log(info)
        this.setState({
            //openKeys: info.key
            openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
        })
    }
    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                style={{ width: 240, background: '#ccc', height: 400 }}
                onOpen={this.onToggle}
                onClose={this.onToggle}
                onClick={this.handleClick}
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="7">Option 9</Menu.Item>
                    <Menu.Item key="8">Option 10</Menu.Item>
                    <Menu.Item key="9">Option 11</Menu.Item>
                    <Menu.Item key="10">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}



render(
    <div>
        <Header />
        <Nav />
    </div>,
    document.getElementById('root')
);//直 接将render方法从react-dom里面导出来然后可以不用ReactDOM.render
