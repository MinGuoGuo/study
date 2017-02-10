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
// 测试用的咯
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(...arr);
//console.log(arr.push(4, 5, 6));
console.log(arr.push(...arr2));
console.log(arr);

let add = (x, y) => {
    return x + y;
}
console.log(add(...arr2));

render(
    <div>
        <Nav />
    </div>,
    document.getElementById('app')
);
