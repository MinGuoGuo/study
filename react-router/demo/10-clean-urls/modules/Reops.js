import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

export default class Reops extends Component {
    render () {
        return (
            <div>
                <h2>Hello Repos!</h2>
                <ul>
                    <li><NavLink to="/repos/reactjs/汉子">名字</NavLink></li>
                    <li><NavLink to="/repos/facebook/25">年龄</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}