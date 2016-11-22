import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, HashHistory, browserHistory, IndexRoute } from 'react-router';
import Nav from './components/Nav/Nav';

/*
* 以下方法是直接将组件渲染出来；下面我们看看如何用路由的形式将组件渲染出来
* */
render(
    <Nav />,
    document.getElementById('root')
);
