import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

const name = 'lbj';
const age = 32
export default class Home extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return(
            <div>
                <ul>
                    <li><Link to="/first">第一个页面</Link></li>
                    <li><Link to={{pathname: "second/" + name +"/" + age}}>第二个页面</Link></li>
                    <li>第三个页面</li>
                    <li>第四个页面</li>
                </ul>
            </div>
        )
    }
}
