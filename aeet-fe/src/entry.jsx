import React, { Component } from 'react';
import ReaactDom, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import configureStore from './modules/store/index.jsx';

import {
    Home,
    List,
    addStudent
} from './modules/containers';

const appStore = configureStore();

// 路由开始渲染；
render((
    <Provider store={appStore}>
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={List} />
                <Route path="/adduser" component={addStudent} />
                <Route path="/modifyUser/:id" component={addStudent}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));
