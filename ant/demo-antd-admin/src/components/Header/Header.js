import React, { Component } from 'react';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';
import { Link } from 'react-router';
import './header.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Header extends Component {
     constructor () {
        super()
     }
    handClick () {

    }
    render () {
        const { user } = this.props;
        return (
            <div className="header">
                <Menu className="header-menu" onClick={this.handClick} mod="horizontal">
                    <SubMenu title={<span><Icon type="user" />{user.user}</span>}>
                        <Menu.Item key="setting:1">选项1</Menu.Item>
                        <Menu.Item key="setting:2">选项2</Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="setting:3">注销</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="mail">
                        <Icon type="question" />帮助
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}