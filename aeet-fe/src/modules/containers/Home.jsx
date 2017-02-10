import React, { Component } from 'react';
import { Row } from 'antd';
import Header from './Header';
import Nav from './nav'
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super (props);
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <div className="nav">
                    <Nav />
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
