import React, { Component } from 'react';
import { Menu, Icon }  from 'antd';


const  SubMenu = Menu.SubMenu;
export default class Nav extends Component {
    constructor (props) {
        super (props);
        this.state = {
            current: '1',
            openKeys: []
        }
    }
    handleClick (e) {
        console.log('click', e);
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1)
        })
    }
    onToggle (info) {
        console.log(info);
        this.setState({
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
                onOpenChange={this.onToggle}
                onClick={this.handleClick}
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>资产池管理</span></span>}>
                    <Menu.Item key="1">新建资产池</Menu.Item>
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
