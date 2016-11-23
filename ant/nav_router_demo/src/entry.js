import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home/Home';
import Index from './components/Index/Index';


/*
* 以下方法是直接将组件渲染出来；下面我们看看如何用路由的形式将组件渲染出来
* */
/*render(
     <Home />,
     document.getElementById('root')
 );*/

/*
* 将组件直接挂载在路由上；
* */
render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <Route path="/index" component={Index} />
        </Route>
    </Router>
), document.getElementById('root'));

