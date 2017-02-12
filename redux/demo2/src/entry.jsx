import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Counter from './containers/counter.jsx';
import counterContainer from './containers/counter.jsx';
import { configureStore } from './store/counterStore.jsx'
console.log(111);

//
const counterStore = configureStore();

// 开始渲染；
render(
    <Provider store={counterStore}>
        <Counter />
    </Provider>,
    document.getElementById('root')
);
