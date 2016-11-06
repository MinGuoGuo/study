import { Router, Route, hashHistory, IndexRoute } from 'react-router'; //引入路由所必须的要素； 添加一个IndexRoute来设置默认页面；
import { render } from 'react-dom';
import React from 'react';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Reops';
import Repo from './modules/Repo';
import Home from './modules/Home';


//在路由里面要添加一个新的IndexRoute
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About} />
        </Route>
    </Router>
), document.getElementById('app'));


