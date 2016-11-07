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
//为了让默认挂载的组件Home只有被选中的时候才处于active，因此在这里我们不用NavLink，有一下两种方法来解决这种问题
import NavLink from './NavLink';
import Home from './Home';
import { IndexLink } from 'react-router';  // 第一种解决办法直接引入IndexLink,然后给Home加上activeClassName
/*<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>*/ //这是第一种解决办法，需要引用一个IndexRoute
/*第二种解决办法我们直接用公共的NavLink然后设置属性onlyActiveOnIndex={true}*/ //详情请见下面的案例;

export default class App extends Component {
     render () {
         return (
             <div>
                 <h1>Hello React Router!</h1>
                 <ul>
                     <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                     <li><NavLink to="/about">About</NavLink></li>
                     <li><NavLink to="repos">Repos</NavLink></li>
                 </ul>
                 {this.props.children || <Home />}
             </div>
         )
     }
 }
