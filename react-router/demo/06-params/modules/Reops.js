import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Reops extends Component {
    render () {
        return (
            <div>
                <h2>Hello Repos!</h2>
                <ul>
                    <li><Link to="/repos/reactjs/汉子">名字</Link></li>
                    <li><Link to="/repos/facebook/25">年龄</Link></li>
                </ul>
            </div>
        )
    }
}