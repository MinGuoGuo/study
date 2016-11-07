import { Router, Route, hashHistory } from 'react-router'; //引入路由所必须的要素；
import { render } from 'react-dom';
import React from 'react';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Reops';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <Route path="/Repos" component={Repos} />
            <Route path="/About" component={About} />
        </Route>
    </Router>
), document.getElementById('app'));


