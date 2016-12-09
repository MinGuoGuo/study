/*
    一个事件注册多个监听；
*/

const events = require('events');
let event = new events.EventEmitter();

// 注册两个事件；
event.on('someEvent', (x, y) => {
    console.log('listen1', x + y);
});
event.on('someEvent', (x, y) => {
    console.log('listen2', x - y);
});

// 两个事件执行；
event.emit('someEvent', 10, 5);

// 输出结果
// listenl 15；
// listen2 5;
