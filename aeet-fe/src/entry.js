import React, { Component } from 'react';
import ReaactDom, { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import {
    Home,
    List
} from './modules/containers';


// 路由开始渲染；
render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={List} />
        </Route>
    </Router>
), document.getElementById('root'));
