import react from 'react';
import { render } from 'react-dom';
import Counter from './component/counter.jsx';
import { Provider } from 'react-redux';
import CounterContainer from './containers/CounterContainer.jsx';
import configureStore from './store/CounterStore.jsx';

/*直接将ui组件渲染出来；
render(
    <Counter />,
    document.getElementById('root')
);*/

//将UI组件和合并成容器组件；
const counterStore = configureStore();

render(
    <Provider store={counterStore}>
        <CounterContainer />
    </Provider>,
    document.getElementById('root')
);



