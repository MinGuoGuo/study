import React, {  Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render () {
    return (
        <div>
            <h1>Hello React Router!</h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="repos">Repos</Link></li>
            </ul>
        </div>
    )
  }
}
