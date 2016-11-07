import { Router, Route, hashHistory } from 'react-router'; //引入路由所必须的要素；
import { render } from 'react-dom';
import React from 'react';
import Nav from './src/component/Nav';

/*render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/Repos" component={Repos} />
        <Route path="/About" component={About} />
    </Router>
), document.getElementById('app'));*/
render(
    <div>
        <Nav />
    </div>,
    document.getElementById('app')
);


