import { Router, Route, hashHistory, browserHistory , IndexRoute } from 'react-router'; //引入路由所必须的要素； 添加一个IndexRoute来设置默认页面；
//在上面引入了borwserHistory来代替hashHistory;
import { render } from 'react-dom';
import React from 'react';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Reops';
import Repo from './modules/Repo';
import Home from './modules/Home';


//在路由里面要添加一个新的IndexRoute
render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About} />
        </Route>
    </Router>
), document.getElementById('app'));


