const events = require('events');
let event = new events.EventEmitter();

/*
    1...event对象注册了一个事件；
    2...而在一秒以后通过emit触发这个事件；
    3...

*/
event.on('some_event', () => {
    console.log('some_event事件触发了');
});

setTimeout(() => {
        event.emit('some_event');
}, 1000);

console.log('事件已经触发');
