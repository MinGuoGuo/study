import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';
import Home from './component/index';
import First from './component/first';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Home}>

        </Route>
        <Route path="/first" component={First} />
    </Router>
), document.getElementById('root'));
