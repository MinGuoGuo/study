/*const EventEmitter = require('events').EventEmitter;
let event = new EventEmitter();*/

/*EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，
EventEmitter 支持 若干个事件监听器。
当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递*/
/*其实说白了EventEmitter就是一个事件监听器，上面可以绑定若干事件*/
/*而事件的触发就是由emit来操作的*/

/*以下示例是注册了一个事件监听器*/
/*
event.on('some_event', () => {
	console.log('some_event事件触发了');
});

setTimeout(() =>{
	event.emit('some_event');
}, 1000);
console.log('请稍后，程序一秒之后执行完毕！');*/

/*以下示为注册了多个事件监听器*/
/*
const events = require('events');
const event = new events.EventEmitter();
event.on('one', (arg1, arg2) => {
	console.log('listener1', arg1, arg2);
});
event.on('one', (arg1, arg2) => {
	console.log('listen2', '我的名字是：'+arg1+'我的年龄是：'+arg2);
});
event.emit('one', 'lbj', 31);*/

/*以下实例通过connection（连接）事件演示了EventEmitter类的应用*/
const events = require('events').EventEmitter;
const event = new events();
// 第一个监听器
let listener1 = () => {
    console.log('监听器 listener1 执行');
};
// 第二个监听器
let listener2 = () => {
    console.log('监听器 listener2 执行');
};
// 绑定connection事件，处理函数为listenerer
event.addListener('connection', listener1);
// 绑定connection事件， 处理函数listener2
event.addListener('connection', listener2);

const eventListeners = require('events').EventEmitter.listenerCount(event, 'connection');
console.log(typeof eventListeners);
console.log(eventListeners + '个监听器监听连接事件。');
//处理connection事件
event.emit('connection');

// 移除监绑定的listener1函数
event.removeListener('connection', listener1);
console.log('listener1  不再受到监听');

event.emit('connection');


