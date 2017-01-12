import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';
import Home from './component/index';
import First from './component/first';
import Second from './component/second';

render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}>

        </Route>
        <Route path="/first" component={First} />
        <Route path="/second/:name/:age" component={Second} />
    </Router>
), document.getElementById('root'));
