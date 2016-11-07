import React, {  Component } from 'react';
import { Link } from 'react-router';


// 如下可以加行内样式，也可以加上activeClassName，然后在样式表中添加样式；
/*export default class App extends Component {
  render () {
    return (
        <div>
            <h1>Hello React Router!</h1>
            <ul>
                <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
                <li><Link to="repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
            </ul>
            {this.props.children}
        </div>
    )
  }
}*/

//添加activeClassName
/*
export default class App extends Component {
     render () {
         return (
             <div>
                 <h1>Hello React Router!</h1>
                 <ul>
                     <li><Link to="/about" activeClassName="active">About</Link></li>
                     <li><Link to="repos" activeClassName="active">Repos</Link></li>
                 </ul>
                 { this.props.children }
             </div>
         )
     }
 }*/

//以上两种方式写起来都比较繁琐，不建议使用，看起来凌乱，复杂。所以要以以中国更简单的方式呈现出来，辣么问题来了，一下就是简单方法
import NavLink from './NavLink';
import Home from './Home';
export default class App extends Component {
     render () {
         return (
             <div>
                 <h1>Hello React Router!</h1>
                 <ul>
                     <li><NavLink to="/about">About</NavLink></li>
                     <li><NavLink to="repos">Repos</NavLink></li>
                 </ul>
                 {this.props.children || <Home />}
             </div>
         )
     }
 }
